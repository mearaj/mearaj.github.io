import {useState} from 'react';
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
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TOP_LINKS = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#skills', label: 'Skills'},
];

const LINK_SUBMENU = [
  {href: '#topcoder', label: 'Topcoder'},
  {href: '#mygithub', label: 'GitHub'},
  {href: '#facebook', label: 'Facebook'},
  {href: '#instagram', label: 'Instagram'},
  {href: '#x', label: 'X (Twitter)'},
  {href: '#linkedin', label: 'LinkedIn'},
  {href: '#gitlab', label: 'GitLab'},
  {href: '#discord', label: 'Discord'},
  {href: '#stackoverflow', label: 'Stack Overflow'},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="fixed" elevation={0} color="inherit"
            sx={{borderBottom: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)'}}>
      <Container>
        <Toolbar sx={{justifyContent: 'space-between', gap: 1}}>
          <Typography variant="h6" fontWeight={800}>mearaj</Typography>

          <Stack direction="row" spacing={1} sx={{display: {xs: 'none', md: 'flex'}}}>
            {TOP_LINKS.map((l) => (
              <Button key={l.href} href={l.href}>{l.label}</Button>
            ))}
            <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Links</Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              {LINK_SUBMENU.map((s) => (
                <MenuItem key={s.href} component="a" href={s.href} onClick={() => setAnchorEl(null)}>
                  {s.label}
                </MenuItem>
              ))}
            </Menu>
            <Button href="#contact">Contact</Button>
          </Stack>

          <IconButton onClick={() => setOpen(true)} sx={{display: {xs: 'inline-flex', md: 'none'}}} aria-label="Open Menu">
            <MenuIcon/>
          </IconButton>

          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <List sx={{width: 260}}>
              <ListItem>
                <Typography variant="h6" fontWeight={800}>Menu</Typography>
              </ListItem>
              <Divider/>
              {TOP_LINKS.map((l) => (
                <ListItem key={l.href} disablePadding>
                  <ListItemButton component="a" href={l.href} onClick={() => setOpen(false)}>
                    <ListItemText primary={l.label}/>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider/>
              <ListItem>
                <Typography variant="subtitle2">Links</Typography>
              </ListItem>
              {LINK_SUBMENU.map((s) => (
                <ListItem key={s.href} disablePadding>
                  <ListItemButton component="a" href={s.href} onClick={() => setOpen(false)} sx={{pl: 3}}>
                    <ListItemText primary={s.label}/>
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider/>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#contact" onClick={() => setOpen(false)}>
                  <ListItemText primary="Contact"/>
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
