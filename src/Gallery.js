import React from 'react';

export default class Gallery extends React.Component {
  render() {
    let currentImage = this.props.gallery.images[this.props.gallery.currentIdx];
    return (
      <div>
        <button onClick={this.props.previous}>
          Previous
        </button>
        <button onClick={this.props.next}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
          <div>
            {this.props.gallery.images.map((imageUrl, idx) =>
              <img key={idx} src={imageUrl} height="60" onClick={()=>this.props.jump(idx)}/>
            )}
          </div>
      </div>
    );
  }
}
