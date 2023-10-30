export function setupCounter(element, portal) {
  let counter = 0;
  const setCounter = count => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  setCounter(0);

  element.addEventListener('click', () => {
    const netCount = 1 + counter;
    setCounter(netCount);
    portal.publish(netCount);
  });
}

export const init = portal => {
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
  setupCounter(document.querySelector('#native-counter'), portal);
};
