import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import AllPages from './allPages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllProjects from './components/pages/myProjek'

const route = createBrowserRouter([
  {
    path: '/',
    element: <AllPages />,
  },
  {
    path: '/myProjects',
    element: <AllProjects />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>{route.element}</RouterProvider>
  </React.StrictMode>,
)
