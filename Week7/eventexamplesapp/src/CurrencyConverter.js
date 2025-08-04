import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  const handleSubmit = (e) => {
    e.preventDefault();
    let converted = 0;

    if (currency === "Euro") {
      converted = parseFloat(amount) * 80; // Assuming 1 Euro = 80 INR
    }

    alert(`Converting to ${currency} Amount is ${converted}`);
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Euro">Euro</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
