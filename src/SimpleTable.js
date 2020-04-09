import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    
  },
  tabelcell:{
      color:"#9E42B0",
      
  },
  tabelcell1:{
      color:"#333333"
  }
});

function createData(id, name, country, city, salary) {
  return { id, name, country, city, salary };
}

const rows = [
  createData('1', "Samrath","India","Jaipur","$12,000"),
  createData('2', "Samrath","India","Jaipur","$12,000"),
  createData('4', "Samrath","India","Jaipur","$12,000"),
  createData('5', "Samrath","India","Jaipur","$12,000"),
  createData('6', "Samrath","India","Jaipur","$12,000"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      

    <div style={{width:'1150',heigth:'650'}}>
    <Grid  style={{marginTop:5,paddingBottom:10,padding:15}}  container spacing={2} >
        
    <Grid item xs={12} sm={6} md={3}>

    <Card  variant="outlined">

    <div style={{display:'flex',paddingLeft:10,position:'relative',background:"#943FAD",
    paddingTop:10,paddingBottom:10,flexDirection:'column',textAlign:'justify'}} >
        
        <div style={{width:'auto',textAlign: 'left',display: "flex",
        justifyContent:"start",flexDirection:'column',
                    alignItems: "start",height:50}}>
        <h5 style={{color:'white'}}>Simple Table</h5>
        <p style={{color:'#333333'}} >Here is a subtitle for this table</p>
        </div>

    </div>
</Card>
</Grid>
    <TableContainer  component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tabelcell} >ID</TableCell>
            <TableCell className={classes.tabelcell} align="right">Name</TableCell>
            <TableCell className={classes.tabelcell} align="right">Country</TableCell>
            <TableCell className={classes.tabelcell} align="right">City</TableCell>
            <TableCell className={classes.tabelcell} align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.tabelcell1} component="th" scope="row">
                {row.id}
              
              </TableCell>
              <TableCell className={classes.tabelcell1} align="right">{row.name}</TableCell>
              <TableCell className={classes.tabelcell1} align="right">{row.country}</TableCell>
              <TableCell className={classes.tabelcell1} align="right">{row.city}</TableCell>
              <TableCell className={classes.tabelcell1} align="right">{row.salary}</TableCell>
              <TableCell className={classes.tabelcell1} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
        </Grid>

        </div>
   
  );
}
