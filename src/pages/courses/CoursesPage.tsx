import { Alert, Box, Typography } from '@mui/material';

export const CoursesPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Kurs Kataloğu
      </Typography>
      <Alert severity="info">
        Part 2 kapsamında ders listesi, arama ve filtreleme bileşenleri burada yer alacak.
      </Alert>
    </Box>
  );
};

