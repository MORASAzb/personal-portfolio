import { Box, Container, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#FFA09B',
        color: '#4f4c4c',
        py: '15px',
        mt: 'auto',
        borderTop: '2px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

        {/* About */}
        <Box sx={{ fontSize: { sm: '10px' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" gutterBottom
            sx={{
              '@media (max-width:500px)': {
                fontSize: '14px !important',
                fontWeight: 'bold'
              }
            }}>About Me</Typography>
          <Typography variant="body2"
            sx={{
              '@media (max-width:500px)': {
                fontSize: '10px !important',
              }
            }}>
            I'm a frontend developer passionate about building elegant and functional web experiences.
          </Typography>
        </Box>

        {/* Contact & Social */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" gutterBottom
            sx={{
              '@media (max-width:500px)': {
                fontSize: '14px !important',
                fontWeight: 'bold'
              }
            }}>Contact</Typography>
          <Box sx={{ display: 'flex' }}>
            <IconButton href="https://github.com/MORASAzb" target="_blank" color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://linkedin.com/in/morasa-zadbaghersighalani" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
            {/* //آیدی مشکل داره */}
            <IconButton href="https://t.me/Morasa_zadbaghersighalni" target="_blank" color="inherit">
              <TelegramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Box sx={{
        mt: 1.5
        , textAlign: 'center'
      }}>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Morasa. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer