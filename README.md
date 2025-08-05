# Basti ki Pathshala - MERN Intern/Volunteer Portal

Welcome to **Basti ki Pathshala**, a community-driven internship and volunteer registration portal built with the MERN stack (MongoDB, Express, React, Node.js). This platform aims to empower young people by connecting them with meaningful internship and volunteer opportunities while providing an easy-to-use admin interface for managing applicants.

---

## Demo Video

Watch this short video to see how the website works, including user registration and admin functionalities:


https://drive.google.com/file/d/1Lnqp52mDp8biyu5YhhvOjhSCeFk9u16D/view?usp=sharing

---

## Features

- **User Registration:** Students and volunteers can register by filling out a form with basic details and selecting their interest as Internship or Volunteer.
- **Admin Login:** Secure admin login with fixed credentials to access the applicants list.
- **Applicants Management:** Admin can view the list of registered applicants with their contact and interest details.
- **Responsive design:** Works across different device sizes.
- **Modern UI:** Clean and intuitive React frontend with smooth user experience.

---

## Technologies Used

| Client (Frontend)       | Server (Backend)   |
|------------------------|-------------------|
| React                  | Node.js           |
| React Router           | Express.js        |
| Axios                  | MongoDB + Mongoose|
| CSS (inline styles)    | REST API          |

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or connection string for cloud MongoDB

### Installation

Clone the repository:

```
git clone https://github.com/yourusername/mern-intern-app.git
cd mern-intern-app
```

Install dependencies for both client and server:

```
npm install            # Installs root dependencies if any
cd client
npm install
cd ../server
npm install
```

### Running the Application Locally

Start MongoDB if not running. Then open two terminals:

- Terminal 1: Run the backend server

```
cd server
npm run dev           # Or node server.js depending on your setup
```

- Terminal 2: Run the React frontend

```
cd client
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000) and backend API on [http://localhost:5000](http://localhost:5000).

---

## Admin Credentials (For Demo)

- Username: `admin`
- Password: `password123`

---

## Project Structure

```
mern-intern-app/
├── client/            # React frontend
│   ├── public/
│   └── src/
├── server/            # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .gitignore
└── README.md
```

---

## Future Enhancements

- Implement real authentication and authorization with password hashing and JWT.
- Add pagination and search/filtering for admin applicants list.
- Enable email notifications upon registration.
- Improve UI with CSS frameworks like Tailwind or Material UI.
- Deploy to cloud services for real-world access.

---

## License

This project is licensed under the MIT License.

---


