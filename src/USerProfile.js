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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop:10,
    paddingBottom:10,
  },
  textField: {
    color:"#943FAD",
  
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width:'auto',
    margin:10,
    marginTop:10,
  },
}));

export default function USerProfile() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <div style={{width:'550',heigth:'650'}}>
    <Grid style={{marginTop:5,paddingBottom:10}} container spacing={2} >
        <Grid item xs={8} >

        <Card variant="outlined">

            <div style={{display:'flex',paddingLeft:10,position:'relative',background:"#943FAD",
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


        <Grid container >


        <Grid item xs={12} sm={12} md={5}>
        <TextField
          id="standard-full-width"
          disabled
          color="#943FAD"
          className={classes.textField}
          label="Company (disabled)"
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
        <TextField
          id="margin-dense"
          label="Username"
          color="#943FAD"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          id="margin-dense"
          label="Email Address"
          color="#943FAD"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        

        <Grid item  xs={6}  >
        <TextField
          id="margin-dense"
          label="First Name"
          className={classes.textField}
          margin="dense"/>
        </Grid>

        <Grid item  xs={6}  >
        <TextField
          id="margin-dense"
          label="Last Name"
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


        <Grid item xs={12} sm={4}>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          label="City"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          id="margin-dense"
          label="Country"
          className={classes.textField}
          margin="dense"
        />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          id="margin-dense"
          label="Postal Code"
          className={classes.textField}
          margin="dense"
        />
        </Grid>

        <Grid item  xs={12}  >
        <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
        <TextField
          id="filled-full-width"
          label="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
          style={{ margin: 8 }}
          fullWidth
          multiline
          rows="5"
          margin="dense"
    
        
        />
        </Grid>
        <Button style={{display:'flex',flexDirection:'row-reverse',marginTop:10,background:"#943FAD",color:"white"}} variant="contained" color="#943FAD">Update Profile</Button>
      
        </Grid>
       
        </Card>
        </Grid>

        <Grid item xs={4} >
        <Card className={classes.root} variant="outlined">

            <div style={{display:'flex',paddingLeft:10,position:'relative',
            paddingTop:10,paddingBottom:10,flexDirection:'row',textAlign:'justify'}} >
                
                <div style={{width:'auto',textAlign: 'left',display: "flex",
                justifyContent:"center",
                            alignItems: "center",height:50,background:"#F39231"}}>
                <p style={{color:'white'}}>Edit Profile</p>
                <h3 style={{color:'white'}} >Complete your profile</h3>
                </div>
  
            </div>
        </Card>
        </Grid>

        </Grid>

        </div>
   
  );
}