import { Alert, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const GradebookPage = () => {
  const { sectionId } = useParams<{ sectionId?: string }>();

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Not Defteri
      </Typography>
      <Alert severity="info">
        {sectionId
          ? `Section ${sectionId} için öğrenci not giriş ekranı Part 2’de gelecektir.`
          : 'Section seçimi ve not giriş arayüzü Part 2 kapsamında implement edilecek.'}
      </Alert>
    </Box>
  );
};

