

export const addUser=(user)=>{
console.log("/////////////////////////////////////////////////////////////////////user action");

   return {
      type:"ADD_USER",  //type
      user:user  //payload
   }
}

export const removeUser=()=>{
   return{
      type:"REMOVE_USER"
   }
}