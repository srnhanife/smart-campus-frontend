import { Alert, Box, Typography } from '@mui/material';

export const ExcuseRequestsPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Mazeret Talepleri
      </Typography>
      <Alert severity="info">
        Öğrenci mazeret formu ve akademisyen onay/red işlemleri Part 2’de bu sayfada yer alacak.
      </Alert>
    </Box>
  );
};

