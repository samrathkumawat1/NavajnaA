import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import Grid from "@material-ui/core/Grid";
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import UpdateIcon from '@material-ui/icons/Update';
import StoreIcon from '@material-ui/icons/Store';
import InfoIcon from '@material-ui/icons/Info';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import Colors from './Colors';

import avatar from "./assets/image.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop:10,
    paddingBottom:10,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color:theme.spacing('#9E42B0'),
    marginTop:10,
  },
  cardAvater:{
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    marginTop:20,
    overflow: "hidden",
    padding: "0",
  },
  cardCategory: {
    color: "#C7C7C7",
    marginTop: 25,
    marginBottom: 15,
    fontSize: "11px",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#6C7581",
    marginTop: 15,
    marginBottom: 15,
    minHeight: "auto",
    fontWeight: "300",
    fontSize: "17px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none"
  },
  description: {
    color: "#C7C7C7",
    marginTop: 15,
    marginBottom: 15,
    minHeight: "auto",
    fontWeight: "300",
    fontSize: "12px",
    alignItems:'center',
    marginLeft:40,
    marginRight:40,
    textAlign: 'center',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none"
  }

}));

export default function USerProfile() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <div class="container-fluid" style={{marginTop:15}} >
    <Grid   container spacing={2} >
        <Grid item xs={12} sm={12} md={8}>

        <Card variant="outlined">

            <div style={{display:'flex',paddingLeft:10,paddingRight:10,position:'relative',background:"#943FAD",
            paddingTop:10,paddingBottom:10,flexDirection:'column',textAlign:'justify'}} >
                
                <div style={{width:'auto',textAlign: 'left',display: "flex",
                justifyContent:"start",flexDirection:'column',
                            alignItems: "start",height:50}}>
                <h5 style={{color:'white'}}>Edit Profile</h5>
                <p style={{color:'white'}} >Complete your profile</p>
                </div>
  
            </div>
        </Card>

        
          <Card className={classes.root} variant="outlined">
            <Grid container  style={{marginTop:5,paddingBottom:10,paddingLeft:10,paddingRight:10}}>


        <Grid item xs={12} sm={12} md={5}>
        <TextField
          id="standard-full-width"
          disabled
          className={classes.textField}
          label="Company (disabled)"
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
        <TextField
          id="margin-dense"
          label="Username"
          color=""
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={5}>
        <TextField
          id="margin-dense"
          label="Email Address"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        

        <Grid item  xs={12} sm={12} md={6}  >
        <TextField
          id="margin-dense"
          label="First Name"
          className={classes.textField}
          margin="dense"/>
        </Grid>

        <Grid item  xs={12} sm={12} md={6}>
        <TextField
          id="margin-dense"
          label="Last Name"
          color={Colors.main}
          className={classes.textField}
          margin="dense"/>
        </Grid>
          
        <Grid item  xs={12}  >
        <TextField
          id="filled-full-width"
          label="Address"
          style={{ margin: 8 }}
          fullWidth
          margin="dense"
    
        
        />
        </Grid>


        <Grid item xs={12} sm={12} md={4}>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          label="City"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <TextField
          id="margin-dense"
          label="Country"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <TextField
          id="margin-dense"
          label="Postal Code"
          className={classes.textField}
          margin="dense"
        />
        </Grid>

        <Grid item  xs={12} sm={12} md={12}  >
        <InputLabel style={{ marginLeft:8,marginTop:30,color: "#AAAAAA" }}>About me</InputLabel>
        <TextField
          id="filled-full-width"
          label="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
          style={{ margin: 10 ,paddingTop:25}}
          fullWidth
          multiline
          rows="5"
          margin="dense"
    
        
        />
        </Grid>
        <div style={{display:'flex',flex:1,flexDirection:'row-reverse',marginTop:10}} >
        <Button style={{marginTop:10,background:"#943FAD",color:"white"}} variant="contained" >Update Profile</Button>
        </div>
        </Grid>
       
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4} >
        <Card profile>
            <Card profile className={classes.cardAvater}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar}  />
              </a>
            </Card>
            <Card style={{alignItems:'center',textAlign: 'center',
    justify: 'center',
    alignContent: 'center',}} profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round style={{marginTop:10,marginBottom:20,background:"#943FAD",color:"white"}} round >
                Follow
                </Button>
            </Card>
          </Card>
        </Grid>

        </Grid>

        </div>
   
  );
}