import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import * as ReactDOM from "react-dom/client";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {Header , Footer} from './components/index.js'
import {Home ,About,Menu,Contact}from './Pages/index.js'

const App =() => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </Router>

    </>
  )
}

export default App
