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
      ratio: '3:5',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateRandom = this.generateRandom.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('event', event.target.elements);

    this.setState({
      seedString: event.target.elements['form-seedstring'].value,
      seed: event.target.elements['form-seed'].value,
      ratio: event.target.elements['form-ratio'].value,
      lastSeed: this.state.lastSeed,
      lastSeedString: this.state.lastSeedString,
    });
  }

  handleChange(event) {
    console.log('event', event);
    if (event.target.id === 'form-seed') {
      this.setState({lastSeed: this.state.seed, seed: +event.target.value});
    }
    if (event.target.id === 'form-seedstring') {
      this.setState({
        lastSeed: this.state.seed,
        seedString: event.target.value,
        seed: flagGen.Utilities.generateSeed(event.target.value),
      });
    }
    if (event.target.id === 'form-ratio') {
      this.setState({
        ratio: event.target.value,
      });
    }
  }

  generateRandom(event) {
    event.preventDefault();
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
        <div className="flag-form">
        <div className="author">

          <h1><a href="https://github.com/carwin" title="Carwin's GitHub page">@carwin</a>'s Flag Generator</h1>
        </div>
          <form className="flag-form__form" onSubmit={this.handleSubmit}>
            <div className="flag-form__random-container">
              <button id="randomFlag" className="flag-form__random" onClick={this.generateRandom}>Random Flag</button>
            </div>
            <label>seed string
              <input id="form-seedstring" placeholder="something memorable" type="text" onChange={this.handleChange} value={this.state.seedString} />
            </label>
            <label>seed
              <input
                id="form-seed"
                type="number"
                onChange={this.handleChange}
                value={typeof this.state.seed === 'number' ? this.state.seed : 0.1} />
            </label>
            <label>ratio
              <input id="form-ratio" type="text" placeholder="3:5" onChange={this.handleChange} value={this.state.ratio} />
            </label>
          </form>
          <div className="flag-form__flag-container">
            <Flag seedString={this.state.seedString} seed={this.state.seed} ratio={/^[0-9]:[0-9]/.test(this.state.ratio) ? this.state.ratio : '3:5'} />
          </div>
        </div>
    );
  }
            // <input type="submit" value="set options" onSubmit={this.handleSubmit} />

}

export default FlagForm;
