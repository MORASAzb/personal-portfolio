'use client';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';
import {
  Typography,
  Grid,
  Card,
  Rating,
  Avatar,
} from '@mui/material';
import { useRef } from 'react';
import './Skills.css'

const skillData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 4.5, image: '../../../public/img/New folder/javascript.png' },
      { name: 'TypeScript', level: 4, image: '../../../public/img/New folder/typescript-100.png' },
      { name: 'HTML5', level: 5, image: '../../../public/img/New folder/html-5-100.png' },
      { name: 'CSS3 / SCSS', level: 4.2, image: '../../../public/img/New folder/css.png' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', level: 4.5, image: '../../../public/img/New folder/react-js-100.png' },
      { name: 'Angular', level: 4, image: '../../../public/img/New folder/angular-100.png' },
      { name: 'Redux', level: 4, image: '../../../public/img/New folder/redux-100.png' },
      { name: 'Axios', level: 4, image: '../../../public/img/New folder/axios.png' },
    ],
  },
  {
    title: 'Styling & UI Tools',
    skills: [
      { name: 'Tailwind CSS', level: 4, image: '../../../public/img/New folder/tailwind-css-100.png' },
      { name: 'Material UI (MUI)', level: 4, image: '../../../public/img/New folder/material-ui-100.png' },
      { name: 'Bootstrap', level: 3, image: '../../../public/img/New folder/bootstrap-100.png' },
      { name: 'Styled Components', level: 4.5, image: '../../../public/img/New folder/Styled Components.png' },
    ],
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git & GitHub', level: 4, image: '../../../public/img/New folder/github-100.png' },
      { name: 'VS Code', level: 4, image: '../../../public/img/New folder/vs-code-100.png' },
      { name: 'ESLint', level: 4, image: '../../../public/img/New folder/eslint-100.png' },
      { name: 'Prettier', level: 4, image: '../../../public/img/New folder/prettier.png' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'RESTful APIs', level: 4, image: '../../../public/img/New folder/rest-api-100.png' },
      { name: 'Responsive Design', level: 4.5, image: '../../../public/img/New folder/responsive-100.png' },
    ],
  },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const SkillsSection = ({ category, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center start'] });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: index % 2 === 0 ? '#ffea8e' : '#db9855',
        padding: '2rem',
      }}
    >
      <motion.div style={{ y, width: '100%' }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
          {category.title}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {category.skills.map((skill: any, i: number) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <Card
                sx={{
                  aspectRatio: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  borderRadius: 3,
                  textAlign: 'center',
                  boxShadow: 3,
                  bgcolor: '#ffffffee',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Avatar
                  src={skill.image}
                  alt={skill.name}
                  sx={{ width: 64, height: 64, mb: 1 }}
                  variant="rounded"
                />
                <Typography fontWeight="medium" fontSize="14px">
                  {skill.name}
                </Typography>
                <Rating value={skill.level} precision={0.5} readOnly size="medium" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="scroll-container"
      style={{
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      {skillData.map((cat, i) => (
        <SkillsSection key={i} category={cat} index={i} />
      ))}

      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          height: 5,
          bottom: 0,
          background: '#4ff0b7',
          transformOrigin: 'left',
          scaleX,
          zIndex: 99,
        }}
      />
    </div>
  );
};

export default Skills;
