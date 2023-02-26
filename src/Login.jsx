import { useState } from "react";
import "./Login.css";
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

  const onClickLoginButton = () => {
    setAddname(name);
    setAddpassword(password);
    setAddButton(button);

    setname("");
    setpassword("");
    setbuton("");
    <Routes>
      <Route exact path="/home" element={<Home />} />
    </Routes>;
  };

  return (
    <>
      <div className="text01">
        <p>ユーザーネーム</p>
      </div>
      <input
        type="text"
        value={name}
        onChange={(event) => setname(event.target.value)}
      />

      <div className="text01">
        <p>パスワード</p>
      </div>
      <input
        type="password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
      <Link to="/">
        <button>送信</button>
      </Link>
    </>
  );
};
export default Login;
