import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from './logo.jpg';

const styles = {
  root: {
    flexGrow: 1,
  },
  topButton: {
    marginRight: 24,
  },
  image: {
    height: 50,
    marginRight: 24,
  }
};

class Template extends Component {

    render() {
        const { classes, onPageChange } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static" color="#00FF00">
                <Toolbar>
                  <a>
                  <img src={Logo} className={classes.image} onClick={() => onPageChange(0)}/>
                  </a>
                  {/* <Button color="inherit" className={classes.topButton} onClick={() => onPageChange(0)}>Home</Button> */}
                  <Button color="inherit" className={classes.topButton} onClick={() => onPageChange(1)}>Biography</Button>
                  <Button color="inherit" className={classes.topButton} onClick={() => onPageChange(2)}>Messages</Button>
                  <Button color="inherit" className={classes.topButton} onClick={() => onPageChange(3)}>Photos</Button>
                </Toolbar>
            </AppBar>
            {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(Template);