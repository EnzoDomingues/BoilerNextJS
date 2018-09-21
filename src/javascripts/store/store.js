import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true
});

const initStore = (initialState = {}) => {
  if (process.env.NODE_ENV == 'development') {
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    );
  } else if (process.env.NODE_ENV == 'production') {
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  }
};

export default initStore;
