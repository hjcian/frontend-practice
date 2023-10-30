import { setupCounter, init } from './counter.js';
import Demo from './demo.jsx';
import ReactDOM from 'react-dom';
import { createVisNetwork } from './vis.js';
import { createSimpleDataPasser } from './pubsub.js';

const jsToReactPasser = createSimpleDataPasser();
const reactToJSPasser = createSimpleDataPasser();

$(document).ready(function () {
  console.log('doc ready');
  init(jsToReactPasser, reactToJSPasser);
});

ReactDOM.render(<Demo incoming={jsToReactPasser} outgoing={reactToJSPasser} />, document.getElementById('root'));
// createVisNetwork();





