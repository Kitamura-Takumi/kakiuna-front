import "./sapporo.css"
import CmpReview from "./components/CmpReview";
import { useState } from "react";

const onClickAddScreen = () => {
    
    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [team, setTeam] = useState();
    const [img, setImg] = useState();
    const [all, setAll] = useState();
    const [comfortable,setComfortable] = useState();
    const [ableSee,setAbleSee] = useState();
    const [gourmet,setgourmet] = useState();
    const [excited,setexcited] = useState();


//     useEffect(() => {
//       (async () => {
//         const res = await getBooks();
//         setBooks(res);
//       })();
//     }, []);
      
//     ...
    
//     return (
//       ...
//     );
//   }
// }
}
const Sapporo = () => {
    const name = "札幌ドーム";
    const adress = "〒062-0045 北海道札幌市豊平区羊ケ丘１"
    const team = "コンサドーレ札幌";
    const img = "/sapporo.jpg";   

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
           <input id="all" type="text" className="textbox" onChange={(event) => setName(event.target.value)}/>
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           立地・利便性
       </div>
       <div className="warp">
           <input id="comfortable" type="text" className="textbox" onChange={(event) => setComfortable(event.target.value)}/>
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           見やすさ
       </div>
       <div className="warp">
           <input id="ableSee" type="text" className="textbox" onChange={(event) => setAbleSee(event.target.value)}/>
       </div>
   </div>
</div>
<div className="flex02">
   <div className="warp_text">
       <div className="warp_heading">
           グルメ
       </div>
       <div className="warp">
           <input id="gourmet" type="text" className="textbox" onChange={(event) => setgourmet(event.target.value)}/>
       </div>
   </div>
   <div className="warp_text">
       <div className="warp_heading">
           熱狂度
       </div>
       <div className="warp">
           <input id="excited" type="text" className="textbox" onChange={(event) => setexcited(event.target.value)}/>
       </div>
   </div>
</div>

    {/* reviewlist.map(() => {
        < CmpReview />
    }); */}
</>
   )
};

export default Sapporo;
