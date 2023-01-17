const express = require('express');
require('./db/connection');

const Doctor = require('./models/doctors'); 

const app = express();
const port= process.env.PORT || 8000

app.use(express.json());

app.get('',(req,res)=> {
    res.send('hello');
})

app.post('/doctors',(req,res)=>{
    
    console.log(req.body)
    const doctor =new Doctor(req.body)
    res.send('hello doctors');
    doctor.save().then(()=>{
        console.log("data posted")
        res.status(201).send(doctor)
    }).catch((err)=>{
        res.status(400).send(err)
        console.log(err)
    });
    
} )

app.get('/doctors', async (req,res)=>{
    try{
       const doctorData= await Doctor.find()
       res.send(doctorData)
    }catch(err){
            res.send(err)
        }
    
})

app.get('/doctors/:id', async (req,res)=>{
    try{
        const _id = req.params.id;
        const doctorData= await Doctor.findById(_id);
        if(!doctorData){
            return res.status(404).send();
        }else{
            res.send(doctorData)
        }
        
    }catch(err){
            res.send(err)
        }
    
})

app.listen(port,()=>{
    console.log(`connection setup on port ${port}`); 
}) 