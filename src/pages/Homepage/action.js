import { ActionTypes } from './constants';

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
})

export const deleteUser = (userId) => ({
  type: ActionTypes.DEL_USER,
  payload: userId
})
