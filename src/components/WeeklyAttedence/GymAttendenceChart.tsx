import { useState } from "react";
import Grid from "./Grid";
import type GymAttendenceProp from "./GymAttendenceProp";

export default function GymAttendenceChart({attendence}:GymAttendenceProp){
     const [range,setRange]=useState([0,6])
     function handleButtonClick(value:string){
        if(value==="left"){
            if(range[0]!=0){
                setRange([range[0]-1,range[1]-1]);
            }
        }
        else{
            if(range[1]!=attendence.length-1){
                setRange([range[0]+1,range[1]+1]);
            }
        }
     }
    return(
        <div className="complete">
         <h2>gym Weekly attendence table</h2>
         <Grid range={range} attendence={attendence}/>
          <div className="move">
            <button disabled={range[0]===0?true:false}  onClick={()=>handleButtonClick("left")}>Previous</button>
            <button disabled={range[1]===attendence.length-1?true:false} onClick={()=>handleButtonClick("right")}>Next</button>
          </div>
        </div>
    )
}