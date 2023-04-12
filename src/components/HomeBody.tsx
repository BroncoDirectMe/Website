import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BodyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  //   width: '100%',
  padding: '30px 30px 30px 30px',
}));

export const BodyText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  letterSpacing: 1,
  color: '#000000',
  // marginBottom: '1em',
}));

export const GridText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1,
  //   textAlign: 'cen',
  margin: '1em',
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

export const RowItem = styled(Box)(({ theme }) => ({
  width: '150px',
  height: '150px',
  backgroundColor: 'rgba(30,30,30,0.7)',
  padding: '20px 20px 20px 20px',
  borderRadius: '150px',
}));

export const GridItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '500px',
  height: '500px',
  backgroundColor: 'rgba(30,30,30,0.7)',
  // padding: '0px 30px 30px 30px',
  borderRadius: '16px',
}));
