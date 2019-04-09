const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const session = require('express-session'); //express-session import. You must NPM install express-session --save
const cookieParser = require('cookie-parser'); //cookie-parser import. You must NPM install cookie-parser --save
const uuid = require('uuid/v4');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // a 'strategy' to use for passport
const path = require('path');
const port = process.env.PORT | 4040;
const jsonFile = __dirname +'/userList.json';
const users = [
    {id: 0, username: 'jason', password: 'abc', email: 'jason@example.com'},
    {id: 1, username: 'admin', password: 'password', email: 'bossman@example.com'}
];
const isAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        console.log('isAuthenticated');
        return next();
    }
    console.log('NOT Authenticated');
    res.redirect('/login');
};

function findByUsername(username, callback) {
    for (let i = 0, len = users.length; i < len; i++) {
        const user = users[i];
        if (user.username === username) {
            return callback(null, user);
        }
    }
    return callback(null, null);
}

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        const invalidLoginMessage = "Invaild user name and/or password.";
        findByUsername(username,  (err, user) =>{
            if (err) {
                return done(err);
            }
            if (!user) {
                console.log(`Missing user object: ${invalidLoginMessage}`);
                return done(null, false, {message: invalidLoginMessage});
            } else {
                if (user.password === password) {
                    console.log('valid username and password');
                    return done(null, user);
                } else {
                    console.log(`User name: ${user.username} Password: ${user.password} :: ${password} valid username but password is wrong`);
                    return done(null, false, {message: invalidLoginMessage});
                }
            }
        });
    }
));
passport.serializeUser((user, done)=>{
    console.log(`saving user to session: ${JSON.stringify(user)}`);
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    console.log(`retrive user -${JSON.stringify(id)}- JSON.stringify(${users[id]})`);
    const user = users[id];
    done(null, user);
});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', express.static('public')); // set to display index.html could also use sendFile
app.use(bodyParser.json()); // use for JSON
app.use(bodyParser.urlencoded({extended: false})); // use for forms
app.use('/recipes', express.static('public'));
app.use(express.static('public'));
app.use(cookieParser('cohort6'));
app.use(session({
    genid: (req) => {
        console.log('Inside session middleware genid function');
        console.log(`Request object sessionID from client: ${req.sessionID}`);
        return uuid()
    },
    store: new FileStore(),
    secret: 'cohort6',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

const mainPath = __dirname + '/public/main.html';
app.get('/main', (req, res, next)=>{
    passport.authenticate('local',  (err, user, info) =>{
        console.log(err, user, info);
        if (user) {
            res.sendFile(mainPath);
        }
        else {
            res.redirect('/tryagain');
        }
    })(req, res, next);
});

app.post('/userManager', (req, res)=>{

    let data = {};
    data.users = [];
    let userID = req.body.userID;
    let name = req.body.name;
    let userEmail = req.body.userEmail;
    let age = req.body.age;
    let timestamp = new Date();
    let json = JSON.stringify(data);

    fs.readFile('userList.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        let id = data.users.length + 1;
        data.users.push({id:id, userID: userID, name:name, userEmail: userEmail, age: age, timestamp: timestamp});
        json = JSON.stringify(data);
        fs.writeFile(jsonFile, json, 'utf8', (err)=>{
            if (err) throw err;
            res.redirect('/user');
        });
    });
});
app.get('/user', (req, res) => {

    fs.readFile('userList.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        let users = data.users;
        //{id:id, userID: userID, name:name, userEmail: userEmail, age: age, timestamp: timestamp}
        res.render('user', {
                users: users
        });


    });
});

const tryagainPath = __dirname + '/public/tryagain.html';

app.get('/tryagain', (req, res) =>{
    res.sendFile(tryagainPath);
});

app.get('/edit/:UserName', (req,res)=>{
    let id, userID, userName, userEmail, age, timestamp;
    fs.readFile('userList.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        let users = data.users;
        for (let i = 0; i < users.length; i++){
            if (users[i].name === req.params.UserName){
                id = users[i].id;
                userID = users[i].userID;
                userName = users[i].name;
                userEmail = users[i].userEmail;
                age = users[i].age;
                timestamp = users[i].timestamp;
            }
        }
        //{id:id, userID: userID, name:name, userEmail: userEmail, age: age, timestamp: timestamp}
        res.render('userInfo', {
            id: id,
            userID: userID,
            userName: userName,
            userEmail: userEmail,
            age: age,
            timestamp: timestamp,
        });
    });
});

app.post('/editUser', (req,res)=>{

    let data = {};
    data.users = [];
    let userID = req.body.userID;
    let name = req.body.name;
    let userEmail = req.body.userEmail;
    let age = req.body.age;
    let id = req.body.id;
    let timestamp = new Date();
    let json = JSON.stringify(data);
    fs.readFile('userList.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        console.log(id, userID, name, userEmail, age);
        data.users.splice((id-1), 1, {id:id, userID: userID, name:name, userEmail: userEmail, age: age, timestamp: timestamp});
        json = JSON.stringify(data);
        fs.writeFile(jsonFile, json, 'utf8', (err)=>{
            if (err) throw err;
            res.redirect('/user');
        });
    });
});

app.get('/delete/:UserName', (req,res)=>{
    let id, userID, userName, userEmail, age, timeStamp;
    fs.readFile('userList.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        let users = data.users;
        for (let i = 0; i < users.length; i++){
            if (users[i].name === req.params.UserName){
                id = users[i].id;
                userID = users[i].userID;
                userName = users[i].name;
                userEmail = users[i].userEmail;
                age = users[i].age;
                timeStamp = users[i].timeStamp;
            }
        }
        //{id:id, userID: userID, name:name, userEmail: userEmail, age: age, timestamp: timestamp}
        res.render('confirmDelete', {
            id: id,
            userID: userID,
            userName: userName,
            userEmail: userEmail,
            age: age,
        });
    });
});

app.post('/deleteUser', (req,res)=>{

    let data = {};
    data.users = [];
    let userName = req.body.userName;
    console.log(userName);
    let json = JSON.stringify(data);
    fs.readFile('userList.json', 'utf8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        let users = data.users;
        for (let i = 0; i < users.length; i++){
            if (users[i].name === userName){
                data.users.splice(i, 1);
            }
        }
        json = JSON.stringify(data);
        fs.writeFile(jsonFile, json, 'utf8', (err)=>{
            if (err) throw err;
            res.redirect('/user');
        });
    });
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
