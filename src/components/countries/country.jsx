import { useState } from "react";

const Country = ({country}) => {
    
    const {name , flags} = country
    const [visited , setVisited] = useState(false)
    function handleButtonClick(){
        const newVisit = !visited;
        setVisited(newVisit)

    }

    
    
    


   
    const nonVisitedStyle ={
        padding:"20px",
        margin:"10px",
        border:"1px solid green"
    }
    const visitedStyle = {
        padding:"20px",
        margin:"10px",
        border:"1px solid green",
        backgroundColor : "pink"

        
    }
    

   
    return (
      
   
        <div className="flex flex-col justify-center items-center rounded-lg drop-shadow-xl space-y-5"  style={visited ? visitedStyle : nonVisitedStyle}>
            <p>name:{name.common}</p>
            <img className="w-[320px] h-[160px]" src= {flags.png} alt="" />
            <button onClick={handleButtonClick} className={visited ? "bg-black text-white p-3 rounded-xl hidden" : "bg-black text-white p-3 rounded-xl "}>Add to visit</button>
            <button onClick={handleButtonClick} className={visited ?   "bg-black text-white p-3 rounded-xl " : "bg-black text-white p-3 rounded-xl hidden"}>Add to non visit</button>
            <button className="bg-black text-white p-3 rounded-xl">Add to list</button>
           
            
        </div>
      
      
    
                
                
               
           
    )};


export default Country;
