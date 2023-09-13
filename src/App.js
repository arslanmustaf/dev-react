import React from 'react'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Term from './pages/Term'
import Support from './pages/Support'
import WebDev from './pages/Webdev'
import SoftDev from './pages/SoftwareDev'
import CreativeDes from './pages/CreativeDes'
import CloudComp from './pages/CloudComp'
import Error from './pages/Error'
import './App.css'
import './css/homeMediaQueries.css'


function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Term />} />
          <Route path="/support" element={<Support />} />
          <Route path="/website-development" element={<WebDev />} />
          <Route path="/software-development" element={<SoftDev />} />
          <Route path="/creative-design" element={<CreativeDes />} />
          <Route path="/cloud-computing" element={<CloudComp />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App