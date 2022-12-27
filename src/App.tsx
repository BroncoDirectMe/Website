import React, { ReactElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Progress from './components/Progress';
import Credits from './components/Credits';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App(): ReactElement {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <footer>
        <Stack
          direction="row"
          spacing={6}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderRightWidth: 3, borderColor: 'black' }}
            />
          }
        >
          <Link variant="h6" color="black" underline="none" href="/">
            Home
          </Link>
          <Link variant="h6" color="black" underline="none" href="progress">
            Progress
          </Link>
          {/* Add download link here later */}
          <Link variant="h6" color="black" underline="none" href="/">
            Download
          </Link>
          <Link
            variant="h6"
            color="black"
            underline="none"
            href="documentation"
          >
            Docs
          </Link>
          <Link variant="h6" color="black" underline="none" href="credits">
            Credits
          </Link>
        </Stack>

        <Accordion
          sx={{
            backgroundColor: '#8f8c8c',
            color: 'white',
            border: '3px solid gray',
          }}
          className="disclaimer"
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: 'white', fontSize: '2rem' }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: '1.5em' }}>Disclaimer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              BroncoDirectMe is not created by, managed by, endorsed by, or
              affiliated with Cal Poly Pomona or the California State University
              system. BroncoDirectMe is a 100% student run open source project.
              We do not warrant the information provided on this website for
              accuracy or relevancy. For clarification on the information
              provided, please utilize official CPP resources and datasources.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </footer>
    </div>
  );
}

export default App;
