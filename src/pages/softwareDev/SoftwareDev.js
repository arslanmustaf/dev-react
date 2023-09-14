import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './softwaredev.css'
import software from '../../assets/more/software.jpg'
import mobile from '../../assets/more/mobile.jpg'
import excellence from '../../assets/more/excellence.jpg'

function Webdev() {
    return (
        <>
            <div class="headings">
                <div class="heading"> <h1> Software Development </h1>
                    <h2>At Dev’s Inn Technologies, we are the architects of the digital future. Our Software development services encompass a wide array of cutting-edge technologies, ensuring that your online presence is not just functional but exceptional.</h2>
                </div>
                <div></div>
            </div>
            <div class="creativeDiv">
                <div class="creative">
                    <h1>Creative Solutions for Software Development Needs</h1>
                    <p>At Dev's Inn Technologies, we are your gateway to a world of endless digital possibilities. Our mission is simple yet profound: to empower businesses and brands through cutting-edge development services that redefine their digital presence. <br /> Explore our diverse portfolio of development expertise, spanning an array of Web Technologies including MERN, NEXT.js, NEST.js, ROR, PHP, React Native, Flutter, and Native Mobile Development for both Android and iOS. Additionally, we are masters of various built-in platforms, including Shopify, WordPress, FlutterFlow, Bubble.io, and FluxStore.
                    </p>
                    {/* <button class="start">Get Started</button> */}
                </div>
                <div class="features">
                    <h1>Features Benefits</h1>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> MERN Stack Excellence</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> NEXT.js Innovation</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> NEST.js Expertise</li>
                    </ul>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="image"><img src={software} alt='' /></div>
                <div class="development">
                    <h1>Software Development Mastery</h1>
                    <p>
                        <ul>
                            <li> <b>MERN Stack Excellence:</b> Dive into the full-stack world of the MERN stack (MongoDB, Express.js, React, Node.js). We engineer dynamic web applications and immersive interfaces that captivate your audience.</li>
                            <li><b>NEXT.js Innovation:</b> Elevate your web applications with NEXT.js. Our server-rendered React apps offer lightning-fast load times and top-notch SEO performance.</li>
                            <li><b>NEST.js Expertise:</b> Tap into the potential of NEST.js for scalable server-side applications. Our backend solutions match the robustness of your frontend ambitions.</li>
                            <li><b>ROR (Ruby on Rails) Magic:</b> Experience the elegance of Ruby on Rails. Our ROR development services craft streamlined, high-quality web applications that stand out.</li>
                            <li><b>PHP Proficiency:</b> From dynamic websites to customized CMS solutions, our PHP development enriches your digital footprint, enhancing user engagement and growth.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="development">
                    <h1>Mobile App Development Mastery</h1>
                    <p>
                        <ul>
                            <li> <b>React Native Brilliance:</b> Seamlessly deploy your apps across Android and iOS with our React Native services. Native-quality experiences emerge from a single codebase.</li>
                            <li><b>Flutter Expert Craftsmanship:</b> Explore the dynamic capabilities of Flutter for cross-platform mobile app development. We transform your mobile presence with flexibility and finesse.</li>
                        </ul>
                    </p>
                </div>
                <div class="image"><img src={mobile} alt='' /></div>
            </div>
            <div class="developmentDiv">
                <div class="image"><img src={excellence} alt='' /></div>
                <div class="development">
                    <h1>Platform Excellence</h1>
                    <p>
                        <ul>
                            <li><b>Shopify Customization:</b> Maximize e-commerce potential with our Shopify development. We tailor Shopify solutions to align seamlessly with your brand, delivering exceptional shopping experiences.</li>
                               <li><b> WordPress Versatility:</b> Leverage the adaptability of WordPress for all your web needs. From blogs to dynamic websites, we harness WordPress to create captivating digital narratives.</li>
                                <li><b>FlutterFlow:</b> Unleash your creativity with FlutterFlow for rapid app development. Our expertise in this platform ensures stunning and functional apps developed with remarkable speed.</li>
                               <li><b>Bubble.io</b> Expertise: Create web apps without code using Bubble.io. Our proficiency in this no-code platform brings your digital visions to life with remarkable efficiency and precision.</li>
                                <li><b>FluxStore:</b> Embrace the potential of FluxStore, and let us help you create innovative e-commerce solutions that set you apart in the digital marketplace.</li>
                        </ul>
                    </p>
                </div>
            </div>
            {/* <div class="prices">
                <h1>Transparent Pricing for Custom Web Design</h1>
                <div class="priceDiv">
                    <div class="recommend"></div>
                    <h1>Basic Package</h1>
                    <div class="price">5000 PKR</div>
                    <ul>
                        <li><i class="fa-solid fa-circle-check"></i> 1 Free Domain Name(.in)</li>
                        <li><i class="fa-solid fa-circle-check"></i> 1 Free Web Hosting</li>
                        <li><i class="fa-solid fa-circle-check"></i> 5 Pages (Static Website)</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Business Email id</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Unlimited Images & Videos</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> SEO Friendly Webpage</li>
                        <li><i class="fa-solid fa-circle-check"></i> 100% Responsive</li>
                        <li><i class="fa-solid fa-circle-check"></i> Live Chat Integration</li>
                        <li><i class="fa-solid fa-circle-check"></i>Social Media Integration</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> SSL Certificate</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Unlimited Bandwidth</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> cPanel Access</li>
                        <li><i class="fa-solid fa-circle-check"></i> 24/7 Support Email</li>
                        <li><i class="fa-solid fa-circle-check"></i> Annual Renewal ₹2499</li>
                    </ul>
                    <button class="order">Order Now</button>
                </div>
                <div class="priceDiv">
                    <div class="recommend"> Recommended</div>
                    <h1>Basic Package</h1>
                    <div class="price">5000 PKR</div>
                    <ul>
                        <li><i class="fa-solid fa-circle-check"></i> 1 Free Domain Name(.in)</li>
                        <li><i class="fa-solid fa-circle-check"></i> 1 Free Web Hosting</li>
                        <li><i class="fa-solid fa-circle-check"></i> 5 Pages (Static Website)</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Business Email id</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Unlimited Images & Videos</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> SEO Friendly Webpage</li>
                        <li><i class="fa-solid fa-circle-check"></i> 100% Responsive</li>
                        <li><i class="fa-solid fa-circle-check"></i> Live Chat Integration</li>
                        <li><i class="fa-solid fa-circle-check"></i>Social Media Integration</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> SSL Certificate</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Unlimited Bandwidth</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> cPanel Access</li>
                        <li><i class="fa-solid fa-circle-check"></i> 24/7 Support Email</li>
                        <li><i class="fa-solid fa-circle-check"></i> Annual Renewal ₹2499</li>
                    </ul>
                    <button class="order">Order Now</button>
                </div>
                <div class="priceDiv">
                    <div class="recommend"></div>
                    <h1>Basic Package</h1>
                    <div class="price">5000 PKR</div>
                    <ul>
                        <li><i class="fa-solid fa-circle-check"></i> 1 Free Domain Name(.in)</li>
                        <li><i class="fa-solid fa-circle-check"></i> 1 Free Web Hosting</li>
                        <li><i class="fa-solid fa-circle-check"></i> 5 Pages (Static Website)</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Business Email id</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Unlimited Images & Videos</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> SEO Friendly Webpage</li>
                        <li><i class="fa-solid fa-circle-check"></i> 100% Responsive</li>
                        <li><i class="fa-solid fa-circle-check"></i> Live Chat Integration</li>
                        <li><i class="fa-solid fa-circle-check"></i>Social Media Integration</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> SSL Certificate</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> Unlimited Bandwidth</li>
                        <li><i class="fa-solid fa-bag-shopping"></i> cPanel Access</li>
                        <li><i class="fa-solid fa-circle-check"></i> 24/7 Support Email</li>
                        <li><i class="fa-solid fa-circle-check"></i> Annual Renewal ₹2499</li>
                    </ul>
                    <button class="order">Order Now</button>
                </div>

            </div> */}
        </>
    )
}

export default Webdev