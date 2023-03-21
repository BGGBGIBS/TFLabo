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

CREATE TABLE ba (
    ba_id INT IDENTITY(1,1),
    book_id INT NOT NULL,
    author_id INT NOT NULL,
    CONSTRAINT PK_ba PRIMARY KEY (ba_id),
    constraint FK_ba_book foreign key (book_id) references book(book_id),
    constraint FK_ba_author foreign key (author_id) references author(author_id)
);



CREATE TABLE publisher (
    publisher_id INT IDENTITY(1,1),
    publisher_name VARCHAR(50),
    publisher_address VARCHAR(50),
    publisher_phone VARCHAR(50),
    publisher_url VARCHAR(50),
    CONSTRAINT PK_pubisher PRIMARY KEY (publisher_id)
);

CREATE TABLE edition (
    edition_id INT IDENTITY(1,1),
    edition_isbn VARCHAR(10),
    book_id INT,
    publisher_id INT,
    CONSTRAINT PK_edition PRIMARY KEY (edition_id),
    constraint FK_edition_book foreign key (book_id) references book(book_id),
    constraint FK_edition_publisher foreign key (publisher_id) references publisher(publisher_id)
);

CREATE TABLE library (
    library_id INT IDENTITY(1,1),
    library_name VARCHAR(50),
    library_location VARCHAR(50),
    CONSTRAINT PK_library PRIMARY KEY (library_id)
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


CREATE TABLE el(
    el_id INT IDENTITY(1,1),
    el_count INT,
    edition_id INT,
    library_id INT,
    CONSTRAINT PK_el PRIMARY KEY (el_id),
    constraint FK_el_edition foreign key (edition_id) references edition(edition_id),
    constraint FK_el_library foreign key (library_id) references library(library_id)
);

CREATE TABLE eb(
    bb_id INT IDENTITY(1,1),
    book_count INT,
    edition_id INT,
    basket_id INT,
    CONSTRAINT PK_bb PRIMARY KEY (bb_id),
    constraint FK_bb_edition foreign key (edition_id) references edition(edition_id),
    constraint FK_bb_basket foreign key (basket_id) references basket(basket_id)
);