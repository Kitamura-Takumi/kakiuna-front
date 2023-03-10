import { useState } from "react";
import "./App.css";
import Sapporo from "./Sapporo";

import Review from "./Review";
import Login from "./Login";
import Register from "./Register";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import panasonic from "./panasonic";
import Kashima from "./kashima";


import { Route, Routes, Link } from "react-router-dom";
import Panasonic from "./panasonic";

const stadiumValue = [
  { path: "/sapporo", Component: Sapporo },
  //{ path: "/aomori", Component: Aomori },
];


const Home = () => {
  return (
    <div className="html">

      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/review" element={<Review />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<HomeElement />} />
        <Route exact path="/kashima" element={<Kashima />} />
        <Route exact path="/panasonic" element={<Panasonic />} />
        
        {/* <Route exact path="/sapporo" element={<Value.Component />} /> */}
        {stadiumValue.map((Stadiums) => (
          <Route exact path={Stadiums.path} element={<Stadiums.Component />} key={Stadiums.path} />
        ))}
      </Routes>
    </div>
  );
};

function HomeElement() {
  return (
    <>
    <div className="nabi">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/review" className="link">
                <p>レビュー</p>
              </Link>
              </Navbar.Brand>
              <Navbar.Brand href="#home">
              <Link to="/login" className="link">
                <p>ログイン</p>
              </Link>
              </Navbar.Brand>
              <Navbar.Brand href="#home">
              <Link to="/register" className="link">
                <p>会員登録</p>
              </Link>
              </Navbar.Brand>
              <Navbar.Brand href="#home">
              <Link to="/" className="link">
                <p>ログアウト</p>
              </Link>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>

      <div className="box">
        <h1>
          <Link to="/sapporo">
            <p>札幌ドーム</p>
          </Link>
        </h1>
        <p>☆</p>
      </div>

      <div className="box">
        <h1>
          <Link to="/kashima">
            <p>茨城県立カシマサッカースタジアム</p>
          </Link>
        </h1>
        <p>☆</p>
      </div>

      <div className="box">
        <h1>
          <Link to="/panasonic">
            <p>パナソニックスタジアム</p>
          </Link>
        </h1>
        <p>☆</p>
      </div>
    </>
  );
}

export default Home;
