import React,{useRef} from 'react'
import User from './User';

const ForwardrefLayout = () => {

let inputRef = useRef(null);

  function updateInput(){
    inputRef.current.value="1000"
    inputRef.current.style.color="white"
    inputRef.current.style.backgroundColor="black"
    inputRef.current.focus();
  }
  
  return (
    <>
        <h1>ForwardRef in Reat</h1>
        <User ref={inputRef} />
        <button onClick={updateInput}>Update InputBox</button>
    </>
  )
}

export default ForwardrefLayout