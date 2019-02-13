import React, { Component }  from 'react';
import HomeBar  from '../AppBar/HomeBar.js';
import FormPanelIndex  from '../FormPanel/FormPanelIndex.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import Info from '@material-ui/icons/Info';
import Group from '@material-ui/icons/Group';
import Person from '@material-ui/icons/Person';
import Apps from '@material-ui/icons/Apps';
import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import Help from '@material-ui/icons/Help';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
   icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
  button: {
    margin: theme.spacing.unit,
    width: '85%',
    height: '28%',
    fontSize: 'x-small',
    fontWeight: 'bold',
    background:'#fff',
  },
  leftPanel: {
    //backgroundImage: `url('https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
    height: window.outerHeight,
    opacity:.8,
    background: '#93bf98',
    boxShadow:'0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  utilCard: {
    width:'25%',
    height: window.outerHeight/10,
    opacity:.8,
    background: '#fff', 
    boxShadow:'0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  rightPanel: {
    height: window.outerHeight - 75,
    opacity:.8,
    background: '#fff',
    boxShadow:'0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
   rightHeader: {
    height: 75,
  },
  paper: {
    width:125,
    height: window.outerHeight/6,
    marginLeft: 10,
  },
});

class HomeLayout extends Component{

    constructor(props){
        super(props);
        this.state = {
            isToggleOn:false,
            formPanel:null
        };
       // this.handleClick = this.handleClick.bind("null");
    }

     handleClick(arg) {
        //alert('clicked '+arg)
        this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        formPanel: arg
        }));
    }
    
    render() {
        const { classes } = this.props;
        //const heightLeft = 500;
        return (
           <div>
            <Grid container spacing={24} style={{background:'#fdfdfd'}}>
                <Grid item xs={4}>
                     <Grid item xs={12}>
                        <Grid container  spacing='15px' style={{marginTop :'35%'}}>
                            <Grid key='1' item>
                                <Paper className={classes.paper}>
                                <PlaylistAddCheck className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "sign")} className={classes.button}>
                                    Sign
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid key='2' item>
                                <Paper className={classes.paper}>
                                <PictureAsPdf className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "view")} className={classes.button}>
                                    View
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid key='3' item>
                                <Paper className={classes.paper}>
                                <Info className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "sign_apis")} className={classes.button}>
                                    APIs
                                </Button>
                                </Paper>
                            </Grid>

                        </Grid>
                        <Grid container spacing='15px' style={{marginTop :'5%'}}>
                            
                            <Grid key='1' item>
                                <Paper className={classes.paper}>
                                <Group className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "group")}  className={classes.button}>
                                    Group
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid key='2' item>
                                <Paper className={classes.paper}>
                                <Person className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "user")} className={classes.button}>
                                    User
                                </Button>
                                </Paper>
                            </Grid>
                           

                        </Grid>

                        <Grid container spacing='15px' style={{marginTop :'5%'}}>
                            
                            <Grid key='1' item>
                                <Paper className={classes.paper}>
                                <Apps className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "apps")} className={classes.button}>
                                    Apps
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid key='2' item>
                                <Paper className={classes.paper}>
                                <DeveloperBoard className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "setting")} className={classes.button}>
                                    Setting
                                </Button>
                                </Paper>
                            </Grid>
                            <Grid key='3' item>
                                <Paper className={classes.paper}>
                                <Help className={classes.icon} />
                                <Button variant="outlined" color="Primary" onClick={this.handleClick.bind(this, "help")} className={classes.button}>
                                    Help
                                </Button>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid item xs={12}>
                       <div className={classes.rightHeader}>
                       <HomeBar/>
                       </div>
                    </Grid>
                    <Grid item xs={12}>
                       <div className={classes.rightPanel}>
                        {this.state.isToggleOn ? <FormPanelIndex raw={this.state} /> : ''}
                       </div>
                    </Grid>
                </Grid>
            </Grid>
            </div>    
        );
    }
}
export default withStyles(styles)(HomeLayout);