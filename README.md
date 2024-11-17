# Gada Electronics E-Commerce Application

This is a full-fledged MERN stack e-commerce application with JWT authentication and Dockerization. The project includes a **React** frontend, **Express.js** backend, and **MongoDB** for data storage.

### 🛠️ Features
- **User Registration and Login**: Create and authenticate users with JWT tokens.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **User Profile Management**: Users can manage their profiles after logging in.
- **Cart and Wishlist Management**: Users can manage products in their cart and wishlist.
- **Dockerized Backend and Frontend**: Both frontend and backend are containerized using Docker.
- **MongoDB for Data Storage**: MongoDB stores the application data (user details, products, cart, and wishlist).
- **Caddy as Reverse Proxy**: Caddy is used to proxy requests and handle HTTPS for secure communication.
- **PM2 for Process Management**: PM2 is used to manage the backend Node.js server in production.

---

### 📂 Folder Structure
The project is organized into two main directories: **client** (frontend) and **server** (backend).

```bash
# Project Folder Structure

/assignment-2-heatflake/
├── Frontend/                      # Frontend (React)
│   ├── public/                    # Static files (HTML, images, etc.)
│   │   ├── index.html             # Main HTML file
│   │   └── ...
│   ├── src/                       # Main application code
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Cart.jsx           # Cart page component
│   │   │   ├── Navbar.jsx         # Navbar component
│   │   │   ├── product/           # Product-related components
│   │   │   │   ├── ProductDetail.jsx # Product detail page component
│   │   │   │   ├── RelatedProduct.jsx # Related products component
│   │   │   │   ├── SearchProduct.jsx  # Product search component
│   │   │   │   └── ShowProduct.jsx   # Displaying products component
│   │   │   ├── user/              # User-related components
│   │   │   │   ├── Login.jsx      # Login form component
│   │   │   │   ├── Profile.jsx    # User profile component
│   │   │   │   └── Register.jsx   # Registration form component
│   │   │   ├── Wishlist.jsx       # Wishlist component
│   │   ├── context/               # State management using Context API
│   │   │   ├── AppState.jsx       # Manages global state
│   │   │   └── AppContext.jsx     # Context provider
│   │   ├── index.css              # Global CSS styles
│   │   ├── main.jsx               # Main entry point for React
│   │   └── App.jsx                # Main React component
│   ├── package.json               # Frontend dependencies and scripts
│   ├── vite.config.js             # Vite configuration for frontend build
│   └── ...

├── Backend/                       # Backend (Node.js & Express)
│   ├── Controllers/               # Controller files
│   │   ├── cart.js
│   │   ├── product.js
│   │   ├── user.js
│   │   └── wishlist.js
│   ├── Middlewares/               # Middleware files
│   │   └── auth.js
│   ├── Models/                    # Mongoose models
│   │   ├── Cart.js
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Wishlist.js
│   ├── Routes/                    # Route definitions
│   │   ├── cart.js
│   │   ├── product.js
│   │   ├── user.js
│   │   └── wishlist.js
│   ├── dist/                      # Compiled backend files
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-BEMKQIBQ.js
│   │       └── index-B6IBLkdw.css
│   ├── server.js                  # Backend entry point
│   ├── Dockerfile                 # Docker configuration for backend
│   ├── init-mongo.js              # MongoDB initialization script
│   └── ...

├── docker-compose.yml             # Docker Compose configuration
├── Caddyfile                      # Caddy server configuration
└── README.md                      # Project documentation

/Backend                   # Backend (Express)
    /config                 # Configuration files
      database.js           # MongoDB connection configuration
    /controllers            # Request handlers for different routes
      addressController.js  # Address management logic
      cartController.js     # Cart management logic
      productController.js  # Product management logic
    /models                 # Mongoose models for database schemas
      addressModel.js       # Address model schema
      cartModel.js          # Cart model schema
      productModel.js       # Product model schema
    /routes                 # Express route definitions
      addressRoutes.js      # Routes for address operations
      cartRoutes.js         # Routes for cart operations
      productRoutes.js      # Routes for product operations
    /utils                  # Utility functions and helpers
      auth.js               # JWT authentication middleware
   /dist
      
    app.js                  # Express app configuration
    index.js                # Server entry point
  init-mongo.js             # MongoDB initialization script
  Dockerfile                # Dockerfile for backend containerization (with Caddy and PM2)
  package.json              # Backend dependencies and scripts
  README.md                 # Project documentation
```

---

### 🚀 Getting Started
Follow the steps below to set up and run the project locally using Docker.

#### Prerequisites
Before you begin, make sure you have the following installed on your machine:

- **Docker** (for containerization)
- **Docker Compose** (for orchestrating services)

#### 1. Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/ICSI518/assignment2-HeatFlake911.git
cd assignment2-HeatFlake911
```

#### 2. Run the Application with Docker
To run the project using Docker, simply execute the following command in the root directory of the project:

```bash
docker-compose up --build
```

This command will:

- Build the backend and frontend Docker containers.
- Start a MongoDB container.
- Set up **Caddy** as the reverse proxy to handle requests.
- Launch the application with the configured services, including **PM2** for managing the backend server.

#### 3. Accessing the Application
Once the containers are up and running, you can access the application by visiting the following URL in your browser:

```bash
http://localhost:1000
```

This will load the **React** frontend, and all backend API requests will be routed to the **Express** server through **Caddy**.

---

### 🛠️ Technologies Used
- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **Vite**: Build tool for faster development and production build.
  - **React Router**: For navigation between pages.
  - **Axios**: For making HTTP requests to the backend.
  - **React Toastify**: For showing toast notifications.

- **Backend**:
  - **Express.js**: Web framework for Node.js to handle API routes and logic.
  - **JWT (JSON Web Tokens)**: Used for user authentication and session management.
  - **MongoDB**: NoSQL database for storing application data.
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
  - **PM2**: Process manager for Node.js, used to keep the backend application running in production.

- **Containerization**:
  - **Docker**: Tool to create, deploy, and run applications in containers.
  - **Docker Compose**: Tool for defining and running multi-container Docker applications.
  
- **Authentication**:
  - **JWT (JSON Web Token)**: For secure authentication and managing user sessions.

- **State Management**:
  - **Context API**: For managing global state (e.g., user authentication, cart data).

- **Reverse Proxy**:
  - **Caddy**: Web server and reverse proxy used for serving the application over HTTPS.

---

### 💡 Additional Features
- **JWT Authentication**: Secure login and session management using JWT tokens.
- **User Profile Management**: Allows users to view and edit their profile after logging in.
- **Cart and Wishlist Management**: Users can add, remove, and view products in their cart and wishlist.
- **Dockerized Environment**: Both frontend and backend services run in isolated Docker containers.
- **MongoDB Initialization**: Predefined products are inserted into the database on container startup using an initialization script.
- **Caddy as Reverse Proxy**: Handles HTTPS setup and reverse proxies the traffic to backend services.
- **PM2 for Process Management**: Ensures the backend server runs in production without crashes.

---

### 💻 Local Development Workflow
To start working on the project, you can use the following workflow:

1. **Make Changes Locally**: 
   - Work on the React frontend components in the `client` directory.
   - Implement API logic and routes in the `server` directory.
  
2. **Rebuild Containers**: 
   - After making changes to the code, rebuild the Docker containers by running:
   
   ```bash
   docker-compose up --build
   ```

3. **Test the Application Locally**: 
   - Open `http://localhost:1000` in your browser to test your changes.

---

### 🌐 Deployment on AWS EC2 (Optional)
To deploy this application on an **AWS EC2** instance, follow these steps:

1. **Launch EC2 Instance**: 
   - Log into AWS, create an EC2 instance (Ubuntu recommended), and note the public IP.
  
2. **SSH into EC2**:
   - SSH into your EC2 instance using the following command:
   
   ```bash
   ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
   ```

3. **Clone the Repository**:
   - Clone the repository on your EC2 instance:
   
   ```bash
   git clone https://github.com/ICSI518/assignment2-HeatFlake911.git
   cd assignment2-HeatFlake911
   ```

4. **Run the Application**:
   - Run the Docker containers on EC2:
   
   ```bash
   sudo docker-compose up --build
   ```

5. **Access the Application on EC2**:
   - Access the application using the public IP of your EC2 instance:
   
   ```bash
   http://http://18.119.29.153:1000
   ```

   ```bash
   http://ec2-18-119-29-153.us-east-2.compute.amazonaws.com:1000
   ```

---

### 🔄 Caddy for Reverse Proxy Setup 
Since **Caddy** is already included in the Docker setup, it will handle reverse proxy and SSL automatically, as defined in the **Dockerfile**.

- **Caddy Configuration** is handled within the **Dockerfile** and **Caddyfile**.
- No need for manual installation or setup of **Caddy** on the server, as it is configured to automatically handle requests over HTTPS and route them to the backend.

---



Enjoy using the **Gada Electronics E-Commerce Application**! 🎉
```
