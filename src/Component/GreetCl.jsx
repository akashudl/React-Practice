import React, { Component } from 'react'
// note We cant change the props value because theyr immutabel 
export class GreetCl extends Component {
  render() {
    //in class based componenet if we want to destructuire the array then we can use in render function only
    const {name, lastname}=this.props
    return (
      <div> 
       <h1>{name}{lastname}</h1>
      </div>
    )
  }
}

export default GreetCl