(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_models_Item_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Item/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Item/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Item */ "./resources/js/models/Item/index.js");
/* harmony import */ var _mixins_EditsLocalModelData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/EditsLocalModelData */ "./resources/js/mixins/EditsLocalModelData.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_EditsLocalModelData__WEBPACK_IMPORTED_MODULE_1__.default],
  methods: {
    save: function save() {
      var _this = this;

      _Item__WEBPACK_IMPORTED_MODULE_0__.default.api().put('/api/item/' + this.id, this.model).then(function (response) {
        _this.$emit('updated', response.response.data.data);
      });
    },
    copyLocal: function copyLocal() {
      this.model = JSON.parse(JSON.stringify(_Item__WEBPACK_IMPORTED_MODULE_0__.default.find(this.id)));
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/EditsLocalModelData.js":
/*!****************************************************!*\
  !*** ./resources/js/mixins/EditsLocalModelData.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This mixin attempts to take care of the complexities of copying data from the store into the local
 * components state. We rely on some preloading logic in the base app.js wherein you can register any
 * models that you want to preload from the api. Once that data is loaded the app fires off the event
 * 'init-data-loaded', at which point the data has been loaded from the server and into the store. We
 * then use this mixin to trigger copying the model to a local dirty data variable that we can use in
 * our components without worrying about the store.
 *
 * In order to implement this mixin you need to create a 'copyLocal' method on the component which is
 * using this mixin. This allows you to customize the logic that each component needs when loading up
 * its own data.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      required: true
    }
  },
  data: function data() {
    return {
      model: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    // run copyLocal when the app declaresit has loaded init data
    this.$root.$on('init-data-loaded', function () {
      if (!_this.copyLocal) return console.error("you need to implement a copyLocal method on this component in order to use the EditsLocalModelData mixin");
      return _this.copyLocal();
    }); // also run it on mount anyway in case we are loading up the component after page load

    this.copyLocal();
  }
});

/***/ }),

/***/ "./resources/js/models/Item/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/models/Item/Edit.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_b2580bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=b2580bc2& */ "./resources/js/models/Item/Edit.vue?vue&type=template&id=b2580bc2&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/models/Item/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_b2580bc2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_b2580bc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/models/Item/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/models/Item/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/models/Item/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Item/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/models/Item/Edit.vue?vue&type=template&id=b2580bc2&":
/*!**************************************************************************!*\
  !*** ./resources/js/models/Item/Edit.vue?vue&type=template&id=b2580bc2& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2580bc2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2580bc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_b2580bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=b2580bc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Item/Edit.vue?vue&type=template&id=b2580bc2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Item/Edit.vue?vue&type=template&id=b2580bc2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Item/Edit.vue?vue&type=template&id=b2580bc2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.model
    ? _c(
        "b-form",
        { on: { submit: _vm.save } },
        [
          _c(
            "b-form-group",
            { attrs: { label: "Name" } },
            [
              _c("b-form-input", {
                model: {
                  value: _vm.model.name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "name", $$v)
                  },
                  expression: "model.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Effect" } },
            [
              _c("b-form-input", {
                model: {
                  value: _vm.model.effect,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "effect", $$v)
                  },
                  expression: "model.effect"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            { attrs: { label: "Flavour text" } },
            [
              _c("b-form-input", {
                model: {
                  value: _vm.model.flavour_text,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "flavour_text", $$v)
                  },
                  expression: "model.flavour_text"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-button", { on: { click: _vm.save } }, [_vm._v("Submit")])
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);