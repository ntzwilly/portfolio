/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import { AiOutlineFolder } from 'react-icons/ai';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Achievement.css';

function AchievementCard({
  id, title, details, date, field, url, image,
}) {
  // console.log(title);

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
            <Link onClick={() => window.open(url)} className="achievecard-field" style={{ color: theme.primary }}>
              <AiOutlineFolder />
              <h5>{field}</h5>
            </Link>
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
