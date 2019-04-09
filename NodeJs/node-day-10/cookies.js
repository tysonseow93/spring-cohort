const express = require('express'); //express import. You must NPM install express --save
const cookieParser = require('cookie-parser'); //cookie-parser import. You must NPM install cookie-parser --save
const session = require('express-session'); //express-session import. You must NPM install express-session --save
const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: 'false',
    saveUninitialized: 'false',
    cookie: {   maxAge: 90000,    }
}));
app.use((req,res,next)=>{
    console.log('hello world!');
    next();
});
//  ROUTER
// let myRouter = express.Router();
// app.use('/user', myRouter);
// //  http://localhost:3000/user/editUser
// myRouter.get('/editUser', (req, res)=>{
//
//     res.cookie(  'mycookie', 'myvalue'  );
//     res.cookie(  'rememberMe', 1, {   maxAge: 90000, httpOnly: true    }  );
//     console.log(req.cookies);
//     res.send('edit user page');
//
// });
// //  http://localhost:3000/user/newUser
// myRouter.get('/newUser', (req, res)=>{
//
//     res.cookie(  'mycookie', 'myvalue'  );
//     res.cookie(  'rememberMe', 1, {   maxAge: 90000, httpOnly: true    }  );
//     console.log(req.cookies);
//     res.send('new user page');
//
// });
app.get('/', (req, res)=>{
    res.cookie(  'mycookie', 'myvalue'  );
    // res.cookie(  'rememberMe', 1, {    expires: new Date(Date.now() + 90000), httpOnly: true, secure: true  }  );
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

app.listen(3000, () =>{
    'listening on port 3000';
});