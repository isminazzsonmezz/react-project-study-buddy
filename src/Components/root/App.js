import React, { useState } from 'react';
import { Container } from 'reactstrap';
import HomePage from '../Home/HomePage';
import LoginPage from '../Login/Login';
import { isLoggedIn } from "../Login/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyCalendar from '../Calendar/MyCalendar';
import MyToDoList from '../ToDoList/ToDoList';
import MyNotes from '../Notes/MyNotes';
import { logout } from "../Login/auth";
import { useNavigate} from "react-router-dom";
import Layout from './Layout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  /*
    // useLocation() ile mevcut URL yolunu alıyoruz..
    const location = useLocation();
    // login sayfasında değilsek Navbar göster
    const hideNavbar = location.pathname === "/";
  */

  return (
    <Container>
      {/*
      {!hideNavbar && <MyNavbar handleLogout = {handleLogout}/>}
      */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout handleLogout={handleLogout} />}>
          <Route
            path="/home"
            element={isLoggedIn() ? <HomePage /> : <Navigate to="/" />}
          />
          <Route path="/MyCalender" element={<MyCalendar />} />
          <Route path="/MyToDoList" element={<MyToDoList />} />
          <Route path="/MyNotes" element={<MyNotes/>} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;