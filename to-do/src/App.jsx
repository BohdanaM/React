import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/contacts">Контакти</Link>
              </li>
              <li>
                <Link to="/about">Про мене</Link>
              </li>
              <li>
                <button onClick={toggleTheme}>Перемикач теми</button>
              </li>
            </ul>
          </nav>
        </header>

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
