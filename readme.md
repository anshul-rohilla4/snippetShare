# SnippetShare ✨

A simple and efficient web application for developers to create, browse, and manage code snippets.

**[➡️ Live Demo](https://snippetsshare.netlify.app/)**

---

## 📸 Preview

A "cool" README always needs screenshots! Add 1-2 images here to show off your UI.

* **To add images:**
    1.  Take a screenshot and add it to your repo (maybe in an `assets` folder).
    2.  Replace the line below with: `![App Screenshot](assets/your-image.png)`


*Homepage view of all snippets*


*Creating a new snippet*

---

## 📌 Features

* **📜 Browse Snippets:** A clean, central feed to see all shared code.
* **➕ Create New Snippets:** Easily add your own code with a title.
* **👀 View Details:** Click on any snippet to see its full content.
* **📱 Responsive UI:** Looks great on both desktop and mobile.
* **☁️ Fully Cloud-Hosted:** Deployed on Netlify and Render for high availability.
* **🔐 Secure API:** CORS-enabled Spring Boot backend for secure communication.

---

## 🛠 Tech Stack & Tools

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

### Database & Deployment
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-00684A?style=for-the-badge&logo=mongodb&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

---

## 🏗 Architecture

SnippetShare uses a classic, decoupled full-stack architecture:

* **Frontend:** A **React + Vite** single-page application (SPA) handles all user-facing views. It's hosted on **Netlify** for fast global delivery.
* **Backend:** A **Spring Boot** application (running Java 21) serves a secure **REST API** for all data operations. It's **Dockerized** and deployed as a web service on **Render**.
* **Database:** **MongoDB Atlas** (a cloud-hosted NoSQL database) is used for flexible and scalable storage of all snippet data.

---

## 🚀 Getting Started Locally

To run this project on your own machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/snippetShare.git](https://github.com/YOUR_USERNAME/snippetShare.git)
cd snippetShare
