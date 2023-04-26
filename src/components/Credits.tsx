import React, { ReactElement } from 'react';
import JaronImage from './images/jaroon.jpg';
import AlexanderImage from './images/alexander.jpg';
import AliImage from './images/ali.jpg';
import AlanImage from './images/alan.png';
import LinaImage from './images/lina.jpg';
import JonahImage from './images/jonah.jpg';
import MatthewImage from './images/leaversa.gif';
import MarcImage from './images/marccruz.jpg';
import BobImage from './images/misslame.png';
import ProductBobImage from './images/productbob.jpg';
import SamanyuImage from './images/samanyu.png';
import TimothyImage from './images/t1mato.jpg';
import MatthewPImage from './images/matthewp.jpg';
import ValImage from './images/valen.jpg';
import LucianoImage from './images/luciano.png';
import DevinImage from './images/devin.jpg';
import ElenaImage from './images/elena.png';
import PatrickImage from './images/patrick.jpg';
import GithubImage from './images/github.png';
import LinkedinImage from './images/linkedin.png';
import BillyBroncoImage from './images/billybronco.png';
import RonaldImage from './images/ron.jpg';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface creditProps {
  imageLink: string;
  imageAlt: string;
  userName: string;
  userRole: string;
  userGithub: string;
  userLinkedin: string;
}

/**
 * Component that displays a single developer credit element
 */
function CreditElement({
  imageLink = BillyBroncoImage,
  imageAlt,
  userName,
  userRole,
  userGithub = 'https://github.com/',
  userLinkedin = 'https://www.linkedin.com/',
}: creditProps): ReactElement {
  return (
    <Grid item xs={1} style={{ height: '25vh', marginBottom: '1.5%' }}>
      <img
        src={imageLink}
        alt={imageAlt}
        style={{ height: '15vh', borderRadius: '10vh' }}
      />
      <h2>{userName}</h2>
      <h3>{userRole}</h3>
      <a href={userGithub} target="_blank" rel="noreferrer">
        <img
          src={GithubImage}
          alt="git"
          style={{ height: '4vh', borderRadius: '50%' }}
        />
      </a>
      <a href={userLinkedin} target="_blank" rel="noreferrer">
        <img
          src={LinkedinImage}
          alt="link"
          style={{ height: '4vh', borderRadius: '50%' }}
        />
      </a>
    </Grid>
  );
}

/**
 * Template accordion child element
 * @param title Title of accordion
 * @parem expand Expand state of accordion
 * @param change Function to close other open accordions
 * @param children Accordion children
 * @returns MUI accordion element
 */
function AccordianElement({
  title,
  expand,
  change,
  children,
}: {
  title: string;
  expand: string | boolean;
  change: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  children: ReactElement;
}): ReactElement {
  return (
    <Accordion
      expanded={expand === title}
      onChange={change}
      sx={{ backgroundColor: '#a7a4a0' }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: 'white' }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

function MentorComponents(): ReactElement {
  return (
    <>
      <CreditElement
        imageLink={LucianoImage}
        imageAlt="luciano"
        userName="Luciano Lim"
        userRole="Tech Lead"
        userGithub="https://github.com/ZombiMigz"
        userLinkedin="https://www.linkedin.com/in/lucianolim"
      ></CreditElement>

      <CreditElement
        imageLink={BobImage}
        imageAlt="bob"
        userName="Bob"
        userRole="Project Manager"
        userGithub="https://github.com/misslame"
        userLinkedin=""
      ></CreditElement>

      <CreditElement
        imageLink={ProductBobImage}
        imageAlt="productbob"
        userName="Jacob Rothman"
        userRole="Product Manager"
        userGithub="https://github.com/U-k-t"
        userLinkedin="https://www.linkedin.com/in/jacob-rothman/"
      ></CreditElement>
    </>
  );
}

function MaintainerComponent(): ReactElement {
  return (
    <>
      <Grid item xs={1}>
        {' '}
      </Grid>
      <CreditElement
        imageLink={BillyBroncoImage}
        imageAlt="jason"
        userName="Jason Agus"
        userRole="Maintainer, Developer"
        userGithub="https://github.com/GuyWhoCode"
        userLinkedin="https://www.linkedin.com/in/jason-agus-27808922b/"
      ></CreditElement>

      <CreditElement
        imageLink={PatrickImage}
        imageAlt="patrick"
        userName="Patrick Hoang"
        userRole="Maintainer, Developer"
        userGithub="https://github.com/PattyCakesxD"
        userLinkedin="https://www.linkedin.com/mwlite/in/patrick-hoang-432694252"
      ></CreditElement>

      <CreditElement
        imageLink={MatthewImage}
        imageAlt="matthew"
        userName="Matthew Kwong"
        userRole="Maintainer, Developer"
        userGithub="https://github.com/Leaversa"
        userLinkedin="https://www.linkedin.com/in/matthew--kwong/"
      ></CreditElement>
      <Grid item xs={1}>
        {' '}
      </Grid>
    </>
  );
}

function DeveloperComponents(): ReactElement {
  return (
    <>
      <CreditElement
        imageLink={RonaldImage}
        imageAlt="ron"
        userName="Ronald Lencevičius"
        userRole="Supporter"
        userGithub="https://github.com/392781/"
        userLinkedin="https://linkedin.com/in/ronaldpl"
      ></CreditElement>

      <CreditElement
        imageLink={AliImage}
        imageAlt="ali"
        userName="Ali Momennasab"
        userRole="Developer"
        userGithub="https://github.com/alimomennasab"
        userLinkedin="https://www.linkedin.com/in/amomennasab/"
      ></CreditElement>

      <CreditElement
        imageLink={ValImage}
        imageAlt="val"
        userName="Valen DeLeon"
        userRole="Developer"
        userGithub="https://github.com/wheatleyinabox"
        userLinkedin="https://www.linkedin.com/in/valeriedeleon-ca"
      ></CreditElement>

      <CreditElement
        imageLink={LinaImage}
        imageAlt="lina"
        userName="Lina Kang"
        userRole="Legacy Developer"
        userGithub="https://github.com/dal07065"
        userLinkedin="https://www.linkedin.com/in/linapoolmkang"
      ></CreditElement>

      <CreditElement
        imageLink={BillyBroncoImage}
        imageAlt="tony"
        userName="Tony Tong"
        userRole="Legacy Developer"
        userGithub="https://github.com/peppacaiou"
        userLinkedin="https://www.linkedin.com/in/tony-tong-699631240/"
      ></CreditElement>

      <CreditElement
        imageLink={TimothyImage}
        imageAlt="tim"
        userName="Timothy Lee"
        userRole="Legacy Developer"
        userGithub="https://github.com/t1mato"
        userLinkedin="www.linkedin.com/in/tnlee1"
      ></CreditElement>

      <CreditElement
        imageLink={JaronImage}
        imageAlt="jaron"
        userName="Jaron Lin"
        userRole="Legacy Developer"
        userGithub="https://github.com/jaroonl"
        userLinkedin="https://www.linkedin.com/in/jaron-lin-540a76215/"
      ></CreditElement>

      <CreditElement
        imageLink={JonahImage}
        imageAlt="jonah"
        userName="Jonah Lynse"
        userRole="Legacy Developer"
        userGithub="https://github.com/drjonah"
        userLinkedin="https://www.linkedin.com/in/jonah-lysne/"
      ></CreditElement>

      <CreditElement
        imageLink={AlanImage}
        imageAlt="alan"
        userName="Alan Mong"
        userRole="Legacy Developer"
        userGithub="https://github.com/alinz22"
        userLinkedin="https://www.linkedin.com/in/alan-mong-46427b250/"
      ></CreditElement>

      <CreditElement
        imageLink={SamanyuImage}
        imageAlt="samanyu"
        userName="Samanyu Satheesh"
        userRole="Legacy Developer"
        userGithub="https://github.com/Samanyu24X"
        userLinkedin="https://www.linkedin.com/in/samanyu-satheesh"
      ></CreditElement>

      <CreditElement
        imageLink={BillyBroncoImage}
        imageAlt="darren"
        userName="Darren Banhthai"
        userRole="Contributor"
        userGithub="https://github.com/DarrenBT"
        userLinkedin="https://www.linkedin.com/in/darren-banhthai-6731a5221"
      ></CreditElement>
    </>
  );
}

function QualityEngineerComponents(): ReactElement {
  return (
    <>
      <CreditElement
        imageLink={ElenaImage}
        imageAlt="elena"
        userName="Elena Hernandez"
        userRole="Quality Engineer"
        userGithub="https://github.com/E-A-H62"
        userLinkedin="https://www.linkedin.com/in/elena-hernandez-053371248"
      ></CreditElement>

      <CreditElement
        imageLink={AlexanderImage}
        imageAlt="alex"
        userName="Alexander Okonkwo"
        userRole="Quality Engineer"
        userGithub="https://github.com/owwix"
        userLinkedin=""
      ></CreditElement>

      <CreditElement
        imageLink={BillyBroncoImage}
        imageAlt="nick"
        userName="Nick"
        userRole="Quality Engineer"
        userGithub=""
        userLinkedin=""
      ></CreditElement>
    </>
  );
}

function MenteeComponents(): ReactElement {
  return (
    <>
      <CreditElement
        imageLink={MarcImage}
        imageAlt="marc"
        userName="Marc Cruz"
        userRole="Product Mentee"
        userGithub="https://github.com/MarcCruzs"
        userLinkedin="https://www.linkedin.com/in/marc-cruz13/"
      ></CreditElement>

      <CreditElement
        imageLink={MatthewPImage}
        imageAlt="matthew"
        userName="Matthew Plascencia"
        userRole="Product Mentee"
        userGithub="https://github.com/tapatiohaxx"
        userLinkedin="https://www.linkedin.com/in/matthew-plascencia/"
      ></CreditElement>

      <CreditElement
        imageLink={DevinImage}
        imageAlt="devin"
        userName="Devin Khun"
        userRole="Product & Project Mentee"
        userGithub="https://github.com/Shadowowl888"
        userLinkedin="https://www.linkedin.com/in/matthew-plascencia/"
      ></CreditElement>
    </>
  );
}

/**
 * Mobile Credits Component
 * @returns Container for mobile credits
 */
function MobileCredits(): ReactElement {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box display={{ xs: 'block', md: 'none' }}>
      <AccordianElement
        title="Maintainers"
        children={<MaintainerComponent />}
        expand={expanded}
        change={handleChange('Maintainers')}
      />
      <AccordianElement
        title="Developers"
        children={<DeveloperComponents />}
        expand={expanded}
        change={handleChange('Developers')}
      />
      <AccordianElement
        title="Mentors"
        children={<MentorComponents />}
        expand={expanded}
        change={handleChange('Mentors')}
      />
      <AccordianElement
        title="Mentees"
        change={handleChange('Mentees')}
        expand={expanded}
        children={<MenteeComponents />}
      />
      <AccordianElement
        title="Quality Engineers"
        children={<QualityEngineerComponents />}
        expand={expanded}
        change={handleChange('Quality Engineers')}
      />
    </Box>
  );
}

/**
 * Website Credits Component
 * @returns Container with credits components
 */
export default function Credits(): ReactElement {
  return (
    <>
      {/* Desktop design */}
      <Grid
        container
        display={{ xs: 'none', md: 'flex' }}
        spacing={{ xs: 2 }}
        columns={{ xs: 5 }}
        sx={{
          paddingBottom: '1%',
          backgroundColor: '#55a072',
          marginTop: '0px!important',
        }}
      >
        <MaintainerComponent />
        <DeveloperComponents />
        <MentorComponents />
        <MenteeComponents />
        <QualityEngineerComponents />
      </Grid>

      {/* Mobile design */}
      <MobileCredits />
    </>
  );
}
