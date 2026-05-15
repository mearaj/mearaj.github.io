import {Box, Container, CssBaseline, Grid, type SxProps, type Theme, ThemeProvider, Typography} from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SocialLinkSection from './components/SocialLinkSection';
import ScrollReveal from './components/motion/ScrollReveal';
import { socialLinks } from './data/socialLinks';
import topcoderCertificate from './assets/topcoderCertificate.png';
import profileMearaj from './assets/profileMearaj.png';
import theme from "./theme.ts";

const imageSx = {
  width: '100%',
  maxWidth: 900,
  mx: 'auto',
  display: 'block',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
} as const;

export default function App() {
  const spacingStyle: SxProps<Theme> = {mb: {xs: 4, md: 8}};
  const scrollTopStyle: SxProps<Theme> = {mb: {xs: 4, md: 8}, scrollMarginTop: 96};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box className="bg-grid bg-noise" sx={{ minHeight: '100svh', overflowX: 'clip', width: '100%' }}>
        <Navbar/>
        <Box sx={{height: {xs: 56, sm: 64, md: 72}}}/>

        <Box sx={{ minHeight: '100svh', overflowX: 'clip', width: '100%' }}>
          <div id="portfolio-root">
            <Container sx={{py: {xs: 3, md: 5}}}>
              <Box component="section" sx={spacingStyle}>
                <Hero/>
              </Box>
              <Box component="section" sx={spacingStyle}>
                <About/>
              </Box>

              <Box
                component="section"
                id="current-status"
                sx={{mb: {xs: 8, md: 12}, scrollMarginTop: 96}}
              >
                <ScrollReveal direction="up">
                  <Typography variant="h3" fontWeight={800} gutterBottom>
                    Current Status
                  </Typography>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.1}>
                  <Typography color="text.secondary" sx={{mb: 2}}>
                    Working at
                  </Typography>
                </ScrollReveal>

                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5}}>
                  <ScrollReveal direction="left" delay={0.15}>
                    <Box
                      component="a"
                      href="https://github.com/mearaj/x-routine-automation"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                      sx={{ textDecoration: 'none', wordBreak: 'break-all', overflowWrap: 'anywhere', color: 'inherit', maxWidth: '100%' }}
                    >
                      https://github.com/mearaj/x-routine-automation
                    </Box>
                  </ScrollReveal>
                  <ScrollReveal direction="right" delay={0.2}>
                    <Box
                      component="a"
                      href="https://github.com/mearaj/mearaj.github.io"
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                      sx={{ textDecoration: 'none', wordBreak: 'break-all', overflowWrap: 'anywhere', color: 'inherit', maxWidth: '100%' }}
                    >
                      https://github.com/mearaj/mearaj.github.io
                    </Box>
                  </ScrollReveal>
                </Box>
              </Box>

              <Box component="section" id="topcoder-cert" sx={scrollTopStyle}>
                <ScrollReveal direction="up">
                  <Typography variant="h3" textAlign="center" fontWeight={800} gutterBottom>
                    Topcoder Certificate
                  </Typography>
                </ScrollReveal>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: {xs: 2, sm: 3}}}>
                  <ScrollReveal direction="left" duration={0.8}>
                    <Box
                      component="img"
                      src={topcoderCertificate}
                      alt="Topcoder Certificate"
                      loading="lazy"
                      decoding="async"
                      className="polish-image"
                      sx={imageSx}
                    />
                  </ScrollReveal>
                  <ScrollReveal direction="right" duration={0.8}>
                    <Box
                      component="img"
                      src={profileMearaj}
                      alt="Mearaj profile"
                      loading="lazy"
                      decoding="async"
                      className="polish-image"
                      sx={imageSx}
                    />
                  </ScrollReveal>
                </Box>
              </Box>

              <Box component="section" sx={spacingStyle}>
                <Skills/>
              </Box>

              <Box
                component="section"
                id="mygithub"
                sx={{mb: {xs: 8, md: 12}, display: 'flex', flexDirection: 'column', gap: 2}}
              >
                <Box component="section" id="links" sx={scrollTopStyle}>
                  <ScrollReveal direction="up">
                    <Typography variant="h3" fontWeight={800} gutterBottom>
                      Links
                    </Typography>
                  </ScrollReveal>
                  <Grid container rowSpacing={{ xs: 3, md: 8 }} columnSpacing={{ xs: 3, md: 4 }} sx={{ width: '100%', mx: 0 }}>
                    {socialLinks.map((item, index) => (
                      <Grid key={item.id} size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
                        <SocialLinkSection item={item} index={index} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Container>
          </div>
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
