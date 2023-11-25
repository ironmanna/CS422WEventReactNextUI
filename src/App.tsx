import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import EventDetails from "./components/Event_detail";
import ResultsPage from "./components/ResultsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Event_detail" element={<EventDetails />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
