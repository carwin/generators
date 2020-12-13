import React from 'react';
import flagGen from 'flag-generator';

const startSeed = flagGen.Utilities.generateSeed();
const startColor = flagGen.Utilities.generateColor(startSeed);
console.log('start', startSeed);

const startFlag = new flagGen.Flag({
  id: "flag__canvas-container",
  aspectRatio: "3:5",
  divisionCount: 2,
  color: startColor.color,
  seed: startSeed
});

const initialState = {
  seed: +startFlag.seed,
  flag: startFlag,
}

// @todo: modify flagGenerator() to accept an element or an ID to hook it's canvas on.
class Flag extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
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

  componentDidUpdate(prevProps, prevState) {
    this.state.flag.destroyFlag(prevProps.seed);
    this.state.flag.drawFlag();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.seed !== prevState.seed) {
      const newState = {
        seed: nextProps.seed,
        flag: new flagGen.Flag({id: "flag__canvas-container", aspectRatio: "3:5", divisionCount: 2, seed: nextProps.seed}),
      }
      return newState;
    }
    return null;
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
            <li><strong>Color sucks</strong>: {this.state.flag.color.color}</li>
            <li><strong>Seed string</strong>: {this.props.seedString || 'none'}</li>
            <li><strong>Generated seed</strong>: {this.state.seed}</li>
            <li><strong>Aspect ratio</strong>: {this.state.flag.aspect.h}:{this.state.flag.aspect.w}</li>
            <li><strong>Dimensions</strong>: {this.state.flag.dimensions.h}x{this.state.flag.dimensions.w}</li>
            <li><strong># of Divisions</strong>: {this.state.flag.divisionCount}
              <ul>
                {divisionParams}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}


export default Flag;
