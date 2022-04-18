import React from 'react'

export default function Greet(props) {
    const {name,lastname}=props;
    // props.name="jasprit"
    // note We cant change the props value because theyr immutabel 
  return (
    <div>
        <h1>{name}{lastname}</h1>
    {/* {props.children} */}
    </div>
  )
}
