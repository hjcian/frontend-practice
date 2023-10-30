class SimpleDataPasser {
  constructor() {
    this.subscriber = data => {
      console.log('dummy:', data);
    };
  }

  subscribe(callback) {
    this.subscriber = callback;
  }

  publish(data) {
    this.subscriber(data);
  }
}

export const createSimpleDataPasser = () => {
  return new SimpleDataPasser();
};
