import React, { useState } from 'react';
import { render } from 'react-dom';

// import flagGen from 'flag-generator';
import Flag from './components/flag.js';

function App() {
  const [state, setState] = useState("ClickMe");
  return <Flag seedString="" />
}

render(<App />, document.getElementById("root"));
