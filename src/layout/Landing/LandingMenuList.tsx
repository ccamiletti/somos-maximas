import { memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Typography, useMediaQuery } from '@mui/material';

// project imports
import { NavItemType } from 'types';
import { LAYOUT_CONST } from 'constant';
import { HORIZONTAL_MAX_ITEM } from 'config';
import useConfig from 'hooks/useConfig';
import NavGroup from 'layout/MainLayout/MenuList/NavGroup';
import landingMenuItems from './MenuItem/landingMenuItem';
import NavItem from 'layout/MainLayout/MenuList/NavItem';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const LandingMenuList = () => {
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
    console.log("item type => " + item.type)
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

  return <>{navItems}</>;
};

export default memo(LandingMenuList);
