import { BaseSyntheticEvent } from 'react'
import styled, { css } from 'styled-components'
import LoaderSVG from 'assets/svg/loader.svg'

interface IButton {
  isFetching?: boolean,
}

export const PrimaryButton = styled.button.attrs(({ isFetching }: IButton) => ({
  focusable: !isFetching,
  onMouseUp: (e: BaseSyntheticEvent) => e.target?.blur(),
}))<IButton>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 30px;
  padding: 8px 10px;

  background: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 3px;

  color: ${({ theme }) => theme.colors.primary.contrast};
  text-transform: lowercase;
  font-weight: bold;
  font-size: 14px;

  cursor: pointer;

  &:disabled {
    opacity: .5;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.contrast};
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 18px;
    height: 18px;

    background-image: url(${LoaderSVG});
    display: none;
  }

  ${({ isFetching }) => (
    isFetching
      ? css`
          color: transparent;
          pointer-events: none;
          &::before  {
            display: block;
          }
        `
      : null
  )}
`

export const AcceptanceButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.greenAccent.main};
  border: 2px solid ${({ theme }) => theme.colors.greenAccent.main};

  &:focus {
    background-color: ${({ theme }) => theme.colors.greenAccent.contrast};
    color: ${({ theme }) => theme.colors.greenAccent.main};
  }
`

export const DeclineButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.redAccent.main};
  border: 2px solid ${({ theme }) => theme.colors.redAccent.main};

  &:focus {
    background-color: ${({ theme }) => theme.colors.redAccent.contrast};
    color: ${({ theme }) => theme.colors.redAccent.main};
  }
`
