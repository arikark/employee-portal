// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import FolderIcon from '@material-ui/icons/Folder';

// components
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Files from '../pages/Files';
import Settings from '../pages/Settings';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import ResetPassword from '../pages/Auth/ResetPassword';

// define app routes
export const privateRoutes = [
  {
    key: 'router-home',
    title: 'Home',
    tooltip: 'Home',
    path: '/app/home',
    enabled: true,
    component: <Home />,
    icon: HomeIcon,
  },
  {
    key: 'router-dashboard',
    title: 'Dashboard',
    tooltip: 'Dashboard',
    path: '/app/dashboard',
    enabled: true,
    component: <Dashboard />,
    icon: DashboardIcon,
  },
  // {
  //   key: 'router-gh',
  //   title: 'GitHub',
  //   tooltip: 'GitHub',
  //   enabled: true,
  //   icon: FolderIcon,
  //   subRoutes: [
  //     {
  //       key: 'router-gh-private',
  //       title: 'Private Repos',
  //       tooltip: 'Private Repos',
  //       path: '/gh/private',
  //       enabled: true,
  //       component: GHPrivate,
  //       icon: PrivateIcon,
  //     },
  //     {
  //       key: 'router-gh-public',
  //       title: 'Public Repos',
  //       tooltip: 'Public Repos',
  //       path: '/gh/public',
  //       enabled: false,
  //       component: GHPublic,
  //       icon: PublicIcon,
  //     },
  //   ],
  // },
  {
    key: 'router-files',
    title: 'Files',
    tooltip: 'Files',
    path: '/app/files',
    enabled: true,
    component: <Files />,
    icon: FolderIcon,
    appendDivider: true,
  },
  {
    key: 'router-settings',
    title: 'Settings',
    tooltip: 'Settings',
    path: '/app/settings',
    enabled: true,
    component: <Settings />,
    icon: SettingsIcon,
  },
];

// define app routes
export const publicRoutes = [
  {
    key: 'router-auth-signin',
    title: 'Sign In',
    path: '/auth/signin',
    component: <SignIn />,
  },
  {
    key: 'router-auth-signup',
    title: 'Sign Up',
    path: '/auth/signup',
    component: <SignUp />,
  },
  {
    key: 'router-auth-resetpassword',
    title: 'Reset Password',
    path: '/auth/resetpassword',
    component: <ResetPassword />,
  },
  // {
  //   key: 'router-notfound',
  //   title: 'Not Found',
  //   tooltip: 'Not Found',
  //   path: '*',
  //   enabled: true,
  //   component: <p>not found</p>,
  //   icon: SettingsIcon,
  // },
  // {
  //   key: 'router-error',
  //   title: 'Error',
  //   path: '*',
  //   component: <div>{`404 No Component Defined.`}</div>,
  // },
  // {
  //   key: 'router-gh-public',
  //   title: 'Public Repos',
  //   tooltip: 'Public Repos',
  //   path: '/gh/public',
  //   enabled: false,
  //   component: GHPublic,
  //   icon: PublicIcon,
  // },
];
// {
//   key: 'router-gh',
//   title: 'GitHub',
//   tooltip: 'GitHub',
//   enabled: true,
//   icon: FolderIcon,
//   subRoutes: [
//     {
//       key: 'router-gh-private',
//       title: 'Private Repos',
//       tooltip: 'Private Repos',
//       path: '/gh/private',
//       enabled: true,
//       component: GHPrivate,
//       icon: PrivateIcon,
//     },
//     {
//       key: 'router-gh-public',
//       title: 'Public Repos',
//       tooltip: 'Public Repos',
//       path: '/gh/public',
//       enabled: false,
//       component: GHPublic,
//       icon: PublicIcon,
//     },
//   ],
// },
