'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//
//


function mounted() {
	var this$1 = this;

	this.breakIt = window.innerWidth <= this.breakPoint;
	window.addEventListener('resize', function () {
		this$1.breakIt = window.innerWidth <= this$1.breakPoint;
	});
}

function filterColumns() {
	if (this.breakIt) {
		return this.columns.filter(function (c) { return c.movil; });
	}
	return this.columns;
}

function data() {
	return {
		breakIt: false,
	};
}

var script = {
	name: 'responsive-table-dl',
	computed: {
		filterColumns: filterColumns,
	},
	data: data,
	mounted: mounted,
	props: {
		breakPoint: {
			default: 768,
			type: Number,
		},
		columns: {
			default: function () { return []; },
			type: Array,
		},
		rows: {
			default: function () { return []; },
			type: Array,
		},
	},
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
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
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        { return function () { }; }
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: function () { return context._renderStyles(context._styles); }
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return function (id, style) { return addStyle(id, style, context); };
}
function addStyle(id, css, context) {
    var group = process.env.NODE_ENV === 'production' ? css.media || 'default' : id;
    var style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        var code = css.source;
        if (process.env.NODE_ENV !== 'production' && css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    Buffer.from(unescape(encodeURIComponent(JSON.stringify(css.map)))).toString('base64') +
                    ' */';
        }
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    var css = '';
    for (var key in styles) {
        var style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "table-main-container" }, [
    _vm._ssrNode(
      '<table class="wm-table-dl">',
      "</table>",
      [
        _vm._ssrNode(
          '<caption data-cy="table-caption">',
          "</caption>",
          [_vm._t("caption")],
          2
        ),
        _vm._ssrNode(
          ' <thead data-cy="table-head"><tr' +
            _vm._ssrClass(null, { "columns-movil-dl": _vm.breakIt }) +
            ">" +
            _vm._ssrList(_vm.filterColumns, function(col, indexCol) {
              return "<th>" + _vm._ssrEscape(_vm._s(col.title)) + "</th>"
            }) +
            "</tr></thead> "
        ),
        _vm._ssrNode(
          '<tbody data-cy="table-body">',
          "</tbody>",
          _vm._l(_vm.rows, function(row, indexRow) {
            return _vm._ssrNode(
              "<tr" +
                _vm._ssrClass(null, [
                  "row-table-dl",
                  { "table-movil-dl": _vm.breakIt }
                ]) +
                ">",
              "</tr>",
              [_vm._t("row", null, { row: row, index: indexRow })],
              2
            )
          }),
          0
        ),
        _vm._ssrNode(" "),
        _vm._ssrNode(
          '<tfoot data-cy="table-footer">',
          "</tfoot>",
          [_vm._t("footer")],
          2
        )
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-2f2e37e5_0", { source: "table.wm-table-dl {\n  border-collapse: collapse;\n  width: 100%;\n}\n.columns-movil-dl,\n.table-movil-dl {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n}\n.row-table-dl {\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=responsive-table-dl.vue.map */", map: {"version":3,"sources":["/Users/frontend/Documents/JJ/dl-components/my-components/responsivee-table/src/components/responsive-table-dl.vue","responsive-table-dl.vue"],"names":[],"mappings":"AA2EA;EACA,yBAAA;EACA,WAAA;AC1EA;AD8EA;;EAEA,aAAA;EACA,0DAAA;AC3EA;AD8EA;EACA,6BAAA;AC3EA;;AAEA,kDAAkD","file":"responsive-table-dl.vue","sourcesContent":["<template>\n\t<div class=\"table-main-container\">\n\t\t<table class=\"wm-table-dl\">\n\t\t\t<caption data-cy=\"table-caption\">\n\t\t\t\t<slot name=\"caption\"></slot>\n\t\t\t</caption>\n\t\t\t<thead data-cy=\"table-head\">\n\t\t\t\t<tr :class=\"{ 'columns-movil-dl': breakIt }\">\n\t\t\t\t\t<th v-for=\"(col, indexCol) in filterColumns\" :key=\"indexCol\">{{col.title}}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody data-cy=\"table-body\">\n\t\t\t\t<tr\n\t\t\t\t\tv-for=\"(row, indexRow) in rows\"\n\t\t\t\t\t:key=\"indexRow\"\n\t\t\t\t\t:class=\"[\n\t\t\t\t\t\t'row-table-dl',\n\t\t\t\t\t\t{ 'table-movil-dl': breakIt },\n\t\t\t\t\t]\"\n\t\t\t\t>\n\t\t\t\t\t<slot name=\"row\" :row=\"row\" :index=\"indexRow\"></slot>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t\t<tfoot data-cy=\"table-footer\">\n\t\t\t\t<slot name=\"footer\"></slot>\n\t\t\t</tfoot>\n\t\t</table>\n\t</div>\n</template>\n<script>\n\nfunction mounted() {\n\tthis.breakIt = window.innerWidth <= this.breakPoint;\n\twindow.addEventListener('resize', () => {\n\t\tthis.breakIt = window.innerWidth <= this.breakPoint;\n\t});\n}\n\nfunction filterColumns() {\n\tif (this.breakIt) {\n\t\treturn this.columns.filter(c => c.movil);\n\t}\n\treturn this.columns;\n}\n\nfunction data() {\n\treturn {\n\t\tbreakIt: false,\n\t};\n}\n\nexport default {\n\tname: 'responsive-table-dl',\n\tcomputed: {\n\t\tfilterColumns,\n\t},\n\tdata,\n\tmounted,\n\tprops: {\n\t\tbreakPoint: {\n\t\t\tdefault: 768,\n\t\t\ttype: Number,\n\t\t},\n\t\tcolumns: {\n\t\t\tdefault: () => [],\n\t\t\ttype: Array,\n\t\t},\n\t\trows: {\n\t\t\tdefault: () => [],\n\t\t\ttype: Array,\n\t\t},\n\t},\n};\n</script>\n<style lang=\"scss\">\ntable.wm-table-dl {\n\tborder-collapse: collapse;\n\twidth: 100%;\n}\n\n\n.columns-movil-dl,\n.table-movil-dl {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n}\n\n.row-table-dl {\n\tbackground-color: transparent;\n}\n</style>\n","table.wm-table-dl {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.columns-movil-dl,\n.table-movil-dl {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n}\n\n.row-table-dl {\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=responsive-table-dl.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-2f2e37e5";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    createInjectorSSR,
    undefined
  );

function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('responsive-table-dl', __vue_component__);
}

var plugin = {
	install: install,
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

exports.default = __vue_component__;
exports.install = install;
