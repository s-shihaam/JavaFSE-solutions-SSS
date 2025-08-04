import React from "react";
import "./App.css";

function App() {
  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "https://dbs.uk.com/wp-content/uploads/2023/01/projects-800.jpg",
    },
    {
      name: "SmartWorks",
      rent: 65000,
      address: "Bangalore",
      image:
        "https://www.officelovin.com/wp-content/uploads/2018/11/tech-company-seatle-office-m1.jpg",
    },
    {
      name: "CoworkIN",
      rent: 40000,
      address: "Hyderabad",
      image:
        "https://www.officelovin.com/wp-content/uploads/2015/09/samsung-silicon-valley-hq-4.jpg",
    },
  ];

  return (
    <div className="App">
      <h1>Office Space at Affordable Range</h1>

      {offices.map((office, index) => (
        <div key={index} className="office-card">
          <img src={office.image} alt={office.name} width="300px" />
          <h2>Name: {office.name}</h2>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            Rent: Rs. {office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
