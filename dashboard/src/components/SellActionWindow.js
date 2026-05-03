import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useAuth } from "@clerk/clerk-react"; // ✅ শুধু এটাই
import "./BuyActionWindow.css";
import { toast } from "react-toastify";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeSellWindow } = useContext(GeneralContext);
  const { getToken } = useAuth(); // ✅ hook থেকে নাও

  const handleSellClick = async () => {
  try {
    const token = await getToken();

    await axios.post("http://localhost:3002/sellOrder",
      {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    toast.success("Sell order placed successfully!"); // ✅
    closeSellWindow();

  } catch (error) {
    if (error.response?.status === 404) {
      toast.error("Invalid! You don't own this stock."); // ✅
    } else if (error.response?.status === 401) {
      toast.error("Please login first!"); // ✅
    } else {
      toast.error("Something went wrong!"); // ✅
    }
  }
};

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button className="btn btn-red" onClick={handleSellClick}>Sell</button>
            <button className="btn btn-grey" onClick={closeSellWindow}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;