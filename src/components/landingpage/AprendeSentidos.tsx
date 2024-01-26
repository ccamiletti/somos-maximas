// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

import YouTube from 'react-youtube';


// =============================|| LANDING - FEATURE PAGE ||============================= //

const AprendeSentidosPage = () => {
  const theme = useTheme();
  const opts = { 
    height: "600", 
    width: "1000", 
    playerVars: { 
      autoplay: 1, 
    }, 
  }; 

  
  return (
    <div style={{ 
      backgroundColor: '#F5F1ED',
        backgroundRepeat: 'no-repeat',
        //borderRadius: '10px 0px 39px 22px'
      paddingTop: '100px'  
    }}>
    <Container sx={{ textAlign: 'center'}}>
      <Grid container sx={{ textAlign: 'center'}}>
        <Grid item xs={12} >
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '2px', color: '#8C89A2' }}>
              DESCUBRE NUESTRA METODOLOGÍA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontSize: '34px', color: '#3F3A64' }} display="inline">
              Aprende con todos tus <Typography display="inline" variant="body2" sx={{ fontSize: '34px', color: '#d40050' }}>
              SENTIDOS</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ textAlign: 'center'}} width={'100%'} paddingTop={'15px;'}>
          <Grid alignContent="center" sx={{ textAlign: 'center'}} spacing={2}>
          <YouTube videoId="ElFJ1qcl74U" 
            opts={opts} /> 
          </Grid>
        </Grid>

        <Grid item xs={12} style={{padding: '80px 220px 10px 220px'}}>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h2" component="div" sx={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '2px', color: '#8C89A2' }}>
              DESCUBRE NUESTRA METODOLOGÍA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontSize: '34px', color: '#3F3A64' }} display="inline">
              Breve Testimonio de <Typography display="inline" variant="body2" sx={{ fontSize: '34px', color: '#d40050' }}>
              Estudiantes</Typography> que desarrollan los cursos
              </Typography>
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    </Container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100" style={{
        display: 'block',
        width: 'calc(100% + 1.3px)',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        fill: '#fff'
      }}>
	      <path className="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
      </svg>

    </div>
  );
};

export default AprendeSentidosPage;
function _onReady(event: Event | undefined) {
  throw new Error('Function not implemented.');
}

