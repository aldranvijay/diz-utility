import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },  
});

class HomeBar extends Component{
    
    render() {
        const { classes } = this.props;
        //const heightLeft = 500;
        return (
           <div>
               <Grid item xs={12}>
                   <Grid container  spacing='15px' style={{marginTop :'0%',justifyContent:'flex-end'}}>
                          <Grid key='1' item>
                                <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                                    <AccountCircle />
                                    <Typography variant="caption" gutterBottom align="center">
                                        Account
                                    </Typography>
                                </IconButton>
                            </Grid>
                            <Grid key='2' item>
                                <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
                                    <PowerSettingsNew />
                                    <Typography variant="caption" gutterBottom align="center">
                                        Logout
                                    </Typography>
                                </IconButton>
                            </Grid>
                    
                    </Grid>
               </Grid>
           </div>    
        );
    }
}
export default withStyles(styles)(HomeBar);