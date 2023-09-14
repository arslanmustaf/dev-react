import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import deploy from '../../assets/more/deploy.jpg'
import aws from '../../assets/more/aws.jpg'
import api from '../../assets/more/api.jpg'
import azure from '../../assets/more/azure.jpg'
import docker from '../../assets/more/docker.png'
import './cloudcomp.css'

function Webdev() {
    return (
        <>
            <div class="headings">
                <div class="heading"> <h1> Cloud Computing Services </h1>
                    <h2>Unleash the Power of Cloud Computing with Dev's Inn Technologies
                        <br /><br />
                        Welcome to Dev's Inn Technologies, your gateway to the limitless possibilities of cloud computing. We are your trusted partner in navigating the ever-evolving digital landscape, offering a comprehensive suite of cloud services.
                    </h2>
                </div>
                <div></div>
            </div>
            <div class="creativeDiv">
                <div class="creative">
                    <h1>Your Digital Transformation Partner</h1>
                    <p>At Dev's Inn Technologies, we understand that the cloud is not just a technology; it's a catalyst for transformation. Our cloud computing services are tailored to meet your unique needs, whether you're looking to optimize resources, enhance security, or leverage the power of data analytics. We don't just deploy; we architect cloud solutions that drive your business forward.
                    </p>
                    {/* <button class="start">Get Started</button> */}
                </div>
                <div class="features">
                    <h1>Cloud Advantage</h1>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Scalability</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Security</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Cost Efficiency</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Flexibility</li>
                    </ul>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="image"><img src={deploy} alt='' /></div>
                <div class="development">
                    <h1>Deployment Excellence</h1>
                    <p>
                        <ul>
                            <li><b>Strategic Deployment:</b>  We are your strategic deployment experts. Our meticulous planning and execution ensure your digital projects are flawlessly launched into the cloud environment.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="development">
                    <h1>AWS (Amazon Web Services) Mastery </h1>
                    <p>
                        <ul>
                            <li><b>AWS Solutions:</b> Harness the full potential of AWS with our expertise. We offer a range of AWS services, including cloud infrastructure, data storage, and scalable solutions that empower your business for growth.</li>
                        </ul>
                    </p>
                </div>
                <div class="image"><img src={aws} alt='' /></div>
            </div>

            <div class="developmentDiv">
                <div class="image"><img src={azure} alt='' /></div>
                <div class="development">
                    <h1>Azure Prowess</h1>
                    <p>
                        <ul>
                            <li><b>Azure Cloud: </b> Explore Azure Cloud with confidence. Our Azure services are designed to optimize your cloud environment for efficiency, security, and performance.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="development">
                    <h1>Docker Magic</h1>
                    <p>
                        <ul>
                            <li><b>Containerization: </b> We simplify complex applications through Docker containerization. Our solutions provide portability and scalability, allowing you to run applications seamlessly across environments.</li>
                        </ul>
                    </p>
                </div>
                <div class="image"><img src={docker} alt='' /></div>
            </div>
            <div class="developmentDiv">
            <div class="image"><img src={api} alt='' /></div>
                <div class="development">
                    <h1>Third-Party API Integration</h1>
                    <p>
                        <ul>
                            <li><b>Seamless Integration: </b> Seamlessly integrate third-party APIs into your applications with our expert guidance. Enhance functionality, streamline processes, and access valuable data effortlessly.
</li>
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