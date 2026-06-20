# ☕ CoffeeHub Rating System

A modern Coffee Rating Application built with Node.js, Express, SQLite, HTML, CSS, and JavaScript.

Users can rate their favorite coffee beverages using a 1–5 star rating system. Ratings are stored in a SQLite database and displayed dynamically on the website.

## 🚀 Features

* ⭐ Rate coffees from 1 to 5 stars
* ☕ View coffee collection
* 📊 Live rating updates
* 💾 SQLite database integration
* 🎨 Responsive and modern UI
* 🔄 Real-time data refresh
* 🏆 Top-rated coffee display

## 🛠️ Technologies Used

* Node.js
* Express.js
* SQLite3
* HTML5
* CSS3
* JavaScript

## 📂 Project Structure

coffee-rating-app/

├── server.js

├── database.db

├── package.json

└── public/

    ├── index.html

    ├── style.css

    └── script.js

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/CoffeeHub-Rating-System.git
cd CoffeeHub-Rating-System
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node server.js
```

### Open in browser

```text
http://localhost:3000
```

## 📊 Database

The application uses SQLite to store coffee ratings.

Table Structure:

```sql
CREATE TABLE coffees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    total_rating INTEGER DEFAULT 0,
    rating_count INTEGER DEFAULT 0
);
```

## 🎯 Future Enhancements

* User authentication
* Review comments
* Rating analytics dashboard
* Admin panel
* Dark mode
* Coffee image uploads
* Trending coffee section

## 📸 Screenshots

Add screenshots of your application here.

## 👩‍💻 Author

Madhulika K

## 📜 License

This project is created for educational and internship learning purposes.
