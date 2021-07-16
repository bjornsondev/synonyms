import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { PrimaryButton } from 'layout/Button'
import { Spacing } from 'layout/Spacing'
import { EditSynonymGroupPopup } from 'features/EditSynonymGroupPopup'
import { RootState } from 'reducers/store'
import { openPopupAC } from 'reducers/editSynonymGroupPopup'

export const App = () => {
  const {
    isOpenPopup,
  } = useSelector((state: RootState) => state.editSynonymGroupPopup)

  const dispatch = useDispatch()

  return (
    <>
      <Spacing
        m={{
          l: 'auto',
          r: 'auto',
          t: '100px',
        }}
      >
        <PrimaryButton onClick={() => dispatch(openPopupAC())}>
          Сезам откройся
        </PrimaryButton>
      </Spacing>

      {isOpenPopup && <EditSynonymGroupPopup />}
    </>
  )
}
