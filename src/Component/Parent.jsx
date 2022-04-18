import React, { Component } from 'react'
import Child from './Child.jsx'
import MemoComp from './MemoComp'
export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent',
         name:"Akash"
      }
    }
    componentDidMount(){
      setInterval(() => {
        this.setState({name:"Akash"})
      }, 2000);
    }
    greetparent=(value)=>{
        alert(`hello ${value}`)
    };

  render() {
    console.log("*********************Parent Component ********************************")
    return (
      <div>

        <MemoComp
        name={this.state.name}/>

          {/* <Child
          greethandler={this.greetparent}
          /> */}
      </div>

    )
  }
}

export default Parent