const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport')

const db = keys.mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=> console.log("DB Connected"))
    .catch(err=> console.log(err));


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Init passport
app.use(passport.initialize());
require('./config/passport')(passport);

//Configure body-parser
app.use(bodyParser.urlencoded({extended: false}));

// User routes
const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

//Post routes
const postRoutes = require('./routes/Post');
app.use('/posts',passport.authenticate('jwt',{session: false}), postRoutes);

//Homepage
app.get('/', (req,res) => res.json({
	msg: "Hello! What's Up, Amingo?"
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}`));