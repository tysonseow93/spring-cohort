const express = require('express');
const path = require('path');
const values = [
    {userName: 'Tyson', email:'tyson@gmail.com'},
    {userName: 'Bob', email:'bob@gmail.com'},
    {userName: 'Mike', email:'mike@gmail.com'}
    ];
const list = [
    'apple',
    'orange',
    'pear'
];
let date = new Date();
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req,res)=>{
    res.render('index',
        {
            title: 'Sweet title',
            message: 'This is a message!',
            partial:  'cool!',
            values: values,
            date: date,
            list: list
        });
});

app.get('/fruits/:fruitName', (req,res)=>{
    // res.end(`You click on ${req.params.fruitName}`);
    res.render('test', {fruit: req.params.fruitName})
});


app.listen(3000, ()=>{
    console.log('listening on port 3000');
});