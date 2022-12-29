import React, { ReactElement } from 'react';
// import { useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import bronco from './images/BroncoDirectMeLogo2.png';
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
import { Box, Container, Grid, Typography } from '@mui/material';
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
            <Container
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                flexDirection: 'column',
                padding: '30px 0px 40px 0px',
                margin: '100px 50px 50px 0px',
                height: '100%',
                background: 'rgba(30,30,30,0.8)',
              }}
            >
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
              <BannerButton variant="contained" startIcon={<DownloadIcon />}>
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
        <BodyText variant="h4" sx={{ paddingTop: '3em' }}>
          A Simple Add-On that can Maximize your Scheduling Needs
        </BodyText>
        <BodyText
          variant="h5"
          sx={{
            paddingTop: '3em',
            maxWidth: '45em',
            fontWeight: 'lighter',
          }}
        >
          Through the hush and rush of registering for classes, you can't ignore
          the tediousness of managing extra tabs searching up professors'
          ratings RateMyProfessor.
        </BodyText>
        <BodyText
          variant="h5"
          sx={{ paddingBottom: '3em', fontWeight: 'lighter' }}
        >
          Why waste time when you can let BroncoDirectMe search for you!
        </BodyText>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="start"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              marginBottom={'1em'}
              padding="0px 20px 0px 20px"
            >
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'rgba(30, 30, 30, 0.7)',
                    padding: '10px 10px 10px 10px',
                    margin: '20px',
                    borderRadius: '150px',
                  }}
                  alt="Completely Free"
                  src={icon1}
                />

                <Typography
                  variant="h5"
                  sx={{ marginBottom: '10px', fontStyle: 'italic' }}
                >
                  No Cost
                </Typography>
                <Typography width="250px">
                  Free of charge for all Cal Poly Pomona students
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              marginBottom={'2em'}
              padding="0px 20px 0px 20px"
            >
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'rgba(30, 30, 30, 0.7)',
                    padding: '10px 10px 10px 10px',
                    margin: '20px',
                    borderRadius: '150px',
                  }}
                  alt="User Friendly"
                  src={icon2}
                />
                <Typography
                  variant="h5"
                  sx={{ marginBottom: '10px', fontStyle: 'italic' }}
                >
                  User Friendly
                </Typography>
                <Typography width="250px">
                  Basic user interface, very minimal tech savviness needed
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              marginBottom={'2em'}
              padding="0px 20px 0px 20px"
            >
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'rgba(30, 30, 30, 0.7)',
                    padding: '10px 10px 10px 10px',
                    margin: '20px',
                    borderRadius: '150px',
                  }}
                  alt="Easy Installation"
                  src={icon3}
                />
                <Typography
                  variant="h5"
                  sx={{ marginBottom: '10px', fontStyle: 'italic' }}
                >
                  Easy Installation
                </Typography>
                <Typography width="250px">
                  Automatic adaptation when BroncoDirect Class Search page is
                  loaded to display the ratings
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              marginBottom={'2em'}
              padding="0px 20px 0px 20px"
            >
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'rgba(30, 30, 30, 0.7)',
                    padding: '10px 10px 10px 10px',
                    margin: '20px',
                    borderRadius: '150px',
                  }}
                  alt="Community"
                  src={icon4}
                />
                <Typography
                  variant="h5"
                  sx={{ marginBottom: '10px', fontStyle: 'italic' }}
                >
                  Support Community
                </Typography>
                <Typography width="250px">
                  With your usage of our extension, you help support our CPP CS
                  Discord and our fellow CPP devs!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <BodyText variant="h4" sx={{ padding: '2em' }}>
          Demonstration of BroncoDirectMe 1.0.0
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
            // p={3}
            rowSpacing={10}
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
                <iframe
                  src="https://streamable.com/e/55ydlk"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                ></iframe>
                <BodyText
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  A Simple Click Away
                </BodyText>
                <GridText variant="h6">
                  A single button click can show you all the essential details
                  straight from RateMyProfessor reviews.
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
                <iframe
                  src="https://streamable.com/e/sc05gd"
                  frameBorder="0"
                  width="100%"
                  height="60%"
                ></iframe>
                <BodyText
                  variant="h4"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  Easy To Reach
                </BodyText>
                <GridText variant="h6">
                  Accessible not just on BroncoDirect but also from your home
                  toolbar!
                </GridText>
              </GridItem>
            </Grid>
          </Grid>
        </Box>

        <FooterText variant="h4">Pretty Handy Ain't It?</FooterText>
        <BannerButton variant="contained" startIcon={<DownloadIcon />}>
          Download Extension
        </BannerButton>
        <Footer variant="h6">
          Developed by the students of California State Polytechnic University,
          Pomona
        </Footer>
      </BodyContainer>
    </Box>
  );
}