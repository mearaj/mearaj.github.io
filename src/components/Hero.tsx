import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import DownloadPdfButton from './DownloadPdfButton';
import FadeIn from './motion/FadeIn';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        background: (t) =>
          t.palette.mode === 'dark'
            ? `radial-gradient(900px 500px at 15% -10%, rgba(124,92,255,0.3), transparent 60%),
               radial-gradient(800px 400px at 90% -5%, rgba(14,165,233,0.25), transparent 55%)`
            : undefined,
      }}
    >
      {!reduceMotion && (
        <Box
          component={motion.div}
          aria-hidden
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,92,255,0.35) 0%, transparent 70%)',
            filter: 'blur(2px)',
            pointerEvents: 'none',
          }}
        />
      )}

      <Container>
        <FadeIn>
          <motion.div
            variants={reduceMotion ? undefined : stagger}
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? false : 'visible'}
            style={{ width: '100%' }}
          >
            <Stack spacing={{ xs: 4, sm: 5, md: 6 }} alignItems="center" textAlign="center">
              <motion.div variants={reduceMotion ? undefined : item}>
                <Avatar
                  src="/profile.png"
                  alt={portfolio.name}
                  className="hero-avatar"
                  sx={{
                    width: { xs: 88, md: 112 },
                    height: { xs: 88, md: 112 },
                    boxShadow: '0 0 0 3px rgba(124,92,255,0.35), 0 12px 40px rgba(0,0,0,0.45)',
                  }}
                />
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : item} style={{ width: '100%' }}>
                <Stack spacing={2} alignItems="center">
                  <Typography variant="h1" sx={{ fontWeight: 800 }}>
                    Hi, I’m{' '}
                    <Box component="span" className="gradient-text" sx={{ display: 'inline-block' }}>
                      {portfolio.name}
                    </Box>
                    .
                  </Typography>

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

                  <DownloadPdfButton containerId="portfolio-root" />
                </Stack>
              </motion.div>
            </Stack>
          </motion.div>
        </FadeIn>
      </Container>
    </Box>
  );
}
