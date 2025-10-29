import './App.css'
import {Outlet} from 'react-router'
import {userAuth} from './appwrite/appwriteAuth'
import { useDispatch } from 'react-redux'
import {userLogin, userLogout} from './store/userslice'
import {Header,Footer} from './components/index'
import { useEffect, useState } from 'react'



function App() {
  const dispatch = useDispatch()
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    userAuth.getUser()
    .then((userData)=>{
      if(userData){
        dispatch(userLogin(userData))
      }else{
        dispatch(userLogout())
      }
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=>{
      setLoader(false)
    })

  },[])

  if(loader){
    return(
      <div className='w-screen h-screen flex'>
        <p className='justify-center items-center m-auto'>loading...</p>
      </div>
    )
  }else{
    return(
        <>
        <Header/>  
        <Outlet/>
        <Footer/>  
        </>
    )
  }
}

export default App
