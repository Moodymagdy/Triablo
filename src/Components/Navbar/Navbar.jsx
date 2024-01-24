import React from 'react'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg" style={{ position: 'absolute', width :'100%', left:'12%' , marginTop:'20px'  }}>
      <div className="container   ">
        <div>
          <a className="navbar-brand text-white"  href="#" style={{ marginRight: '100px' }} > TRIABLO</a>
        </div>
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="Products">PRODUCTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="Brands">BRANDS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="Why">WHY TRIABLO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="Team">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="Reviews">REVIEWS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="About Us">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="News">NEWS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="Contacts">CONTACTS  </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
