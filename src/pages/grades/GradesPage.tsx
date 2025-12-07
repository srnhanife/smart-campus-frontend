import { Alert, Box, Typography } from '@mui/material';

export const GradesPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Notlarım
      </Typography>
      <Alert severity="info">
        GPA/CGPA kartları, not tablosu ve transkript indirme aksiyonu Part 2’de burada yer alacak.
      </Alert>
    </Box>
  );
};

