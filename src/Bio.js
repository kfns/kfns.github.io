import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    title: {
        fontSize: 24,
    },
    root: {
        backgroundColor: 'white',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 10,
        marginBottom: 10,
        padding: 16,
        borderRadius: 16,
    }
}

class Bio extends Component {

    sections = [
        {
            title: 'Early Life',
            content: `Kaivallya Adithi Dasu was born on April 13, 2000 in State College, Pennsylvania, to parents of Telugu descent. She has a legendary younger brother named Aniruddha, popularly referred to as Ani, born in 2004. After brief stints in Columbus, Ohio and Cupertino, California, she moved with her family to Hyderabad in 2008 where she completed much of her schooling. During this time, she received training in Carnatic music, Kuchipudi dance, and piano. In 2015, she found her true calling and moved to the Hindustani music capital of the world, Mumbai, where she attended Hiranandani Foundation School.`
        },
        {
            title: `2015 - Present: Enchantress of Elektra and Beyond`,
            content: `On November 16, 2015, Dasu published her first novel, Enchantress of Elektra, a fantasy fiction she began writing at the tender age of 12. The book achieved mASSIVE success, with a 4.3-star rating on Goodreads. As a result of her book, Dasu received many accolades including an article in The Hindu.

            Dasu graduated from Hiranandani Foundation School in 2018 and began attending the University of California, Berkeley, where she studies molecular and cell biology with a minor in creative writing. She is a member of Laya of Berkeley, a South Asian classical music fusion performance group, where she doubles as a vocalist and a keyboardist.
            
            On April 13, 2020, Dasu celebrated her twentieth birthday by reading this very sentence.
            `
        },
        {
            title: `Influence and Style`,
            content: `In a report with The Hindu, Dasu has said with shrillness in her voice that she is a big fan of JK Rowling’s Harry Potter series and that the style and genres of those books inspired her to write Enchantress of Elektra. Fearing that this high-pitched declaration of her love for Harry Potter was not enough, she met one of her best friends at an inter school Harry Potter competition, and enrolled in a class at UC Berkeley dedicated exclusively to studying the Harry Potter novels and movies through discussions and reenactments. On one occasion, she even used this class as an excuse to ditch a Laya event featuring violin prodigy Kamalakiran Vinjamuri.

            Dasu is also a big fan of the Star Wars franchise and the MCU, the TV sitcoms Brooklyn Nine-Nine, The Good Place, and Gilmore Girls (at least, until the Beginning of the End), as well as crime shows such as Elementary. In her free time, Dasu likes to read, design calendars, somnotext, write fan-fictions, and geek out over fusion music. She is a self-proclaimed fob, but many of her friends disagree.`
        },
        {
            title: `Trivia`,
            items: [
                `Dasu has been run over by an auto.`,
                `She claims to have never liked anyone romantically.`,
                `She has a killer sense of style, especially when it comes to earrings.`,
                `She is, at the best of times, highly dramatic.`,
                `She loves to experiment, especially when it comes to food and hair.`,
                `She knows what the Knights of Walpurgis are.`,
                `She coined the term “Telugu Psychic Connection”, TPC for short.`,
                `She is a proponent of showing affection digitally.`,
                `She is, in many ways, the living embodiment of Amy Santiago.`,
                `Despite claiming to be a huge fan, she has a tendency to not keep up with B99, The Good Place, or Patriot Act.`,
                `She has made numerous Harry Potter-themed T-shirts, notably one with the Hogwarts crest on it.`
            ]
        }
    ]

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                    this.sections.map(section => {
                        const { title, content, items } = section;
                        let newText;
                        if (content) {
                            newText = content.split('\n').map((item, i) => {
                                return <p key={i}>{item}</p>;
                            });
                        } else {
                            newText = <ul>
                                {
                                    items.map(item => <li>{item}</li>)
                                }
                            </ul>;
                        }
                        return (
                        <div>
                            <span className={classes.title}>{title}</span>
                            <hr />
                            {newText}
                        </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default withStyles(styles)(Bio);