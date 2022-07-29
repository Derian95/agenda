import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contex from './context/Contex'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contex>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Contex>
   
  </React.StrictMode>
)
