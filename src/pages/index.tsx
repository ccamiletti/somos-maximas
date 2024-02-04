import { ReactElement } from 'react';

// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Header from 'components/landingpage/Header';
import Feature from 'components/landingpage/Feature';
import Demos from 'components/landingpage/Demos';
import KeyFeature from 'components/landingpage/KeyFeature';

import AprendeSentidosPage from 'components/landingpage/AprendeSentidos';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 0,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 0,
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  // <Page title="Welcome">
  //   <Header />
  //     <Feature />
  //   <Demos />
  //   <KeyFeature />
  //   <AprendeSentidosPage />
  //   <Subscribe />
  //   <Customization />
  // </Page>
  <Page title="Welcome">
    <HeaderWrapper id="home">
      <Header />
    </HeaderWrapper>
    <SecondWrapper>
      <Feature />
    </SecondWrapper>
    <SecondWrapper>
      <Demos />
    </SecondWrapper>
    <SecondWrapper>
      <KeyFeature />
    </SecondWrapper>
    <SecondWrapper>
    <AprendeSentidosPage />
    </SecondWrapper>
  </Page>
);

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="minimal">{page}</Layout>;
};

export default Landing;
