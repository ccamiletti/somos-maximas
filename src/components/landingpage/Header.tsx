// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import Link from 'Link';
// project imports
// project imports
import Avatar from 'ui-component/extended/Avatar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import { height } from '@mui/system';

// styles
const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: '20px',
  transform: 'scale(1.7)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

const HeaderAnimationImage = styled('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
  const theme = useTheme();
  return (
    <div style={{ 
      backgroundImage: 'url(/assets/images/main.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        paddingTop: '280px',
        backgroundPositionY: '300%',
        //borderRadius: '10px 0px 39px 22px'
    }}>
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 10.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} md={6}>
          <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
            <Grid item xs={12}>
                <Typography
                  variant="h1"
                  color="darkslateblue"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '4rem', md: '3rem' },
                    fontWeight: 900,
                    lineHeight: 1.4
                  }}
                >
                  Transfórmate en la versión que tú quieras ser!
                  {/* <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                    Berry
                  </Box> */}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  color="white"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.4
                  }}
                >
                  Para las mujeres que quieran ser más productivas, empoderadas e independientes, mediante nuestros cursos online de estándar y calidad Holandesa.
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Grid item>
                    <AnimateButton>
                      <Button component={Link} href="/dashboard/default" target="_blank" size="large" variant="contained" color="secondary">
                        Más información
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Container>
    </div>
  );
};

export default HeaderPage;
