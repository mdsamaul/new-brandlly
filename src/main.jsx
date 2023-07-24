import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { router } from './Routes/Routes.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ParallaxProvider>
<AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </ParallaxProvider>

  </React.StrictMode>,
)
