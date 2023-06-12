import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Pokemon } from './Pokemon';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokemon />
  </React.StrictMode>,
)
