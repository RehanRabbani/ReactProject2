import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));
const About = ()=>{
    const classes = useStyles();
   
        return(
            <div className="about-sty">
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
              This is a Food App!
              </Typography>
              <Typography component="p">
               Here you can find all meals categories with their recepies.
              </Typography>
            </Paper>
          </div>
        )
    
}
export default About;