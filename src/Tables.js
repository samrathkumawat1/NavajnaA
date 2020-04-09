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

import TablePage from "./m_table";


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
      <div style={{width:'100%'}} >
        <SimpleTable/>
        
        </div>

  );
}
