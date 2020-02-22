declare namespace BackgroundCssModule {
  export interface IBackgroundCss {
    background: string
    line: string
  }
}

declare const BackgroundCssModule: BackgroundCssModule.IBackgroundCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BackgroundCssModule.IBackgroundCss
}

export = BackgroundCssModule
