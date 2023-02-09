import React,{useEffect,useState} from 'react'

const AddUser = () => {
   
    const [userid,setUserId] = useState("")
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    function saveUser(){
        const array = [userid,title,body]
        let data ={userid,title,body}
        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"post",
        header:{
              'Accept':'application/json',
              'content-type':'application/json'
        },
        body:JSON.stringify(data)

       }).then((result)=>{
        console.log("result",result)
       })
    }

  return (
    <>
        {/* <h1>Add User</h1>       
        <input type="text" name="name" value={userid}  onChange={(e)=>{setUserId(e.target.value)}} /><br/><br/><br/>
        <input type="text" name="name" value={title}  onChange={(e)=>{setTitle(e.target.value)}} /><br/><br/><br/>
        <input type="text" name="name" value={body}  onChange={(e)=>{setBody(e.target.value)}} /><br/><br/><br/>        
        <button onClick={saveUser}>Add User</button> */}
    </>
  )
}

export default AddUser