import React, { ReactElement } from 'react';
// import { useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

import bronco from './images/thirstbronco.png';
import home from './images/homeBody.png';
import icon1 from './images/iconFree.png';
import icon2 from './images/iconUserFriendly.png';
import icon3 from './images/iconInstall.png';
import icon4 from './images/iconCommunity.png';
import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerSubtitle,
  BannerTitle,
} from './Banner';
import { Box, Container, Grid } from '@mui/material';
import {
  BodyContainer,
  BodyText,
  GridItem,
  Footer,
  FooterText,
  GridText,
} from './HomeBody';

export default function Home(): ReactElement {
  // const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      <BannerContainer>
        <Grid container spacing={2} alignItems="end">
          <Grid item xs={6}>
            <Container sx={{ padding: '0px 0px 50px 0px' }}>
              <BannerContent>
                <BannerTitle variant="h2">BRONCO DIRECT ME</BannerTitle>
                <BannerDescription variant="h5">
                  Don't waste time registering
                </BannerDescription>
                <BannerDescription variant="h5">
                  Let us make it faster!
                </BannerDescription>
                <BannerSubtitle variant="subtitle1">
                  ENHANCING AND IMPROVING THE CPP REGISTRATION EXPERIENCE
                </BannerSubtitle>
              </BannerContent>
              <BannerButton variant="contained">
                Download Extension
              </BannerButton>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <BannerImage src={bronco}></BannerImage>
          </Grid>
        </Grid>
      </BannerContainer>
      <BodyContainer>
        <BodyText variant="h4">
          Official Website of the BroncoDirect+ Chrome Extension.
        </BodyText>
        <BodyText variant="h5" sx={{ textAlign: 'start' }}>
          This extension was created with the collaboration of Cal Poly Pomona
          students to provide an extension that assist CPP students of ALL
          majors to register classes.
        </BodyText>
        <Box
          sx={{
            backgroundImage: `url(${home})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        >
          <Grid
            container
            p={3}
            rowSpacing={10}
            columnSpacing={{ xs: 0 }}
            sx={{
              marginTop: '0px',
              paddingBottom: '4em',
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GridItem>
                <Box
                  component="img"
                  sx={{
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    marginBottom: '30px',
                  }}
                  alt="The house from the offer."
                  src={icon1}
                />
                <BodyText
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  No Cost
                </BodyText>
                <GridText variant="h5">
                  The extension is free of charge for all Cal Poly Pomona
                  students
                </GridText>
              </GridItem>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GridItem>
                <Box
                  component="img"
                  sx={{
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    marginBottom: '30px',
                  }}
                  alt="The house from the offer."
                  src={icon2}
                />
                <BodyText
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  User Friendly
                </BodyText>
                <GridText variant="h5">
                  The extension was designed for any chrome user to use for
                  class registration without any prior knowledge needed
                </GridText>
              </GridItem>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GridItem>
                <Box
                  component="img"
                  sx={{
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    marginBottom: '30px',
                  }}
                  alt="The house from the offer."
                  src={icon3}
                />
                <BodyText
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  Easy Installation
                </BodyText>
                <GridText variant="h5">
                  One click to add the plug-in and it will automatically assist
                  you in your class scheduling needs.
                </GridText>
              </GridItem>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GridItem>
                <Box
                  component="img"
                  sx={{
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    marginBottom: '30px',
                  }}
                  alt="The house from the offer."
                  src={icon4}
                />
                <BodyText
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  Support Community
                </BodyText>
                <GridText variant="h5">
                  With your usage of our extension, you help support our CPP CS
                  Discord and our fellow CPP devs!
                </GridText>
              </GridItem>
            </Grid>
          </Grid>
        </Box>

        <FooterText variant="h4">Pretty Handy Ain't It?</FooterText>
        <BannerButton variant="contained">Download Extension</BannerButton>
        <Footer variant="h6">
          Developed by the students of California State Polytechnic University,
          Pomona
        </Footer>
      </BodyContainer>
    </Box>
  );
}
