//require("dotenv").config()

const express = require("express");

const mongoose = require("mongoose");

const route=require("./Routes/route")

const app = express();

app.use(express.json());

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://group4:group4@cluster0.dknd8jj.mongodb.net/test",
process.env.URL, { useNewUrlParser: true })

  .then(() => console.log("MongoDb is Connected"))

  .catch((err) => console.log(err));

  app.use("/",route);

  app.listen(process.env.PORT || 3000, function() {

    console.log('Express App is Running on PORT' + (process.env.PORT || 3000));

  })