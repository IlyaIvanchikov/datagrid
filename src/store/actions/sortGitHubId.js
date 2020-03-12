import { SORT, DATA, DISPLAY_DATA } from './actionTypes'
import faker from 'faker'
import _ from 'lodash'

export function SetSortType(sortGitHubId, data, sortField) {
  return {
    type: SORT,
    sortGitHubId,
    data,
    sortField,
  }
}

export function SetData(data) {
  return {
    type: DATA,
    data,
  }
}

export function SetDisplayData(displayData) {
  return {
    type: DISPLAY_DATA,
    displayData,
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
        locationName: faker.random.arrayElement(['minsk', 'zhlobin', 'gomel']),
        taskResults: [Math.floor(Math.random() * 10)],
        isActive: faker.random.boolean(),
      }
    }
    const dataInfo = [...new Array(1000)].map((_, idx) => makeFake(idx))
    dispatch(SetData(dataInfo))
    dispatch(SetDisplayData(dataInfo))
  }
}

export function sortGitHubId(sortField) {
  return (dispatch, getState) => {
    const state = getState().sort
    const cloneData = state.data.concat()
    const sortGitHubId = state.sortGitHubId
    const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(cloneData, sortField, sortType)
    dispatch(SetSortType(sortType, orderedData, sortField))
  }
}
export function filterData() {
  return (dispatch, getState) => {
    const stateSort = getState().sort
    const stateSearch = getState().search
    const stateCheck = getState().check
    const stateEnum = getState().enum
    let newDataBoolean = stateCheck.check.find(item => {
      return item.checked === true
    })
    // let newDataEnum = stateEnum.selectedValues.filter(item => {
    //   return item
    // })
    console.log(stateEnum.selectedValues)
    let newData = stateSort.data.filter(item => {
      if (newDataBoolean.id === 2) {
        return (
         // item['locationName'] === newDataEnum[0].name &&
          item['isActive'] === true &&
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      } else if (newDataBoolean.id === 3) {
        return (
          item['isActive'] === false &&
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      } else if (newDataBoolean.id === 1) {
        return (
          //item['locationName'] === newDataEnum[0].name &&
          item['name']
          .toLowerCase()
          .includes(stateSearch.search.toLowerCase()))
      }
      return item
    })

    if (!newData.length) {
      newData = stateSort.data
    }
    return newData
  }
}
