import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import EventDetails from "./components/Event_detail";
import ResultsPage from "./components/ResultsPage";
import LikedPage from "./components/LikedPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import LogoutPage from "./components/LogoutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/likedEvents" element={<LikedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
