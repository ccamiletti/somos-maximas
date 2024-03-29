import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AuthResetPassword from 'components/authentication/auth-forms/AuthResetPassword';
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthWrapper2 from 'components/authentication/AuthWrapper2';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import BackgroundPattern2 from 'ui-component/cards/BackgroundPattern2';
import AuthSlider from 'ui-component/cards/AuthSlider';
import { AuthSliderProps } from 'types';
// assets
const imgMain = '/assets/images/auth/img-a2-resetpass.svg';

// carousel items
const items: AuthSliderProps[] = [
  {
    title: 'Configurable Elements, East to Setup',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Configurable Elements, East to Setup',
    description: 'Powerful and easy to use multipurpose theme'
  },
  {
    title: 'Configurable Elements, East to Setup',
    description: 'Powerful and easy to use multipurpose theme'
  }
];

// ============================|| AUTH2 - RESET PASSWORD ||============================ //

const ResetPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Page title="Reset Password">
      <AuthWrapper2>
        <Grid container justifyContent={matchDownSM ? 'center' : 'space-between'} alignItems="center">
          <Grid item md={6} lg={7} xs={12} sx={{ minHeight: '100vh' }}>
            <Grid
              sx={{ minHeight: '100vh' }}
              container
              alignItems={matchDownSM ? 'center' : 'flex-start'}
              justifyContent={matchDownSM ? 'center' : 'space-between'}
            >
              <Grid item sx={{ display: { xs: 'none', md: 'block' }, m: 3 }}>
                <Link href="#">
                  <Logo />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: { xs: 'calc(100vh - 68px)', md: 'calc(100vh - 152px)' } }}
              >
                <Stack justifyContent="center" alignItems="center" spacing={5} m={2}>
                  <Box component={Link} href="#" sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Logo />
                  </Box>
                  <AuthCardWrapper border={matchDownMD}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12}>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Reset Password
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign="center">
                            Please choose your new password
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <AuthResetPassword />
                      </Grid>
                    </Grid>
                  </AuthCardWrapper>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{ m: 3 }}>
                <AuthFooter />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
            <BackgroundPattern2>
              <Grid item container justifyContent="center">
                <Grid item xs={12}>
                  <Grid item container justifyContent="center" sx={{ pb: 8 }}>
                    <Grid item xs={10} lg={8} sx={{ '& .slick-list': { pb: 2 } }}>
                      <AuthSlider items={items} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div
                    style={{
                      maxWidth: '100%',
                      margin: '0 auto',
                      display: 'block',
                      textAlign: 'center'
                    }}
                  >
                    <Image alt="Auth method" src={imgMain} width={300} height={300} />
                  </div>
                </Grid>
              </Grid>
            </BackgroundPattern2>
          </Grid>
        </Grid>
      </AuthWrapper2>
    </Page>
  );
};

ResetPassword.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default ResetPassword;
