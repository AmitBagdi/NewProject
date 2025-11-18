Here is a more compact `README.md` file for your GitHub repository.

-----

# Amit Portfolio - Full Stack (React + Spring Boot)

This repository contains the complete code for a full-stack portfolio application. It features a public-facing landing page and a full admin panel for content management.

  * **Frontend (React):** `https://your-frontend-site.netlify.app`
  * **Backend (Spring Boot):** `https://your-backend-api.onrender.com`

# Features

  * **Landing Page:** Dynamically displays projects and client testimonials. Includes a contact form and a newsletter subscription form.
  * **Admin Panel:** Full management (add/delete) for **Projects** and **Clients**, including image uploads. Also provides read-only views for **Contact Form Submissions** and **Newsletter Subscribers**.

# Tech Stack

  * **Backend:** Java 17, Spring Boot, Spring Data MongoDB, Maven
  * **Frontend:** React (Vite), React Router, Tailwind CSS, Axios
  * **Database:** MongoDB Atlas (Cloud)

-----

#  Local Setup

# 1\. Backend (Spring Boot)

```sh
# 1. Clone and cd into backend folder
git clone https://github.com/your-username/amit-portfolio.git
cd amit-portfolio/amit-portfolio-backend

# 2. Update MongoDB URI
# Open src/main/resources/application.properties and set your
# spring.data.mongodb.uri

# 3. Run the server
./mvnw spring-boot:run
# Server runs on http://localhost:8080
```

# 2\. Frontend (React)

```sh
# 1. Navigate to frontend folder
cd ../amit-portfolio-frontend

# 2. Install dependencies
npm install

# 3. Create .env file with this content:
# VITE_API_BASE_URL=http://localhost:8080

# 4. Run the client
npm run dev
# Client runs on http://localhost:5173
```

-----




Author
Amit Bagdi



