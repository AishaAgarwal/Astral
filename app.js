const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const redis = require('redis');

// import routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const tradeRoutes = require("./routes/tradeRoutes");
const inventoryRoutes = require('./routes/inventoryRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const spaceStationRoutes = require('./routes/spaceStationRoutes');
const goodsRoutes = require('./routes/goodsRoute');
const http = require('http');
const socketIo = require('socket.io');


const app = express();

const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.port || 3000;

//middleware
app.use(cors());

app.use(bodyParser.json());

//use routes
app.use("/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/trade", tradeRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/shipment', shipmentRoutes);
app.use('/notifications', notificationRoutes);
app.use('/locations', spaceStationRoutes);
app.use('/goods', goodsRoutes);

require('./socket')(io);

const client = redis.createClient({
  host: '127.0.0.1',
  port : 6379
});

client.on('error', (err) => {
  console.log('Redis error:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

// default route
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req,res) => {
  res.send('API running');
})


//start the server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
