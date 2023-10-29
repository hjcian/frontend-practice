export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export const init = () => {
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
  setupCounter(document.querySelector('#native-counter'));
};