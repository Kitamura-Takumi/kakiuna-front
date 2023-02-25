import { useState } from "react";
import Home from "./Home";
import { Route, Routes, Link } from "react-router-dom";
// import axios from "axios";

const Register = () => {
    const [username, setUserName] = useState();
    const [mail, setMail] = useState("");
    const [passward, setPassward] = useState("");
    const [passward2, setPassward2] = useState("");

    const [addMail, setAddMail] = useState("");
    const [addpassward, setAddPassward] = useState("");
    const [addpassward2, setAddPassward2] = useState("");

    const onClickRegisterSubmit = () => {
        setUserName(username);
        setAddMail(mail);
        setAddPassward(passward);
        setAddPassward2(passward2);

        <Routes>
        < Route exact path="/" element={<Home />} />
        </Routes>

    }
    return (
        <>
        
        <div className="content">
        <h1>入会申し込み</h1>
        <p>入会するには次のフォームに必要事項をご記入ください</p>
        <div className="control">
            <label >ユーザーネーム <spam className="required">必須</spam></label>
            <input id="username" type="text" value={username} onChange={(event) => setUserName(event.target.value)}/>
        </div>
        <div className="control">
            <label for="mymail">メールアドレス <spam className="required">必須</spam></label>
            <input id="mail" type="email" value={mail} onChange={(event) => setMail(event.target.value)}/>
        </div>
        <div className="control">
            <label for="password">パスワード <spam className="required">必須</spam></label>
            <input id="password" type="password" value={passward} onChange={(event) => setPassward(event.target.value)}/>
        </div>
        <div className="control">
            <label for="password2">パスワード(確認) <spam className="required">必須</spam></label>
            <input id="password2" type="password" value={passward2} onChange={(event) => setPassward2(event.target.value)}/>
        </div>
        <Link to="/">
            <button onClick={onClickRegisterSubmit} type="submit">登録する</button>
        </Link>
    </div>
     </>
    )
}

export default Register;

// export const onClickRegisterSubmit = async (username, mymail, passward, passward2) => {
//     await axios.post("", {
//         username,
//         mymail,
//         passward,
//         passward2,
//     });
// };
