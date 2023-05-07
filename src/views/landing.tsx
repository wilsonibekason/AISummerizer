import { useState } from "react";
import "../App.css";
import { Demo, Hero } from "../components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app ">
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  );
}

export default App;
