import { useState } from "react";
import CmpReview from "./components/CmpReview";
import { Route, Routes, Link } from "react-router-dom";
import Sapporo from "./Sapporo";
import axios from "axios";
const Review = () => {

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

    const [addComponent, setAddComponent] = useState();

    

    const onClickAddScreen = () => {
        <Routes>
        < Route exact path="/sapporo" element={<Sapporo />} />
        </Routes>

        const newScreen = [...CmpReview];

        setAddComponent(<newScreen />);
    }

    return (
        <>
    <div>
        <p>スタジアム名</p>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
    </div>

        <div className="flex01">
   <div className="warp_text">
       <div className="warp_heading">
           総合
       </div>
       <div className="warp">
           <input value={all} type="text" className="textbox"/>
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           立地・利便性
       </div>
       <div className="warp">
       <input type="text" value={convenient} onChange={(event) => setConvenient(event.target.value)}/>
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           見やすさ
       </div>
       <div className="warp">
       <input type="text" value={ableSee} onChange={(event) => setAbleSee(event.target.value)}/>
       </div>
   </div>
</div>
<div className="flex02">
   <div className="warp_text">
       <div className="warp_heading">
           グルメ
       </div>
       <div className="warp">
       <input type="text" value={gourmet} onChange={(event) => setGourmet(event.target.value)}/>
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           熱狂度
       </div>
       <div className="warp">
       <input type="text" value={excited} onChange={(event) => setExcited(event.target.value)}/>
       </div>
   </div>
   <div className="warp_text02">
       <div className="messeage">
           感想
       </div>
       <div className="warp">
        <input type="text" value={impression} onChange={(event) => setExcited(event.target.value)}/>
       </div>
   </div>
</div>
<Link to="/sapporo">
<button onClick={onClickAddScreen}>決定</button>
</Link>

    </>
    )
    }

export default Review;
export const onClickAddScreen = async (title, description) => {
    await axios.post("", {
      title,
      description,
    });
  };
