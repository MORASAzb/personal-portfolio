'use client';
import { motion, useScroll, useTransform, MotionValue, } from 'framer-motion';
import { Typography, Grid, Card, Rating, Avatar, Box, } from '@mui/material';
import { useRef } from 'react';
import './Skills.css'
import { Skill, SkillCategory, skillData } from './Skills'


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const SkillsSection = ({ category, index }: { category: SkillCategory; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center start'] });
  const y = useParallax(scrollYProgress, 100);

  return (
    <Box
      component='section'
      ref={ref}
      style={{
        height: '100vh',
        scrollSnapAlign: 'start',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      sx={{
        bgcolor: index % 2 === 0 ? (theme) => (theme.palette as any).background.paper : (theme) => (theme.palette as any).custom.accent
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ y, width: '100%' }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6} sx={{
          color: (theme) => (theme.palette as any).text.primary
        }}>
          {category.title}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {category.skills.map((skill: Skill, i: number) => (
            <Grid
              item
              key={i}
              sx={{
                '@media(min-width:300px) and (max-width:600px)': {
                  flexBasis: '80%',
                  maxWidth: '20%',
                },
                '@media(min-width:600px) and (max-width:900px)': {
                  flexBasis: '30%',
                  maxWidth: '20%',
                },
                '@media(min-width:900px) and (max-width:1800px)': {
                  flexBasis: '30%',
                  maxWidth: '10%',
                },
                '@media(min-width:1800px) and (max-width:2300px)': {
                  flexBasis: '15%',
                  maxWidth: '20%',
                },
                flexBasis: '20%',
                maxWidth: '20%',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
              >
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
                    bgcolor: index % 2 === 0 ? (theme) => (theme.palette as any).custom.accent : (theme) => (theme.palette as any).background.paper,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Avatar
                    src={skill.image}
                    alt={skill.name}
                    sx={{
                      width: 64,
                      height: 64,
                      mb: 1
                    }}
                    variant="rounded"
                  />
                  <Typography fontWeight="medium" fontSize="14px">
                    {skill.name}
                  </Typography>
                  <Rating value={skill.level} precision={0.5} readOnly size="medium" />
                </Card>
              </motion.div>
            </Grid>
          ))}

        </Grid>
      </motion.div>
    </Box>
  );
};

const MySkills = () => {
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


    </div>
  );
};

export default MySkills;
