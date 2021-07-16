import filter from 'lodash/filter'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'

import {
  IState,
  TEditSynonymsGroupPopupActions,
} from './types'
import { ACTIONS } from './actionTypes'

const initialState: IState = {
  currentEditableSynonymId: 0,
  isEditingActive: false,
  isOpenPopup: false,
  nameInputValue: '',
  synonymList: [],
}

export const editSynonymGroupPopup = (
  state = initialState,
  action: TEditSynonymsGroupPopupActions,
) => {
  switch (action.type) {
    case ACTIONS.OPEN_POPUP: {
      return {
        ...state,
        isOpenPopup: true,
      }
    }

    case ACTIONS.CLOSE_POPUP: {
      return {
        ...state,
        isOpenPopup: false,
      }
    }

    case ACTIONS.ADD_SYNONYM: {
      return {
        ...state,
        synonymList: [
          ...state.synonymList,
          {
            id: Date.now(),
            name: state.nameInputValue,
          },
        ],
      }
    }

    case ACTIONS.CHANGE_NAME_INPUT_VALUE: {
      return {
        ...state,
        nameInputValue: action.value,
      }
    }

    case ACTIONS.EDIT_SYNONYM: {
      const editableTodo = find(
        state.synonymList,
        ({ id }) => id === action.id,
      )

      return {
        ...state,
        currentEditableSynonymId: action.id,
        isEditingActive: true,
        nameInputValue: editableTodo?.name || '',
      }
    }

    case ACTIONS.EDIT_SYNONYM_SAVE: {
      const editableTodo = findIndex(
        state.synonymList,
        ({ id }) => id === state.currentEditableSynonymId,
      )
      const synonymList = [...state.synonymList]

      synonymList[editableTodo].name = state.nameInputValue

      return {
        ...state,
        currentEditableSynonymId: 0,
        isEditingActive: false,
        nameInputValue: '',
        synonymList,

      }
    }

    case ACTIONS.EDIT_SYNONYM_CANCEL: {
      return {
        ...state,
        currentEditableSynonymId: 0,
        isEditingActive: false,
        nameInputValue: '',

      }
    }

    case ACTIONS.DELETE_SYNONYM: {
      const confirmedDeleting = confirm('Это не ошибка?')

      if (!confirmedDeleting) return state

      return {
        ...state,
        synonymList: filter(state.synonymList, ({ id }) => id !== action.id),
      }
    }

    case ACTIONS.SAVE_CHANGES: {
      // запрос в санку, пока тут криво будет висеть D:
      window.localStorage.setItem('synonyms', JSON.stringify(state.synonymList))

      return state
    }

    case ACTIONS.CLEAR_SYNONYMS: {
      // запрос в санку, пока тут криво будет висеть D:
      window.localStorage.removeItem('synonyms')

      return {
        ...state,
        synonymList: [],
      }
    }

    case ACTIONS.GET_SYNONYMS: {
      // запрос в санку, пока тут криво будет висеть D:
      const synonyms = window.localStorage.getItem('synonyms')

      return {
        ...state,
        synonymList: synonyms ? JSON.parse(synonyms) : [],
      }
    }

    default:
      return state
  }
}
