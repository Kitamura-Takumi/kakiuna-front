import { useState } from "react";
import "./App.css";
import Sapporo from "./sapporo";
import { Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className = "html">
        <Routes>
          <Route exact path="/login" element={<loginElement/>} /> 
          <Route exact path="/sapporo" element={<Sapporo />} />
          <Route exact path="/kyoto" element={<kyoto />} />
          <Route exact path="/okinawa" element={<okinawa />} />
          <Route exact path="/" element={<HomeElement />} />
        </Routes>
      

      
    </div>
  );
};

function HomeElement() {
  return (
    <div>
    <header>
        <Link to="/login">
          <p>login</p>
          </Link>
    </header>

    <div className="box">
      <h1>
        <Link to="/sapporo">
          <p>札幌ドーム</p>
        </Link>
      </h1>
      <p>☆☆☆☆☆</p>
      </div>

      <div className="box">
      <h1>
        <Link to="/kyoto">
          <p>京都ドーム</p>
        </Link>
      </h1>
      <p>☆☆☆☆☆</p>
      </div>

      <div className="box">
      <h1>
        <Link to="/oosaka">
          <p>大阪ドーム</p>
        </Link>
      </h1>
      <p>☆☆☆☆☆</p>
      </div>
    </div>
  );
}




export default Home;
