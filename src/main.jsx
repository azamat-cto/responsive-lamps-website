import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'unfonts.css'
import 'remixicon/fonts/remixicon.css'
import 'swiper/css'
import 'swiper/css/navigation'
import './styles/index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
