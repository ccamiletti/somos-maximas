// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';

// project imports
import MailerSubscriber from '../maintenance/ComingSoon/ComingSoon1/MailerSubscriber';
import { gridSpacing } from 'store/constant';

// assets
const imgMail = '/assets/images/landing/img-groupmail.png';

// styles
const SubscribeWrapper = styled('div')(({ theme }) => {
  const darkColorRTL =
    theme.palette.mode === 'dark'
      ? `linear-gradient(270deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
      : `linear-gradient(270deg, ${theme.palette.primary.light} 65%, #fff 65%)`;
  const darkColor =
    theme.palette.mode === 'dark'
      ? `linear-gradient(90deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
      : `linear-gradient(90deg, ${theme.palette.primary.light} 65%, #fff 65%)`;

  const darkColorRTL0 =
    theme.palette.mode === 'dark'
      ? `linear-gradient(0deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
      : `linear-gradient(0deg, ${theme.palette.primary.light} 65%, #fff 65%)`;
  const darkColor0 =
    theme.palette.mode === 'dark'
      ? `linear-gradient(0deg, ${theme.palette.dark.main} 65%, ${theme.palette.dark.dark} 65%)`
      : `linear-gradient(0deg, ${theme.palette.primary.light} 65%, #fff 65%)`;
  return {
    padding: '100px 0',
    background: theme.direction === 'rtl' ? darkColorRTL : darkColor,

    [theme.breakpoints.down('lg')]: {
      padding: '50px 0',
      background: theme.direction === 'rtl' ? darkColorRTL0 : darkColor0
    }
  };
});

const SubscribeCard = styled('div')(({ theme }) => ({
  borderRadius: '20px',
  padding: '100px 75px',
  [theme.breakpoints.down('md')]: {
    padding: '40px 25px'
  }
}));

const SubscribeImage = styled('img')({
  width: 330,
  animation: '5s wings ease-in-out infinite',
  maxWidth: '100%'
});

// ============================|| LANDING - SUBSCRIBE PAGE ||============================ //

const Subscribe = () => {
  const theme = useTheme();

  return (
    <Container sx={{ textAlign: 'center', paddingTop:'100px', paddingBottom:'100px' }}>
    <Grid item xs={12} style={{paddingTop: '0px'}}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ [theme.breakpoints.down('md')]: { fontSize: '1.125rem' } }}>
                   Regístrate en nuestro Newsletter
        </Typography>
      </Grid>
      <Grid item xs={12} width={'50%'}>
        <MailerSubscriber />
      </Grid>
    </Grid>
    </Box>
  </Grid>
  </Container>


  );
};

export default Subscribe;
