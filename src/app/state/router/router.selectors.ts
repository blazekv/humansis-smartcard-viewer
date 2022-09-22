import { createSelector } from '@ngrx/store';
import { getRouterState } from '../index';

export const getRouterParamSelector = (param: string) =>
  createSelector(getRouterState, (state) => state?.state?.params[param]);

export const getRouterQueryParamsSelector = createSelector(
  getRouterState,
  (state) => state.state.queryParams
);

export const getRouterQueryParamSelector = (param: string) =>
  createSelector(getRouterQueryParamsSelector, (params) => params[param]);

export const getRouterUrlSelector = createSelector(
  getRouterState,
  (state) => state.state.url
);
