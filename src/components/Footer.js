import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://github.com/jessypeck" className="icon fa-github" target="_blank">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jessica-peck-26454b178/" className="icon fa-linkedin" target="_blank">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:jessypeck@gmail.com" className="icon fa-envelope-o" target="_blank">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          Design: <a href="http://html5up.net" target="_blank">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
