(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_models_Character_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Character */ "./resources/js/models/Character/index.js");
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
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      attack: 0,
      defense: 0,
      life: 0,
      mana: 0,
      remaining: this.total_stat_points,
      name: '',
      backstory: ''
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['total_stat_points'])),
  watch: {
    attack: function attack(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.remaining + " points left");
        this.attack = oldVal;
      } else {
        this.remaining = this.calcRemaining();
      }
    },
    defense: function defense(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.remaining + " points left");
        this.defense = oldVal;
      } else {
        this.remaining = this.calcRemaining();
      }
    },
    life: function life(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.remaining + " points left");
        this.life = oldVal;
      } else {
        this.remaining = this.calcRemaining();
      }
    },
    mana: function mana(newVal, oldVal) {
      if (this.calcRemaining() < 0) {
        alert("you don't have enough points to spend - you only have " + this.remaining + " points left");
        this.mana = oldVal;
      } else {
        this.remaining = this.calcRemaining();
      }
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      _Character__WEBPACK_IMPORTED_MODULE_0__.default.api().post('/api/character', {
        attack: this.attack,
        defense: this.defense,
        life: this.life,
        mana: this.mana,
        remaining: this.remaining,
        name: this.name,
        backstory: this.backstory
      }).then(function () {
        _this.$emit('saved', {
          attack: _this.attack,
          defense: _this.defense,
          life: _this.life,
          mana: _this.mana,
          remaining: _this.remaining,
          name: _this.name,
          backstory: _this.backstory
        });
      });
    },
    calcRemaining: function calcRemaining() {
      var total = parseInt(this.attack) + parseInt(this.defense) + parseInt(this.life) + parseInt(this.mana);
      return this.total_stat_points - total;
    }
  }
});

/***/ }),

/***/ "./resources/js/models/Character/Create.vue":
/*!**************************************************!*\
  !*** ./resources/js/models/Character/Create.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_6e10d659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6e10d659& */ "./resources/js/models/Character/Create.vue?vue&type=template&id=6e10d659&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/models/Character/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Create_vue_vue_type_template_id_6e10d659___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_6e10d659___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/models/Character/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/models/Character/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/models/Character/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/models/Character/Create.vue?vue&type=template&id=6e10d659&":
/*!*********************************************************************************!*\
  !*** ./resources/js/models/Character/Create.vue?vue&type=template&id=6e10d659& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6e10d659___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6e10d659___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6e10d659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=6e10d659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Create.vue?vue&type=template&id=6e10d659&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Create.vue?vue&type=template&id=6e10d659&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/models/Character/Create.vue?vue&type=template&id=6e10d659& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h2", [_vm._v("Create your character")]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "p-2 col-12" }, [
      _c("legend", [_vm._v("stats")]),
      _vm._v(" "),
      _c("label", [
        _vm._v("\n            Attack\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.attack,
              expression: "attack"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.attack },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.attack = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("label", [
        _vm._v("\n            Defense\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.defense,
              expression: "defense"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.defense },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.defense = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("label", [
        _vm._v("\n            Life\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.life,
              expression: "life"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.life },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.life = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("label", [
        _vm._v("\n            Mana\n            "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mana,
              expression: "mana"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "number" },
          domProps: { value: _vm.mana },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.mana = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("span", [_vm._v("remaining: " + _vm._s(_vm.remaining))])
    ]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "p-2 col-12" }, [
      _c("legend", [_vm._v("Character")]),
      _vm._v(" "),
      _c("label", { attrs: { for: "name" } }, [
        _vm._v("\n            Name\n        ")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.name,
            expression: "name"
          }
        ],
        staticClass: "form-control",
        attrs: { name: "name" },
        domProps: { value: _vm.name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.name = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "backstory" } }, [
        _vm._v("\n            Backstory\n        ")
      ]),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.backstory,
            expression: "backstory"
          }
        ],
        staticClass: "form-control",
        attrs: { rows: "8", name: "backstory" },
        domProps: { value: _vm.backstory },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.backstory = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 text-right" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", on: { click: _vm.save } },
        [_vm._v("save")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);