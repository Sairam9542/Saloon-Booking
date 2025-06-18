
# ✨Saloon Booking Website

A microservices-based full-stack web application that allows users to discover salons, view services, book appointments, and make payments online.

It’s designed for:

Customers – to browse salons and book services.

Salon Owners – to register salons, manage service offerings, and view bookings.

Admins/Developers – to explore scalable microservice architecture using modern tools.

Built using Spring Boot, React.js, Docker, RabbitMQ, and Keycloak for authentication, the app demonstrates a complete end-to-end solution for real-world appointment booking systems.

## 🔗 Demo

Check out the live demo of the Saloon Booking App here:  
[Saloon Booking webpage demo](https://styluno.netlify.app/)

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Screenshots](#screenshots)
- [Setup Project On Local Machine](#setup) 
- [Author](#author)

## 🔍 About the Project

The Saloon Booking App provides a platform where users can browse salons, view available services, book appointments, and make payments online. Salon owners can register, manage their salons, and handle customer bookings through their dashboard.

The project demonstrates microservices architecture with inter-service communication, API gateway routing, security, and containerization.

## 🛠️ Tech Stack

**Backend:**
- Java 17
- Spring Boot (Microservices)
- Spring Cloud (Eureka, Gateway, Feign)
- Spring Security + Keycloak
- RabbitMQ (Event-driven architecture)
- MySQL, H2
- Docker, Docker Compose
- Lombok

**Frontend:**
- React.js
- Redux
- Axios
- React Router DOM
- WebSocket

**Dev Tools:**
- Postman
- VS Code 
- IntelliJ
- Docker/Docker Desktop


## ✨ Features

- 🧍‍♂️ User Registration, Login (Keycloak)
- 🏪 Salon Owner Dashboard
- 📅 Appointment Booking System
- 💳 Razorpay/Stripe Payment Gateway 
- 🔔 Real-time Notifications (RabbitMQ + WebSocket)
- 📂 Microservices with Feign Clients
- 🛡️ Secured API Gateway
- 🧭 Service Discovery with Eureka
- 🐳 Dockerized Deployment


## 🧱 Project Architecture

- Multiple Spring Boot Microservices (User, Salon, Booking, Payment, etc.)
- API Gateway and Eureka for routing and service discovery
- Frontend consumes APIs from Gateway
- RabbitMQ for async notifications
- Secured with Keycloak

## 🖼️ Screenshots

### Home Page  
![Home Page](link-to-home-page-image)

### Salon Detail  
![Salon Detail](link-to-salon-detail-image)

### Booking  
![Booking Page](link-to-booking-page-image)


## 🚀 Setup Project On Local Machine

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
Run all microservices (User, Salon, Booking, Payment, etc.) individually using your IDE or command line.

### Keycloak Server Setup (for Authentication)
Make sure Docker is installed on your machine.

Run Keycloak server using this command:

```bash
docker run -p 8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.1.0 start-dev
```

### Keycloak Configuration Steps
- Create a new client in Keycloak.

- Update these values in your User microservice config to match Keycloak:

```bash
clientId

CLIENT_SECRET

CLIENT_ID

username

password
```


- Create an admin user and assign the admin role (disable the temporary role option).

- **Create client roles**: CUSTOMER and SALON_OWNER.

- Increase the access token lifespan as needed.


## 👨‍💻 Author

**Sairam Ganapavarapu**  
Java Full Stack Developer  
[LinkedIn](https://www.linkedin.com/in/sairamganapavarapu96/) | [GitHub](https://github.com/Sairam9542)

