import { useState } from "react";
import "./App.css";
import Sapporo from "./sapporo";
import { Route, Routes, Link } from "react-router-dom";

const stadiumValue = {
  "name":
  "element":
},
{

}

const Home = () => {
  return (
    <div className = "html">
        <Routes>
          <Route exact path="/login" element={<loginElement/>} /> 
          <Route exact path="/" element={<HomeElement />} />
        </Routes>

          for (let i; i < stadiumValue.lenght; i++){
              <Route exact path={stadiumValue.name} element={<stadiumValue.HomeElement/>} />
          }
        
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
    </div>
  );
}




export default Home;
