import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box
      component='div'
      sx={{
        height: '100%',
        minHeight: 'calc(100vh - 64px - 100px)',
        bgcolor: '#FFE6C9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '7rem',
        '@media (max-width:500px)': {
          gap: '1.5rem',
          flexDirection: 'column-reverse'
        },
        '@media (min-width:501px) and (max-width:800px)': {
          gap: '2rem',
          flexDirection: 'column-reverse'
        }
      }}
    >
      <Box>
        <Typography variant='h2'
          sx={{
            marginBottom: '10px',
            '@media (min-width:501px) and (max-width:1000px)': {
              marginBottom: '5px',
              fontSize: '35px',
              fontWeight: 600,
            },
            '@media (min-width:1001px)': {
              fontSize: '50px',
              fontWeight: 600,
            }
          }}>
          Hey!! I'am morasa
        </Typography>
        <Typography variant='h4'
          sx={{
            '@media (min-width:501px) and (max-width:1000px)': {
              marginBottom: '10px',
              fontSize: '20px',
              fontWeight: 500,
            },
            '@media (min-width:1001px)': {
              fontSize: '35px',
              fontWeight: 500,
            },
          }}>
          FRONT-END Developer
        </Typography>
        <Typography sx={{
          fontWeight: 'bold',
          '@media (min-width:501px) and (max-width:1000px)': {
            fontWeight: 200,
            paddingLeft: '15px'
          },
          '@media (max-width:500px)': {
            paddingInline: '15px'
          }
        }}>
          Here you can see my projects, skills, and ways to contact me.
        </Typography>
      </Box>
      <Box
        component="img"
        src="../../../public/img/photo_2024-04-05_19-30-19.jpg"
        sx={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          objectFit: 'cover',
          '@media (max-width:500px)': {
            width: 200,
            height: 200,
            marginTop: '10px'
          },
          '@media (min-width:501px) and (max-width:1000px)': {
            width: 300,
            height: 300,
            marginTop: '10px'
          },
          '@media (min-width:1001px)': {
            width: 500,
            height: 500,
            marginBlock: '10px'
          }
        }}
      />
    </Box >
  )
}

export default Home