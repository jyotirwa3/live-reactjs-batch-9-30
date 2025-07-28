import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// mode -> development and prodction (live)
createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
