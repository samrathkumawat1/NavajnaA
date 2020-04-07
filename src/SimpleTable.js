import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root:{
        width: '100%',
        background:"#EEEEEE"
    },
    container:{
        maxHeight:440,
        padding:20,
        background:"#EEEEEE"
    },
  table: {
    marginBottom: "0",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tablecell:
  {
    color:"#9E42B0",
    fontSize: "0.8125rem",
    minWidth:170,

  }
  ,
  tablecell1:{
    fontSize: "1em",
    minWidth:170,
  }
});

function createData(id, name,country, city, salary) {
  return { id,name, country, city, salary };
}

const rows = [
  createData('1',"Samrath", "India","Jaipur","$12,000"),
  createData('2',"Tom", "India","Jaipur","$12,000"),
  createData('3',"Abhijeet", "India","Jaipur","$12,000"),
  createData('4',"Deepika", "India","Jaipur","$12,000"),
  createData('5',"Amit", "India","Jaipur","$12,000"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    
    
          
    <Paper className={classes.root}>
    <TableContainer className={classes.container} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow xs={12} sm={6} md={3}>
            <TableCell className={classes.tablecell} >ID</TableCell>
            <TableCell className={classes.tablecell} align="right">Name</TableCell>
            <TableCell className={classes.tablecell} align="right">Country</TableCell>
            <TableCell className={classes.tablecell} align="right">City</TableCell>
            <TableCell className={classes.tablecell} align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
            <TableCell className={classes.tablecell1} component="th" scope="row">{row.id}</TableCell>
              
              <TableCell className={classes.tablecell1}  align="right">{row.name}</TableCell>
              <TableCell className={classes.tablecell1} align="right">{row.country}</TableCell>
              <TableCell className={classes.tablecell1} align="right">{row.city}</TableCell>
              <TableCell className={classes.tablecell1} align="right">{row.salary}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
      
  );
}