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
    let pageMenu = getPageMenu("index");
    res.render('pages/index', { menu: pageMenu });
});


app.get('/index', function (req, res) {
    let pageMenu = getPageMenu("index");
    res.render('pages/index', { menu: pageMenu });

});
app.get('/asif', function (req, res) {
    let pageMenu = getPageMenu("asif");
    res.render('pages/asif', { menu: pageMenu });
});
app.get('/contactUs', function (req, res) {
    let pageMenu = getPageMenu("contactus");
    res.render('pages/contactUs', { menu: pageMenu });
});
app.get('/grandparents', function (req, res) {
    let pageMenu = getPageMenu("grandparents");
    res.render('pages/grandparents', { menu: pageMenu });
});
app.get('/laila', function (req, res) {
    let pageMenu = getPageMenu("laila");
    res.render('pages/laila', { menu: pageMenu });
});
app.get('/ruhee', function (req, res) {
    let pageMenu = getPageMenu("ruhee");
    res.render('pages/ruhee', { menu: pageMenu });
});
app.get('/vacation', function (req, res) {
    let pageMenu = getPageMenu("vacation");
    res.render('pages/vacation', { menu: pageMenu });
});

app.post('/contactUsSubmit', function (req, res) {
    let contact = {
        fname: req.body.firstname,
        lname: req.body.lastname,
        familyMember: req.body.familyMember,
        message: req.body.message
    }
    let pageMenu = getPageMenu("contactus")
    db.addContact(contact
        , (error, result) => {
            if (error) {
                console.log('Error inserting to db ' + error);
                res.render('pages/contactUsSubmit', { menu: pageMenu, contact: contact, isSuccess: false })
            }
            else {
                res.render('pages/contactUsSubmit', { menu: pageMenu, contact: contact, isSuccess: true })
            }
        }
    )

})
app.get('/ahil', function (req, res) {
    let pageMenu = getPageMenu("ahil");
    res.render('pages/ahil', { menu: pageMenu });
});
app.listen(8080);
console.log('8080 is the magic port');

const getMenu = () => {
    let menu = [
        { id: "index", href: "index", display: "Home", isSelected: false },
        { id: "asif", href: "asif", display: "Asif", isSelected: false },
        { id: "laila", href: "laila", display: "Laila", isSelected: false },
        { id: "ahil", href: "ahil", display: "Ahil", isSelected: false },
        { id: "ruhee", href: "ruhee", display: "Ruhee", isSelected: false },
        { id: "grandparents", href: "grandparents", display: "Grandparents", isSelected: false },
        { id: "vacation", href: "vacation", display: "Vacation", isSelected: false },
        { id: "contactus", href: "contactUs", display: "Contact Us", isSelected: false }
    ]
    return menu;
}

const getPageMenu = (page) => {
    let menu = getMenu();
    var pageMenu = menu.map(function (menuItem, index, array) {
        if (menuItem.id == page)
            menuItem.isSelected = true;
        return menuItem;
    });

    return pageMenu;
}

