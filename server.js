const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = "mongodb+srv://LMass13:yTfLzbr6xcUPDtE@cluster0-tz32i.mongodb.net/test?retryWrites=true&w=majority"

mongoose
    .connect(db, {})
    .then( ()=> console.log("DB Connected"))
    .catch(err=> console.log(err));

const app = express();

//Configure body-parser
app.use(bodyParser.urlencoded({extended: false}));

// User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

//Post routes
const postRoutes = require('./routes/Post');
app.use('/posts', postRoutes);

//Homepage
app.post('/', (req,res) => res.json({
	msg: "Hello! What's Up, Amingo?"
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}`));