'use client';
import { Typography, Grid, Card, CardContent, Chip, Button, Stack, Avatar, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Project, projects } from './Project';
import './MyProject.css'

const MyProject = () => {
  return (
    <Box
      component='section'
      style={{ padding: '1rem 2rem 4rem 2rem', height: '100vh', display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}
      sx={{
        backgroundColor: (theme) => (theme.palette as any).background.paper,
      }}
    >
      <Typography variant="h3" textAlign="center" fontWeight="bold" mb={4} sx={{
        color: (theme) => (theme.palette as any).text.primary
      }}>
        My Projects
      </Typography>

      <div className='scroll-container'
        style={{ flex: 1, overflowY: 'auto' }}>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project: Project, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    boxShadow: 4,
                    height: '100%',
                    minHeight: '300px',
                    bgcolor: (theme) => (theme.palette as any).custom.nav,

                  }}
                >
                  <Avatar
                    src={project.image}
                    alt={project.title}
                    sx={{ width: 70, height: 70, m: 1 }}
                    variant="rounded"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" mb={2}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                  <Stack direction="row" spacing={1} p={2}>
                    {project.githubLink && (
                      <Button
                        href={project.githubLink}
                        target="_blank"
                        size="small"
                        variant="outlined"
                        sx={{
                          bgcolor: (theme) => (theme.palette as any).background.paper,
                          color:(theme) => (theme.palette as any).background.contrastText
                        }}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        href={project.liveDemo}
                        target="_blank"
                        size="small"
                        variant="contained"
                        sx={{
                          bgcolor: (theme) => (theme.palette as any).background.paper,
                          color:(theme) => (theme.palette as any).background.contrastText
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Stack>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default MyProject;
