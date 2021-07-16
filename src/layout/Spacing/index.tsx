import styled from 'styled-components'

interface IDetailedSpace {
  b?: string,
  l?: string,
  r?: string,
  t?: string,
}

interface ISpacing {
  m?: string | IDetailedSpace,
  p?: string | IDetailedSpace,
}

const spacingToString = (value?: string | IDetailedSpace) => {
  if (!value) {
    return '0px'
  } if (typeof value === 'string') {
    return value
  }
  const {
    b = '0px',
    l = '0px',
    r = '0px',
    t = '0px',
  } = value

  return `${t} ${r} ${b} ${l}`
}

export const Spacing = styled.div<ISpacing>`
  width: fit-content;
  padding: ${({ p }) => spacingToString(p)};
  margin: ${({ m }) => spacingToString(m)};
`
