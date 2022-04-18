import React, { useState } from 'react'

function HookPrint() {
   const [name,setName]=useState({firstname:"",lastname:""})
        //When Dealing with object or arrays,always  make sure to spread  your state variable and then call setter function
  return (
    <form>
       <input type="text"
        value={name.firstname}
        onChange={e=>setName({...name,firstname:e.target.value})}/>  
        <input type="text"
        value={name.lastname}
        onChange={e=>setName({...name,lastname:e.target.value})}/>
        <h2>Your Firstname is -{name.firstname}</h2>
        <h2>Your lastname is -{name.lastname}</h2>
    </form>
  )
}

export default HookPrint