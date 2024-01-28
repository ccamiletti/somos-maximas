import { ReactElement } from 'react';

// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Header from 'components/landingpage/Header';
import Feature from 'components/landingpage/Feature';
import Demos from 'components/landingpage/Demos';
import Layouts from 'components/landingpage/Layouts';
import KeyFeature from 'components/landingpage/KeyFeature';
import Subscribe from 'components/landingpage/Subscribe';
import Footer from 'components/landingpage/Footer';
import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';
import AprendeSentidosPage from 'components/landingpage/AprendeSentidos';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 10,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 80,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Page title="Welcome">
      <AppBar />
      <Header />
      <Feature />
      <Demos />
    {/* <SecondWrapper>
      <Layouts />
    </SecondWrapper> */}
      <KeyFeature />
      <AprendeSentidosPage />
      <Subscribe />
    <Footer />
    <Customization />
  </Page>
);

Landing.getLayout = function getLayout(page: ReactElement) {
  console.log("this is my page => " + page)
  return <Layout variant="minimal">{page}</Layout>;
};

export default Landing;
