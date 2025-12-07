import { Alert, Box, Typography } from '@mui/material';

export const StartAttendancePage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Yoklama Başlat
      </Typography>
      <Alert severity="info">
        Section seçimi, geofence ayarı ve QR kod oluşturma akışı Part 2’de bu ekranda uygulanacak.
      </Alert>
    </Box>
  );
};

