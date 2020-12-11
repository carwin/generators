import React from 'react';

import flagGen from 'flag-generator';

// @todo: modify flagGenerator() to accept an element or an ID to hook it's canvas on.
class Flag extends React.Component {
// const Flag = () => {
  constructor(props) {
    super(props);
    this.state = {seed: null}
  }
  static getDerivedStateFromProps(props, state) {
    console.log('About to mount');
    if (props.seedString !== '') {
      flagGen.Utilities.generateSeed(props.seedString);
    } else {
      flagGen.Utilities.generateSeed();
    }
  }
  getFlagSeedFromSettings() {
    return flagGen.settings.seed;
  }
  componentDidMount() {
    console.log('Did mount');
    this.setState({
      seed: flagGen.settings.seed
    });
    flagGen.flagGenerator("flag__canvas-container", this.state.seed);
  }
  render() {
    return (
        <div className="flag">
        <div className="flag__seed">
        Seed string <strong>"{this.props.seedString}"</strong> generated seed: <strong>{this.state.seed}</strong></div>
          <div id="flag__canvas-container" />
        </div>
    );
  }

}


export default Flag;
