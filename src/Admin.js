import React from 'react';
import clsx from 'clsx';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink
  } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Dashboard1 from './Dashboard';
import USerProfile from './USerProfile';
import Tables from './Tables';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    background:'#EEEEE',
    ...theme.mixins.toolbar
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    color:'red',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color:'black',
  },
  menuButtonHidden: {
    display: 'none',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background:"#EEEEEE",
    },
    background:'#EEEEEE',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      marginTop:theme.spacing(100),
      paddingTop:20,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop:60,
    backgroundColor:'#ffffff',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  text:{
    color:"#BBB",
    fontSize:10,
  },
  
  
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  
  title: {
    flexGrow: 1,
    color:"#666666",
    fontFamily:'sans-serif',
    fontSize:17,
  },
  
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    padding:20,
    marginTop:20,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  selectedItemStyle:{
    backgroundColor: "turquoise !important",
    color: "white",
    fontWeight: 600
  },
  inactive: {
    backgroundColor: "#ffffff",
}
,
active: {
    backgroundColor: 'red',
  },
  menu_t:{
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      display: "block",
      clear: "both",
      fontWeight: "380",
      color:'#666666',
      height: "unset",
      minHeight: "unset",
      '&&:hover': {
        backgroundColor: '#9E42B0',
        color:'#ffffff',
        }
  },
  nav_:{
      '&&:hover': {
        backgroundColor: '#f5f5f5',
        color:'#000000',
        },
        color:'#666666',

  }

}));
  
export default function Admin(props) {
const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [openProfile, setOpenProfile] = React.useState(null);
  const [title, setTitle] = React.useState("Dashboard");
  const [color, setColor] = React.useState(0);

  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log("selected Item :"+event.target.innerText);
    setTitle(event.target.innerText+"");
    setColor(1);
    

  }
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

    const mainListItems=(
        <div>
    
          <NavLink to="/" >  
          <MenuItem 
          
          className={classes.nav_}
        
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
          
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="Dashboard" />
          
          </MenuItem>
    
          </NavLink>      
    
          <NavLink to="/USerProfile" >
    
          <ListItem 
          className={classes.nav_}
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon>
              <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="User Profile" />
          </ListItem>
          </NavLink> 
          
    
        <NavLink to="/TableList" >
          <ListItem button
          className={classes.nav_}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon>
              <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="Table List" />
          </ListItem>
          </NavLink>
    
        <NavLink to="/Notification" >
          <ListItem button
          className={classes.nav_}
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon> 
            <ListItemText disableTypography style={{fontFamily:'sans-serif',
                            fontSize:14,color:'#666666'}} primary="Notifications" />
          </ListItem>
          </NavLink>
    
          <ListItem button
          className={classes.nav_}
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemIcon>
              <RoomOutlinedIcon/>
            </ListItemIcon>
            <ListItemText  disableTypography style={{fontFamily:'sans-serif',
                            fontSize:'10',color:'#666666'}} primary="Maps" />
          </ListItem>
    
        </div>
      
    );

  return (
      <Router>
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed"className={classes.appBar} >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>

          <div style={{display:'flex'}}>
          <IconButton onClick={handleClickProfile} primary  color="black">
                <PersonOutlineIcon/>
          </IconButton>

          <Popper
            open={Boolean(openProfile)}
            anchorEl={openProfile}
            transition
            disablePortal>
            {({TransitionProps,placement})=>(
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >

                <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                        className={classes.menu_t}
                        onClick={handleCloseProfile}>
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.menu_t}>
                      Settings
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.menu_t}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
              </Grow>)}
              </Popper>

          </div>
        </Toolbar>

      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
    
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {mainListItems}
          </Drawer>
        </Hidden>
                
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {mainListItems}
            
          </Drawer>
        </Hidden>
      </nav>
      <main style={{background:"#EEEEEE   ",padding:30,paddingTop:80}}>
        <Switch>
              <Route path="/" exact component={Dashboard1} />
              <Route path="/USerProfile" component={USerProfile} />
              <Route path="/TableList" component={Tables} />
        </Switch>

      </main>

    </div>
    </Router>
  );
}
