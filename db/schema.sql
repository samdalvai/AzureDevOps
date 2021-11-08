CREATE DATABASE IF NOT EXISTS concertDB;

SET GLOBAL FOREIGN_KEY_CHECKS=0;
use concertDB;

CREATE TABLE performer (
  id int(11) PRIMARY KEY,
  image varchar(2083) NOT NULL,
  score_performer double NOT NULL,
  genre_name varchar(128) DEFAULT NULL,
  name varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE genre (
  id int(11) PRIMARY KEY,
  name varchar(128) NOT NULL,
  image varchar(2083) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE concert (
  concert_id int(11) PRIMARY KEY,
  short_title varchar(128) DEFAULT NULL,
  venue varchar(128) NOT NULL,
  datetime_local datetime NOT NULL,
  score_concert double NOT NULL,
  popularity double NOT NULL,
  performer varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE venue (
  id int(11) PRIMARY KEY,
  venue_name varchar(128) NOT NULL,
  city varchar(128) NOT NULL,
  timezone varchar(128) NOT NULL,
  country varchar(128) NOT NULL,
  capacity float NOT NULL,
  score_venue double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE concertDetails (
  concert_id int(11) PRIMARY KEY,
  remaining_seats int(11) NOT NULL,
  ticket_price float(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS users (
  usersId int(11) NOT NULL AUTO_INCREMENT,
  usersName varchar(128) NOT NULL,
  usersEmail varchar(128) NOT NULL,
  usersUid varchar(128) NOT NULL,
  usersPassword varchar(128) NOT NULL,
  PRIMARY KEY (usersId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE performer
  ADD KEY index1 (name),
  ADD KEY genre_name (genre_name);

ALTER TABLE genre
  ADD KEY index2 (name);

ALTER TABLE concert
  ADD KEY index3 (performer),
  ADD KEY venue (venue);

ALTER TABLE venue
  ADD KEY index4 (venue_name);

ALTER TABLE performer
  ADD CONSTRAINT performer_ibfk_1 FOREIGN KEY (name) REFERENCES concert (performer) ON DELETE NO ACTION,
  ADD CONSTRAINT performer_ibfk_2 FOREIGN KEY (genre_name) REFERENCES genre (name) ON DELETE NO ACTION;

