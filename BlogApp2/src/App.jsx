import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Logout from './components/Header/Logout'
import Button from './components/Button'
import Input from './components/Input'
import Userlogo from './components/Userlogo'
import Cornerbox from './components/CornerBox'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Loginpage'
import Signup from './Pages/SignUp'
import { BrowserRouter, Outlet } from 'react-router'

function App() {
  

  return (
        <>
        <Header/>  
        <Signup/>
        <Footer/>  
        </>
  )
}

export default App
