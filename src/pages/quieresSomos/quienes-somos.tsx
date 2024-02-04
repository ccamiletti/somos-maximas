import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import Link from 'Link';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import LandingLayout from 'layout/Landing';
import { ReactElement } from 'react';
import FadeInWhenVisible from 'components/landingpage/Animation';


// ==============================|| LANDING - HEADER PAGE ||============================== //

const QuienesSomos = () => {
  const theme = useTheme();
  return (
    <div style={{ 
      backgroundImage: 'url(/assets/images/tea.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '10px',
        // height: '90%',
        width: '100%',
        height: '55%'
        //borderRadius: '10px 0px 39px 22px'
    }}>
    <Container>
      <Grid
        container
        textAlign= 'center'
        sx={{ mt: { xs: 10, sm: 6, md: 10.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12} style={{paddingTop: '270px'}} >
          <Grid container direction="column" alignItems="center" justifyContent="center" >
            <Grid item xs={12} width={'50%'}>
            <FadeInWhenVisible>
              <Typography variant="body2" sx={{ fontSize: '34px', color: '#FFFFFF', lineHeight: '1.42em' }} >
              Tenemos la responsabilidad de incentivar a las mujeres para ser más productivas, empoderadas e independientes, mediante nuestros cursos online.
              </Typography>
            </FadeInWhenVisible>  
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </div>

    // <div style={{ 
    //   backgroundImage: 'url(/assets/images/tea.jpg)',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     height:'50%',
    //     paddingTop: '280px',
    //     //borderRadius: '10px 0px 39px 22px'
    // }}>
    // <Container sx={{ textAlign: 'center'}}>
    //   <Grid item xs={12} border={1} >
    //     <Box
    //       display="flex"
    //       justifyContent="center"
    //       alignItems="center"
    //     >
    //     <Grid container direction="column" alignItems="center" justifyContent="center" paddingBottom={'100px'}>
    //       <Grid item xs={12} width={'50%'}>
    //         <Typography variant="body2" sx={{ fontSize: '34px', color: '#FFFFFF', lineHeight:'1.42em' }} display="inline">
    //         Tenemos la responsabilidad de incentivar a las mujeres para ser más productivas, empoderadas e independientes, mediante nuestros cursos online.
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //     </Box>
    //   </Grid>
    // </Container>
    // </div>
  );
};

QuienesSomos.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
};

export default QuienesSomos;
