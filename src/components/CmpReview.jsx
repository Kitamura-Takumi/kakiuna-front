import React from "react";
import { useState } from "react";
export default function CmpReview() {

    //const [cmp, setCmp] = useState();

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
           <input type="text" className="textbox"/>
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
        <input type="text" value={excited} onChange={(event) => setExcited(event.target.value)}/>
       </div>
   </div>
</div>
</>
    )
}
