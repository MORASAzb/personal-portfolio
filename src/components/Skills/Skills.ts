export type Skill = {
    name: string;
    level: number;
    image: string;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};

export const skillData = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript (ES6+)', level: 4.5, image: '../../../public/img/skills/javascript.png' },
            { name: 'TypeScript', level: 4, image: '../../../public/img/skills/typescript-100.png' },
            { name: 'HTML5', level: 5, image: '../../../public/img/skills/html-5-100.png' },
            { name: 'CSS3 / SCSS', level: 4.2, image: '../../../public/img/skills/css.png' },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React.js', level: 4.5, image: '../../../public/img/skills/react-js-100.png' },
            { name: 'Angular', level: 4, image: '../../../public/img/skills/angular-100.png' },
            { name: 'Redux', level: 4, image: '../../../public/img/skills/redux-100.png' },
            { name: 'Axios', level: 4, image: '../../../public/img/skills/axios.png' },
            { name: 'motion', level: 3, image: '../../../public/img/skills/animating-solidjs-apps-motion-one.png' },
            { name: 'email.Js', level: 3.25, image: '../../../public/img/skills/emailJs.png' },
            { name: 'LeafLet', level: 4, image: '../../../public/img/skills/leafletjs_logo_icon_169308.webp' },
            { name: 'Toastify', level: 4, image: '../../../public/img/skills/toastify.png' },
        ],
    },
    {
        title: 'Styling & UI Tools',
        skills: [
            { name: 'Tailwind CSS', level: 4, image: '../../../public/img/skills/tailwind-css-100.png' },
            { name: 'Material UI (MUI)', level: 4, image: '../../../public/img/skills/material-ui-100.png' },
            { name: 'Bootstrap', level: 3, image: '../../../public/img/skills/bootstrap-100.png' },
            { name: 'Styled Components', level: 4.5, image: '../../../public/img/skills/Styled Components.png' },
        ],
    },
    {
        title: 'Tools & Version Control',
        skills: [
            { name: 'Git & GitHub', level: 4, image: '../../../public/img/skills/github-100.png' },
            { name: 'VS Code', level: 4, image: '../../../public/img/skills/vs-code-100.png' },
            { name: 'ESLint', level: 4, image: '../../../public/img/skills/eslint-100.png' },
            { name: 'Prettier', level: 4, image: '../../../public/img/skills/prettier.png' },
        ],
    },
    {
        title: 'Others',
        skills: [
            { name: 'RESTful APIs', level: 4, image: '../../../public/img/skills/rest-api-100.png' },
            { name: 'Responsive Design', level: 4.5, image: '../../../public/img/skills/responsive-100.png' },
        ],
    },
];