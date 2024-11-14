# Food Order Backend Application

A RESTful backend service for managing food orders, handling customer data, menu items, and processing orders for a food delivery application. This service is built to integrate with a frontend to provide a complete ordering experience.

## Table of Contents
- [Entity Relationship Model](#erd-diagram)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Entity Relationship Model 
![alt text](image.png)
## Features

- **User Authentication**: Register, login, and secure user sessions.
- **Menu Management**: Add, update, and retrieve menu items.
- **Order Management**: Place, update, and track orders.
- **Admin Access**: Admins can manage users, orders, and menu items.
- **Payment Integration**: Supports payment processing (optional).
  
## Tech Stack

- **Node.js** - Server environment
- **Express** - Web framework for Node.js
- **MongoDB** - NoSQL database for storing data
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - For password hashing
- **dotenv** - Environment configuration

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sarvesh207/food_order_backend
   cd food-order-backend
