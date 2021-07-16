import styled from 'styled-components'

export const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  
  font-size: 16px;
  color: black;
  
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main50};
  background-color: transparent;
  
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`
