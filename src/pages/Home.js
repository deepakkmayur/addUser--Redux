
//     }

import React, { useState } from "react"
import './Home.css'

import * as userAction from '../store/action/user'  // why importing this  buz we 
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"



const Home = () => {    

  const [user,setUser]=useState({id:"",password:"",username:""})

  
  console.log(user,"===============home user 1");
  const inputHandler=(event)=>{
    // console.log(event,"/////event/////");
     const {name,value}=event.target
    //  console.log(name,value,"===========================home name,value");
     setUser((prevUser)=>{
      // console.log(prevUser,"=====================previous user");
      return {...prevUser,[name]:value}       
     })
  }
 const dispatch=useDispatch()               

const addUser=()=>{      
   dispatch(userAction.addUser(user))
   setUser(()=>{
    return {id:"",password:"",username:""}
   })
}
  
  return (
    <div className='home'>   
      <h2>Add user</h2>
      

      <input type="text" name='id' placeholder='id' className='default' onChange={inputHandler}  />
      <input type="text" name='username' placeholder='Username'  className='default' onChange={inputHandler} value={user.username}/> 
      <input type="password" name='password' placeholder='password' className='default' onChange={inputHandler} value={user.password} />
      <button type="submit" className='button' onClick={addUser} >Submit</button>  
       <Link to='/users' >Users List</Link>
      </div>
  )
}

export default Home