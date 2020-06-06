import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        Hi, I'm <strong>Jessica</strong>.&nbsp;
        <br />
        I like building web applications and
        <br />
        taking pictures of my cats.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
