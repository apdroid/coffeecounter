import React from "react";
import "./App.css";

import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header>Coffee Counter</header>
      <Counter props={getCount()} />
    </div>
  );
}

function getCount() {
  if (localStorage.getItem("coffeeCount") === null) {
    return { count: "0", date: new Date() };
  } else {
    return {
      count: localStorage.getItem("coffeeCount"),
      date: localStorage.getItem("date")
    };
  }
}

export default App;
