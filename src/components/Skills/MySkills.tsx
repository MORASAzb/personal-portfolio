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
              xs={category.title.trim() === 'Libraries' ? 4 : 6 }      
              sm={category.title.trim() === 'Libraries' ? 2 : 2}      
              md={category.title.trim() === 'Libraries' ? 2  :3}      
              lg={2}      
              xl={2}
              sx={{
                '@media(min-width:1800px)': {
                  flexBasis: '15%',
                  maxWidth: '15%',
                },
              }}
            >

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                
                <Card
                  sx={{
                    aspectRatio: { xs: category.title.trim() === 'Libraries' ?'1': '4/3', sm: '1/1' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: 2, sm: 3 },
                    textAlign: 'center',
                    boxShadow: 3,
                    bgcolor: index % 2 === 0
                      ? (theme) => (theme.palette as any).custom.accent
                      : (theme) => (theme.palette as any).background.paper,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Avatar
                    src={skill.image}
                    alt={skill.name}
                    variant="rounded"
                    sx={{
                      width: { xs:   36, sm: 48, md: 64 },
                      height: { xs: 36, sm: 48, md: 64 },
                      mb: 1.2,
                    }}
                  />
                  <Typography
                    fontWeight="medium"
                    fontSize={{ xs: '12px', sm: '13px', md: '14px' }}
                    mb={0.5}
                  >
                    {skill.name}
                  </Typography>
                  <Rating
                    value={skill.level}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }
                    }}
                  />
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
