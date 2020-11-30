import chattydelta from '../../assests/images/chattydelta.png';
import spillthejeans from '../../assests/images/spillthejeans.png';
import Dinnterest from '../../assests/images/dinnterest.png';
import Tamagotchi from '../../assests/images/Tamagotchi.png';
import SharkAttack from '../../assests/images/SharkAttack.png';
import DinoKennel from '../../assests/images/DinoKennel.png';

const projects = [
  {
    title: 'Chatty Delta',
    screenshot: `${chattydelta}`,
    description: 'An application that allows Lord of the Ring fans to select a character and send messages to eachother',
    technologiesUsed: ' HTML,JQuery, SASS, Javascript ES6,  Version Control with Github',
    available: true,
    url: 'https://lotr-chatty.netlify.app',
    githubUrl: 'git@github.com:nss-evening-cohort-13/chatty-delta.git'
  },
  {
    title: 'Spill the Jeans',
    screenshot: `${spillthejeans}`,
    description: 'This website showcases the products available from a new jean company for women, called Spill the Jeans. Therea are 4 pages, each with a specific purpose, Home: Showcases products available in an image grid. Each image links to the shop page.Shop: Allows the user to see all available products and filter according to needs.About: Describes the history of the company, shows locations on a map, and allows the user to cycle through fun facts about jeans.Checkout: User can add items to their cart, view their cart, and clear their cart.',
    technologiesUsed: 'HTML, CSS, JavaScript, Version Control with Github',
    available: true,
    url: 'https://spillthejeans.netlify.app/index.html',
    githubUrl: 'git@github.com:nss-evening-cohort-13/pants-group-project-coolcoders3.git'
  },
  {
    title: 'Dinnterest',
    screenshot: `${Dinnterest}`,
    description: 'Dinnterest is a single-page application that is a take on Pinterest devoted to Foods, Breakfast, Lunch and Dinner. It allows the user to log in and add boards and "Dinns" to their boards. The boards and Dinns are specific to that user, and the Dinns are specific to each board.',
    technologiesUsed: 'HTML, JavaScipt, Bootstrap, Modules, very light SCSS, Firebase, Webpack, JQuery,Version Control with Github',
    available: true,
    url: 'https://pinterestproject-d87f5.web.app',
    githubUrl: 'git@github.com:AutumnFoto/Pinterest.git'
  },
  {
    title: 'Tamagotchi 2.0',
    screenshot: `${Tamagotchi}`,
    description: 'This project was our first opportunity to practice using JavaScript modules along with Webpack and SASS. The original Tamagotchi toy was a handheld device in the 90s, with an app that allowed the user to care for a digital pet. Our app is similar to the original Tamagotchi app, allowing the user to view four different areas of overall health and see the impact when different buttons are clicked.',
    technologiesUsed: 'SASS,HTML, JS with ES6 modules,  jQuery, Webpack configurationVersion Control with Github',
    available: true,
    url: 'enter here',
    githubUrl: 'git@github.com:AutumnFoto/Tamagotchi.git'
  },
  {
    title: 'Dino-Kennel',
    screenshot: `${DinoKennel.png}`,
    description: 'Simple one page application where User can interact with virtual Dinos! User can pet, feed, and send their Dinos on adventures but be careful Dinos can end up in the Kennel,Hospital or Graveyard!',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://afotopoulosdino.netlify.app',
    githubUrl: 'git@github.com:AutumnFoto/Dino-Kennel.git',
  },
  {
    title: 'Shark Attack',
    screenshot: `${SharkAttack}`,
    description: 'Simple one page application where User can interact with virtual Dinos! User can pet, feed, and send their Dinos on adventures but be careful Dinos can end up in the Kennel,Hospital or Graveyard!',
    technologiesUsed: 'HTML, React, SCSS, Version Control with Github',
    available: true,
    url: '',
    githubUrl: 'git@github.com:AutumnFoto/shark-attack.git'
  }
];

const getProjectData = () => projects;

export default { getProjectData };
