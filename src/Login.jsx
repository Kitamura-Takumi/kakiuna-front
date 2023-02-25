import { useState } from "react";
const Login = () => {

    const [text, setText] = useState("");
    const [all,setAll] = useState("");
    const [convenient,setConvenient] = useState("");
    const [ableSee, setAbleSee] = useState("");
    const [gourmet, setGourmet] = useState("");
    const [excited, setExcited] = useState("");


    const [addtext, setAddText] = useState("");
    const [addAll, setAddAll] = useState("");
    const [addConvenient,setAddConvenient] = useState("");
    const [addAbleSee, setAddAbleSee] = useState("");
    const [addGourmet, setAddGourmet] = useState("");
    const [addExcited, setAddExcited] = useState("");

    const onClickGetValue = () => {
        setAddText(text);
        setAddAll(all);
        setAddConvenient(convenient);
        setAddAbleSee(ableSee);
        setAddGourmet(gourmet);
        setAddExcited(excited);

        setText("");
        setAll("");
        setConvenient("");
        setAbleSee("");
        setGourmet("");
        setExcited("");
    }

    return (
        <>
    <div>
        <p>UsernName</p>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
    </div>
    <div>
        <p>Passward</p>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
    </div>
       </>
    )}
    export default Login;