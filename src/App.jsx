import { useState } from "react";
import "./App.css";
import nounData from "./assets/noun.json";
import adjData from "./assets/adj.json";

// Noun logic
const getRandomNoun = () => {
  return nounData[Math.floor(Math.random() * nounData.length)];
};

// Adjective logic
const getRandomAdj = () => {
  return adjData[Math.floor(Math.random() * adjData.length)];
};

function App() {
  const [noun, setNoun] = useState(getRandomNoun());
  const [adj, setAdj] = useState(getRandomAdj());

  // Logic to choose and display a noun or adjective
  const changeNoun = () => {
    setNoun(getRandomNoun());
  };
  const changeAdj = () => {
    setAdj(getRandomAdj());
  };

  return (
    <>
      <div id="wrapper" className="center">
        <h1>Ding Ding!</h1>
        <div id="quote-box">
          <div id="text" className="text">
          <p className="words">{adj}</p>
          <p className="words">{noun}</p>
          </div>
          <div>
            <div id="buttons">
              <button
                type="button"
                onClick={() => {
                  changeNoun()
                  changeAdj()
                }}
                id="new"
              >
                Next Words!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
