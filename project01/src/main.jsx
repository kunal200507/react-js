import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const user = "hello"
const reactElement = React.createElement(
  'a',
  {href : 'https://www.google.com/', target : "_blank"},
  'Click me to visit google',
  user
)

createRoot(document.getElementById('root')).render(

  // reactElement
    
    // <App/>
    <App />

)
