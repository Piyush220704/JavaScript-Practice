// Dashboard.jsx
import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Users from "../components/Users";
import Balance from "../components/Balance";
import axios from "axios";

function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/account/balance", {
          withCredentials: true, // ✅ Required for sending cookie
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance balance={balance} />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
