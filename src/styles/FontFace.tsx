import { css } from 'styled-components'
import CirceBold from 'assets/fonts/Circe-Bold.woff'
import CirceExtraBold from 'assets/fonts/Circe-ExtraBold.woff'
import CirceExtraLight from 'assets/fonts/Circe-ExtraLight.woff'
import CirceLight from 'assets/fonts/Circe-Light.woff'
import CirceRegular from 'assets/fonts/Circe-Regular.woff'
import CirceThin from 'assets/fonts/Circe-Thin.woff'

export const FontFace = css`
  @font-face {
    font-family: "Circe";
    src: url(${CirceThin}) format("woff");
    font-weight: 100;
  }

  @font-face {
    font-family: "Circe";
    src: url(${CirceExtraLight}) format("woff");
    font-weight: 200;
  }

  @font-face {
    font-family: "Circe";
    src: url(${CirceLight}) format("woff");
    font-weight: 300;
  }

  @font-face {
    font-family: "Circe";
    src: url(${CirceRegular}) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "Circe";
    src: url(${CirceBold}) format("woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "Circe";
    src: url(${CirceExtraBold}) format("woff");
    font-weight: 900;
  }

`
