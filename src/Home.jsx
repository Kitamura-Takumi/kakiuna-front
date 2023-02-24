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
      <div className="box">
        <Routes>
          <Route exact path="/" element={<SapporoElement />} />
          <Route exact path="/sapporo" element={<SapporoElement />} />
        </Routes>
      </div>

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

function SapporoElement() {
  return (
    <>
      <h1>
        <Link to="/sapporo">
          <span>札幌ドーム</span>
        </Link>
      </h1>
      <p>☆☆☆☆☆</p>
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

export default Home;
