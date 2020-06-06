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




export default HomeIndex
