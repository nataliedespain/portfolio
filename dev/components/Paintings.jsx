import React, { Component, PropTypes } from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://image.ibb.co/bSThAk/pink.jpg",
        thumbnail: "https://image.ibb.co/hMrPO5/pink_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/dQkjO5/purple.jpg",
        thumbnail: "https://image.ibb.co/jKvjO5/purple_sm.jpg",
        thumbnailWidth: 263,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/mN48Y5/square.jpg",
        thumbnail: "https://image.ibb.co/ma046Q/square_sm.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/fDAt0k/emerge1.jpg",
        thumbnail: "https://image.ibb.co/dPN6Lk/emerge1_sm.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/fOGNt5/emerge2.jpg",
        thumbnail: "https://image.ibb.co/jNhvD5/emerge2_sm.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 350,
},
{
        src: "https://image.ibb.co/f2f46Q/emerge3.jpg",
        thumbnail: "https://image.ibb.co/nqroY5/emerge3_sm.jpg",
        thumbnailWidth: 350,
        thumbnailHeight: 350,
}]


class Paintings extends Component {
  render() {
    return (
      <div className="paintings">
        <div className="paintingsContainer">
        	<Gallery images={IMAGES} enableImageSelection={false} rowHeight={350} margin={8}/>
        </div>
      </div>
    );
  }
}

export default Paintings;
