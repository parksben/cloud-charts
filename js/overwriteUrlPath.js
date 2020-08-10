initDomHandlerTimer();

document.addEventListener('visibilitychange', function() {
  if (document.hidden && window.overwriteLinkTimer) {
    clearInterval(window.overwriteLinkTimer);
    window.overwriteLinkTimer = null;
  } else {
    initDomHandlerTimer();
  }
});

var domToHandle = [
  {
    tag: 'a',
    attr: 'href',
  },
  {
    tag: 'img',
    attr: 'src',
  },
  {
    tag: 'video',
    attr: 'src',
  },
];

function initDomHandlerTimer() {
  if (window.overwriteLinkTimer) {
    clearInterval(window.overwriteLinkTimer);
    window.overwriteLinkTimer = null;
  }

  window.overwriteLinkTimer = setInterval(function() {
    domToHandle.forEach(function(conf) {
      var nodes = Array.prototype.slice.apply(document.querySelectorAll(conf.tag));
      nodes.forEach(function(node) {
        const basePath = document.querySelector('base').getAttribute('href');
        const nodePath = node.getAttribute(conf.attr);
        if (nodePath === basePath) {
          return;
        }
        if (/^\/[^/]+/.test(nodePath)) {
          node.setAttribute(conf.attr, nodePath.replace(/^\//, ''));
        }
        if (nodePath === '/') {
          node.setAttribute(conf.attr, basePath);
        }
      });
    });
  }, 1e3);
}
