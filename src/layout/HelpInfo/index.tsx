import styled from 'styled-components'
import InfoSVG from 'assets/svg/info.svg'

// Допустим у нас этот компонент всегда используется после какого то текста
// и пока будет просто тайтл атрибут у него
export const HelpInfo = styled.span`
  position: absolute;
  right: -24px;
  top: 50%;
  transform: translateY(-50%);

  width: 14px;
  height: 14px;

  background-image: url(${InfoSVG});
  color: #00000080;
`
