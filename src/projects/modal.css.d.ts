declare namespace ModalCssModule {
  export interface IModalCss {
    container: string
    description: string
    image: string
    modal: string
  }
}

declare const ModalCssModule: ModalCssModule.IModalCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModalCssModule.IModalCss
}

export = ModalCssModule
