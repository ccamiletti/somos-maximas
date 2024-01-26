import Image from 'next/image';
// material-ui
import { Button, ButtonBase, Container, Grid, Typography } from '@mui/material';
import Link from 'Link';
// project imports
import FadeInWhenVisible from './Animation';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| LANDING - DEMOS PAGE ||============================== //

const DemosPage = () => (
  <div style={{ paddingTop: '100px'}}>
  <Container>

    <Grid container>
          <Grid item xs={12} padding={'15px'} spacing={1} sx={{ textAlign: 'center'}}>
              <Grid item xs={12}>
              <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '2px', color: '#8C89A2' }}>
                  APRENDE A TU RITMO
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ fontSize: '34px', color: '#3F3A64', margin: '0'}} display="inline">
                  Cursos exclusivos actuales
                </Typography>
              </Grid>
          </Grid>
          <Grid container item xs={12} >
              <Grid md={4} padding={'15px'}>
                <Grid>
                    <FadeInWhenVisible>
                      <ButtonBase
                        component={Link}
                        href="/dashboard/default"
                        sx={{ width: '100%', height: { xs: '220px', sm: '250px', md: '230px' } }}
                      >
                        <Image src={'/assets/images/Zenzualizacion.jpg'} alt="" layout="fill"/>
                      </ButtonBase>
                    </FadeInWhenVisible>
                </Grid>  
                <Grid sx={{ bgcolor: '#F8F4EC'}} paddingBottom={'30px'}>
                  <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '2px', 
                      color: '#8C89A2', padding: '10px' }}>
                      MAR 30, 2021
                    </Typography>
                    <Typography display="inline" variant="body2" sx={{ padding: '10px', fontSize: '24px', fontWeight: 'bold' }}>
                    Zenzualización</Typography>
                </Grid>
              </Grid>

              <Grid md={4} padding={'15px'}>
                <Grid sx={{textAlign:'center'}}>
                  <FadeInWhenVisible>
                    <ButtonBase
                      sx={{ width: '100%', height: { xs: '220px', sm: '250px', md: '230px' }, position: 'relative' }}
                      component={Link}
                      href="/app/user/social-profile/posts"
                    >
                      <Image src={'/assets/images/DrenajeLinfatico.jpg'} alt="" layout="fill" />
                    </ButtonBase>
                  </FadeInWhenVisible>
                </Grid>
                <Grid sx={{ bgcolor: '#F8F4EC'}} paddingBottom={'30px'}>
                  <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: 
                      '2px', color: '#8C89A2', padding: '10px'}}>
                      DIC 27, 2023
                    </Typography>
                    <Typography display="inline" variant="body2" sx={{ padding: '10px', fontSize: '24px', fontWeight: 'bold' }}>
                    Drenaje Linfatico</Typography>

                </Grid>
              </Grid>

              <Grid md={4} padding={'15px'}>
                <Grid textAlign={'center'}>
                  <FadeInWhenVisible>
                    <ButtonBase
                      component={Link}
                      href="/dashboard/default"
                      sx={{ width: '100%', height: { xs: '220px', sm: '250px', md: '230px' }, position: 'relative' }}
                    >
                      <Image src={'/assets/images/aprenderYogaLife.jpg'} alt="" layout="fill" />
                    </ButtonBase>
                  </FadeInWhenVisible>
                </Grid>  
                <Grid>
                  <Grid sx={{ bgcolor: '#F8F4EC'}} width='100%' paddingBottom={'30px'}>
                    <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: 
                      '2px', color: '#8C89A2', padding: '10px'}}>
                      ENE 15, 2020
                      </Typography>
                      <Typography display="inline" variant="body2" sx={{ padding: '10px', fontSize: '24px', fontWeight: 'bold' }}>
                      Aprender Yoga Life</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 3 }}>
            <AnimateButton>
              <Button component={Link} href="/forms/components/autocomplete" variant="outlined">
                Revisa mas cursos aqui
              </Button>
            </AnimateButton>
          </Grid>  
      </Container>
   </div>   
);

export default DemosPage;
