import { setupCounter, init } from './counter.js';
import Demo from './demo.jsx';
import ReactDOM from 'react-dom';
import { createVisNetwork } from './vis.js';
import { createSimpleDataPasser } from './pubsub.js';

const passer = createSimpleDataPasser();

$(document).ready(function () {
  console.log('doc ready');
  init(passer);
});

ReactDOM.render(<Demo portal={passer} />, document.getElementById('root'));
// createVisNetwork();





