import styled from 'styled-components/macro'
import CloseSVG from 'assets/svg/close.svg'

export const PopupOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`

export const PopupContainer = styled.section<{
  h?: string,
  size?: string,
  w?: string,
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: ${({ h, size }) => h || size || '500px'};
  width: ${({ size, w }) => w || size || '500px'};
  padding: 20px;

  background-color: #EFEFEF;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 22px;
  right: 22px;

  display: block;
  height: 18px;
  width: 18px;
  padding: 0;

  border: none;
  background-image: url(${CloseSVG});
  cursor: pointer;
`

export const PopupHeading = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`

export const PopupSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 10px;

  background-color: #DEDEDE;
`
