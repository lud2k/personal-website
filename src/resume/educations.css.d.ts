declare namespace EducationsCssModule {
  export interface IEducationsCss {
    education: string
    educationDate: string
    educationLocation: string
    educationTitle: string
    educations: string
  }
}

declare const EducationsCssModule: EducationsCssModule.IEducationsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: EducationsCssModule.IEducationsCss
}

export = EducationsCssModule
