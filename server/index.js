const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const pharmacyModel = require("./models/pharmacy.js")
const patientModel = require("./models/patient.js")
const doctorModel = require("./models/doctor.js")
const adminModel = require("./models/admin.js")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://marcoronquillo:ronquillomarco@cluster.i4nif.mongodb.net/patient");

// ** PHARMACY ROUTES ** //

app.get("/medicines", (req, res) => {
    pharmacyModel.find()
        .then(medicines => res.json(medicines))
        .catch(err => res.status(500).json(err));
});

app.get("/medicine/:id", (req, res) => {
    const { id } = req.params;
    pharmacyModel.findById(id)
        .then(medicine => {
            if (medicine) {
                res.json(medicine);
            } else {
                res.status(404).json("Medicine not found");
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post("/medicines", (req, res) => {
    pharmacyModel.create(req.body)
        .then(medicine => res.json(medicine))
        .catch(err => res.status(500).json(err));
});

app.put("/medicines/:id", (req, res) => {
    const { id } = req.params;
    pharmacyModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedMedicine => res.json(updatedMedicine))
        .catch(err => res.status(500).json(err));
});

app.delete("/medicines/:id", (req, res) => {
    const { id } = req.params;
    pharmacyModel.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: 'Medicine deleted successfully' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// ** PATIENTS ROUTES ** // 

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    patientModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json(user); // Send the user object on success
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.status(500).json(err));
});

app.get("/patient/:id", (req, res) => {
    const { id } = req.params;
    patientModel.findById(id)
        .then(patient => {
            if (patient) {
                res.json(patient);
            } else {
                res.status(404).json("Patient not found");
            }
        })
        .catch(err => res.status(500).json(err));
}); 

app.get("/patients", (req, res) => {
    patientModel.find()
        .then(patients => {
            res.json(patients);
        })
        .catch(err => res.status(500).json(err));
});

app.post("/patients", (req, res) => {
    patientModel.create(req.body)
        .then(patient => res.json(patient))
        .catch(err => res.status(500).json(err));
});

app.put("/patients/:id", (req, res) => {
    const { id } = req.params;
    patientModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedPatient => res.json(updatedPatient))
        .catch(err => res.status(500).json(err));
});

app.delete('/patients/:id', (req, res) => {
    const { id } = req.params;
    patientModel.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: 'Patient deleted successfully' }))
        .catch((err) => res.status(500).json({ error: err.message }));
});

// ** DOCTORS ROUTES ** //

app.post("/doctorlogin", (req, res) => {
    const { email, password } = req.body;
    doctorModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
        .catch(err => res.status(500).json(err));
});

app.get("/doctors", (req, res) => {
    doctorModel.find()
        .then(doctors => {
            res.json(doctors);
        })
        .catch(err => res.status(500).json(err));
});

app.get("/doctor/:id", (req, res) => {
    const { id } = req.params;
    doctorModel.findById(id)
        .then(doctor => {
            if (doctor) {
                res.json(doctor);
            } else {
                res.status(404).json("Doctor not found");
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post("/doctors", (req, res) => {
    doctorModel.create(req.body)
        .then(doctor => res.json(doctor))
        .catch(err => res.status(500).json(err));
});

app.put("/doctors/:id", (req, res) => {
    const { id } = req.params;
    doctorModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedDoctor => res.json(updatedDoctor))
        .catch(err => res.status(500).json(err));
});

app.delete('/doctors/:id', (req, res) => {
    const { id } = req.params;
    doctorModel.findByIdAndDelete(id)
        .then(() => res.status(200).json({ message: 'Doctor deleted successfully' }))
        .catch((err) => res.status(500).json({ error: err.message }));
});

// ** ADMIN ROUTES ** //

app.post("/adminlogin", (req, res) => {
    const {email, password} = req.body;
    adminModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

// ** REGISTER ROUTES ** //

app.post("/register", (req, res) => {
    patientModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})



app.listen(3001, () => {
    console.log("server is running")
})