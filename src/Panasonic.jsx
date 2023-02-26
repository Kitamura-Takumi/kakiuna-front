import "./sapporo.css"
import CmpReview from "./components/CmpReview";
import { useEffect, useState } from "react";
import axios from "axios";


const Panasonic = () => {
    const name = "Panasonic Stadium Suita";
    const adress = "〒565-0826 大阪府吹田市千里万博公園3-3"
    const team = "ガンバ大阪";
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
        setAll(res.data[2]['avetotalrating'])
        setAbleSee(res.data[2]['avevisibilityrating'])
        setGourmet(res.data[2]['avefoodrating'])
        setExcited(res.data[2]['avepassionrating'])
        setImpression(res.data[2]['avefoodrating'])
        setConvenient(res.data[2]['aveaccessrating'])
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

export default Panasonic;
