import './App.css'
import {Outlet} from 'react-router'
import { useSelector } from 'react-redux'
import {Header,Footer} from './components/index'

function App() {
  

  return (
        <>
        <Header/>  
        <Outlet/>
        <Footer/>  
        </>
  )
}

export default App
