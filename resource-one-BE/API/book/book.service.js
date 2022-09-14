const pool = require("../../config/database");
const { encrypt } = require("../../utils/encryptor");

module.exports = {

    getAllBooks: callBack => {
        pool.query(
            "SELECT * FROM books",
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBook: (bookidx, callBack) => {
        pool.query(
         "SELECT * FROM books where bookid = ? ",
        [bookidx],
        (error, results, fields) => {
        if (error) {
            console.log('bulus gomo molla'); 
            return callBack(error);
          }
        else {
            if(results[0] == undefined){ results[0]='buku '+[bookidx]+' xde'; }
            console.log('bookid = ',  bookidx,'result = ',  results[0].title); 
            return callBack( null,results[0]); }
        } 
        );
    },
    getUsers: callBack => {
        pool.query(
            "SELECT * FROM users",
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId: (accountid, callBack) => {
        pool.query(
            "SELECT * FROM users WHERE accountid = ?",
            [accountid],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    createBookRez: (data, callBack) => {
        pool.query(
            "INSERT INTO books(title, price) VALUES(?, ?)",
            [data.title, data.price],
            (error, res, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, "Succcessfully add a Book.");
            }
        );
    },
    
    updateBookRez: (bookid2u,title2u,price2u, callBack) => {
        pool.query(
            "UPDATE books SET title ='" + title2u + "', price = '" + price2u + "' WHERE bookid = '" + bookid2u + "'",
            
            (error, res, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, "Succcessfully updated the books of bulus.");
            }
        );
    },
    deleteBook: (data, callBack) => {
        pool.query(
            "DELETE FROM books WHERE bookid = ?",
            [data.bookid],
            (error, res, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, "Succcessfully deleted book "+ data.bookid);
            }
        );
    },
    getBook2: (callBack) => {
        let data = {
            bookid: null,
        };
        return callBack(null, data);
       /* pool.query(
            "SELECT bookid FROM books where bookid = '1' ",
            //[bookid],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                data.bookid = results[0].bookid;
                //results[0].title = undefined;
                //return callBack(null, results[0]);
                return callBack(null, data);
            }
        ); */
    }
};