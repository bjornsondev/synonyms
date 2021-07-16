import styled from 'styled-components'
import ErrorSVG from 'assets/svg/error.svg'

export const ErrorMessage = styled.span`
  position: relative;
  
  display: block;
  margin-top: 5px;
  padding-left: 15px;

  color: ${({ theme }) => theme.colors.error.main};
  font-size: 14px;

  &::before {
    content: url(${ErrorSVG});

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`
