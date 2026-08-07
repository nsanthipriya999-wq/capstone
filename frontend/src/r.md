# Wash N Go 🚗🧼

## Project Description

Wash N Go is a React-based car wash service application designed to provide customers with an easy way to learn about services and access car wash membership options.

The application integrates with EverWash to handle customer membership registration and login. Instead of storing customer accounts directly, Wash N Go redirects customers to EverWash, where membership information and authentication are securely managed.

The application also provides an admin login system that allows administrators to access a dedicated dashboard for Wash N Go operations.

---

# Features

## Customer Features

* View Wash N Go services
* View promotional offers
* Access membership options
* Join or log in through EverWash
* Redirect customers to EverWash membership services

## Admin Features

* Admin authentication
* Role-based dashboard access
* Admin dashboard page
* Access EverWash management platform

## Application Features

* Responsive user interface
* Custom car wash branding
* Hero image and service cards
* Role-based navigation
* External widget integration
* Clean component-based React structure

---

# Technologies Used

## Frontend

* React
* JavaScript
* HTML5
* CSS3
* React Router

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Browser Developer Tools

## External Services

* EverWash Membership Platform
* EverWash Widget Integration

---

# Application Structure

```
Wash-N-Go/
│
├── src/
│   │
│   ├── assets/
│   │   └── images
│   │
│   ├── components/
│   │   └── EverWashWidget.jsx
│   │
│   ├── pages/
│   │   ├── Services.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── UserDashboard.jsx
│   │   └── AdminDashboard.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│
├── package.json
├── README.md
└── .gitignore
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project folder:

```bash
cd Wash-N-Go
```

Install project dependencies:

```bash
npm install
```

---

# Running the Application

Start the development server:

```bash
npm run dev
```

The application will run locally through the development server.

---

# Authentication Flow

## Customer Authentication

Wash N Go does not store customer signup or login information.

Customer membership accounts are managed by EverWash.

Customer flow:

1. Customer visits Wash N Go website.
2. Customer selects "Join/Login Membership."
3. Customer is redirected to EverWash.
4. EverWash manages registration, login, and membership information.

This allows customer data to remain managed by the dedicated membership platform.

---

## Admin Authentication

Admin users are handled separately through Wash N Go authentication.

Admin flow:

1. Admin enters login credentials.
2. Application verifies the user's role.
3. If the user is an administrator, they are redirected to the Admin Dashboard.
4. Admin can access Wash N Go management resources.

---

# Main Pages

## Services Page

The Services page introduces Wash N Go services and displays:

* Car wash information
* Promotional messaging
* Membership options

---

## Login Page

The Login page provides access for administrators.

Features:

* Email and password authentication
* Role verification
* Dashboard navigation

---

## Sign Up / Membership Page

The membership page provides customers with access to EverWash registration and login.

Features:

* Membership instructions
* EverWash redirect link
* EverWash widget integration

---

## Admin Dashboard

The Admin Dashboard provides administrators with access to Wash N Go management tools.

Features:

* Admin welcome page
* EverWash management link

---

## Challenges and Solutions

## EverWash Integration

### Challenge:

The EverWash widget is loaded through an external script, which limits direct control over the internal widget structure.

### Solution:

Created custom containers and CSS layouts around the widget to maintain consistent spacing and design.

---

## Customer Account Management

### Challenge:

The application needed membership functionality without storing sensitive customer information.

### Solution:

Integrated with EverWash to handle customer signup, login, and membership management.

---

## Responsive Design

### Challenge:

Creating a layout that works across desktop and mobile devices.

### Solution:

Used Flexbox, responsive widths, media queries, and reusable styling patterns.

---

## Role-Based Navigation

### Challenge:

Providing different access levels for administrators and customers.

### Solution:

Implemented role checking during login and redirected users based on account type.

---

# Code Organization and Best Practices

The project follows React development best practices:

* Components are separated into reusable files.
* Pages are organized by application features.
* Functions use descriptive names.
* CSS classes follow consistent naming conventions.
* External services are separated from UI components.
* Comments are added where additional explanation is needed.

---

# Future Improvements

Possible future improvements include:

* Add appointment scheduling
* Add customer profile pages
* Add payment integration
* Expand admin management features
* Connect additional backend services
* Deploy the application publicly

---

# Deployment

The application can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

Deployment allows users to access the application through a public URL.

---

# Author

Created by: Your Name

---

# License

This project was created for educational purposes.
