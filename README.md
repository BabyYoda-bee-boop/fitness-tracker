# 🏋️ Workout Tracker App

A simple React-based workout tracker that lets you:

- Log workouts by muscle group and exercise
- View an overview dashboard
- Store and retrieve data using a local **json-server** API

This project is designed as a learning-focused app, combining React hooks, React Router, and basic REST API interactions.

---

## 🚀 Features

- **Overview page** with workout statistics (work in progress)
- **Log workout page** to select exercises and submit workouts
- Data persistence via **json-server**
- Client-side routing with `react-router-dom`
- Error handling and loading states

---

## 🛠 Tech Stack

- **React** (hooks: `useState`, `useEffect`)
- **React Router**
- **json-server** (mock REST API)
- Fetch API for HTTP requests

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

---

## 🗄 json-server Setup

This project relies on **json-server** running locally to provide workout and exercise data.

### 1. Install json-server (if not already installed)

You can install it globally:

```bash
npm install -g json-server
```

Or locally (recommended):

```bash
npm install json-server --save-dev
```

---

### 2. Structure of `db.json` file

At the root of the project, there is already a `db.json` file provided with the following structure:

```json
{
  "exercises": {
    "Upper Body": [
      "Bench Press",
      "Pull-Ups / Chin-Ups",
      "Overhead Press",
      "Push-Ups",
      "Bent-Over Barbell Row",
      "Dips"
    ],
    "Lower Body": [
      "Squats",
      "Deadlifts",
      "Lunges",
      "Hip Thrusts / Glute Bridges",
      "Good Mornings",
      "Calf Raises"
    ],
    "Core": [
      "Crunches",
      "Reverse Crunches",
      "Russian Twists",
      "Plank",
      "Mountain Climbers",
      "V-Ups"
    ]
  },
  "workouts": []
}
```

You can alter the `db.json` file and adjust muscle groups and exercises as needed.

---

### 3. Start json-server

If installed globally:

```bash
json-server --watch db.json --port 3000
```

If installed locally:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

```
http://localhost:3000
```

You can of course choose a different port if 3000 is already in usee

Endpoints used in the app:

- `GET /exercises`
- `GET /workouts`
- `POST /workouts`

---

## ▶️ Running the App

In a separate terminal, start the React development server:

```bash
npm run dev
```

(or `npm start`, depending on your setup)

Then open:

```
http://localhost:5173
```

(or the port shown in your terminal)

⚠️ **Important:** json-server must be running for the app to work correctly. The server has to be running begore you run npm, else it will fail to fetch the data - if so, just refresh the page after you get your server running in parallel with your npm

---

## 📁 Project Structure (simplified)

```
src/
├── Components/
│   ├── Header/
│   ├── DisplayCard/
│   ├── SelectExercise/
│   ├── AddExercise/
│   └── ...
├── assets/
├── App.jsx
└── main.jsx
```

---

## 🧠 Notes & Work in Progress

- Workout statistics logic (`calculateStats`) is currently a placeholder
- Overview cards display temporary `TODO` values
- Future improvements may include:
  - Real weekly streak calculations
  - Workout history view
  - Better form validation

---

## 📄 License

This project is for learning and personal use.

---

Happy lifting 💪 and happy coding 👩‍💻👨‍💻
