// import React from 'react';
// import './App.css';
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import  userReducer from './store/reducer/user'
// import {BrowserRouter,Routes,Route} from "react-router-dom"

// import Home from './pages/Home.js';
// import Users from './pages/Users';

// function App() {     
//   const store=createStore(userReducer)                                                                         
//   return (
    
// <Provider store={store}>
//   <BrowserRouter>
//   <Routes>
//     <Route path='/home' element={<Home/>}/>
//     <Route path='/users' element={<Users/>}/>
//   </Routes>
//   </BrowserRouter>

// </Provider>
    
//   );
// }

// export default App;




import React from 'react'
import Home from './pages/Home'
import Users from './pages/Users'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './store/reducer/user'


const App = () => {

  const store=createStore(userReducer)

  return (
    <Provider store={store}>
    <BrowserRouter>
       <Routes>
       <Route path='/home' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
       </Routes>
      </BrowserRouter>
      </Provider>
  )
}

export default App
