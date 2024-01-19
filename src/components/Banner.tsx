import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import home from './images/home.png';

export const BannerContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  // padding: '0px 0px 50px 0px',
  backgroundImage: `url(${home})`,
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
  src: { src },
  padding: '30px 60px 30px 20px',
  width: '80%',
}));

export const BannerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  // 'linear-gradient(to top, rgba(30,30,30,0), rgba(30,30,30,1))',
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  color: '#ffffff',
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1,
  color: '#ffffff',
  align: 'left',
  fontWeight: 'bold',
}));

export const BannerSubtitle = styled(Typography)(({ theme }) => ({
  lineHeight: 2,
  letterSpacing: 1,
  maxWidth: '100%',
  marginTop: '0.5em',
  color: '#ffffff',
  align: 'left',
  fontWeight: 'lighter',
  fontStyle: 'italic',
}));

export const BannerButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000000',
  fontSize: '20px',
  borderRadius: '16px',
  marginTop: '0.5em',
  height: '3em',
  width: '18em',
  // marginLeft: '40px',
  // startIcon: '{<DownloadIcon/>}',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
}));
