import * as actions from './actions.js';
import * as actionTypes from './actionTypes.js';
import * as Status from './status.js';
import reducer from './reducer.js';

describe('weather/reducer', () => {
  it('should return loading status', () => {
    const action = actions.fetchWeatherStarted();

    const newState = reducer({}, action);

    expect(newState.status).toBe(Status.LOADING);
  });
});

