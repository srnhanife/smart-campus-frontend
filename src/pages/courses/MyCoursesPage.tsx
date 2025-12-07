import { Alert, Box, Typography } from '@mui/material';

export const MyCoursesPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Derslerim
      </Typography>
      <Alert severity="info">
        Kayıtlı derslerin listesi, drop işlemleri ve attendance uyarıları Part 2’de burada uygulanacak.
      </Alert>
    </Box>
  );
};

