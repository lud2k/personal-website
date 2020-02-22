declare namespace ProjectsCssModule {
  export interface IProjectsCss {
    image: string
    left: string
    list: string
    modal: string
    name: string
    project: string
    projects: string
    summary: string
    year: string
  }
}

declare const ProjectsCssModule: ProjectsCssModule.IProjectsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectsCssModule.IProjectsCss
}

export = ProjectsCssModule
