import "./styles.css";
import { useState } from "react";
import Accordian from "./Accordian";

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <h1>Accordion</h1>
      <div className="challenge-container">
        <div className="multi-accordian-check-box">
          <label> Is multiple open accordion allowed?</label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
        </div>
        <Accordian checked={checked} />
      </div>
    </div>
  );
}
