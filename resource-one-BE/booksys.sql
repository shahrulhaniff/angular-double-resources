CREATE DATABASE booksys;

USE booksys;

CREATE TABLE books(
bookid INT(10) NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
price VARCHAR(10) NOT NULL,
PRIMARY KEY (bookid)
);