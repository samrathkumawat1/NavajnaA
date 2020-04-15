import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import SimpleTable from "./SimpleTable";
import Grid from '@material-ui/core/Grid';

import TablePage from "./m_table";
import CardHeader from "./CardHeader";
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  root:{
      width: '100%',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      flex:'1',
      background:"#EEEEEE"
  },
  container:{
      maxHeight:400,
      padding:20,
      display:'flex',
      flexDirection:'column',
      flex:'1',
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
  fontSize: "0.8125rem"

}
,
tablecell1:{
  fontSize: "1em"
}
});
export default function Tables(props){
  const { container } = props;
  return (
        
        <Container fluid>
          
          <Grid item xs={12} sm={12} md={12} >
          <Card variant="outlined">
          <CardHeader 
        cardBackgroundColor="#9E42B0"
        headerTitle="Simple Table"
        actionTitle="Here is a subtitle for this table"
        />  

        <SimpleTable 
        tableHeaderColor="#9E42B0"
        hovers="no"
        tableHead={["ID", "Name", "Country", "City", "Salary"]}
        tableData={[
          ['1', "Samrath","India","Jaipur","$12,000"],
          ['2', "Samrath","India","Jaipur","$12,000"],
          ['3', "Samrath","India","Jaipur","$12,000"],
          ['4', "Samrath","India","Jaipur","$12,000"],
          ['5', "Samrath","India","Jaipur","$12,000"],
        ]}
        />
</Card>
          </Grid>
          

          <Grid style={{marginTop:20}} item xs={12} sm={12} md={12} >

          <CardHeader 
        cardBackgroundColor="#9E42B0"
        headerTitle="Table on Plain Background"
        actionTitle="Here is a subtitle for this table"
        /> 
        <SimpleTable 
        tableHeaderColor="#9E42B0"
        hovers="yes"
        tableHead={["ID", "Name", "Country", "City", "Salary"]}
        tableData={[
          ['1', "Samrath","India","Jaipur","$12,000"],
          ['2', "Samrath","India","Jaipur","$12,000"],
          ['3', "Samrath","India","Jaipur","$12,000"],
          ['4', "Samrath","India","Jaipur","$12,000"],
          ['5', "Samrath","India","Jaipur","$12,000"],
        ]}
        />
          </Grid>

          </Container>
          

        

  );
}
