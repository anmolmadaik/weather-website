import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PlaceContext } from './context/PlaceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlaceContext>
    <App />
    </PlaceContext>
  </StrictMode>,
)
