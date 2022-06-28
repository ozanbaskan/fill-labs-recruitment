# fill-labs-recruitment
### Homework projects for evaluation process of recruitment

- stringSort

Sorts a string array with a custom comparison which prioritizes occurence of character "a" and length of the string respectively

- recursiveAlgo

Takes an integer as parameter and recursively divide it by 2 and returns a line seperated  integers from least to given integer

- frequencyInArray

Finds the most frequent element of a given string array

- userManagement

User management system that uses goLang on backend and React on frontend,

goLang dependencies:

- github.com/gorilla/mux v1.8.0
Web framework for handling tcp connections that uses http protocol
- github.com/jinzhu/gorm v1.9.16
ORM framework for handling database
- github.com/go-sql-driver/mysql v1.5.0
Helper for the gorm framework for handling mysql protocol
- github.com/joho/godotenv v1.4.0
For reading .env file
- github.com/rs/cors v1.8.2
For handling cors requests that most of the browsers send

### After cloning the repo fire up the backend server:
- create .env by looking at userManagement/server/cmd/main/example_env in the same location
- create a mysql database
- cd userManagement/server/cmd/main && go build && go run main.go

You can set up a mysql server with docker and create necessary tables

```sql
create database users;
use users;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(256) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_users_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

```

note: default port is 3001 for backend, if you change the port you need to change apiUrl from frontend config file


### Start the frontend page with development mode or by building:

- cd userManagement/client && npm run start
or
- npm run build
- serve the build with a static server
- you can serve it with npm package "serve": npm install -g serve && serve -s build

The application is ready to go with basic CRUD functionality and poor design :)

### Here is a peek:

![Front Page!](https://github.com/ozanbaskan/fill-labs-recruitment/blob/main/userManagement/demo.png)
