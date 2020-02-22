declare namespace ExperiencesCssModule {
  export interface IExperiencesCss {
    date: string
    experience: string
    experienceDate: string
    experienceDescription: string
    experienceLocation: string
    experienceTitle: string
    experiences: string
    location: string
  }
}

declare const ExperiencesCssModule: ExperiencesCssModule.IExperiencesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExperiencesCssModule.IExperiencesCss
}

export = ExperiencesCssModule
