import { Alert, Box, Typography } from '@mui/material';

export const MyAttendancePage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Yoklama Durumum
      </Typography>
      <Alert severity="info">
        Ders bazlı yoklama yüzdeleri, uyarı durumları ve mazeret talep aksiyonu Part 2’de eklenecek.
      </Alert>
    </Box>
  );
};

