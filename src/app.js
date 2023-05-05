const express = require("express");

require("./db/connection");
var cors = require("cors");

const Doctor = require("./models/doctors");
const User = require("./models/users");
const Yoga = require("./models/yogaExercise");
const Tips = require("./models/tips");
const BodyweightExercise = require("./models/bodyweightExercise");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("hello");
});

//Tips API
app.get("/tips", async (req, res) => {
  try {
    const tipsData = await Tips.find();
    res.send(tipsData);
  } catch (err) {
    res.send(err);
  }
});
app.get("/tips/:disease", async (req, res) => {
  try {
    const disease = req.param("disease");
    console.log(disease);
    const tipsData = await Tips.find({ Disease_name: disease });
    if (!tipsData) {
      return res.status(404).send();
    } else {
      return res.send(tipsData);
    }
  } catch (err) {
    res.send(err);
  }
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

app.put("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updated_email = req.body.email;
    const updated_name = req.body.name;
    const updated_gender = req.body.gender;
    const updated_weight = req.body.weight;
    const updated_height = req.body.height;
    const updated_bmi = req.body.bmi;
    const updated_completed = req.body.completed;

    User.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          email: updated_email,
          name: updated_name,
          gender: updated_gender,
          weight: updated_weight,
          height: updated_height,
          bmi: updated_bmi,
          completed: updated_completed,
        },
      },
      { new: true },
      (err, data) => {
        if (data == null) {
          res.send("nothing found");
        } else {
          res.send(data);
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
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
    const userData = await User.findById(_id);
    if (!userData) {
      return res.status(404).send();
    } else {
      return res.send(userData);
    }
  } catch (err) {
    res.send(err);
  }
});

// yoga
app.get("/yoga", async (req, res) => {
  try {
    const yogaData = await Yoga.find();
    res.send(yogaData);
  } catch (err) {
    res.send(err);
  }
});

// body weight exercise

app.get("/bodyweightexercise", async (req, res) => {
  try {
    const bodyweightExerciseData = await BodyweightExercise.find();
    res.send(bodyweightExerciseData);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`connection setup on port ${port}`);
});
