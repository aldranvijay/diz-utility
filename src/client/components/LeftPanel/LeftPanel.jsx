import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class LeftPanel extends Component{
    
    render() {
        const { classes } = this.props;
        return (
           <div>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <div>Left bar</div>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={9}>
                    <div>Right Bar</div>
                </Grid>
            </Grid>
            </div>    
        );
    }
}
export default withStyles(styles)(LeftPanel);