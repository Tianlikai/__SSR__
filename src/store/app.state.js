import { observable, computed, action } from 'mobx';

class AppState {
  @observable
  count;

  @observable
  name;

  constructor() {
    this.count = 0;
    this.name = 'Jason';
  }

  @computed get msg() {
    return `${this.name} is coding - ${this.count}`;
  }

  @action
  add() {
    this.count += 1;
  }

  @action
  changeName(name) {
    this.name = name;
  }
}

const appState = new AppState();

setInterval(() => appState.add(), 1000);

export default appState;

export { AppState };
