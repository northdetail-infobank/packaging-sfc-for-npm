var e,t=function(e,t,n,o,i,a,s,r,d,l){"boolean"!=typeof s&&(d=r,r=s,s=!1);var c,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):t&&(c=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(u.functional){var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return n},n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var o={};var i=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"single-component-npm-test"},[n("p",[e._v("The counter is set to "),n("b",[e._v(e._s(e.counter))]),e._v(".")]),e._v(" "),n("button",{on:{click:function(t){e.counter+=1}}},[e._v("Click +1")]),e._v(" "),n("button",{on:{click:function(t){e.counter-=1}}},[e._v("Click -1")]),e._v(" "),n("button",{on:{click:function(t){e.counter=e.initCounter}}},[e._v("Reset")])])},staticRenderFns:[]},function(e){e&&e("data-v-787fe0a0_0",{source:".single-component-npm-test[data-v-787fe0a0]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.single-component-npm-test p[data-v-787fe0a0]{margin:0 0 1em}",map:void 0,media:void 0})},{name:"SingleComponentNpmTest",data:function(){return{counter:5,initCounter:5}}},"data-v-787fe0a0",!1,void 0,function(t){return function(t,i){return function(t,i){var a=n?i.media||"default":t,s=o[a]||(o[a]={ids:new Set,styles:[]});if(!s.ids.has(t)){s.ids.add(t);var r=i.source;if(i.map&&(r+="\n/*# sourceURL="+i.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",i.media&&s.element.setAttribute("media",i.media),void 0===e&&(e=document.head||document.getElementsByTagName("head")[0]),e.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(r),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{var d=s.ids.size-1,l=document.createTextNode(r),c=s.element.childNodes;c[d]&&s.element.removeChild(c[d]),c.length?s.element.insertBefore(l,c[d]):s.element.appendChild(l)}}}(t,i)}},void 0);function a(e){a.installed||(a.installed=!0,e.component("SingleComponentNpmTest",i))}var s={install:a},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(s),i.install=a;export default i;
