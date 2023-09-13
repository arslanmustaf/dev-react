import React from 'react';
import '../css/about.css';
import Header from '../components/Header'
import manImage from '../assets/manAbout.jpg'

const About = () => {
  return (
    <>
    <Header className="header"/>
    <div className="aboutContainer">
        <div className="heading"> <h1>We Do Things That Matters</h1></div>
        <div></div>
    </div>
    <div className="moreAbout">
        <div className="aboutCards">
            <div className="logoDiv"><i className="fa-solid fa-book-open"></i><h3> LEARN</h3></div>
            <h2>We Ask Questions About Your Business</h2>
            <p>Before we start any project, we take the time to get to know your business.
                 We ask the right questions to gain a deep understanding of your business,
                  target audience, and competition.</p>
        </div>
        <div className="aboutCards">
            <div className="logoDiv"><i className="fa-solid fa-file-signature"></i><h3> PLAN</h3></div>
            <h2>Developing Customized Solutions</h2>
            <p>Once we have a clear understanding of your business, 
                we work alongside you to develop customized solutions that meet your specific needs. 
                We deliver a solution that meets your expectations.</p>
        </div>
        <div className="aboutCards">
            <div className="logoDiv"><i className="fa-solid fa-square-check"></i><h3> EXECUTE</h3></div>
            <h2>Launching Your Solutions</h2>
            <p>We don't just develop your solutions and leave you to it. 
                We work alongside you to launch your solutions and provide ongoing support 
                and maintenance to ensure that they continue to meet your needs over time.</p>
        </div>
    </div>
    <div className="aboutWe">
        <div className="manimage">
            <img src={manImage} alt='' />
        </div>
        <div className="aboutDetail">
            <h1>What We Are</h1>
            <p>At <b>Dev's Inn</b>, we understand the unique challenges that small businesses face when it comes to establishing an online presence. That’s why we offer a range of affordable web design and digital marketing solutions that are tailored to meet the specific needs of small-scale businesses. We work closely with our clients to develop customized strategies that help them increase their visibility and attract more customers.
                <br/>
                <br/>
                For larger-scale businesses, we offer a range of comprehensive solutions that can help them stay ahead of the competition. Our team of experts has experience working with businesses of all sizes and can help develop a strategy that aligns with your business goals and objectives
            </p>
        </div>
        </div>
    {/* </div> */}
    <div className="misVis">
        <div className="inMisVis">
            <h1>Mission</h1>
            <p>At <b>Dev's Inn</b>, our mission is to help businesses of all sizes establish a strong and effective online presence through our innovative web development solutions. We aim to deliver customized and high-quality digital products that meet the specific needs of each client, while also providing excellent customer <a href="">service and support</a>.</p>
        </div>
        <div className="inMisVis">
            <h1>Vision</h1>
            <p>
                Our vision at <b>Dev's Inn</b> is to become a leading web development company that is recognized for our <a href="">expertise</a>, <a href="">innovation</a>, and commitment to <a href="">client success</a>. We strive to empower businesses with the tools and solutions they need to thrive in the digital age, while also fostering a collaborative and growth-oriented company culture that values creativity, integrity, and excellence.
            </p>
        </div>
        .
    </div>
    </>
  );
};

export default About
