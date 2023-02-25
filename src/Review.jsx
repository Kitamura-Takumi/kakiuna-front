import { useState } from "react";
const Review = () => {

    const [text, setText] = useState();

    const getValue = () => {
        
    }
    return (
        <>
    <div>
        <input value={text} onChange={(event) => setText(event.target.value)}/>
        <button onClick={getValue}>決定</button>
    </div>

        <div class="flex01">
   <div class="warp_text">
       <div class="warp_heading">
           総合
       </div>
       <div class="warp">
           <input type="text" class="textbox"/>
       </div>
   </div>
   <div class="warp_text">
       <div class="warp_heading">
           立地・利便性
       </div>
       <div class="warp">
           <input type="text" className="textbox"/>
       </div>
   </div>
   <div class="warp_text">
       <div class="warp_heading">
           見やすさ
       </div>
       <div class="warp">
           <input type="text" class="textbox"/>
       </div>
   </div>
</div>
<div class="flex02">
   <div class="warp_text">
       <div class="warp_heading">
           グルメ
       </div>
       <div class="warp">
           <input type="text" class="textbox"/>
       </div>
   </div>
   <div class="warp_text">
       <div class="warp_heading">
           熱狂度
       </div>
       <div class="warp">
           <input type="text" class="textbox"/>
       </div>
   </div>
</div>
        
        </>
    )
    }

export default Review;
