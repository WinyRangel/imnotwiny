
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
    'index.csr.html': {size: 16059, hash: 'ba5131f78f96a61df92044a8edb6d0e8399cfbbb2c8cef029d68d2eb2de829e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16133, hash: '6aa2397463c4dac735b34d613dc23763d905da33cd84ed98a0577e18ba6bb5a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 134316, hash: '94f30a602f57383f8f00af4bb6ede9fa8bc08a909567f01e758366a58f33f3e0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-KCT7EVVP.css': {size: 18853, hash: 'GNevp7bkN3c', text: () => import('./assets-chunks/styles-KCT7EVVP_css.mjs').then(m => m.default)}
  },
};
