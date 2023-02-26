import "./sapporo.css"
import CmpReview from "./components/CmpReview";
import { useEffect, useState } from "react";
import axios from "axios";


const Sapporo = () => {
    const name = "札幌ドーム";
    const adress = "〒062-0045 北海道札幌市豊平区羊ケ丘１"
    const team = "コンサドーレ札幌";
    const img = "/sapporo.jpg";  
    
    const [text, setText] = useState();
    const [all, setAll] = useState();
    const [convenient, setConvenient] = useState("");
    const [ableSee, setAbleSee] = useState("");
    const [gourmet, setGourmet] = useState("");
    const [excited, setExcited] = useState("");
    const [impression, setImpression] = useState("");
    useEffect(()=>{
        fetchData();
    })
    const fetchData = async()=>{
     await axios.get('http://127.0.0.1:8000/polls/stadium').then(res=>{
        console.log(res.data)
        setAll(res.data[1]['avetotalrating'])
        setAbleSee(res.data[1]['avevisibilityrating'])
        setGourmet(res.data[1]['avefoodrating'])
        setExcited(res.data[1]['avepassionrating'])
        setImpression(res.data[1]['avefoodrating'])
        setConvenient(res.data[1]['aveaccessrating'])
     }).catch(err=>{
         console.log(err)
     })
    }
   return (
      <>
   <div className="flex-container">
   <div className="Visual">
       <h1>{name}</h1>
       <h1>所在地:{adress}</h1>
           <h1>ホームチーム：{team}</h1>
   </div>
   <img src={img} alt="スタジアム" />
</div>
<div className="flex01">
   <div className="warp_text">
       <div className="warp_heading">
           総合
       </div>
       <div className="warp">
           {all}
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           立地・利便性
       </div>
       <div className="warp">
           {convenient}
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           見やすさ
       </div>
       <div className="warp">
           {ableSee}
       </div>
   </div>
</div>
<div className="flex02">
   <div className="warp_text">
       <div className="warp_heading">
           グルメ
       </div>
       <div className="warp">
           {gourmet}
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           熱狂度
       </div>
       <div className="warp">
           {excited}
       </div>
   </div>
</div>


</>
   )
};

export default Sapporo;
