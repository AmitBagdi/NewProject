Amit Portfolio — Combined Fullstack Project
==========================================

This archive contains a minimal, runnable combination of:
  - backend/  -> Spring Boot (Java 17, Maven)
  - frontend/ -> React (Vite)

Steps:
  1) Extract the archive.
  2) Configure backend/src/main/resources/application.properties with your MongoDB URI.
  3) In frontend, update .env if needed (VITE_API_BASE_URL).
  4) Start backend: ./mvnw spring-boot:run
  5) Start frontend: npm install && npm run dev

Notes:
  - This is a minimal assembly using the code snippets you provided.
  - For deployment follow the Render + Netlify guide included earlier.
