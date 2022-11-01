const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const  {notFound,errorHandler} = require("./middlewares/errorMiddleware");
const colors = require("colors")
const app = express();
dotenv.config();

connectDB();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use('/api/chat', chatRoutes)
app.use("/api/message", messageRoutes)
//  --------Deployment End ------------
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server Started running on port ${PORT}`.yellow.bold));