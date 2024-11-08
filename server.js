require('dotenv').config();
const express = require('express');
const path = require('path')
const { getAll, getBookById, getBookByName, getFeatured } = require('./api');

// define app parameters
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

// API Endpoints
app.get('/books', (req,res) => {
    res.send("Hello Server!");
})

// get all book details
app.get('/books/featured', (req, res) => {
    getFeatured().then(data => {
        res.render('featured', { books: data })
    }).catch(err => res.status(500).json({ message: 'Internal Server Error', error: err }))
 })
 

// get all book details - render all html books page
app.get('/books/all', (req, res) => {
   getAll().then(data => {
       res.render('all_books', { books: data })
   }).catch(err => res.status(500).json({ message: 'Internal Server Error', error: err }))
})

app.get('/books/:id', (req,res) => {
    let id = req.params.id;
    getBookById(id).then(data => {
        res.status(200).json({ message: 'OK', data});
    }).catch(err => res.status(500).json({ message: 'Internal Server Error', error: err }))
})

app.get('/books/:name', (req,res) => {
    let name = req.params.name;
    getBookByName(name).then(data => {
        res.status(200).json({ message: 'OK', data});
    }).catch(err => res.status(500).json({ message: 'Internal Server Error', error: err }))
})

// API endpoints to render HTML content
app.use('/show-all-books', (req,res) => {
    res.render('all_books')
})

app.use(function(err,req,res,next){
    if(err){
        res.json({ error: err })
    }
})

// start the server
app.listen(port, () => {
  console.log(`Demo app running at http://localhost:${port}`)
})