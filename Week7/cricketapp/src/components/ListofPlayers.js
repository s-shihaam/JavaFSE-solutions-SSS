import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 45 },
    { name: "KL Rahul", score: 60 },
    { name: "Hardik", score: 72 },
    { name: "Jadeja", score: 66 },
    { name: "Shami", score: 40 },
    { name: "Bumrah", score: 95 },
    { name: "Ashwin", score: 71 },
    { name: "Dhoni", score: 90 },
    { name: "Pant", score: 55 },
    { name: "Gill", score: 78 },
  ];

  // Map to display players
  const allPlayers = players.map((p, i) => (
    <li key={i}>
      {p.name} - {p.score}
    </li>
  ));

  // Filter players with score < 70
  const below70 = players
    .filter((p) => p.score < 70)
    .map((p, i) => (
      <li key={i}>
        {p.name} - {p.score}
      </li>
    ));

  return (
    <div>
      <h2>🏏 All Players</h2>
      <ul>{allPlayers}</ul>

      <h3>🔻 Players with Score Below 70</h3>
      <ul>{below70}</ul>
    </div>
  );
}

export default ListofPlayers;
