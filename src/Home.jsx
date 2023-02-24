import { useState } from "react";
import "./App.css";
import Sapporo from "./sapporo";
import { Route, Routes, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <header>
        <p>login</p>
    </header>
    
        <Routes>
          <Route exact path="/login" element={<loginElement/>} /> 

          {/* <Route exact path="/sapporo" element={<SapporoElement />} /> */}
    
    
          <Route exact path="/sapporo" element={<Sapporo />} />
          <Route exact path="/" element={<HomeElement />} />
        </Routes>
      

      {/* <div className="box">
        <Routes>
          <Route exact path="/" element={<KyotoElement />} />
        </Routes>
      </div>

      <div className="box">
        <Routes>
          <Route exact path="/" element={<OkinawaElement />} />
        </Routes>
      </div> */}
    </>
  );
};

function HomeElement() {
  return (
    <>
    <div className="box">
      <h1>
        <Link to="/sapporo">
          <p>札幌ドーム</p>
        </Link>
      </h1>
      <p>☆☆☆☆☆</p>
      </div>
    </>
  );
}

// function KyotoElement() {
//   return (
//     <>
//       <Sapporo />
//       <h1>
//         <Link to="/sapporo">
//           <span>札幌ドーム</span>
//         </Link>
//       </h1>
//       <p>☆☆☆☆☆</p>
//     </>
//   );
// }

// function OkinawaElement() {
//   return (
//     <>
//       <Sapporo />
//       <h1>
//         <Link to="/sapporo">
//           <span>札幌ドーム</span>
//         </Link>
//       </h1>
//       <p>☆☆☆☆☆</p>
//     </>
//   );
// }

function loginElement() {
  return (
    <>
    <header>
        <Link to="/login">
          <p>login</p>
          </Link>
    </header>
    </>
  )
};

export default Home;
