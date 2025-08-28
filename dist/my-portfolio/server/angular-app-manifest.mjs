
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16129, hash: 'd2e3846cf915e81d61267e71b3964f903018a3983f848061d49a3f70092e1204', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16189, hash: '200561fabe14b8d6a159bf1802518b59036175e636df0a7b12adb83dfe305669', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 134386, hash: '7d4dfd67e575d2f7fbdd804825ce95c3624b9992b1888fa4becbc4c8d9db53e3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-KCT7EVVP.css': {size: 18853, hash: 'GNevp7bkN3c', text: () => import('./assets-chunks/styles-KCT7EVVP_css.mjs').then(m => m.default)}
  },
};
