import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, FormLabel } from 'react-bootstrap';
import {Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import {Redirect} from 'react-router';
import MainPage from './MainPage';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";


export default class LogInPage extends React.Component{
    
    submit=()=>{
       return console.log("hekk");
    }
    render(){
        return(

            <Grid container spacing={1} >
                <div  >
        <div style={{ width:600,height:600,display: "flex",flexDirection:'column', 
                        justifyContent: "center", alignItems: "center",background:'#EEEEEE'}}>

                    <div style={{marginTop:'40px',marginBottom:'70px',textAlign:'center',alignContent:'center'}} >
                        <label style={{color:'green',fontSize:50}}>Welcome</label>
                    </div>

                <form style={{margin:'20px'}}>
                    <FormGroup controlId="email">
                       <FormLabel style={{color:'#666666'}}>Email Address</FormLabel>
                        <FormControl type="email" />
                    </FormGroup>

                    <FormGroup controlId="password">
                    <FormLabel style={{color:'#666666'}}>Password</FormLabel>
                        <FormControl type="password" />
                    </FormGroup>

                    <div style={{marginTop:'40px',textAlign:'end',alignContent:'end'}} >
                        <label style={{color:'#666666'}}>Forgot Password ?</label>
                    </div>

                    <div style={{marginTop:'20px',textAlign:'center',alignContent:'center'}} >
                    <Button block onClick={this.submit}>Login</Button>
                    </div>

                   

                </form>

    </div>
    </div>
                  
    </Grid>
        );
    
    }
}
