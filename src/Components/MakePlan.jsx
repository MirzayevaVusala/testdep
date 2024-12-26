import { useState } from "react"

function MakePlan({onCreatePlan}){
    const [newPlan,setnewPlan]=useState("")
    const makePlan =()=>{
        if(!newPlan) return;
        
//         const request={
//             id:Math.floor(Math.random()*9999999),
//             content :newPlan
//         }
// onCreatePlan(request)
    }
   
    return(
        <div className="todo-create">
            <input value={newPlan} onChange={(e)=>setnewPlan(e.target.value)} type="text" placeholder="Create own travel plan"></input>
            <button onClick={makePlan}> Create</button>
        </div>
    )
}
export default  MakePlan