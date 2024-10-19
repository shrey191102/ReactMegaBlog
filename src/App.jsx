
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'

function App() {
  const [loading,setloading]=useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{ 
      if (userData){
        dispatch(login({userData}))
      }
      else{dispatch(logout())}
    }).finally(()=> setloading(false))
  },[])

  return !loading ? (<div> </div>): (null)


  
}

export default App
