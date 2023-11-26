import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import EventDetails from "./components/Event_detail";
import ResultsPage from "./components/ResultsPage";
import LikedPage from "./components/LikedPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/liked" element={<LikedPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
