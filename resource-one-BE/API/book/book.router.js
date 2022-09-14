const {
    bookInfobyId,
    bookInfoAll,
    createBookReq,
    deleteBookReq,
    updateBookReq
    //semuainfobuku
} = require("./book.controller");


const express = require('express'); //import express
const router  = express.Router(); //const router = require("express").Router(); //(sama je)
//const { checkToken } = require("../../utils/admin_token_validation");
router.post("/gab",  bookInfoAll);
router.post("/gb",  bookInfobyId);
router.post("/cb",  createBookReq);
router.post("/db",  deleteBookReq);
router.post("/ub",  updateBookReq);

const teaController = require('./book.controller'); 
router.post('/tea/:id', teaController.bookInfobyId); 

module.exports = router; // export to use in app.js