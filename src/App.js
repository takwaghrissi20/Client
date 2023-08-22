// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ListTodos from "./components/ListTodos";
import Login from "./components/Login";
import EditTodo from "./components/EditTodo";
import InputTodo from "./components/InputTodo";
import Register from "./components/Register";
import Forgotpwd from "./components/Forgotpwd";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //const [user_id,setUser_id]=React.useState("")
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listTodo" element={<ListTodos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpwd" element={<Forgotpwd />} />
      </Routes>
    </>
  );
}

export default App;
