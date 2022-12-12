require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

//Need DB_URL in .env file
connectDB();

//puts parsed data in req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//allows requests from frontend
app.use(cors({
    origin: "/",
    credentials: true
  }))

//Routes
app.use("/api/users", require("./routes/User.js"));


app.get("/", (req, res) => {
    res.send("test");
})

app.listen(PORT, ()=>{console.log(`Server Started on PORT: ${PORT}`)});
