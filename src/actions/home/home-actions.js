import createAction from '../../utils/redux/create-action';
import loadHomeData from '../../services/home-service';

export const HomeActionTypes = {
  HOME_DATA_LOADED: 'HOME_DATA_LOADED',
  HOME_DATA_FAILED_TO_LOAD: 'HOME_DATA_FAILED_TO_LOAD'
};

function homeDataLoaded(data) {
  return createAction(HomeActionTypes.HOME_DATA_LOADED, data);
}

function homeDataFailedToLoaded(error) {
  return createAction(HomeActionTypes.HOME_DATA_FAILED_TO_LOAD, error);
}

export function loadHome() {
  return loadHomeData().then(homeDataLoaded).catch(homeDataFailedToLoaded);
}
