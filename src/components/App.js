import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { Suspense, lazy } from "react";

import User from "./User";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navbar />} />

          <Route path="/users/:id" element={<User />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
