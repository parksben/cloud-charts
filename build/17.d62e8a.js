(window.webpackJsonp=window.webpackJsonp||[]).push([[17,56,69],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O})),n.d(t,"TimeText",(function(){return j}));var r=n(0),a=n.n(r),o=n(245),i=n.n(o),c=n(105),u=n(76),l=n(337),s=n(613),f=n.n(s);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return g(e)||h(e,t)||v(e,t)||b()}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}function g(e){if(Array.isArray(e))return e}function O(e){var t=e.data,n=void 0===t?{}:t,i=e.operation,s=void 0===i?{}:i,f=e.showHistory,m=void 0===f?function(){}:f,p=n.name,b=n.template,v=n.owner,w=n.founder,h=n.department,g=n.created_at,O=n.history,E,S=y(Object(r.useState)({}),2),I=S[0],A=S[1];return Object(r.useEffect)((function(){if(O.length){var e=O[O.length-1]||{},t=e.writer,n=e.updated_at;Object(u.getUserByEmpId)(t).then((function(e){return A(d(d({},e),{},{updated_at:n}))}))}}),[]),a.a.createElement("div",{className:"theme-card"},a.a.createElement("a",{href:"/theme/".concat(n.owner===window.user.empId||n.editor.includes(window.user.empId)?"edit":"view","/").concat(n._id),target:"_blank",rel:"noopener noreferrer nofollow",className:"name"},p),a.a.createElement("div",{className:"tag-list"},"\u5f53\u524d\u7248\u672c\uff1a",a.a.createElement("span",{className:"version"},"V",O.length,".0")),a.a.createElement("div",{className:"note"},I.name?a.a.createElement(r.Fragment,null,"\u6700\u540e\u66f4\u65b0\u4e8e ",a.a.createElement(j,{value:I.updated_at})):a.a.createElement(r.Fragment,null,"\u521b\u5efa\u4e8e ",a.a.createElement(j,{value:g})),a.a.createElement("span",{className:"display-history",onClick:function e(){return m({template:b,founder:w,created_at:g,history:O})}},"\u5386\u53f2\u7248\u672c")),a.a.createElement("div",{className:"template"},"\u6a21\u677f\u6765\u6e90\uff1a",b),a.a.createElement("div",{className:"department"},"BU/\u56e2\u961f\uff1a",h),a.a.createElement("div",{className:"owner"},a.a.createElement(c.default,{empId:v})),a.a.createElement("div",{className:"operation"},l.default.map((function(e){var t=e.type,r=e.icon,i=e.text,c;return(0,e.enable)(n,window.user||{})?a.a.createElement("div",{key:"operation-".concat(t),className:t,onClick:function e(){return s[t](n)}},a.a.createElement(o.Icon,{size:"xs",type:r}),i):null}))))}function j(e){var t=e.value,n=new Date(t),r=n.toLocaleDateString();return r===(new Date).toLocaleDateString()&&(r="\u4eca\u5929"),[r,n.toLocaleTimeString()].join(" ")}},337:function(e,t,n){"use strict";function r(e){return c(e)||i(e)||o(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var l=[{type:"use",icon:"permissions",text:"\u4f7f\u7528\u4e3b\u9898",enable:function e(){return!0}},{type:"edit",icon:"edit",text:"\u7f16\u8f91",enable:function e(t,n){return t.owner===n.empId||t.editor.includes(n.empId)}},{type:"view",icon:"eye",text:"\u67e5\u770b",enable:function e(t,n){return![t.owner].concat(r(t.editor)).includes(n.empId)}},{type:"clone",icon:"copy",text:"\u514b\u9686",enable:function e(){return!0}},{type:"set",icon:"set",text:"\u8bbe\u7f6e",enable:function e(t,n){return t.owner===n.empId}},{type:"remove",icon:"ashbin",text:"\u5220\u9664",enable:function e(t,n){return t.owner===n.empId}}];t.default=l},613:function(e,t,n){}}]);