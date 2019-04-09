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
const port = process.env.PORT | 3000;
const jsonFile = __dirname +'/recipeLog.json';
const users = [
    {id: 0, username: 'jason', password: 'abc', email: 'jason@example.com'},
    {id: 1, username: 'kate', password: '123', email: 'kate@example.com'}
];
// helper function for looking up a user
// Yes, we will replace this with a QUERY loookup later.
function findByUsername(username, callback) {
    for (let i = 0, len = users.length; i < len; i++) {
        const user = users[i];
        if (user.username === username) {
            // callback takes arguments (error,user)
            return callback(null, user);
        }
    }
    return callback(null, null);
}

// define which strategy passport uses
passport.use(new LocalStrategy({
        // this maps the field names in the html form to the passport stuff
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        const invalidLoginMessage = "Invaild user name and/or password.";
        // replace this with a DB QUERY function later
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
//Save the user id in session
//could save the user object, choose to only save the user id
passport.serializeUser((user, done)=>{
    console.log(`saving user to session: ${JSON.stringify(user)}`);
    done(null, user.id);
});

//Remove the user id out from the session
passport.deserializeUser((id, done) =>{
    //should check if this is a valid user id
    //then using done to remove the user from session
    console.log(`retrive user -${JSON.stringify(id)}- JSON.stringify(${users[id]})`);
    const user = users[id];
    done(null, user);
});

const app = express();
// const recipeFile = __dirname +'/recipeLog.txt';
let counter = 0;
app.use('/', express.static('public')); // set to display index.html could also use sendFile
app.use(bodyParser.json()); // use for JSON
app.use(bodyParser.urlencoded({extended: false})); // use for forms
app.use('/recipes', express.static('public'));
app.use(express.static('public'));
app.use(cookieParser('cohort6'));
app.use(session({
    genid: (req) => {
        console.log('Inside session middleware genid function')
        console.log(`Request object sessionID from client: ${req.sessionID}`)
        return uuid() // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'cohort6',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/addRecipe', (req, res, next)=>{

    passport.authenticate('local',  (err, user, info) =>{
        console.log(err, user, info);
        if (user) {
            let data = {};
            data.recipes = [];
            let recipe = req.body.recipe;
            let user = req.body.user;
            let timestamp = new Date();
            let json = JSON.stringify(data);

            // //   fs append text to file
            // let logItem = `${timestamp}||${user}||${recipe}\n`;
            //
            // //   does the same thing as the fs append below.
            // //     fs.appendFileSync(recipeFile, logItem);
            // //     res.sendFile(recipeFile);
            //
            //      fs.appendFile(recipeFile, logItem, 'utf8', (err)=>{
            //           if (err) throw err;
            //           res.sendFile(recipeFile);
            //      })

            fs.readFile('recipeLog.json', 'utf8', (err, data) => {
                if (err) throw err;
                data = JSON.parse(data); //now it an object
                let id = data.recipes.length + 1;
                data.recipes.push({id: id, timestamp: timestamp, recipe: recipe, user: user}); //add some data
                json = JSON.stringify(data); //convert it back to json
                fs.writeFile(jsonFile, json, 'utf8', (err)=>{
                    if (err) throw err;
                    res.sendFile(jsonFile);
                }); // write it back
            });
        }
        else {
            res.redirect('/tryagain');
        }
    })(req, res, next);

});

app.get('/', (req, res)=>{
    res.cookie(  'mycookie', 'myvalue'  );
    res.cookie(  'rememberMe', 1, {   maxAge: 90000, httpOnly: true, secure: true    }  );
    console.log(req.cookies);
    res.send('hello world');
});
app.get('/views', (req,res)=>{
    if(req.session.views){
        req.session.views++;
        res.write(`<p>views ${req.session.views}</p>`);
        res.write(`<p>expires in ${req.session.cookie.maxAge/1000}'s seconds</p>`)

    }
    else{
        req.session.views = 1;
        res.end('Welcome to the session demo, refresh now!');
    }
});

const tryagainPath = __dirname + '/public/tryagain.html';
app.get('/tryagain', (req, res) =>{
    res.sendFile(tryagainPath);
});

const isAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        console.log('isAuthenticated');
        return next();
    }
    console.log('NOT Authenticated');
    res.redirect('/login');
};

app.get('/login', (req, res)=>{
    console.log(`get login :${req.isAuthenticated()}`);
    res.redirect('/');
});
app.get('/protected', isAuthenticated, function(req, res){
    res.send('You are authorized.  This is protected.');
});
app.get('/showAllRecipes', isAuthenticated, (req, res)=>{
    res.sendFile('path to the all recipes json file');
});

app.get('/time', (req, res) =>{
    let d = new Date();
    console.log(d);
    res.send(d);
});

app.get('/file', (req, res) =>{
    res.sendFile(__dirname + '/chowder.txt');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

