import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        border: '2px solid red',
    }
}

class MessageIcon extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <img width="600" height="600" />
            </div>
        )
    }
}

export default withStyles(styles)(MessageIcon);