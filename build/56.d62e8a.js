(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{337:function(e,t,n){"use strict";function r(e){return u(e)||c(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var p=[{type:"use",icon:"permissions",text:"\u4f7f\u7528\u4e3b\u9898",enable:function e(){return!0}},{type:"edit",icon:"edit",text:"\u7f16\u8f91",enable:function e(t,n){return t.owner===n.empId||t.editor.includes(n.empId)}},{type:"view",icon:"eye",text:"\u67e5\u770b",enable:function e(t,n){return![t.owner].concat(r(t.editor)).includes(n.empId)}},{type:"clone",icon:"copy",text:"\u514b\u9686",enable:function e(){return!0}},{type:"set",icon:"set",text:"\u8bbe\u7f6e",enable:function e(t,n){return t.owner===n.empId}},{type:"remove",icon:"ashbin",text:"\u5220\u9664",enable:function e(t,n){return t.owner===n.empId}}];t.default=p}}]);