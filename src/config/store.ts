import { createStore, applyMiddleware, compose } from 'redux';
import reducer, { IRootState } from '../shared/reducers';
import loggerMiddleware from './logger-middleware';

const defaultMiddlewares = [
  loggerMiddleware,
];
const composedMiddlewares = (middlewares: Array<any>) => compose(
  applyMiddleware(...defaultMiddlewares, ...middlewares),
);

const initialize = (initialState?: IRootState, middlewares = []) => createStore(
  reducer, initialState, composedMiddlewares(middlewares),
);

export default initialize;
