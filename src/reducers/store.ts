import { combineReducers, createStore } from 'redux'
import { editSynonymGroupPopup } from './editSynonymGroupPopup'

const reducers = combineReducers({ editSynonymGroupPopup })

export const store = createStore(reducers)

export type RootState = ReturnType<typeof reducers>
