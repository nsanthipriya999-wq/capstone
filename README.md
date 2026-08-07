# Wash N Go Car Wash Management System.

## Project Description
Wash N Go is a  MERN stack car wash management system designed to provide customers with an easy way to learn about available services, explore membership options, and signup for car wash memberships.

The application integrates with EverWash to handle customer membership registration and login. Currently, Wash N Go uses EverWash's subscription platform, where membership information and payments are securely managed by EverWash.

The application also provides an admin login system that allows administrators to access a dedicated dashboard for 
Wash N Go operations.


## Features

## Customer Features

 - Browse Wash N go services

 - View promotional Offers

 - Explore membership options

 - Sign up or login to EverWash.

 - Redirect customers to EverWash membership platform

 - View Wash N Go location and contact information.

 - View Customer Reviews


 ## Admin Features

 - Admin authentication and authorization

 - Role-based dashboard access

 - Admin dashboard page

 - User Dashboard page

 - Access the EverWash Owner Management Dashboard.

 ## Application Features

 - Responsive and mobile-friendly user interface

 - Custom car wash branding

 - Hero images and service cards

 - Role-based navigation

 - External Everwash integration.

 - Clean component- based React structure.

 - Contact information, business address, and social media links.

 ## Technologies Used
 
  ## Frontend

  - React
  - JavaScript
  - HTML5
  - CSS3
  - React Router
  - React Icons
  - Axios
  
  
  ## Backend
  - Node.js
  - Mongoose
  - MongoDB
  - Express
  - Dotenv
  - Bcrypt
  - JWT

## Development Tools

- Visual Studio code
- Git
- GitHub
- Browser Developer Tools
- MongoDB Compass
- Thunder Client

## External Services
- EverWash Membership Platform
- EverWash Widget Integration

## Installation

Clone the repository

- git clone <repository-url>

Install project dependencies

- npm install

Running the Application

Start the development server frontend
- npm run dev

Start the backend server
- nodemon index


## Authentication Flow

## Customer Authentication

Wash N Go does not store customer signup or login information.

Customer membership accounts are managed by EverWash.

Customer Flow:

1. Customer visits Wash N gO website.

2. Customer Signup/Join Membership

3. Customer can explore all services available .

4. Customers can Book the services through services page.

5. Customer can view the active promotions available in promotions page.


# Admin Authentication

1. Admin enters login credentials
2. Application verifies the user's role.
3. If the user is an adminstrator, they are redirected to the Admin Dashboard.
4. Admin can access and manage resources through EverWash Integrated Dashboard.
5. Logout button is provided for session Logout.
6. Inactive session will be logged out after 10 min and redirected to login page.


# Main Pages.

# Home Page

# Services Page
 Wash N Go services and displays:
 -Car wash information
- Membership options

# Promotions Page
 -- Promotions available

# SignUp Page
- Various membership options 

# Login Page
- The Login page provides access for administrators. EverWash is handling customers for now.
  Features:
- Email and password authentication
- Role verification
- Dashboard navigation

# Admin Dashboard Page
   The Admin Dashboard provides administrators with access to Wash N Go Management tools.

# User Dasboard Page
   Redirects to EverWash Platform for booking services.

# Contact Page
  Provides location details with map ,contact details and social media handles.






 




# Project Organisation tools:
Trello Link: https://trello.com/b/tBmHBlc6/my-trello-board

