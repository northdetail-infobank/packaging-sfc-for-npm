'use strict';Object.defineProperty(exports,'__esModule',{value:true});var script = {
    name: 'LibraryNpmTestSample', // vue component name
    data: function data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
    created: function created() {
        console.log("Hello", "World!");
    },
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;function createInjectorSSR(context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }

  if (!context) { return function () {}; }

  if (!('styles' in context)) {
    context._styles = context._styles || {};
    Object.defineProperty(context, 'styles', {
      enumerable: true,
      get: function get() {
        return context._renderStyles(context._styles);
      }
    });
    context._renderStyles = context._renderStyles || renderStyles;
  }

  return function (id, style) {
    return addStyle(id, style, context);
  };
}

function addStyle(id, css, context) {
  var group =  css.media || 'default' ;
  var style = context._styles[group] || (context._styles[group] = {
    ids: [],
    css: ''
  });

  if (!style.ids.includes(id)) {
    style.media = css.media;
    style.ids.push(id);
    var code = css.source;

    style.css += code + '\n';
  }
}

function renderStyles(styles) {
  var css = '';

  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + Array.from(style.ids).join(' ') + '"' + (style.media ? ' media="' + style.media + '"' : '') + '>' + style.css + '</style>';
  }

  return css;
}

var server = createInjectorSSR;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"library-npm-test-sample"},[_vm._ssrNode("<p>The counter is set to <b>"+_vm._ssrEscape(_vm._s(_vm.counter))+"</b>.</p> "),_c('v-btn',[_vm._v("test v-btn")]),_vm._ssrNode(" <button>Click +1</button> <button>Click -1</button> <button>Reset</button>")],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-53b5ec54_0", { source: ".library-npm-test-sample[data-v-53b5ec54]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.library-npm-test-sample p[data-v-53b5ec54]{margin:0 0 1em}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-53b5ec54";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-53b5ec54";
  /* functional template */
  var __vue_is_functional_template__ = false;

  
  var libraryNpmTestSample = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","viewBox":"0 0 20 20"}},[_vm._ssrNode("<g transform=\"translate(51 -1801)\"><path d=\"M0,0H20V20H0Z\" transform=\"translate(-51 1801)\" fill=\"none\"></path> <path d=\"M18.333,14.167H0V0H18.333V14.166ZM9.166,1.666V12.5h7.5V1.666ZM4.538,\n      7.5c-.872,0-2.5.429-2.5,1.25v.893h5V8.75C7.038,7.929,5.411,7.5,4.538,\n      7.5Zm0-2.858A1.072,1.072,0,1,0,5.609,5.714,1.073,1.073,0,0,0,4.538,\n      4.642ZM15.833,10H10V8.75h5.833V10Zm0-2.083H10V6.667h5.833V7.916Z\n      m0-2.083H10V4.583h5.833V5.833Z\" transform=\"translate(-50.167 1804.333)\" fill=\"currentColor\"></path></g>")])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-bcc99f16";
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseIconData = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","viewBox":"0 0 20 20"}},[_vm._ssrNode("<g transform=\"translate(73 -1512)\"><path d=\"M0,0H20V20H0Z\" transform=\"translate(-73 1512)\" fill=\"none\"></path> <path d=\"M8.608,\n      11.583h3.45l-1.725-4.6ZM18.667,\n      2H2V18.667H18.667ZM13.625,\n      15.75l-.95-2.5h-4.7l-.933,\n      2.5H5.3L9.558,\n      4.917h1.55L15.367,\n      15.75H13.625Z\" transform=\"translate(-73.333 1511.667)\" fill=\"currentColor\"></path></g>")])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-373b5859";
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var BaseIconApplication = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );/* eslint-disable import/prefer-default-export */var components = /*#__PURE__*/Object.freeze({LibraryNpmTestSample: libraryNpmTestSample,BaseIconData: BaseIconData,BaseIconApplication: BaseIconApplication});// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}exports.BaseIconApplication=BaseIconApplication;exports.BaseIconData=BaseIconData;exports.LibraryNpmTestSample=libraryNpmTestSample;exports.default=plugin;