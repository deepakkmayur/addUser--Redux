import React from 'react'

const UserData = (data) => {
   const {name,id,password}=data

   console.log(data,"``````````data````");
  return (
    <div>
      <ul>
      
         <p>{name}</p>
      
         <p>{id}</p>
         <p>{password}</p>
         <hr></hr>
      </ul>
      
    </div>
  )
}

export default UserData