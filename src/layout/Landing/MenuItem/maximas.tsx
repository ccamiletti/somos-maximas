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
  id: 'maximas',
  title: <FormattedMessage id="maximas" />,
  icon: icons.IconDashboard,
  type: 'group',
  children: [
    {
      id: 'quienesSomos',
      title: <FormattedMessage id="quienesSomos" />,
      type: 'item',
      url: '/quieresSomos/quienes-somos',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'loQueHacemos',
      title: <FormattedMessage id="loQueHacemos" />,
      type: 'item',
      url: '/dashboard/analytics',
      icon: icons.IconDeviceAnalytics,
      breadcrumbs: false
    }
  ]
};

export default maximas;
