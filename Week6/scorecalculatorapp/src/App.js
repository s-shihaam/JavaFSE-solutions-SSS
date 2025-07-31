import React from "react";
import { CalculateScore } from "./components/calculateScore";

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Riya Sharma"
        School="Greenfield High School"
        total={420}
        goal={5}
      />
    </div>
  );
}

export default App;
