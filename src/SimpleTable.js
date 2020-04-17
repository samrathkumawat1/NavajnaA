import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from 'react-bootstrap/Table'
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
      color:"#333333",
      
  },
  tableResponsive:{
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table_row:{
    '&&:hover': {
      backgroundColor: '#f5f5f5',
      color:'#ffffff',
      }
  }
}));
export default function SimpleTable(props) {
  const{tableHead,tableHeaderColor,tableData,hovers}=props;
  const classes = useStyles();

  return (
  
      <div className={classes.tableResponsive}>
      <Table className={classes.table} aria-label="customized table">
        
          {tableHead !== undefined ?
          (<thead>
          <tr>
            {tableHead.map((props,key)=>{
              return(
                <th 
                  key={key} 
                  style={{color:tableHeaderColor+"" }}
                   >
                    {props}
                </th>);
            })}
            </tr>
          </thead>) : null}
          
        <tbody>
          {tableData.map((props,key) => (

            hovers=="yes" )?
            (
            <tr key={key} className={classes.table_row} >
            {
              props.map((props,key)=>{
                return(
                    <td key={key} className={classes.tabelcell1} >
                      {props}
                    </td>
                );
              })
            }
            </tr>
            ):
            (
            <tr key={key}  >
            {
              props.map((props,key)=>{
                return(
                    <td key={key} className={classes.tabelcell1} >
                      {props}
                    </td>
                );
              })
            }
            </tr>
            )

          )}
        </tbody>
      </Table>
      </div>
      
  
   
  );
}
