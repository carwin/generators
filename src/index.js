import React, { useState } from 'react';
import { render } from 'react-dom';

// import flagGen from 'flag-generator';
import Flag from './components/flag.js';

// let seed = flagGen.generateSeed('carwin young is great and he is nice');
// let seed = flagGen.generateSeed('carwin young is great and he is good at making flags');
// console.log(flagGen);
// let seed = flagGen.Utilities.generateSeed('carwin');


// // let seed = flagGen.generateSeed()
// console.log('Now we have a seed, let\'s send it to the flagGenerator function: ', seed);
// console.log('The project thinks the seed from the library is: ', flagGen.settings.seed);

// flagGen.flagGenerator(flagGen.settings.seed);

function App() {
  const [state, setState] = useState("ClickMe");
  return <Flag seedString="why are crosses so unpopular" />
}

render(<App />, document.getElementById("root"));
