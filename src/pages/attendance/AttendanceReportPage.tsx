import { Alert, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const AttendanceReportPage = () => {
  const { sectionId } = useParams<{ sectionId?: string }>();

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Yoklama Raporu
      </Typography>
      <Alert severity="info">
        {sectionId
          ? `Section ${sectionId} için yoklama istatistikleri bu ekranda sunulacak.`
          : 'Section seçimi ve rapor filtreleri Part 2’de uygulanacak.'}
      </Alert>
    </Box>
  );
};

