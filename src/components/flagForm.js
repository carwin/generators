import React from 'react';
import flagGen from '@carwin/flag-generator';
import Flag from './flag';

class FlagForm extends React.Component {

  constructor(props) {
    super(props);

    const starterSeed = flagGen.Utilities.generateSeed();

    this.state = {
      seedString: '',
      lastSeedString: '',
      seed: starterSeed,
      lastSeed: starterSeed,
    };

    this.handleChange = this.handleChange.bind(this);
    this.generateRandom = this.generateRandom.bind(this);
  }

  handleChange(event) {
    console.log('event', event);
    if (event.target.id === 'form-seed') {
      this.setState({lastSeed: this.state.seed, seed: +event.target.value});
    }
    if (event.target.id === 'form-seedstring') {
      this.setState({
        seedString: event.target.value,
        lastSeed: this.state.seed,
        seed: flagGen.Utilities.generateSeed(event.target.value),
      });
    }
  }

  generateRandom() {
    const newSeed = flagGen.Utilities.generateSeed();
    console.log('new seed', newSeed);
    this.setState({
      lastSeed: this.state.seed,
      lastSeedString: this.state.seedString,
      seed: newSeed,
      seedString: '',
    });
  }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>seed string
          <input id="form-seedstring" type="text" onChange={this.handleChange} value={this.state.seedString} />
          </label>
          <label>seed
          <input id="form-seed" type="number" onChange={this.handleChange} value={this.state.seed} />
          </label>
          </form>
        <button id="randomFlag" onClick={this.generateRandom}>Random Flag</button>
          <Flag seedString={this.state.seedString} seed={this.state.seed} />
        </div>
    );
  }

}

export default FlagForm;
