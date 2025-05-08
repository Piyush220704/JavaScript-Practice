// import express from 'express';
// const app = express();
// import { Client } from "pg";

//this will initialize the instance of Client like we did in const app = express();
//const PgClient = new Client("postgresql://neondb_owner:npg_FtmeRaYxPT13@ep-floral-leaf-a1wp31i2-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require")


//this is just another way to define the instance of client
// const PgClient2 = new Client({
//     host: "ep-floral-leaf-a1wp31i2-pooler.ap-southeast-1.aws.neon.tech",
//     user: "neondb_owner",
//     password: "npg_FtmeRaYxPT13",
//     port: 5432,
//     database: "neondb"
//     sslmode: "require"
// })

//.connect() -> this is an async function db is not present in local machine it will take time to work
// async function main(){
//     await PgClient.connect();
//     const response = await PgClient.query("SELECT * FROM users;");
//     console.log(response.rows);
// }

// main();

//lets do this with express

// PgClient.connect();
// app.use(express.json());

// app.post('/signup', async (req, res)=>{
//     const { username, email, password } = req.body;
//     const response = await PgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}','${email}','${password}');`); // this can lead to sql injection a better way is
//     const response = await PgClient.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`, [username, email, password]); //->send values as an array
//     res.send(response.rows);
// })
// app.listen(3000);


//TRANSACTIONS -> in case of any error we have to roll back the data so that the whole should occur or nothing 
// PgClient.query('BEGIN') -> this will start a transaction
// PgClient.query('COMMIT') -> this will commit the transaction


import express from "express"
import { Client } from "pg"
const app = express();
app.use(express.json());
const PgClient = new Client("postgresql://neondb_owner:npg_FtmeRaYxPT13@ep-floral-leaf-a1wp31i2-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require")
PgClient.connect();

app.post('/signup', async (req, res)=>{
    try {
        const {username, email, password, city, country, street, pincode} = req.body;
        const userSignupQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`
        await PgClient.query('BEGIN');
        const userSignupParameters = [username, email, password];
        const userSignupResponse = await PgClient.query(userSignupQuery, userSignupParameters);
        const user_id = userSignupResponse.rows[0].id;
        const addressParameters = [city, country, street, pincode, user_id];
        const addressResponse = await PgClient.query(addressQuery, addressParameters);
        await PgClient.query('COMMIT');
        res.json({
            message: "success",
        })
    } catch (error) {
        console.log(error);
    }
})


//writing two queries to fetch details of a single user -> can be done in one query using joins
// app.get('/metadata', async (req, res)=>{
//     const id = req.query.id;
//     const userQuery = `SELECT username, email FROM users WHERE id = $1;`;
//     const userParameters = [id];
//     const userQueryResponse = await PgClient.query(userQuery, userParameters);

//     const addressQuery = `SELECT * FROM addresses WHERE user_id = $1;`;
//     const addressParameters = [id];
//     const addressQueryResponse = await PgClient.query(addressQuery, addressParameters);

//     res.json({
//         user: userQueryResponse.rows,
//         address: addressQueryResponse.rows
//     })
// })

app.get('/metadata', async (req, res)=>{
    const id = req.query.id;
    const Query = `SELECT u.username, u.email, a.city, a.country, a.street, a.pincode FROM users u JOIN addresses a ON u.id = a.user_id WHERE u.id = $1;`;
    const QueryParameter = [id];
    const QueryResponse = await PgClient.query(Query, QueryParameter);

    res.json({
        user: QueryResponse.rows,
    })
})

//left join
app.get('/leftmetadata', async (req, res)=>{
    const id = req.query.id;
    const Query = `SELECT u.username, u.email, a.city, a.country, a.street, a.pincode FROM users u LEFT JOIN addresses a ON u.id = a.user_id WHERE u.id = $1;`;
    const QueryParameter = [id];
    const QueryResponse = await PgClient.query(Query, QueryParameter);

    res.json({
        user: QueryResponse.rows,
    })
})


app.listen(3000)