(window.webpackJsonp=window.webpackJsonp||[]).push([[28,16,17,18,19,36,54,55,56,57,68,69,70,71],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(0),o=n.n(r),a=n(589),i=n.n(a),c=n(245),l=n.n(c),u=n(570),s=n.n(u),f=n(76),d=n(247),m=n(263),p=n(78),g=n(94),b=n(577),y=n.n(b);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){return S(e)||_(e,t)||E(e,t)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function S(e){if(Array.isArray(e))return e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&I(e.prototype,t),n&&I(e,n),e}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}function N(e,t){return(N=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function P(e){var t=D();return function n(){var r=U(e),o;if(t){var a=U(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return A(this,o)}}function A(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}var M=c.Form.Item,H={labelCol:{fixedSpan:4},wrapperCol:{span:18}},z=function(e){x(n,e);var t=P(n);function n(e){var r;return T(this,n),(r=t.call(this,e)).field=new c.Field(C(r)),r}return k(n,[{key:"componentDidMount",value:function e(){var t=this;if(this.props.source){var n=this.props.source,r=n.name,o=n.template,a=n.owner,i=n.department,c=n.editor,l=n.logo;Promise.all([Object(f.getUserByEmpId)(a),Object(f.getMultiUserByEmpIds)(c)]).then((function(e){var n=v(e,2),u=n[0],s=n[1];t.field.setValues({name:r,template:o,owner:a,owner_info:[{empId:a,stageName:u.name}],department:i,editor:c,editor_info:s.map((function(e){var t=e.name,n;return{empId:e.empId,stageName:t}})),logo:l})}))}else{var s=window.user.empId;Object(f.getUserByEmpId)(s).then((function(e){t.field.setValues({theme_mapping:Object(m.themeKeyFilter)(u.themes.getTheme(p.THEME_LIST[0].value)),owner:s,owner_info:[{empId:s,stageName:e.name}],department:e.depDesc.split("-")[3]})}))}}},{key:"render",value:function e(){var t=this,n=this.props,r=n.source,a=n.onSubmit,l=n.onCancel,s=this.field,f=s.init,b=s.validate,y=s.setValues,w=s.getValues,v=s.getErrors,O=s.setErrors;return o.a.createElement(c.Form,{className:"theme-setting",size:"large",direction:"ver",field:this.field},o.a.createElement(M,h({label:"\u4e3b\u9898\u540d\u79f0"},H),o.a.createElement(c.Input,h({},f("name",{rules:{required:!0,message:"\u4e3b\u9898\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"},props:{onChange:function e(n){t.checkThemeNameTimeout&&clearTimeout(t.checkThemeNameTimeout),t.checkThemeNameTimeout=setTimeout((function(){d.default.fetch({api:"findTheme",data:{name:n}}).then((function(e){var t;e&&0===e.status&&Array.isArray(e.data)&&(e.data.filter((function(e){return e._id!==r._id})).length>0&&O({name:"\u540c\u540d\u4e3b\u9898\u5df2\u5b58\u5728\uff0c\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u547d\u540d"}))}))}),500)}}}),{placeholder:"\u4e3b\u9898\u540d\u79f0"}))),!this.props.hideTemplate&&o.a.createElement(M,h({label:"\u6a21\u677f\u6765\u6e90"},H),this.props.source?o.a.createElement(c.Input,h({},f("template",{rules:{required:!0,message:"\u6a21\u677f\u6765\u6e90\u5fc5\u9009"}}),{disabled:!0})):o.a.createElement(g.ThemeSwitchControl,h({},f("template",{initValue:"".concat(p.THEME_LIST[0].label,"@widgets_v").concat(window.siteOptionMapping.aisc_widgets_lib_version),rules:{required:!0,message:"\u6a21\u677f\u6765\u6e90\u5fc5\u9009"},props:{onChange:function e(t,n){var r=n.label,o=(p.THEME_LIST.find((function(e){return e.label===r}))||{}).value;return y({theme_mapping:Object(m.themeKeyFilter)(u.themes.getTheme(o))}),t}}}),{data:p.THEME_LIST.map((function(e){var t=e.label,n=e.color,r=window.siteOptionMapping.aisc_widgets_lib_version,o;return{label:t,value:"".concat(t,"@widgets_v").concat(r),color:n}}))}))),o.a.createElement(M,h({label:"BU/\u56e2\u961f"},H),o.a.createElement(c.Input,h({},f("department",{rules:{required:!0,message:"BU/\u56e2\u961f\u4e0d\u80fd\u4e3a\u7a7a"}}),{placeholder:"BU/\u56e2\u961f"}))),o.a.createElement(M,h({label:"Owner"},H),o.a.createElement(i.a,h({},f("owner_info",{rules:{required:!0,message:"Owner \u4e0d\u80fd\u4e3a\u7a7a"},props:{onChange:function e(t){y({owner:(t[0]||{}).empId,owner_info:t})}}}),{needEmpId:!0,maxNum:1,className:"owner-picker"}))),o.a.createElement(M,h({label:"\u7f16\u8f91\u6743\u9650"},H),o.a.createElement(i.a,h({},f("editor_info",{props:{onChange:function e(t){y({editor:t.map((function(e){return e.empId})),editor_info:t})}}}),{needEmpId:!0,className:"editor-picker"}))),o.a.createElement(M,h({className:"theme-setting-footer",label:""},H),o.a.createElement(c.Button,{type:"primary",onClick:function e(){Object.values(v()).every((function(e){return null===e}))&&b(),Object.values(v()).every((function(e){return null===e}))&&a(w())}},"\u786e\u5b9a"),o.a.createElement(c.Button,{type:"normal",onClick:l},"\u53d6\u6d88")))}}]),n}(r.Component)},108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(0),o=n.n(r),a=n(612),i=n.n(a);function c(e,t){return d(e)||f(e,t)||u(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function d(e){if(Array.isArray(e))return e}function m(e){var t=e.source,n=void 0===t?[]:t,a=e.defaultValue,i=void 0===a?"":a,l=e.value,u=e.onChange,s=void 0===u?function(){}:u,f,d=c(Object(r.useState)(i||n[0]),2),m=d[0],p=d[1];return Object(r.useEffect)((function(){s(m)}),[m]),Object(r.useEffect)((function(){p(l)}),[l]),o.a.createElement("div",{className:"tag-select"},n.map((function(e){return o.a.createElement("div",{className:"tag-item ".concat(m===e?"active":""),onClick:function t(){return p(e)},key:"tag_".concat(e)},e)})))}},109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O})),n.d(t,"TimeText",(function(){return E}));var r=n(0),o=n.n(r),a=n(245),i=n.n(a),c=n(105),l=n(76),u=n(337),s=n(613),f=n.n(s);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return v(e)||h(e,t)||y(e,t)||b()}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function v(e){if(Array.isArray(e))return e}function O(e){var t=e.data,n=void 0===t?{}:t,i=e.operation,s=void 0===i?{}:i,f=e.showHistory,d=void 0===f?function(){}:f,p=n.name,b=n.template,y=n.owner,w=n.founder,h=n.department,v=n.created_at,O=n.history,j,_=g(Object(r.useState)({}),2),S=_[0],T=_[1];return Object(r.useEffect)((function(){if(O.length){var e=O[O.length-1]||{},t=e.writer,n=e.updated_at;Object(l.getUserByEmpId)(t).then((function(e){return T(m(m({},e),{},{updated_at:n}))}))}}),[]),o.a.createElement("div",{className:"theme-card"},o.a.createElement("a",{href:"/theme/".concat(n.owner===window.user.empId||n.editor.includes(window.user.empId)?"edit":"view","/").concat(n._id),target:"_blank",rel:"noopener noreferrer nofollow",className:"name"},p),o.a.createElement("div",{className:"tag-list"},"\u5f53\u524d\u7248\u672c\uff1a",o.a.createElement("span",{className:"version"},"V",O.length,".0")),o.a.createElement("div",{className:"note"},S.name?o.a.createElement(r.Fragment,null,"\u6700\u540e\u66f4\u65b0\u4e8e ",o.a.createElement(E,{value:S.updated_at})):o.a.createElement(r.Fragment,null,"\u521b\u5efa\u4e8e ",o.a.createElement(E,{value:v})),o.a.createElement("span",{className:"display-history",onClick:function e(){return d({template:b,founder:w,created_at:v,history:O})}},"\u5386\u53f2\u7248\u672c")),o.a.createElement("div",{className:"template"},"\u6a21\u677f\u6765\u6e90\uff1a",b),o.a.createElement("div",{className:"department"},"BU/\u56e2\u961f\uff1a",h),o.a.createElement("div",{className:"owner"},o.a.createElement(c.default,{empId:y})),o.a.createElement("div",{className:"operation"},u.default.map((function(e){var t=e.type,r=e.icon,i=e.text,c;return(0,e.enable)(n,window.user||{})?o.a.createElement("div",{key:"operation-".concat(t),className:t,onClick:function e(){return s[t](n)}},o.a.createElement(a.Icon,{size:"xs",type:r}),i):null}))))}function E(e){var t=e.value,n=new Date(t),r=n.toLocaleDateString();return r===(new Date).toLocaleDateString()&&(r="\u4eca\u5929"),[r,n.toLocaleTimeString()].join(" ")}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),o=n.n(r),a=n(614),i=n.n(a);function c(e){var t=e.onClick,n=e.text,r=void 0===n?"\u65b0\u5efa\u4e3b\u9898":n;return o.a.createElement("div",{className:"theme-creator",onClick:t},o.a.createElement("div",null,r))}},263:function(e,t,n){"use strict";n.r(t),n.d(t,"themeKeyFilter",(function(){return c})),n.d(t,"guiToTheme",(function(){return s})),n.d(t,"themeToGui",(function(){return f})),n.d(t,"getDiff",(function(){return d})),n.d(t,"convertColorScale",(function(){return m}));var r=n(570),o=n.n(r),a=n(264),i={"widgets-color-background":"#ffffff","widgets-color-layout-background":"#000000","widgets-color-blue":"#3f90ff","widgets-color-orange":"#fa8c15","widgets-color-red":"#e62412","widgets-color-green":"#15ad31","widgets-color-gray":"#e5e5e5",category_12:[],linear_10:[],order_10:[],"widgets-color-text-1":"#262626","widgets-color-text-2":"#595959","widgets-color-text-3":"#8c8c8c","widgets-color-disable":"#bfbfbf","widgets-font-family-txd-m-number":"'TXDDINMediumNumber', 'Helvetica Neue', 'Helvetica', 'PingFang SC', 'Microsoft YaHei', 'Arial', sans-serif","widgets-font-family-txd-r-number":"'TXDDINRegularNumber', 'Helvetica Neue', 'Helvetica', 'PingFang SC', 'Microsoft YaHei', 'Arial', sans-serif","widgets-font-size-1":"12px","widgets-font-size-2":"14px","widgets-font-size-3":"16px","widgets-font-size-4":"18px","widgets-font-size-5":"24px","widgets-font-size-6":"28px","widgets-font-size-7":"32px","widgets-legend-uncheck":"#bfbfbf","widgets-legend-text":"#262626","widgets-label-text":"#262626","widgets-tooltip-background":"#ffffff","widgets-tooltip-padding":"12px","widgets-tooltip-shadow":"0 1px 5px 0 rgba(0, 0, 0, 0.2)","widgets-tooltip-corner-radius":"4px","widgets-tooltip-cross-line":"#dddddd","widgets-tooltip-cross-react":"#ccd6ec","widgets-tooltip-cross-react-opacity":.3,"widgets-tooltip-title":"#8c8c8c","widgets-tooltip-text":"#262626","widgets-tooltip-marker-fill":"#ffffff","widgets-axis-label":"#8c8c8c","widgets-axis-line":"#e5e5e5","widgets-axis-grid":"#f7f7f7","widgets-guide-region-opacity":.1,"widgets-shape-area-opacity":.1,"widgets-shape-interval-opacity":1,"widgets-container-background":"#ffffff","widgets-container-padding":"20px","widgets-container-mobile-padding":"12px","widgets-container-corner-radius":"4px","widgets-container-shadow":"none","widgets-container-title":"#262626","widgets-container-split-line":"#e5e5e5","widgets-map-area-bg":"#e5e5e5","widgets-map-area-border":"#ffffff","widgets-map-label":"#595959","widgets-circle-stroke-background":"#f7f7f7","widgets-circle-stroke-width":"6px","widgets-sankey-edge":"#e5e5e5","widgets-sankey-node-text":"#8c8c8c","widgets-scrollbar-bg":"#ebecf0","widgets-scrollbar-thumb":"#c4c6cf"};function c(e){var t={};return Object.keys(e).forEach((function(n){i[n]&&(t[n]=e[n])})),t}var l=["widgets-font-size-1","widgets-font-size-2","widgets-font-size-3","widgets-font-size-4","widgets-font-size-5","widgets-font-size-6","widgets-font-size-7","widgets-tooltip-padding","widgets-tooltip-corner-radius","widgets-container-padding","widgets-container-corner-radius","widgets-circle-stroke-width"],u=["widgets-tooltip-cross-react-opacity","widgets-guide-region-opacity","widgets-shape-area-opacity","widgets-shape-interval-opacity"];function s(e){var t=Object.assign({},e);return l.forEach((function(e){isNaN(t[e])||(t[e]="".concat(t[e],"px"))})),u.forEach((function(e){isNaN(t[e])||(t[e]/=100)})),t.category_12=[t["widgets-color-category-1"],t["widgets-color-category-2"],t["widgets-color-category-3"],t["widgets-color-category-4"],t["widgets-color-category-5"],t["widgets-color-category-6"],t["widgets-color-category-7"],t["widgets-color-category-8"],t["widgets-color-category-9"],t["widgets-color-category-10"],t["widgets-color-category-11"],t["widgets-color-category-12"]],t.linear_10=[t["widgets-color-linear-1"],t["widgets-color-linear-5"],t["widgets-color-linear-9"],t["widgets-color-linear-3"],t["widgets-color-linear-7"],t["widgets-color-linear-10"],t["widgets-color-linear-2"],t["widgets-color-linear-4"],t["widgets-color-linear-6"],t["widgets-color-linear-8"]],t.order_10=[t["widgets-color-linear-1"],t["widgets-color-linear-2"],t["widgets-color-linear-3"],t["widgets-color-linear-4"],t["widgets-color-linear-5"],t["widgets-color-linear-6"],t["widgets-color-linear-7"],t["widgets-color-linear-8"],t["widgets-color-linear-9"],t["widgets-color-linear-10"]],t}function f(e){var t=Object.assign({},e);return l.forEach((function(e){"string"==typeof t[e]&&(t[e]=Number(t[e].replace("px","")))})),u.forEach((function(e){isNaN(t[e])||(t[e]*=100)})),t.category_12&&!t["widgets-color-category-1"]&&t.category_12.forEach((function(e,n){t["widgets-color-category-".concat(n+1)]=e})),t.order_10&&!t["widgets-color-linear-1"]&&t.order_10.forEach((function(e,n){t["widgets-color-linear-".concat(n+1)]=e})),t}function d(e,t){var n=[];return Object.keys(t).forEach((function(o){r.Util.isEqual(t[o],e[o])||n.push({key:o,oldVal:e[o],curVal:t[o]})})),n}function m(e){var t=e.rootValue,n=e.value,r=e.valuePath,o=Object.assign({},t);if("widgets-color-blue"===r[0]){for(var i=Object(a.default)(n,o["widgets-color-background"]),c=i.linear,l=i.category,u=0;u<10;u++)o["widgets-color-linear-".concat(u+1)]=c[9-u];for(var s=0;s<12;s++)o["widgets-color-category-".concat(s+1)]=l[s]}if("widgets-color-background"===r[0]){for(var f,d=Object(a.default)(o["widgets-color-blue"],n).linear,m=0;m<10;m++)o["widgets-color-linear-".concat(m+1)]=d[9-m];o["widgets-tooltip-background"]=n,o["widgets-tooltip-marker-fill"]=n,o["widgets-container-background"]=n,o["widgets-map-area-border"]=n}return o}},264:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(248),o=n.n(r),a=n(570),i=n.n(a),c=a.themes.category_12.slice(),l=c.map((function(e){return o()(e).toHsv()})),u=10,s=12,f=[10,340],d=(f[1]-f[0])/360;function m(e,t){for(var n=[],r,a=o()(e).toHsv(),i=a.h,u=a.s,s=a.v,f,d=o()(t).toHsv().v,m=d>.5,p=1;p<10;p++){var g=void 0;g=m?o()({h:i,s:Math.round(p*u*100/10),v:Math.round(100*(p*(s-d)/10+d))}).toHexString():o.a.mix(t,e,10*p).toHexString(),n.push(g)}n.push(e);var b=c.slice(),y=l.findIndex((function(e){return Math.abs(e.h-i)<30}));return b.splice(y,1),b.unshift(e),{linear:n,category:b}}},337:function(e,t,n){"use strict";function r(e){return c(e)||i(e)||a(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var u=[{type:"use",icon:"permissions",text:"\u4f7f\u7528\u4e3b\u9898",enable:function e(){return!0}},{type:"edit",icon:"edit",text:"\u7f16\u8f91",enable:function e(t,n){return t.owner===n.empId||t.editor.includes(n.empId)}},{type:"view",icon:"eye",text:"\u67e5\u770b",enable:function e(t,n){return![t.owner].concat(r(t.editor)).includes(n.empId)}},{type:"clone",icon:"copy",text:"\u514b\u9686",enable:function e(){return!0}},{type:"set",icon:"set",text:"\u8bbe\u7f6e",enable:function e(t,n){return t.owner===n.empId}},{type:"remove",icon:"ashbin",text:"\u5220\u9664",enable:function e(t,n){return t.owner===n.empId}}];t.default=u},436:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchTheme",(function(){return u})),n.d(t,"createOneTheme",(function(){return s})),n.d(t,"updateOneTheme",(function(){return f})),n.d(t,"removeOneTheme",(function(){return d})),n.d(t,"fetchUser",(function(){return m}));var r=n(245),o=n.n(r),a=n(247),i=n(76),c=function e(t){return r.Feedback.toast.success(t)},l=function e(t,n){return r.Feedback.toast.error("".concat(t,": ").concat(n.toString()))};function u(e){return a.default.fetch({api:"findTheme",data:{}}).then((function(t){t&&0===t.status&&Array.isArray(t.data)?e({type:"UPDATE_THEME_LIST",data:t.data}):l("\u83b7\u53d6\u81ea\u5b9a\u4e49\u4e3b\u9898\u5931\u8d25")})).catch((function(e){return l("\u83b7\u53d6\u81ea\u5b9a\u4e49\u4e3b\u9898\u5931\u8d25",e)}))}function s(e,t){return a.default.fetch({api:"createOneTheme",data:t}).then((function(e){e&&0===e.status?c("\u4e3b\u9898\u521b\u5efa\u6210\u529f\uff0c\u8bf7\u5230 \u201c\u6211\u7684\u4e3b\u9898\u201d \u4e2d\u67e5\u770b"):l("\u521b\u5efa\u4e3b\u9898\u5931\u8d25")})).catch((function(e){return l("\u521b\u5efa\u4e3b\u9898\u5931\u8d25",e)}))}function f(e,t,n){return a.default.fetch({api:"updateOneTheme",params:{id:t},data:n}).then((function(e){e&&0===e.status?c("\u6570\u636e\u66f4\u65b0\u6210\u529f"):l("\u6570\u636e\u66f4\u65b0\u5931\u8d25")})).catch((function(e){return l("\u6570\u636e\u66f4\u65b0\u5931\u8d25",e)}))}function d(e,t){return a.default.fetch({api:"deleteOneTheme",params:{id:t}}).then((function(e){e&&0===e.status?c("\u4e3b\u9898\u5df2\u5220\u9664"):l("\u4e3b\u9898\u5220\u9664\u5931\u8d25")})).catch((function(e){return l("\u4e3b\u9898\u5220\u9664\u5931\u8d25",e)}))}function m(e){var t=window.user.empId;return Object(i.getUserByEmpId)(t).then((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.empId===t?e({type:"UPDATE_USER_INFO",data:n}):l("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25")})).catch((function(e){return l("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25",e)}))}},437:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"initialState",(function(){return i})),n.d(t,"reducer",(function(){return c}));var i={themeList:[],userInfo:{}};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_THEME_LIST":return o(o({},e),{},{themeList:t.data});case"UPDATE_USER_INFO":return o(o({},e),{},{userInfo:t.data});default:return e}}},448:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(0),o=n.n(r),a=n(245),i=n.n(a),c=n(572),l=n.n(c),u=n(795),s=n.n(u),f=n(105),d=n(107),m=n(109),p=n(110),g=n(102),b=n(108),y=n(78),w=n(106),h=n(436),v=n(437);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){return x(e)||k(e,t)||T(e,t)||S()}function S(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function x(e){if(Array.isArray(e))return e}var N=a.Tab.TabPane,P=[{tab:"\u6211\u7684\u4e3b\u9898",key:"theme_personal",filter:function e(t){return t.filter((function(e){return e.owner===window.user.empId||e.editor.includes(window.user.empId)}))}},{tab:"\u5168\u90e8\u4e3b\u9898",key:"theme_all",filter:function e(t){return t}}];function A(){var e,t=_(Object(r.useReducer)(v.reducer,v.initialState),2),n=t[0],i=t[1],c=n.themeList,s=n.userInfo,O,j=_(Object(r.useState)({visible:!1}),2),S=j[0],T=j[1],I,k=_(Object(r.useState)(P[0]),2),x=k[0],A=k[1],D,U=_(Object(r.useState)("\u5168\u90e8"),2),M=U[0],H=U[1];Object(r.useEffect)((function(){h.fetchTheme(i),h.fetchUser(i)}),[]),Object(r.useEffect)((function(){H("\u5168\u90e8")}),[x]);var z=x.filter(c),F=["\u5168\u90e8"].concat(Object(u.uniqBy)(z,"department").map((function(e){var t;return e.department})));return o.a.createElement(d.default,{pageName:"user-center",noFooter:!0},o.a.createElement(l.a,{title:"\u4e2a\u4eba\u4e2d\u5fc3 | ".concat(y.baseDocumentTitle)}),o.a.createElement("div",{className:"user-center-inner"},o.a.createElement(a.Tab,{activeKey:x.key,size:"large",onChange:function e(t){var n=P.find((function(e){return e.key===t}));A(n)}},P.map((function(e){var t=e.tab,n=e.key;return o.a.createElement(N,{tab:t,key:n})}))),z.length>0&&o.a.createElement(b.default,{source:F,value:M,onChange:H}),o.a.createElement("div",{className:"theme-card-wrapper"},z.filter((function(e){return"\u5168\u90e8"===M||e.department===M})).map((function(e){return o.a.createElement(m.default,{key:e._id,data:e,operation:{use:function e(t){Object(w.showThemeUseInfo)(t.theme_mapping)},view:function e(t){var n=t._id;return C("/theme/view/".concat(n))},edit:function e(t){var n=t._id;return C("/theme/edit/".concat(n))},clone:function e(t){T({visible:!0,title:"\u514b\u9686\u4e3b\u9898",content:o.a.createElement(g.default,{source:{name:"".concat(t.name,"\u7684\u526f\u672c"),template:"".concat(t.name," V").concat(t.history.length,".0"),founder:s.empId,department:s.depDesc.split("-")[3],owner:s.empId,editor:[]},onSubmit:function e(n){h.createOneTheme(i,E(E({},n),{},{logo:t.logo,theme_mapping:t.theme_mapping})).then((function(){h.fetchTheme(i)})),T({visible:!1})},onCancel:function e(){T({visible:!1})}}),footer:!1})},set:function e(t){T({visible:!0,title:"\u8bbe\u7f6e",content:o.a.createElement(g.default,{source:t,onSubmit:function e(n){h.updateOneTheme(i,t._id,n).then((function(){h.fetchTheme(i)})),T({visible:!1})},onCancel:function e(){T({visible:!1})}}),footer:!1})},remove:function e(t){T({visible:!0,title:"\u5220\u9664",content:o.a.createElement(r.Fragment,null,o.a.createElement("h3",null,"\u786e\u8ba4\u5220\u9664\u4e3b\u9898 ",o.a.createElement("b",null,t.name)," ?"),o.a.createElement("p",null,"\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01")),footer:o.a.createElement(r.Fragment,null,o.a.createElement(a.Button,{onClick:function e(){return T({visible:!1})},href:"javascript:;",type:"normal"},"\u53d6\u6d88"),o.a.createElement(a.Button,{onClick:function e(){h.removeOneTheme(i,t._id).then((function(){T({visible:!1}),h.fetchTheme(i)}))},href:"javascript:;",type:"warning"},"\u5220\u9664"))})}},showHistory:function e(t){var n=t.founder,r=t.created_at,a=t.history,i=[{version:"V0.0",writer:n,time:r}].concat(a.map((function(e,t){var n=e.writer,r=e.updated_at;return{version:"V".concat(t+1,".0"),writer:n,time:r}})));T({visible:!0,title:"\u5386\u53f2\u7248\u672c",content:o.a.createElement("table",null,o.a.createElement("thead",{className:"history-heading",key:i},o.a.createElement("tr",null,o.a.createElement("th",null,"\u7248\u672c"),o.a.createElement("th",null,"\u4f5c\u8005"),o.a.createElement("th",null,"\u53d1\u5e03\u65f6\u95f4"))),o.a.createElement("tbody",null,i.slice().reverse().map((function(e){var t=e.version,n=e.writer,r=e.time;return o.a.createElement("tr",{className:"history-item",key:i},o.a.createElement("td",null,t),o.a.createElement("td",null,o.a.createElement(f.default,{empId:n,showAvatar:!1})),o.a.createElement("td",null,o.a.createElement(m.TimeText,{value:r})))})))),footer:!1})}})})),o.a.createElement(p.default,{onClick:function e(){T({visible:!0,title:"\u65b0\u5efa\u4e3b\u9898",content:o.a.createElement(g.default,{onSubmit:function e(t){var n=t.name,r=t.template,o=t.department,a=t.owner,c=t.logo,l=t.theme_mapping;h.createOneTheme(i,{name:n,template:r,founder:s.empId,department:o,owner:a,logo:c,theme_mapping:l}).then((function(){h.fetchTheme(i),T({visible:!1})}))},onCancel:function e(){T({visible:!1})}}),footer:!1})}})),o.a.createElement(a.Dialog,{visible:S.visible,footer:S.footer,onClose:function e(){return T({visible:!1})},title:S.title,closable:void 0===S.closable?"esc,mask,close":S.closable},S.content)))}function C(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.rel="noopener noreferrer nofollow",t.click()}},577:function(e,t,n){},612:function(e,t,n){},613:function(e,t,n){},614:function(e,t,n){}}]);