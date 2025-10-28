import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PitchDeck from "./pages/PitchDeck";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PitchDeck />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;