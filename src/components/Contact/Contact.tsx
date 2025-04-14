import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, TextField, Button, Typography, CircularProgress, Stack, FormControl, InputLabel } from '@mui/material';

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
        bgcolor: '#fdb720',
        p: 4,
        borderRadius: 3,
        maxWidth: '600px',
        mx: 'auto',
        boxShadow: 2,
        mt: 4
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
        Send Me a Message
      </Typography>

      <Stack spacing={4}>
        <TextField name="user_name" label="Name" fullWidth required />
        <TextField name="user_email" label="Email" type="email" fullWidth required />
        <TextField name="message" label="Message" multiline rows={4} fullWidth required />

        <Box textAlign="center">
          <Button
            variant="contained"
            type="submit"
            disabled={loading || sent}
            sx={{ px: 4, py: 1.5, borderRadius:3, textTransform: 'none', fontWeight: 'bold', bgcolor:'#f4dbc6', color:"#000"}}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : sent ? 'Sent ✅' : 'Send'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default Contact