
const initialState={
   users:[]
}


console.log("/////////////////////////////////////////////////////////////////////user reducer");
console.log(initialState.users,"/////initialState.users");



const userReducer=(state=initialState,action)=>{     //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 switch(action.type){       
   case "ADD_USER" :
      console.log("::::::::::::::::::::::::::");    
      return {...state,users:[...state.users,action.user] }  
      
   case "REMOVE_USER":
      return {users:[0]}    
      default:                                                                         
         return state                           
 }
}

export default userReducer    