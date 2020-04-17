import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, FormLabel } from 'react-bootstrap';
import {Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormGroup, FormControl } from "react-bootstrap";
import {Redirect} from 'react-router';
import MainPage from './MainPage';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background: '#9E42B0',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px ',
    },
    label: {
      textTransform: 'capitalize',
    },
  });

  export default function LogInPage(props){
    
    const classes = useStyles();
    const [toDashboard, setToDashboard] = React.useState(false);

    const submit=()=>{
        console.log("clicked");
        setToDashboard(true);
    }
    if (toDashboard === true) {
        return <Redirect to='/Dashboard' />
      }
    
        return(

            <Grid item  xs={12} sm={12} md={12}  >
                <div style={{display: "flex", height:'100vh',
                                flexDirection:'column',justifyContent: "center",
                                 alignItems: "center",background:'#fffff'}}>

                                 
                    <div style={{flexDirection:'column'}}>
                    <div style={{marginTop:20,marginBottom:'70px',
                                    textAlign:'center',alignContent:'center'}} >
                        <label style={{color:'#9E42B0',fontSize:50}}>Welcome</label>
                    </div>

                    
                    <form onSubmit={submit} style={{padding:'40px'}}>
                    <FormGroup controlId="email">
                       <FormLabel style={{color:'#666666'}}>Email Address</FormLabel>
                        <FormControl type="email" />
                    </FormGroup>

                    <FormGroup controlId="password">
                    <FormLabel style={{color:'#666666'}}>Password</FormLabel>
                        <FormControl type="password" />
                    </FormGroup>

                    <div style={{marginTop:'20px',textAlign:'end',alignContent:'end'}} >
                        <label style={{color:'#666666'}}>Forgot Password ?</label>
                    </div>

                    <div style={{marginTop:'50px'
                    ,textAlign:'center',alignContent:'center'}} >
                     <Button type="submit" classes={{
                        root: classes.root, 
                         label: classes.label,
                        }}>
                      LogIn
                    </Button>

                    </div>
                </form>
                
                </div>
                </div>

                </Grid>
                  
        );
    
}
