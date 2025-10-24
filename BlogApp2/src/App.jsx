import './App.css'
import {Outlet} from 'react-router'
import userAuth from './appwrite/appwriteAuth'
import { useDispatch } from 'react-redux'
import {userLogin} from './store/userslice'
import {Header,Footer} from './components/index'
import { useEffect, useState } from 'react'
import Postcard from './components/Postcard'
import Createpost from './components/Createpost'
import AddPost from './Pages/addPost'
import Post from './Pages/Post'

function App() {
  const dispatch = useDispatch()
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    userAuth.getUser()
    .then((userData)=>{
      console.log(userData)
      console.log(userData.name)
      dispatch(userLogin(userData))
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
        <Post/>
        <Footer/>  
        </>
    )
  }
}

export default App
