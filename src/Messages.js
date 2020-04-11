import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const styles = {
    root: {
        display: 'flex',
        // flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        margin: '3%',
        // textAlign: 'center',
        // border: '2px solid red',
        width: '25%',
    },
    image: {
        // transform: 'rotate(90deg)',
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    viewMessage: {
        fontWeight: 'bolder',
    },
    dialogTitle: {
        borderBottom: '1px solid black',
        margin: 8,
    },
    messageContent: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        marginTop: 0,
    }
}

class Messages extends Component {

    messages = [
        {
            name: 'Ananya',
            content: `Happy happy birthday kaivallya!!
            It sucks that we’re ten minutes from each other and still can’t celebrate your birthday together :( But until we can, we’ll keep up our routine from when we’re on different sides of the world. You’re still one of the nicest people i know, and i stand by what i said last year: you’ll always have an ear to vent to, advice if you want it and distraction when you need it. You’re legit one of the best friends I have, and one of the best people I ever met. I’m so grateful for Hogwarts Express and HFS MUN, because without them you wouldn’t be in my life. Thank you for always being there, and here’s to more long fandom chats, tea spilling sessions and the conversations about everything and nothing that could go on forever. I hope we never run out of things to talk about, and I love you <3
            -Ananya
            `
        },
        {
            name: 'Ankita'
        },
        {
            name: 'Kesav',
            content: `Kaivallya!

            Hppy bday bst frn,,,,,,,!! It sucks that you’ll be celebrating this birthday in quarantine but it’s still a big moment! The beginning of #20/20vision! It’s been a blast having you in my life for the last two (!!) years and you continue to amaze me everyday just by existing and being the sweet, caring, funny, and exciting person you are. I'm so grateful that we found so many things to bond over and hanging out with you never gets boring. From B99 to TPC, I wouldn't trade the world for any part of our friendship. You keep me grounded when I'm up and afloat when I'm down, and I can only hope to give you a tiny fraction of the happiness you give me. You've had an amazing first 20 years, and I can't wait to see you tackle the next phase of your life. I wish you all the best with everything and I hope you know I'll always be by your side :))
            
            **digital hug**, Kesav <3
            `
        },
        {
            name: 'Maya'
        },
        {
            name: 'Pakhee'
        },
        {
            name: 'Priya',
            content: `omgggg kai!!!!!!!!
            happy 20th birthday! im so sorry you have to spend this special time in quarantine :(( but I promise you that once this is all over we will throw you the big, amazing celebration that you deserve. you're such a sweet, amazing friend, and every day I’m so thankful for your presence in my life. you're always there when I need you, and you’re the friend who always checks in on us and makes sure we’re all okay. i've never met anyone as caring as you. we only really became close last october-ish, but even in this short time we’ve made so many amazing memories together. my Laya experience would definitely not have been the same without you, and you are 99% of the reason that I have become more brown washed in college and I totally appreciate that. Ilysmmmmmm <3
            ~priya
            `
        },
        {
            name: 'Rishi',
            content: `KAIIIIIII
            Happy birthday wtffff youve become old. 2 decades is a huge milestone so CONGRATULATIONS!! I wish we were still in Berkeley so that I could’ve showed up at your doorstep brovie style and thrown cake at you and had so much fun but fucking covid. Regardless, HAPPY BIRTHDAY and i will call you multiple times to wish you and see how you’re doing. On a more serious note, I am so grateful that I chance encountered you in Ankita’s room when we were watching K3G and we hit it off so well and I am so lucky to have met someone as loyal, honest, unfiltered and fucking amazing as you :). I don’t know what my life at Berkeley would have been like if I hadn’t met you and I don’t want to imagine it either because you’ve just made me enjoy college life so much. So here’s to more spontaneous “study sessions”, movie nights and randoming voice and video calling just because we want to do weird and/or random shit. Happy Birthday and hope you publish another book, this time with me as your protagonist. Also let’s go hiking next sem cuz we’ve been putting it off for way too long lol.
            LOVE<3
            Rishi :)
            `
        },
        {
            name: 'Sathvik',
            content: `HAPPY HAPPY BIRTHDAY JI
            I hope you are having a great [for quarantine] time at home celebrating, and your birthday is filled with lots of books, music, fun, and mithai of course. Hope you throw a RaGer when you get back to Cal hehehehe.  I can’t believe we’ve only been friends for two years, and I appreciate our mutual fascination over Star Wars, books, music, B(T?)ollywood and so on. From bonding over singing ghazals during a mic test to trying[emphasis on trying] to sing that same ghazal together, we’ve shared a lot of great moments. Thanks for always checking in when things aren’t going too well and celebrating when they are. Hope you have a good birthday and an even better 20th year.
            
            Riyaaz alliance zindabad,
            Sathvik
            `
        },
        {
            name: 'Swathi'
        },
        {
            name: 'Ujjaini'
        }
    ]

    state = {
        open: -1,
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {this.messages.map((msg, i) => {
                    const path = `./message_photos/${msg.name.toLowerCase()} Cropped.jpg`;
                    return (
                        <Card className={classes.card} variant="outlined">
                            <CardHeader title={msg.name}/>
                            <CardContent>
                                <img
                                className={classes.image}
                                src={require('' + path)}
                                width='100%'
                                // height='100em'
                                />
                            </CardContent>
                            <CardActions className={classes.actions}>
                                <Button onClick={() => {
                                    this.setState({
                                        open: i,
                                    })
                                }}>
                                    <span className={classes.viewMessage}>View Message</span>
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
                {
                    this.messages.map((msg, i) => {
                        let { name, content } = msg;
                        if (!content) content = '(Message here)';
                        let newText = content.split('\n').map((item, i) => {
                            return <p key={i}>{item}</p>;
                        });
                        return (
                        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title"
                        open={this.state.open === i}>
                            <DialogTitle className={classes.dialogTitle}>{name}</DialogTitle>
                            <hr />
                            <div className={classes.messageContent}>
                                {newText}
                            </div>
                        </Dialog>
                        );
                    })
                }
            </div>
        );
    }

    handleClose = () => {
        this.setState({
            open: -1,
        })
    }
}

export default withStyles(styles)(Messages);