const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy; // a 'strategy' to use for passport
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;

// this is our most "Hacker Proof" users database ;p
// We need to swap this out with a real DB later, but for now this will do!
const GOOGLE_CLIENT_ID = '112717007549-qt565rmefm172bplf4hd1q4lovfd495v.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'ay7UhivvwkryDSUENA7zn4QE';

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

passport.use(new Strategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: `http://127.0.0.1:${port}/auth/google/callback`, // update this according to your domain
        passReqToCallback: true
    },
    (request, accessToken, refreshToken, profile, done) => {
        findOrCreate({ googleId: profile.id }, (err, user) =>{
            return done(err, user);
        });
    }
));

function findOrCreate(username, callback) {
    for (let i = 0, len = users.length; i < len; i++) {
        const user = users[i];
        if (user.username === username) {
            // callback takes arguments (error,user)
            return callback(null, user);
        }else{
            //add this user
            console.log(`new user: ${username}`);
            let newuser = {};
            newuser.id = 3;
            newuser.username = username;

            users.push(newuser);
            return callback(null, newuser);
        }
    }
}

// // define which strategy passport uses
// passport.use(new LocalStrategy({
//         // this maps the field names in the html form to the passport stuff
//         usernameField: 'username',
//         passwordField: 'password'
//     },
//     (username, password, done) => {
//         const invalidLoginMessage = "Invaild user name and/or password.";
//         // replace this with a DB QUERY function later
//         findByUsername(username,  (err, user) =>{
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 console.log(`Missing user object: ${invalidLoginMessage}`);
//                 return done(null, false, {message: invalidLoginMessage});
//             } else {
//                 if (user.password === password) {
//                     console.log('valid username and password');
//                     return done(null, user);
//                 } else {
//                     console.log(`User name: ${user.username} Password: ${user.password} :: ${password} valid username but password is wrong`);
//                     return done(null, false, {message: invalidLoginMessage});
//                 }
//             }
//         });
//     }
// ));
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
// configure app
app.use('/', express.static('public')); // set to display index.html could also use sendFile
app.use(cookieParser());
app.use(express.urlencoded({extended: false})); // use for forms
app.use(express.json()); // use for JSON
app.use(session({
    secret: 'cohort6t',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',   //'/auth/google/success'
        failureRedirect: '/login'  // or you could redirect it to '/auth/google/failure'
    }));

app.post('/login', (req, res, next) =>{
    passport.authenticate('local',  (err, user, info) =>{
        console.log(err, user, info);
        if (user) {
            //console.log('Here Passport');
            // if Authenticated
            //for debug purpose print out user info
            //res.send({user: user});
            //res.redirect('/welcome.html');
            //
            //this login is make it available by passport
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
            console.log(`req.user: ${JSON.stringify(req.user)}`);
            req.login(user, (err)=>{
                console.log(`After LOGIN: req.session.passport: ${JSON.stringify(req.session.passport)}`);
                console.log(`req.user: ${JSON.stringify(req.user)} \n ${req.isAuthenticated()}`);
                res.sendFile(path.join(__dirname, 'protected', 'welcome.html'));
            });

        } else {
            //for debug purpose print out the login info
            //res.send({error: err, info: info});
            //res.redirect('/tryagain.html');
            res.redirect('/tryagain');
        }
    })(req, res, next);
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
})

app.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

app.get('/protected/:pages', isAuthenticated, function(req, res){
    //res.send(`You are authorized.  This is protected. ${req.params.pages}`);
    res.sendFile(path.join(__dirname, 'protected', req.params.pages));
});

app.get('/showcars', isAuthenticated, function(req, res){
    let carJsonFilePath = path.join(__dirname, 'protected', 'cars.json');
    let data = fs.readFileSync(carJsonFilePath, 'utf8');
    console.log(`return json file`);
    res.json(JSON.parse(data));
});
app.listen(port, () => {
    console.log(`Passport Local Strategy example app listening on port ${port}!`)
});


