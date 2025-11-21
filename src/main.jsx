import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/**
 * CSS IMPORT
 */
import './assets/fontawsome/css/fontawesome.css' //Fontawesome
import 'bootstrap/dist/css/bootstrap.min.css' //Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js' //Bootstrap
import 'swiper/css'; //Swiper Slider
import './sass/style.scss'  //style



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
