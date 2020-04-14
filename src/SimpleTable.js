import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 700,
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },

  tabelcell1:{
      color:"#333333"
  },
  tableResponsive:{
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));
export default function SimpleTable(props) {
  const{tableHead,tableHeaderColor,tableData}=props;
  const classes = useStyles();
  

  return (
    
  
      <div className={classes.tableResponsive}>
      <Table className={classes.table} aria-label="customized table">
        
          {tableHead !== undefined ?
          (<TableHead>
          <TableRow>
            {tableHead.map((props,key)=>{
              return(
                <TableCell 
                  key={key} 
                  style={{color:tableHeaderColor+"" }}
                   >
                    {props}
                </TableCell>);
            })}
            </TableRow>
          </TableHead>) : null}
          
        <TableBody>
          {tableData.map((props,key) => (
            <TableRow key={key}>
              {
                props.map((props,key)=>{
                  return(
                      <TableCell key={key} className={classes.tabelcell1} >
                        {props}
                      </TableCell>
                  );
                })
              }
              
              </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      
  
   
  );
}
