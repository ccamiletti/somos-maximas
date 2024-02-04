import { useEffect, useMemo, FC, ReactNode } from 'react';

// material-ui
import { styled, useTheme, Theme } from '@mui/material/styles';
import { Container, AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Customization from '../Customization';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

import navigation from 'menu-items';
import { LAYOUT_CONST } from 'constant';
import useConfig from 'hooks/useConfig';
import { drawerWidth } from 'store/constant';
import { openDrawer } from 'store/slices/menu';
import { useDispatch, useSelector } from 'store';

// assets
import { IconChevronRight } from '@tabler/icons';
import MenuBar from 'ui-component/extended/MenuBar';
import Footer from 'components/landingpage/Footer';

interface MainStyleProps {
  theme: Theme;
}

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }: MainStyleProps) => ({
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: '100%'

}));

interface Props {
  children: ReactNode;
}

// ==============================|| MAIN LAYOUT ||============================== //

const LandingLayout: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);
  const { drawerType, container, layout } = useConfig();

  useEffect(() => {
    if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
      dispatch(openDrawer(true));
    } else {
      dispatch(openDrawer(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerType]);

  useEffect(() => {
    if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
      dispatch(openDrawer(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (matchDownMd) {
      dispatch(openDrawer(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  const header = useMemo(
    () => (
      <Toolbar>
        <MenuBar />
      </Toolbar>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [layout, matchDownMd]
  );

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* header */}
        <AppBar position="fixed" color="inherit" elevation={0} >
          {header}
        </AppBar>

        {/* main content */}
        <Main theme={theme} >
            {/* breadcrumb */}
            <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
            {children}
          <Footer/>

        </Main>
        <Customization />
      </Box>
    </AuthGuard>
  );
};


export default LandingLayout;
