import React, { ReactElement } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  OutlinedInput,
  InputAdornment,
  useMediaQuery
} from '@mui/material';

// project imports
import Logo from '../Logo';

// assets
import { IconAdjustmentsHorizontal, IconBook, IconCreditCard, IconDashboard, IconHome2, IconSearch } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import { NavItemType } from 'types';
import landingMenuItems from 'layout/Landing/MenuItem/landingMenuItem';
import { LAYOUT_CONST } from 'constant';
import useConfig from 'hooks/useConfig';
import { HORIZONTAL_MAX_ITEM } from 'config';
import NavGroup from 'layout/MainLayout/MenuList/NavGroup';
import NavItem from 'layout/MainLayout/MenuList/NavItem';
import { FormattedMessage } from 'react-intl';

// elevation scroll
interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!
  });
  const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark
    }
  });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const MenuBar = ({ ...others }) => {

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const { layout } = useConfig();

  // last menu-item to show in horizontal menu bar
  const lastItem = layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd ? HORIZONTAL_MAX_ITEM : null;

  let lastItemIndex = landingMenuItems.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < landingMenuItems.items.length) {
    lastItemId = landingMenuItems.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = landingMenuItems.items.slice(lastItem - 1, landingMenuItems.items.length).map((item) => ({
      title: item.title,
      elements: item.children
    }));
  }

  const navItems = landingMenuItems.items.slice(0, lastItemIndex + 1).map((item) => {
    
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} lastItem={lastItem!} remItems={remItems} lastItemId={lastItemId} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={1} parentId={'0'} />;  
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  /** Method called on multiple components with different event types */
  const drawerToggler = (open: boolean) => (event: any) => {
    if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  const linkSX = {
    display: 'flex',
    color: 'grey.900',
    textDecoration: 'none',
    alignContent: 'center',
    alignItems: 'center'
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Logo />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              <Button color="inherit">
                <>{navItems}</>
              </Button>
              <OutlinedInput
                id="input-search-list-style1"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="16px" />
                  </InputAdornment>
                }
                size="small"
              />
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation" onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
                     <>{navItems}</>
                  </Box>
                )}
              </Drawer>
            </Box>            

          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default MenuBar;
