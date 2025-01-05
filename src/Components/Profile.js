import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({ profile }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    console.log(`${profile.name} has been ${saved ? "saved" : "unsaved"}`);
  }, [saved]);

  return (
    <div className={`profile ${saved ? "saved" : ""}`}>
      <h2>{profile.name}</h2>
      <p>Major: {profile.major}</p>
      <p>Favorite Food: {profile.food}</p>
      <p>Favorite Dining Hall: {profile.diningHall}</p>
      <p>Favorite Meal Exchange Spot: {profile.mealExchange}</p>
      <button onClick={() => setSaved(!saved)}>
        {saved ? "Unsave Friend" : "Save Friend"}
      </button>
    </div>
  );
};

export default Profile;
