import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'


// ------------------------------------------ //
//               Main Component               //
// ------------------------------------------ //

const HomeIndex = () => {
  const siteTitle = 'Jessica Peck'
  const siteDescription = 'Jessica Peck - Fullstack Software Engineer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </Layout>
  )
}

// ------------------------------------------ //
//               Sub-Components               //
// ------------------------------------------ //

const SectionOne = () => (
  <section id="one">
    <header className="major">
      <h2>
        Jessica Peck
        <br />
        Fullstack Software Engineer
      </h2>
    </header>
    <p>
      A fullstack developer with a background in linguistics and education.
      I like to help systems flow well from end-to-end, whether we're talking
      about the codebase, or the teams who work on it.
    </p>
  </section>
)

const SectionTwo = () => (
  <section id="two">
    <h2>Recent Work</h2>
    <Gallery />
    <ul className="actions">
      <li>
        <a href="#" className="button">
          Full Portfolio
        </a>
      </li>
    </ul>
  </section>
)

const SectionThree = () => (
  <section id="three">
    <h2>Get In Touch</h2>
    <p>
      Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
      magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
      vulputate lorem neque lorem ipsum dolor.
    </p>
    <ContactForm />
  </section>
)

const ContactForm = () => (
  <div className="row">
    <div className="8u 12u$(small)">
      <form method="post" action="#">
        <div className="row uniform 50%">
          <div className="6u 12u$(xsmall)">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="6u 12u$(xsmall)">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="12u">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
        </div>
        <ul className="actions" style={{ marginTop: 30 }}>
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
    </div>
    <div className="4u 12u$(small)">
      <ul className="labeled-icons">
        <li>
          <h3 className="icon fa-home">
            <span className="label">Address</span>
          </h3>
          1234 Somewhere Rd.
          <br />
          Nashville, TN 00000
          <br />
          United States
        </li>
        <li>
          <h3 className="icon fa-mobile">
            <span className="label">Phone</span>
          </h3>
          000-000-0000
        </li>
        <li>
          <h3 className="icon fa-envelope-o">
            <span className="label">Email</span>
          </h3>
          <a href="#">hello@untitled.tld</a>
        </li>
      </ul>
    </div>
  </div>
)

export default HomeIndex
