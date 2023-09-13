import { React, useState } from 'react';
// import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';


function Header() {

    const [headerClass, SetHeaderClass] = useState("header");
    const [btnClass, SetBtnClass] = useState("headerList");
    const [hamClass, SetHamClass] = useState("line");
    let initStyle = {
    }
    let listStyle = {
        position: "relative",
        visibility: "visible",
        opacity: "1",
    }
    const [inList, setInList] = useState(initStyle);
    let toggleList = () => {    
            if (inList === initStyle) {
                setInList(listStyle);
            } else {
                setInList(initStyle);
            }
    }

    let changer = () => {
        if (headerClass === "header") {
            SetHeaderClass("header active");
        } else {
            SetHeaderClass("header");
        }
        if (btnClass === "headerList") {
            SetBtnClass("headerList active");
        } else {
            SetBtnClass("headerList");
        }
        if (hamClass === "line") {
            SetHamClass("line active");
        } else {
            SetHamClass("line");
        }
    }

    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div>
            <header className={headerClass}>
                <nav>
                    <div className="logo">
                        <div className="log">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="hamburgerDiv" onClick={() => { changer() }}>
                            <div className="hamburger">
                                <div className={hamClass}></div>
                                <div className={hamClass}></div>
                                <div className={hamClass}></div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={btnClass}>
                    <ul className="mainUl">
                        <li><Link to="/" className={isActive('/') ? 'activePage' : ''}>Home</Link></li>
                        <li><Link to="/about-us" className={isActive('/about-us') ? 'activePage' : ''}>About Us</Link></li>
                        <li onClick={() => { toggleList() }} >
                            <p>Services <FontAwesomeIcon icon={faCaretDown} /></p>
                            <ul style={inList}>
                                <li><Link to="/software-development">Website Development</Link></li>
                                <li><Link to="/software-development">App Development</Link></li>
                                <li><Link to="/cloud-computing">Digital Marketing</Link></li>
                                <li><Link to="/creative-design">Website Maintenance</Link></li>
                                <li><Link to="/creative-design">Graphic Designing</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/portfolio" className={isActive('/portfolio') ? 'activePage' : ''}>Portfolio</Link></li>
                        <li>
                            <Link to="/contact-us" className={isActive('/contact-us') ? 'activePage' : ''}>Contact us  <FontAwesomeIcon icon={faCaretDown} /></Link>
                            {/* <ul>
                                <li><Link to="/contact-us/career">Career</Link></li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
