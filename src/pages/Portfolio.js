import React from 'react'
import '../css/portfolio.css'
import slide1 from '../assets/Portfolio/slide1.jpg'
import slide2 from '../assets/Portfolio/slide2.jpg'
import slide3 from '../assets/Portfolio/slide3.jpg'
import slide4 from '../assets/Portfolio/slide4.jpg'
import slide5 from '../assets/Portfolio/slide5.jpg'
import slide6 from '../assets/Portfolio/slide6.jpg'
import slide7 from '../assets/Portfolio/slide7.jpg'
import slide8 from '../assets/Portfolio/slide8.jpg'


function Portfolio() {
  return (
    <>
     <div className="portContainer">
        <div className="heading">
            <h1>Showcasing Our Best Work</h1>
        </div>
        <div></div>
    </div>
   
    <div className="workImages">
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
                <img src={slide1} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide2} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide3} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide4} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide5} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide6} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide7} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            <img src={slide8} alt=''/>
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
            </a>
        </div>
        <div className="imgDiv">
            <a href="https://devsinn-arslan.netlify.app/">
                <img src="../assets/meeting.jpg" alt=''/>
            </a>
        </div>
    </div>
   </>
  )
}

export default Portfolio