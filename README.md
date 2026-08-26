# Anime Streaming Platform

A full-stack anime streaming platform developed as my diploma project.

The project was originally built using the MERN stack and was later recovered
after a long break from development. The current version is a working local
version of the original project, with further performance, UI/UX and code
quality improvements planned.

## Overview

This project is an anime streaming web application with a separate user-facing
client and administrator dashboard.

The application allows users to browse anime, manage their accounts and watch
episodes, while administrators can manage users, anime, lists and episodes
through a dedicated dashboard.

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Sass / SCSS
- Material UI

### Backend

- Node.js
- Express.js
- REST API
- JWT authentication
- CryptoJS

### Database

- MongoDB Atlas
- Mongoose

### Storage

- Firebase Storage

### Admin Dashboard

- React
- Material UI
- Recharts
- Axios
- Firebase Storage

## Project Structure

```text
anime-streaming-mern/
│
├── admin/              # React admin dashboard
│   ├── src/
│   └── package.json
│
├── api/                # Node.js + Express REST API
│   ├── models/
│   ├── routes/
│   ├── verifyToken.js
│   └── package.json
│
├── client/             # React user-facing application
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
````

## Features

### User Platform

* User registration and login
* User authentication
* Anime browsing
* Anime lists
* Anime search
* Anime details
* Episode watching
* Responsive user interface

### Admin Dashboard

* Admin authentication
* Dashboard statistics
* User management
* Create, update and delete users
* Anime management
* Create, update and delete anime
* Anime list management
* Episode management
* Firebase image/file uploads

### Backend

* RESTful API
* MongoDB database integration
* User authentication and authorization
* Protected admin routes
* CRUD operations for application data
* Password encryption
* User and anime statistics

## Architecture

```text
                ┌─────────────────────┐
                │       Client        │
                │   React Frontend    │
                └──────────┬──────────┘
                           │
                           │ HTTP / REST API
                           ▼
                ┌─────────────────────┐
                │        API          │
                │ Node.js + Express   │
                └──────────┬──────────┘
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
          ┌──────────────┐   ┌──────────────┐
          │   MongoDB    │   │   Firebase   │
          │    Atlas     │   │   Storage    │
          └──────────────┘   └──────────────┘

                ┌─────────────────────┐
                │       Admin         │
                │   React Dashboard   │
                └──────────┬──────────┘
                           │
                           │ HTTP / REST API
                           ▼
                       API Server
```

## Project Background

This application was originally developed as my diploma project.

The initial project was based on a MERN stack tutorial and was then adapted
and developed into an anime streaming platform.

After completing the diploma project, I spent a long period away from
programming. When returning to the project, I recovered the original codebase,
restored the development environment and fixed dependency, compatibility and
runtime issues.

The recovery process became a practical way to refresh my knowledge of
JavaScript, React, Node.js, Express, MongoDB, REST APIs, Firebase and Git.

## Current Status

The application is currently working locally.

The recovery phase is complete, but the project is still under improvement.

### Planned Improvements

* Improve initial loading performance
* Reduce unnecessary API requests
* Optimize image loading
* Add better loading and error states
* Improve UI/UX
* Improve admin dashboard usability
* Refactor older code
* Improve security and environment configuration
* Prepare the application for production deployment

## Performance Work

Performance improvements are being approached incrementally.

Planned and ongoing work includes:

* Reducing unnecessary API requests
* Batch fetching data instead of requesting each item individually
* Image lazy loading
* Asynchronous image decoding
* Lazy loading below-the-fold content
* Pagination
* Improving loading states

## Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB Atlas account
* Firebase project

### 1. Clone the Repository

```bash
git clone https://github.com/baagii777/anime-streaming-mern.git
cd anime-streaming-mern
```

### 2. Install Dependencies

Install dependencies separately for each part of the application:

```bash
cd api
npm install
```

```bash
cd ../client
npm install
```

```bash
cd ../admin
npm install
```

### 3. Environment Configuration

The backend requires environment variables for configuration.

Create the required `.env` file in the `api` directory.

Do not commit environment variables, passwords, API keys or other secrets to
GitHub.

### 4. Start the API

From the `api` directory:

```bash
npm start
```

The API currently runs locally on:

```text
http://localhost:8800
```

### 5. Start the Client

From the `client` directory:

```bash
npm start
```

The client runs on:

```text
http://localhost:3000
```

### 6. Start the Admin Dashboard

From the `admin` directory:

```bash
npm start
```

The admin dashboard also runs on:

```text
http://localhost:3000
```

> The client and admin dashboard should not be started on the same port at the
> same time. Configure the development ports as needed.

## Development Notes

This project currently uses separate `package.json` files for the API,
client and admin dashboard.

The API uses Express and MongoDB, while the client and admin dashboard are
separate React applications.

The current configuration is intended for local development. Production
deployment and environment configuration are planned future improvements.

## Learning Outcomes

Working on this project has provided practical experience with:

* JavaScript
* React
* React Context API
* React component architecture
* React Router
* Node.js
* Express.js
* REST APIs
* Axios
* MongoDB
* Mongoose
* JWT authentication
* Authentication and authorization
* CRUD operations
* Firebase Storage
* File uploads
* Admin dashboard development
* Debugging
* Dependency management
* Git and GitHub
* Performance optimization

## Future Goals

The next stage of development will focus on:

1. Performance optimization
2. UI/UX improvements
3. Code refactoring
4. Better error and loading handling
5. Security improvements
6. Production environment configuration
7. Deployment

## Disclaimer

This is a personal diploma and learning project.

The project was originally developed with the help of an online tutorial and
was subsequently adapted into an anime streaming application as part of my
diploma project.

The repository is primarily intended to document my learning, development and
project recovery process.
