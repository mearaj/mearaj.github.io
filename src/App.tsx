import {Box, Container, CssBaseline, type SxProps, type Theme, ThemeProvider, Typography} from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import topcoderCertificate from './assets/topcoderCertificate.png';
import profileMearaj from './assets/profileMearaj.png';
import theme from "./theme.ts";


export default function App() {

  const spacingStyle: SxProps<Theme> = {mb: {xs: 4, md: 8}};
  const scrollTopStyle: SxProps<Theme> = {mb: {xs: 4, md: 8}, scrollMarginTop: 96};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Box sx={{height: {xs: 56, sm: 64, md: 72}}}/>

      <Box sx={{minHeight: '100svh'}}>
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
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Current Status
              </Typography>

              <Typography color="text.secondary" sx={{mb: 2}}>
                Working at
              </Typography>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                <Box
                  component="a"
                  href="https://github.com/mearaj/x-routine-automation"
                  target="_blank"
                  rel="noreferrer"
                  sx={{textDecoration: 'underline', wordBreak: 'break-all'}}
                >
                  https://github.com/mearaj/x-routine-automation
                </Box>
                <Box
                  component="a"
                  href="https://github.com/mearaj/mearaj.github.io"
                  target="_blank"
                  rel="noreferrer"
                  sx={{textDecoration: 'underline', wordBreak: 'break-all'}}
                >
                  https://github.com/mearaj/mearaj.github.io
                </Box>
              </Box>
            </Box>
            <Box component="section" id="topcoder-cert" sx={scrollTopStyle}>
              <Typography variant="h3" textAlign="center" fontWeight={800} gutterBottom>Topcoder
                Certificate</Typography>
              <Box sx={{display: 'flex', flexDirection: 'column', gap: {xs: 2, sm: 3}}}>
                <Box
                  component="img"
                  src={topcoderCertificate}
                  alt="Topcoder Certificate"
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: '100%',
                    maxWidth: 900,
                    mx: 'auto',
                    display: 'block',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />

                <Box
                  component="img"
                  src={profileMearaj}
                  alt="Mearaj profile"
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: '100%',
                    maxWidth: 900,
                    height: 'auto',
                    mx: 'auto',
                    display: 'block',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />
              </Box>
            </Box>

            <Box component="section" sx={spacingStyle}>
              <Skills/>
            </Box>
            <Box
              component="section"
              id="mygithub"
              sx={{
                mb: {xs: 8, md: 12},
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >

              <Box component="section" id="links" sx={scrollTopStyle}>
                <Typography variant="h3" fontWeight={800} gutterBottom>
                  Links
                </Typography>
                <Box id="topcoder" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>Topcoder</Typography>
                  <Box component="a" href="https://profiles.topcoder.com/mearaj" target="_blank"
                       rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://profiles.topcoder.com/mearaj
                  </Box>
                </Box>

                <Box id="github" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>GitHub</Typography>
                  <Box component="a" href="https://github.com/mearaj" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://github.com/mearaj
                  </Box>
                </Box>

                <Box id="facebook" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>Facebook</Typography>
                  <Box component="a" href="https://www.facebook.com/mearajbhagad/" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://www.facebook.com/mearajbhagad/
                  </Box>
                </Box>

                <Box id="instagram" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>Instagram</Typography>
                  <Box component="a" href="https://www.instagram.com/bmearaj/" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://www.instagram.com/bmearaj/
                  </Box>
                </Box>

                <Box id="x" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>X (Twitter)</Typography>
                  <Box component="a" href="https://x.com/mearajbhagad" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://x.com/mearajbhagad
                  </Box>
                </Box>

                <Box id="linkedin" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>LinkedIn</Typography>
                  <Box component="a" href="https://www.linkedin.com/in/mearajbhagad/" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://www.linkedin.com/in/mearajbhagad/
                  </Box>
                </Box>

                <Box id="gitlab" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>GitLab</Typography>
                  <Box component="a" href="https://gitlab.com/mearajbhagad" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://gitlab.com/mearajbhagad
                  </Box>
                </Box>

                <Box id="discord" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>Discord</Typography>
                  <Box component="a" href="https://discord.com/users/mearaj" target="_blank" rel="noreferrer"
                       sx={{textDecoration: 'underline', wordBreak: 'break-all'}}>
                    https://discord.com/users/mearaj
                  </Box>
                </Box>

                <Box id="stackoverflow" component="section" sx={scrollTopStyle}>
                  <Typography variant="h3" fontWeight={800} gutterBottom>Stack Overflow</Typography>
                  <Box
                    component="a"
                    href="https://stackoverflow.com/users/2875070/mearaj?tab=profile"
                    target="_blank"
                    rel="noreferrer"
                    sx={{textDecoration: 'underline', wordBreak: 'break-all'}}
                  >
                    https://stackoverflow.com/users/2875070/mearaj?tab=profile
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </div>
      </Box>
      <Footer/>
    </ThemeProvider>
  );
}

