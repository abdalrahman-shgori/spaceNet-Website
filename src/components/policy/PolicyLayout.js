import React from 'react';
import { Box, Container, Paper, Typography, Alert, Skeleton, Divider } from '@mui/material';

const PolicyLayout = ({ title, loading, error, contentHtml, updatedAt }) => {
  return (
    <Box sx={{ minHeight: '100vh', py: { xs: 4, sm: 6, md: 8 } }}>
      <Container maxWidth="md" sx={{px:"20px"}}>
        <Typography sx={{ fontSize: { xs: '28px', sm: '32px' }, fontFamily: 'var(--English-font)', fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>
        {/* {!!updatedAt && (
          <Typography sx={{ color: 'text.secondary', fontSize: '12px', mb: 2, fontFamily: 'var(--English-font)' }}>
            Last updated: {updatedAt}
          </Typography>
        )} */}
        <Paper elevation={1} sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 2 ,transition:"all 0.4s"}}>
          {loading && (
            <Box>
              <Skeleton variant="text" height={36} sx={{ mb: 1 }} />
              <Skeleton variant="text" height={24} />
              <Divider sx={{ my: 2 }} />
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} variant="text" height={18} sx={{ mb: 1 }} />
              ))}
            </Box>
          )}

          {!!error && !loading && (
            <Alert severity="error">{error}</Alert>
          )}

          {!loading && !error && (
            <Typography
              sx={{
                whiteSpace: 'pre-line',
                fontSize: { xs: '15px', sm: '16px' },
                lineHeight: 1.8,
                fontFamily: 'var(--English-font)'
              }}
              dangerouslySetInnerHTML={{ __html: contentHtml || '' }}
            />
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default PolicyLayout; 