import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  table: {
    minWidth: '90%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2e804e',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class ViewPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false,
            formPanel: this.props.raw.formPanel
            };
     }

    render() {
         const { classes } = this.props;
        return (
           <Grid container justify='center'  >
               <Grid item xs={9} justify='center' style={{marginTop:'5%'}}>
               <Grid item xs={12} justify='center' >
               <Grid container justify='center'  spacing='15px'>
                <Grid key='1' item style={{marginTop:'0px'}}>
                     <FormControl className={classes.formControl} style={{marginTop:'8px'}}>
                                <InputLabel htmlFor="product-native-simple">Product</InputLabel>
                                <Select
                                    native
                                    // value={this.state.age}
                                    // onChange={this.handleChange('age')}
                                    inputProps={{
                                    name: 'Product',
                                    id: 'product-native-simple',
                                    }}
                            >
                                    <option value="" />
                                    <option value={10}>Salesforce</option>
                                    <option value={20}>CRM</option>
                                    <option value={30}>Other</option>
                                </Select>
                      </FormControl>
                </Grid>
                <Grid key='2' item style={{marginTop:'0px'}}>
                     <FormControl className={classes.formControl} style={{marginTop:'8px'}}>
                                <InputLabel htmlFor="keys-native-simple">Keys</InputLabel>
                                <Select
                                    native
                                    inputProps={{
                                    name: 'Keys',
                                    id: 'keys-native-simple',
                                    }}
                            >
                                    <option value="" />
                                    <option value={10}>Application ID</option>
                                    <option value={20}>Sign Reference</option>
                                    <option value={30}>Document Index</option>
                                </Select>
                      </FormControl>
                </Grid>
                <Grid key='3' item style={{marginTop:'0px'}}>
                     <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        style={{marginTop:'8px'}}
                      />
                </Grid>
                <Grid key='4' item>
                     <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
                        <Search />
                    </IconButton>
                </Grid>
               </Grid>
               </Grid>
               <Grid item xs={12} justify='center' style={{marginTop:'2%'}}>
                <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>File</CustomTableCell>
                                <CustomTableCell align="right">Product</CustomTableCell>
                                <CustomTableCell align="right">Sign Reference</CustomTableCell>
                                <CustomTableCell align="right">Uploaded On</CustomTableCell>
                                <CustomTableCell align="right">Action </CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>

                            </TableRow>
                        </TableBody>    
                </Table>
        
               </Grid>

              </Grid>
           </Grid>    
        );
    }
}

export default withStyles(styles)(ViewPanel);
