import React from 'react';
import flagGen from '@carwin/flag-generator';

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
  ratio: '3:5',
  divisionCount: 2,
}

// @todo: modify flagGenerator() to accept an element or an ID to hook it's canvas on.
class Flag extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.toggleAttributes = this.toggleAttributes.bind(this);
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

  toggleAttributes() {
    let toggled;
    if (this.state.attributesVisible === true) {
      toggled = false;
    } else {
      toggled = true;
    }

    this.setState({attributesVisible: toggled});
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
    if (nextProps.seed !== prevState.seed || (nextProps.ratio !== prevState.ratio) && nextProps.ratio !== '') {
      const newState = {
        seed: nextProps.seed,
        flag: new flagGen.Flag({id: "flag__canvas-container", aspectRatio: nextProps.ratio, divisionCount: nextProps.divisionCount, seed: nextProps.seed}),
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
        <div id="flag__canvas-container" className="flag__canvas-container" />

        <button className="flag__attributes-toggle" onClick={this.toggleAttributes}>{this.state.attributesVisible ? 'Hide' : 'View'} Flag Attributes</button>
        {this.state.attributesVisible &&
        <div className="flag__attributes">
          <ul className="flag__attributes-list">
            <li className="flag__attributes-list-item"><strong>Base Color</strong>: {this.state.flag.color.color}</li>
            <li className="flag__attributes-list-item"><strong>Seed string</strong>: {this.props.seedString || 'none'}</li>
            <li className="flag__attributes-list-item"><strong>Generated seed</strong>: {this.state.seed}</li>
            <li className="flag__attributes-list-item"><strong>Aspect ratio</strong>: {this.state.flag.aspect.h}:{this.state.flag.aspect.w}</li>
            <li className="flag__attributes-list-item"><strong>Dimensions</strong>: {this.state.flag.dimensions.h}x{this.state.flag.dimensions.w}</li>
            <li className="flag__attributes-list-item"><strong># of Divisions</strong>: {this.state.flag.divisionCount}
              <ul>
                {divisionParams}
              </ul>
            </li>
          </ul>
        </div>
        }
      </div>
    );
  }

}


export default Flag;
