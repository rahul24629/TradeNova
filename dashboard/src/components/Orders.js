import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react"; // ✅ import

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { getToken } = useAuth(); // ✅ Clerk token

  useEffect(() => {
    const fetchOrders = async () => {
      const token = await getToken(); // ✅ token নাও
      console.log("TOKEN:", token);

      const res = await axios.get("http://localhost:3002/allOrders", {
        headers: {
          Authorization: `Bearer ${token}` // ✅ header পাঠাও
        }
      });
      setAllOrders(res.data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-table">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>Qty</th>
            <th style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>Price</th>
            <th style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>Mode</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>{order.name}</td>
              <td style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>{order.qty}</td>
              <td style={{ textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>{order.price}</td>
              <td style={{ color: order.mode === "BUY" ? "#16a34a" : "#dc2626", fontWeight: "600", textAlign: "center", padding: "10px", border: "1px solid #ccc" }}>
                {order.mode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;