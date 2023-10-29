import { setupCounter, init } from './counter.js';
import Demo from './demo.jsx';
import ReactDOM from 'react-dom';
import { createVisNetwork } from './vis.js';

$(document).ready(function () {
  console.log('doc ready');

  init();
});

// setupCounter(document.querySelector('#native-counter'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Demo />);
createVisNetwork();
