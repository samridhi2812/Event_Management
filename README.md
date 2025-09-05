# 🎉 Event Management System  

A **full-stack web application** built with **React (frontend)** and **Node.js + Express + MongoDB (backend)**.  
Users can **sign up, log in, search, book, and create events** with authentication handled using React Context API.  

---

## 🚀 Features  
- 🔑 User authentication (signup, login, logout with hashed passwords)  
- 🔒 Protected routes (only logged-in users can access certain pages)  
- 📝 Event booking & creation forms with validation  
- 🔍 Event search & filter functionality  
- 📱 Responsive UI using Tailwind CSS  

---

## 🛠️ Tech Stack  
**Frontend**: React, React Router, Context API, React Hook Form, Tailwind CSS  
**Backend**: Node.js, Express.js, MongoDB Atlas  
**Libraries**: bcryptjs (password hashing), cors, dotenv, axios  

---

## 🔑 How It Works  
- **Auth** → User info stored in MongoDB (hashed password) + React Context + localStorage for persistence  
- **Frontend ↔ Backend** → Connected via REST APIs (Express routes)  
- **Protected Routes** → If not logged in, user is redirected to signup/login  

---

