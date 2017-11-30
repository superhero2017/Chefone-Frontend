// @flow

import { discount } from '../../server/api';
const { findDiscount } = discount;

import createLoadableResource from '../hors/clearAndLoad';
import { createAction } from 'redux-actions';
const name = 'discount';
const { reducer } = createLoadableResource({ name });

export default reducer;

export const clear = createAction(`${name}/CLEAR`);

export const load = (...args: any) =>
  createAction(name)({
    promise: () => findDiscount(...args),
  });
