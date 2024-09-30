import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import User from "./components/User";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
