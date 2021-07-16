import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import map from 'lodash/map'

import { EditableListItem } from 'features/EditSynonymGroupPopup/EditableListItem'
import {
  AcceptanceButton,
  DeclineButton,
} from 'layout/Button'
import {
  PopupOverlay,
  PopupSeparator,
} from 'layout/Popup'
import { Spacing } from 'layout/Spacing'
import { RootState } from 'reducers/store'
import {
  editSynonymAC,
  getSynonymsAC,
  clearSynonymsAC,
  deleteSynonymAC,
  saveChangesAC,
} from 'reducers/editSynonymGroupPopup'

import { PopupHeader } from './PopupHeader'
import {
  SynonymList,
  PopupFooter,
  PopupContainer,
} from './styled'

// TODO: Созадть modal-root для модалок и запорталить
export const EditSynonymGroupPopup = () => {
  const {
    synonymList,
  } = useSelector((state: RootState) => state.editSynonymGroupPopup)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSynonymsAC())
  }, [])

  return (
    <PopupOverlay>
      <PopupContainer size='560px'>
        <PopupHeader />
        <SynonymList>
          {map(synonymList, (synonym) => (
            <EditableListItem
              synonym={synonym}
              onEdit={() => dispatch(editSynonymAC(synonym.id))}
              onDelete={() => dispatch(deleteSynonymAC(synonym.id))}
            />
          ))}
        </SynonymList>
        <PopupSeparator />
        <PopupFooter>
          <Spacing m={{ r: '20px' }}>
            <AcceptanceButton
              onClick={() => dispatch(saveChangesAC())}
            >
              сохранить изменения
            </AcceptanceButton>
          </Spacing>
          <DeclineButton
            onClick={() => dispatch(clearSynonymsAC())}
          >
            очистить синонимы
          </DeclineButton>
        </PopupFooter>
      </PopupContainer>
    </PopupOverlay>
  )
}
