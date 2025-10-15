import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Login from './Pages/Loginpage.jsx'
import Signup from './Pages/SignUp.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/signup",
        element:<Signup/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
