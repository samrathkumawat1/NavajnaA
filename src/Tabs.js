import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


import BugReportIcon from '@material-ui/icons/BugReport';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CodeIcon from '@material-ui/icons/Code';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {

    const wraper_style = {
        wraper:{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'},
    
    }; 
  return (
    <Tab
    
        indicatorColor="#9E42B0"
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}




const customTabsStyle = {
    cardTitle: {
      float: "left",
      padding: "10px 10px 10px 0px",
      lineHeight: "24px"
    },
    cardTitleRTL: {
      float: "right",
      padding: "10px 0px 10px 10px !important"
    },
    displayNone: {
      display: "none !important"
    },
    tabsRoot: {
      minHeight: "unset !important",
      overflowX: "visible",
      "& $tabRootButton": {
        fontSize: "0.875rem"
      }
    },
    tabRootButton: {
      minHeight: "unset !important",
      minWidth: "unset !important",
      width: "unset !important",
      height: "unset !important",
      maxWidth: "unset !important",
      maxHeight: "unset !important",
      padding: "10px 15px",
      borderRadius: "3px",
      lineHeight: "24px",
      border: "0 !important",
      color: '#ffffff' + " !important",
      marginLeft: "4px",
      "&:last-child": {
        marginLeft: "0px"
      }
    },
    tabSelected: {
      backgroundColor: '#AE57C2',
      transition: "0.2s background-color 0.1s"
    },
    tabWrapper: {
      display: "inline-block",
      minHeight: "unset !important",
      minWidth: "unset !important",
      width: "unset !important",
      height: "unset !important",
      maxWidth: "unset !important",
      maxHeight: "unset !important",
      fontWeight: "500",
      fontSize: "12px",
      marginTop: "1px",
      "& > svg,& > .material-icons": {
        verticalAlign: "middle",
        margin: "-1px 5px 0 0 !important"
      }
    }
  };


  const useStyles = makeStyles(customTabsStyle);
export default function CustomTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="scrollable"
          value={value}
          
          style={{backgroundColor:'#9E42B0',indicatorColor:"#9E42B0"}}
          onChange={handleChange}
          indicatorColor='#9E42B0'
          
          scrollButtons="auto"
          
        >
          <LinkTab label={<div> <BugReportIcon style={{marginLeft:'3dp',marginTop:'5dp'}} />  Bugs</div>} 
                    style={{fontSize:12}} href="/drafts" {...a11yProps(0)} />
          <LinkTab label={<div> <CodeIcon style={{marginLeft:'3dp',marginTop:'5dp'}} />  Website</div>} 
                    style={{fontSize:11}}   href="/trash" {...a11yProps(1)} />
          <LinkTab label={<div> <CloudQueueIcon style={{marginLeft:'3dp',marginTop:'5dp'}} />  Server</div>} 
                    style={{fontSize:11}} href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Three
      </TabPanel>
    </div>
  );
}