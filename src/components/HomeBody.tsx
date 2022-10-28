import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BodyContainer = styled(Box)(({ theme }) => ({
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'start',
  //   width: '100%',
  padding: '30px 30px 30px 30px',
}));

export const BodyText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1,
  color: '#000000',
  textAlign: 'start',
  marginBottom: '1em',
  fontWeight: 'lighter',
}));

export const GridText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1,
  //   textAlign: 'cen',
  marginBottom: '1em',
  fontWeight: 'lighter',
  color: 'white',
}));

export const Footer = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1,
  color: '#000000',
  marginTop: '2em',
  fontSize: '15px',
  fontWeight: 'lighter',
  textAlign: 'center',
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1,
  color: '#000000',
  marginTop: '2em',
  marginBottom: '1em',
  fontWeight: 'lighter',
  textAlign: 'center',
}));

export const GridItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '500px',
  height: '400px',
  backgroundColor: 'rgba(30,30,30,0.7)',
  padding: '30px 30px 30px 30px',
  borderRadius: '16px',
}));
