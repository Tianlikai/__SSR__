import { observable, computed, action } from 'mobx';

class AppState {
  @observable
  count;

  @observable
  name;

  constructor({ count, name } = { count: 0, name: 'jason' }) {
    this.count = count;
    this.name = name;
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

  @action
  changeCount(number) {
    this.count = number;
  }

  toJson() {
    return {
      count: this.count,
      name: this.name,
    };
  }
}

export default AppState;
