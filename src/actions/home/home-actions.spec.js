import { expect } from 'chai';
import * as homeActions from './home-actions';
import { HomeActionTypes } from './home-actions';
import { __RewireAPI__ as HomeActionsRewireAPI } from './home-actions';

describe('HomeActions', () => {
  describe('loadHome', () => {
    after(() => {
      HomeActionsRewireAPI.__ResetDependency__('loadHomeData');
    });

    it('should dispatch HOME_DATA_LOADED action when data is loaded', () => {
      let homeDataLoadedAction;

      HomeActionsRewireAPI.__Rewire__('loadHomeData', () => ({
        then: (homeDataLoaded) => {
          homeDataLoadedAction = homeDataLoaded(['item']);
          return { catch: () => {} };
        }
      }));
      homeActions.loadHome();
      expect(homeDataLoadedAction.type).to.be.equal(HomeActionTypes.HOME_DATA_LOADED);
    });

    it('should dispatch HOME_DATA_FAILED_TO_LOAD action when data fails to load', () => {
      let homeDataFailedToLoadAction;

      HomeActionsRewireAPI.__Rewire__('loadHomeData', () => ({
        then: () => ({
          catch: (homeDataFailedToLoad) => {
            homeDataFailedToLoadAction = homeDataFailedToLoad({ message: 'error' });
          }
        })
      }));
      homeActions.loadHome();
      expect(homeDataFailedToLoadAction.type).to.be.equal(HomeActionTypes.HOME_DATA_FAILED_TO_LOAD);
    });
  });
});
