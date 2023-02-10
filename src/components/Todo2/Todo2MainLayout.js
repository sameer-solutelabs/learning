import React,{useState,useEffect} from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'

// get the localStorage data pack

const getLocalData = () =>{
    const list = localStorage.getItem("mytodolist")
    if(list){
        return JSON.parse(list);
    } else {
        return [];
    }
};

const Todo2MainLayout = () => {

    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ]

	const initialFormState = { id: null, name: '', username: '' }
	// Setting state
	const [ users, setUsers ] = useState(usersData)    
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
   
	const addUser = user => {
		user.id = users.length + 1               
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
        console.log(id)
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))      
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))        
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(users));
      }, [users]);
   

  return (
    <>
        <div className='container'>
            <h1>CRUD App with Hooks</h1>
            <div className='todo-row'>
                <div className='col-50'>                                 
                {editing ? (
                    <h2>Edit User </h2>
                   ) : (<h2>Add User</h2>
                )}                 
                    <AddUserForm addUser={addUser} 
                            setEditing={setEditing}
                            currentUser={currentUser}
                            updateUser={updateUser}
                            editing={editing}
                    />
                </div>
                <div className='col-50'>
                    <h2>View user</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
            
          
           
        </div>
    </>
  )
}

export default Todo2MainLayout