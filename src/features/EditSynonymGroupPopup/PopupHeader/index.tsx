import React, { BaseSyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PrimaryButton } from 'layout/Button'
import { HelpInfo } from 'layout/HelpInfo'
import { Input } from 'layout/Input'
import {
  PopupHeading,
  PopupCloseButton,
  PopupSeparator,
} from 'layout/Popup'
import {
  changeNameInputValueAC,
  addSynonymAC,
  closePopupAC,
} from 'reducers/editSynonymGroupPopup'
import { RootState } from 'reducers/store'

import { NameInputLabel } from '../styled'
import { Title } from './styled'

export const PopupHeader = () => {
  const {
    isEditingActive,
    nameInputValue,
  } = useSelector((state: RootState) => state.editSynonymGroupPopup)

  const dispatch = useDispatch()

  return (
    <>
      <PopupHeading>
        Редактирование группы синонимов поисковых фраз
      </PopupHeading>
      <PopupCloseButton
        onClick={() => dispatch(closePopupAC())}
      />
      <PopupSeparator />
      <Title>
        Синонимы
        <HelpInfo title='Синонимы' />
      </Title>
      {!isEditingActive && (
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
          <PrimaryButton
            onClick={() => dispatch(addSynonymAC())}
            disabled={Boolean(!nameInputValue)}
          >
            добавить
          </PrimaryButton>
        </>
      )}
    </>
  )
}
