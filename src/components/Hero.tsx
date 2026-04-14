// Hero.tsx
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import { portfolio } from '../data/portfolio';
import DownloadPdfButton from './DownloadPdfButton';

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        background: (t) =>
          t.palette.mode === 'dark'
            ? `radial-gradient(900px 500px at 15% -10%, rgba(124,92,255,0.25), transparent 60%),
               radial-gradient(800px 400px at 90% -5%, rgba(14,165,233,0.22), transparent 55%)`
            : undefined,
      }}
    >
      <Container>
        <Stack spacing={{ xs: 4, sm: 5, md: 6 }} alignItems="center" textAlign="center">
          <Avatar
            src="/profile.png"
            alt={portfolio.name}
            sx={{ width: 96, height: 96, boxShadow: 3 }}
          />
          <Stack spacing={2}>
            <Typography
              variant="h1"
              sx={{ fontWeight: 800 }}
            >
              Hi, I’m {portfolio.name}.
            </Typography>

            {/* Highlighted Statement */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                lineHeight: 1.6,
                maxWidth: 800,
                mx: 'auto',
                color: 'text.primary',
              }}
            >
              I am a cross-platform apps developer for <br />
              Browser • Desktop • Mobile. <br />
              Beyond development, I have extensive experience in contributing to
              diverse projects and excel at debugging and fixing issues efficiently.
            </Typography>

            {/* Download Resume button */}
            <DownloadPdfButton containerId="portfolio-root" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
