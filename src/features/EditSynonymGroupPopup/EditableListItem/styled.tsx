import styled from 'styled-components'
import PencilSVG from 'assets/svg/pencil.svg'
import DeleteSVG from 'assets/svg/delete.svg'

export const ItemContainer = styled.li`
  position: relative;
  
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 11px;
  margin-bottom: 5px;

  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  
  background-color: #FFFFFF;
  border-radius: 3px;
`

// TODO: Создать общий IconButton в будущем, который принимает размер и icon
export const EditButton = styled.button`
  position: absolute;
  top: 50%;
  right: 38px;
  transform: translateY(-50%);

  width: 14px;
  height: 14px;

  background-image: url(${PencilSVG});
  background-color: transparent;
  cursor: pointer;
  opacity: .5;

  &:hover {
    opacity: 0;
  }
`

export const DeleteButton = styled(EditButton)`
  background-image: url(${DeleteSVG});
  right: 13px;
`
