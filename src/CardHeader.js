import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  mainDiv:{
    display:'flex',
    paddingLeft:10,
    position:'relative',
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'column',
    textAlign:'justify',
    
  },
  innerDiv:{
      width:'auto',
      textAlign: 'left',
      display: "flex",
        justifyContent:"start",
        flexDirection:'column',
        alignItems: "start",
        height:50,
  },
  headerTitle:{
      color:'white',
  },
  pTitle:{
      color:'white'
  }
});
export default function CardHeader(props) {
  const classes = useStyles();
  const{headerTitle,actionTitle,cardBackgroundColor}=props;

  return (
      
    <Card variant="outlined">
        <div className={classes.mainDiv} style={{backgroundColor: cardBackgroundColor+""}} >
            <div className={classes.innerDiv}>
                <h5 className={classes.headerTitle}>{headerTitle}</h5>
                <p className={classes.pTitle} >{actionTitle}</p>
            </div>
  
        </div> 
    </Card>
    
  );
}
