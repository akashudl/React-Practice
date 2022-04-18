import React ,{useState} from 'react'

function HookCount() {
    const [count,setCount]=useState(0);
    const incrementbyfive=()=>{

        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)  //Anytime when you want to update state value with prev state value go always with a function that will set new state value 
        }

    }
    
  return (
    <div>
        Count:{count}
        <button onClick={()=>setCount(count+1) }>increment</button>
        <button onClick={incrementbyfive}>increment 5</button>
    </div>
  )
}

export default HookCount