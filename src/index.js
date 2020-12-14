import React, { useState } from 'react';
import { render } from 'react-dom';

import './scss/main.scss';

// import flagGen from 'flag-generator';
import FlagForm from './components/flagForm.js';

function App() {
  const [state, setState] = useState("ClickMe");
  return <FlagForm />
}

render(<App />, document.getElementById("root"));
