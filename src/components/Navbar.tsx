import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './motion/FadeIn';

const TOP_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
];

const LINK_SUBMENU = [
  { href: '#topcoder', label: 'Topcoder' },
  { href: '#github', label: 'GitHub' },
  { href: '#facebook', label: 'Facebook' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#x', label: 'X (Twitter)' },
  { href: '#linkedin', label: 'LinkedIn' },
  { href: '#gitlab', label: 'GitLab' },
  { href: '#discord', label: 'Discord' },
  { href: '#stackoverflow', label: 'Stack Overflow' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <FadeIn duration={0.6}>
      <AppBar
        position="fixed"
        elevation={0}
        color="inherit"
        sx={{
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(124,92,255,0.25)' : 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          backgroundColor: scrolled ? 'rgba(11,16,33,0.92)' : 'rgba(11,16,33,0.72)',
          transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between', gap: 1 }}>
            <Typography
              variant="h6"
              fontWeight={800}
              component="a"
              href="#home"
              className="gradient-text"
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              mearaj
            </Typography>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {TOP_LINKS.map((l) => (
                <Button key={l.href} href={l.href} className="nav-link">
                  {l.label}
                </Button>
              ))}
              <Button onClick={(e) => setAnchorEl(e.currentTarget)} className="nav-link">
                Links
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                {LINK_SUBMENU.map((s) => (
                  <MenuItem key={s.href} component="a" href={s.href} onClick={() => setAnchorEl(null)}>
                    {s.label}
                  </MenuItem>
                ))}
              </Menu>
              <Button href="#links" className="nav-link">
                Contact
              </Button>
            </Stack>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              aria-label="Open Menu"
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List sx={{ width: 260 }}>
                <ListItem>
                  <Typography variant="h6" fontWeight={800}>
                    Menu
                  </Typography>
                </ListItem>
                <Divider />
                {TOP_LINKS.map((l) => (
                  <ListItem key={l.href} disablePadding>
                    <ListItemButton component="a" href={l.href} onClick={() => setOpen(false)}>
                      <ListItemText primary={l.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider />
                <ListItem>
                  <Typography variant="subtitle2">Links</Typography>
                </ListItem>
                {LINK_SUBMENU.map((s) => (
                  <ListItem key={s.href} disablePadding>
                    <ListItemButton component="a" href={s.href} onClick={() => setOpen(false)} sx={{ pl: 3 }}>
                      <ListItemText primary={s.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#links" onClick={() => setOpen(false)}>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </Container>

        {!reduceMotion && (
          <Box
            component={motion.div}
            style={{ scaleX: progressScale }}
            sx={{
              height: 2,
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, #7c5cff, #00e5ff)',
            }}
          />
        )}
      </AppBar>
    </FadeIn>
  );
}
