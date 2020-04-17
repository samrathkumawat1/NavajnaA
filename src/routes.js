
import Dashboard1 from './Dashboard';
import USerProfile from './USerProfile';
import Tables from './Tables';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListItem from '@material-ui/core/ListItem';

const dashboardRoutes = [

    {
      path: "/dashboard",
      name: "Dashboard",
      icon: DashboardIcon,
      component: Dashboard1,
      layout: "/admin"
    },
    
    {
      path: "/USerProfile",
      name: "User Profile",
      icon: PersonOutlineIcon,
      component: USerProfile,
      layout: "/admin"
    },
    {
      path: "/TableList",
      name: "Table List",
      icon: ListItem,
      component: Tables,
      layout: "/admin"
    },
  ];
  export default dashboardRoutes;
