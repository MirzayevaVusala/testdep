import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MakePlan from "../Components/MakePlan";
import MakePlanList from "../Components/MakePlanList";
import { useState } from "react";
function Plan(){
    const[plans, setPlans]=useState([]);
    const createPlan = (newPlan)=>{
        setPlans([...plans,newPlan])
    }
        return(
        <>
     <Navbar />
     <MakePlan onCreatePlan ={createPlan}/>
     <MakePlanList />
<Footer />
          </>
    )
    

}
export default Plan;