/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'home', // must be start with small capital
  stateFactory: true,
  namespaced: true,
})
export default class HomeModule extends VuexModule {
  wheels = 2;

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra;
  }

  public get getNumber() {
    return this.wheels;
  }
}
