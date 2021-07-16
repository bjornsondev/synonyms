import React, { BaseSyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { PrimaryButton } from 'layout/Button'
import { Input } from 'layout/Input'
import {
  changeNameInputValueAC,
  editSynonymSaveAC,
  editSynonymCancelAC,
} from 'reducers/editSynonymGroupPopup'
import { ISynonym } from 'reducers/editSynonymGroupPopup/types'
import { RootState } from 'reducers/store'

import {
  EditButton,
  DeleteButton,
  ItemContainer,
} from './styled'
import {
  CancelEditButton,
  EditingButtonsContainer,
  NameInputLabel,
} from '../styled'

interface IEditableListItem {
  onDelete: () => void,
  onEdit: () => void,
  synonym: ISynonym,
}

// TODO: В дизайн систему, сделать общий элемент, и список тоже
export const EditableListItem = ({
  onDelete,
  onEdit,
  synonym: {
    id,
    name,
  },
}: IEditableListItem) => {
  const {
    currentEditableSynonymId,
    nameInputValue,
  } = useSelector((state: RootState) => state.editSynonymGroupPopup)

  const dispatch = useDispatch()

  return (
    <>
      { currentEditableSynonymId !== id && (
        <>
          <ItemContainer>
            {name}
            <EditButton onClick={onEdit} />
            <DeleteButton onClick={onDelete} />
          </ItemContainer>
        </>
      )}
      {currentEditableSynonymId === id && (
        <>
          <NameInputLabel>
            добавление синонима:
            <Input
              placeholder='Введите название'
              value={nameInputValue}
              onChange={(e: BaseSyntheticEvent) => dispatch(
                changeNameInputValueAC(e.currentTarget.value),
              )}
            />
          </NameInputLabel>
          <EditingButtonsContainer>
            <PrimaryButton
              onClick={() => dispatch(editSynonymSaveAC())}
            >
              сохранить
            </PrimaryButton>
            <CancelEditButton
              onClick={() => dispatch(editSynonymCancelAC())}
            />
          </EditingButtonsContainer>
        </>
      )}
    </>
  )
}
