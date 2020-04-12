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
            name: 'Amanda',
            content: `Happy Birthday Kai!!!
            Thanks for being such an incredible friend!!! I always love running into you & when you knock on my door!!! #FromDavidsontoBlackwell. Youre such an incredible person overall: sweet, confident, articulate, HELLA smart, beautiful, & one of the kindest souls ever!! I’m so glad that I met you & I hope we continue hanging out with Brovie squad and talking about Bollywood movies!! <3 Seeing you and talking to you always brightens my day, & your energy is infectious!! Love you to the moon & back and I hope you have the best birthday ever!! Can’t want to hang out with you next semester!!!
            Love, 
            Amanda Wong
            `
        },
        {
            name: 'Ananya',
            content: `Happy happy birthday kaivallya!!
            It sucks that we’re ten minutes from each other and still can’t celebrate your birthday together :( But until we can, we’ll keep up our routine from when we’re on different sides of the world. You’re still one of the nicest people i know, and i stand by what i said last year: you’ll always have an ear to vent to, advice if you want it and distraction when you need it. You’re legit one of the best friends I have, and one of the best people I ever met. I’m so grateful for Hogwarts Express and HFS MUN, because without them you wouldn’t be in my life. Thank you for always being there, and here’s to more long fandom chats, tea spilling sessions and the conversations about everything and nothing that could go on forever. I hope we never run out of things to talk about, and I love you <3
            -Ananya
            `
        },
        {
            name: 'Ankita',
            content: `Kai hi!hi! Happy birthday! janmadin mubarak ho ho ho :)
            I’m so happy I had a bubbly girl next door who kept coming and knocking on my door while I was taking naps!
            There’s nobody else who’s mom I'd rather have brunch with, and nobody else to whom I can text “hi i need to rant” every couple of days. You’re so kind and present such a lovely judgement-free zone and also are so whacky in general that I’m always down to spill tea with you. Thank you for trying your best with the saree for bengali wedding night and singing ay tobe sohochori to validate my culture and for generally being the one person with whom I can have the most random conversations <3 
            Lots of pyaar,
            Ankita
            `
        },
        {
            name: 'Kesav',
            content: `Kaivallya!

            Hppy bday bst frn,,,,,,,!! It sucks that you’ll be celebrating this birthday in quarantine but it’s still a big moment! The beginning of #20/20vision! It’s been a blast having you in my life for the last two (!!) years and you continue to amaze me everyday just by existing and being the sweet, caring, funny, and exciting person you are. I'm so grateful that we found so many things to bond over and hanging out with you never gets boring. From B99 to TPC, I wouldn't trade the world for any part of our friendship. You keep me grounded when I'm up and afloat when I'm down, and I can only hope to give you a tiny fraction of the happiness you give me. You've had an amazing first 20 years, and I can't wait to see you tackle the next phase of your life. I wish you all the best with everything and I hope you know I'll always be by your side :))
            
            **digital hug**, Kesav <3
            `
        },
        {
            name: 'Maya',
            content: `Dear Kaivallya,

            I wanted to wish you a very very happy birthday! I'm sorry about your birthday in quarantine, but knowing you and your family you guys will make it something special to always remember. I, for one, tell so many stories about you to people around me that they are borderline annoyed, about us being sassy and stupid jokes and of course, the dodgeball scene in Enchantress of Elektra. Thank you for always being a call away and for checking in on my when I least expect it and when I need it most. I miss you, and hope I see you again soon (and we'll have the PARTY whooooooo)! Have a good day and a great year filled with happiness and learning <3
            
            Yours, 
            
            Maya
            `
        },
        {
            name: 'Pakhee',
            content: `My Friend Kaivallya, dear My Friend Kaivallya, My Dear Friend Kaivallya 
            HAppY BirThdAY!! Unlike you i do not write infuriating fanfiction, so here’s some top class poetry instead:
            Kaivallya Kaivallya Kaivallya
            These words cannot rival ya 
            But they come from the heart 
            Like a well thrown dart 
            So hope it’ll suffice to say 
            Hey, how you doin, how’s your day going, huh? 
            The OG trio demands you, duh! 
            `
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
            name: 'Swathi',
            content: `Kaivallya!! I hope you have the best 20th birthday (given the circumstances)! I wish we could celebrate in person, but drastic situations call for creative measures ;). You are one of the best friends I’ve made at Cal, and  I’ve had so much fun getting to know you over the last two years and I can’t wait to LIVE with you for the next two years! There’s no one else I’d rather send Harry Potter and Bollywood tiktoks to <3  Lots and lots of love <3 -Swathi `
        },
        {
            name: 'Ujjaini',
            content: `KAIVALLYA!
            My north-south indian best frn! Hope that this surprise finds you well— with new obstacles comes new innovation yeeet! I’m so lucky that the I made the right decision on Sept. 14, because that day onwards, I gained a friend who became my positivity, my fun-teacher, and life cheerleader. Whether it be a random idea of going to SF at midnight or a drive to Berkeley Marina to de-stress, you’ve agreed to my crazy ideas, all the while making me more comfortable to be impulsive. And that’s a good thing. Along the way, you’ve also shown me the importance of passion. When we created the Sufi group, we all threw ourselves into a genre we had never sung, let alone be trained in. And yet, in learning Raag Yaman, we spent hours on simple phrases, and watching you give your all to something just to improve was probably the peak of my semester, because you showed me I don’t need to know anything going into an experience, but if I work hard, I’ll achieve anything. You are a pinnacle of exploration and hard work and watching you take on this year one step at a time has been unbelievably motivating. You’ve given me a life where my first priority is not being first, it’s friends. It’s because of people like you where I understood that. Thank you, from the bottom of my heart. 
            
            Here’s to more Hindustani Adele, Aaj Jaane ki Zidd na Karo, and late-night Parineeta!
            Lots of love, Ujjaini
            `
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