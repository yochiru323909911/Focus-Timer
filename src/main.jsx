import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// No StrictMode during the lesson, so every render is logged only once.
createRoot(document.getElementById('root')).render(<App />)
