import { type ReactElement } from 'react';
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

export default function Footer(): ReactElement {
  return (
    <footer>
      <Stack
        width={{ xs: '100%', md: 'auto' }}
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4, lg: 6 }}
        divider={
          <>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderRightWidth: 3,
                borderColor: 'black',
                display: { sm: 'none', md: 'block' },
              }}
            />
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              flexItem
              sx={{
                borderBottomWidth: 3,
                borderColor: 'black',
                display: { sm: 'block', md: 'none' },
              }}
            />
          </>
          // Two different divider elements to account for the change in footer orientation from horizontal to vertical
        }
      >
        <Link variant="h6" color="black" underline="none" href="./">
          Home
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          variant="h6"
          color="black"
          underline="none"
          href="https://chrome.google.com/webstore/detail/broncodirectme/kcbdmdlehcmkgknmmfjjiaclhpplibda"
        >
          Download
        </Link>
        <Link variant="h6" color="black" underline="none" href="documentation">
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
            system. BroncoDirectMe is a 100% student run open source project. We
            do not warrant the information provided on this website for accuracy
            or relevancy. For clarification on the information provided, please
            utilize official CPP resources and datasources.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </footer>
  );
}
