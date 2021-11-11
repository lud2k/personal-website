declare namespace BioCssModule {
  export interface IBioCss {
    bio: string
    bioItem: string
    special: string
  }
}

declare const BioCssModule: BioCssModule.IBioCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BioCssModule.IBioCss
}

export = BioCssModule
