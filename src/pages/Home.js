import React from 'react'
import Header from '../components/Header'
import detailImg1 from '../assets/Home/softwareDev1.png'
import detailVid1 from '../assets/Home/softwareDev.gif'
import detailImg2 from '../assets/Home/ideaLight.png'
import detailImg3 from '../assets/Home/cloud.png'
import meetingImg from '../assets/Home/meeting.jpg'
// empoweringSection Images
import brandImg from '../assets/Home/branding.svg'
import appDevImg from '../assets/Home/appDev.svg'
import webDevImg from '../assets/Home/appDev.svg'
import graphImg from '../assets/Home/grapDes.svg'
// div named secret Images 
import smallBus from '../assets/Home/web small.webp'
import webAfford from '../assets/Home/webafford.webp'
import webEcom from '../assets/Home/webecom.webp'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'



let obj = [
    {
        "className": 'detail',
        "img": detailImg1,
        "vid":detailVid1,
        "heading": 'Software Development',
        "para": 'At Dev’s Inn Technologies, we are the architects of the digital future. Our Software development services encompass a wide array of cutting-edge technologies, ensuring your online presence ',
        "link":'/software-development',
    },
    {
        "className": 'detail',
        "img": detailImg2,
        "heading": 'Creative Design and animations',
        "para": "At Dev's Inn Technologies, we are passionate creators and visionary designers. Our mission is to transform businesses and brands by harnessing the power of creative design.",
        "link":'/creative-design',
    },
    {
        "className": 'detail',
        "img": detailImg3,
        "heading": 'Cloud Computing Services',
        "para": "At Dev's Inn Technologies, We are your trusted partner ,offering a comprehensive suite of cloud services that include Deployment, AWS, Azure, Docker, and seamless Third-Party API integration",
        "link":'/cloud-computing',
    },

        
]
function Main() {
  return (
    <>
   
    <div class="mainBody">
    </div>
    <div class="mainContainer">
    <Header/>
        <section class="Container">
            <div class="Headings">
                <h1>TURNING YOUR ONLINE</h1>
                <h2>VISION <br/> INTO REALITY</h2>
                <p>Empowering Businesses with Innovative Software Solutions for Digital Transformation.Delivering Customized Software Services to Drive Efficiency and Success</p>
                <div class="btns">
                    <Link to="/portfolio" class="portfolioBtn">View Portfolio</Link>
                    <Link to="/contact-us" class="contactBtn">Contact us <FontAwesomeIcon icon={faAngleRight} /></Link>
                </div>
            </div>
        </section>
    </div>
    <section class="designs">
        <div class="aboutDesigns">
            <h3>We Design, Build Brands & Digital Projects</h3>
            <p>Dev's Inn Technologies, your gateway to cutting-edge IT services for businesses and brands. We are your strategic partner in navigating the ever-evolving digital landscape. With a relentless commitment to innovation and excellence,<br/><br/> we provide tailored IT solutions that empower your organization to thrive in the modern world.
            </p>
            <div className='readBtn'><button class="read">Read More</button></div>
        </div>
        <div class="groupImg">
            <img src={meetingImg} alt=''/>
        </div>
    </section>
    <div className="detailSec">
    <h1>Our Core Services</h1>

    <div class="detailDiv">
        {obj.map((detail,index)=>{
            return <div className={detail.className}>
                <div className="img"></div>
                <h3>{detail.heading}</h3>
                <p>{detail.para}</p>
                <Link to={detail.link}>Learn More</Link>
            </div>
        })}
        </div>
        </div>
    <div class="empowerSec">
        <div class="inDiv">
            <div class="divInDiv">
                <img src={brandImg} alt=''/>
                <br/>
                <h4>Branding</h4>
            </div>
            <div class="divInDiv">
                <img src={appDevImg} alt=''/>
                <br/>
                <h4>App Development</h4>
            </div>
        </div>
        <div class="inDiv">
            <div class="divInDiv">
                <img src={webDevImg} alt=''/>
                <br/>
                <h4>Web Design</h4>
            </div>
            <div class="divInDiv">
                <img src={graphImg} alt=''/>
                <br/>
                <h4>Graphic Design</h4>
            </div>
        </div>
        <div class="empowerdetail">
            <h2>Empowering Your Online Presence with Expert Services</h2>
            <br/>
            <p>We're here to help you bring your business to life online with everything from beautiful site design and
                development to effective digital marketing solutions. Our skilled staff works arduously to develop
                specialized solutions catered to your particular requirements, making sure that your brand stands out
                and achieves its full potential in the digital world.</p>
            <button class="read">Read More</button>
        </div>
    </div>
    <section class="valuesSection">
        <div class="values">
            <div class="value">
                <h1>4</h1>
                <br/>
                <h2>years</h2>
            </div>
            <div class="value">
                <h1>15</h1>
                <br/>
                <h2>Professional Staff</h2>
            </div>
            <div class="value">
                <h1>5</h1>
                <br/>
                <h2>Projects in Progress</h2>
            </div>
            <div class="value">
                <h1>54</h1>
                <br/>
                <h2>Happy Customers</h2>
            </div>
        </div>
    </section>
    <section class="estimate">
        <div class="estimateDiv">
            <h1>Need a Successful Project? let's Start Working Togther!</h1>
            <button>Estimate Project</button>
        </div>
    </section>
    <section class="secret">
        <h1>Secret of Our Work Are Revealed in Blogs</h1>
        <div class="secretDiv">
            <div class="inSecret">
                <img src={smallBus} alt=''/>
                <h2>How Can a Website Help a Small Business</h2>
                <p>Nowadays businesses are fully dependent on a website. A website is now counting as the brand value of
                    any online business. It helps businesses from</p>
            </div>
            <div class="inSecret">
                <img src={webAfford} alt=''/>
                <h2>Affordable Web Design Services in India in 2023</h2>
                <p>Now every business organization wants to boost their online presence by the help of website but find
                    an affordable web design agency in India is</p>
            </div>
            <div class="inSecret">
                <img src={webEcom} alt=''/>
                <h2>E-Commerce Website Development Company in Bhubaneswar</h2>
                <p>In this digital world, an online business proved itself more profitable than any offline business.
                    So, now people prefer online businesses to get more conversion</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Main