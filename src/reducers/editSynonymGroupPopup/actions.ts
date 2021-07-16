import { ACTIONS } from './actionTypes'
import {
  IAddSynonymAction,
  IChangeNameInputValueAction,
  IClearSynonymsAction,
  IClosePopupAction,
  IDeleteSynonymAction,
  IEditSynonymAction,
  IEditSynonymCancelAction,
  IEditSynonymSaveAction,
  IGetSynonymsAction,
  IOpenPopupAction,
  ISaveChangesAction,
} from './types'

export const addSynonymAC = (): IAddSynonymAction => ({
  type: ACTIONS.ADD_SYNONYM,
})

export const changeNameInputValueAC = (
  value: string,
): IChangeNameInputValueAction => ({
  type: ACTIONS.CHANGE_NAME_INPUT_VALUE,
  value,
})

export const clearSynonymsAC = (): IClearSynonymsAction => ({
  type: ACTIONS.CLEAR_SYNONYMS,
})

export const closePopupAC = (): IClosePopupAction => {
  // eslint-disable-next-line no-debugger
  debugger
  return ({
    type: ACTIONS.CLOSE_POPUP,
  })
}

export const deleteSynonymAC = (id: number): IDeleteSynonymAction => ({
  id,
  type: ACTIONS.DELETE_SYNONYM,
})

export const editSynonymAC = (id: number): IEditSynonymAction => ({
  id,
  type: ACTIONS.EDIT_SYNONYM,
})

export const editSynonymSaveAC = (): IEditSynonymSaveAction => ({
  type: ACTIONS.EDIT_SYNONYM_SAVE,
})

export const editSynonymCancelAC = (): IEditSynonymCancelAction => ({
  type: ACTIONS.EDIT_SYNONYM_CANCEL,
})

export const getSynonymsAC = (): IGetSynonymsAction => ({
  type: ACTIONS.GET_SYNONYMS,
})

export const openPopupAC = (): IOpenPopupAction => ({
  type: ACTIONS.OPEN_POPUP,
})

export const saveChangesAC = (): ISaveChangesAction => ({
  type: ACTIONS.SAVE_CHANGES,
})
