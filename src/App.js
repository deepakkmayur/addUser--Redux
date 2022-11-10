
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
