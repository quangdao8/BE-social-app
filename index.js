const express = require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv") 
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")
const cors = require("cors")


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("err: 22", err);
  });


// middleware
app.use(cors());
app.use(express.json());


app.use("/", (req, res) => {
  res.send("Hi Đảo");
});



app.listen(8000, () => {
  console.log("Server is running");
});
