import {
  PopupCloseButton,
  PopupContainer as BasePopupContainer,
} from 'layout/Popup'
import styled from 'styled-components'

export const PopupContainer = styled(BasePopupContainer)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`

export const SynonymList = styled.ul`
  flex-grow: 1;
  margin-top: 10px;
  overflow-y: scroll;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`

export const PopupFooter = styled.div`
  display: flex;
  margin-top: 19px;
`

export const NameInputLabel = styled.label`
  display: block;
  margin-bottom: 5px;

  font-size: 14px;
  line-height: 14px;
  color: #00000080;
`

// Рефактор: Вынести popupCloseBtn в отдельный компонент closeButton
export const CancelEditButton = styled(PopupCloseButton)`
  position: static;
  margin-left: 10px;
`

export const EditingButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
