import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import LazyMoney from '../../assets/lazy-money.jpeg'
import LandMarkFinder from '../../assets/land-mark-finder.jpeg'
import QuoteApp from '../../assets/quote.jpeg'
import Quiz from '../../assets/quiz.jpeg'
import Movie from '../../assets/movie.jpeg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Movie}
          link="https://github.com/prathamngundikere/Movie"
          h3="Movie App"
          p="List of latest movies"
        />
        <ProjectCard
          src={Quiz}
          link="https://github.com/prathamngundikere/Quviz"
          h3="Quviz"
          p="Questions and Answers"
        />
        <ProjectCard
          src={QuoteApp}
          link="https://github.com/prathamngundikere/MVVM_QuotesApp"
          h3="Quotes App"
          p="Get all quotes"
        />
        <ProjectCard
          src={LandMarkFinder}
          link="https://github.com/prathamngundikere/AI_Landmark_finder_App"
          h3="AI Landmark Finder"
          p="Find popular landmarks"
        />
        <ProjectCard
          src={LazyMoney}
          link="https://github.com/prathamngundikere/Lazy_Money"
          h3="Lazy Money"
          p="Money Management App"
        />
      </div>
    </section>
  );
}

export default Projects;
