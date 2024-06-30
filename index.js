const express = require("express");

// imported sequelize instance from path ./seq

const sequelize = require("./seq");

// importing two Collection/Table (User and office) of schema User and Mywork.

const User = require("./User");
const Mywork = require("./Mywork");

const app = express();

//used dotenv module for secreate data storage
require("dotenv").config();

// making database connection using sequelize instance and sync(), it returns promise
sequelize
  .sync()
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const myPort = process.env.PORT || 9000;

app.use(express.json());

app.post("/signup", async (req, res) => {
  //using schema name ==> User and create() iam creating data into database
  await User.create(req.body);
  res.send("User created successfully");
});

app.post("/office", async (req, res) => {
  //using schema name ==> Mywork and create() iam creating data into database

  await Mywork.create(req.body);
  res.send("User created successfully");
});

app.get("/mydata", async (req, res) => {
  //using schema name ==> Mywork and create() iam creating data into database

  const data = await Mywork.findAll();
  res.send(data);
});

app.listen(myPort, () => {
  console.log(`hi i am on port number ${myPort}`);
});
