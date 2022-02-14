import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {

  const [showMenuItem, setShowMenuItem] = useState(false);

  const func = () => {
    setShowMenuItem(!showMenuItem);
    // console.log(showMenuItem);
  }

  return (
    <>
      <div className="nav-menu">
        <div className="sec-1">
          <h1 className="heading1"><span>G</span>rill<span>Z</span>one</h1>
        </div>

        <div className="sec-2">
          
          <ul className={(showMenuItem === true) ? "mobile-nav-list mob1" : "mobile-nav-list"}>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/">Home</NavLink></li>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/service">Services</NavLink></li>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/about">About</NavLink></li>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>

          <ul className="nav-list">
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/">Home</NavLink></li>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/service">Services</NavLink></li>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/about">About</NavLink></li>
            <li className="list-item"><NavLink activeclassname="menu-active" className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>

        </div>

        <div className="sec-3">
          <ul className="social-media">
            <li className="s-item">
              <a href="https://github.com/vaishali0003">
                <img src="images/github.png" className="image" alt="image" />
              </a>
            </li>
            <li className="s-item">
              <a href="https://www.instagram.com/vaishali0003/">
                <img src="images/instagram.png" className="image" alt="image" />
              </a>
            </li>
            <li className="s-item">
              <a href="https://www.linkedin.com/in/vaishali-dwivedi-b46774225/">
                <img src="images/linkedin.png" className="image" alt="image" />
              </a>
            </li>
          </ul>
          <div className="hamImg" onClick={func}>
            <img src="images/hambg.png" alt="menu" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;