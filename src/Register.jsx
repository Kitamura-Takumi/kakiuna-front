import { useState } from "react";
const Register = () => {
    const [mail, setMail] = useState("");
    const [passward, setPassward] = useState("");

    const [addMail, setAddMail] = useState("");
    const [addpassward, setAddPassward] = useState("");

    const onClickSubmit = () => {
        setAddMail(mail);
        setAddPassward(passward);
    }
    return (

        <div class="content">
        <h1>入会申し込み</h1>
        <p>入会するには次のフォームに必要事項をご記入ください</p>
        <div class="control">
            <label for="mymail">メールアドレス <spam class="required">必須</spam></label>
            <input type="email" value={mail} onChange={(event) => setMail(event.target.value)}/>
        </div>
        <div class="control">
            <label for="password">パスワード <samp class="required">必須</samp></label>
            <input type="password" value={passward} onChange={(event) => setPassward(event.target.value)}/>
        </div>
        <div class="control">
            <button onClick={onClickSubmit} type="submit">登録する</button>
        </div>
    </div>
    )
}

export default Register;
