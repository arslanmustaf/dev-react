import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import design from '../../assets/more/design.jpg'
import brouchures from '../../assets/more/brouchures.jpg'
import ui from '../../assets/more/ui.jpg'
import animate from '../../assets/more/animate.jpg'
import './creativedes.css'

function Webdev() {
    return (
        <>
            <div class="headings">
                <div class="heading"> <h1> Creative Design and animations </h1>
                    <h2>Elevate Your Brand with Creative Design Mastery
                    </h2>
                </div>
                <div></div>
            </div>
            <div class="creativeDiv">
                <div class="creative">
                    <h1>Branding that Defines You</h1>
                    <p>At Dev's Inn Technologies, we are passionate creators and visionary designers. Our mission is to transform businesses and brands by harnessing the power of creative design. Explore our portfolio of design expertise, which includes Branding, Logo Design, Brochure Design, UI/UX, and captivating Video Animation services.
                    </p>
                    {/* <button class="start">Get Started</button> */}
                </div>
                <div class="features">
                    <h1>Features Benefits</h1>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Branding</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Logo Designing</li>
                        <li><i><FontAwesomeIcon icon={faCircleCheck} /></i> Brochure Designing</li>
                    </ul>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="image"><img src={design} alt='' /></div>
                <div class="development">
                    <h1>Branding that Defines You</h1>
                    <p>
                        <ul>
                            <li> <b>Branding Strategy: </b> We are architects of identity. Our strategic approach crafts brand stories that resonate with your audience, ensuring a memorable and lasting impression.</li>
                            <li><b>Logo Design: </b> Your logo is the face of your brand. We design logos that encapsulate your essence, making you instantly recognizable in a crowded marketplace</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="development">
                    <h1>Visual Storytelling through Brochures</h1>
                    <p>
                        <ul>
                            <li> <b>Brochure Design: </b> Unlock the potential of visual storytelling with our brochure design services. We create stunning and informative brochures that engage, educate, and inspire action.</li>
                        </ul>
                    </p>
                </div>
                <div class="image"><img src={brouchures} alt='' /></div>
            </div>
            <div class="developmentDiv">
                <div class="image"><img src={ui} alt='' /></div>
                <div class="development">
                    <h1>Intuitive UI/UX for Digital Success</h1>
                    <p>
                        <ul>
                            <li><b>User-Centric UI/UX: </b> Craft seamless user experiences with our UI/UX expertise. We design interfaces that are not just beautiful but also intuitive and user-friendly, enhancing user satisfaction and engagement.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="developmentDiv">
                <div class="development">
                    <h1>Breathe Life into Your Vision with Video Animation</h1>
                    <p>
                        <ul>
                            <li><b>Video Animation: </b> In the digital age, video is king. Our animation services breathe life into your ideas, conveying messages that captivate and inspire. From explainer videos to motion graphics, we create visuals that leave a lasting impression.</li>
                        </ul>
                    </p>
                </div>
                <div class="image"><img src={animate} alt='' /></div>
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