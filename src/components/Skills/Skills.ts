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
            { name: 'JavaScript (ES6+)', level: 4.5, image: '../../../img/skills/javascript.png' },
            { name: 'TypeScript', level: 4, image: '../../../img/skills/typescript-100.png' },
            { name: 'HTML5', level: 5, image: '../../../img/skills/html-5-100.png' },
            { name: 'CSS3 / SCSS', level: 4.2, image: '../../../img/skills/css.png' },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'React.js', level: 4.5, image: '../../../img/skills/react-js-100.png' },
            { name: 'Angular', level: 4, image: '../../../img/skills/angular-100.png' },
        ],
    },
    {
        title: ' Libraries',
        skills: [
            { name: 'Redux', level: 4, image: '../../../img/skills/redux-100.png' },
            { name: 'Axios', level: 4, image: '../../../img/skills/axios.png' },
            { name: 'motion', level: 3, image: '../../../img/skills/animating-solidjs-apps-motion-one.png' },
            { name: 'email.Js', level: 3.25, image: '../../../img/skills/emailJs.png' },
            { name: 'LeafLet', level: 4, image: '../../../img/skills/leafletjs_logo_icon_169308.webp' },
            { name: 'Toastify', level: 4, image: '../../../img/skills/toastify.png' },
        ],
    },
    {
        title: 'Styling & UI Tools',
        skills: [
            { name: 'Tailwind CSS', level: 4, image: '../../../img/skills/tailwind-css-100.png' },
            { name: 'Material UI (MUI)', level: 4, image: '../../../img/skills/material-ui-100.png' },
            { name: 'Bootstrap', level: 3, image: '../../../img/skills/bootstrap-100.png' },
            { name: 'Styled Components', level: 4.5, image: '../../../img/skills/Styled Components.png' },
        ],
    },
    {
        title: 'Tools & Version Control',
        skills: [
            { name: 'Git & GitHub', level: 4, image: '../../../img/skills/github-100.png' },
            { name: 'VS Code', level: 4, image: '../../../img/skills/vs-code-100.png' },
            { name: 'ESLint', level: 4, image: '../../../img/skills/eslint-100.png' },
            { name: 'Prettier', level: 4, image: '../../../img/skills/prettier.png' },
        ],
    },
    {
        title: 'Others',
        skills: [
            { name: 'RESTful APIs', level: 4, image: '../../../img/skills/rest-api-100.png' },
            { name: 'Responsive Design', level: 4.5, image: '../../../img/skills/responsive-100.png' },
        ],
    },
];