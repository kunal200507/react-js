import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Login from './Pages/Loginpage.jsx'
import Signup from './Pages/SignUp.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AddPost from './Pages/addPost.jsx'
import Post from './Pages/Post.jsx'
import Updatepost from './Pages/UpdatePost.jsx'
import { useSelector } from "react-redux"
import { Loader } from "./components/index.js"
import AllPosts from './Pages/AllPosts.jsx'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"/addpost",
        element:<AddPost/>
      },
      {
        path:"/post/:slug",
        element:<Post/>
      },
      {
        path:"/updatepost/:slug",
        element:<Updatepost/>
      },
      {
        path:"/allposts",
        element:<AllPosts/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)



