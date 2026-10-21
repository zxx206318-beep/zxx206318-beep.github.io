/*
 * PORTFOLIO CONTENT
 * 中文是默认语言。带 { zh, en } 的字段会在切换语言时自动更新。
 * 替换姓名、学校和项目信息时，请保留现有数据结构。
 */
window.PORTFOLIO = {
  defaultLanguage: "zh",

  profile: {
    name: "邹欣璇",
    initials: "ZXX",
    role: {
      zh: "游戏美术 / 关卡设计",
      en: "GAME ART / LEVEL DESIGN",
    },
    intro: {
      zh: "中国传媒大学 28 级游戏艺术学生。项目覆盖角色视觉开发、ZBrush 制作、绑定动画、关卡空间与引擎内呈现。",
      en: "Game art student in Cohort '28 at Communication University of China, working across character art, ZBrush production, rigging, animation and in-engine level design.",
    },
    availability: {
      zh: "求职中 · 可投递",
      en: "OPEN TO OPPORTUNITIES",
    },
    location: {
      zh: "中国 · 可远程 / 到岗",
      en: "China · Remote / On-site",
    },
    status: {
      zh: "中国传媒大学 · 28 级",
      en: "Communication University of China · Cohort '28",
    },
    email: "15907135898@163.com",
    phone: "15907135898",
    qq: "1517315426",
    wechat: "zxx0631806610",
    xiaohongshu: "1309104376",
    resumeUrl: "#",
    heroImage: "./pictures/web/4.jpg",
    heroAlt: {
      zh: "风格化 3D 角色作品",
      en: "Stylized 3D character artwork",
    },
    heroWorkId: "rollout",
    facts: [
      {
        label: { zh: "主要方向", en: "FOCUS" },
        value: { zh: "3D 角色与视觉开发", en: "3D Character Art" },
      },
      {
        label: { zh: "工具", en: "TOOLS" },
        value: { zh: "Unreal Engine / Maya / Blender", en: "Unreal Engine / Maya / Blender" },
      },
      {
        label: { zh: "当前状态", en: "STATUS" },
        value: { zh: "可投递作品集", en: "Portfolio available" },
      },
    ],
  },

  copy: {
    meta: {
      title: {
        zh: "{name} — 游戏美术与关卡设计作品集",
        en: "{name} — Game Art & Level Design Portfolio",
      },
      description: {
        zh: "游戏美术与关卡设计学生作品集，展示角色设计、生物雕刻、材质、绑定动画和关卡空间设计项目。",
        en: "Portfolio of game art and level design work, including character art, creature sculpting, materials, rigging, animation and spatial design.",
      },
    },
    skip: { zh: "跳到主要内容", en: "Skip to content" },
    menu: { open: { zh: "打开菜单", en: "Open menu" } },
    nav: {
      work: { zh: "作品", en: "Work" },
      capabilities: { zh: "能力", en: "Skills" },
      experience: { zh: "经历", en: "Background" },
      contact: { zh: "联系", en: "Contact" },
    },
    hero: {
      eyebrow: { zh: "游戏美术作品集 / 2026", en: "GAME ART PORTFOLIO / 2026" },
      viewWork: { zh: "查看作品", en: "View Work" },
      contact: { zh: "联系我", en: "Contact" },
      visualLabel: { zh: "精选总览", en: "FEATURED OVERVIEW" },
      pagerLabel: { zh: "切换精选项目", en: "Switch featured project" },
    },
    work: {
      eyebrow: { zh: "作品总览 / 01", en: "PROJECT INDEX / 01" },
      title: { zh: "作品总览", en: "Project Index" },
      intro: {
        zh: "合作游戏、角色概念与个人美术创作。先浏览作品全貌，再进入项目查看完整制作说明。",
        en: "Co-op game production, character concepts and personal artwork. Scan the overview, then open a project for the full breakdown.",
      },
      all: { zh: "全部", en: "All" },
      viewProject: { zh: "查看项目", en: "View Project" },
      featured: { zh: "精选", en: "Featured" },
      empty: { zh: "暂无这个分类的作品。", en: "No projects in this category yet." },
      count: { zh: "个项目", en: "projects" },
    },
    categories: {
      game: { zh: "游戏项目", en: "Game Project" },
      character: { zh: "角色设计", en: "Character Art" },
      zbrush: { zh: "ZBrush", en: "ZBrush" },
      personal: { zh: "个人美术创作", en: "Personal Artwork" },
    },
    capabilities: {
      eyebrow: { zh: "能力范围 / 02", en: "CAPABILITIES / 02" },
      title: { zh: "能力范围", en: "Capabilities" },
      intro: {
        zh: "按项目阶段划分，明确可以参与和负责的工作。",
        en: "Work scoped by project stage, from visual development to engine implementation.",
      },
      toolkit: { zh: "常用工具", en: "TOOLKIT" },
    },
    experience: {
      eyebrow: { zh: "教育与项目经历 / 03", en: "BACKGROUND / 03" },
      title: { zh: "教育与项目经历", en: "Education & Projects" },
      intro: {
        zh: "记录专业背景、项目职责和协作经验。",
        en: "Education, project responsibilities and collaboration experience.",
      },
    },
    contact: {
      eyebrow: { zh: "联系方式 / 04", en: "CONTACT / 04" },
      title: { zh: "联系方式", en: "Get in Touch" },
      intro: {
        zh: "游戏美术、绑定动画或关卡设计岗位，欢迎通过邮件、电话或微信联系。",
        en: "Available for game art, rigging, animation and level design opportunities. Reach me by email, phone or WeChat.",
      },
      resume: { zh: "下载简历", en: "Download CV" },
      resumePending: { zh: "简历待补充", en: "CV coming soon" },
      phone: { zh: "电话", en: "PHONE" },
      qq: { zh: "QQ", en: "QQ" },
      wechat: { zh: "微信", en: "WECHAT" },
      xiaohongshu: { zh: "小红书", en: "REDNOTE" },
      copy: { zh: "点击复制", en: "Click to copy" },
      copied: { zh: "已复制", en: "Copied" },
    },
    footer: {
      direction: { zh: "游戏美术 · 关卡设计", en: "GAME ART · LEVEL DESIGN" },
      top: { zh: "回到顶部 ↑", en: "Back to top ↑" },
    },
    dialog: {
      close: { zh: "关闭项目详情", en: "Close project details" },
      empty: { zh: "项目图片和视频待补充。", en: "Project media coming soon." },
    },
    language: { zh: "切换语言", en: "Switch language" },
  },

  /*
   * 作品数据：
   * category 对应 copy.categories 中的 key。
   * layout 可选 "wide" 或 "standard"。
   * cover、images、videos 均可继续增加。
   */
  works: [
    {
      id: "rollout",
      title: "ROLLOUT",
      category: "game",
      year: "2026",
      layout: "wide",
      featured: true,
      cover: "./pictures/web/5.jpg",
      subtitle: {
        zh: "双人骑车合作游戏 / 低多边形视觉",
        en: "Co-op Bike Game / Low-Poly Visuals",
      },
      roles: {
        zh: ["整体美术风格", "角色建模", "绑定与动画", "关卡地编", "材质制作"],
        en: ["Art direction", "Character modeling", "Rigging & animation", "Level art", "Materials"],
      },
      description: {
        zh: "双人合作骑车游戏，以《Jet Set Radio》为视觉灵感，用低面数造型、高饱和色彩与涂鸦式界面还原千禧年前后的复古游戏氛围；整体美术风格由我负责敲定。",
        en: "A two-player co-op bike game inspired by Jet Set Radio, using low-poly forms, saturated color and graphic UI to evoke early-2000s game culture. I also defined the project's overall art direction.",
      },
      caseStudy: [
        {
          label: { zh: "项目概念与设定", en: "CONCEPT" },
          text: {
            zh: "这是一个双人合作的骑车游戏。美术灵感来自《Jet Set Radio》，希望还原 PS3 时期的复古千禧年氛围，并采用低面数和强图形化的视觉风格。",
            en: "A two-player co-op bike game inspired by Jet Set Radio. The visual direction combines low-poly modeling, bold graphic shapes and a retro millennium atmosphere associated with the PS3 era.",
          },
        },
        {
          label: { zh: "个人负责内容", en: "MY ROLE" },
          text: {
            zh: "项目的整体美术风格由我负责敲定，并负责角色建模、绑定、动画和地编，同时参与材质制作。除 UI 以外的美术内容大部分由我完成，因此也负责把控整个项目的美术流程与落地。",
            en: "I defined the project's overall art direction and handled character modeling, rigging, animation and level art, while also contributing to materials. I was the sole artist outside of UI, which meant owning most of the visual pipeline from asset creation to in-engine implementation.",
          },
        },
        {
          label: { zh: "制作流程与工具", en: "PIPELINE" },
          text: {
            zh: "通常在 Maya 或 Blender 中建立模型；需要时进入 ZBrush 雕刻，并根据情况在 ZBrush 或手动拓扑；随后在 RizomUV 中拆分 UV，在 Substance Painter 中制作贴图；有特殊材质需求时，再到 Unreal Engine 中制作材质球。",
            en: "Modeling starts in Maya or Blender, followed by optional ZBrush sculpting and either ZBrush or manual retopology. UVs are prepared in RizomUV and textures are created in Substance Painter; specialized materials are developed in Unreal Engine.",
          },
        },
        {
          label: { zh: "成果与收获", en: "OUTCOME" },
          text: {
            zh: "最终游戏流程约 20 分钟，共三关，约三分之二的测试玩家能够通关，游玩过程反馈积极。这是我第一次较完整地参与游戏制作，让我理解了完整开发流程，尤其是美术生产与引擎落地之间的衔接。",
            en: "The finished game runs for roughly 20 minutes across three levels, with about two-thirds of playtesters completing it and positive feedback during play. It was my first substantial game-production experience and clarified the complete pipeline, especially how art production connects to implementation in the engine.",
          },
        },
      ],
      images: [
        "./pictures/web/5.jpg",
        "./pictures/web/6.jpg",
        "./pictures/web/4.jpg",
        "./pictures/web/1.jpg",
        "./pictures/web/2.jpg",
        "./pictures/web/3.jpg",
        "./pictures/web/ue材质球.jpg",
        "./pictures/web/HighresScreenshot00000.jpg",
        "./pictures/web/HighresScreenshot00001.jpg",
        "./pictures/web/HighresScreenshot00002.jpg",
        "./pictures/web/HighresScreenshot00004.jpg",
        "./pictures/web/HighresScreenshot00005.jpg",
        "./pictures/web/HighresScreenshot00006.jpg",
        "./pictures/web/ScreenShot00000.jpg",
        "./pictures/previews/binding-01.gif",
        "./pictures/previews/binding-02.gif",
      ],
      videos: [
        { src: "./pictures/绑定+动画.mp4", label: { zh: "角色绑定与动画测试 01", en: "Character Rig & Animation Test 01" } },
        { src: "./pictures/绑定+动画2.mp4", label: { zh: "角色绑定与动画测试 02", en: "Character Rig & Animation Test 02" } },
        { src: "./pictures/游戏画面.mp4", label: { zh: "街区骑行实机片段", en: "City Bike Gameplay" } },
        { src: "./pictures/level2.mp4", label: { zh: "室内关卡实机片段", en: "Interior Level Gameplay" } },
      ],
    },
    {
      id: "creature-study",
      title: "CREATURE STUDY",
      category: "zbrush",
      year: "2026",
      layout: "standard",
      cover: "./pictures/web/monster1.jpg",
      subtitle: { zh: "ZBrush 生物雕刻与材质", en: "ZBrush Creature Sculpt & Materials" },
      roles: {
        zh: ["生物造型", "ZBrush 雕刻", "UV 与贴图", "Substance Painter"],
        en: ["Creature design", "ZBrush sculpting", "UV & textures", "Substance Painter"],
      },
      description: {
        zh: "从整体生物体块与姿态出发，在 ZBrush 中完成头部、四肢和皮肤表面雕刻，再通过 Substance Painter 制作血管、肤色与皮肤细节。",
        en: "A creature study developed from primary forms and pose in ZBrush, followed by head, limb and skin detailing and finalized with vascular texture work in Substance Painter.",
      },
      images: [
        "./pictures/web/monster1.jpg",
        "./pictures/web/monster3.jpg",
        "./pictures/web/monster4.jpg",
        "./pictures/web/monster2.jpg",
      ],
      videos: [],
    },
    {
      id: "officer-concept",
      title: "OFFICER CONCEPT",
      category: "character",
      year: "2026",
      layout: "standard",
      featured: true,
      cover: "./pictures/web/officer-cover.jpg",
      subtitle: { zh: "风格化角色概念设计", en: "Stylized Character Concept" },
      roles: {
        zh: ["角色造型", "服装与勋章设计", "概念绘制"],
        en: ["Character silhouette", "Costume & insignia", "Concept painting"],
      },
      description: {
        zh: "以厚重轮廓、旧军装与错位勋章建立角色的身份感，并通过粗笔触与背景草图强化概念设计的叙事氛围。",
        en: "A stylized character concept built around a heavy silhouette, worn uniform and fragmented insignia, with loose brushwork and background studies reinforcing the narrative tone.",
      },
      images: ["./pictures/web/officer-cover.jpg", "./pictures/web/officer-concept.jpg"],
      videos: [],
    },
    {
      id: "surreal-room",
      title: "SURREAL ROOM",
      category: "personal",
      year: "2025",
      layout: "standard",
      featured: true,
      cover: "./pictures/web/surreal-room.jpg",
      subtitle: { zh: "超现实室内场景与循环动画", en: "Surreal Interior & Loop Animation" },
      roles: {
        zh: ["场景搭建", "材质与灯光", "镜头与场景动画"],
        en: ["Environment build", "Materials & lighting", "Camera & scene animation"],
      },
      description: {
        zh: "以涂鸦、鱼形装置和错位室内元素构成一个小型超现实空间，通过冷暖灯光、材质对比与循环镜头建立奇异但统一的场景节奏。",
        en: "A compact surreal interior assembled from graphic objects, fish motifs and displaced room elements, unified through contrasting lighting, materials and a looping camera study.",
      },
      images: [
        "./pictures/web/surreal-room.jpg",
        "./pictures/previews/surreal-room.gif",
      ],
      videos: [
        { src: "./pictures/003_ntsc_1.mp4", label: { zh: "超现实场景循环动画", en: "Surreal Scene Loop Animation" } },
      ],
    },
  ],

  capabilities: [
    {
      number: "01",
      title: { zh: "角色视觉开发", en: "Character Art" },
      summary: {
        zh: "从概念、ZBrush 模型到引擎内呈现，建立角色与生物的造型和视觉识别。",
        en: "Turning concepts into clear 3D characters and creatures, from ZBrush modeling to in-engine presentation.",
      },
      tags: {
        zh: ["造型", "ZBrush 雕刻", "材质", "灯光", "风格化渲染"],
        en: ["Design", "ZBrush sculpting", "Materials", "Lighting", "Stylized rendering"],
      },
    },
    {
      number: "02",
      title: { zh: "绑定与动作", en: "Rigging & Animation" },
      summary: {
        zh: "完成角色绑定，并通过动作与镜头测试表现效果。",
        en: "Building character rigs and validating them through motion and camera tests.",
      },
      tags: {
        zh: ["骨骼绑定", "角色动画", "镜头测试"],
        en: ["Rigging", "Character animation", "Camera tests"],
      },
    },
    {
      number: "03",
      title: { zh: "关卡空间设计", en: "Level Design" },
      summary: {
        zh: "通过空间层次、玩家动线与地标组织关卡体验。",
        en: "Organizing experiences through spatial hierarchy, player flow and landmarks.",
      },
      tags: {
        zh: ["玩家动线", "视觉引导", "氛围叙事", "白模"],
        en: ["Player flow", "Visual guidance", "Atmosphere", "Blockout"],
      },
    },
  ],

  tools: ["Unreal Engine", "Maya", "Blender", "ZBrush", "Substance Painter"],

  experience: [
    {
      period: { zh: "28 级", en: "COHORT '28" },
      type: { zh: "教育", en: "EDUCATION" },
      title: { zh: "中国传媒大学 · 游戏艺术", en: "Communication University of China · Game Art" },
      text: {
        zh: "围绕角色视觉开发、ZBrush 模型与雕刻、绑定动画和关卡空间设计持续完成课程与个人项目。",
        en: "Developing character art, ZBrush modeling and sculpting, rigging, animation and spatial design through coursework and independent projects.",
      },
    },
    {
      period: { zh: "项目", en: "PROJECT" },
      type: { zh: "实践", en: "PRACTICE" },
      title: { zh: "角色与 Unreal Engine 场景实践", en: "Character & Unreal Engine Environment Practice" },
      text: {
        zh: "从角色造型、骨骼测试延伸到关卡搭建与引擎内呈现，关注完整的视觉实现流程。",
        en: "Extending character art and rigging work into level construction and in-engine presentation, with a focus on the complete visual pipeline.",
      },
    },
  ],

  socials: [],
};
