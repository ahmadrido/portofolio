import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PixelLuckGame from './components/PixellLuckyGame.jsx'
import ErorPage from './components/erorPage.jsx'
import BaseCamp from './components/pages/BaseCamp.jsx'
import CharInfo from './components/pages/CharInfo.jsx'
import Ability from './components/pages/Ability.jsx'
import Navbar from './components/Navbar.jsx'
import Achievment from './components/pages/Achievment.jsx'
import Messages from './components/pages/Message.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErorPage />,
    children: [ 
      { path: "basecamp", element: <BaseCamp /> },
      { path: "charinfo", element: <CharInfo /> },
      { path: "achievements", element: <Achievment /> },
      { path: "abilities", element: <Ability /> },
      { path: "message", element: <Messages /> }
    ]
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>  
      <RouterProvider router={router} />
  </StrictMode>,
)
