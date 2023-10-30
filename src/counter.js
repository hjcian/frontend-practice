export function setupCounter(element, outgoing, incoming) {
  let counter = 0;
  const setCounter = count => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  setCounter(0);

  incoming.subscribe(count => {
    setCounter(count);
  });

  element.addEventListener('click', () => {
    const newCount = 1 + counter;
    setCounter(newCount);
    outgoing.publish(newCount);
  });
}

export const init = (outgoing, incoming) => {
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>This is native JS component</h1>
      <div class="card">
        <button id="native-counter" type="button"></button>
      </div>
    </div>
  `;
  // $(document).ready(function () {
  //   console.log('doc ready');
  // });
  setupCounter(document.querySelector('#native-counter'), outgoing, incoming);
};
