export type Project  = {
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
      description: 'A weather forecast app using OpenWeatherMap API.',
      image: '../../../public/img/project/weather-app-100.png',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      githubLink: 'https://github.com/MORASAzb/WEATHER-APP.git',
      liveDemo: 'https://weather-app-alpha-three-88.vercel.app',
    },
    // می‌تونی پروژه‌های بیشتری اضافه کنی
  ];