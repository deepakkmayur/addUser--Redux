import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserData from '../components/UserData'
import * as userAction from "../store/action/user"

   
const Users = () => {    

const users=useSelector((state)=>{   
  console.log(state,">>>>>>>>>>state");   
  return state.users
})    
console.log(users,"_______________________users");                    
 

const dispatch=useDispatch()

const removeUsers=()=>{
dispatch(userAction.removeUser())
}

  return (
    <div>
      <h1>{users.length}</h1>         
      {users.length!==0? users.map((userDetails)=>{
        return <UserData name={userDetails.username} id={userDetails.id} password={userDetails.password} key={userDetails.id}/>
      }):<h1>Users deleted</h1>}
      
      {users.length!==0 && <button onClick={removeUsers}>Delete</button>}

      </div>
  )
}

export default Users