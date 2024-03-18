import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  Menu,
  Container,
  MenuItem,
} from '@mui/material';
import { Launch, School } from '@mui/icons-material';
import { type ReactElement, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

/**
 * Customized responsive navbar from https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
 */
export default function Navbar(): ReactElement {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = (): void => { setAnchorElNav(null); };

  return (
    <AppBar position="static" style={{ background: '#194719' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="#main" className="skip-link">Skip to main content</a>
          <School sx={({ display: { xs: 'none', md: 'flex' } })} />
          <Typography
            variant="h5"
            component="div"
            paddingLeft={1.5}
            paddingRight={5}
            paddingTop={0.5}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            BroncoDirectMe
          </Typography>
          {/* DESKTOP VIEW: Icon and Text element */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem component="a" href="./">
                <Typography color="inherit" textAlign="center">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem component="a" href="documentation">
                <Typography color="inherit" textAlign="center">
                  Documentation
                </Typography>
              </MenuItem>
              <MenuItem component="a" href="credits">
                <Typography color="inherit" textAlign="center">
                  Credits
                </Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="https://chrome.google.com/webstore/detail/broncodirectme/kcbdmdlehcmkgknmmfjjiaclhpplibda"
                target="_blank"
                rel="noopener"
              >
                <Typography color="inherit" textAlign="center" paddingRight={0.5}>
                  Download
                </Typography>
                <Launch />
              </MenuItem>
            </Menu>
          </Box>
          {/* MOBILE VIEW: Dropdown navbar menu */}

          <School sx={{ display: { xs: 'flex', md: 'none' } }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            paddingLeft={1.5}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            BroncoDirectMe
          </Typography>
          {/* DESKTOP VIEW: Icon button and text element */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={2} paddingTop={1}>
              <Button color="inherit" href="./">
                Home
              </Button>
              <Button color="inherit" href="documentation">
                Documentation
              </Button>
              <Button color="inherit" href="credits">
                Credits
              </Button>
              <Button
                color="inherit"
                href="https://chrome.google.com/webstore/detail/broncodirectme/kcbdmdlehcmkgknmmfjjiaclhpplibda"
                target="_blank"
                rel="noopener"
                endIcon={<Launch />}
              >
                Download
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
