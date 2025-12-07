import { Alert, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Ders Detayı
      </Typography>
      <Alert severity="info">
        Kurs ID: <strong>{id}</strong> için detay görünümü Part 2 geliştirmesinde burada olacak.
      </Alert>
    </Box>
  );
};

