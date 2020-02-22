declare namespace TrianglesCssModule {
  export interface ITrianglesCss {
    triangle: string
    triangles: string
  }
}

declare const TrianglesCssModule: TrianglesCssModule.ITrianglesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TrianglesCssModule.ITrianglesCss
}

export = TrianglesCssModule
