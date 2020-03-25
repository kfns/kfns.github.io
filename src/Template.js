import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  topButton: {
    marginRight: 24,
  },
};

class Template extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Button color="inherit" className={classes.topButton}>Home</Button>
                <Button color="inherit" className={classes.topButton}>Biography</Button>
                <Button color="inherit" className={classes.topButton}>Why Kaivallya is Awesome</Button>
                <Button color="inherit" className={classes.topButton}>Photos</Button>
                </Toolbar>
            </AppBar>
            {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(Template);