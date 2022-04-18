import React from 'react'

function Child(props) {
  return (
    <div>
{/* <button onClick={props.greethandler}>ClickMe Child </button> */}
{/* paasing value from cild to parent  */}
<button onClick={()=>props.greethandler("Child")}>ClickMe Child </button> 
    </div>
  )
}

export default Child