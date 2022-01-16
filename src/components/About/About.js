import React, { useContext } from 'react';

import './About.css';
import Lottie from 'react-lottie';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import coding from '../../assets/json/coding.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: coding,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
      <div className="line-styling">
        <div className="style-circle" style={{ backgroundColor: theme.primary }} />
        <div className="style-circle" style={{ backgroundColor: theme.primary }} />
        <div className="style-line" style={{ backgroundColor: theme.primary }} />
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
        <div className="about-img">
          <Lottie options={defaultOptions} height={480} width={480} />
        </div>
      </div>
    </div>

  );
}

export default About;
