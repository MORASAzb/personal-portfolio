import { Box, Button, Stack, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  return (
    <Box
      component='div'
      sx={{
        height: '100%',
        width: '100%',
        minHeight: 'calc(100vh - 64px - 100px)',
        bgcolor: (theme) => (theme.palette as any).custom.nav,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '3rem',
        '@media (max-width:800px)': {
          gap: 0,
          flexDirection: 'column',
        },
        '@media (min-width:801px) and (max-width:1300px)': {
          flexDirection: 'column',
          gap:'1rem'
        },
      }}
    >
      <Box
        component='img'
        src="../../../img/anime.png"
        sx={{
          width: 800,
          height: 800,
          borderRadius: '30%',
          margin: '40px',
          '@media (max-width:800px)': {
            width: 250,
            height: 250,
            borderRadius: '50%',
            marginInline: '0'
          },
          '@media (min-width:801px) and (max-width:1300px)': {
            width: 300,
            height: 300,
            marginBlock: '10px',
          }
        }}
      />
      <Box
        sx={{
          backgroundColor: (theme) => (theme.palette as any).background.paper,
          color: 'text.primary',
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 8 },
          maxWidth: '50%',
          mx: 'auto',
          borderRadius: 4,
          boxShadow: 2,
          textAlign: 'justify',
          lineHeight: 1.8,
          height: 'auto',
          '@media (max-width:380px)':{
            marginBottom:2,
            height:'80vh',
            overflowY: 'auto',
            maxWidth:"90vw"
          },
          '@media (min-width:381px) and (max-width:800px)': {
            height: '70vh',
            overflowY: 'auto',
            maxWidth:"90vw",
            marginBottom: '10px',
          },
          '@media (min-width:801px) and (max-width:1300px)': {
            marginBlock: '5px',
            overflowY: 'auto',
            maxHeight: '60vh',
            maxWidth:"90vw",
          },
          '@media (min-width:1350px)': {
            marginLeft: '20px',
          }
        }}
      >
        <Stack spacing={2}>

          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom 
          sx={{
            color:(theme) => (theme.palette as any).text.primary,
          }}>
            My Learning Journey
          </Typography>

          <Typography variant="body1">
            My learning journey began with a deep passion for astronomy. However, considering the limited career opportunities for
            women in this field in Iran, I decided to pursue a profession that could offer both creativity and intellectual
            depth—while still aligning with my interests.
          </Typography>
          <Typography variant="body1">
            As I explored various options, I became increasingly drawn to the world of technology and software development.
            I began studying programming languages and quickly discovered the power and flexibility of JavaScript. I was fascinated by the fact that JavaScript could be
            used across multiple domains—from web development to back-end services, desktop applications, and even AI;
            by simply learning the right frameworks for each.
          </Typography>
          <Typography variant="body1">
            This led me to specialize in front-end development. I started building projects using React and Angular,
            which helped me understand both component-based architecture and scalable UI development.
            One of my most impactful experiences was working on a national tax system platform, where I used Angular to develop and enhance various features.
          </Typography>
          <Typography variant="body1">
            Today, I continue to deepen my expertise in front-end technologies and enjoy transforming complex ideas into user-friendly web interfaces.
            I’m always excited to learn, build, and contribute to meaningful digital experiences.
          </Typography>

          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              href="/morasa-Resume.pdf"
              download
              startIcon={<DownloadIcon />}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                bgcolor:(theme) => (theme.palette as any).primary.main,
                color:'#ffffff',
                '@media (max-width:600px)': {
                  borderRadius: '10px',
                  fontSize: '12px',
                },
              }}
            >
              Download My Resume
            </Button>
            
          </Box>
        </Stack>
      </Box>

    </Box>
  )
}

export default About