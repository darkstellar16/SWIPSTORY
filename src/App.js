import './App.css';
import React, { useState } from 'react';
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoggedIn from "./pages/LoggedIn/LoggedIn.jsx"
import BookMark from './pages/BookMark/BookMark.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserContext = createContext();

function App() {

  const [login, setLogin] = useState(false);
  return (
    <UserContext.Provider
      value={{ login, setLogin }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/log' element={<LoggedIn />} />
            <Route exact path='/bookmark' element={<BookMark />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
