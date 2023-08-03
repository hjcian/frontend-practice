import { setupCounter } from './counter.js';
import Demo from './demo.jsx';
import ReactDOM from 'react-dom';
import { createVisNetwork } from './vis.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello World!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Demo />);
createVisNetwork();
