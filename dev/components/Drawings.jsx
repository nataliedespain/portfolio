import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://image.ibb.co/c28rmQ/face1.jpg",
        thumbnail: "https://image.ibb.co/epO2t5/face1_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/c4fRLk/face2.jpg",
        thumbnail: "https://image.ibb.co/eE4WmQ/face2_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/n8qRLk/face3.jpg",
        thumbnail: "https://image.ibb.co/kBLht5/face3_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/evYP6Q/face4.jpg",
        thumbnail: "https://image.ibb.co/m7t2t5/face4_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/ks7vD5/face5.jpg",
        thumbnail: "https://image.ibb.co/dA2vD5/face5_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},

{
        src: "https://image.ibb.co/cvo2t5/hand1.jpg",
        thumbnail: "https://image.ibb.co/dZLFD5/hand1_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/bvOD0k/hand2.jpg",
        thumbnail: "https://image.ibb.co/fHyffk/hand2_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/jfuaD5/hand3.jpg",
        thumbnail: "https://image.ibb.co/jY82t5/hand3_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/kaSvD5/hand4.jpg",
        thumbnail: "https://image.ibb.co/fgT2t5/hand4_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/gQwNt5/hand5.jpg",
        thumbnail: "https://image.ibb.co/k8w0fk/hand5_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},

{
        src: "https://image.ibb.co/bQUE6Q/cutout1.jpg",
        thumbnail: "https://image.ibb.co/mRZ30k/cutout1_sm.jpg",
        thumbnailWidth: 280,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/dtgi0k/cutout2.jpg",
        thumbnail: "https://image.ibb.co/f2JVfk/cutout2_sm.jpg",
        thumbnailWidth: 280,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/gjyVfk/cutout3.jpg",
        thumbnail: "https://image.ibb.co/mj8kD5/cutout3_sm.jpg",
        thumbnailWidth: 280,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/cQzgmQ/lines1.jpg",
        thumbnail: "https://image.ibb.co/bNP30k/lines1_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/cih6Lk/lines2.jpg",
        thumbnail: "https://image.ibb.co/go9xRQ/lines2_sm.jpg",
        thumbnailWidth: 466,
        thumbnailHeight: 350,
}]

class Drawings extends Component {
  render() {
    return (
      <div className="drawings">
        <div className="drawingsContainer">
        	<Gallery images={IMAGES} enableImageSelection={false} rowHeight={350} margin={8}/>
        </div>
      </div>
    );
  }
}

export default Drawings;
