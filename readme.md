# 🏨 Airbnb Clone (Express + EJS + REST API)

A simple Airbnb-like web application built using **Node.js, Express, EJS, MongoDB, and RESTful APIs**.  
It allows users to **add, view, update, and delete hotels** with details such as name, price, location, city, description, images, and status.

---

## 📂 Project Structure

├── public/ # Static assets (CSS, images)
│ └── styles/
│ └── newhotel.css # Form and layout styling
│
├── views/ # EJS templates
│ ├── index.ejs # List all hotels
│ ├── new.ejs # Add new hotel form
│ ├── view.ejs # View single hotel details
│ ├── edit.ejs # Edit hotel form
│
├── models/
│ └── hotel.js # Mongoose schema for hotels
│
├── routes/
│ └── hotelRoutes.js # REST API routes
│
├── app.js # Express server setup
├── package.json
└── README.md


---

## 🚀 Features

- Add a new hotel (with image upload support)  
- View all hotels in a styled grid  
- View details of a single hotel (like Airbnb listing)  
- Update hotel information  
- Delete a hotel (with confirmation)  
- Uses **MongoDB** + **Mongoose** for data storage  
- EJS for server-side rendering  
- CSS for clean Airbnb-style UI  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Frontend:** EJS templates + CSS  
- **Database:** MongoDB with Mongoose  
- **Templating Engine:** EJS  
- **Method Override:** For PUT/PATCH and DELETE support in forms  

---

## 📦 Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/airbnb-clone.git
