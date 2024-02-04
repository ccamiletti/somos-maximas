// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturePage = () => {
  const theme = useTheme();
  return (
    <Container >
      <Grid
        container
        textAlign='center'
        alignItems="center"
        justifyContent="space-between"
        spacing={gridSpacing}
        sx={{ mt: { xs: 10, sm: 6, md: 10.75 }, mb: { xs: 2.5, md: 10 } }}
      >
        <Grid item xs={12}>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '2px', color: '#8C89A2' }}>
              EDUCACIÓN PARA TODAS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontSize: '34px', color: '#3F3A64' }} display="inline">
                  Aprender <Typography display="inline" variant="body2" sx={{ fontSize: '34px', color: '#d40050' }}>
                Cursos Online</Typography> con calidad Holandesa
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2} >
            <Grid item md={3} >
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" sx={{padding: '15px'}}>
                    <Grid item>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64">
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M7,0L7,64" ></path>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M32.062,6L26,11L26,35L57,35L51,23L57,11L26,11"></path>
                      <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M26,30L7,30L7,6L32,6L32,11"></path>
                    </svg>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Aprendizaje para tu Vida</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                      Obtenga de nuestros cursos, todo el apoyo y orientación para sus aspiraciones y direcciones vocacionales.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={3} >
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" sx={{padding: '15px'}}>
                    <Grid item>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64">
                        <g>
                          <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M32,1L26,1L26,10L20,12L14,6L6,14L12,20L10,26L1,26L1,38L10,38L12,44L6,50L14,58L20,52L26,54L26,63L32,63L38,63L38,54L44,52L50,58L58,50L52,44L54,38L63,38L63,26L54,26L52,20L58,14L50,6L44,12L38,10L38,1Z"></path>	
                          <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M26,32A6,6 0,1,1 38,32A6,6 0,1,1 26,32"></path>
                        </g>
                      </svg>                      
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Autodesarrollo y Crecimiento</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                      Desarrollar habilidades para la carrera de varias especialidades que puedan maximizar todo tu potencial.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={3} >
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" sx={{padding: '15px'}}>
                    <Grid item>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64">
                        <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M11,48C5.477,48,1,43.523,1,38s4.477-10,10-10h2v20  H11z"></path>
                        <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M53,28c5.523,0,10,4.477,10,10s-4.477,10-10,10h-2  V28H53z"></path>
                        <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M13,31v-9c0,0,0-16,19-16s19,16,19,16v6"></path>
                        <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M51,48L51,53L36,59L28,59L28,55L36,55L36,58"></path>
                      </svg>                      
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Preguntas y dudas para decidirte</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                      Contáctanos y nuestro asesor especial te apoyará para saber qué es lo mejor para el Curso de tus sueños.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>
            <Grid item md={3} >
              <FadeInWhenVisible>
                <SubCard>
                  <Grid container justifyContent="center" sx={{padding: '15px'}}>
                    <Grid item>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64">
                        <g>	
                          <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="62" height="41" d="M1 10 L63 10 L63 51 L1 51 Z"></path>
                          <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M22,63L42,63"></path>
                          <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M32,63L32,51"></path>
                        </g>
                        <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M1,43L64,43"></path>
                      </svg>                      
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h3">Aprende desde cualquier lugar</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                      Estudia desde cualquier parte del mundo, en tu computador, laptop, tableta o teléfono móvil con conexión a Internet.
                      </Typography>
                    </Grid>
                  </Grid>
                </SubCard>
              </FadeInWhenVisible>
            </Grid>            
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturePage;
