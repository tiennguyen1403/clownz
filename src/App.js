import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import 'antd/dist/antd.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollTopButton from "./components/ScrollTopButton";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import AuthRoute from "./HOCs/AuthRoute";
import Magazine from "./pages/Magazine";
import Detail from "./pages/Detail";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  },[pathname]);

  return null;
}

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const accesstoken = localStorage.getItem("accesstoken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if(accesstoken && userInfo){
      dispatch({ type: "SET_TOKEN", payload: accesstoken });
      dispatch({ type: "SET_USER_INFO", payload: userInfo });
    }
  },[])
  return (
    <BrowserRouter>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/product/:id" element={<Detail />} />

        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ScrollTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
