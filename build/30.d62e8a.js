(window.webpackJsonp=window.webpackJsonp||[]).push([[30,20,37,38],{419:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchList",(function(){return u}));var r=n(245),a=n.n(r),c=n(247),i=function t(e){return r.Feedback.toast.success(e)},o=function t(e,n){return r.Feedback.toast.error("".concat(e,": ").concat(String(n)))};function u(t){return c.default.fetch({api:"fetchAll",params:{module:"design"},data:{page:1,size:0}}).then((function(e){if(e&&0===e.status&&Array.isArray(e.data)){var n={},r=e.data.map((function(t){return n[t.category||""]?n[t.category||""].push(t):n[t.category||""]=[t],t})),a=Object.keys(n).map((function(t){return{name:t,children:n[t].map((function(t){var e=t.alias,n=t.name;return{name:e,href:"/design/".concat(n)}}))}}));t({type:"UPDATE_LIST",data:{list:r,nav:a,pagination:e.pagination}})}else o("\u6570\u636e\u8bf7\u6c42\u5f02\u5e38",e.message)})).catch((function(t){return o("\u6570\u636e\u8bf7\u6c42\u5f02\u5e38")}))}},420:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"initialState",(function(){return i})),n.d(e,"reducer",(function(){return o}));var i={list:[],nav:[],pagination:{}};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_LIST":return a(a({},t),e.data);default:return t}}},440:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var r=n(0),a=n.n(r),c=n(4),i=n(572),o=n.n(i),u=n(95),f=n(78),s=n(101),l=n(104),d=n(419),p=n(420);function y(t,e){return h(t)||v(t,e)||m(t,e)||b()}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var i=t[Symbol.iterator](),o;!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}function h(t){if(Array.isArray(t))return t}function O(t,e){var n=(t.match||{}).params.key,r=void 0===n?"":n,c=e.find((function(t){return t.name===r}))||{},i=c.alias,u=void 0===i?"":i,s=c.content,d=void 0===s?"":s;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"".concat(u," - \u8bbe\u8ba1\u8bed\u8a00 | ").concat(f.baseDocumentTitle)}),a.a.createElement(l.default,{source:d,title:u}))}function j(){var t,e=y(Object(r.useReducer)(p.reducer,p.initialState),2),n=e[0],i=e[1],l=n.nav,b=n.list,m=Object(c.g)(),g=Object(c.i)("/design/:name");return Object(r.useEffect)((function(){d.fetchList(i).then((function(t){t&&0===t.status&&Array.isArray(t.data)&&t.data[0]&&!g&&m.replace("/design/".concat(t.data[0].name))}))}),[]),a.a.createElement(u.default,{pageName:"design",sideMenu:a.a.createElement(s.default,{data:l})},a.a.createElement(o.a,{title:"\u8bbe\u8ba1\u8bed\u8a00 | ".concat(f.baseDocumentTitle)}),a.a.createElement(c.b,{path:"/design/:key",render:function t(e){return O(e,b)}}))}},585:function(t,e){}}]);