import { useState } from "react";
import CmpReview from "./components/CmpReview";
import { Route, Routes, Link } from "react-router-dom";
import Sapporo from "./Sapporo";
import axios from "axios";
import Home from "./Home";
const Review = () => {

    const [text, setText] = useState("");
    const [all,setAll] = useState("");
    const [convenient,setConvenient] = useState("");
    const [ableSee, setAbleSee] = useState("");
    const [gourmet, setGourmet] = useState("");
    const [excited, setExcited] = useState("");
    const [impression, setImpression] = useState();
    // レスポンスを管理するState
    const [posts,setPosts] = useState([]);


//     const [addtext, setAddText] = useState("");
//     const [addAll, setAddAll] = useState("");
//     const [addConvenient,setAddConvenient] = useState("");
//     const [addAbleSee, setAddAbleSee] = useState("");
//     const [addGourmet, setAddGourmet] = useState("");
//     const [addExcited, setAddExcited] = useState("");
//     const [addImpression, setAddImpression] = useState("");

//     const [addComponent, setAddComponent] = useState();

//     const onClickAddScreen = async (
//         text,
//         all,
//         convenient,
//         ableSee,
//         gourmet,
//         excited,
//         impression,) => {
//     await axios.post("http://127.0.0.1:8000/polls/review", {
//         text,
//         all,
//         convenient,
//         ableSee,
//         gourmet,
//         excited,
//         impression,
//   }).then(response=>{
//       console.log('jjjjjjjjjjjjjjj');
//       console.log(response.data);
//   })};

//     const onClickAddScreen = () => {
//         <Routes>
//         < Route exact path={StadiumValue.path} element={StadiumValue.Component} />
//         </Routes>

//         const newScreen = [...CmpReview];

//         setAddComponent(<newScreen />);
//     }

    const onClickAddScreen = () =>{
        axios.post('http://127.0.0.1:8000/polls/review').then(res =>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
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
           <input value={all} type="text" className="textbox"
           onChange={(event) => setAll(event.target.value)}/>
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
        <input type="text" value={impression} onChange={(event) => setImpression(event.target.value)}/>
       </div>
   </div>
</div>
<Link to="/sapporo">
    札幌
</Link>
<button onClick={onClickAddScreen}>決定</button>
    </>
    )
    }

export default Review;
// export const onClickAddScreen = async (
//         text,
//         all,
//         convenient,
//         ableSee,
//         gourmet,
//         excited,
//         impression,) => {
//     await axios.post("http://127.0.0.1:8000/review", {
//         text,
//         all,
//         convenient,
//         ableSee,
//         gourmet,
//         excited,
//         impression,
//   })};
