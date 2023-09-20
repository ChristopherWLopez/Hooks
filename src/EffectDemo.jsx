import React, { useEffect, useState } from "react"

const EffectDemo = () => {
    const [count, setCount] =useState(0);
    const [text, setText]=useState('');

    useEffect(()=>{
        //just contains first arg, which is the call back funtion
        //this function will be called after render every render
        console.log("This happens with every render");
    })

    useEffect(()=>{
        //contains first arg, which is the call back funtion and empty dependecy array
        //this function will be called just on mount
        console.log("render  just on mount");
    },[])

    useEffect(()=>{
        //contains first arg, which is the call back funtion and dependecy array with state variable
        //this function will be called just on mount and everytime count updates
        console.log("This will happen when count updates and on mount", count);
    },[count])


  return (
    <>
        <button
            onClick={()=> setCount(count+1)}
        >counter: {count} </button>
        <button onClick={()=>setCount(0)}>
        reset
        </button>
        <form>
            <input onChange={(e)=>setText(e.target.value)}/>
        </form>
    </>
  )
}

export default EffectDemo
