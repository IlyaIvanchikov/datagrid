import { COLUMNS } from './actionTypes'

export function toggleColumns(id) {
  return {
    type: COLUMNS,
    id,
  }
}
