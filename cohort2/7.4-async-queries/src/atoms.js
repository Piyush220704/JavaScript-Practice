import { atom, selector } from "recoil";
import axios from "axios";
//async data queries
export const notifications = atom({
    key: "networkAtom",
    // default: {
    //     networks: 4, 
    //     jobs: 6, 
    //     messaging: 3, 
    //     notifications: 3
    // }

    //to make default values fetch from database we need to make it async but default value cant be async so we have to make it wrap inside a selector

    default: selector({
        key: "networkAtomSelector",
        get: async ()=>{
            // const res = await fetch("http://localhost:3001/notification");
            // const data = await res.json();
            // return data;
            await new Promise(r=> setTimeout(r, 5000)); //sleep for 5 seconds
            const res = await axios.get('http://localhost:3001/notification');
            return res.data
        }
    })

    // component pehle mount ho rha hei toh default value set ho jayega and default value hi async call se aa rha hei 
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.networks + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
}) 