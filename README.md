# 🔐 ShieldShare

**ShieldShare** is a secure file-sharing web application designed to protect your files with modern cybersecurity best practices. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it allows users to upload, share, and access files securely with authentication and encryption features.

---

## 🚀 Features

- 🔒 **Secure File Upload & Download**
- 🧑‍💻 **User Authentication** with JWT
- 🔐 **Encrypted File Storage**
- ⏳ **Expiring and Limited-Access Download Links**
- 🕵️‍♂️ **Audit Logging** for file access (optional)
- 🖥️ **Responsive Frontend** with React.js

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS (or your CSS framework)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer for file uploads
- Bcrypt, JWT for authentication

---

## 📂 Folder Structure

ShieldShare/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── main.jsx
└── README.md


---







## ⚙️ Installation & Running Locally

### 1. Clone the repo
```bash
git clone https://github.com/ayush1918/ShieldShare.git
cd ShieldShare

cd backend
npm install
# Create .env file with your MongoDB URI
npm start

cd frontend
npm install
npm start

