import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { login,logout } from './store/authenticationSlice';
import AuthObject from './Authentication/Authentication';
// import { login } from './store/authenticationSlice';
import { Footer,Header } from './components';

function App() {

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    AuthObject.userAuthenticationState()
    .then((responce)=>{
      if(responce){
        dispatch(login({responce}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
console.log(loading)  
  if(!loading){
    return(
      <div className='min-h-screen flex flex-wrap content-center bg-gray-400'>
        <div className='w-full block'>
          <Header/>
            <main>
              {/* <Outlet/> */}
              TODO
            </main>
          <Footer/>
        </div>
      </div>
    )
  }else{
     return(
      null
    )
  }
}

export default App
