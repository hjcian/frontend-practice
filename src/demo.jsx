import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const Demo = ({ incoming, outgoing }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    incoming.subscribe(data => {
      setCount(count + 1);
    });
  });

  const handleClick = () => {
    setCount(count + 1);
    outgoing.publish(count + 1);
  };

  return (
    <div>
      <hr></hr>
      <h1>This is React component</h1>
      <div class='card'>
        <button id='counter' type='button' onClick={handleClick}>
          Click me
        </button>
        <p>You clicked {count} times</p>
      </div>
    </div>
  );
};

export default Demo;
