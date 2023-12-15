import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyConent='center' alignItems='center' height='80vh' marginLeft='400px' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;