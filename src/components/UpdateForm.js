import React,{useEffect,useState} from 'react'

const UpdateForm = () => {

    const[users,setUsers] = useState([])
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [userId,setUserId] = useState("");
    const [id,setId] = useState("");
    const [isdelete,setIsDelete] = useState(false);

    const [addusersId,setaddUsersId] = useState("")
    const [addtitle,setaddTitle] = useState("")
    const [addbody,setaddBody] = useState("")

    const [issucess,setIsSuccess] = useState(false);

  
    useEffect(()=>{   
        console.log("useeffect")     
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((resp)=>{                     
                setUsers(resp);             
            })
        })
    },[])

   function deleteUser(id){
    if(id){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                method:'DELETE'
            }).then((result)=>{
                console.log(result,"response")
                if(result.status === 200){
                    setIsDelete(!isdelete)
                }
            
            })
            .catch(error => console.log(error));
        }
    }
   

    function selectUser(id){       
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {                   
                setTitle(data.title);
                setBody(data.body);
                setUserId(data.userId);
                setId(data.id);
            });
          
    }
    const handleSubmit = (id) => {      
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title: title,
            body: body,
            userId:userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      };

      function addUser(){
        const array = [addusersId,addtitle,addbody]
        let data ={addusersId,addtitle,addbody}
        fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"post",
        header:{
              'Accept':'application/json',
              'content-type':'application/json'
        },
        body:JSON.stringify(data)

       }).then((result)=>{
        console.log("result",result)
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 1000);
       }).catch(error => console.log("APi error"))
    }
    
          
    
  return (
    <>
        <div className='main-form'>
            <div className='col-50'>
                <h1>Add User</h1>
                <form className=''>              
                    <input type="text" name="name" value={addusersId}  onChange={(e)=>{setaddUsersId(e.target.value)}} /><br/><br/><br/>
                    <input type="text" name="name" value={addtitle}  onChange={(e)=>{setaddTitle(e.target.value)}} /><br/><br/><br/>
                    <input type="text" name="name" value={addbody}  onChange={(e)=>{setaddBody(e.target.value)}} /><br/><br/><br/>        
                    <button onClick={(e)=>{e.preventDefault();addUser()}}>Add User</button>
                    {issucess ?
                        <p>User added Successfully</p> : ""
                    }
                </form>
            </div>
            <div className='col-50'>
                <h1>Update User</h1>
                <form className='form'>
                    <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)} />
                    <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} />            
                    
                    <button onClick={(e)=>{e.preventDefault();handleSubmit(id)}}>Update User</button>
                </form>
            </div>
           
        </div>
        <table border="1">
            <tr>               
                <th>User ID</th>
                <th>Id</th>
                <th>Title</th>                
                <th>Body</th>
                <td>Operation</td>
            </tr>          
            {
                users.map((item,i)=>     
                                           
                    <tr key={i}>
                        <td>{item.userId}</td>   
                        <td>{item.id}</td>                     
                        <td>{item.title}</td>
                        <td>{item.body}</td>   
                        <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>  
                        <td><button onClick={()=>selectUser(item.id)}>Update</button></td>                                                
                    </tr>                  
                )
            }           
        </table>
        
        
    </>
  )
}

export default UpdateForm