/* eslint-disable import/prefer-default-export */
import one from '../assets/svg/projects/blog.svg';
import two from '../assets/png/library.png';
import three from '../assets/png/database.png';
import four from '../assets/png/metrics.png';
import five from '../assets/png/bookstore.png';
import six from '../assets/png/math.png';
import seven from '../assets/png/leaderboard.png';
import eight from '../assets/png/natours.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'Blog-Rails-App',
    projectDesc: 'The Blog app will be a classic example of a blog website. It will be a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'CSS'],
    code: 'https://github.com/ntzwilly/blog-rails-app',
    demo: 'https://github.com/ntzwilly/blog-rails-app',
    image: one,
  },
  {
    id: 2,
    projectName: 'school-library',
    projectDesc: 'This is a console app that helps you to keep a record of different types of things you won: books, music albums, movies, and games.',
    tags: ['Ruby'],
    code: 'https://github.com/ntzwilly/school-library',
    demo: 'https://github.com/ntzwilly/school-library',
    image: two,
  },
  {
    id: 3,
    projectName: 'vet-clinic-database',
    projectDesc: 'In this project, I use a relational database to create the data structure for a vet clinic.',
    tags: ['PostgreSQL'],
    code: 'https://github.com/ntzwilly/vet-clinic-database',
    demo: 'https://github.com/ntzwilly/vet-clinic-database',
    image: three,
  },
  {
    id: 4,
    projectName: 'metrics-app',
    projectDesc: 'This is a mobile web application built with React and Redux. It can be used to check the numeric values of COVID cases in various European countries.',
    tags: ['React', 'Redux', 'CSS'],
    code: 'https://github.com/ntzwilly/metrics-app',
    demo: 'https://metrics-app-covid.herokuapp.com/',
    image: four,
  },
  {
    id: 5,
    projectName: 'bookstore',
    projectDesc: 'A simple website application where a user can add and remove books from a list.',
    tags: ['React & Redux', 'JSX', 'CSS'],
    code: 'https://github.com/ntzwilly/bookstore',
    demo: 'https://bookstore-w01.herokuapp.com/books',
    image: five,
  },
  {
    id: 6,
    projectName: 'math-magicians',
    projectDesc: 'This is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    tags: ['React', 'JSX', 'CSS'],
    code: 'https://github.com/ntzwilly/math-magicians',
    demo: 'https://ntzwilly.github.io/math-magicians/',
    image: six,
  },
  {
    id: 7,
    projectName: 'centerboard-app',
    projectDesc: 'This website displays scores submitted by different players. It also allows you to submit your score. All data is preserved to an external Weatherboard API service.',
    tags: ['javascript', 'CSS'],
    code: 'https://github.com/ntzwilly/leaderboard-app',
    demo: 'https://ntzwilly.github.io/leaderboard-app/dist/',
    image: seven,
  },
  {
    id: 8,
    projectName: 'Natours',
    projectDesc: 'Website of a fictional company that offers tours in nature. Build as part of the online course Advanced CSS and SASS by Jonas Schmedtmann',
    tags: ['HTML', 'CSS', 'Sass'],
    code: 'https://github.com/ntzwilly/Natours',
    demo: 'https://ntzwilly.github.io/Natours/',
    image: eight,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/*
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
},
*/
