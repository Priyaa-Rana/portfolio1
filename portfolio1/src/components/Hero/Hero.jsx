import React from 'react'
import styles from'./Hero.module.css'
import img from '../../../src/photoon.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/priya.resume.pdf'
import { useTheme } from '../../common/ThemeContext.jsx';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={img} alt="Profile Picture"/>
        <img  className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info} >
          <h1>Priya
            <br/>
            Rana
          </h1>
          <h2>Web Developer</h2>
          <span>
            <a href='https://twitter.com/home' target="_blank"><img src={twitterIcon} alt="twitter Icon" /></a>
            <a href='https://github.com/Priyaa-Rana' target="_blank"><img src={githubIcon} alt="Github Icon" /></a>
            <a href='https://www.linkedin.com/in/priya-rana-b3a717303/' target="_blank"><img src={linkedInIcon} alt="LinkedIn Icon" /></a>
          </span>
          <p className={styles.description}>With a passion for developing modern React apps for commercial businesses.</p>
          <a href={CV} download><button className='hover' >Resume</button></a>
        </div>

    </section>
  )
}

export default Hero