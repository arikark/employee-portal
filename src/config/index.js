// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import FolderIcon from '@material-ui/icons/Folder';

// components
import SignIn from '../pages/Auth/SignIn';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Files from '../pages/Files';
import Settings from '../pages/Settings';

// define app routes
export const privateRoutes = [
  {
    key: 'router-home',
    title: 'Home',
    tooltip: 'Home',
    path: '/home',
    enabled: true,
    component: <Home />,
    icon: HomeIcon,
  },
  {
    key: 'router-dashboard',
    title: 'Dashboard',
    tooltip: 'Dashboard',
    path: '/dashboard',
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
    path: '/files',
    enabled: true,
    component: <Files />,
    icon: FolderIcon,
    appendDivider: true,
  },
  {
    key: 'router-settings',
    title: 'Settings',
    tooltip: 'Settings',
    path: '/settings',
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
    tooltip: 'Sign In',
    path: '/auth/signin',
    component: <SignIn />,
  },
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