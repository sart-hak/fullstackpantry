const express = require('express');
const dotenv = require('dotenv');
const colors = require("colors");
const connectDB = require("./config/db");
const blogModel = require('./Models/blogModel');
const adminModel = require('./Models/adminModel');
const contactModel = require('./Models/contactModel');
const testimonialModel = require('./Models/testimonialModel');
const cors = require('cors');


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/blogs', (req, res) => {
    blogModel.find({}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    }).sort({"updatedAt":-1});
});


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    try {
        blogModel.findById(id, (err, result) => {
            console.log(result)
            res.json(result);                
        });

    } catch (error) {
        console.log(error);
    }
});


app.post("/admin",(req,res)=>{
    const {username,password} =req.body;
    adminModel.findOne({username:username},(err,admin)=>{
        console.log(admin)

        if(admin){
            if(password === admin.password){
                console.log(admin.password);
                res.send({message:"login sucess",admin:admin})
            }else{
                console.log(err);
                res.send({message:"wrong credentials"})
            }
        }else{
            res.send("not register")
        }
    })
});

app.post('/createblog', async (req,res) => {
    const blog = req.body;
    const newBlog = new blogModel(blog);
    await newBlog.save();
    console.log(newBlog);
    
    res.json(blog);
})

app.get('/getcontact', (req, res) => {
    contactModel.find({}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    }).sort({"updatedAt":-1});
});

app.post('/contact', async (req,res) => {
    const contact = req.body;
    const newContact = new contactModel(contact);
    try {
        await newContact.save();
        console.log(newContact);
        res.json(contact);
    } catch (error) {
        console.log(error)
    }
})



//testimonial routes

app.get('/gettestimonials', (req, res) => {
    testimonialModel.find({}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    }).sort({"updatedAt":-1});
});

app.post('/createtestimonial', async (req,res) => {
    const testimonial = req.body;
    const newtestimonial = new testimonialModel(testimonial);
    try {
        await newtestimonial.save();
        console.log(newtestimonial);
        res.json(testimonial);
    } catch (error) {
        console.log(error)
    }
})

app.delete("/testimonial/delete/:id", async (req,res)=> {
    const id = req.params.id;
    console.log(id);
    console.log(typeof(id))
    if (typeof(id) === "string") {
        try {
            await testimonialModel.findByIdAndRemove(id);
            res.send("item deleted");
            
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("failed");
    }
})

app.delete("/delete/:id", async (req,res)=> {
    const id = req.params.id;
    console.log(id);
    console.log(typeof(id))
    if (typeof(id) === "string") {
        try {
            await blogModel.findByIdAndRemove(id);
            res.send("item deleted");
            
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("failed");
    }
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server Started On Port ${PORT}`.yellow.bold));