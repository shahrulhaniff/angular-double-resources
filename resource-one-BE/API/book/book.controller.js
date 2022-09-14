const { getBook} = require("./book.service");
const { getAllBooks } = require("./book.service");
const { createBookRez } = require("./book.service");
const { deleteBook } = require("./book.service");
const { updateBookRez } = require("./book.service");
require("dotenv").config();

//const encryptor = require("../../utils/encryptor");
//const { compareSync } = require("bcrypt");

module.exports = {
    bookInfobyId: (req, res) => {
        console.log("bulus masuk");
        //const decryptedIdx = encryptor.decrypt(req.body.bookid); //sangkut kat sini, mungkin ada guna kat FE
        //getBook(decryptedIdx, (err, results) => { 
        getBook(req.body.bookid, (err, results) => { 
        
            console.log('masuk meow');
            
            if(results) { 
                console.log('bulat berjaya jadi pakar ekonomi'); 
                return res.status(200).json({
                    success: 1,
                    data: results
                }); 
            }

            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            //console.log('masuk meow burung habis dimakan', err);
            
        }) 
    },


    //get-all-books
    bookInfoAll: (req, res) => {
        console.log("bulus masuk");
        getAllBooks((err, results) => { 
            
            if(results) { 
                console.log('bulat berjaya jadi pakar ekonomi mentankap balalam'); 
                return res.status(200).json({
                    success: 1,
                    data: results
                }); 
            }

            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
        }) 
    },
    //simple way get-all-book retrieve-book
    semuainfobuku3: (req, res) => {
        getAllBooks3((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    //create book
    createBookReq: (req, res) => {
        createBookRez(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    //update-book
    updateBookReq: (req, res) => {
        updateBookRez(req.body.bookid2u, req.body.title2u,req.body.price2u,  (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    //delete-book
    deleteBookReq: (req, res) => {
        deleteBook(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
}