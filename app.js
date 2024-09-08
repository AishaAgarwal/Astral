const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const redis = require('redis');

// Import routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const inventoryRoutes = require('./routes/inventoryRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const spaceStationRoutes = require('./routes/spaceStationRoutes');
const goodsRoutes = require('./routes/goodsRoute');

const app = express();

const PORT = process.env.port || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use("/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/trade", tradeRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/shipment', shipmentRoutes);
app.use('/notifications', notificationRoutes);
app.use('/locations', spaceStationRoutes);
app.use('/goods', goodsRoutes);

// Redis setup
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

client.on('error', (err) => {
  console.log('Redis error:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the app");
});

// Check if WebSocket is enabled (not in production)
// const isWebSocketEnabled = process.env.NODE_ENV !== 'production';

// if (isWebSocketEnabled) {
//   const http = require('http');
//   const socketIo = require('socket.io');

//   const server = http.createServer(app);
//   const io = socketIo(server);

//   io.on('connection', (socket) => {
//     console.log('A user connected');
//   });

//   // Listen on a different port for WebSockets
//   server.listen(8082, () => {
//     console.log("WebSocket server is listening on ws://localhost:8082");
//   });
// } else {
  // Normal HTTP server logic for production
  app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
  });

