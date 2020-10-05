import chattydelta from '../../assests/images/chattydelta.png';
import spillthejeans from '../../assests/images/spillthejeans.png';

const projects = [
  {
    title: 'Spill the Jeans',
    screenshot: `${chattydelta}`,
    description: 'enter here',
    technologiesUsed: 'HTML, CSS, JavaScript, Version Control with Github',
    available: true,
    url: 'enter here',
    githubUrl: 'enter here'
  },
  {
    title: 'Spill the Jeans',
    screenshot: `${spillthejeans}`,
    description: 'enter here',
    technologiesUsed: 'HTML, CSS, JavaScript, Version Control with Github',
    available: true,
    url: 'enter here',
    githubUrl: 'enter here'
  },
  {
    title: 'Cool Project',
    screenshot: '',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'enter here',
    githubUrl: 'enter here'
  },
  {
    title: 'Another Cool Project',
    screenshot: '',
    description: 'enter here',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'enter here',
    githubUrl: 'enter here'
  },
  {
    title: 'Another Cool Project',
    screenshot: '',
    description: 'enter here',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'enter here',
    githubUrl: 'enter here'
  }
];

const getProjectData = () => projects;

export default { getProjectData };
