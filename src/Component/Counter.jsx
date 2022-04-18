import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0,
      }
    }
    increment(){
       //so whenever you want ot update the state on previous state make sure to pass a function as aan object instead of regular object function has access to previous state which can be used to upadte new state 

       this.setState((prevState) => ({ //use prevstate function to get the prevstate 
        count: prevState.count + 1
      }))




        // this.state.count=this.state.count+1;// this will increase the count value but the rendering will not happen upadte will not bee seen in ui that's why never update the value of state directly 
        // this.setState({count: this.state.count+1},()=>{ //call back function   suppose whenever you want to execute the code and after the satte is updated use it in call backfunction of setState
        //     console.log(this.state.count) // you will get the upadted value here   matching with ui
        // })
        // console.log(this.state.count) // if you call the state here to get the value you will not get the updated value 

    }
    incrementFive() {
        console.log('Inside incrementFive')
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
      }
    
  render() {
    return (
        <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter