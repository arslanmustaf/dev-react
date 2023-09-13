import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <footer>
    <div className="foot">
            <div class="inFoot">
                <img src={logo} alt=''/>
                <p>We offer the services you need to succeed online. Get in touch today and let us help you transform your online presence.</p>
            </div>
            <div className="inFoot">
                <h2>Useful Link</h2>
                <ul>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    <li><Link to='/terms-and-conditions'>Term & Conditions</Link></li>
                    <li><Link to='/support'>Support</Link></li>
                </ul>
            </div>
            <div className="inFoot">
                <h2>Contact Us</h2>
                <ul className="address">
                   <li><i><FontAwesomeIcon icon={faLocation} /></i> Brainy and bright academy, House #14b butt street, Kalyar Rd, Lahore</li>
                    <li><i><FontAwesomeIcon icon={faPhone} /></i>  0315 4031364</li>
                    <li><i><FontAwesomeIcon icon={faEnvelope} /></i> devsinntechnologies@gmail.com </li>
                </ul>
            </div>
        </div>
        <div class="footIcon">
            <div class="footDetail">
                <p>&copy; 2023 Dev's Inn. All Rights Reserved.</p>
                <div class="linkIcon">
                    <ul>
                        <li><a href="https://www.facebook.com/devsinntechnology?mibextid=ZbWKwL" target='blank'><i><FontAwesomeIcon icon={faFacebook} size="2xl" /></i></a></li>
                        <li><a href="https://instagram.com/devsinntechnologies?igshid=MzRlODBiNWFlZA==" target='blank'><i><FontAwesomeIcon icon={faInstagram} size="2xl" /></i></a></li>
                        <li><a href="https://www.twitter.com/" target='blank'><i><FontAwesomeIcon icon={faXTwitter} size="2xl" /></i></a></li>
                        <li><a href="https://www.linkedin.com/company/devsinn-technologies/" target='blank'><i><FontAwesomeIcon icon={faLinkedin} size="2xl" /></i></a></li>
                        <li><a href="https://www.youtube.com/@devsinntechnologies509" target='blank'><i><FontAwesomeIcon icon={faYoutube} size="2xl" /></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer