import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, TextField, Button, Typography, CircularProgress, Stack, } from '@mui/material';

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_x548037',
        'template_wd56xiy',
        form.current!,
        'gxKxqWttE6c02pFjd'
      )
      .then(
        () => {
          setSent(true);
          form.current?.reset();
          setLoading(false);
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        bgcolor: '#FFE6C9',
        p: 4,
        borderRadius: 3,
        // maxWidth: '600px',
        width:'100%',
        height:'100vh',
        mx: 'auto',
        boxShadow: 3,
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
        flexDirection:'column',
       
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center" color='#6c6c6c' mb={5}>
        Send Me a Message
      </Typography>

      <Stack spacing={6} width="100%" maxWidth="650px" alignItems="center" >
        <TextField name="user_name" label="Name" fullWidth required  sx={{maxWidth:'600px',}}/>
        <TextField name="user_email" label="Email" type="email" fullWidth required   sx={{maxWidth:'600px'}}/>
        <TextField name="message" label="Message" multiline rows={4} fullWidth required   sx={{maxWidth:'600px'}}/>

        <Box textAlign="center">
          <Button
            variant="contained"
            type="submit"
            disabled={loading || sent}
            sx={{ px: 6, py: 3, borderRadius:3, textTransform: 'none', fontWeight: 'bold', bgcolor:'#FFA09B', color:"#000", }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : sent ? 'Sent ✅' : 'Send'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default Contact