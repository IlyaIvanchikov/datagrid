import { SORT, DATA } from './actionTypes'
import faker from 'faker'
import _ from 'lodash';

export function SetSortType(sortGitHubId, data, sortField) {
  return {
    type: SORT,
    sortGitHubId,
    data,
    sortField
  }
}

export function SetData(data) {
  return {
    type: DATA,
    data
  }
}

export function dataInfo() {
  return dispatch => {
    faker.seed(74)
    const makeFake = idx => {
      return {
        id: 11523 + idx,
        rank: idx,
        name: faker.name.findName(),
        githubId: faker.internet.email(),
        totalScore: 0,
        locationName: faker.address.city(),
        taskResults: [Math.floor(Math.random() * 10)],
        isActive: faker.random.boolean(),
      }
    }
    const dataInfo = [...new Array(1000)].map((_, idx) => makeFake(idx))
    dispatch(SetData(dataInfo))
  }
}

export function sortGitHubId(sortField) {
  return (dispatch, getState) => {
    const state = getState().sort
    const cloneData = state.data.concat();
    const sortGitHubId = state.sortGitHubId
    const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(cloneData, sortField, sortType);
    dispatch(SetSortType(sortType, orderedData, sortField))
  }
}
