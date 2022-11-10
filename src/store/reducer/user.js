
const initialState={
   users:[]
}


console.log("/////////////////////////////////////////////////////////////////////user reducer");
console.log(initialState.users,"/////initialState.users");



const userReducer=(state=initialState,action)=>{     //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 switch(action.type){       
   case "ADD_USER" :
      return {...state,users:[...state.users,action.user] }                 
      
   case "REMOVE_USER":
      return {users:[]}    
      default:                                                                         
         return state                           
 }
}

export default userReducer    