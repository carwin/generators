import React from 'react';

import flagGen from 'flag-generator';

const Flag = (props) => {
  console.log('flaggen', flagGen);
  const seed = flagGen.Utilities.generateSeed('carwin');
  // let flag = flagGen.flagGenerator(flagGen.settings.seed);
  let flag = flagGen.flagGenerator(seed);
  return (
    <div className="flag">
      {{ flag }}
    </div>
  );

}

export default Flag;
