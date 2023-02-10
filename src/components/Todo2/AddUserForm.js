import React,{useState,useEffect} from 'react'

const AddUserForm = (props) => {

    const initialFromState = {id:null,name:"",username:""}
   
    const [user,setUser] = useState(props.editing ? props.currentUser : initialFromState )
       
    const handleInputChange = (e) =>{
            const {name,value} = e.target
            setUser({...user,[name]:value})
    } 

   useEffect(() => {
        if(props.editing){
            setUser(props.currentUser)
        }      
    },[ props ]
  )

  return (
    <form className='todo-form'
        onSubmit = {e => {
            e.preventDefault()
            if(!user.name || !user.username) return
            
            if(props.editing){
                props.updateUser(user.id, user)
            } else {
                props.addUser(user)
            }
            setUser(initialFromState)                 
        }}
    >
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} className='form-control' />
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} className='form-control' />
        {props.editing ?            
            <>
                <button type="submit">Update user</button>
                <button type="button" onClick={() => props.setEditing(false)} className="button muted-button">
                    Cancel
                </button> 
            </>
            : 
            <button type="submit">Add new user</button>
        }
       
    </form>
  )
}

export default AddUserForm