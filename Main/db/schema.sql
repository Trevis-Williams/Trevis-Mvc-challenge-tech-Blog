DROP DATABASE IF EXISTS crowdfund_db;
CREATE DATABASE crowdfund_db;

CREATE TABLE post (
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE `user` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(255) NOT NULL,
--   `email` VARCHAR(255) NOT NULL UNIQUE,
--   `password` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`)
-- );
