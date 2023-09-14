import React from 'react'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Privacy from './pages/privacy/Privacy'
import Term from './pages/term/Term'
import Support from './pages/support/Support'
import WebDev from './pages/webDev/WebDev'
import SoftDev from './pages/softwareDev/SoftwareDev'
import CreativeDes from './pages/creativeDes/CreativeDes'
import CloudComp from './pages/cloudComp/CloudComp'
import Error from './pages/Error'
import './App.css'


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