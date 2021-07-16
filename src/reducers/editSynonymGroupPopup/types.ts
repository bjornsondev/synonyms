import { ACTIONS } from './actionTypes'

export interface ISynonym {
  id: number,
  name: string,
}

export interface IState {
  currentEditableSynonymId: number,
  isEditingActive: boolean,
  isOpenPopup: boolean,
  nameInputValue: string,
  synonymList: Array<ISynonym>,
}

export interface IOpenPopupAction {
  type: ACTIONS.OPEN_POPUP,
}

export interface IClosePopupAction {
  type: ACTIONS.CLOSE_POPUP,
}

export interface IAddSynonymAction {
  type: ACTIONS.ADD_SYNONYM,
}

export interface IEditSynonymAction {
  id: number,
  type: ACTIONS.EDIT_SYNONYM,
}

export interface IEditSynonymSaveAction {
  type: ACTIONS.EDIT_SYNONYM_SAVE,
}

export interface IEditSynonymCancelAction {
  type: ACTIONS.EDIT_SYNONYM_CANCEL,
}

export interface IDeleteSynonymAction {
  id: number,
  type: ACTIONS.DELETE_SYNONYM,
}

export interface IChangeNameInputValueAction {
  type: ACTIONS.CHANGE_NAME_INPUT_VALUE,
  value: string,
}

export interface ISaveChangesAction {
  type: ACTIONS.SAVE_CHANGES,
}

export interface IClearSynonymsAction {
  type: ACTIONS.CLEAR_SYNONYMS,
}

export interface IGetSynonymsAction {
  type: ACTIONS.GET_SYNONYMS,
}

export type TEditSynonymsGroupPopupActions = IOpenPopupAction
| IClosePopupAction
| IAddSynonymAction
| IEditSynonymAction
| IEditSynonymSaveAction
| IEditSynonymCancelAction
| IDeleteSynonymAction
| IChangeNameInputValueAction
| ISaveChangesAction
| IClearSynonymsAction
| IGetSynonymsAction
