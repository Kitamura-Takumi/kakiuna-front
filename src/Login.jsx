import { useState } from "react";
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
      <div>
        <p>ユーザーネーム</p>
        <input
          type="text"
          value={name} onChange={(event) => setname(event.target.value)}/>
      </div>
      <div>
        <p>パスワード</p>
        <input
          type="password"
          value={password} onChange={(event) => setpassword(event.target.value)}
        />
      </div>
      <button type="submit">送信</button>
    </>
  );
};
export default Login;
