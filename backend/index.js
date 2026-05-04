require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

require("./config/passport.js");

const { HoldingModel } = require("./models/HoldingModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// ✅ CORS fix
app.use(cors({
  origin: ["https://trade-nova-2m84.vercel.app","https://trade-nova-yjpu.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"], // ✅ add করা হয়েছে
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(ClerkExpressWithAuth()); // ✅ cookieParser এর পরে

app.use("/auth", authRoute);

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const userId = req.auth?.userId; // ✅ optional chaining
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingOrder = await OrdersModel.findOne({ name, userId });

    if (existingOrder) {
      existingOrder.qty += Number(qty);
      existingOrder.price += Number(qty) * Number(price);
      await existingOrder.save();
      return res.status(200).json({ message: "Order updated successfully!" });
    } else {
      const newOrder = new OrdersModel({ name, userId, qty, price, mode });
      await newOrder.save();
      return res.status(201).json({ message: "Order placed successfully!" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/sellOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const userId = req.auth?.userId; // ✅ userId নাও
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingOrder = await OrdersModel.findOne({ name, userId }); // ✅ userId দিয়ে filter

    if (!existingOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    const newOrder = new OrdersModel({ name, userId, qty, price, mode });
    await newOrder.save();
    return res.status(200).json({ message: "Sell done!" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const allOrders = await OrdersModel.find({ userId });
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));