import React from 'react';

export default class DragonGame extends React.Component {
  render() {
    let message;
    return (
      <div>
        <img src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300"/>
        <br/>
        <label>Dragon: {this.props.dragon.dragon}</label>&nbsp;
        <label>Hero: {this.props.dragon.hero}</label>
        <br/>
        {this.props.dragon.hero<0? "hero is dead" : (this.props.dragon.dragon<0 ? "dragon is dead" : null)}
        <br/>
        <button disabled={this.props.dragon.dragon<0 || this.props.dragon.hero<0} onClick={this.props.fight}>
          Fight
        </button>
        <button disabled={this.props.dragon.dragon<0 || this.props.dragon.hero<0} onClick={this.props.flight}>
          Flight
        </button>
        <button disabled={this.props.dragon.dragon>0 && this.props.dragon.hero>0} onClick={this.props.restart}>
          Play again
        </button>
      </div>
    );
  }
}
