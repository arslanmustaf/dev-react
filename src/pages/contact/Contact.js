import React from 'react'
import './contact.css'
import Map from '../../components/Map'

function Contact() {
  return (
    <>
    <div class="contContainer">
        <div class="heading">
            <h1>Let's Build Your Dream Website Together!</h1>
        </div>
        <div></div>
    </div>
    <div class="inTouch">
        <div class="contactForm">
            <h1>Let's Talk?</h1>
            <form action="mailto:marslanmustafa391@gmail.com" method='post' enctype="text/plain">
                <input type="text" name='Name' placeholder="Name" required/>
                <input type="email" name='Email' placeholder="Email" required/>
                <input type="number" placeholder="Phone" required/>
                <div class="input">
                    <select name="Fields" class="fields" required>
                        <option selected>Select</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Website Maintenence">Website Maintenence</option>
                    </select>
                </div>
                <textarea type="text" class="query" name='Query' placeholder="query" required />
                <button type='submit'>Connect with Dev's Inn Today!</button>
            </form>
        </div>
        <div class="contInTouch">
            <h1>Get in Touch with Dev's Inn</h1>
            <p>
                If you're looking for professional website design services, look no further than DS Tech. 
                Contact us today to learn more about our services and how we can help your business achieve its online goals.
            </p>
            <ul class="address">
                <li><i class="fa-solid fa-location-dot"></i>  Brainy and bright academy, House #14b butt street, Kalyar Rd, Lahore </li>
                 <li><i class="fa-solid fa-phone"></i>  0315 4031364</li>
                 <li><i class="fa-solid fa-envelope"></i>  devsinntechnologies@gmail.com</li>
             </ul>
        </div>
    </div>
    <Map/>
    </>
  )
}

export default Contact