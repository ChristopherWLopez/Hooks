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
    socket.on("response", (payload)=> console.log(payload));

    // clean up

    return ()=>{
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off(()=> console.log("response listener is off"));
    }
  });

  const handleHello =()=>{
    socket.emit("hello");
  }

  return (
    <div>
      <p> Is connected{isConnected ? "true": "false"}</p>
        <button
          onClick={handleHello}>
          Say Hello
        </button>
      <EffectDemo/>
    </div>
  )
}

export default App

