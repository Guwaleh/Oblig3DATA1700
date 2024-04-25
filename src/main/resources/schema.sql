CREATE TABLE Ticket
(
    id        smallint     NOT NULL AUTO_INCREMENT,
    movie      VARCHAR(100) NOT NULL,
    quantity    INTEGER      NOT NULL,
    firstname   VARCHAR(50)  NOT NULL,
    lastname VARCHAR(50)  NOT NULL,
    email   VARCHAR(100)  NOT NULL,
    phone     VARCHAR(8) NOT NULL,
    PRIMARY KEY (id)
);