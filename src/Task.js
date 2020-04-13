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

import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles({
  table: {
    padding:10,
    
  },
  tabelcell:{
      color:"#9E42B0",
      
  },
  tabelcell1:{

  verticalAlign: "middle",
  border: "none",
  height:60,
  lineHeight: "1.42857143",  
  color: '#666666',
  marginTop: "0px",
  minHeight: "auto",
  padding:"10px",
  fontWeight: "200",
  fontSize:13,
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  marginBottom: "3px",
  textDecoration: "none",
  "& small": {
    color: '#666666',
    fontWeight: "200",
    lineHeight: "1",
    fontSize:13,
  }
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0"
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px"
  },
  edit: {
    backgroundColor: "transparent",
    color: '#9c27b0',
    boxShadow: "none"
  },
  close: {
    backgroundColor: "transparent",
    color: '#f44336',
    boxShadow: "none"
  },
  checked: {
    color: "#9c27b0" 
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    borderColor:'#9E42B0',
    border: "1px solid",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "10px",
    borderColor:'#9E42B0',
    border: "1px solid ",
    borderRadius: "3px"
  },
  textcolor:{
  color: '#666666',
  marginTop: "0px",
  minHeight: "auto",
  fontWeight: "200",
  fontSize:13,
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  marginBottom: "3px",
  textDecoration: "none",
  "& small": {
    color: '#666666',
    fontWeight: "200",
    lineHeight: "1",
    fontSize:13,
  }
},
});

function createData(id,data) {
  return {id, data};
}

const bugs = [
  createData('1',"Sign contract for 'What are conference organizers afraid of?' "),
  createData('2',"Lines From Great Russian Literature? Or E-mails From My Boss?"),
  createData('3',"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"),
  createData('4',"Create 4 Invisible User Experiences you Never Knew About"),
];

const website = [
  createData('1',"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit "),
  createData('2',"Sign contract for What are conference organizers afraid of?"),
  
];


const server = [
  createData('1',"Lines From Great Russian Literature? Or E-mails From My Boss?"),
  createData('2',"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit "),
  createData('3',"Sign contract for What are conference organizers afraid of?"),
  
];


export default function Task(props) {
  const classes = useStyles();
  const { tasksIndexes, tasks} = props;

  //const [checked, setChecked] = React.useState([]);
  const [checked, setChecked] = React.useState([...props.checkedIndexes]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  let Cell;
  if(tasks=="Bugs")
  {
      Cell=bugs;
  }
  else if(tasks=="Website")
  {
    Cell=website;
  }
  else if(tasks=="Server")
  {
    Cell=server;
  }

  return (
      

    <div >
    <Grid  style={{paddingBottom:10}}  container spacing={2} >
        
    <Grid item xs={12} sm={6} md={3}>
</Grid>
    <TableContainer >
      <Table className={classes.table} aria-label="customized table">
       
          
        <TableBody>
          {Cell.map((row) => (
            <TableRow key={row.id}>
              
              <TableCell className={classes.tabelcell1} component="th" scope="row">
                  <Checkbox
                    tabIndex={-1}
                    onClick={() => handleToggle(1)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{checked: classes.checked}}
                    />
              </TableCell>

              <TableCell className={classes.tabelcell1} >
                  { row.data}
              </TableCell>

              <TableCell className={classes.tabelcell1} >

                <div style={{display:'flex',flex:1,flexDirection:'row'}}>
                <Tooltip
                    id="tooltip-top"
                    title="Edit Task"
                    placement="top"
                    classes={{tooltip:classes.tooltip}}>
                    <IconButton aria-label="Edit" className={classes.tableActionButton}>
                    <Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                    </IconButton>
                </Tooltip>
                <Tooltip
                    id="tooltip-top-start"
                    title="Remove"
                    placement="top"
                    classes={{tooltip:classes.tooltip}}>
                    <IconButton aria-label="Close" className={classes.tableActionButton}>
                    <Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                    </IconButton>
                </Tooltip>
                </div>
              </TableCell>
              
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
        </Grid>

        </div>
   
  );
}
