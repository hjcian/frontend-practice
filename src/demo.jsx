import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const Demo = ({ portal }) => {
  console.log('start');
  const [count, setCount] = useState(0);
  useEffect(() => {
    portal.subscribe(data => {
      setCount(count + 1);
    });
  });

  console.log('render:', count);
  return (
    <div>
      <hr></hr>
      <h1>This is React component</h1>
      <div class='card'>
        <button id='counter' type='button' onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>You clicked {count} times</p>
      </div>
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <h1>Hello, world</h1>;
// root.render(<Demo />);

export default Demo;
