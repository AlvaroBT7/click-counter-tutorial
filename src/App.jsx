// importing all the react componets
import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
      <Display content={counter} />
      <div className="button-container">
        <Button
          title="Add points to counter"
          action={() => setCounter(counter + 1)}
          type="add"
        />
        <Button
          title="Remove points from counter"
          action={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
          type={"remove"}
        />
        <Button
          title="Reset points"
          action={() => setCounter(0)}
          type="reset"
        />
      </div>
    </div>
  );
};

export default App;
