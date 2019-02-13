import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

class SignPanel extends Component{
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
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Product</InputLabel>
                                <Select
                                    native
                                    // value={this.state.age}
                                    // onChange={this.handleChange('age')}
                                    inputProps={{
                                    name: 'Product',
                                    id: 'age-native-simple',
                                    }}
                            >
                                    <option value="" />
                                    <option value={10}>Salesforce</option>
                                    <option value={20}>CRM</option>
                                    <option value={30}>Other</option>
                                </Select>
                            </FormControl>
               </Grid>
               <Grid item xs={12} justify='center' >
               <Grid container justify='center'  spacing='15px'>
                <Grid key='2' item>
                     <input
                        accept="pdf/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span" className={classes.button}>
                        Upload
                        <CloudUploadIcon className={classes.rightIcon} />
                        </Button>
                    </label>
                </Grid>
                <Grid key='3' item>
                     <Button variant="outlined" component="span" className={classes.button}>
                        Add
                        <PlaylistAdd className={classes.rightIcon} />
                        </Button>
                </Grid>
               </Grid>
               </Grid>
               <Grid item xs={12} justify='center' style={{marginTop:'2%'}}>
                <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>File</CustomTableCell>
                                <CustomTableCell align="right">Product</CustomTableCell>
                                <CustomTableCell align="right">Sign Reference </CustomTableCell>
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
export default withStyles(styles)(SignPanel);