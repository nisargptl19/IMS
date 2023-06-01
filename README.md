
# Inventory Management System using NodeJS, MySQL and Javascript 
This is an Inventory Management System made for group project in SIT725 - Applied Software Engineering


## Demo

Here is a working demo of the website:- https://youtu.be/4pP__drMdA0

## Docker Hub Link
Here is our docker hub image:- https://hub.docker.com/repository/docker/palash315/ims/general
  
## Contributing

The contributors of these project is Palash Shah, Nisarg Patel, Somansh Ahuja and Yash Jangra

  
## Tech Stack

**Front End:** Javascript, Bootstrap, Semantic-UI

**Back End:** Node, Express

## MySQL database setup and congfiguration

Install MySQL

```bash
  https://dev.mysql.com/downloads/installer/
```

MySQL Installation Guide

```bash
  https://www.youtube.com/watch?v=u96rVINbAUI
```
Download mysql database **.sql** file from here

```bash
  https://drive.google.com/file/d/1r0zaU-5Jzvf8aAqs4a-yiOMHxdkR5Y87/view?usp=sharing
```
Open mysql command prompt(as Administrator) and run the following command:-

```bash
  create database warehousedb;
```

Copy that sql file into this location (Your MySQL Server version could be different)
```bash
  C:\Program Files\MySQL\MySQL Server 8.0\bin
```

Now open command prompt(as Administrator) and execute following commands
```bash
  cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
  mysql –u root –p warehousedb < warehousedb.sql
```
  
## Install node dependencies and run server locally

Download and install **node** from here
```bash
  https://nodejs.org/en/download/
```

```bash
  git clone https://github.com/nisargptl19/IMS.git
```

Go to the project directory

```bash
  cd IMS
```

Install dependencies

```bash
  npm install
```

Start the server (Please set up the environment variables before starting the server)

```bash
  npm run start
```

Type this is your browser to open the local version of the website

```bash
  http://localhost:5000/
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file (Create a file named `.env` at the root of your project directory, i.e., in **Inventory-Management-System** folder)

```bash
SESSION_SECRET=secret

db_name=warehousedb

db_user_name=<database_user_name>

db_password=<database_password>

login_id=<login_email_address>

login_password=<password_for_login>
```

Here `login_id` and `login_password` are the login credentials for the website. Similarly `db_user_name` and `db_password` are the credenials for the MySQL database which was configured during installation of MySQL. So please change all the credentials accordingly. 
Leave `SESSION_SECRET=secret` and `db_name=warehousedb` as it is.

Folowing is an example with actual values in a .env file:-

```bash
SESSION_SECRET=secret

db_name=warehousedb

db_user_name=root

db_password=root1234

login_id=admin@xyz.com

login_password=admin1234
```
  
In the `.env` file, don't use double quotes for values and there should be no space before or after `=`.

  
