class Color {
  main: string;
  main50: string;

  contrast: string;
  contrast50: string;

  constructor(main: string, contrast: string = '#ffffff') {
    this.main = main
    this.main50 = `${main}80`

    this.contrast = contrast
    this.contrast50 = `${contrast}80`
  }
}

export interface ITheme {
  colors: {
    error: Color,
    greenAccent: Color,
    primary: Color,
    redAccent: Color,
  },
}

export const theme: ITheme = {
  colors: {
    error: new Color('#C23E42'),
    greenAccent: new Color('#5E9574'),
    primary: new Color('#344273'),
    redAccent: new Color('#955E5E'),
  },
}
