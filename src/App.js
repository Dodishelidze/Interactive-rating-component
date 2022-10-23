import "./App.css";
import Star from "./components/Star";
import Text from "./components/Text";
import Ratelist from "./components/Ratelist";
import SubbmitButton from "./components/SubbmitButton";
import ThankYou from "./components/ThankYou";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [rates, setRates] = useState([
    { id: 1, value: 1, active: false },
    { id: 2, value: 2, active: false },
    { id: 3, value: 3, active: false },
    { id: 4, value: 4, active: false },
    { id: 5, value: 5, active: false },
  ]);

  const [choosen, setChoosen] = useState(0);

  const resetChoosen = () => {
    const resetRates = rates.map((r) => {
      return { ...r, active: false };
    });
    setRates(resetRates);
  };

  const changeActiveButton = (id) => {
    setChoosen(id);
    const updateRates = rates.map((r) => {
      r.active = false;
      if (r.id == id) {
        return { ...r, active: !r.active };
      }
      return r;
    });
    setRates(updateRates);
  };

  return (
    <div className="main">
      <div className="main-container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Star />
                  <Text />
                  <Ratelist
                    rates={rates}
                    changeActiveButton={changeActiveButton}
                  />
                  <SubbmitButton
                    choosen={choosen}
                    resetChoosen={resetChoosen}
                  />
                </>
              }
            />
            <Route path="/thanks" element={<ThankYou choosen={choosen} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
