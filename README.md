# 🚀 Docker Assignment – Multi-Service Web Stack

This project showcases how to orchestrate a basic multi-container web application using **Docker Compose**.  
It includes the following communication flows:

- **Frontend (React)** → **Backend (PHP)**
- **Backend (PHP)** → **Database (MySQL)**

This setup simulates a common full-stack application, where different technologies interact smoothly within Docker’s internal networking.

---

## 🧱 Tech Stack

| Layer     | Technology        |
|-----------|-------------------|
| Frontend  | React.js (Node 18)|
| Backend   | PHP (Apache)      |
| Database  | MySQL 5.7         |

---

## 📂 Project Structure

```
.
├── docker-compose.yml       # Main orchestration file
├── .gitignore               # Ignore node_modules & env files
├── README.md                # This file
├── frontend/                # React frontend
│   ├── Dockerfile
│   ├── package.json
│   └── src/App.js
└── php-backend/             # PHP backend connected to MySQL
    ├── Dockerfile
    └── index.php
```

---

## ⚙️ How to Run Locally

1. Make sure you have Docker & Docker Compose installed
2. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/docker-assignment.git
   cd docker-assignment
   ```
3. Build and run the containers:
   ```bash
   docker-compose up --build
   ```

---

## 🌐 URLs to Access

| Service    | URL                  | Description                         |
|------------|----------------------|-------------------------------------|
| Frontend   | http://localhost:3000| React app showing backend response  |
| Backend    | http://localhost:8080| PHP connecting to MySQL             |

---

## 🧠 How It Works

- The **frontend** service sends a request to `http://php` (Docker internal DNS) to reach the PHP backend.
- The **backend** uses `mysqli` to connect to the `mysql` container and checks the connection status.
- All services are isolated but can talk to each other using their service names as hostnames.

---

## 📝 .gitignore

```gitignore
node_modules
.env
```

This keeps unnecessary or sensitive files out of your version control.


## 👨‍💻 Author

**Ahmed Salem**  
Cybersecurity Awareness Specialist Intern  
📫 [LinkedIn](https://www.linkedin.com/in/ahmed-mohamed-salem-/)
