/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import HomeModule from '~/store/home.ts';

let homeStore: HomeModule;

function initialiseStores(store: Store<any>): void {
  homeStore = getModule(HomeModule, store);
}

export { initialiseStores, homeStore };
