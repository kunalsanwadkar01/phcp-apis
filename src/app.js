const express = require("express");

require("./db/connection");
var cors = require("cors");

const Doctor = require("./models/doctors");
const User = require("./models/users");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("hello");
});
// Doctor Api
app.post("/doctors", (req, res) => {
  console.log(req.body);
  const doctor = new Doctor(req.body);
  res.send("hello doctors");
  doctor
    .save()
    .then(() => {
      console.log("data posted");
      res.status(201).send(doctor);
      return;
    })
    .catch((err) => {
      //res.status(400).send(err)
      console.log(err);
      return;
    });
});

app.get("/doctors", async (req, res) => {
  try {
    const doctorData = await Doctor.find();
    res.send(doctorData);
  } catch (err) {
    res.send(err);
  }
});

app.get("/doctors/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const doctorData = await Doctor.findById(_id);
    if (!doctorData) {
      return res.status(404).send();
    } else {
      return res.send(doctorData);
    }
  } catch (err) {
    res.send(err);
  }
});
// User Api
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  res.send("hello users");
  user
    .save()
    .then(() => {
      console.log("data posted");
      res.status(201).send(user);
      return;
    })
    .catch((err) => {
      //res.status(400).send(err)
      console.log(err);
      return;
    });
});
app.get("/users", async (req, res) => {
  try {
    const userData = await User.find();
    res.send(userData);
  } catch (err) {
    res.send(err);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await Doctor.findById(_id);
    if (!userData) {
      return res.status(404).send();
    } else {
      return res.send(userData);
    }
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`connection setup on port ${port}`);
});
