declare namespace FirstPageCssModule {
  export interface IFirstPageCss {
    cut: string
    downArrow: string
    firstPage: string
  }
}

declare const FirstPageCssModule: FirstPageCssModule.IFirstPageCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FirstPageCssModule.IFirstPageCss
}

export = FirstPageCssModule
