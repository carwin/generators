import React from 'react';
import flagGen from 'flag-generator';

// @todo: modify flagGenerator() to accept an element or an ID to hook it's canvas on.
class Flag extends React.Component {
  constructor(props) {
    super(props);

    const seed = props.seedString !== '' ? flagGen.Utilities.generateSeed(props.seedString) : flagGen.Utilities.generateSeed();

    this.state = {
      seed: seed,
      flag: new flagGen.Flag("flag__canvas-container", "3:5"),
    };

  }

  getDivisionInfo(divisionIndex) {
    const getSubDivisionInfo = (subDivisionIndex) => {
      const subDivisionInfo = Object.keys(this.state.flag.divisions[divisionIndex][subDivisionIndex]).map((val, index) => {
        return <li key={index+'_'+val}>{`${val}: ${this.state.flag.divisions[divisionIndex][subDivisionIndex][val]}`}</li>
      });
      return subDivisionInfo;
    }
    const divisionInfo = Object.keys(this.state.flag.divisions[divisionIndex]).map((val, index) => {
      if (typeof this.state.flag.divisions[divisionIndex][val] === 'object') {
        const subDivisionInfo = getSubDivisionInfo(val);
        return <li key={index+'_'+val}>{val}:<ul>{subDivisionInfo}</ul></li>
      } else {
        if (val !== 'seed' && val !== 'seedMultiplier') {
          return <li key={index+'_'+val}>{`${val}: ${this.state.flag.divisions[divisionIndex][val]}`}</li>
        }
      }
    });

    return divisionInfo;
  }

  componentDidMount() {
    // Draw the flag after the component has mounted.
    this.state.flag.drawFlag();
  }

  render() {
    const self = this;
    const divisionParams = this.state.flag.divisions.map((val, index) =>
        <li key={index+'_'+val}>{this.state.flag.divisions[index].constructor.name}
        <ul>{self.getDivisionInfo(index)}</ul>
        </li>
    );

    return (
      <div className="flag">
        <div className="flag__seed">
          Seed string <strong>"{this.props.seedString}"</strong> generated seed: <strong>{this.state.seed}</strong>
        </div>
        <div id="flag__canvas-container" />

        <div className="flag__attributes">
          <ul>
            <li>Seed string: {this.props.seedString || 'random'}</li>
            <li>Generated seed: {this.state.seed}</li>
            <li>Aspect ratio: {this.state.flag.aspect.h}:{this.state.flag.aspect.w}</li>
            <li>Dimensions: {this.state.flag.dimensions.h}x{this.state.flag.dimensions.w}</li>
            <li># of Divisions: {this.state.flag.divisionCount}</li>
            {divisionParams}
          </ul>
        </div>
      </div>
    );
  }

}


export default Flag;
