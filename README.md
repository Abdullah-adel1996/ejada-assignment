# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project technologies

Frontend:

- react.js
- tawilwind
- antd

Backend:

- node.js
- express.js
- sqlite3

## Project assumptions

- I used sqlite database to prevent the hassle of database migrations, seeding raw data and avoid complex databse configuration.
- I stored uploaded company logos as base64 for POC but for scalability it should be saved to an online service (blob storage) and store the url instead in the database.

## Users credentials

- id    email               password
- 1     admin@company1.com  admin_company1@123
- 2     user1@company1.com  user1_company1@123
- 3     user2@company1.com  user2_company1@123
- 4     admin@company2.com  admin_company2@123
- 5     user1@company2.com  user1_company2@123
- 6     user2@company2.com  user2_company2@123

## Features

- Authentication
- multi tenant databases

## Available Scripts

To run backend

### `cd backend`

### `npm start`

To run frontend

### `cd frontend`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
