import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  './giftbox.png',
];

const images = slideImages.map(s => require('' + s));
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
            {
                images.map((img, i) => {
                    return (
                        <div className="each-slide">
                            <img
                            src={img}
                            />
                            <span>{`Slide ${i + 1}`}</span>
                        </div>
                    )
                })
            }
        </Slide>
      </div>
    )
}

class Photos extends Component {

    render() {
        return <Slideshow />;
    }
}

export default Photos;