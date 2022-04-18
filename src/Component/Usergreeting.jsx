import React, { Component } from 'react'

 class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin: true
      }
    }
//   render() {
//       if (this.state.isloggedin){
//     return (
//       <div><h1>Welcome Akash</h1>
//       </div>
//     )
//   }else {
//       return (
//         <div><h1>Welcome Guest</h1>
//         </div>
//       )
//   }
// }
// render() {
//       let message
//       if (this.state.isloggedin) {
//         message = <div>Welcome Akash</div>
//       } else {
//         message = <div>Welcome Guest</div>
//       }
//       return <div>{message}</div>
//     }
// }

// //  #ternary-operator-approach
//   render() {
//     return this.state.isloggedin ? (
//       <div>Welcome Akash</div>
//     ) : (
//       <div>Welcome Guest</div>
//     )
//   }
//  }
 // #short-circuit-operator-approach
 render() {
    return this.state.isloggedin && <div>Welcome Akash</div>
  }
}
 
export default Usergreeting