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
import { School } from '@mui/icons-material';
import { ReactElement, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Customized responsive navbar from https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
 */
export default function Navbar(): ReactElement {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = (): void => setAnchorElNav(null);

  return (
    <AppBar position="static" style={{ background: '#194719' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <School />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
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
              <MenuItem component="a" href="progress">
                <Typography color="inherit" textAlign="center">
                  Progress
                </Typography>
              </MenuItem>
              <MenuItem component="a" href="credits">
                <Typography color="inherit" textAlign="center">
                  Credits
                </Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="https://chrome.google.com/webstore/category/extensions"
                target="_blank"
              >
                <Typography color="inherit" textAlign="center">
                  Download
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* MOBILE VIEW: Dropdown navbar menu */}

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <School />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            BroncoDirectMe
          </Typography>
          {/* MOBILE VIEW: Icon button and text element */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={2} paddingTop={1}>
              <Button color="inherit" href="./">
                Home
              </Button>
              <Button color="inherit" href="documentation">
                Documentation
              </Button>
              <Button color="inherit" href="progress">
                Progress
              </Button>
              <Button color="inherit" href="credits">
                Credits
              </Button>
              <Button
                color="inherit"
                href="https://chrome.google.com/webstore/category/extensions"
                target="_blank"
              >
                Download
              </Button>
            </Stack>
          </Box>
          {/* DESKTOP VIEW: Responsive navbar */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
