import { Alert, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const GiveAttendancePage = () => {
  const { sessionId } = useParams<{ sessionId: string }>();

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Yoklama Ver
      </Typography>
      <Alert severity="info">
        GPS doğrulama ve QR kod alternatifleriyle yoklama giriş formu (session: {sessionId}) Part 2’de
        geliştirilecek.
      </Alert>
    </Box>
  );
};

