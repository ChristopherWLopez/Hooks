import './App.css';
import React, { useEffect, useState } from 'react';
import EffectDemo from './EffectDemo';
import { socket } from './socket';
// import { connect } from 'http2';


const App = () => {
  const [isConnected, setIsConnected]=useState(socket.connected);

  useEffect(()=>{
    function handleConnect(){
      setIsConnected(true);
      console.log("handle connect is triggered");
    }  
    function handleDisconnect(){
      setIsConnected(false);
      console.log("handle disconnect has been triggered");
    }

    // listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    // clean up

    return ()=>{
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
    }
  });

  return (
    <div>
      <p> Is connected{isConnected ? "true": "false"}</p>
      <EffectDemo/>
    </div>
  )
}

export default App

