declare namespace WelcomeCssModule {
  export interface IWelcomeCss {
    engineer: string
    firstName: string
    introduction: string
    introductionChar: string
    introductionChars: string
    introductionCharsWrapper: string
    lastName: string
    name: string
    welcome: string
    word: string
  }
}

declare const WelcomeCssModule: WelcomeCssModule.IWelcomeCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: WelcomeCssModule.IWelcomeCss
}

export = WelcomeCssModule
