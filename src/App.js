import './App.css';
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoggedIn from "./pages/LoggedIn/LoggedIn.jsx"
import BookMark from './pages/BookMark/BookMark.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log" element={<LoggedIn />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
