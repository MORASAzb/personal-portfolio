'use client';

import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveDemo?: string;
}


const projects: Project[] = [
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API.',
    image: '/projects/weather-app.png',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubLink: 'https://github.com/user/weather-app',
    liveDemo: 'https://weather-app-demo.netlify.app',
  },
  // می‌تونی پروژه‌های بیشتری اضافه کنی
];

const Projects = () => {
  return (
    <section style={{ padding: '4rem 2rem', background: '#efc0c0',height:'100vh' }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: 4,
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
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
    </section>
  );
};

export default Projects;
