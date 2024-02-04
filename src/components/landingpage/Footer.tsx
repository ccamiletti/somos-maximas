import Image from 'next/image';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { color, fontStyle } from '@mui/system';

const logoDark = '/assets/images/logo-white.svg';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '35px 0',
  color: '#fff',
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const FooterLink = styled(Link)({
  color: '#696969',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none !important',
  opacity: '0.8',
  '& svg': {
    fontsize: '1.125rem',
    marginRight: 8
  },
  '&:hover': {
    opacity: '1'
  }
});

const FooterSubWrapper = styled('div')(({ theme }) => ({
  padding: '20px 0',
  color: '#fff',
  background: theme.palette.secondary.dark,
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
  const theme = useTheme();
  return (
    <div style={{backgroundColor: '#f8f8f8', paddingTop:'100px', paddingBottom: '100px'}}>
        <Container>
          <Grid container >
            <Grid item sm={7} >
              <Grid item typography={'h2'} style={{fontSize: '18px'}}>
                  Maximas
              </Grid>
              <Grid item paddingTop={'25px;'}>
                <Typography component={Link} href="/forms/forms-validation" >
                Tilburg Nederland
                </Typography>
              </Grid>
              <Grid item paddingTop={'18px;'}>
                info@somosmaximas.com
              </Grid>
              <Grid container paddingTop={'50px;'}  spacing={5}>
                    <Grid item>
                      <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                        <InstagramIcon />
                        Blog
                      </FooterLink>
                    </Grid>
                    <Grid item>
                      <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                        <FacebookIcon />
                        Facebook
                      </FooterLink>
                    </Grid>
                    <Grid item>
                      <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                        <TwitterIcon />
                        Twitter
                      </FooterLink>
                    </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3}>
              <Grid item typography={'h2'} style={{fontSize: '18px'}}>
                Algunos Datos
              </Grid>
              <Grid item paddingTop={'25px;'}>
                Conviértete en Profesor
              </Grid>
              <Grid item paddingTop={'18px;'}>
                Blog
              </Grid>
              <Grid item paddingTop={'18px;'}>
                Preguntas Frecuentes
              </Grid>
              <Grid item paddingTop={'18px;'}>
                Contáctanos
              </Grid>
            </Grid>
            <Grid item sm={2}>
              <Grid item typography={'h2'} style={{fontSize: '18px'}}>
                Información
              </Grid>
              <Grid item paddingTop={'25px;'}>
                Política de Cookies
              </Grid>
              <Grid item paddingTop={'18px;'}>
                Política de Privacidad
              </Grid>
              <Grid item paddingTop={'18px;'}>
                Términos de Uso
              </Grid>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
};

export default FooterPage;
