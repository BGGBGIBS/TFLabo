CREATE DATABASE labo;
GO;

USE labo;

CREATE TABLE author (
    author_id INT IDENTITY(1,1),
    author_firstname VARCHAR(50),
    author_lastname VARCHAR(50),
    author_email VARCHAR(50),
    author_address VARCHAR(50),
    author_url VARCHAR(50),
    author_birthdate DATE,
    CONSTRAINT PK_author PRIMARY KEY (author_id)
);

CREATE TABLE book (
    book_id INT IDENTITY(1,1),
    book_isbn INT,
    book_title VARCHAR(50),
    book_year DATE,
    book_price INT,
    book_category VARCHAR(50),
    CONSTRAINT PK_book PRIMARY KEY (book_id)
);

CREATE TABLE publisher (
    publisher_id INT IDENTITY(1,1),
    publisher_name VARCHAR(50),
    publisher_address VARCHAR(50),
    publisher_phone VARCHAR(50),
    publisher_url VARCHAR(50),
    CONSTRAINT PK_pubisher PRIMARY KEY (publisher_id)
);

CREATE TABLE warehouse (
    warehouse_id INT IDENTITY(1,1),
    warehouse_name VARCHAR(50),
    warehouse_location VARCHAR(50),
    CONSTRAINT PK_warehouse PRIMARY KEY (warehouse_id)
);



CREATE TABLE customer (
    customer_id INT IDENTITY(1,1),
    customer_firstname VARCHAR(50),
    customer_lastname VARCHAR(50),
    customer_email VARCHAR(50),
    customer_address VARCHAR(50),
    customer_phone INT,
    customer_birthdate DATE,
    CONSTRAINT PK_customer PRIMARY KEY (customer_id)
);


CREATE TABLE basket (
    basket_id INT IDENTITY(1,1),
    customer_id INT,
    basket_count INT,
    CONSTRAINT PK_basket PRIMARY KEY (basket_id),
    constraint FK_basket_customer foreign key (customer_id) references customer(customer_id)
);


CREATE TABLE bap(
    bap_id INT IDENTITY(1,1),
    author_id INT,
    publisher_id INT,
    book_id INT,
    CONSTRAINT PK_bap PRIMARY KEY (bap_id),
    constraint FK_bap_author foreign key (author_id) references author(author_id),
    constraint FK_bap_publisher foreign key (publisher_id) references publisher(publisher_id),
    constraint FK_bap_book foreign key (book_id) references book(book_id)
);


CREATE TABLE bw(
    bw_id INT IDENTITY(1,1),
    bw_count INT,
    book_id INT,
    warehouse_id INT,
    CONSTRAINT PK_bw PRIMARY KEY (bw_id),
    constraint FK_bw_book foreign key (book_id) references book(book_id),
    constraint FK_bw_warehouse foreign key (warehouse_id) references warehouse(warehouse_id)
);

CREATE TABLE cb(
    cb_id INT IDENTITY(1,1),
    book_count INT,
    book_id INT,
    basket_id INT,
    CONSTRAINT PK_cb PRIMARY KEY (cb_id),
    constraint FK_cb_book foreign key (book_id) references book(book_id),
    constraint FK_cb_basket foreign key (basket_id) references basket(basket_id)
);