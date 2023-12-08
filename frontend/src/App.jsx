// App.jsx

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import PrivateRoute from "./Components/Private";
import Spinner from "./Components/Spinner";
import Account from "./pages/Account";
import BidsAndProducts from "./pages/BidsAndProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const {loading} = useSelector(state => state.loaders);
  return (
    <BrowserRouter>
      {loading && <Spinner/>}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute/>}>
              <Route path="/account" element={<Account/>}></Route>
              <Route path="/bids&products" element={<BidsAndProducts/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
