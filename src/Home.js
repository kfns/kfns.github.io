import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GiftBox from './giftbox.png';

const styles = {
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        // border: '2px solid red',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    message: {
        textAlign: 'center',
        fontWeight: 'bolder',
        fontSize: 40,
    },
    image: {
        width: '25em',
        height: '25em',
    },
    clickHere: {
        margin: 16,
    }
}

class Home extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <span className={classes.message}>Happy Birthday,<br/>Kaivallya!!</span>
                <span className={classes.clickHere}>Click here to open your gift :))</span>
                <a href="https://google.com">
                    <img src={GiftBox} className={classes.image}/>
                </a>
            </div>
        );
    }
}

export default withStyles(styles)(Home);