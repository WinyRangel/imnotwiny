
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/imnotwiny/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/imnotwiny/home"
  },
  {
    "renderMode": 2,
    "route": "/imnotwiny/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16056, hash: '5a0e40611a9cf467ac10c8914a0712879f5df30744751e47afc3d633ffa678f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16130, hash: '1e71a2aa203633ce4e1f2953591896ffba37f6608b1d203a697272bc3393a2ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 133848, hash: '896942c72137bb62fa1831b5d4294cb7c4f1b7232f06812268080ca8a3f41c09', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-KCT7EVVP.css': {size: 18853, hash: 'GNevp7bkN3c', text: () => import('./assets-chunks/styles-KCT7EVVP_css.mjs').then(m => m.default)}
  },
};
