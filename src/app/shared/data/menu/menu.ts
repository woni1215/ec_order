export const menu = [
  {
    label: '首頁',
    routerLink: ['/main/dashboard'],
  },
  {
    label: '組織',
    routerLink: ['/main/organizations'],
  },
  {
    label: '使用者',
    routerLink: ['/main/users'],
  },
  {
    label: '角色',
    routerLink: ['/main/roles'],
  },
  {
    label: '權限',
    routerLink: ['/main/permissions'],
  },
  {
    label: '模型',
  },
  {
    label: '適配器',
  },
  {
    label: '供應商',
    routerLink: ['/main/providers'],
  },
  {
    label: '應用',
    routerLink: ['/main/applications'],
  },
  {
    label: '資源',
    routerLink: ['/main/resources'],
  },
  {
    label: '日誌',
    routerLink: ['/main/records'],
  },
  {
    label: 'Token',
    routerLink: ['/main/token'],
  },
  {
    label: 'Webhook',
    routerLink: ['/main/webhook'],
  },
  {
    label: '同步器',
  },
  {
    label: '證書',
  },
  {
    label: '商品',
  },
  {
    label: '付款',
  },
  {
    label: '系統信息',
  },
  {
    label: 'API文檔',
  }
];

export const memberMenu = [
  {
    label: '個人資料',
    // routerLink: ['/main/account-info'],
    routerLinkActiveOptions: {
      exact: true
    },
    icon: 'pi pi-fw pi-user-edit'
  },
  {
    label: '登出',
    icon: 'pi pi-fw pi-sign-out',
  },
];

export const translateMenu = [
  {
    label: 'English',
    icon: ''
  },
  {
    label: '繁體中文',
    icon: '',
  },
  {
    label: 'Español',
    icon: '',
  },
  {
    label: 'Français',
    icon: '',
  },
  {
    label: 'Deutsch',
    icon: '',
  },
  {
    label: '日本語',
    icon: '',
  },
  {
    label: '한국어',
    icon: '',
  },
  {
    label: 'Русский',
    icon: '',
  },
];
