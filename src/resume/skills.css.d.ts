declare namespace SkillsCssModule {
  export interface ISkillsCss {
    heartRect: string
    skill: string
    skillBar: string
    skillList: string
    skillListName: string
    skillName: string
    skillRow: string
    skillStar: string
    skillStarList: string
    skillStarName: string
    skillVBarName: string
    skills: string
    star: string
    starRect: string
    starVal: string
  }
}

declare const SkillsCssModule: SkillsCssModule.ISkillsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkillsCssModule.ISkillsCss
}

export = SkillsCssModule
