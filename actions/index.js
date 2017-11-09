export const RECEIVE_ENTREIS = 'RECEIVE_ENTREIS'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTREIS,
    entries,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}
