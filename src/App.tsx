import { useState } from "react";
import "./App.css";
import { Demo, Hero } from "./components";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./views";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
