// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
// import CodeIcon from '@material-ui/icons/CodeOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import FolderIcon from '@material-ui/icons/Folder';
// import PrivateIcon from '@material-ui/icons/LockOutlined';
// import PublicIcon from '@material-ui/icons/LockOpenOutlined';

// components
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
// import GHPrivate from '../pages/GitHub/PrivateRepo';
// import GHPublic from '../pages/GitHub/PublicRepo';
import Files from '../pages/Files';
import Settings from '../pages/Settings';

// define app routes
export const routes = [
  {
    key: 'router-home',
    title: 'Home',
    tooltip: 'Home',
    path: '/',
    enabled: true,
    component: Home,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: 'router-dashboard',
    title: 'Dashboard',
    tooltip: 'Dashboard',
    path: '/dashboard',
    enabled: true,
    component: Dashboard,
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
    component: Files,
    icon: FolderIcon,
    appendDivider: true,
  },
  {
    key: 'router-settings',
    title: 'Settings',
    tooltip: 'Settings',
    path: '/settings',
    enabled: true,
    component: Settings,
    icon: SettingsIcon,
  },
];
