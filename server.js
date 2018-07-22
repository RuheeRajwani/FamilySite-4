// server.js
// load the things we need
const db = require('./db');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const request = require('request');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'))

// use res.render to load up an ejs view file

// index page 

app.get('/', function (req, res) {
    let selectedMenu = getSelectedMenu("home");
    res.render('pages/', {menu: selectedMenu});;
});


app.get('/index', function (req, res) {
    let selectedMenu = getSelectedMenu("home");
    res.render('pages/index', {menu: selectedMenu});

});
app.get('/asif', function (req, res) {
    let selectedMenu = getSelectedMenu("asif");
    res.render('pages/asif', {menu: selectedMenu});
});
app.get('/contactUs', function (req, res) {
    let selectedMenu = getSelectedMenu("contactUs");
    res.render('pages/contactUs', {menu: selectedMenu});
});
app.get('/grandparents', function (req, res) {
    let selectedMenu = getSelectedMenu("grandparents");
    res.render('pages/grandparents', {menu: selectedMenu});
});
app.get('/laila', function (req, res) {
    let selectedMenu = getSelectedMenu("laila");
    res.render('pages/laila', {menu: selectedMenu});
});
app.get('/ruhee', function (req, res) {
    let selectedMenu = getSelectedMenu("ruhee");
    res.render('pages/ruhee', {menu: selectedMenu});
});
app.get('/vacation', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/vacation', {menu: selectedMenu});
});

app.get('/orlando', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/orlando', {menu: selectedMenu});
});
app.get('/cancun', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/cancun', {menu: selectedMenu});
});
app.get('/hawaii', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/hawaii', {menu: selectedMenu});
});
app.get('/italy', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/italy', {menu: selectedMenu});;
});
app.get('/karachi', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/karachi', {menu: selectedMenu});;
});
app.get('/maine', function (req, res) {
    let selectedMenu = getSelectedMenu("vacation");
    res.render('pages/maine', {menu: selectedMenu});;
});


app.post('/contactUsSubmit', function (req, res) {
    let contact = {
        fname: req.body.firstName,
        lname: req.body.lastName,
        familyMember: req.body.familyMember,
        message: req.body.message
    }
    let selectedMenu = getSelectedMenu("contactUs");
    
    db.addContact(contact
        , (error, result) => {
            if (error) {
                console.log('Error inserting to db ' + error);
                res.render('pages/contactUsSubmit', { menu: selectedMenu, contact: contact, isSuccess: false })
            }
            else {
                res.render('pages/contactUsSubmit', { menu: selectedMenu, contact: contact, isSuccess: true })
            }
        }
    )

})
app.get('/ahil', function (req, res) {
    let selectedMenu = getSelectedMenu("ahil");
    res.render('pages/ahil', {menu: selectedMenu});
});
app.listen(8080);
console.log('8080 is the magic port');

const getSelectedMenu = (page) => {
    return { selectedMenu: page };
}


