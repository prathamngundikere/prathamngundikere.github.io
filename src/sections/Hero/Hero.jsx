import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/pratham-avatar.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Pratham N Gundikere"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pratham
          <br />
          Gundikere
        </h1>
        <h2>Android Developer</h2>
        <span>
          <a href="https://github.com/prathamngundikere" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/prathamngundikere?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Making modern Native Android Apps for my personal projects from past 2 years
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="hover">My Work</button>
          <button onClick={() => window.open('https://medium.com/@prathamgundikere', '_blank')} className="hover">My Blog</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;