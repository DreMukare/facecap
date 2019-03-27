DROP DATABASE IF EXISTS class_attendance;
CREATE DATABASE class_attendance;
USE class_attendance;

CREATE TABLE authentication (
  id SMALLINT UNSIGNED AUTO_INCREMENT,
  login_id VARCHAR(15) NOT NULL,
  password TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- pass123
INSERT INTO authentication(login_id, password) VALUES ('lec-001-2019', '$2b$10$zGqswiraddVPqhf5aBSuk.KJUmlW6eytlHC3iTVc0iirlHsMf70Qa');
