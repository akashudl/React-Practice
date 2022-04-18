import React,{useContext} from 'react' //first step import useContext from react
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../App' //step 2 import useContext fromappa nd channel context
function ComponentE() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
  return (
    <div>
        {user} - {channel}
        <ComponentF/>
    </div>
  )
}

export default ComponentE