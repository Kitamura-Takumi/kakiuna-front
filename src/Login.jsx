import { useState } from "react";
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
        < Route exact path="/home" element={<Home />} />
    </Routes>
  };

  
  return (
    <>
    
    

      <div>
        <p>ユーザーネーム</p>
        <input
          id="username"
          type="text"
          value={name} onChange={(event) => setname(event.target.value)}/>
      </div>
      <div>
        <p>パスワード</p>
        <input
          id="password"
          type="password"
          value={password} onChange={(event) => setpassword(event.target.value)}/>
      </div>

      <Link to="/">
      <button onClick={onClickLoginButton}>送信</button>
      </Link>
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
