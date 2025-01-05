import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const profiles = [
    {
      name: "Jane Doe",
      major: "CS",
      food: "Mexican",
      diningHall: "Elder",
      mealExchange: "Lisa's",
    },
    {
      name: "John Smith",
      major: "Engineering",
      food: "Chinese",
      diningHall: "Allison",
      mealExchange: "Fran's",
    },
  ];

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <h1>Find Your Perfect Match!</h1>
      <div className="filters">
        <label htmlFor="cuisine">Favorite Cuisine:</label>
        <select id="cuisine">
          <option value="mexican">Mexican</option>
          <option value="sushi">Chinese</option>
          <option value="italian">Italian</option>
        </select>
        <label htmlFor="dining-hall">Favorite Dining Hall:</label>
        <select id="dining-hall">
          <option value="elder">Elder</option>
          <option value="allison">Allison</option>
          <option value="sargent">Sargent</option>
        </select>
        <label htmlFor="meal-exchange">Favorite Meal Exchange:</label>
        <select id="meal-exchange">
          <option value="lisas">Lisa's</option>
          <option value="mod">Mod</option>
          <option value="frans">Fran's</option>
        </select>
      </div>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <Profile key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default App;
