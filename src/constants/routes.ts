import React from 'react';

// Private Components
import Dashboard from '@screens/dashboard';
import Market from '@screens/market';
import Portfolio from '@screens/portfolio';
import Wallet from '@screens/wallet';
import Subscription from '@screens/subscription';
import BasicDetails from '@screens/onboarding/basic-details';
import KycDetails from '@screens/onboarding/kyc-details';
import RiskProfile from '@screens/onboarding/risk-profile';
import Funds from '@screens/onboarding/funds';
import ViewProfile from '@screens/view-profile/basic-details';
import ProfileRiskProfile from '@screens/view-profile/risk-profile';
import ProfileKyc from '@screens/view-profile/kyc-details';
import ProfileFunds from '@screens/view-profile/funds';

// Public Components
import SignIn from '@screens/authentication/sign-in';
import SignUp from '@screens/authentication/sign-up';
import ForgotPassword from '@screens/authentication/forgotpassword';
const MFA = React.lazy(() => import('@screens/authentication/sign-up/mfa'));

export const PUBLIC_PATHS = [
  { exact: true, path: '/signup', component: SignUp as any },
  { exact: true, path: '/signup/mfa', component: MFA },
  { exact: true, path: '/signin', component: SignIn as any },
  { exact: true, path: '/forgotpassword', component: ForgotPassword as any }
];

export const PRIVATE_PATHS = [
  { exact: true, path: '/', component: Dashboard as any },
  { exact: true, path: '/dashboard', component: Dashboard },
  { exact: true, path: '/wallet', component: Wallet },

  { exact: true, path: '/market', component: Market },
  { exact: true, path: '/portfolio', component: Portfolio },
  { exact: true, path: '/subscription', component: Subscription },
  { exact: true, path: '/onboarding-basic-details', component: BasicDetails },
  { exact: true, path: '/onboarding-kyc-details', component: KycDetails },
  { exact: true, path: '/onboarding-risk-profile', component: RiskProfile },
  { exact: true, path: '/onboarding-funds', component: Funds as any },
  { exact: true, path: '/view-profile', component: ViewProfile },
  { exact: true, path: '/risk-profile', component: ProfileRiskProfile },
  { exact: true, path: '/profile-kyc', component: ProfileKyc },
  { exact: true, path: '/profile-funds', component: ProfileFunds }
];
