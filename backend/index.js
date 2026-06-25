const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/admin");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  city: String
});

// Model -> employees collection
const Employee = mongoose.model(
  "Employee",
  EmployeeSchema,
  "employees"
);

app.get("/employees", async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});