(window.webpackJsonp=window.webpackJsonp||[]).push([[13,20,31,46,47,65],{121:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(155),i=n.n(c),o=n(445),u=n(630),l=n.n(u),f=n(158);i.a.render(a.a.createElement(f.a,null,a.a.createElement(o.default,null)),document.getElementById("container"))},427:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchList",(function(){return u}));var r=n(245),a=n.n(r),c=n(247),i=function t(e){return r.Feedback.toast.success(e)},o=function t(e,n){return r.Feedback.toast.error("".concat(e,": ").concat(n.toString()))};function u(t){return c.default.fetch({api:"fetchAll",params:{module:"tutorial"},data:{page:1,size:0}}).then((function(e){if(e&&0===e.status&&Array.isArray(e.data)){var n={},r=e.data.map((function(t){return n[t.category||""]?n[t.category||""].push(t):n[t.category||""]=[t],t})),a=Object.keys(n).map((function(t){return{name:t,children:n[t].map((function(t){var e=t.alias,n=t.name;return{name:e,href:"/quickstart/".concat(n)}}))}}));t({type:"UPDATE_LIST",data:{list:r,nav:a,pagination:e.pagination}})}else o("\u6570\u636e\u8bf7\u6c42\u5f02\u5e38",e.message)})).catch((function(t){return o("\u6570\u636e\u8bf7\u6c42\u5f02\u5e38")}))}},428:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"initialState",(function(){return i})),n.d(e,"reducer",(function(){return o}));var i={list:[],nav:[],pagination:{}};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_LIST":return a(a({},t),e.data);default:return t}}},445:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var r=n(0),a=n.n(r),c=n(4),i=n(573),o=n.n(i),u=n(95),l=n(78),f=n(101),s=n(104),d=n(427),p=n(428);function m(t,e){return g(t)||v(t,e)||b(t,e)||y()}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i=t[Symbol.iterator](),o;!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}function g(t){if(Array.isArray(t))return t}function O(t,e){var n=(t.match||{}).params.key,r=void 0===n?"":n,c=e.find((function(t){return t.name===r}))||{},i=c.alias,u=void 0===i?"":i,f=c.content,d=void 0===f?"":f;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"".concat(u," - \u5f00\u53d1\u6307\u5357 | ").concat(l.baseDocumentTitle)}),a.a.createElement(s.default,{source:d,title:u}))}function j(){var t,e=m(Object(r.useReducer)(p.reducer,p.initialState),2),n=e[0],i=e[1],s=n.nav,y=n.list,b=Object(c.h)(),h=Object(c.g)();return Object(r.useEffect)((function(){d.fetchList(i).then((function(t){var e=Object(c.f)(b.pathname,{path:"/quickstart/:key"});t&&0===t.status&&Array.isArray(t.data)&&t.data[0]&&!e&&h.replace("/quickstart/".concat(t.data[0].name))}))}),[]),a.a.createElement(u.default,{pageName:"quickstart",sideMenu:a.a.createElement(f.default,{data:s})},a.a.createElement(o.a,{title:"\u5f00\u53d1\u6307\u5357 | ".concat(l.baseDocumentTitle)}),a.a.createElement(c.b,{path:"/quickstart/:key",render:function t(e){return O(e,y)}}))}},586:function(t,e){},630:function(t,e,n){}}]);