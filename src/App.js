import './App.css';
import React, { useState } from 'react';
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoggedIn from "./pages/LoggedIn/LoggedIn.jsx"
import BookMark from './pages/BookMark/BookMark.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react'

const UserContext = createContext();

function App() {

  const [login, setLogin] = useState(false);
  return (
    <UserContext.Provider
      value={{ login, setLogin }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/log' element={<LoggedIn />} />
            <Route path='/bookmark' element={<BookMark />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
