import React from 'react';

import Layout from 'layouts/index';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import Research from 'components/Research';
import ContactLinks from 'components/ContactLinks';
import CustomCursor from 'components/CustomCursor';

import projects from 'content/projects';
import statements from 'content/about-me';

const Home = () => {
  return (
    <Layout>
      <React.Fragment>
        <CustomCursor />
        <Hero />
        <About statements={statements} />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="research" className="section-title">
          Research & Publications
        </h2>
        <Research />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
      </React.Fragment>
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Adityaram's Portfolio</title>
    <meta name="description" content="Adityaram Komaraneni's Portfolio – Data Science & ML Engineer" />
    <meta name="keywords" content="adityaram komaraneni, portfolio, data science, machine learning, columbia university" />
  </>
);
