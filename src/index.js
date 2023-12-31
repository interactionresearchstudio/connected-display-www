import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Slideshow from './Slideshow'
import Grid from './Grid'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Grid/>,
  },
  {
    path: '/slideshow',
    element: <Slideshow/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
