import "./sapporo.css"

const Sapporo = () => {
   return (
      <>
   <div class="flex-container">
   <div class="Visual">
       <h1>札幌ドーム</h1>
       <h1>所在地：札幌市</h1>
           <h1>ホームチーム：コンサーレ札幌</h1>
   </div>
   <img src="/sapporo.jpg" alt="スタジアム" />
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
};

export default Sapporo;
