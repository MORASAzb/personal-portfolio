export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveDemo?: string;
}
export const projects: Project[] = [
  {
    title: 'Weather App',
    description: 'A modern weather forecast application using OpenWeatherMap API with real-time data and responsive UI.',
    image: '../../../img/project/weather-app-100.png',
    technologies: ['React', 'CSS', 'Mui', 'Fetch API', 'Tailwind'],
    githubLink: 'https://github.com/MORASAzb/WEATHER-APP.git',
    liveDemo: 'https://weather-app-alpha-three-88.vercel.app',
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz application with multiple categories and scoring system, built with React and Fetch API.',
    image: '../../../img/project/quiz-100.png',
    technologies: ['React', 'CSS', 'Tailwind', 'Fetch API'],
    githubLink: 'https://github.com/MORASAzb/QUIZ_APP.git',
    liveDemo: 'https://quiz-app-seven-smoky-97.vercel.app',
  },
  {
    title: 'Calculator',
    description: 'A responsive and stylish calculator built with React and Styled-Components to perform basic arithmetic operations.',
    image: '../../../img/project/calculator-100.png',
    technologies: ['React', 'Styled-Component', 'Tailwind'],
    githubLink: 'https://github.com/MORASAzb/CALCULATOR.git',
    liveDemo: 'https://calculator-psi-rust-64.vercel.app/',
  },
  {
    title: 'EXCHANGE-CURRENCY',
    description: 'A real-time currency converter using public exchange rate APIs, with a simple and clean UI.',
    image: '../../../img/project/currency-exchange-100.png',
    technologies: ['React', 'CSS', 'Fetch API'],
    githubLink: 'https://github.com/MORASAzb/EXCHANGE-CURRENCY.git',
    liveDemo: 'https://exchange-currency-sigma.vercel.app',
  },
  {
    title: 'Chandan-s',
    description: 'like instagram UI',
    image: '../../../img/project/instagram-logo-100.png',
    technologies: ['React', 'CSS', ],
    githubLink: 'https://github.com/MORASAzb/EXCHANGE-CURRENCY.git',
    liveDemo: 'chandan-s.vercel.app',
  },
];

