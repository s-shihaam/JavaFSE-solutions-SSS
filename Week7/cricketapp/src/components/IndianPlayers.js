import React from "react";

function IndianPlayers() {
  const team = [
    "Virat",
    "Rohit",
    "Rahul",
    "Hardik",
    "Jadeja",
    "Shami",
    "Bumrah",
    "Ashwin",
    "Dhoni",
    "Pant",
    "Gill",
  ];

  // Destructuring Odd & Even Team Players
  const oddTeam = team.filter((_, i) => i % 2 === 0);
  const evenTeam = team.filter((_, i) => i % 2 !== 0);

  // Merge feature of ES6
  const T20players = ["Surya", "Ishan"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2> Team Distribution</h2>
      <p>
        <strong>Odd Team:</strong> {oddTeam.join(", ")}
      </p>
      <p>
        <strong>Even Team:</strong> {evenTeam.join(", ")}
      </p>

      <h3> Merged Player List</h3>
      <p>{allPlayers.join(", ")}</p>
    </div>
  );
}

export default IndianPlayers;
