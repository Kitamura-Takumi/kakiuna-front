import { useState } from "react";
import "./Login.css"
import Home from "./Home";
import { Route, Routes, Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [button, setbuton] = useState("");

  const [addname, setAddname] = useState("");
  const [addpassword, setAddpassword] = useState("");
  const [addButton, setAddButton] = useState("");

  const onClickGetValue = () => {
    setAddname(name);
    setAddpassword(password);
    setAddButton(button);

    setname("");
    setpassword("");
    setbuton("");
  };

  
  return (
    <>
    <Routes>
        <Route exact path="/home" element={<Home />} />
    </Routes>
      <div className="login01">
        <div>
          <div className="text01">
           <p>ユーザーネーム</p>
          </div>
          <input
            type="text"
            value={name} onChange={(event) => setname(event.target.value)}/>
        </div>
        <div>
         <div className="text01">
           <p>パスワード</p>
          </div>
          <input
            type="password"
            value={password} onChange={(event) => setpassword(event.target.value)}/>
        </div>
        <div className="botton01">
          <Link to="/">
           <button>送信</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;

// export const onClickLoginButton = async (username, passward) => {
//   await axios.post("", {
//     username,
//     passward,
//   });
// };
