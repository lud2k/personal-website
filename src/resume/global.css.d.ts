declare namespace GlobalCssModule {
  export interface IGlobalCss {
    hidePrint: string
    onlyPrintBlock: string
  }
}

declare const GlobalCssModule: GlobalCssModule.IGlobalCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GlobalCssModule.IGlobalCss
}

export = GlobalCssModule
