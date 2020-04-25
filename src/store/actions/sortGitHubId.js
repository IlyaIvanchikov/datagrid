import {
  SORT,
  DATA,
  FIELD,
  FIELD_NULL,
  TYPE_SORT,
  CHANGE_SORT,
  CLEAR,
  SELECT_ROW,
  DELETE_ROW,
  CHANGE_ARR_ROW,
  CLEAR_ARR_ROW,
  CLEAR_ROW,
} from './actionTypes'
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

export function SetField(typeField) {
  return {
    type: FIELD,
    typeField,
  }
}

export function SetTypeSort(typeSort) {
  return {
    type: TYPE_SORT,
    typeSort,
  }
}
export function SetFieldNull() {
  return {
    type: FIELD_NULL,
  }
}

export function SetSortNull() {
  return {
    type: CLEAR,
  }
}

export function SetDeleteRow(newArr) {
  return {
    type: DELETE_ROW,
    newArr,
  }
}

export function SetSelectRow(selectRow) {
  return {
    type: SELECT_ROW,
    selectRow,
  }
}

export function SetChangeSort(changeSort) {
  return {
    type: CHANGE_SORT,
    changeSort,
  }
}

export function SetSelectArrRow(selectRow) {
  return {
    type: CHANGE_ARR_ROW,
    selectRow,
  }
}

export function SetClearArrRow() {
  return {
    type: CLEAR_ARR_ROW,
  }
}

export function SetClearRow() {
  return {
    type: CLEAR_ROW,
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
  }
}

export function selectRow(e, item) {
  return (dispatch, getState) => {
    if (!e.ctrlKey) {
      dispatch(SetClearArrRow())
      dispatch(SetSelectRow(item.id))
    } else if (e.ctrlKey) {
      dispatch(SetClearRow())
      dispatch(SetSelectArrRow(item.id))
    }
  }
}

export function DeleteRow(e) {
  return (dispatch, getState) => {
    const state = getState().sort
    if (e.key === 'd' && state.selectRow !== null && e.repeat !== true) {
      state.data.map((item, index) => {
        if (Number(item.id) === state.selectRow) {
          const newArrFirst = state.data.slice(0, index)
          const newArrTwo = state.data.slice(index + 1)
          const result = newArrFirst.concat(newArrTwo)
          dispatch(SetSelectRow(null))
          dispatch(SetDeleteRow(result))
        }
        return item
      })
    } else if (e.key === 'd' && e.repeat !== true && state.selectRow === null) {
      const state = getState().sort
      const arrOne = state.data
      let arrTwo = state.data
      let a = 0
      arrOne.map((itemArr, index) => {
        state.selectArrRow.map(item => {
          if (Number(itemArr.id) === item) {
            let count = index + a
            let newArrFirst = arrTwo.slice(0, count)
            let newArrTwo = arrTwo.slice(count + 1)
            const result = newArrFirst.concat(newArrTwo)
            arrTwo = result.slice()
            a = a - 1
            return arrTwo
          }
          return item
        })
        return itemArr
      })
      dispatch(SetDeleteRow(arrTwo))
    }
  }
}
export function sortGitHubId(e, sortField) {
  return (dispatch, getState) => {
    if (!e.shiftKey) {
      const state = getState().sort
      const cloneData = state.data.concat()
      const sortGitHubId = state.sortGitHubId
      const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
      const orderedData = _.orderBy(cloneData, sortField, sortType)
      dispatch(SetSortType(sortType, orderedData, sortField))
      dispatch(SetFieldNull())
      dispatch(SetSortNull())
    } else if (e.shiftKey) {
      const state = getState().sort
      const cloneData = state.data.concat()
      const sortGitHubId = state.sortGitHubId
      const sortType = sortGitHubId === 'asc' ? 'desc' : 'asc'
      let newTypeField = state.typeField.find(item => {
        return item === sortField
      })
      if (!newTypeField) {
        dispatch(SetField(sortField))
        dispatch(SetTypeSort(sortType))
        const stateAllNew = getState().sort
        const typeFieldNew = stateAllNew.typeField
        const sortArrNew = stateAllNew.typeSort
        const orderedData = _.orderBy(cloneData, typeFieldNew, sortArrNew)
        dispatch(SetSortType(sortType, orderedData, typeFieldNew))
        return
      }
      dispatch(SetChangeSort(sortType))
      const stateResult = getState().sort
      const orderedData = _.orderBy(
        stateResult.data,
        stateResult.typeField,
        stateResult.typeSort
      )
      dispatch(SetSortType(sortType, orderedData, stateResult.typeField))
    }
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

    let enumLength = stateEnum.selectedValues.length
    let newData = stateSort.data.filter(item => {
      if (newDataBoolean.id === 2) {
        return (
          item['isActive'] === true &&
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      } else if (newDataBoolean.id === 3) {
        return (
          item['isActive'] === false &&
          item['name'].toLowerCase().includes(stateSearch.search.toLowerCase())
        )
      } else if (newDataBoolean.id === 1) {
        return item['name']
          .toLowerCase()
          .includes(stateSearch.search.toLowerCase())
      }
      return item
    })
    let newDataEnum = newData.filter(item => {
      if (enumLength === 1) {
        return item['locationName'] === stateEnum.selectedValues[0].name
      } else if (enumLength === 2) {
        return (
          item['locationName'] === stateEnum.selectedValues[0].name ||
          item['locationName'] === stateEnum.selectedValues[1].name
        )
      } else if (enumLength === 3) {
        return (
          item['locationName'] === stateEnum.selectedValues[0].name ||
          item['locationName'] === stateEnum.selectedValues[1].name ||
          item['locationName'] === stateEnum.selectedValues[2].name
        )
      }
      return item
    })
    if (!newDataEnum.length) {
      newDataEnum = stateSort.data
    }
    return newDataEnum
  }
}
