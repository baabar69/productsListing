import BasicIcon from '@assets/icons/basic.svg';
import KycIcon from '@assets/icons/kyc.svg';
import RiskIcon from '@assets/icons/risk.svg';
import FundsIcon from '@assets/icons/funds.svg';
import SupportIcon from '@assets/icons/support_profile.svg';
import NotificationIcon from '@assets/icons/profile_notifcation.svg';

export const SIDE_MENU_PATHS_WITH_ICONS = [
  {
    label: 'Basic Details',
    path: '/view-profile',
    icon: BasicIcon
  },
  {
    label: 'KYC',
    path: '/profile-kyc',
    icon: KycIcon
  },
  {
    label: 'Risk Profile',
    path: '/risk-profile',
    icon: RiskIcon
  },
  {
    label: 'Funds',
    path: '/profile-funds',
    icon: FundsIcon
  },
  {
    label: 'Support',
    path: '/support',
    icon: SupportIcon
  },
  {
    label: 'Notifications',
    path: '/support',
    icon: NotificationIcon
  }
];
