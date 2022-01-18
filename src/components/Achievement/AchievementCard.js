/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { AiOutlineFolder } from 'react-icons/ai';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Achievement.css';

function AchievementCard({
  id, title, details, date, field, url, image,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      '&:hover': {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom>
      <div key={id} className={`achievement-card ${classes.achievementCard}`}>
        <div className="achievecard-content">
          <div className="achievecard-details1">
            <h2 style={{ color: theme.tertiary }}>{title}</h2>
            <p style={{ color: theme.tertiary80 }}>{details}</p>
          </div>
          <div className="achievecard-details2" style={{ color: theme.primary }}>
            <h5>{date}</h5>
            <a href={url} target="_blank" className="achievecard-field" style={{ color: theme.primary }} rel="noopener noreferrer">
              <AiOutlineFolder />
              <h5>{field}</h5>
            </a>
          </div>
        </div>
        <div className="achievecard-imgcontainer">
          <img src={image} alt="" />
        </div>
      </div>
    </Fade>

  );
}

export default AchievementCard;
