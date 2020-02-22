declare namespace ResumeCssModule {
  export interface IResumeCss {
    column: string
    resume: string
  }
}

declare const ResumeCssModule: ResumeCssModule.IResumeCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ResumeCssModule.IResumeCss
}

export = ResumeCssModule
