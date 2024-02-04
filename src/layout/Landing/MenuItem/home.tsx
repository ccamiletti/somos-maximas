// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';
import { NavItemType } from 'types';

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const maximas: NavItemType = {
  id: 'home',
  title: <FormattedMessage id="home" />,
  type: 'item',
  url: '/',
};

export default maximas;
