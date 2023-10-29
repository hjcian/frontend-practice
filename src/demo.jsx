import ReactDOM from 'react-dom';
import { useState } from 'react';

const Demo = () => {
  const [count, setCount] = useState(0);

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
