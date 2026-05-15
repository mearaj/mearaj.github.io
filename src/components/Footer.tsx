import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        zIndex: 1,
        py: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'linear-gradient(180deg, transparent, rgba(124, 92, 255, 0.08))',
      }}
    >
      <Container>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: 'text.secondary', opacity: 1 }}
        >
          © {new Date().getFullYear()} mearaj • Built with React & MUI
        </Typography>
      </Container>
    </Box>
  );
}
