import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container-2">
        <div className="foot-menu" style={{marginBottom: '1rem'}}>
          <a href="" style={{marginRight: '10px'}}>About</a>
          <a href="">Help</a>
        </div>
        <p style={{color: '#ffffff'}}>&copy; 2019 - One store.</p>
      </div>
    </footer>
  )
}
