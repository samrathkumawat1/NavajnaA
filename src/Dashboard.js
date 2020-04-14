import React, { Component } from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CustomChart from './Chart';
import CustomCard from './Card';
import Table from "@material-ui/core/Table";
import Card from "@material-ui/core/Card";

import CustomTabs from './Tabs';
import SimpleTable from './SimpleTable';

import CardHeader from './CardHeader';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
        marginTop:theme.spacing(20),
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        marginTop:theme.spacing(100),
        paddingTop:20,
      },
    },
    text:{
      color:"#BBB",
      fontSize:10,
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        background:"#EEEEEE",
      },
    },
    
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      color:"#666666",
      fontFamily:'sans-serif',
      fontSize:17,
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
    toolbar: theme.mixins.toolbar,
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop:10,
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
  }));

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

export default function Dashboard1(props){
    const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div style={{display:'flex',flexDirection:'column',
        flex:'1',background:"#EEEEEE"}}>
          <CustomCard/>
          <CustomChart/>

          <Grid container style={{marginTop:20,paddingBottom:10} } spacing={2}>
              
              <Grid item xs={12} sm={12} md={6} >
                < CustomTabs/>
              </Grid>

              
               <Grid item style={{paddingBottom:10}} 
               xs={12} sm={12} md={6} >
               
               <Card variant="outlined">
                  <CardHeader 
                    cardBackgroundColor="#f49c31"
              headerTitle="Employees State"
              actionTitle="New employees on 15th September, 2016"
                  />  
                  <SimpleTable 
                    tableHeaderColor="#f49c31"
              tableHead={["ID", "Name", "Salary", "Country"]}
              tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea"]
                    ]}
                  />
                  </Card>
               </Grid>
               
          </Grid>
          
          
          
          
          </div>

          

    );
}
