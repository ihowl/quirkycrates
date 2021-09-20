import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Quirky Collections', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to',
  name: 'Quirky Collections',
  subtitle: 'Hand Crafted + Grown With Love + Hand-Delivered',
  cta: 'I want to know more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'fingerscrossed.png',
  paragraphOne:
    'I love plants. I love cute pots for my plants. I love supporting local growers and artisans. I also really, REALLY love surprises! ',
  paragraphTwo:
    'Would you like to be surprised (or be the surpriser) and purchase a quirky plant in a cute planter with or without some local-made goodies?',
  paragraphThree:
    'Supplies will be very limited! We will connect with you to see if you would like a complete surprise, or if you have any preferences so we can curate each package to bring as much joy as possible.',
  paragraphFour:
    'If this is something that you would be interested in, please sign up to our mailing list. This will help me determine if this could be a viable small-business opportunity for me.',
  paragraphFive: 'Fingers crossed x',
  paragraphSix: 'Toni @quirky_lemon',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/quirkywerky',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/quirky_lemon/',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCfB_jlok-4y--869VSC3dWQ',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
