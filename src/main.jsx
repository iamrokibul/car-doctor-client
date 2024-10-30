import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <div className='mx-w-6xl mx-auto bg-gray-400'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>  
      </AuthProvider>
    </StrictMode>
  </div>
)
