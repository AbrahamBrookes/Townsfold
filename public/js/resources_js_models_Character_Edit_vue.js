(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_models_Character_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Character */ "./resources/js/models/Character/index.js");
/* harmony import */ var _mixins_EditsLocalModelData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/EditsLocalModelData */ "./resources/js/mixins/EditsLocalModelData.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(['total_stat_points'])),
  watch: {
    'model.attack': function modelAttack(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left");
        this.model.attack = oldVal;
      } else {
        this.model.remaining = this.calcRemaining();
      }
    },
    'model.defense': function modelDefense(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left");
        this.model.defense = oldVal;
      } else {
        this.model.remaining = this.calcRemaining();
      }
    },
    'model.life': function modelLife(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left");
        this.model.life = oldVal;
      } else {
        this.model.remaining = this.calcRemaining();
      }
    },
    'model.mana': function modelMana(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.model.remaining + " points left");
        this.model.mana = oldVal;
      } else {
        this.model.remaining = this.calcRemaining();
      }
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      _Character__WEBPACK_IMPORTED_MODULE_0__.default.api().put('/api/character', this.model).then(function () {
        _this.$emit('saved', _this.model);
      });
    },
    calcRemaining: function calcRemaining() {
      var total = parseInt(this.model.attack) + parseInt(this.model.defense) + parseInt(this.model.life) + parseInt(this.model.mana);
      return this.total_stat_points - total;
    },
    copyLocal: function copyLocal() {
      this.model = JSON.parse(JSON.stringify(_Character__WEBPACK_IMPORTED_MODULE_0__.default.find(this.id)));
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

/***/ "./resources/js/models/Character/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/models/Character/Edit.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_4e264cb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4e264cb2& */ "./resources/js/models/Character/Edit.vue?vue&type=template&id=4e264cb2&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/models/Character/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_4e264cb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_4e264cb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/models/Character/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/models/Character/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/models/Character/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/models/Character/Edit.vue?vue&type=template&id=4e264cb2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/models/Character/Edit.vue?vue&type=template&id=4e264cb2& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4e264cb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4e264cb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4e264cb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=4e264cb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Edit.vue?vue&type=template&id=4e264cb2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Edit.vue?vue&type=template&id=4e264cb2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Edit.vue?vue&type=template&id=4e264cb2& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          _c("fieldset", { staticClass: "p-2 col-12" }, [
            _c("legend", [_vm._v("stats")]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Attack\n                "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.attack,
                    expression: "model.attack"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
                domProps: { value: _vm.model.attack },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "attack", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Defense\n                "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.defense,
                    expression: "model.defense"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
                domProps: { value: _vm.model.defense },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "defense", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Life\n                "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.life,
                    expression: "model.life"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
                domProps: { value: _vm.model.life },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "life", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("label", [
              _vm._v("\n                Mana\n                "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.mana,
                    expression: "model.mana"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
                domProps: { value: _vm.model.mana },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.model, "mana", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("remaining: " + _vm._s(_vm.model.remaining))])
          ]),
          _vm._v(" "),
          _c("fieldset", { staticClass: "p-2 col-12" }, [
            _c("legend", [_vm._v("Character")]),
            _vm._v(" "),
            _c("label", { attrs: { for: "name" } }, [
              _vm._v("\n                Name\n            ")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.model.name,
                  expression: "model.name"
                }
              ],
              staticClass: "form-control",
              attrs: { name: "name" },
              domProps: { value: _vm.model.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.model, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "backstory" } }, [
              _vm._v("\n                Backstory\n            ")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.model.backstory,
                  expression: "model.backstory"
                }
              ],
              staticClass: "form-control",
              attrs: { rows: "8", name: "backstory" },
              domProps: { value: _vm.model.backstory },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.model, "backstory", $event.target.value)
                }
              }
            })
          ]),
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