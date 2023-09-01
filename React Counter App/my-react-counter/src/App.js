import Button from "./Button";
import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="full_screen">
      <div className="main">
        <button className="counter">{counter}</button>

        <div className="allBtn">
          <Button Function={increment} title="Increase it By 1" />
          <Button Function={decrement} title="Decrease it By 1" />
          <Button Function={resetCounter} title="Reset Value" />
        </div>
      </div>
    </div>
  );
}

export default App;
