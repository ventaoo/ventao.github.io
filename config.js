/* =============================================================================
 *  config.js  ——  网站可配置内容（你只需要改这一个文件）
 * -----------------------------------------------------------------------------
 *  用法：
 *    1. 直接修改下面 SITE_CONFIG 里的文字即可，不需要碰 index.html。
 *    2. 把 config.js 和 index.html 放在同一目录，一起上传到 GitHub 仓库根目录。
 *    3. 列表类（skills / experience / projects / contact 等）按数组增删即可，
 *       数组顺序 = 页面显示顺序；删除某项就少显示一项。
 *
 *  注意：
 *    - 字符串里的特殊符号（· ★ ✓ ▶ ⚑ 等）可直接粘贴，无需写 HTML 实体。
 *    - 留空字符串（""）该项仍会显示，只是为空；想去掉某项请从数组删除。
 * ========================================================================== */

window.SITE_CONFIG = {

  /* 浏览器标签页标题 & 搜索描述（SEO） */
  meta: {
    title:       "PLAYER_01 // 3DGS ALGORITHM ENGINEER",
    description: "3D 算法工程师个人主页 · 8bit 复古像素 × 3DGS 高斯泼溅 风格求职站"
  },

  /* 顶部导航左侧品牌名 */
  brand: "PLAYER_01",

  /* ===================== HERO 首屏 ===================== */
  hero: {
    boot:   "● RECONSTRUCTING… PLAYER_01 // 3DGS ENGINE",   // 开机引导行
    name:   "3DGS // RECON STATION",                       // 大标题（故障特效文案，与显示一致）
    classLevel: { cls: "3D ALGORITHM ENGINEER", level: "LV.99" }, // 职业等级
    sub:    "8-BIT PIXELS × 3D GAUSSIAN SPLATTING",      // 副标题
    /* 重建遥测状态条（◆ 图标会自动加） */
    hud: [
      { label: "SPLATS", val: "1.2M" },
      { label: "CAM",    val: "24"   },
      { label: "DEPTH",  val: "✓"    },
      { label: "FPS",    val: "60"   }
    ],
    /* 打字机循环标语（可任意增删句子） */
    typed: [
      "Reconstructing the world, one Gaussian at a time.",
      "把真实世界变成可渲染的三维模型。",
      "Seeking the next quest — 期待新机会。",
      "From pixels to points, end to end."
    ],
    /* 首屏按钮（cls: ""=黄主按钮, "alt"=绿, "ghost"=幽灵；download:true 触发下载） */
    btns: [
      { label: "▶ ENTER",        href: "#about",   cls: "",       download: false },
      { label: "⚑ HIRE ME",      href: "#contact", cls: "alt",   download: false },
      { label: "⤓ CV / RESUME",  href: "#",        cls: "ghost", download: true  }
    ]
  },

  /* ===================== PROFILE 玩家档案 ===================== */
  profile: {
    playerTag: "★ PLAYER 01",                                  // 头像卡标题栏
    name:      "ventao · 文涛",                                 // 真名（中英文用 · 分隔）
    bio:       "我是3D 算法工程师，做三维重建与神经渲染（3DGS / NeRF / SLAM），把真实场景变成能实时渲染的模型。",
    status:    "OPEN TO WORK · 可接受机会",                     // 头像卡底栏状态
    avatar:   "avatar.jpg",                                               // 头像照片路径（放同目录，例如 "avatar.jpg"；留空则显示像素机器人占位）
    /* 两栏信息（LABEL / 值） */
    meta: [
      { k: "LOCATION",    v: "中国 · 杭州" },
      { k: "EXPERIENCE",  v: "3+ Years"      },
      { k: "DEGREE",      v: "硕士 · 计算机" },
      { k: "LANG",        v: "中文 / 俄文 / 英文" }
    ],
    /* 学历（双行） */
    edu: [
      { deg: "应用数学与信息学 · 硕士",         school: "ITMO University (https://itmo.ru/)", years: "2024–2026" },
      { deg: "软件工程 · 学士",   school: "东华理工大学", years: "2018–2022" }
    ]
  },

  /* ===================== SKILLS 技能 ===================== */
  skills: {
    /* 能力值进度条（val: 0~100；cls 留空=绿, "c"=青, "m"=紫） */
    stats: [
      { label: "3D RECONSTRUCTION",   val: 95, cls: ""  },
      { label: "NEURAL RENDERING",     val: 93, cls: "c" },
      { label: "PYTHON / JAVA / JS",  val: 90, cls: "m" },
      { label: "GEOMETRY & OPT",       val: 88, cls: ""  },
      { label: "SLAM / SFM",           val: 84, cls: "c" },
      { label: "COMMUNICATION",        val: 86, cls: "m" }
    ],
    /* 技术栈分组（cls 决定圆点配色：sg-lg=青, sg-rd=紫, sg-tl=黄） */
    groups: [
      {
        title: " // LANG 语言",
        cls:   "sg-lg",
        chips: [ "Python ★★★", "JAVA ★★☆", "JS ★★☆" ]   // 字符串即可；想加 ★ 高亮写成对象见下
        // chips: [ { label: "Python ★★★", lv: true }, { label: "C++ ★★☆", lv: true } ]
      },
      {
        title: " // 3D / RENDER 三维与渲染",
        cls:   "sg-rd",
        chips: [ "3DGS", "NeRF", "COLMAP", "Open3D", "MeshLab",
                 "SLAM", "SFM", "MVS", "Real-Time Rendering" ]
      },
      {
        title: " // TOOL 工程与工具",
        cls:   "sg-tl",
        chips: [ "PyTorch", "Docker", "Git", "Linux", "CUDA" ]
      }
    ]
  },

  /* ===================== EXPERIENCE 经历 ===================== */
  experience: [
    {
      when: "2026.07 – NOW",
      role: "算法工程师",
      org:  "魔芯科技有限公司",
      desc: "负责三维重建与神经渲染管线，主导 3DGS / NeRF 在实时场景的落地，渲染质量与速度均有显著提升。"
    },
    {
      when: "2024.07 – 2026.06",
      role: "算法实习",
      org:  "ITMO University 矢量图象研究院",
      desc: "参与矢量图象的高效特征提取算法研究，提升适量图像处理效率和精度。"
    },
    {
      when: "2022.09 – 2023.06",
      role: "算法工程师",
      org:  "杭州视睿科技有限公司",
      desc: "半导体晶圆领域的分类和缺陷检测系统，基于深度学习算法，实现高精度检测和分类，提升生产效率和质量。"
    }
  ],

  /* ===================== PAPERS 论文 ===================== */
  /* 想增删论文：直接增删数组里的对象即可（顺序 = 页面显示顺序）。
     字段：badge(角标) / title(论文标题·建议英文) / authors(作者，把自己标粗或放首位)
           venue(发表会议/期刊·年份·类型) / desc(一句话摘要) / links(可跳转链接：PDF/CODE/DOI…) */
  papers: [
    {
      badge: "★ PAPER 01",
      title: "Gaussian Splatting for Real-Time 3D Scene Reconstruction",
      authors: "WenTao V., Li X., Smirnov A., et al.",
      venue:  "CVPR 2026 · Oral",
      desc:   "提出一种面向实时场景的 3D 高斯泼溅重建方法，在保持渲染质量的同时显著降低训练与推理耗时。",
      links:  [
        { label: "PDF",  href: "#" },
        { label: "CODE", href: "#" },
        { label: "DOI",  href: "#" }
      ]
    }
  ],

  /* ===================== CONTACT 求职意向 ===================== */
  contact: {
    /* 右侧卡片副标题（可改） */
    sub: "随时接受新机会 · 回复很快",
    /* 左侧「求职意向」列表（直接展示，便于复制）。
       注意：EMAIL 项不会显示在左侧列表里，而是自动驱动右侧卡片的大号邮箱 CTA（mailto）。
       想改邮箱，只改这里的 EMAIL.v 即可，左右两处会一起更新。 */
    intent: [
      { k: "TARGET ROLE",  v: "3D 算法工程师 / 神经渲染工程师 / 三维视觉" },
      { k: "LOCATION",     v: "杭州 / 上海 / 远程可接受" },
      { k: "AVAILABILITY", v: "随时到岗 · 全职" },
      { k: "EMAIL",        v: "ventaoczu@gmail.com" },   // ← 驱动右侧大号邮箱 CTA，不显示在左列
      { k: "WECHAT",       v: "ventaooo" }   // ← 直接展示微信号（非右侧链接形式）
    ],
    /* 社交/主页链接（href 改成你的真实地址） */
    socials: [
      { label: "GitHub",  href: "https://github.com/ventaoo" },
      { label: "telegram", href: "https://t.me/zwtttttt" }
    ],
    note: "如果你正在寻找一名能落地、能沟通、能扛事的 3D 算法工程师，欢迎随时联系，我会尽快回复 ♥"
  },

  /* 页脚版权行（// GAME OVER?... 提示语固定不变，仅此行内容可改） */
  footer: "© 2026 ventao · 文涛 · BUILT WITH PIXELS & ❤ · ALL RIGHTS RESERVED"

};
