import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { router } from './Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ParallaxProvider>
    <RouterProvider router={router} />
    </ParallaxProvider>

  </React.StrictMode>,
)
