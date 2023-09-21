

import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="container-2">
        <div className="flex ai-center jc-sb">
          <h1 className="home-logo">One Store</h1>
          <div className="search flex ai-center">
            <input className="search-bar" type="search" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="menu">
            <div className="menus">
              <a href="" className="shape">
                <i className="fa-solid fa-house"></i>
              </a>
              <a href="" className="shape">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
              <a href="" className="shape">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </div>
            <img src="./public/logo.png" alt="" className="pp" />
          </div>
        </div>
      </div>
    </nav>
  );
}
