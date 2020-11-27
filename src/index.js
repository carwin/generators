import flagGen from 'flag-generator';

// let seed = flagGen.generateSeed('carwin young is great and he is nice');
// let seed = flagGen.generateSeed('carwin young is great and he is good at making flags');
// let seed = flagGen.generateSeed('carwin')
let seed = flagGen.generateSeed() 

console.log('Now we have a seed, let\'s send it to the flagGenerator function: ', seed);
console.log('The project thinks the seed from the library is: ', flagGen.settings.seed);

flagGen.flagGenerator(flagGen.settings.seed);
