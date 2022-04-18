// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Greet from './Component/Greet'
// // // import GreetCl from './Component/GreetCl'
// // // // import Counter from './Component/Counter'
// // import Parent from './Component/Parent'
// // // import Usergreeting from './Component/Usergeeting'
// // import Userlist from './Component/Userlist';
// import Hero from './Component/Hero';
// import ErrorBoundry from './Component/ErrorBoundry';
// import HookPrint from './ComponentHooks/HookPrint'
// import FocusInput from './Component/FocusInput'
//  import ComponentC from './ComponentHooks/ComponentC'
//  export const UserContext = React.createContext() //Step 1 Create context 
//  export const ChannelContext=React.createContext()
 import CounterTwo from './ComponentHooks/CounterTwo'
function App() {
  return (
    <div className="App">
     {/* <Greet name={"Akash "} lastname={"Pandit"}/> */}
      {/* To access this props use props.chidlreb in functional Component and class based Comaponete this.props.Children */}
     {/* <p>This is children props </p>
     </Greet>
   
      //  <button>
      //    Action
      //  </button>
      //  </GreetCl> */}
          {/* <Counter/> */}
          {/* <GreetCl name={"Saurav"} lastname={"Singh"}/> */}
          {/* <Parent/> */}
   {/* <Usergreeting/> */}
   {/* <Userlist/> */}
   {/* <ErrorBoundry>
   <Hero hero={"Batman"}/></ErrorBoundry>
   <ErrorBoundry><Hero hero={"Superman"}/></ErrorBoundry>
   <ErrorBoundry> <Hero hero={"Joker"}/>
   </ErrorBoundry> */}
   {/* <HookCount/> */}
   {/* <HookPrint/>
   <FocusInput/> */}


{/* 
    <UserContext.Provider value={'Akash'}>
      <ChannelContext.Provider value={'Akashians'}>
      <ComponentC/>
      </ChannelContext.Provider>
    </UserContext.Provider> */}
    <CounterTwo/>
                           
    </div>
  );
}

export default App;
