import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"

import { ProjectCard } from '../components/ProjectCard'
import Layout from '../components/layout'

import jsonData from './projects.json';

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
        <SectionFour />
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
    <h2>Technologies</h2>
    <WordWrap>
      JavaScript TypeScript React Redux StyledComponents SCSS
      Python Django Flask NodeJS Express MongdoDB
      Jest PyTest webpack babel git docz
    </WordWrap>
  </section>
)

const SectionThree = () => {
  const json = JSON.parse(JSON.stringify(jsonData));

  return (
    <section id="three">
      <h2>Projects</h2>
      {json.projects.map(project => {
        const description = project.content.join(' ');
        return (
          <ProjectCard
            title={project.name}
            description={description}
            codeUrl={project.codeUrl}
            liveUrl={project.siteUrl}
            imgUrl={project.image}
          />
        )
      })}
    </section>
  )
}

const SectionFour = () => (
  <section id="four">
    <h2>Get In Touch</h2>
    Want to say hello? Tell me about an available position? Send me a link for a cool article on good practices?<br/>
    Reach out to me at <a href="mailto:jessypeck@gmail.com">jessypeck@gmail.com</a> or hit me up on <a href="https://www.linkedin.com/in/jessica-peck-26454b178/">LinkedIn</a>.
  </section>
)



// ------------------------------------------ //
//              Styled Components             //
// ------------------------------------------ //

const WordWrap = styled.div`
  word-spacing: 30px;
  line-height: 2;
  text-align: justify;
  text-align-last: left;
`


export default HomeIndex
