const escape_html = hexo.extend.helper.get('escape_html').bind(hexo);
const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

// Bootstrap Core CSS, color mode, Icons
hexo.extend.injector.register('head_end', ()=>{ return '<link rel="stylesheet" href="/css/bootstrap.min.css">'});
hexo.extend.injector.register('head_end', ()=>{ return '<link rel="stylesheet" href="/css/color-modes.css">'});
hexo.extend.injector.register('head_end', ()=>{ return '<link rel="stylesheet" href="/bootstrap-icons/font/bootstrap-icons.css">'});
hexo.extend.injector.register('head_end', ()=>{ return '<script src="/js/bootstrap.bundle.min.js"></script>'});
hexo.extend.injector.register('head_end', ()=>{ return '<script type="module" src="/js/color-modes.js"></script>'});
hexo.extend.injector.register('head_end', ()=>{ return '<link rel="stylesheet" href="/css/highlight.css">'});

//clipboard module 
//hexo.extend.injector.register('head_end', ()=>{ return '<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js"></script>'});

// site scan sense module
hexo.extend.injector.register('head_end', ()=>{ return '<script src="https://cdn.jsdelivr.net/gh/BP-Devteam/sitescansense/s3module.min.js"></script>'});

// Init script when DOMContentLoaded
hexo.extend.injector.register('head_end', ()=>{ return '<script src="/js/init.js"></script>'});

// Lightbox for Bootstrap 5 https://github.com/trvswgnr/bs5-lightbox
hexo.extend.injector.register('body_end', ()=>{ return '<script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js"></script>'});