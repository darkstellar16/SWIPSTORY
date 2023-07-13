import './App.css';
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoggedIn from "./pages/LoggedIn/LoggedIn"
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log" element={<LoggedIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
