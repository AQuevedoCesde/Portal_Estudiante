import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CrearUsuario from './componentes/layouts/pages/registro/CrearUsuario.jsx'

let router =createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/registrar',
        element: <CrearUsuario/>
    }
   
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>
)
