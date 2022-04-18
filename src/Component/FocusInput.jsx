import React, { Component } from 'react'
import Input from './Input'
export class FocusInput extends Component {
  constructor(props) {
    super(props)
  
   this.componetref=React.createRef()
  }
  Clickhandler=()=>{
      this.componetref.current.focusInput()
  }
  
    render() {

    return (
      <div>
          <Input ref={this.componetref}/>
          <button onClick={this.Clickhandler}>Focus input</button>
      </div>
    )
  }
}

export default FocusInput