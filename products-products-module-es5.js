function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js ***!
    \************************************************************************************/

  /*! exports provided: NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxModule, NzCheckboxWrapperComponent */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCheckboxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCheckboxComponent", function () {
      return NzCheckboxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCheckboxGroupComponent", function () {
      return NzCheckboxGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCheckboxModule", function () {
      return NzCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCheckboxWrapperComponent", function () {
      return NzCheckboxWrapperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: checkbox-wrapper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["*"];
    var _c1 = ["inputElement"];
    var _c2 = ["nz-checkbox", ""];

    function NzCheckboxGroupComponent_label_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

          var o_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r2.onCheckedChange(o_r1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var o_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", o_r1.disabled || ctx_r0.nzDisabled)("nzChecked", o_r1.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](o_r1.label);
      }
    }

    var NzCheckboxWrapperComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function NzCheckboxWrapperComponent(renderer, elementRef) {
        _classCallCheck(this, NzCheckboxWrapperComponent);

        this.nzOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzCheckboxWrapperComponent, [{
        key: "addCheckbox",
        value: function addCheckbox(value) {
          this.checkboxList.push(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "removeCheckbox",
        value: function removeCheckbox(value) {
          this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange() {
          /** @type {?} */
          var listOfCheckedValue = this.checkboxList.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.nzChecked;
          }).map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.nzValue;
          });
          this.nzOnChange.emit(listOfCheckedValue);
        }
      }]);

      return NzCheckboxWrapperComponent;
    }();

    NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) {
      return new (t || NzCheckboxWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
    };

    NzCheckboxWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzCheckboxWrapperComponent,
      selectors: [["nz-checkbox-wrapper"]],
      outputs: {
        nzOnChange: "nzOnChange"
      },
      exportAs: ["nzCheckboxWrapper"],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzCheckboxWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzCheckboxWrapperComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    NzCheckboxWrapperComponent.propDecorators = {
      nzOnChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: checkbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCheckboxComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} nzCheckboxWrapperComponent
       * @param {?} cdr
       * @param {?} focusMonitor
       */
      function NzCheckboxComponent(elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor) {
        _classCallCheck(this, NzCheckboxComponent);

        this.elementRef = elementRef;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzValue = null;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
      }
      /**
       * @param {?} e
       * @return {?}
       */


      _createClass(NzCheckboxComponent, [{
        key: "hostClick",
        value: function hostClick(e) {
          e.preventDefault();
          this.focus();
          this.innerCheckedChange(!this.nzChecked);
        }
        /**
         * @param {?} checked
         * @return {?}
         */

      }, {
        key: "innerCheckedChange",
        value: function innerCheckedChange(checked) {
          if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);

            if (this.nzCheckboxWrapperComponent) {
              this.nzCheckboxWrapperComponent.onChange();
            }
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.nzChecked = value;
          this.cdr.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          this.nzDisabled = disabled;
          this.cdr.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this.inputElement.nativeElement.blur();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.focusMonitor.monitor(this.elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            if (!focusOrigin) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2.onTouched();
              });
            }
          });

          if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.nzAutoFocus) {
            this.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.focusMonitor.stopMonitoring(this.elementRef);

          if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
          }
        }
      }]);

      return NzCheckboxComponent;
    }();

    NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) {
      return new (t || NzCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzCheckboxWrapperComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]));
    };

    NzCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzCheckboxComponent,
      selectors: [["", "nz-checkbox", ""]],
      viewQuery: function NzCheckboxComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCheckboxComponent_click_HostBindingHandler($event) {
            return ctx.hostClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-checkbox-wrapper", true)("ant-checkbox-wrapper-checked", ctx.nzChecked);
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzAutoFocus: "nzAutoFocus",
        nzDisabled: "nzDisabled",
        nzIndeterminate: "nzIndeterminate",
        nzChecked: "nzChecked"
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange"
      },
      exportAs: ["nzCheckbox"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzCheckboxComponent;
        }),
        multi: true
      }])],
      attrs: _c2,
      ngContentSelectors: _c0,
      decls: 6,
      vars: 10,
      consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"]],
      template: function NzCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.innerCheckedChange($event);
          })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzCheckboxComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: NzCheckboxWrapperComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }];
    };

    NzCheckboxComponent.propDecorators = {
      inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['inputElement', {
          "static": true
        }]
      }],
      nzCheckedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAutoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzIndeterminate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCheckboxComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCheckboxComponent.prototype, "nzChecked", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: checkbox-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NzCheckBoxOptionInterface() {}

    if (false) {}

    var NzCheckboxGroupComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} focusMonitor
       * @param {?} cdr
       */
      function NzCheckboxGroupComponent(elementRef, focusMonitor, cdr) {
        _classCallCheck(this, NzCheckboxGroupComponent);

        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.options = [];
        this.nzDisabled = false;
      }
      /**
       * @param {?} _
       * @param {?} option
       * @return {?}
       */


      _createClass(NzCheckboxGroupComponent, [{
        key: "trackByOption",
        value: function trackByOption(_, option) {
          return option.value;
        }
        /**
         * @param {?} option
         * @param {?} checked
         * @return {?}
         */

      }, {
        key: "onCheckedChange",
        value: function onCheckedChange(option, checked) {
          option.checked = checked;
          this.onChange(this.options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.focusMonitor.monitor(this.elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            if (!focusOrigin) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this3.onTouched();
              });
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.focusMonitor.stopMonitoring(this.elementRef);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.options = value;
          this.cdr.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          this.nzDisabled = disabled;
          this.cdr.markForCheck();
        }
      }]);

      return NzCheckboxGroupComponent;
    }();

    NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) {
      return new (t || NzCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
    };

    NzCheckboxGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzCheckboxGroupComponent,
      selectors: [["nz-checkbox-group"]],
      hostVars: 2,
      hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-checkbox-group", true);
        }
      },
      inputs: {
        nzDisabled: "nzDisabled"
      },
      exportAs: ["nzCheckboxGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzCheckboxGroupComponent;
        }),
        multi: true
      }])],
      decls: 1,
      vars: 2,
      consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]],
      template: function NzCheckboxGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], NzCheckboxComponent],
      encapsulation: 2
    });
    /** @nocollapse */

    NzCheckboxGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    NzCheckboxGroupComponent.propDecorators = {
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-checkbox-wrapper',
          exportAs: 'nzCheckboxWrapper',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      }, {
        nzOnChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: '[nz-checkbox]',
          exportAs: 'nzCheckbox',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          template: "\n    <span\n      class=\"ant-checkbox\"\n      [class.ant-checkbox-checked]=\"nzChecked && !nzIndeterminate\"\n      [class.ant-checkbox-disabled]=\"nzDisabled\"\n      [class.ant-checkbox-indeterminate]=\"nzIndeterminate\"\n    >\n      <input\n        #inputElement\n        type=\"checkbox\"\n        class=\"ant-checkbox-input\"\n        [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n        [checked]=\"nzChecked\"\n        [ngModel]=\"nzChecked\"\n        [disabled]=\"nzDisabled\"\n        (ngModelChange)=\"innerCheckedChange($event)\"\n        (click)=\"$event.stopPropagation()\"\n      />\n      <span class=\"ant-checkbox-inner\"></span>\n    </span>\n    <span><ng-content></ng-content></span>\n  ",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzCheckboxComponent;
            }),
            multi: true
          }],
          host: {
            '[class.ant-checkbox-wrapper]': 'true',
            '[class.ant-checkbox-wrapper-checked]': 'nzChecked',
            '(click)': 'hostClick($event)'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: NzCheckboxWrapperComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
        }];
      }, {
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzIndeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputElement', {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-checkbox-group',
          exportAs: 'nzCheckboxGroup',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          template: "\n    <label\n      nz-checkbox\n      class=\"ant-checkbox-group-item\"\n      *ngFor=\"let o of options; trackBy: trackByOption\"\n      [nzDisabled]=\"o.disabled || nzDisabled\"\n      [nzChecked]=\"o.checked!\"\n      (nzCheckedChange)=\"onCheckedChange(o, $event)\"\n    >\n      <span>{{ o.label }}</span>\n    </label>\n  ",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzCheckboxGroupComponent;
            }),
            multi: true
          }],
          host: {
            '[class.ant-checkbox-group]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      }, {
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: checkbox.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCheckboxModule = function NzCheckboxModule() {
      _classCallCheck(this, NzCheckboxModule);
    };

    NzCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NzCheckboxModule
    });
    NzCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NzCheckboxModule_Factory(t) {
        return new (t || NzCheckboxModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCheckboxModule, {
        declarations: function declarations() {
          return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]];
        },
        exports: function exports() {
          return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]],
          declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
          exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-checkbox.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-checkbox.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js ***!
    \*************************************************************************************************/

  /*! exports provided: NzResizeObserver, NzResizeObserversModule, ɵa */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCoreResizeObserversJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzResizeObserver", function () {
      return NzResizeObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzResizeObserversModule", function () {
      return NzResizeObserversModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NzResizeObserverFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! resize-observer-polyfill */
    "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: resize-observers.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
     */


    var NzResizeObserverFactory = /*#__PURE__*/function () {
      function NzResizeObserverFactory() {
        _classCallCheck(this, NzResizeObserverFactory);
      }

      _createClass(NzResizeObserverFactory, [{
        key: "create",

        /**
         * @param {?} callback
         * @return {?}
         */
        value: function create(callback) {
          return typeof resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"] === 'undefined' ? null : new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](callback);
        }
      }]);

      return NzResizeObserverFactory;
    }();

    NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
      return new (t || NzResizeObserverFactory)();
    };
    /** @nocollapse */


    NzResizeObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NzResizeObserverFactory_Factory() {
        return new NzResizeObserverFactory();
      },
      token: NzResizeObserverFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * An injectable service that allows watching elements for changes to their content.
     */


    var NzResizeObserver = /*#__PURE__*/function () {
      /**
       * @param {?} nzResizeObserverFactory
       */
      function NzResizeObserver(nzResizeObserverFactory) {
        _classCallCheck(this, NzResizeObserver);

        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /**
         * Keeps track of the existing ResizeObservers so they can be reused.
         */

        this.observedElements = new Map();
      }
      /**
       * @return {?}
       */


      _createClass(NzResizeObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this4 = this;

          this.observedElements.forEach(
          /**
          * @param {?} _
          * @param {?} element
          * @return {?}
          */
          function (_, element) {
            return _this4.cleanupObserver(element);
          });
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(elementOrRef) {
          var _this5 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(elementOrRef);
          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            /** @type {?} */
            var stream = _this5.observeElement(element);
            /** @type {?} */


            var subscription = stream.subscribe(observer);
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();

                _this5.unobserveElement(element);
              }
            );
          });
        }
        /**
         * Observes the given element by using the existing ResizeObserver if available, or creating a
         * new one if not.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "observeElement",
        value: function observeElement(element) {
          if (!this.observedElements.has(element)) {
            /** @type {?} */
            var stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            /** @type {?} */

            var observer = this.nzResizeObserverFactory.create(
            /**
            * @param {?} mutations
            * @return {?}
            */
            function (mutations) {
              return stream.next(mutations);
            });

            if (observer) {
              observer.observe(element);
            }

            this.observedElements.set(element, {
              observer: observer,
              stream: stream,
              count: 1
            });
          } else {
            /** @type {?} */this.observedElements.get(element).count++;
          }

          return (
            /** @type {?} */
            this.observedElements.get(element).stream
          );
        }
        /**
         * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
         * observing this element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "unobserveElement",
        value: function unobserveElement(element) {
          if (this.observedElements.has(element)) {
            /** @type {?} */this.observedElements.get(element).count--;

            if (!
            /** @type {?} */
            this.observedElements.get(element).count) {
              this.cleanupObserver(element);
            }
          }
        }
        /**
         * Clean up the underlying ResizeObserver for the specified element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "cleanupObserver",
        value: function cleanupObserver(element) {
          if (this.observedElements.has(element)) {
            var _this$observedElement =
            /** @type {?} */
            this.observedElements.get(element),
                observer = _this$observedElement.observer,
                stream = _this$observedElement.stream;

            if (observer) {
              observer.disconnect();
            }

            stream.complete();
            this.observedElements["delete"](element);
          }
        }
      }]);

      return NzResizeObserver;
    }();

    NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
      return new (t || NzResizeObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzResizeObserverFactory));
    };
    /** @nocollapse */


    NzResizeObserver.ctorParameters = function () {
      return [{
        type: NzResizeObserverFactory
      }];
    };
    /** @nocollapse */


    NzResizeObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NzResizeObserver_Factory() {
        return new NzResizeObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NzResizeObserverFactory));
      },
      token: NzResizeObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: NzResizeObserverFactory
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: resize-observers.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzResizeObserversModule = function NzResizeObserversModule() {
      _classCallCheck(this, NzResizeObserversModule);
    };

    NzResizeObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NzResizeObserversModule
    });
    NzResizeObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NzResizeObserversModule_Factory(t) {
        return new (t || NzResizeObserversModule)();
      },
      providers: [NzResizeObserverFactory]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [NzResizeObserverFactory]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-core-resize-observers.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-core-resize-observers.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
    \***********************************************************************************/

  /*! exports provided: NzDividerComponent, NzDividerModule */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdDividerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function () {
      return NzDividerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzDividerModule", function () {
      return NzDividerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: divider.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzText);
      }
    }

    function NzDividerComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
      }
    }

    var NzDividerComponent = function NzDividerComponent() {
      _classCallCheck(this, NzDividerComponent);

      this.nzType = 'horizontal';
      this.nzOrientation = 'center';
      this.nzDashed = false;
    };

    NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) {
      return new (t || NzDividerComponent)();
    };

    NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzDividerComponent,
      selectors: [["nz-divider"]],
      hostVars: 14,
      hostBindings: function NzDividerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider", true)("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
        }
      },
      inputs: {
        nzType: "nzType",
        nzOrientation: "nzOrientation",
        nzDashed: "nzDashed",
        nzText: "nzText"
      },
      exportAs: ["nzDivider"],
      decls: 1,
      vars: 1,
      consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]],
      template: function NzDividerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzDividerComponent.propDecorators = {
      nzText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzOrientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzDashed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzDividerComponent.prototype, "nzDashed", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-divider',
          exportAs: 'nzDivider',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <span *ngIf=\"nzText\" class=\"ant-divider-inner-text\">\n      <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n    </span>\n  ",
          host: {
            '[class.ant-divider]': 'true',
            '[class.ant-divider-horizontal]': "nzType === 'horizontal'",
            '[class.ant-divider-vertical]': "nzType === 'vertical'",
            '[class.ant-divider-with-text-left]': "nzText && nzOrientation === 'left'",
            '[class.ant-divider-with-text-right]': "nzText && nzOrientation === 'right'",
            '[class.ant-divider-with-text-center]': "nzText && nzOrientation === 'center'",
            '[class.ant-divider-dashed]': "nzDashed"
          }
        }]
      }], function () {
        return [];
      }, {
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzDashed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: divider.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzDividerModule = function NzDividerModule() {
      _classCallCheck(this, NzDividerModule);
    };

    NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NzDividerModule
    });
    NzDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NzDividerModule_Factory(t) {
        return new (t || NzDividerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzDividerModule, {
        declarations: function declarations() {
          return [NzDividerComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]];
        },
        exports: function exports() {
          return [NzDividerComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]],
          declarations: [NzDividerComponent],
          exports: [NzDividerComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-divider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-divider.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js ***!
    \**************************************************************************************/

  /*! exports provided: NzPaginationComponent, NzPaginationDefaultComponent, NzPaginationItemComponent, NzPaginationModule, NzPaginationOptionsComponent, NzPaginationSimpleComponent */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPaginationComponent", function () {
      return NzPaginationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPaginationDefaultComponent", function () {
      return NzPaginationDefaultComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPaginationItemComponent", function () {
      return NzPaginationItemComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPaginationModule", function () {
      return NzPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPaginationOptionsComponent", function () {
      return NzPaginationOptionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPaginationSimpleComponent", function () {
      return NzPaginationSimpleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/select */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {}

    function NzPaginationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1.template);
      }
    }

    function NzPaginationComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nzSimple)("ngIfElse", _r2.template);
      }
    }

    var _c0 = ["containerTemplate"];

    function NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template(rf, ctx) {}

    var _c1 = function _c1(a0, a1) {
      return {
        $implicit: a0,
        range: a1
      };
    };

    function NzPaginationDefaultComponent_ng_template_0_li_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template, 0, 0, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.showTotal)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r2.total, ctx_r2.ranges));
      }
    }

    function NzPaginationDefaultComponent_ng_template_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_gotoIndex_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r7.jumpPage($event);
        })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_diffIndex_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r9.jumpDiff($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r6 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r3.locale)("type", page_r6.type)("index", page_r6.index)("disabled", !!page_r6.disabled)("itemRender", ctx_r3.itemRender)("active", ctx_r3.pageIndex === page_r6.index);
      }
    }

    function NzPaginationDefaultComponent_ng_template_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageIndexChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r10.onPageIndexChange($event);
        })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageSizeChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r12.onPageSizeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("total", ctx_r4.total)("locale", ctx_r4.locale)("disabled", ctx_r4.disabled)("nzSize", ctx_r4.nzSize)("showSizeChanger", ctx_r4.showSizeChanger)("showQuickJumper", ctx_r4.showQuickJumper)("pageIndex", ctx_r4.pageIndex)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
      }
    }

    function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_li_0_Template, 2, 5, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_1_Template, 1, 6, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationDefaultComponent_ng_template_0_div_2_Template, 1, 9, "div", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showTotal);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listOfPageItem)("ngForTrackBy", ctx_r1.trackByPageItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showQuickJumper || ctx_r1.showSizeChanger);
      }
    }

    var _c2 = ["nz-pagination-item", ""];

    function NzPaginationItemComponent_ng_template_0_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().page;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r4);
      }
    }

    function NzPaginationItemComponent_ng_template_0_ng_container_2_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
      }
    }

    function NzPaginationItemComponent_ng_template_0_ng_container_2_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 10);
      }
    }

    function NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
      }
    }

    function NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
      }
    }

    function NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_2_Template, 1, 0, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_3_Template, 1, 0, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2022\u2022\u2022");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "prev_5");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "next_5");
      }
    }

    function NzPaginationItemComponent_ng_template_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_2_i_2_Template, 1, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_2_i_3_Template, 1, 0, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_Template, 6, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "prev");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "next");
      }
    }

    function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_a_1_Template, 2, 1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_2_Template, 5, 3, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var type_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "page");
      }
    }

    function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {}

    var _c3 = function _c3(a0, a1) {
      return {
        $implicit: a0,
        page: a1
      };
    };

    var _c4 = ["nz-pagination-options", ""];

    function NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 4);
      }

      if (rf & 2) {
        var option_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", option_r3.label)("nzValue", option_r3.value);
      }
    }

    function NzPaginationOptionsComponent_nz_select_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzPaginationOptionsComponent_nz_select_0_Template_nz_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.onPageSizeChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template, 1, 2, "nz-option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("ngModel", ctx_r0.pageSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listOfPageSizeOption)("ngForTrackBy", ctx_r0.trackByOption);
      }
    }

    function NzPaginationOptionsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function NzPaginationOptionsComponent_div_1_Template_input_keydown_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.jumpToPageViaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.jump_to, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.page, " ");
      }
    }

    function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.prePage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.jumpToPageViaInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.nextPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isFirstIndex)("itemRender", ctx_r1.itemRender);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r1.locale.prev_page);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.lastIndex, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isLastIndex)("itemRender", ctx_r1.itemRender);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
      }
    }

    var NzPaginationComponent = /*#__PURE__*/function () {
      /**
       * @param {?} i18n
       * @param {?} cdr
       * @param {?} breakpointService
       */
      function NzPaginationComponent(i18n, cdr, breakpointService) {
        _classCallCheck(this, NzPaginationComponent);

        this.i18n = i18n;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzShowTotal = null;
        this.nzSize = 'default';
        this.nzPageSizeOptions = [10, 20, 30, 40];
        this.nzItemRender = null;
        this.nzDisabled = false;
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzResponsive = false;
        this.nzTotal = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.showPagination = true;
        this.size = 'default';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.total$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
      }
      /**
       * @param {?} value
       * @param {?} lastIndex
       * @return {?}
       */


      _createClass(NzPaginationComponent, [{
        key: "validatePageIndex",
        value: function validatePageIndex(value, lastIndex) {
          if (value > lastIndex) {
            return lastIndex;
          } else if (value < 1) {
            return 1;
          } else {
            return value;
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "onPageIndexChange",
        value: function onPageIndexChange(index) {
          /** @type {?} */
          var lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
          /** @type {?} */

          var validIndex = this.validatePageIndex(index, lastIndex);

          if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
            this.nzPageIndex = validIndex;
            this.nzPageIndexChange.emit(this.nzPageIndex);
          }
        }
        /**
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "onPageSizeChange",
        value: function onPageSizeChange(size) {
          this.nzPageSize = size;
          this.nzPageSizeChange.emit(size);
          /** @type {?} */

          var lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);

          if (this.nzPageIndex > lastIndex) {
            this.onPageIndexChange(lastIndex);
          }
        }
        /**
         * @param {?} total
         * @return {?}
         */

      }, {
        key: "onTotalChange",
        value: function onTotalChange(total) {
          var _this6 = this;

          /** @type {?} */
          var lastIndex = this.getLastIndex(total, this.nzPageSize);

          if (this.nzPageIndex > lastIndex) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this6.onPageIndexChange(lastIndex);
            });
          }
        }
        /**
         * @param {?} total
         * @param {?} pageSize
         * @return {?}
         */

      }, {
        key: "getLastIndex",
        value: function getLastIndex(total, pageSize) {
          return Math.ceil(total / pageSize);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7.locale = _this7.i18n.getLocaleData('Pagination');

            _this7.cdr.markForCheck();
          });
          this.total$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} total
          * @return {?}
          */
          function (total) {
            _this7.onTotalChange(total);
          });
          this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["gridResponsiveMap"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} bp
          * @return {?}
          */
          function (bp) {
            if (_this7.nzResponsive) {
              _this7.size = bp === ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointEnum"].xs ? 'small' : 'default';

              _this7.cdr.markForCheck();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzHideOnSinglePage = changes.nzHideOnSinglePage,
              nzTotal = changes.nzTotal,
              nzPageSize = changes.nzPageSize,
              nzSize = changes.nzSize;

          if (nzTotal) {
            this.total$.next(this.nzTotal);
          }

          if (nzHideOnSinglePage || nzTotal || nzPageSize) {
            this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
          }

          if (nzSize) {
            this.size = nzSize.currentValue;
          }
        }
      }]);

      return NzPaginationComponent;
    }();

    NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) {
      return new (t || NzPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointService"]));
    };

    NzPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzPaginationComponent,
      selectors: [["nz-pagination"]],
      hostVars: 8,
      hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-pagination", true)("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small");
        }
      },
      inputs: {
        nzShowTotal: "nzShowTotal",
        nzSize: "nzSize",
        nzPageSizeOptions: "nzPageSizeOptions",
        nzItemRender: "nzItemRender",
        nzDisabled: "nzDisabled",
        nzShowSizeChanger: "nzShowSizeChanger",
        nzHideOnSinglePage: "nzHideOnSinglePage",
        nzShowQuickJumper: "nzShowQuickJumper",
        nzSimple: "nzSimple",
        nzResponsive: "nzResponsive",
        nzTotal: "nzTotal",
        nzPageIndex: "nzPageIndex",
        nzPageSize: "nzPageSize"
      },
      outputs: {
        nzPageSizeChange: "nzPageSizeChange",
        nzPageIndexChange: "nzPageIndexChange"
      },
      exportAs: ["nzPagination"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 18,
      consts: [[4, "ngIf"], [3, "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex", "pageIndexChange"], ["simplePagination", ""], [3, "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"], ["defaultPagination", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]],
      template: function NzPaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationComponent_ng_container_0_Template, 2, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-pagination-simple", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
            return ctx.onPageIndexChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-pagination-default", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
            return ctx.onPageIndexChange($event);
          })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
            return ctx.onPageSizeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPagination);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], NzPaginationSimpleComponent, NzPaginationDefaultComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzPaginationComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointService"]
      }];
    };

    NzPaginationComponent.propDecorators = {
      nzPageSizeChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      nzPageIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      nzShowTotal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzPageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzItemRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzShowSizeChanger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzHideOnSinglePage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzShowQuickJumper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzSimple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzResponsive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzTotal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzPageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzPageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzSimple", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzResponsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzTotal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzPageIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzPageSize", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-pagination',
          exportAs: 'nzPagination',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-container *ngIf=\"showPagination\">\n      <ng-container *ngIf=\"nzSimple; else defaultPagination.template\">\n        <ng-template [ngTemplateOutlet]=\"simplePagination.template\"></ng-template>\n      </ng-container>\n    </ng-container>\n    <nz-pagination-simple\n      #simplePagination\n      [disabled]=\"nzDisabled\"\n      [itemRender]=\"nzItemRender\"\n      [locale]=\"locale\"\n      [pageSize]=\"nzPageSize\"\n      [total]=\"nzTotal\"\n      [pageIndex]=\"nzPageIndex\"\n      (pageIndexChange)=\"onPageIndexChange($event)\"\n    ></nz-pagination-simple>\n    <nz-pagination-default\n      #defaultPagination\n      [nzSize]=\"size\"\n      [itemRender]=\"nzItemRender\"\n      [showTotal]=\"nzShowTotal\"\n      [disabled]=\"nzDisabled\"\n      [locale]=\"locale\"\n      [showSizeChanger]=\"nzShowSizeChanger\"\n      [showQuickJumper]=\"nzShowQuickJumper\"\n      [total]=\"nzTotal\"\n      [pageIndex]=\"nzPageIndex\"\n      [pageSize]=\"nzPageSize\"\n      [pageSizeOptions]=\"nzPageSizeOptions\"\n      (pageIndexChange)=\"onPageIndexChange($event)\"\n      (pageSizeChange)=\"onPageSizeChange($event)\"\n    ></nz-pagination-default>\n  ",
          host: {
            '[class.ant-pagination]': 'true',
            '[class.ant-pagination-simple]': 'nzSimple',
            '[class.ant-pagination-disabled]': 'nzDisabled',
            '[class.mini]': "!nzSimple && size === 'small'"
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointService"]
        }];
      }, {
        nzPageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        nzPageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        nzShowTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzPageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzItemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzShowSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzHideOnSinglePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzShowQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzSimple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzResponsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzPageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzPageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination-default.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzPaginationDefaultComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function NzPaginationDefaultComponent(renderer, elementRef) {
        _classCallCheck(this, NzPaginationDefaultComponent);

        this.nzSize = 'default';
        this.itemRender = null;
        this.showTotal = null;
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 30, 40];
        this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ranges = [0, 0];
        this.listOfPageItem = [];
        renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
      }
      /**
       * @param {?} index
       * @return {?}
       */


      _createClass(NzPaginationDefaultComponent, [{
        key: "jumpPage",
        value: function jumpPage(index) {
          this.onPageIndexChange(index);
        }
        /**
         * @param {?} diff
         * @return {?}
         */

      }, {
        key: "jumpDiff",
        value: function jumpDiff(diff) {
          this.jumpPage(this.pageIndex + diff);
        }
        /**
         * @param {?} _
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "trackByPageItem",
        value: function trackByPageItem(_, value) {
          return "".concat(value.type, "-").concat(value.index);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "onPageIndexChange",
        value: function onPageIndexChange(index) {
          this.pageIndexChange.next(index);
        }
        /**
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "onPageSizeChange",
        value: function onPageSizeChange(size) {
          this.pageSizeChange.next(size);
        }
        /**
         * @param {?} total
         * @param {?} pageSize
         * @return {?}
         */

      }, {
        key: "getLastIndex",
        value: function getLastIndex(total, pageSize) {
          return Math.ceil(total / pageSize);
        }
        /**
         * @return {?}
         */

      }, {
        key: "buildIndexes",
        value: function buildIndexes() {
          /** @type {?} */
          var lastIndex = this.getLastIndex(this.total, this.pageSize);
          this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
        }
        /**
         * @param {?} pageIndex
         * @param {?} lastIndex
         * @return {?}
         */

      }, {
        key: "getListOfPageItem",
        value: function getListOfPageItem(pageIndex, lastIndex) {
          /** @type {?} */
          var concatWithPrevNext =
          /**
          * @param {?} listOfPage
          * @return {?}
          */
          function concatWithPrevNext(listOfPage) {
            /** @type {?} */
            var prevItem = {
              type: 'prev',
              disabled: pageIndex === 1
            };
            /** @type {?} */

            var nextItem = {
              type: 'next',
              disabled: pageIndex === lastIndex
            };
            return [prevItem].concat(_toConsumableArray(listOfPage), [nextItem]);
          };
          /** @type {?} */


          var generatePage =
          /**
          * @param {?} start
          * @param {?} end
          * @return {?}
          */
          function generatePage(start, end) {
            /** @type {?} */
            var list = [];

            for (var i = start; i <= end; i++) {
              list.push({
                index: i,
                type: 'page'
              });
            }

            return list;
          };

          if (lastIndex <= 9) {
            return concatWithPrevNext(generatePage(1, lastIndex));
          } else {
            /** @type {?} */
            var generateRangeItem =
            /**
            * @param {?} selected
            * @param {?} last
            * @return {?}
            */
            function generateRangeItem(selected, last) {
              /** @type {?} */
              var listOfRange = [];
              /** @type {?} */

              var prevFiveItem = {
                type: 'prev_5'
              };
              /** @type {?} */

              var nextFiveItem = {
                type: 'next_5'
              };
              /** @type {?} */

              var firstPageItem = generatePage(1, 1);
              /** @type {?} */

              var lastPageItem = generatePage(lastIndex, lastIndex);

              if (selected < 4) {
                listOfRange = [].concat(_toConsumableArray(generatePage(2, 5)), [nextFiveItem]);
              } else if (selected < last - 3) {
                listOfRange = [prevFiveItem].concat(_toConsumableArray(generatePage(selected - 2, selected + 2)), [nextFiveItem]);
              } else {
                listOfRange = [prevFiveItem].concat(_toConsumableArray(generatePage(last - 4, last - 1)));
              }

              return [].concat(_toConsumableArray(firstPageItem), _toConsumableArray(listOfRange), _toConsumableArray(lastPageItem));
            };

            return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var pageIndex = changes.pageIndex,
              pageSize = changes.pageSize,
              total = changes.total;

          if (pageIndex || pageSize || total) {
            this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
            this.buildIndexes();
          }
        }
      }]);

      return NzPaginationDefaultComponent;
    }();

    NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) {
      return new (t || NzPaginationDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    NzPaginationDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzPaginationDefaultComponent,
      selectors: [["nz-pagination-default"]],
      viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        nzSize: "nzSize",
        itemRender: "itemRender",
        showTotal: "showTotal",
        disabled: "disabled",
        showSizeChanger: "showSizeChanger",
        showQuickJumper: "showQuickJumper",
        total: "total",
        pageIndex: "pageIndex",
        pageSize: "pageSize",
        pageSizeOptions: "pageSizeOptions",
        locale: "locale"
      },
      outputs: {
        pageIndexChange: "pageIndexChange",
        pageSizeChange: "pageSizeChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [["containerTemplate", ""], ["class", "ant-pagination-total-text", 4, "ngIf"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "gotoIndex", "diffIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange", 4, "ngIf"], [1, "ant-pagination-total-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "gotoIndex", "diffIndex"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"]],
      template: function NzPaginationDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], NzPaginationItemComponent, NzPaginationOptionsComponent];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzPaginationDefaultComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    NzPaginationDefaultComponent.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['containerTemplate', {
          "static": true
        }]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      itemRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showTotal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showSizeChanger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showQuickJumper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      total: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      pageSizeChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-pagination-default',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-template #containerTemplate>\n      <li class=\"ant-pagination-total-text\" *ngIf=\"showTotal\">\n        <ng-template [ngTemplateOutlet]=\"showTotal\" [ngTemplateOutletContext]=\"{ $implicit: total, range: ranges }\"></ng-template>\n      </li>\n      <li\n        *ngFor=\"let page of listOfPageItem; trackBy: trackByPageItem\"\n        nz-pagination-item\n        [locale]=\"locale\"\n        [type]=\"page.type\"\n        [index]=\"page.index\"\n        [disabled]=\"!!page.disabled\"\n        [itemRender]=\"itemRender\"\n        [active]=\"pageIndex === page.index\"\n        (gotoIndex)=\"jumpPage($event)\"\n        (diffIndex)=\"jumpDiff($event)\"\n      ></li>\n      <div\n        nz-pagination-options\n        *ngIf=\"showQuickJumper || showSizeChanger\"\n        [total]=\"total\"\n        [locale]=\"locale\"\n        [disabled]=\"disabled\"\n        [nzSize]=\"nzSize\"\n        [showSizeChanger]=\"showSizeChanger\"\n        [showQuickJumper]=\"showQuickJumper\"\n        [pageIndex]=\"pageIndex\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        (pageIndexChange)=\"onPageIndexChange($event)\"\n        (pageSizeChange)=\"onPageSizeChange($event)\"\n      ></div>\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        itemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['containerTemplate', {
            "static": true
          }]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzPaginationItemComponent = /*#__PURE__*/function () {
      function NzPaginationItemComponent() {
        _classCallCheck(this, NzPaginationItemComponent);

        this.active = false;
        this.index = null;
        this.disabled = false;
        this.type = null;
        this.itemRender = null;
        this.diffIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gotoIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = null;
      }
      /**
       * @return {?}
       */


      _createClass(NzPaginationItemComponent, [{
        key: "clickItem",
        value: function clickItem() {
          if (!this.disabled) {
            if (this.type === 'page') {
              this.gotoIndex.emit(
              /** @type {?} */
              this.index);
            } else {
              this.diffIndex.emit(
              /** @type {?} */
              {
                next: 1,
                prev: -1,
                prev_5: -5,
                next_5: 5
              }[
              /** @type {?} */
              this.type]);
            }
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _a, _b, _c, _d;

          var locale = changes.locale,
              index = changes.index,
              type = changes.type;

          if (locale || index || type) {
            this.title =
            /** @type {?} */
            {
              page: "".concat(this.index),
              next: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.next_page,
              prev: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.prev_page,
              prev_5: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.prev_5,
              next_5: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.next_5
            }[
            /** @type {?} */
            this.type];
          }
        }
      }]);

      return NzPaginationItemComponent;
    }();

    NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(t) {
      return new (t || NzPaginationItemComponent)();
    };

    NzPaginationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzPaginationItemComponent,
      selectors: [["li", "nz-pagination-item", ""]],
      hostVars: 19,
      hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPaginationItemComponent_click_HostBindingHandler() {
            return ctx.clickItem();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
        }
      },
      inputs: {
        active: "active",
        index: "index",
        disabled: "disabled",
        type: "type",
        itemRender: "itemRender",
        locale: "locale"
      },
      outputs: {
        diffIndex: "diffIndex",
        gotoIndex: "gotoIndex"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      attrs: _c2,
      decls: 3,
      vars: 5,
      consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "ngSwitch"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchCase"], ["class", "ant-pagination-item-container", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [1, "ant-pagination-item-container"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"]],
      template: function NzPaginationItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationItemComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemRender || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, ctx.type, ctx.index));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzPaginationItemComponent.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      itemRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      diffIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      gotoIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'li[nz-pagination-item]',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-template #renderItemTemplate let-type let-page=\"page\">\n      <ng-container [ngSwitch]=\"type\">\n        <a *ngSwitchCase=\"'page'\">{{ page }}</a>\n        <ng-container *ngSwitchDefault>\n          <a class=\"ant-pagination-item-link\" [ngSwitch]=\"type\">\n            <i nz-icon nzType=\"left\" *ngSwitchCase=\"'prev'\"></i>\n            <i nz-icon nzType=\"right\" *ngSwitchCase=\"'next'\"></i>\n            <div class=\"ant-pagination-item-container\" *ngSwitchDefault>\n              <ng-container [ngSwitch]=\"type\">\n                <i *ngSwitchCase=\"'prev_5'\" nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n                <i *ngSwitchCase=\"'next_5'\" nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n              </ng-container>\n              <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n            </div>\n          </a>\n        </ng-container>\n      </ng-container>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"itemRender || renderItemTemplate\"\n      [ngTemplateOutletContext]=\"{ $implicit: type, page: index }\"\n    ></ng-template>\n  ",
          host: {
            '[class.ant-pagination-prev]': "type === 'prev'",
            '[class.ant-pagination-next]': "type === 'next'",
            '[class.ant-pagination-item]': "type === 'page'",
            '[class.ant-pagination-jump-prev]': "type === 'prev_5'",
            '[class.ant-pagination-jump-prev-custom-icon]': "type === 'prev_5'",
            '[class.ant-pagination-jump-next]': "type === 'next_5'",
            '[class.ant-pagination-jump-next-custom-icon]': "type === 'next_5'",
            '[class.ant-pagination-disabled]': 'disabled',
            '[class.ant-pagination-item-active]]': 'active',
            '[attr.title]': 'title',
            '(click)': 'clickItem()'
          }
        }]
      }], function () {
        return [];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        itemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        diffIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        gotoIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination-options.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzPaginationOptionsComponent = /*#__PURE__*/function () {
      function NzPaginationOptionsComponent() {
        _classCallCheck(this, NzPaginationOptionsComponent);

        this.nzSize = 'default';
        this.disabled = false;
        this.showSizeChanger = false;
        this.showQuickJumper = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageSizeOptions = [];
        this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listOfPageSizeOption = [];
      }
      /**
       * @param {?} size
       * @return {?}
       */


      _createClass(NzPaginationOptionsComponent, [{
        key: "onPageSizeChange",
        value: function onPageSizeChange(size) {
          if (this.pageSize !== size) {
            this.pageSizeChange.next(size);
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "jumpToPageViaInput",
        value: function jumpToPageViaInput($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;
          /** @type {?} */

          var index = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(target.value, this.pageIndex);
          this.pageIndexChange.next(index);
          target.value = '';
        }
        /**
         * @param {?} _
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "trackByOption",
        value: function trackByOption(_, option) {
          return option.value;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this8 = this;

          var pageSize = changes.pageSize,
              pageSizeOptions = changes.pageSizeOptions,
              locale = changes.locale;

          if (pageSize || pageSizeOptions || locale) {
            this.listOfPageSizeOption = _toConsumableArray(new Set([].concat(_toConsumableArray(this.pageSizeOptions), [this.pageSize]))).map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return {
                value: item,
                label: "".concat(item, " ").concat(_this8.locale.items_per_page)
              };
            });
          }
        }
      }]);

      return NzPaginationOptionsComponent;
    }();

    NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) {
      return new (t || NzPaginationOptionsComponent)();
    };

    NzPaginationOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzPaginationOptionsComponent,
      selectors: [["div", "nz-pagination-options", ""]],
      hostVars: 2,
      hostBindings: function NzPaginationOptionsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-pagination-options", true);
        }
      },
      inputs: {
        nzSize: "nzSize",
        disabled: "disabled",
        showSizeChanger: "showSizeChanger",
        showQuickJumper: "showQuickJumper",
        total: "total",
        pageIndex: "pageIndex",
        pageSize: "pageSize",
        pageSizeOptions: "pageSizeOptions",
        locale: "locale"
      },
      outputs: {
        pageIndexChange: "pageIndexChange",
        pageSizeChange: "pageSizeChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      attrs: _c4,
      decls: 2,
      vars: 2,
      consts: [["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"]],
      template: function NzPaginationOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationOptionsComponent_nz_select_0_Template, 2, 5, "nz-select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationOptionsComponent_div_1_Template, 4, 3, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSizeChanger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showQuickJumper);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzPaginationOptionsComponent.propDecorators = {
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showSizeChanger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showQuickJumper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      total: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      pageSizeChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'div[nz-pagination-options]',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <nz-select\n      class=\"ant-pagination-options-size-changer\"\n      *ngIf=\"showSizeChanger\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"nzSize\"\n      [ngModel]=\"pageSize\"\n      (ngModelChange)=\"onPageSizeChange($event)\"\n    >\n      <nz-option\n        *ngFor=\"let option of listOfPageSizeOption; trackBy: trackByOption\"\n        [nzLabel]=\"option.label\"\n        [nzValue]=\"option.value\"\n      ></nz-option>\n    </nz-select>\n    <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"showQuickJumper\">\n      {{ locale.jump_to }}\n      <input [disabled]=\"disabled\" (keydown.enter)=\"jumpToPageViaInput($event)\" />\n      {{ locale.page }}\n    </div>\n  ",
          host: {
            '[class.ant-pagination-options]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination-simple.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzPaginationSimpleComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function NzPaginationSimpleComponent(renderer, elementRef) {
        _classCallCheck(this, NzPaginationSimpleComponent);

        this.itemRender = null;
        this.disabled = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lastIndex = 0;
        this.isFirstIndex = false;
        this.isLastIndex = false;
        renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
      }
      /**
       * @param {?} $event
       * @return {?}
       */


      _createClass(NzPaginationSimpleComponent, [{
        key: "jumpToPageViaInput",
        value: function jumpToPageViaInput($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;
          /** @type {?} */

          var index = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(target.value, this.pageIndex);
          this.onPageIndexChange(index);
          target.value = "".concat(this.pageIndex);
        }
        /**
         * @return {?}
         */

      }, {
        key: "prePage",
        value: function prePage() {
          this.onPageIndexChange(this.pageIndex - 1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "nextPage",
        value: function nextPage() {
          this.onPageIndexChange(this.pageIndex + 1);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "onPageIndexChange",
        value: function onPageIndexChange(index) {
          this.pageIndexChange.next(index);
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateBindingValue",
        value: function updateBindingValue() {
          this.lastIndex = Math.ceil(this.total / this.pageSize);
          this.isFirstIndex = this.pageIndex === 1;
          this.isLastIndex = this.pageIndex === this.lastIndex;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var pageIndex = changes.pageIndex,
              total = changes.total,
              pageSize = changes.pageSize;

          if (pageIndex || total || pageSize) {
            this.updateBindingValue();
          }
        }
      }]);

      return NzPaginationSimpleComponent;
    }();

    NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) {
      return new (t || NzPaginationSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    NzPaginationSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzPaginationSimpleComponent,
      selectors: [["nz-pagination-simple"]],
      viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        itemRender: "itemRender",
        disabled: "disabled",
        total: "total",
        pageIndex: "pageIndex",
        pageSize: "pageSize",
        locale: "locale"
      },
      outputs: {
        pageIndexChange: "pageIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "disabled", "itemRender", "click"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "disabled", "itemRender", "click"]],
      template: function NzPaginationSimpleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationSimpleComponent_ng_template_0_Template, 7, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: [NzPaginationItemComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzPaginationSimpleComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    NzPaginationSimpleComponent.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['containerTemplate', {
          "static": true
        }]
      }],
      itemRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      total: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationSimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-pagination-simple',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-template #containerTemplate>\n      <li\n        nz-pagination-item\n        [attr.title]=\"locale.prev_page\"\n        [disabled]=\"isFirstIndex\"\n        (click)=\"prePage()\"\n        type=\"prev\"\n        [itemRender]=\"itemRender\"\n      ></li>\n      <li [attr.title]=\"pageIndex + '/' + lastIndex\" class=\"ant-pagination-simple-pager\">\n        <input [disabled]=\"disabled\" [value]=\"pageIndex\" (keydown.enter)=\"jumpToPageViaInput($event)\" size=\"3\" />\n        <span class=\"ant-pagination-slash\">/</span>\n        {{ lastIndex }}\n      </li>\n      <li\n        nz-pagination-item\n        [attr.title]=\"locale?.next_page\"\n        [disabled]=\"isLastIndex\"\n        (click)=\"nextPage()\"\n        type=\"next\"\n        [itemRender]=\"itemRender\"\n      ></li>\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        itemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['containerTemplate', {
            "static": true
          }]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzPaginationModule = function NzPaginationModule() {
      _classCallCheck(this, NzPaginationModule);
    };

    NzPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NzPaginationModule
    });
    NzPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NzPaginationModule_Factory(t) {
        return new (t || NzPaginationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPaginationModule, {
        declarations: function declarations() {
          return [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]];
        },
        exports: function exports() {
          return [NzPaginationComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
          exports: [NzPaginationComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: pagination.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * @record
     */


    function PaginationItemRenderContext() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-pagination.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-pagination.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js ***!
    \*********************************************************************************/

  /*! exports provided: NzRadioButtonDirective, NzRadioComponent, NzRadioGroupComponent, NzRadioModule, NzRadioService */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdRadioJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRadioButtonDirective", function () {
      return NzRadioButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRadioComponent", function () {
      return NzRadioComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRadioGroupComponent", function () {
      return NzRadioGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRadioModule", function () {
      return NzRadioModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRadioService", function () {
      return NzRadioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: radio-button.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["*"];
    var _c1 = ["inputElement"];
    var _c2 = ["nz-radio", ""];

    var NzRadioButtonDirective = function NzRadioButtonDirective() {
      _classCallCheck(this, NzRadioButtonDirective);
    };

    NzRadioButtonDirective.ɵfac = function NzRadioButtonDirective_Factory(t) {
      return new (t || NzRadioButtonDirective)();
    };

    NzRadioButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NzRadioButtonDirective,
      selectors: [["", "nz-radio-button", ""]]
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: radio.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NzRadioService = /*#__PURE__*/function () {
      function NzRadioService() {
        _classCallCheck(this, NzRadioService);

        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.touched$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
      }
      /**
       * @return {?}
       */


      _createClass(NzRadioService, [{
        key: "touch",
        value: function touch() {
          this.touched$.next();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(value) {
          this.selected$.next(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDisabled",
        value: function setDisabled(value) {
          this.disabled$.next(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setName",
        value: function setName(value) {
          this.name$.next(value);
        }
      }]);

      return NzRadioService;
    }();

    NzRadioService.ɵfac = function NzRadioService_Factory(t) {
      return new (t || NzRadioService)();
    };

    NzRadioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NzRadioService,
      factory: NzRadioService.ɵfac
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: radio-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRadioGroupComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdr
       * @param {?} nzRadioService
       */
      function NzRadioGroupComponent(cdr, nzRadioService) {
        _classCallCheck(this, NzRadioGroupComponent);

        this.cdr = cdr;
        this.nzRadioService = nzRadioService;
        this.value = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.nzDisabled = false;
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        this.nzName = null;
      }
      /**
       * @return {?}
       */


      _createClass(NzRadioGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.nzRadioService.selected$.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            if (_this9.value !== value) {
              _this9.value = value;

              _this9.onChange(_this9.value);
            }
          });
          this.nzRadioService.touched$.subscribe(
          /**
          * @return {?}
          */
          function () {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this9.onTouched();
            });
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzDisabled = changes.nzDisabled,
              nzName = changes.nzName;

          if (nzDisabled) {
            this.nzRadioService.setDisabled(this.nzDisabled);
          }

          if (nzName) {
            this.nzRadioService.setName(
            /** @type {?} */
            this.nzName);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
          this.nzRadioService.select(value);
          this.cdr.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.nzDisabled = isDisabled;
          this.nzRadioService.setDisabled(isDisabled);
          this.cdr.markForCheck();
        }
      }]);

      return NzRadioGroupComponent;
    }();

    NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) {
      return new (t || NzRadioGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService));
    };

    NzRadioGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzRadioGroupComponent,
      selectors: [["nz-radio-group"]],
      hostVars: 8,
      hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-group", true)("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid");
        }
      },
      inputs: {
        nzDisabled: "nzDisabled",
        nzButtonStyle: "nzButtonStyle",
        nzSize: "nzSize",
        nzName: "nzName"
      },
      exportAs: ["nzRadioGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NzRadioService, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzRadioGroupComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzRadioGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzRadioGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: NzRadioService
      }];
    };

    NzRadioGroupComponent.propDecorators = {
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzButtonStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzRadioGroupComponent.prototype, "nzDisabled", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: radio.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRadioComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} cdr
       * @param {?} focusMonitor
       * @param {?} nzRadioService
       * @param {?} nzRadioButtonDirective
       */
      function NzRadioComponent(elementRef, cdr, focusMonitor, nzRadioService, nzRadioButtonDirective) {
        _classCallCheck(this, NzRadioComponent);

        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.isNgModel = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.nzValue = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(NzRadioComponent, [{
        key: "onHostClick",
        value: function onHostClick(event) {
          /** prevent label click triggered twice. **/
          event.stopPropagation();
          event.preventDefault();

          if (!this.nzDisabled && !this.isChecked) {
            if (this.nzRadioService) {
              this.nzRadioService.select(this.nzValue);
            }

            if (this.isNgModel) {
              this.isChecked = true;
              this.onChange(true);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.focusMonitor.focusVia(
          /** @type {?} */
          this.inputElement, 'keyboard');
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          /** @type {?} */
          this.inputElement.nativeElement.blur();
        }
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          this.nzDisabled = disabled;
          this.cdr.markForCheck();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.isChecked = value;
          this.cdr.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.isNgModel = true;
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              _this10.name = name;

              _this10.cdr.markForCheck();
            });
            this.nzRadioService.disabled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} disabled
            * @return {?}
            */
            function (disabled) {
              _this10.nzDisabled = disabled;

              _this10.cdr.markForCheck();
            });
            this.nzRadioService.selected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              _this10.isChecked = _this10.nzValue === value;

              _this10.cdr.markForCheck();
            });
          }

          this.focusMonitor.monitor(this.elementRef, true).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            if (!focusOrigin) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this10.onTouched();
              });

              if (_this10.nzRadioService) {
                _this10.nzRadioService.touch();
              }
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.nzAutoFocus) {
            this.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
          this.focusMonitor.stopMonitoring(this.elementRef);
        }
      }]);

      return NzRadioComponent;
    }();

    NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) {
      return new (t || NzRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioButtonDirective, 8));
    };

    NzRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzRadioComponent,
      selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]],
      viewQuery: function NzRadioComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        }
      },
      hostVars: 12,
      hostBindings: function NzRadioComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzRadioComponent_click_HostBindingHandler($event) {
            return ctx.onHostClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton);
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzDisabled: "nzDisabled",
        nzAutoFocus: "nzAutoFocus"
      },
      exportAs: ["nzRadio"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzRadioComponent;
        }),
        multi: true
      }])],
      attrs: _c2,
      ngContentSelectors: _c0,
      decls: 6,
      vars: 24,
      consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]],
      template: function NzRadioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nzDisabled)("checked", ctx.isChecked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzRadioComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
      }, {
        type: NzRadioService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: NzRadioButtonDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NzRadioComponent.propDecorators = {
      inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['inputElement', {
          "static": false
        }]
      }],
      nzValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzAutoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzRadioComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[nz-radio-button]'
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-radio-group',
          exportAs: 'nzRadioGroup',
          preserveWhitespaces: false,
          template: " <ng-content></ng-content> ",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          providers: [NzRadioService, {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzRadioGroupComponent;
            }),
            multi: true
          }],
          host: {
            '[class.ant-radio-group]': "true",
            '[class.ant-radio-group-large]': "nzSize === 'large'",
            '[class.ant-radio-group-small]': "nzSize === 'small'",
            '[class.ant-radio-group-solid]': "nzButtonStyle === 'solid'"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: NzRadioService
        }];
      }, {
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzButtonStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[nz-radio],[nz-radio-button]',
          exportAs: 'nzRadio',
          preserveWhitespaces: false,
          template: "\n    <span\n      [class.ant-radio]=\"!isRadioButton\"\n      [class.ant-radio-checked]=\"isChecked && !isRadioButton\"\n      [class.ant-radio-disabled]=\"nzDisabled && !isRadioButton\"\n      [class.ant-radio-button]=\"isRadioButton\"\n      [class.ant-radio-button-checked]=\"isChecked && isRadioButton\"\n      [class.ant-radio-button-disabled]=\"nzDisabled && isRadioButton\"\n    >\n      <input\n        #inputElement\n        type=\"radio\"\n        [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n        [class.ant-radio-input]=\"!isRadioButton\"\n        [class.ant-radio-button-input]=\"isRadioButton\"\n        [disabled]=\"nzDisabled\"\n        [checked]=\"isChecked\"\n        [attr.name]=\"name\"\n      />\n      <span [class.ant-radio-inner]=\"!isRadioButton\" [class.ant-radio-button-inner]=\"isRadioButton\"></span>\n    </span>\n    <span><ng-content></ng-content></span>\n  ",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzRadioComponent;
            }),
            multi: true
          }],
          host: {
            '[class.ant-radio-wrapper]': '!isRadioButton',
            '[class.ant-radio-button-wrapper]': 'isRadioButton',
            '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
            '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
            '[class.ant-radio-wrapper-disabled]': 'nzDisabled && !isRadioButton',
            '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled && isRadioButton',
            '(click)': 'onHostClick($event)'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: NzRadioService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: NzRadioButtonDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        nzValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputElement', {
            "static": false
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: radio.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRadioModule = function NzRadioModule() {
      _classCallCheck(this, NzRadioModule);
    };

    NzRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NzRadioModule
    });
    NzRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NzRadioModule_Factory(t) {
        return new (t || NzRadioModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzRadioModule, {
        declarations: function declarations() {
          return [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]];
        },
        exports: function exports() {
          return [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent],
          declarations: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-radio.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-radio.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js ***!
    \**********************************************************************************/

  /*! exports provided: NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzOptionItemGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectComponent, NzSelectItemComponent, NzSelectModule, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzSelectTopControlComponent */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdSelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzOptionComponent", function () {
      return NzOptionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzOptionContainerComponent", function () {
      return NzOptionContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzOptionGroupComponent", function () {
      return NzOptionGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzOptionItemComponent", function () {
      return NzOptionItemComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzOptionItemGroupComponent", function () {
      return NzOptionItemGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectArrowComponent", function () {
      return NzSelectArrowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectClearComponent", function () {
      return NzSelectClearComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectComponent", function () {
      return NzSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectItemComponent", function () {
      return NzSelectItemComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectModule", function () {
      return NzSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectPlaceholderComponent", function () {
      return NzSelectPlaceholderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectSearchComponent", function () {
      return NzSelectSearchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzSelectTopControlComponent", function () {
      return NzSelectTopControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/core/animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/core/no-animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /* harmony import */


    var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-zorro-antd/core/overlay */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-zorro-antd/empty */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: option-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["*"];

    function NzOptionContainerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", ctx_r0.notFoundContent);
      }
    }

    function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option-item-group", 9);
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3.groupLabel);
      }
    }

    function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onItemHover($event);
        })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.onItemClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
      }
    }

    function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r3.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "item");
      }
    }

    function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {}

    function NzOptionComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    }

    var _c1 = ["inputElement"];
    var _c2 = ["mirrorElement"];

    function NzSelectSearchComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3, 4);
      }
    }

    function NzSelectTopControlComponent_ng_container_1_nz_select_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 6);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
      }
    }

    function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_nz_select_item_1_Template, 1, 6, "nz-select-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.isComposingChange($event);
        })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onInputValueChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowSingleLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.open && ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
      }
    }

    function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@zoomMotion.done", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_animation_zoomMotion_done_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.onAnimationEnd();
        })("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var item_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.onDeleteItem(item_r8.contentTemplateOutletContext);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoomMotion", undefined)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
      }
    }

    function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 9, "nz-select-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.isComposingChange($event);
        })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onInputValueChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
      }
    }

    function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 10);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.placeHolder);
      }
    }

    function NzSelectComponent_nz_select_clear_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzSelectComponent_nz_select_clear_2_Template_nz_select_clear_clear_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onClearSelection();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearIcon", ctx_r1.nzClearIcon);
      }
    }

    function NzSelectComponent_nz_select_arrow_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow", 6);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r2.nzLoading)("search", ctx_r2.nzOpen && ctx_r2.nzShowSearch)("suffixIcon", ctx_r2.nzSuffixIcon);
      }
    }

    function NzSelectComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onKeyDown($event);
        })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onItemClick($event);
        })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.nzScrollToBottom.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.nzDropdownStyle)("itemSize", ctx_r3.nzOptionHeightPx)("maxItemLength", ctx_r3.nzOptionOverflowSize)("matchWidth", ctx_r3.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.nzMenuItemSelectedIcon)("notFoundContent", ctx_r3.nzNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.nzDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.nzMode);
      }
    }

    function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
      }
    }

    function NzOptionItemComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
      }
    }

    function NzOptionItemComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

    function NzOptionItemComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.template);
      }
    }

    function NzOptionItemComponent_div_3_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
      }
    }

    function NzOptionItemComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_div_3_i_1_Template, 1, 0, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon)("ngIfElse", ctx_r2.icon);
      }
    }

    function NzSelectArrowComponent_i_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
      }
    }

    function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
      }
    }

    function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
      }
    }

    function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.search);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.search);
      }
    }

    function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var suffixIcon_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r9);
      }
    }

    function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
      }
    }

    function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
      }
    }

    function NzSelectClearComponent_i_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1);
      }
    }

    function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
      }
    }

    function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
      }
    }

    function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
      }
    }

    function NzSelectItemComponent_span_1_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
      }
    }

    function NzSelectItemComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onDelete($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_i_1_Template, 1, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
      }
    }

    var _c3 = function _c3(a0) {
      return {
        $implicit: a0
      };
    };

    function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.placeholder, " ");
      }
    }

    var NzOptionGroupComponent = /*#__PURE__*/function () {
      function NzOptionGroupComponent() {
        _classCallCheck(this, NzOptionGroupComponent);

        this.nzLabel = null;
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(NzOptionGroupComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.changes.next();
        }
      }]);

      return NzOptionGroupComponent;
    }();

    NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) {
      return new (t || NzOptionGroupComponent)();
    };

    NzOptionGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzOptionGroupComponent,
      selectors: [["nz-option-group"]],
      inputs: {
        nzLabel: "nzLabel"
      },
      exportAs: ["nzOptionGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzOptionGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    NzOptionGroupComponent.propDecorators = {
      nzLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: option-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzOptionContainerComponent = /*#__PURE__*/function () {
      function NzOptionContainerComponent() {
        _classCallCheck(this, NzOptionContainerComponent);

        this.notFoundContent = undefined;
        this.menuItemSelectedIcon = null;
        this.dropdownRender = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.mode = 'default';
        this.matchWidth = true;
        this.itemSize = 32;
        this.maxItemLength = 8;
        this.listOfContainerItem = [];
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledIndex = 0;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzOptionContainerComponent, [{
        key: "onItemClick",
        value: function onItemClick(value) {
          this.itemClick.emit(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onItemHover",
        value: function onItemHover(value) {
          // TODO: keydown.enter won't activate this value
          this.activatedValue = value;
        }
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "trackValue",
        value: function trackValue(_index, option) {
          return option.key;
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "onScrolledIndexChange",
        value: function onScrolledIndexChange(index) {
          this.scrolledIndex = index;

          if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollToActivatedValue",
        value: function scrollToActivatedValue() {
          var _this11 = this;

          /** @type {?} */
          var index = this.listOfContainerItem.findIndex(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return _this11.compareWith(item.key, _this11.activatedValue);
          });

          if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var listOfContainerItem = changes.listOfContainerItem,
              activatedValue = changes.activatedValue;

          if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this12 = this;

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this12.scrollToActivatedValue();
          });
        }
      }]);

      return NzOptionContainerComponent;
    }();

    NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) {
      return new (t || NzOptionContainerComponent)();
    };

    NzOptionContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzOptionContainerComponent,
      selectors: [["nz-option-container"]],
      viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzOptionContainerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown", true);
        }
      },
      inputs: {
        notFoundContent: "notFoundContent",
        menuItemSelectedIcon: "menuItemSelectedIcon",
        dropdownRender: "dropdownRender",
        activatedValue: "activatedValue",
        listOfSelectedValue: "listOfSelectedValue",
        mode: "mode",
        matchWidth: "matchWidth",
        itemSize: "itemSize",
        maxItemLength: "maxItemLength",
        listOfContainerItem: "listOfContainerItem",
        compareWith: "compareWith"
      },
      outputs: {
        itemClick: "itemClick",
        scrollToBottom: "scrollToBottom"
      },
      exportAs: ["nzOptionContainer"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 14,
      consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]],
      template: function NzOptionContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
            return ctx.onScrolledIndexChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfContainerItem.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", !ctx.matchWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dropdownRender);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], NzOptionItemGroupComponent, NzOptionItemComponent];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    NzOptionContainerComponent.propDecorators = {
      notFoundContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      menuItemSelectedIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dropdownRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activatedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listOfSelectedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      matchWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxItemLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listOfContainerItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      itemClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrollToBottom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      cdkVirtualScrollViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: option.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzOptionComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzOptionGroupComponent
       */
      function NzOptionComponent(nzOptionGroupComponent) {
        _classCallCheck(this, NzOptionComponent);

        this.nzOptionGroupComponent = nzOptionGroupComponent;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.groupLabel = null;
        this.nzLabel = null;
        this.nzValue = null;
        this.nzDisabled = false;
        this.nzHide = false;
        this.nzCustomContent = false;
      }
      /**
       * @return {?}
       */


      _createClass(NzOptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          if (this.nzOptionGroupComponent) {
            this.nzOptionGroupComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this13.groupLabel = _this13.nzOptionGroupComponent.nzLabel;
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.changes.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzOptionComponent;
    }();

    NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) {
      return new (t || NzOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzOptionGroupComponent, 8));
    };

    NzOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzOptionComponent,
      selectors: [["nz-option"]],
      viewQuery: function NzOptionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        nzLabel: "nzLabel",
        nzValue: "nzValue",
        nzDisabled: "nzDisabled",
        nzHide: "nzHide",
        nzCustomContent: "nzCustomContent"
      },
      exportAs: ["nzOption"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzOptionComponent.ctorParameters = function () {
      return [{
        type: NzOptionGroupComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NzOptionComponent.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
          "static": true
        }]
      }],
      nzLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzCustomContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzOptionComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzOptionComponent.prototype, "nzHide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzOptionComponent.prototype, "nzCustomContent", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select-search.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectSearchComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       * @param {?} focusMonitor
       */
      function NzSelectSearchComponent(elementRef, renderer, focusMonitor) {
        _classCallCheck(this, NzSelectSearchComponent);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isComposingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} isComposing
       * @return {?}
       */


      _createClass(NzSelectSearchComponent, [{
        key: "setCompositionState",
        value: function setCompositionState(isComposing) {
          this.isComposingChange.next(isComposing);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onValueChange",
        value: function onValueChange(value) {
          /** @type {?} */
          var inputDOM = this.inputElement.nativeElement;
          inputDOM.value = value;
          this.value = value;
          this.valueChange.next(value);

          if (this.mirrorSync) {
            this.syncMirrorWidth();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearInputValue",
        value: function clearInputValue() {
          this.onValueChange('');
        }
        /**
         * @return {?}
         */

      }, {
        key: "syncMirrorWidth",
        value: function syncMirrorWidth() {
          /** @type {?} */
          var mirrorDOM =
          /** @type {?} */
          this.mirrorElement.nativeElement;
          /** @type {?} */

          var hostDOM = this.elementRef.nativeElement;
          /** @type {?} */

          var inputDOM = this.inputElement.nativeElement;
          this.renderer.removeStyle(hostDOM, 'width');
          mirrorDOM.innerHTML = "".concat(inputDOM.value, "&nbsp;");
          this.renderer.setStyle(hostDOM, 'width', "".concat(mirrorDOM.scrollWidth, "px"));
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this.inputElement.nativeElement.blur();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var inputDOM = this.inputElement.nativeElement;
          var focusTrigger = changes.focusTrigger,
              showInput = changes.showInput;

          if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
          }

          if (showInput) {
            if (this.showInput) {
              this.renderer.removeAttribute(inputDOM, 'readonly');
            } else {
              this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.mirrorSync) {
            this.syncMirrorWidth();
          }

          if (this.autofocus) {
            this.focus();
          }
        }
      }]);

      return NzSelectSearchComponent;
    }();

    NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) {
      return new (t || NzSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]));
    };

    NzSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectSearchComponent,
      selectors: [["nz-select-search"]],
      viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mirrorElement = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzSelectSearchComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-search", true);
        }
      },
      inputs: {
        disabled: "disabled",
        mirrorSync: "mirrorSync",
        showInput: "showInput",
        focusTrigger: "focusTrigger",
        value: "value",
        autofocus: "autofocus"
      },
      outputs: {
        valueChange: "valueChange",
        isComposingChange: "isComposingChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 6,
      consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]],
      template: function NzSelectSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.onValueChange($event);
          })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
            return ctx.setCompositionState(true);
          })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
            return ctx.setCompositionState(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.showInput ? null : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.autofocus ? "autofocus" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mirrorSync);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzSelectSearchComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
      }];
    };

    NzSelectSearchComponent.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mirrorSync: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autofocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      isComposingChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['inputElement', {
          "static": true
        }]
      }],
      mirrorElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['mirrorElement', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select-top-control.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectTopControlComponent = /*#__PURE__*/function () {
      /**
       * @param {?=} noAnimation
       */
      function NzSelectTopControlComponent(noAnimation) {
        _classCallCheck(this, NzSelectTopControlComponent);

        this.noAnimation = noAnimation;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
      }
      /**
       * @return {?}
       */


      _createClass(NzSelectTopControlComponent, [{
        key: "onHostClick",
        value: function onHostClick() {
          if (!this.disabled) {
            this.openChange.next(!this.open);
          }
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onHostKeydown",
        value: function onHostKeydown(e) {
          /** @type {?} */
          var inputValue =
          /** @type {?} */
          e.target.value;

          if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["BACKSPACE"] && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            e.preventDefault();
            this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateTemplateVariable",
        value: function updateTemplateVariable() {
          /** @type {?} */
          var isSelectedValueEmpty = this.listOfTopItem.length === 0;
          this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
          this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        }
        /**
         * @param {?} isComposing
         * @return {?}
         */

      }, {
        key: "isComposingChange",
        value: function isComposingChange(isComposing) {
          this.isComposing = isComposing;
          this.updateTemplateVariable();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onInputValueChange",
        value: function onInputValueChange(value) {
          if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
          }
        }
        /**
         * @param {?} inputValue
         * @param {?} tokenSeparators
         * @return {?}
         */

      }, {
        key: "tokenSeparate",
        value: function tokenSeparate(inputValue, tokenSeparators) {
          /** @type {?} */
          var includesSeparators =
          /**
          * @param {?} str
          * @param {?} separators
          * @return {?}
          */
          function includesSeparators(str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
              if (str.lastIndexOf(separators[i]) > 0) {
                return true;
              }
            }

            return false;
          };
          /** @type {?} */


          var splitBySeparators =
          /**
          * @param {?} str
          * @param {?} separators
          * @return {?}
          */
          function splitBySeparators(str, separators) {
            /** @type {?} */
            var reg = new RegExp("[".concat(separators.join(), "]"));
            /** @type {?} */

            var array =
            /** @type {?} */
            str.split(reg).filter(
            /**
            * @param {?} token
            * @return {?}
            */
            function (token) {
              return token;
            });
            return _toConsumableArray(new Set(array));
          };

          if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== 'default' && includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            var listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearInputValue",
        value: function clearInputValue() {
          if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
          }
        }
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "trackValue",
        value: function trackValue(_index, option) {
          return option.nzValue;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "onDeleteItem",
        value: function onDeleteItem(item) {
          if (!this.disabled && !item.nzDisabled) {
            this.deleteItem.next(item);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd() {
          this.animationEnd.next();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this14 = this;

          var listOfTopItem = changes.listOfTopItem,
              maxTagCount = changes.maxTagCount,
              customTemplate = changes.customTemplate,
              maxTagPlaceholder = changes.maxTagPlaceholder;

          if (listOfTopItem) {
            this.updateTemplateVariable();
          }

          if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            /** @type {?} */
            var listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(
            /**
            * @param {?} o
            * @return {?}
            */
            function (o) {
              return {
                nzLabel: o.nzLabel,
                nzValue: o.nzValue,
                nzDisabled: o.nzDisabled,
                contentTemplateOutlet: _this14.customTemplate,
                contentTemplateOutletContext: o
              };
            });

            if (this.listOfTopItem.length > this.maxTagCount) {
              /** @type {?} */
              var exceededLabel = "+ ".concat(this.listOfTopItem.length - this.maxTagCount, " ...");
              /** @type {?} */

              var listOfSelectedValue = this.listOfTopItem.map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item.nzValue;
              });
              /** @type {?} */

              var exceededItem = {
                nzLabel: exceededLabel,
                nzValue: '$$__nz_exceeded_item',
                nzDisabled: true,
                contentTemplateOutlet: this.maxTagPlaceholder,
                contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
              };
              listOfSlicedItem.push(exceededItem);
            }

            this.listOfSlicedItem = listOfSlicedItem;
          }
        }
      }]);

      return NzSelectTopControlComponent;
    }();

    NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) {
      return new (t || NzSelectTopControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], 9));
    };

    NzSelectTopControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectTopControlComponent,
      selectors: [["nz-select-top-control"]],
      viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectSearchComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzSelectTopControlComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectTopControlComponent_click_HostBindingHandler() {
            return ctx.onHostClick();
          })("keydown", function NzSelectTopControlComponent_keydown_HostBindingHandler($event) {
            return ctx.onHostKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selector", true);
        }
      },
      inputs: {
        showSearch: "showSearch",
        placeHolder: "placeHolder",
        open: "open",
        maxTagCount: "maxTagCount",
        autofocus: "autofocus",
        disabled: "disabled",
        mode: "mode",
        customTemplate: "customTemplate",
        maxTagPlaceholder: "maxTagPlaceholder",
        removeIcon: "removeIcon",
        listOfTopItem: "listOfTopItem",
        tokenSeparators: "tokenSeparators"
      },
      outputs: {
        tokenize: "tokenize",
        inputValueChange: "inputValueChange",
        animationEnd: "animationEnd",
        deleteItem: "deleteItem",
        openChange: "openChange"
      },
      exportAs: ["nzSelectTopControl"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 3,
      consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]],
      template: function NzSelectTopControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_Template, 3, 7, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_2_Template, 3, 8, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPlaceholder);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], NzSelectSearchComponent, NzSelectItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], NzSelectPlaceholderComponent];
      },
      encapsulation: 2,
      data: {
        animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomMotion"]]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    NzSelectTopControlComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NzSelectTopControlComponent.propDecorators = {
      showSearch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeHolder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxTagCount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autofocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxTagPlaceholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      removeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listOfTopItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tokenSeparators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tokenize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      animationEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      deleteItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      openChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzSelectSearchComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [NzSelectSearchComponent]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var defaultFilterOption =
    /**
    * @param {?} searchValue
    * @param {?} item
    * @return {?}
    */
    function defaultFilterOption(searchValue, item) {
      if (item && item.nzLabel) {
        return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      } else {
        return false;
      }
    };

    var ɵ0 = defaultFilterOption;
    /** @type {?} */

    var NZ_CONFIG_COMPONENT_NAME = 'select';

    var NzSelectComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzConfigService
       * @param {?} cdr
       * @param {?} elementRef
       * @param {?} platform
       * @param {?} focusMonitor
       * @param {?=} noAnimation
       */
      function NzSelectComponent(nzConfigService, cdr, elementRef, platform, focusMonitor, noAnimation) {
        _classCallCheck(this, NzSelectComponent);

        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.platform = platform;
        this.focusMonitor = focusMonitor;
        this.noAnimation = noAnimation;
        this.nzSize = 'default';
        this.nzOptionHeightPx = 32;
        this.nzOptionOverflowSize = 8;
        this.nzDropdownClassName = null;
        this.nzDropdownMatchSelectWidth = true;
        this.nzDropdownStyle = null;
        this.nzNotFoundContent = undefined;
        this.nzPlaceHolder = null;
        this.nzMaxTagCount = Infinity;
        this.nzDropdownRender = null;
        this.nzCustomTemplate = null;
        this.nzSuffixIcon = null;
        this.nzClearIcon = null;
        this.nzRemoveIcon = null;
        this.nzMenuItemSelectedIcon = null;
        this.nzShowArrow = true;
        this.nzTokenSeparators = [];
        this.nzMaxTagPlaceholder = null;
        this.nzMaxMultipleCount = Infinity;
        this.nzMode = 'default';
        this.nzFilterOption = defaultFilterOption;

        this.compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };

        this.nzAllowClear = false;
        this.nzBorderless = false;
        this.nzShowSearch = false;
        this.nzLoading = false;
        this.nzAutoFocus = false;
        this.nzAutoClearSearchValue = true;
        this.nzServerSearch = false;
        this.nzDisabled = false;
        this.nzOpen = false;
        this.nzOptions = [];
        this.nzOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listOfValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.listOfTemplateItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.listOfTagAndTemplateItem = [];
        this.searchValue = '';
        this.isReactiveDriven = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.dropDownPosition = 'bottom';
        this.triggerWidth = null;
        this.listOfContainerItem = [];
        this.listOfTopItem = [];
        this.activatedValue = null;
        this.listOfValue = [];
        this.focused = false;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzSelectComponent, [{
        key: "generateTagItem",
        value: function generateTagItem(value) {
          return {
            nzValue: value,
            nzLabel: value,
            type: 'item'
          };
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onItemClick",
        value: function onItemClick(value) {
          var _this15 = this;

          this.activatedValue = value;

          if (this.nzMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
              this.updateListOfValue([value]);
            }

            this.setOpenState(false);
          } else {
            /** @type {?} */
            var targetIndex = this.listOfValue.findIndex(
            /**
            * @param {?} o
            * @return {?}
            */
            function (o) {
              return _this15.compareWith(o, value);
            });

            if (targetIndex !== -1) {
              /** @type {?} */
              var listOfValueAfterRemoved = this.listOfValue.filter(
              /**
              * @param {?} _
              * @param {?} i
              * @return {?}
              */
              function (_, i) {
                return i !== targetIndex;
              });
              this.updateListOfValue(listOfValueAfterRemoved);
            } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
              /** @type {?} */
              var listOfValueAfterAdded = [].concat(_toConsumableArray(this.listOfValue), [value]);
              this.updateListOfValue(listOfValueAfterAdded);
            }

            this.focus();

            if (this.nzAutoClearSearchValue) {
              this.clearInput();
            }
          }
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "onItemDelete",
        value: function onItemDelete(item) {
          var _this16 = this;

          /** @type {?} */
          var listOfSelectedValue = this.listOfValue.filter(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return !_this16.compareWith(v, item.nzValue);
          });
          this.updateListOfValue(listOfSelectedValue);
          this.clearInput();
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateListOfContainerItem",
        value: function updateListOfContainerItem() {
          var _this17 = this;

          /** @type {?} */
          var listOfContainerItem = this.listOfTagAndTemplateItem.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.nzHide;
          }).filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            if (!_this17.nzServerSearch && _this17.searchValue) {
              return _this17.nzFilterOption(_this17.searchValue, item);
            } else {
              return true;
            }
          });

          if (this.nzMode === 'tags' && this.searchValue) {
            /** @type {?} */
            var matchedItem = this.listOfTagAndTemplateItem.find(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.nzLabel === _this17.searchValue;
            });

            if (!matchedItem) {
              /** @type {?} */
              var tagItem = this.generateTagItem(this.searchValue);
              listOfContainerItem = [tagItem].concat(_toConsumableArray(listOfContainerItem));
              this.activatedValue = tagItem.nzValue;
            } else {
              this.activatedValue = matchedItem.nzValue;
            }
          }

          if (this.listOfValue.length !== 0 && listOfContainerItem.findIndex(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return _this17.compareWith(item.nzValue, _this17.activatedValue);
          }) === -1) {
            /** @type {?} */
            var activatedItem = listOfContainerItem.find(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return _this17.compareWith(item.nzValue, _this17.listOfValue[0]);
            }) || listOfContainerItem[0];
            this.activatedValue = activatedItem && activatedItem.nzValue || null;
          }
          /** @type {?} */


          var listOfGroupLabel = [];

          if (this.isReactiveDriven) {
            listOfGroupLabel = _toConsumableArray(new Set(this.nzOptions.filter(
            /**
            * @param {?} o
            * @return {?}
            */
            function (o) {
              return o.groupLabel;
            }).map(
            /**
            * @param {?} o
            * @return {?}
            */
            function (o) {
              return (
                /** @type {?} */
                o.groupLabel
              );
            })));
          } else {
            if (this.listOfNzOptionGroupComponent) {
              listOfGroupLabel = this.listOfNzOptionGroupComponent.map(
              /**
              * @param {?} o
              * @return {?}
              */
              function (o) {
                return o.nzLabel;
              });
            }
          }
          /** insert group item **/


          listOfGroupLabel.forEach(
          /**
          * @param {?} label
          * @return {?}
          */
          function (label) {
            /** @type {?} */
            var index = listOfContainerItem.findIndex(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return label === item.groupLabel;
            });

            if (index > -1) {
              /** @type {?} */
              var groupItem =
              /** @type {?} */
              {
                groupLabel: label,
                type: 'group',
                key: label
              };
              listOfContainerItem.splice(index, 0, groupItem);
            }
          });
          this.listOfContainerItem = _toConsumableArray(listOfContainerItem);
          this.updateCdkConnectedOverlayPositions();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearInput",
        value: function clearInput() {
          this.nzSelectTopControlComponent.clearInputValue();
        }
        /**
         * @param {?} listOfValue
         * @return {?}
         */

      }, {
        key: "updateListOfValue",
        value: function updateListOfValue(listOfValue) {
          /** @type {?} */
          var covertListToModel =
          /**
          * @param {?} list
          * @param {?} mode
          * @return {?}
          */
          function covertListToModel(list, mode) {
            if (mode === 'default') {
              if (list.length > 0) {
                return list[0];
              } else {
                return null;
              }
            } else {
              return list;
            }
          };
          /** @type {?} */


          var model = covertListToModel(listOfValue, this.nzMode);

          if (this.value !== model) {
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.value = model;
            this.onChange(this.value);
          }
        }
        /**
         * @param {?} listOfLabel
         * @return {?}
         */

      }, {
        key: "onTokenSeparate",
        value: function onTokenSeparate(listOfLabel) {
          var _this18 = this;

          /** @type {?} */
          var listOfMatchedValue = this.listOfTagAndTemplateItem.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return listOfLabel.findIndex(
            /**
            * @param {?} label
            * @return {?}
            */
            function (label) {
              return label === item.nzLabel;
            }) !== -1;
          }).map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.nzValue;
          }).filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return _this18.listOfValue.findIndex(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return _this18.compareWith(v, item);
            }) === -1;
          });

          if (this.nzMode === 'multiple') {
            this.updateListOfValue([].concat(_toConsumableArray(this.listOfValue), _toConsumableArray(listOfMatchedValue)));
          } else if (this.nzMode === 'tags') {
            /** @type {?} */
            var listOfUnMatchedLabel = listOfLabel.filter(
            /**
            * @param {?} label
            * @return {?}
            */
            function (label) {
              return _this18.listOfTagAndTemplateItem.findIndex(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item.nzLabel === label;
              }) === -1;
            });
            this.updateListOfValue([].concat(_toConsumableArray(this.listOfValue), _toConsumableArray(listOfMatchedValue), _toConsumableArray(listOfUnMatchedLabel)));
          }

          this.clearInput();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          var _this19 = this;

          if (this.nzDisabled) {
            return;
          }
          /** @type {?} */


          var listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.type === 'item';
          }).filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.nzDisabled;
          });
          /** @type {?} */

          var activatedIndex = listOfFilteredOptionNotDisabled.findIndex(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return _this19.compareWith(item.nzValue, _this19.activatedValue);
          });

          switch (e.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
              e.preventDefault();

              if (this.nzOpen) {
                /** @type {?} */
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
              e.preventDefault();

              if (this.nzOpen) {
                /** @type {?} */
                var nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
              } else {
                this.setOpenState(true);
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
              e.preventDefault();

              if (this.nzOpen) {
                if (this.activatedValue) {
                  this.onItemClick(this.activatedValue);
                }
              } else {
                this.setOpenState(true);
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
              if (!this.nzOpen) {
                this.setOpenState(true);
                e.preventDefault();
              }

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["TAB"]:
              this.setOpenState(false);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"]:
              this.setOpenState(false);
              break;

            default:
              if (!this.nzOpen) {
                this.setOpenState(true);
              }

          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setOpenState",
        value: function setOpenState(value) {
          if (this.nzOpen !== value) {
            this.nzOpen = value;
            this.nzOpenChange.emit(value);
            this.onOpenChange();
            this.cdr.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onOpenChange",
        value: function onOpenChange() {
          this.updateCdkConnectedOverlayStatus();
          this.clearInput();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onInputValueChange",
        value: function onInputValueChange(value) {
          this.searchValue = value;
          this.updateListOfContainerItem();
          this.nzOnSearch.emit(value);
          this.updateCdkConnectedOverlayPositions();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onClearSelection",
        value: function onClearSelection() {
          this.updateListOfValue([]);
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.nzSelectTopControlComponent.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this.nzSelectTopControlComponent.blur();
        }
        /**
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "onPositionChange",
        value: function onPositionChange(position) {
          this.dropDownPosition = position.connectionPair.originY;
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateCdkConnectedOverlayStatus",
        value: function updateCdkConnectedOverlayStatus() {
          if (this.platform.isBrowser && this.originElement.nativeElement) {
            this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateCdkConnectedOverlayPositions",
        value: function updateCdkConnectedOverlayPositions() {
          if (this.cdkConnectedOverlay.overlayRef) {
            this.cdkConnectedOverlay.overlayRef.updatePosition();
          }
        }
        /**
         * @param {?} modelValue
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(modelValue) {
          /** https://github.com/angular/angular/issues/14988 **/
          if (this.value !== modelValue) {
            this.value = modelValue;
            /** @type {?} */

            var covertModelToList =
            /**
            * @param {?} model
            * @param {?} mode
            * @return {?}
            */
            function covertModelToList(model, mode) {
              if (model === null || model === undefined) {
                return [];
              } else if (mode === 'default') {
                return [model];
              } else {
                return model;
              }
            };
            /** @type {?} */


            var listOfValue = covertModelToList(modelValue, this.nzMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          this.nzDisabled = disabled;

          if (disabled) {
            this.setOpenState(false);
          }

          this.cdr.markForCheck();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzOpen = changes.nzOpen,
              nzDisabled = changes.nzDisabled,
              nzOptions = changes.nzOptions;

          if (nzOpen) {
            this.onOpenChange();
          }

          if (nzDisabled && this.nzDisabled) {
            this.setOpenState(false);
          }

          if (nzOptions) {
            this.isReactiveDriven = true;
            /** @type {?} */

            var listOfOptions = this.nzOptions || [];
            /** @type {?} */

            var listOfTransformedItem = listOfOptions.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return {
                template: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] ? item.label : null,
                nzLabel: typeof item.label === 'string' ? item.label : null,
                nzValue: item.value,
                nzDisabled: item.disabled || false,
                nzHide: item.hide || false,
                nzCustomContent: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
                groupLabel: item.groupLabel || null,
                type: 'item',
                key: item.value
              };
            });
            this.listOfTemplateItem$.next(listOfTransformedItem);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.focusMonitor.monitor(this.elementRef, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} focusOrigin
          * @return {?}
          */
          function (focusOrigin) {
            if (!focusOrigin) {
              _this20.focused = false;

              _this20.cdr.markForCheck();

              _this20.nzBlur.emit();

              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this20.onTouched();
              });
            } else {
              _this20.focused = true;

              _this20.cdr.markForCheck();

              _this20.nzFocus.emit();
            }
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.listOfValue$, this.listOfTemplateItem$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                listOfSelectedValue = _ref2[0],
                listOfTemplateItem = _ref2[1];

            /** @type {?} */
            var listOfTagItem = listOfSelectedValue.filter(
            /**
            * @return {?}
            */
            function () {
              return _this20.nzMode === 'tags';
            }).filter(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return listOfTemplateItem.findIndex(
              /**
              * @param {?} o
              * @return {?}
              */
              function (o) {
                return _this20.compareWith(o.nzValue, value);
              }) === -1;
            }).map(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this20.listOfTopItem.find(
              /**
              * @param {?} o
              * @return {?}
              */
              function (o) {
                return _this20.compareWith(o.nzValue, value);
              }) || _this20.generateTagItem(value);
            });
            _this20.listOfTagAndTemplateItem = [].concat(_toConsumableArray(listOfTemplateItem), _toConsumableArray(listOfTagItem));
            _this20.listOfTopItem = _this20.listOfValue.map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return (
                /** @type {?} */
                [].concat(_toConsumableArray(_this20.listOfTagAndTemplateItem), _toConsumableArray(_this20.listOfTopItem)).find(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return _this20.compareWith(v, item.nzValue);
                })
              );
            }).filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !!item;
            });

            _this20.updateListOfContainerItem();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.updateCdkConnectedOverlayStatus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this21 = this;

          if (!this.isReactiveDriven) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"]).apply(void 0, [_this21.listOfNzOptionComponent.changes, _this21.listOfNzOptionGroupComponent.changes].concat(_toConsumableArray(_this21.listOfNzOptionComponent.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.changes;
              })), _toConsumableArray(_this21.listOfNzOptionGroupComponent.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.changes;
              })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var listOfOptionInterface = _this21.listOfNzOptionComponent.toArray().map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                var template = item.template,
                    nzLabel = item.nzLabel,
                    nzValue = item.nzValue,
                    nzDisabled = item.nzDisabled,
                    nzHide = item.nzHide,
                    nzCustomContent = item.nzCustomContent,
                    groupLabel = item.groupLabel;
                return {
                  template: template,
                  nzLabel: nzLabel,
                  nzValue: nzValue,
                  nzDisabled: nzDisabled,
                  nzHide: nzHide,
                  nzCustomContent: nzCustomContent,
                  groupLabel: groupLabel,
                  type: 'item',
                  key: nzValue
                };
              });

              _this21.listOfTemplateItem$.next(listOfOptionInterface);

              _this21.cdr.markForCheck();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzSelectComponent;
    }();

    NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) {
      return new (t || NzSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], 9));
    };

    NzSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectComponent,
      selectors: [["nz-select"]],
      contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionGroupComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionComponent = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionGroupComponent = _t);
        }
      },
      viewQuery: function NzSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzOptionGroupComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzOptionGroupComponentElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponentElement = _t.first);
        }
      },
      hostVars: 24,
      hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select", true)("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow && ctx.nzMode === "default")("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", ctx.nzShowSearch || ctx.nzMode !== "default")("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default");
        }
      },
      inputs: {
        nzSize: "nzSize",
        nzOptionHeightPx: "nzOptionHeightPx",
        nzOptionOverflowSize: "nzOptionOverflowSize",
        nzDropdownClassName: "nzDropdownClassName",
        nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
        nzDropdownStyle: "nzDropdownStyle",
        nzNotFoundContent: "nzNotFoundContent",
        nzPlaceHolder: "nzPlaceHolder",
        nzMaxTagCount: "nzMaxTagCount",
        nzDropdownRender: "nzDropdownRender",
        nzCustomTemplate: "nzCustomTemplate",
        nzSuffixIcon: "nzSuffixIcon",
        nzClearIcon: "nzClearIcon",
        nzRemoveIcon: "nzRemoveIcon",
        nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
        nzShowArrow: "nzShowArrow",
        nzTokenSeparators: "nzTokenSeparators",
        nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
        nzMaxMultipleCount: "nzMaxMultipleCount",
        nzMode: "nzMode",
        nzFilterOption: "nzFilterOption",
        compareWith: "compareWith",
        nzAllowClear: "nzAllowClear",
        nzBorderless: "nzBorderless",
        nzShowSearch: "nzShowSearch",
        nzLoading: "nzLoading",
        nzAutoFocus: "nzAutoFocus",
        nzAutoClearSearchValue: "nzAutoClearSearchValue",
        nzServerSearch: "nzServerSearch",
        nzDisabled: "nzDisabled",
        nzOpen: "nzOpen",
        nzOptions: "nzOptions"
      },
      outputs: {
        nzOnSearch: "nzOnSearch",
        nzScrollToBottom: "nzScrollToBottom",
        nzOpenChange: "nzOpenChange",
        nzBlur: "nzBlur",
        nzFocus: "nzFocus"
      },
      exportAs: ["nzSelect"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzSelectComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 23,
      consts: [["cdkOverlayOrigin", "", 3, "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "animationEnd", "deleteItem", "keydown", "openChange"], ["origin", "cdkOverlayOrigin"], [3, "clearIcon", "clear", 4, "ngIf"], [3, "loading", "search", "suffixIcon", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [3, "clearIcon", "clear"], [3, "loading", "search", "suffixIcon"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]],
      template: function NzSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-top-control", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
            return ctx.onInputValueChange($event);
          })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
            return ctx.onTokenSeparate($event);
          })("animationEnd", function NzSelectComponent_Template_nz_select_top_control_animationEnd_0_listener() {
            return ctx.updateCdkConnectedOverlayPositions();
          })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
            return ctx.onItemDelete($event);
          })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
            return ctx.onKeyDown($event);
          })("openChange", function NzSelectComponent_Template_nz_select_top_control_openChange_0_listener($event) {
            return ctx.setOpenState($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectComponent_nz_select_clear_2_Template, 1, 1, "nz-select-clear", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectComponent_nz_select_arrow_3_Template, 1, 3, "nz-select-arrow", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSelectComponent_ng_template_4_Template, 1, 19, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function NzSelectComponent_Template_ng_template_backdropClick_4_listener() {
            return ctx.setOpenState(false);
          })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
            return ctx.setOpenState(false);
          })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
            return ctx.onPositionChange($event);
          });
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow && ctx.nzMode === "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen);
        }
      },
      directives: function directives() {
        return [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], NzSelectTopControlComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzConnectedOverlayDirective"], NzSelectClearComponent, NzSelectArrowComponent, NzOptionContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"]];
      },
      encapsulation: 2,
      data: {
        animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    NzSelectComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
      }, {
        type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NzSelectComponent.propDecorators = {
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzOptionHeightPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzOptionOverflowSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDropdownClassName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDropdownMatchSelectWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDropdownStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzNotFoundContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzPlaceHolder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzMaxTagCount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDropdownRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzCustomTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzSuffixIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzClearIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzRemoveIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzMenuItemSelectedIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzShowArrow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzTokenSeparators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzMaxTagPlaceholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzMaxMultipleCount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzFilterOption: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzAllowClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzBorderless: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzShowSearch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzAutoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzAutoClearSearchValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzServerSearch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzOnSearch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzScrollToBottom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzOpenChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      originElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], {
          "static": true,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }],
      cdkConnectedOverlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], {
          "static": true
        }]
      }],
      nzSelectTopControlComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [NzSelectTopControlComponent, {
          "static": true
        }]
      }],
      listOfNzOptionComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NzOptionComponent, {
          descendants: true
        }]
      }],
      listOfNzOptionGroupComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NzOptionGroupComponent, {
          descendants: true
        }]
      }],
      nzOptionGroupComponentElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [NzOptionGroupComponent, {
          "static": true,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }],
      nzSelectTopControlComponentElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [NzSelectTopControlComponent, {
          "static": true,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzAllowClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzBorderless", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzShowSearch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzAutoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzServerSearch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzOpen", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-option-group',
          exportAs: 'nzOptionGroup',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [];
      }, {
        nzLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-option-container',
          exportAs: 'nzOptionContainer',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          preserveWhitespaces: false,
          template: "\n    <div>\n      <div *ngIf=\"listOfContainerItem.length === 0\" class=\"ant-select-item-empty\">\n        <nz-embed-empty nzComponentName=\"select\" [specificContent]=\"notFoundContent!\"></nz-embed-empty>\n      </div>\n      <cdk-virtual-scroll-viewport\n        [class.full-width]=\"!matchWidth\"\n        [itemSize]=\"itemSize\"\n        [maxBufferPx]=\"itemSize * maxItemLength\"\n        [minBufferPx]=\"itemSize\"\n        (scrolledIndexChange)=\"onScrolledIndexChange($event)\"\n        [style.height.px]=\"listOfContainerItem.length * itemSize\"\n        [style.max-height.px]=\"itemSize * maxItemLength\"\n      >\n        <ng-template\n          cdkVirtualFor\n          [cdkVirtualForOf]=\"listOfContainerItem\"\n          [cdkVirtualForTrackBy]=\"trackValue\"\n          [cdkVirtualForTemplateCacheSize]=\"0\"\n          let-item\n        >\n          <ng-container [ngSwitch]=\"item.type\">\n            <nz-option-item-group *ngSwitchCase=\"'group'\" [nzLabel]=\"item.groupLabel\"></nz-option-item-group>\n            <nz-option-item\n              *ngSwitchCase=\"'item'\"\n              [icon]=\"menuItemSelectedIcon\"\n              [customContent]=\"item.nzCustomContent\"\n              [template]=\"item.template\"\n              [grouped]=\"!!item.groupLabel\"\n              [disabled]=\"item.nzDisabled\"\n              [showState]=\"mode === 'tags' || mode === 'multiple'\"\n              [label]=\"item.nzLabel\"\n              [compareWith]=\"compareWith\"\n              [activatedValue]=\"activatedValue\"\n              [listOfSelectedValue]=\"listOfSelectedValue\"\n              [value]=\"item.nzValue\"\n              (itemHover)=\"onItemHover($event)\"\n              (itemClick)=\"onItemClick($event)\"\n            ></nz-option-item>\n          </ng-container>\n        </ng-template>\n      </cdk-virtual-scroll-viewport>\n      <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\n    </div>\n  ",
          host: {
            '[class.ant-select-dropdown]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        notFoundContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        menuItemSelectedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activatedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfSelectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matchWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxItemLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfContainerItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollToBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cdkVirtualScrollViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-option',
          exportAs: 'nzOption',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: NzOptionGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        nzLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCustomContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select-search',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <input\n      #inputElement\n      autocomplete=\"off\"\n      class=\"ant-select-selection-search-input\"\n      [ngModel]=\"value\"\n      [attr.autofocus]=\"autofocus ? 'autofocus' : null\"\n      [disabled]=\"disabled\"\n      [style.opacity]=\"showInput ? null : 0\"\n      (ngModelChange)=\"onValueChange($event)\"\n      (compositionstart)=\"setCompositionState(true)\"\n      (compositionend)=\"setCompositionState(false)\"\n    />\n    <span #mirrorElement *ngIf=\"mirrorSync\" class=\"ant-select-selection-search-mirror\"></span>\n  ",
          host: {
            '[class.ant-select-selection-search]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mirrorSync: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isComposingChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputElement', {
            "static": true
          }]
        }],
        mirrorElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mirrorElement', {
            "static": false
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectTopControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select-top-control',
          exportAs: 'nzSelectTopControl',
          preserveWhitespaces: false,
          animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomMotion"]],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <!--single mode-->\n    <ng-container [ngSwitch]=\"mode\">\n      <ng-container *ngSwitchCase=\"'default'\">\n        <nz-select-item\n          *ngIf=\"isShowSingleLabel\"\n          [deletable]=\"false\"\n          [disabled]=\"false\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"listOfTopItem[0].nzLabel\"\n          [contentTemplateOutlet]=\"customTemplate\"\n          [contentTemplateOutletContext]=\"listOfTopItem[0]\"\n        ></nz-select-item>\n        <nz-select-search\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [showInput]=\"open && showSearch\"\n          [mirrorSync]=\"false\"\n          [autofocus]=\"autofocus\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <!--multiple or tags mode-->\n        <nz-select-item\n          *ngFor=\"let item of listOfSlicedItem; trackBy: trackValue\"\n          [@zoomMotion]\n          [@.disabled]=\"noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"item.nzLabel\"\n          [disabled]=\"item.nzDisabled || disabled\"\n          [contentTemplateOutlet]=\"item.contentTemplateOutlet\"\n          [deletable]=\"true\"\n          [contentTemplateOutletContext]=\"item.contentTemplateOutletContext\"\n          (@zoomMotion.done)=\"onAnimationEnd()\"\n          (delete)=\"onDeleteItem(item.contentTemplateOutletContext)\"\n        >\n        </nz-select-item>\n        <nz-select-search\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [autofocus]=\"autofocus\"\n          [showInput]=\"true\"\n          [mirrorSync]=\"true\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n      </ng-container>\n    </ng-container>\n    <nz-select-placeholder *ngIf=\"isShowPlaceholder\" [placeholder]=\"placeHolder\"></nz-select-placeholder>\n  ",
          host: {
            '[class.ant-select-selector]': 'true',
            '(click)': 'onHostClick()',
            '(keydown)': 'onHostKeydown($event)'
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        showSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTagCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTagPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfTopItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tokenSeparators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tokenize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        animationEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        openChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelectSearchComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzSelectSearchComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select',
          exportAs: 'nzSelect',
          preserveWhitespaces: false,
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzSelectComponent;
            }),
            multi: true
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]],
          template: "\n    <nz-select-top-control\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      [open]=\"nzOpen\"\n      [disabled]=\"nzDisabled\"\n      [mode]=\"nzMode\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [maxTagPlaceholder]=\"nzMaxTagPlaceholder\"\n      [removeIcon]=\"nzRemoveIcon\"\n      [placeHolder]=\"nzPlaceHolder\"\n      [maxTagCount]=\"nzMaxTagCount\"\n      [customTemplate]=\"nzCustomTemplate\"\n      [tokenSeparators]=\"nzTokenSeparators\"\n      [showSearch]=\"nzShowSearch\"\n      [autofocus]=\"nzAutoFocus\"\n      [listOfTopItem]=\"listOfTopItem\"\n      (inputValueChange)=\"onInputValueChange($event)\"\n      (tokenize)=\"onTokenSeparate($event)\"\n      (animationEnd)=\"updateCdkConnectedOverlayPositions()\"\n      (deleteItem)=\"onItemDelete($event)\"\n      (keydown)=\"onKeyDown($event)\"\n      (openChange)=\"setOpenState($event)\"\n    ></nz-select-top-control>\n    <nz-select-clear\n      *ngIf=\"nzAllowClear && !nzDisabled && listOfValue.length\"\n      [clearIcon]=\"nzClearIcon\"\n      (clear)=\"onClearSelection()\"\n    ></nz-select-clear>\n    <nz-select-arrow\n      *ngIf=\"nzShowArrow && nzMode === 'default'\"\n      [loading]=\"nzLoading\"\n      [search]=\"nzOpen && nzShowSearch\"\n      [suffixIcon]=\"nzSuffixIcon\"\n    ></nz-select-arrow>\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"true\"\n      [cdkConnectedOverlayMinWidth]=\"$any(nzDropdownMatchSelectWidth ? null : triggerWidth)\"\n      [cdkConnectedOverlayWidth]=\"$any(nzDropdownMatchSelectWidth ? triggerWidth : null)\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-select-dropdown'\"\n      [cdkConnectedOverlayPanelClass]=\"nzDropdownClassName!\"\n      (backdropClick)=\"setOpenState(false)\"\n      (detach)=\"setOpenState(false)\"\n      (positionChange)=\"onPositionChange($event)\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n    >\n      <nz-option-container\n        [ngStyle]=\"nzDropdownStyle\"\n        [itemSize]=\"nzOptionHeightPx\"\n        [maxItemLength]=\"nzOptionOverflowSize\"\n        [matchWidth]=\"nzDropdownMatchSelectWidth\"\n        [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n        [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n        [@slideMotion]=\"'enter'\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [listOfContainerItem]=\"listOfContainerItem\"\n        [menuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n        [notFoundContent]=\"nzNotFoundContent\"\n        [activatedValue]=\"activatedValue\"\n        [listOfSelectedValue]=\"listOfValue\"\n        [dropdownRender]=\"nzDropdownRender\"\n        [compareWith]=\"compareWith\"\n        [mode]=\"nzMode\"\n        (keydown)=\"onKeyDown($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        (scrollToBottom)=\"nzScrollToBottom.emit()\"\n      ></nz-option-container>\n    </ng-template>\n  ",
          host: {
            '[class.ant-select]': 'true',
            '[class.ant-select-lg]': 'nzSize === "large"',
            '[class.ant-select-sm]': 'nzSize === "small"',
            '[class.ant-select-show-arrow]': "nzShowArrow && nzMode === 'default'",
            '[class.ant-select-disabled]': 'nzDisabled',
            '[class.ant-select-show-search]': "nzShowSearch || nzMode !== 'default'",
            '[class.ant-select-allow-clear]': 'nzAllowClear',
            '[class.ant-select-borderless]': 'nzBorderless',
            '[class.ant-select-open]': 'nzOpen',
            '[class.ant-select-focused]': 'nzOpen || focused',
            '[class.ant-select-single]': "nzMode === 'default'",
            '[class.ant-select-multiple]': "nzMode !== 'default'"
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }, {
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOptionHeightPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOptionOverflowSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownMatchSelectWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzNotFoundContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMaxTagCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCustomTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSuffixIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzClearIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzRemoveIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMenuItemSelectedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzShowArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTokenSeparators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMaxTagPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMaxMultipleCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzFilterOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAllowClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzBorderless: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzShowSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAutoClearSearchValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzServerSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOnSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzScrollToBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzOpenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        originElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        cdkConnectedOverlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], {
            "static": true
          }]
        }],
        nzSelectTopControlComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzSelectTopControlComponent, {
            "static": true
          }]
        }],
        listOfNzOptionComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzOptionComponent, {
            descendants: true
          }]
        }],
        listOfNzOptionGroupComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzOptionGroupComponent, {
            descendants: true
          }]
        }],
        nzOptionGroupComponentElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzOptionGroupComponent, {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        nzSelectTopControlComponentElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzSelectTopControlComponent, {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: option-item-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzOptionItemGroupComponent = function NzOptionItemGroupComponent() {
      _classCallCheck(this, NzOptionItemGroupComponent);

      this.nzLabel = null;
    };

    NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) {
      return new (t || NzOptionItemGroupComponent)();
    };

    NzOptionItemGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzOptionItemGroupComponent,
      selectors: [["nz-option-item-group"]],
      hostVars: 4,
      hostBindings: function NzOptionItemGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item", true)("ant-select-item-group", true);
        }
      },
      inputs: {
        nzLabel: "nzLabel"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "nzStringTemplateOutlet"]],
      template: function NzOptionItemGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
        }
      },
      directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzOptionItemGroupComponent.propDecorators = {
      nzLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-option-item-group',
          template: " <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{ nzLabel }}</ng-container> ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          host: {
            '[class.ant-select-item]': 'true',
            '[class.ant-select-item-group]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        nzLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: option-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzOptionItemComponent = /*#__PURE__*/function () {
      function NzOptionItemComponent() {
        _classCallCheck(this, NzOptionItemComponent);

        this.selected = false;
        this.activated = false;
        this.grouped = false;
        this.customContent = false;
        this.template = null;
        this.disabled = false;
        this.showState = false;
        this.label = null;
        this.value = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.icon = null;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(NzOptionItemComponent, [{
        key: "onHostMouseEnter",
        value: function onHostMouseEnter() {
          if (!this.disabled) {
            this.itemHover.next(this.value);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onHostClick",
        value: function onHostClick() {
          if (!this.disabled) {
            this.itemClick.next(this.value);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this22 = this;

          var value = changes.value,
              activatedValue = changes.activatedValue,
              listOfSelectedValue = changes.listOfSelectedValue;

          if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return _this22.compareWith(v, _this22.value);
            });
          }

          if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
          }
        }
      }]);

      return NzOptionItemComponent;
    }();

    NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) {
      return new (t || NzOptionItemComponent)();
    };

    NzOptionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzOptionItemComponent,
      selectors: [["nz-option-item"]],
      hostVars: 12,
      hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzOptionItemComponent_mouseenter_HostBindingHandler() {
            return ctx.onHostMouseEnter();
          })("click", function NzOptionItemComponent_click_HostBindingHandler() {
            return ctx.onHostClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item", true)("ant-select-item-option", true)("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
        }
      },
      inputs: {
        grouped: "grouped",
        customContent: "customContent",
        template: "template",
        disabled: "disabled",
        showState: "showState",
        label: "label",
        value: "value",
        activatedValue: "activatedValue",
        listOfSelectedValue: "listOfSelectedValue",
        icon: "icon",
        compareWith: "compareWith"
      },
      outputs: {
        itemClick: "itemClick",
        itemHover: "itemHover"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "ant-select-item-option-content"], [4, "ngIf"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]],
      template: function NzOptionItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionItemComponent_div_3_Template, 2, 2, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState && ctx.selected);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzOptionItemComponent.propDecorators = {
      grouped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showState: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activatedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listOfSelectedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      itemClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      itemHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-option-item',
          template: "\n    <div class=\"ant-select-item-option-content\">\n      <ng-container *ngIf=\"!customContent\">{{ label }}</ng-container>\n      <ng-container *ngIf=\"customContent\">\n        <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n      </ng-container>\n    </div>\n    <div *ngIf=\"showState && selected\" class=\"ant-select-item-option-state\" style=\"user-select: none\" unselectable=\"on\">\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!icon; else icon\"></i>\n    </div>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          host: {
            '[class.ant-select-item]': 'true',
            '[class.ant-select-item-option]': 'true',
            '[class.ant-select-item-option-grouped]': 'grouped',
            '[class.ant-select-item-option-selected]': 'selected && !disabled',
            '[class.ant-select-item-option-disabled]': 'disabled',
            '[class.ant-select-item-option-active]': 'activated && !disabled',
            '(mouseenter)': 'onHostMouseEnter()',
            '(click)': 'onHostClick()'
          }
        }]
      }], function () {
        return [];
      }, {
        grouped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activatedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfSelectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select-arrow.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectArrowComponent = function NzSelectArrowComponent() {
      _classCallCheck(this, NzSelectArrowComponent);

      this.loading = false;
      this.search = false;
      this.suffixIcon = null;
    };

    NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) {
      return new (t || NzSelectArrowComponent)();
    };

    NzSelectArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectArrowComponent,
      selectors: [["nz-select-arrow"]],
      hostVars: 4,
      hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-arrow", true)("ant-select-arrow-loading", ctx.loading);
        }
      },
      inputs: {
        loading: "loading",
        search: "search",
        suffixIcon: "suffixIcon"
      },
      decls: 3,
      vars: 2,
      consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
      template: function NzSelectArrowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzSelectArrowComponent.propDecorators = {
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      search: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      suffixIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectArrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select-arrow',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n    <ng-template #defaultArrow>\n      <ng-container *ngIf=\"!suffixIcon; else suffixTemplate\">\n        <i nz-icon nzType=\"down\" *ngIf=\"!search\"></i>\n        <i nz-icon nzType=\"search\" *ngIf=\"search\"></i>\n      </ng-container>\n      <ng-template #suffixTemplate>\n        <ng-container *nzStringTemplateOutlet=\"suffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </ng-template>\n    </ng-template>\n  ",
          host: {
            '[class.ant-select-arrow]': 'true',
            '[class.ant-select-arrow-loading]': 'loading'
          }
        }]
      }], function () {
        return [];
      }, {
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        suffixIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select-clear.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectClearComponent = /*#__PURE__*/function () {
      function NzSelectClearComponent() {
        _classCallCheck(this, NzSelectClearComponent);

        this.clearIcon = null;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} e
       * @return {?}
       */


      _createClass(NzSelectClearComponent, [{
        key: "onClick",
        value: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          this.clear.emit(e);
        }
      }]);

      return NzSelectClearComponent;
    }();

    NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) {
      return new (t || NzSelectClearComponent)();
    };

    NzSelectClearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectClearComponent,
      selectors: [["nz-select-clear"]],
      hostVars: 2,
      hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-clear", true);
        }
      },
      inputs: {
        clearIcon: "clearIcon"
      },
      outputs: {
        clear: "clear"
      },
      decls: 1,
      vars: 2,
      consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
      template: function NzSelectClearComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectClearComponent_i_0_Template, 1, 0, "i", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzSelectClearComponent.propDecorators = {
      clearIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectClearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select-clear',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: " <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i> ",
          host: {
            '(click)': 'onClick($event)',
            '[class.ant-select-clear]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        clearIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectItemComponent = /*#__PURE__*/function () {
      function NzSelectItemComponent() {
        _classCallCheck(this, NzSelectItemComponent);

        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} e
       * @return {?}
       */


      _createClass(NzSelectItemComponent, [{
        key: "onDelete",
        value: function onDelete(e) {
          e.preventDefault();
          e.stopPropagation();

          if (!this.disabled) {
            this["delete"].next(e);
          }
        }
      }]);

      return NzSelectItemComponent;
    }();

    NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) {
      return new (t || NzSelectItemComponent)();
    };

    NzSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectItemComponent,
      selectors: [["nz-select-item"]],
      hostVars: 5,
      hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-item", true)("ant-select-selection-item-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled",
        label: "label",
        deletable: "deletable",
        removeIcon: "removeIcon",
        contentTemplateOutletContext: "contentTemplateOutletContext",
        contentTemplateOutlet: "contentTemplateOutlet"
      },
      outputs: {
        "delete": "delete"
      },
      decls: 2,
      vars: 5,
      consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]],
      template: function NzSelectItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.contentTemplateOutletContext));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletable && !ctx.disabled);
        }
      },
      directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzSelectItemComponent.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      deletable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      removeIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentTemplateOutletContext: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentTemplateOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "delete": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select-item',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-container *nzStringTemplateOutlet=\"contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }\">\n      <div class=\"ant-select-selection-item-content\" *ngIf=\"deletable; else labelTemplate\">{{ label }}</div>\n      <ng-template #labelTemplate>{{ label }}</ng-template>\n    </ng-container>\n    <span *ngIf=\"deletable && !disabled\" class=\"ant-select-selection-item-remove\" (click)=\"onDelete($event)\">\n      <i nz-icon nzType=\"close\" *ngIf=\"!removeIcon; else removeIcon\"></i>\n    </span>\n  ",
          host: {
            '[attr.title]': 'label',
            '[class.ant-select-selection-item]': 'true',
            '[class.ant-select-selection-item-disabled]': 'disabled'
          }
        }]
      }], function () {
        return [];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deletable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentTemplateOutletContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentTemplateOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select-placeholder.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectPlaceholderComponent = function NzSelectPlaceholderComponent() {
      _classCallCheck(this, NzSelectPlaceholderComponent);

      this.placeholder = null;
    };

    NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) {
      return new (t || NzSelectPlaceholderComponent)();
    };

    NzSelectPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzSelectPlaceholderComponent,
      selectors: [["nz-select-placeholder"]],
      hostVars: 2,
      hostBindings: function NzSelectPlaceholderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-placeholder", true);
        }
      },
      inputs: {
        placeholder: "placeholder"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "nzStringTemplateOutlet"]],
      template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.placeholder);
        }
      },
      directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzSelectPlaceholderComponent.propDecorators = {
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-select-placeholder',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-container *nzStringTemplateOutlet=\"placeholder\">\n      {{ placeholder }}\n    </ng-container>\n  ",
          host: {
            '[class.ant-select-selection-placeholder]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: select.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzSelectModule = function NzSelectModule() {
      _classCallCheck(this, NzSelectModule);
    };

    NzSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NzSelectModule
    });
    NzSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NzSelectModule_Factory(t) {
        return new (t || NzSelectModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSelectModule, {
        declarations: function declarations() {
          return [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]];
        },
        exports: function exports() {
          return [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]],
          declarations: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
          exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: select.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * @record
     */


    function NzSelectItemInterface() {}

    if (false) {}
    /**
     * @record
     */


    function NzSelectOptionInterface() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-select.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-select.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js ***!
    \*********************************************************************************/

  /*! exports provided: NzCellAlignDirective, NzCellBreakWordDirective, NzCellEllipsisDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzRowExpandButtonDirective, NzRowIndentDirective, NzTableCellDirective, NzTableComponent, NzTableContentComponent, NzTableDataService, NzTableFilterComponent, NzTableFixedRowComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTableModule, NzTableSelectionComponent, NzTableSortersComponent, NzTableStyleService, NzTableTitleFooterComponent, NzTableVirtualScrollDirective, NzTbodyComponent, NzTdAddOnComponent, NzThAddOnComponent, NzThMeasureDirective, NzThSelectionComponent, NzTheadComponent, NzTrDirective, NzTrExpandDirective, NzTrMeasureComponent */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdTableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCellAlignDirective", function () {
      return NzCellAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCellBreakWordDirective", function () {
      return NzCellBreakWordDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCellEllipsisDirective", function () {
      return NzCellEllipsisDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCellFixedDirective", function () {
      return NzCellFixedDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzFilterTriggerComponent", function () {
      return NzFilterTriggerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRowExpandButtonDirective", function () {
      return NzRowExpandButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRowIndentDirective", function () {
      return NzRowIndentDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableCellDirective", function () {
      return NzTableCellDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableComponent", function () {
      return NzTableComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableContentComponent", function () {
      return NzTableContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableDataService", function () {
      return NzTableDataService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableFilterComponent", function () {
      return NzTableFilterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableFixedRowComponent", function () {
      return NzTableFixedRowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableInnerDefaultComponent", function () {
      return NzTableInnerDefaultComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableInnerScrollComponent", function () {
      return NzTableInnerScrollComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableModule", function () {
      return NzTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableSelectionComponent", function () {
      return NzTableSelectionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableSortersComponent", function () {
      return NzTableSortersComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableStyleService", function () {
      return NzTableStyleService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableTitleFooterComponent", function () {
      return NzTableTitleFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTableVirtualScrollDirective", function () {
      return NzTableVirtualScrollDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTbodyComponent", function () {
      return NzTbodyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTdAddOnComponent", function () {
      return NzTdAddOnComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzThAddOnComponent", function () {
      return NzThAddOnComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzThMeasureDirective", function () {
      return NzThMeasureDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzThSelectionComponent", function () {
      return NzThSelectionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTheadComponent", function () {
      return NzTheadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTrDirective", function () {
      return NzTrDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTrExpandDirective", function () {
      return NzTrExpandDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTrMeasureComponent", function () {
      return NzTrMeasureComponent;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/checkbox */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /* harmony import */


    var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/resize-observers */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js");
    /* harmony import */


    var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/dropdown */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js");
    /* harmony import */


    var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/empty */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/pagination */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js");
    /* harmony import */


    var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-zorro-antd/radio */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
    /* harmony import */


    var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-zorro-antd/spin */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-zorro-antd/core/logger */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/addon/filter-trigger.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["*"];

    function NzTableFilterComponent_ng_template_1_Template(rf, ctx) {}

    function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

          var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r7.check(f_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", f_r4.checked);
      }
    }

    function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

          var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r11.check(f_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", f_r4.checked);
      }
    }

    function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

          var f_r4 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r15.check(f_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSelected", f_r4.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.filterMultiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.filterMultiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](f_r4.text);
      }
    }

    function NzTableFilterComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-filter-trigger", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r17.onVisibleChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r19.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r20.confirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", _r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.listOfParsedFilter)("ngForTrackBy", ctx_r1.trackByValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.isChecked);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.locale.filterReset);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.locale.filterConfirm);
      }
    }

    function NzTableSelectionComponent_label_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r2.onCheckedChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-selection-select-all-custom", ctx_r0.showRowSelection);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.checked)("nzDisabled", ctx_r0.disabled)("nzIndeterminate", ctx_r0.indeterminate);
      }
    }

    function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() {
          var selection_r6 = ctx.$implicit;
          return selection_r6.onSelect();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var selection_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selection_r6.text, " ");
      }
    }

    function NzTableSelectionComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzTableSelectionComponent_div_1_li_6_Template, 2, 1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSelections);
      }
    }

    function NzTableSortersComponent_ng_template_1_Template(rf, ctx) {}

    function NzTableSortersComponent_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 5);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r1.sortOrder == "ascend");
      }
    }

    function NzTableSortersComponent_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 6);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r2.sortOrder == "descend");
      }
    }

    var _c1 = ["nzChecked", ""];

    function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-row-indent", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("expandChange", function NzTdAddOnComponent_ng_container_0_Template_button_expandChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r2.onExpandChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("indentSize", ctx_r0.nzIndentSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
      }
    }

    function NzTdAddOnComponent_label_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r4.onCheckedChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
      }
    }

    var _c2 = ["nzSortKey", ""];

    function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table-filter", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r9.onFilterValueChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentTemplate", _r1)("extraTemplate", _r3)("customFilter", ctx_r0.nzCustomFilter)("filterMultiple", ctx_r0.nzFilterMultiple)("listOfFilter", ctx_r0.nzFilters);
      }
    }

    function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) {}

    function NzThAddOnComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzShowSort ? _r5 : _r7);
      }
    }

    function NzThAddOnComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
      }
    }

    function NzThAddOnComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-sorters", 7);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sortOrder", ctx_r6.sortOrder)("sortDirections", ctx_r6.sortDirections)("contentTemplate", _r7);
      }
    }

    function NzThAddOnComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 2);
      }
    }

    var _c3 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
    var _c4 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
    var _c5 = ["nzSelections", ""];
    var _c6 = ["nz-table-content", ""];

    function NzTableContentComponent_col_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "col");
      }

      if (rf & 2) {
        var width_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", width_r3)("min-width", width_r3);
      }
    }

    function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) {}

    function NzTableContentComponent_thead_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.theadTemplate);
      }
    }

    function NzTableContentComponent_ng_template_2_Template(rf, ctx) {}

    var _c7 = ["tdElement"];
    var _c8 = ["nz-table-fixed-row", ""];

    function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) {}

    function NzTableFixedRowComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r1.hostWidth$), "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2);
      }
    }

    function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    }

    var _c9 = ["tableHeaderElement"];
    var _c10 = ["tableBodyElement"];

    function NzTableInnerScrollComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r0.headerStyleMap);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);
      }
    }

    function NzTableInnerScrollComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.bodyStyleMap);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollX", ctx_r1.scrollX)("listOfColWidth", ctx_r1.listOfColWidth)("theadTemplate", ctx_r1.scrollY ? null : ctx_r1.theadTemplate)("contentTemplate", ctx_r1.contentTemplate);
      }
    }

    function NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_ng_template_1_Template(rf, ctx) {}

    var _c11 = function _c11(a0, a1) {
      return {
        $implicit: a0,
        index: a1
      };
    };

    function NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;
        var i_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.virtualTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c11, item_r7, i_r8));
      }
    }

    function NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 10, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_Template, 2, 5, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx_r2.data.length ? ctx_r2.scrollY : ctx_r2.noDateVirtualHeight);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemSize", ctx_r2.virtualItemSize)("maxBufferPx", ctx_r2.virtualMaxBufferPx)("minBufferPx", ctx_r2.virtualMinBufferPx);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollX", ctx_r2.scrollX)("listOfColWidth", ctx_r2.listOfColWidth);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkVirtualForOf", ctx_r2.data)("cdkVirtualForTrackBy", ctx_r2.virtualForTrackBy);
      }
    }

    function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) {}

    function NzTableComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r8);
      }
    }

    function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-title-footer", 11);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r2.nzTitle);
      }
    }

    function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-inner-scroll", 12);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.data)("scrollX", ctx_r3.scrollX)("scrollY", ctx_r3.scrollY)("contentTemplate", _r10)("listOfColWidth", ctx_r3.listOfAutoColWidth)("theadTemplate", ctx_r3.theadTemplate)("verticalScrollBarWidth", ctx_r3.verticalScrollBarWidth)("virtualTemplate", ctx_r3.nzVirtualScrollDirective ? ctx_r3.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r3.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r3.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r3.nzVirtualMinBufferPx)("tableMainElement", _r1)("virtualForTrackBy", ctx_r3.nzVirtualForTrackBy);
      }
    }

    function NzTableComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-inner-default", 13);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableLayout", ctx_r5.nzTableLayout)("listOfColWidth", ctx_r5.listOfManualColWidth)("theadTemplate", ctx_r5.theadTemplate)("contentTemplate", _r10);
      }
    }

    function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-title-footer", 14);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("footer", ctx_r6.nzFooter);
      }
    }

    function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) {}

    function NzTableComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r8);
      }
    }

    function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-pagination", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r15.onPageSizeChange($event);
        })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r17.onPageIndexChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzShowSizeChanger", ctx_r14.nzShowSizeChanger)("nzPageSizeOptions", ctx_r14.nzPageSizeOptions)("nzItemRender", ctx_r14.nzItemRender)("nzShowQuickJumper", ctx_r14.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r14.nzHideOnSinglePage)("nzShowTotal", ctx_r14.nzShowTotal)("nzSize", ctx_r14.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r14.nzPageSize)("nzTotal", ctx_r14.nzTotal)("nzSimple", ctx_r14.nzSimple)("nzPageIndex", ctx_r14.nzPageIndex);
      }
    }

    function NzTableComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 11, "nz-pagination", 15);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.nzShowPagination && ctx_r9.data.length);
      }
    }

    function NzTableComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    }

    function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r4.onListOfAutoWidthChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var listOfMeasureColumn_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listOfMeasureColumn", listOfMeasureColumn_r2);
      }
    }

    function NzTbodyComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var listOfMeasureColumn_r2 = ctx.ngIf;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isInsideTable && listOfMeasureColumn_r2.length);
      }
    }

    function NzTbodyComponent_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-embed-empty", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("specificContent", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.noResult$));
      }
    }

    var _c12 = ["contentTemplate"];

    function NzTheadComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    }

    function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

    function NzTheadComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
      }
    }

    function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
      }
    }

    function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.footer);
      }
    }

    var _c13 = ["nz-table-measure-row", ""];

    function NzTrMeasureComponent_td_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "td", 1, 2);
      }
    }

    var NzFilterTriggerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdr
       */
      function NzFilterTriggerComponent(cdr) {
        _classCallCheck(this, NzFilterTriggerComponent);

        this.cdr = cdr;
        this.nzActive = false;
        this.nzVisible = false;
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }
      /**
       * @param {?} visible
       * @return {?}
       */


      _createClass(NzFilterTriggerComponent, [{
        key: "onVisibleChange",
        value: function onVisibleChange(visible) {
          this.nzVisible = visible;
          this.nzVisibleChange.next(visible);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onFilterClick",
        value: function onFilterClick($event) {
          $event.stopPropagation();
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this.nzVisible = false;
          this.cdr.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          this.nzVisible = true;
          this.cdr.markForCheck();
        }
      }]);

      return NzFilterTriggerComponent;
    }();

    NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) {
      return new (t || NzFilterTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    NzFilterTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzFilterTriggerComponent,
      selectors: [["nz-filter-trigger"]],
      hostVars: 4,
      hostBindings: function NzFilterTriggerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-filter-trigger-container", true)("ant-table-filter-trigger-container-open", ctx.nzVisible);
        }
      },
      inputs: {
        nzActive: "nzActive",
        nzVisible: "nzVisible",
        nzDropdownMenu: "nzDropdownMenu"
      },
      outputs: {
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzFilterTrigger"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 7,
      consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzClickHide", "nzDropdownMenu", "nzVisible", "nzVisibleChange", "click"]],
      template: function NzFilterTriggerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) {
            return ctx.onVisibleChange($event);
          })("click", function NzFilterTriggerComponent_Template_span_click_0_listener($event) {
            return ctx.onFilterClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
        }
      },
      directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzFilterTriggerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    NzFilterTriggerComponent.propDecorators = {
      nzActive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzDropdownMenu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzVisibleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/addon/filter.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NzThItemInterface() {}

    if (false) {}

    var NzTableFilterComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdr
       * @param {?} i18n
       */
      function NzTableFilterComponent(cdr, i18n) {
        _classCallCheck(this, NzTableFilterComponent);

        this.cdr = cdr;
        this.i18n = i18n;
        this.contentTemplate = null;
        this.customFilter = false;
        this.extraTemplate = null;
        this.filterMultiple = true;
        this.listOfFilter = [];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.isChanged = false;
        this.isChecked = false;
        this.isVisible = false;
        this.listOfParsedFilter = [];
      }
      /**
       * @param {?} _
       * @param {?} item
       * @return {?}
       */


      _createClass(NzTableFilterComponent, [{
        key: "trackByValue",
        value: function trackByValue(_, item) {
          return item.value;
        }
        /**
         * @param {?} filter
         * @return {?}
         */

      }, {
        key: "check",
        value: function check(filter) {
          this.isChanged = true;

          if (this.filterMultiple) {
            this.listOfParsedFilter = this.listOfParsedFilter.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (item === filter) {
                return Object.assign(Object.assign({}, item), {
                  checked: !filter.checked
                });
              } else {
                return item;
              }
            });
            filter.checked = !filter.checked;
          } else {
            this.listOfParsedFilter = this.listOfParsedFilter.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return Object.assign(Object.assign({}, item), {
                checked: item === filter
              });
            });
          }

          this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
        }
        /**
         * @return {?}
         */

      }, {
        key: "confirm",
        value: function confirm() {
          this.isVisible = false;
          this.emitFilterData();
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.isChanged = true;
          this.isVisible = false;
          this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
          this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
          this.emitFilterData();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onVisibleChange",
        value: function onVisibleChange(value) {
          this.isVisible = value;

          if (!value) {
            this.emitFilterData();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "emitFilterData",
        value: function emitFilterData() {
          if (this.isChanged) {
            /** @type {?} */
            var listOfChecked = this.listOfParsedFilter.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.checked;
            }).map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.value;
            });

            if (this.filterMultiple) {
              this.filterChange.emit(listOfChecked);
            } else {
              this.filterChange.emit(listOfChecked[0] || null);
            }

            this.isChanged = false;
          }
        }
        /**
         * @param {?} listOfFilter
         * @param {?=} reset
         * @return {?}
         */

      }, {
        key: "parseListOfFilter",
        value: function parseListOfFilter(listOfFilter, reset) {
          return listOfFilter.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var checked = reset ? false : !!item.byDefault;
            return {
              text: item.text,
              value: item.value,
              checked: checked
            };
          });
        }
        /**
         * @param {?} listOfParsedFilter
         * @return {?}
         */

      }, {
        key: "getCheckedStatus",
        value: function getCheckedStatus(listOfParsedFilter) {
          return listOfParsedFilter.some(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.checked;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this23.locale = _this23.i18n.getLocaleData('Table');

            _this23.cdr.markForCheck();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var listOfFilter = changes.listOfFilter;

          if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
            this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTableFilterComponent;
    }();

    NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) {
      return new (t || NzTableFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]));
    };

    NzTableFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableFilterComponent,
      selectors: [["nz-table-filter"]],
      hostVars: 2,
      hostBindings: function NzTableFilterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-filter-column", true);
        }
      },
      inputs: {
        contentTemplate: "contentTemplate",
        customFilter: "customFilter",
        extraTemplate: "extraTemplate",
        filterMultiple: "filterMultiple",
        listOfFilter: "listOfFilter"
      },
      outputs: {
        filterChange: "filterChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "ant-table-filter-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], ["filterMenu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"]],
      template: function NzTableFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzFilterTriggerComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__["NzWaveDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTableFilterComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
      }];
    };

    NzTableFilterComponent.propDecorators = {
      contentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      customFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      extraTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      filterMultiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      listOfFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      filterChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/addon/row-expand-button.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRowExpandButtonDirective = /*#__PURE__*/function () {
      function NzRowExpandButtonDirective() {
        _classCallCheck(this, NzRowExpandButtonDirective);

        this.expand = false;
        this.spaceMode = false;
        this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(NzRowExpandButtonDirective, [{
        key: "onHostClick",
        value: function onHostClick() {
          if (!this.spaceMode) {
            this.expand = !this.expand;
            this.expandChange.next(this.expand);
          }
        }
      }]);

      return NzRowExpandButtonDirective;
    }();

    NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) {
      return new (t || NzRowExpandButtonDirective)();
    };

    NzRowExpandButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzRowExpandButtonDirective,
      selectors: [["button", "nz-row-expand-button", ""]],
      hostVars: 9,
      hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzRowExpandButtonDirective_click_HostBindingHandler() {
            return ctx.onHostClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-row-expand-icon", true)("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
        }
      },
      inputs: {
        expand: "expand",
        spaceMode: "spaceMode"
      },
      outputs: {
        expandChange: "expandChange"
      }
    });
    NzRowExpandButtonDirective.propDecorators = {
      expand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      spaceMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      expandChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/addon/row-indent.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRowIndentDirective = function NzRowIndentDirective() {
      _classCallCheck(this, NzRowIndentDirective);

      this.indentSize = 0;
    };

    NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) {
      return new (t || NzRowIndentDirective)();
    };

    NzRowIndentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzRowIndentDirective,
      selectors: [["nz-row-indent"]],
      hostVars: 4,
      hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("padding-left", ctx.indentSize, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-row-indent", true);
        }
      },
      inputs: {
        indentSize: "indentSize"
      }
    });
    NzRowIndentDirective.propDecorators = {
      indentSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/addon/selection.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableSelectionComponent = /*#__PURE__*/function () {
      function NzTableSelectionComponent() {
        _classCallCheck(this, NzTableSelectionComponent);

        this.listOfSelections = [];
        this.checked = false;
        this.disabled = false;
        this.indeterminate = false;
        this.showCheckbox = false;
        this.showRowSelection = false;
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }
      /**
       * @param {?} checked
       * @return {?}
       */


      _createClass(NzTableSelectionComponent, [{
        key: "onCheckedChange",
        value: function onCheckedChange(checked) {
          this.checked = checked;
          this.checkedChange.emit(checked);
        }
      }]);

      return NzTableSelectionComponent;
    }();

    NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) {
      return new (t || NzTableSelectionComponent)();
    };

    NzTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableSelectionComponent,
      selectors: [["nz-table-selection"]],
      hostVars: 2,
      hostBindings: function NzTableSelectionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-selection", true);
        }
      },
      inputs: {
        listOfSelections: "listOfSelections",
        checked: "checked",
        disabled: "disabled",
        indeterminate: "indeterminate",
        showCheckbox: "showCheckbox",
        showRowSelection: "showRowSelection"
      },
      outputs: {
        checkedChange: "checkedChange"
      },
      decls: 2,
      vars: 2,
      consts: [["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]],
      template: function NzTableSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableSelectionComponent_label_0_Template, 1, 5, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCheckbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showRowSelection);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTableSelectionComponent.propDecorators = {
      listOfSelections: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      indeterminate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      showCheckbox: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      showRowSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      checkedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/addon/sorters.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableSortersComponent = /*#__PURE__*/function () {
      function NzTableSortersComponent() {
        _classCallCheck(this, NzTableSortersComponent);

        this.sortDirections = ['ascend', 'descend', null];
        this.sortOrder = null;
        this.contentTemplate = null;
        this.isUp = false;
        this.isDown = false;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NzTableSortersComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var sortDirections = changes.sortDirections;

          if (sortDirections) {
            this.isUp = this.sortDirections.indexOf('ascend') !== -1;
            this.isDown = this.sortDirections.indexOf('descend') !== -1;
          }
        }
      }]);

      return NzTableSortersComponent;
    }();

    NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) {
      return new (t || NzTableSortersComponent)();
    };

    NzTableSortersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableSortersComponent,
      selectors: [["nz-table-sorters"]],
      hostVars: 2,
      hostBindings: function NzTableSortersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-column-sorters", true);
        }
      },
      inputs: {
        sortDirections: "sortDirections",
        sortOrder: "sortOrder",
        contentTemplate: "contentTemplate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 6,
      vars: 5,
      consts: [[3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]],
      template: function NzTableSortersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableSortersComponent_i_4_Template, 1, 2, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzTableSortersComponent_i_5_Template, 1, 2, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDown);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTableSortersComponent.propDecorators = {
      sortDirections: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      sortOrder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      contentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cell/cell-fixed.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCellFixedDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function NzCellFixedDirective(renderer, elementRef) {
        _classCallCheck(this, NzCellFixedDirective);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzRight = false;
        this.nzLeft = false;
        this.colspan = null;
        this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.isAutoLeft = false;
        this.isAutoRight = false;
        this.isFixedLeft = false;
        this.isFixedRight = false;
        this.isFixed = false;
      }
      /**
       * @param {?} autoLeft
       * @return {?}
       */


      _createClass(NzCellFixedDirective, [{
        key: "setAutoLeftWidth",
        value: function setAutoLeftWidth(autoLeft) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
        }
        /**
         * @param {?} autoRight
         * @return {?}
         */

      }, {
        key: "setAutoRightWidth",
        value: function setAutoRightWidth(autoRight) {
          this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
        }
        /**
         * @param {?} isFirstRight
         * @return {?}
         */

      }, {
        key: "setIsFirstRight",
        value: function setIsFirstRight(isFirstRight) {
          this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
        }
        /**
         * @param {?} isLastLeft
         * @return {?}
         */

      }, {
        key: "setIsLastLeft",
        value: function setIsLastLeft(isLastLeft) {
          this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
        }
        /**
         * @private
         * @param {?} flag
         * @param {?} className
         * @return {?}
         */

      }, {
        key: "setFixClass",
        value: function setFixClass(flag, className) {
          // the setFixClass function may call many times, so remove it first.
          this.renderer.removeClass(this.elementRef.nativeElement, className);

          if (flag) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.setIsFirstRight(false);
          this.setIsLastLeft(false);
          this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
          this.isAutoRight = this.nzRight === '' || this.nzRight === true;
          this.isFixedLeft = this.nzLeft !== false;
          this.isFixedRight = this.nzRight !== false;
          this.isFixed = this.isFixedLeft || this.isFixedRight;
          /** @type {?} */

          var validatePx =
          /**
          * @param {?} value
          * @return {?}
          */
          function validatePx(value) {
            if (typeof value === 'string' && value !== '') {
              return value;
            } else {
              return null;
            }
          };

          this.setAutoLeftWidth(validatePx(this.nzLeft));
          this.setAutoRightWidth(validatePx(this.nzRight));
          this.changes$.next();
        }
      }]);

      return NzCellFixedDirective;
    }();

    NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) {
      return new (t || NzCellFixedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    NzCellFixedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzCellFixedDirective,
      selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]],
      hostVars: 6,
      hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("position", ctx.isFixed ? "sticky" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
        }
      },
      inputs: {
        nzRight: "nzRight",
        nzLeft: "nzLeft",
        colspan: "colspan"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    NzCellFixedDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    NzCellFixedDirective.propDecorators = {
      nzRight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzLeft: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table-style.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableStyleService = /*#__PURE__*/function () {
      function NzTableStyleService() {
        _classCallCheck(this, NzTableStyleService);

        this.theadTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.hasFixLeft$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.hasFixRight$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.columnCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfThWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.tableWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.manualWidthConfigPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              widthConfig = _ref4[0],
              listOfWidth = _ref4[1];

          return widthConfig.length ? widthConfig : listOfWidth;
        }));
        this.listOfAutoWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfListOfThWidthPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(
        /** init with manual width **/
        this.manualWidthConfigPx$, Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              autoWidth = _ref6[0],
              manualWidth = _ref6[1];

          /** use autoWidth until column length match **/
          if (autoWidth.length === manualWidth.length) {
            return autoWidth.map(
            /**
            * @param {?} width
            * @param {?} index
            * @return {?}
            */
            function (width, index) {
              if (width === '0px') {
                return manualWidth[index] || null;
              } else {
                return manualWidth[index] || width;
              }
            });
          } else {
            return manualWidth;
          }
        })));
        this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} list
        * @return {?}
        */
        function (list) {
          return list.map(
          /**
          * @param {?} width
          * @return {?}
          */
          function (width) {
            return parseInt(width, 10);
          });
        }));
        this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
      }
      /**
       * @param {?} template
       * @return {?}
       */


      _createClass(NzTableStyleService, [{
        key: "setTheadTemplate",
        value: function setTheadTemplate(template) {
          this.theadTemplate$.next(template);
        }
        /**
         * @param {?} hasFixLeft
         * @return {?}
         */

      }, {
        key: "setHasFixLeft",
        value: function setHasFixLeft(hasFixLeft) {
          this.hasFixLeft$.next(hasFixLeft);
        }
        /**
         * @param {?} hasFixRight
         * @return {?}
         */

      }, {
        key: "setHasFixRight",
        value: function setHasFixRight(hasFixRight) {
          this.hasFixRight$.next(hasFixRight);
        }
        /**
         * @param {?} widthConfig
         * @return {?}
         */

      }, {
        key: "setTableWidthConfig",
        value: function setTableWidthConfig(widthConfig) {
          this.tableWidthConfigPx$.next(widthConfig);
        }
        /**
         * @param {?} listOfTh
         * @return {?}
         */

      }, {
        key: "setListOfTh",
        value: function setListOfTh(listOfTh) {
          /** @type {?} */
          var columnCount = 0;
          listOfTh.forEach(
          /**
          * @param {?} th
          * @return {?}
          */
          function (th) {
            columnCount += th.colspan && +th.colspan || 1;
          });
          /** @type {?} */

          var listOfThPx = listOfTh.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.nzWidth;
          });
          this.columnCount$.next(columnCount);
          this.listOfThWidthConfigPx$.next(listOfThPx);
        }
        /**
         * @param {?} listOfTh
         * @return {?}
         */

      }, {
        key: "setListOfMeasureColumn",
        value: function setListOfMeasureColumn(listOfTh) {
          /** @type {?} */
          var listOfKeys = [];
          listOfTh.forEach(
          /**
          * @param {?} th
          * @return {?}
          */
          function (th) {
            /** @type {?} */
            var length = th.colspan && +th.colspan || 1;

            for (var i = 0; i < length; i++) {
              listOfKeys.push("measure_key_".concat(i));
            }
          });
          this.listOfMeasureColumn$.next(listOfKeys);
        }
        /**
         * @param {?} listOfAutoWidth
         * @return {?}
         */

      }, {
        key: "setListOfAutoWidth",
        value: function setListOfAutoWidth(listOfAutoWidth) {
          this.listOfAutoWidthPx$.next(listOfAutoWidth.map(
          /**
          * @param {?} width
          * @return {?}
          */
          function (width) {
            return "".concat(width, "px");
          }));
        }
        /**
         * @param {?} showEmpty
         * @return {?}
         */

      }, {
        key: "setShowEmpty",
        value: function setShowEmpty(showEmpty) {
          this.showEmpty$.next(showEmpty);
        }
        /**
         * @param {?} noResult
         * @return {?}
         */

      }, {
        key: "setNoResult",
        value: function setNoResult(noResult) {
          this.noResult$.next(noResult);
        }
        /**
         * @param {?} scrollX
         * @param {?} scrollY
         * @return {?}
         */

      }, {
        key: "setScroll",
        value: function setScroll(scrollX, scrollY) {
          /** @type {?} */
          var enableAutoMeasure = !!(scrollX || scrollY);

          if (!enableAutoMeasure) {
            this.setListOfAutoWidth([]);
          }

          this.enableAutoMeasure$.next(enableAutoMeasure);
        }
      }]);

      return NzTableStyleService;
    }();

    NzTableStyleService.ɵfac = function NzTableStyleService_Factory(t) {
      return new (t || NzTableStyleService)();
    };

    NzTableStyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: NzTableStyleService,
      factory: NzTableStyleService.ɵfac
    });
    /** @nocollapse */

    NzTableStyleService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cell/cell.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableCellDirective =
    /**
     * @param {?} nzTableStyleService
     */
    function NzTableCellDirective(nzTableStyleService) {
      _classCallCheck(this, NzTableCellDirective);

      this.isInsideTable = false;
      this.isInsideTable = !!nzTableStyleService;
    };

    NzTableCellDirective.ɵfac = function NzTableCellDirective_Factory(t) {
      return new (t || NzTableCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8));
    };

    NzTableCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzTableCellDirective,
      selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]],
      hostVars: 2,
      hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell", ctx.isInsideTable);
        }
      }
    });
    /** @nocollapse */

    NzTableCellDirective.ctorParameters = function () {
      return [{
        type: NzTableStyleService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cell/td-addon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTdAddOnComponent = /*#__PURE__*/function () {
      function NzTdAddOnComponent() {
        _classCallCheck(this, NzTdAddOnComponent);

        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzIndentSize = 0;
        this.nzShowExpand = false;
        this.nzShowCheckbox = false;
        this.nzExpand = false;
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isNzShowExpandChanged = false;
        this.isNzShowCheckboxChanged = false;
      }
      /**
       * @param {?} checked
       * @return {?}
       */


      _createClass(NzTdAddOnComponent, [{
        key: "onCheckedChange",
        value: function onCheckedChange(checked) {
          this.nzChecked = checked;
          this.nzCheckedChange.emit(checked);
        }
        /**
         * @param {?} expand
         * @return {?}
         */

      }, {
        key: "onExpandChange",
        value: function onExpandChange(expand) {
          this.nzExpand = expand;
          this.nzExpandChange.emit(expand);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var isFirstChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function isFirstChange(value) {
            return value && value.firstChange && value.currentValue !== undefined;
          };

          var nzExpand = changes.nzExpand,
              nzChecked = changes.nzChecked,
              nzShowExpand = changes.nzShowExpand,
              nzShowCheckbox = changes.nzShowCheckbox;

          if (nzShowExpand) {
            this.isNzShowExpandChanged = true;
          }

          if (nzShowCheckbox) {
            this.isNzShowCheckboxChanged = true;
          }

          if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
            this.nzShowExpand = true;
          }

          if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
            this.nzShowCheckbox = true;
          }
        }
      }]);

      return NzTdAddOnComponent;
    }();

    NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) {
      return new (t || NzTdAddOnComponent)();
    };

    NzTdAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTdAddOnComponent,
      selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]],
      hostVars: 4,
      hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
        }
      },
      inputs: {
        nzChecked: "nzChecked",
        nzDisabled: "nzDisabled",
        nzIndeterminate: "nzIndeterminate",
        nzIndentSize: "nzIndentSize",
        nzShowExpand: "nzShowExpand",
        nzShowCheckbox: "nzShowCheckbox",
        nzExpand: "nzExpand"
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange",
        nzExpandChange: "nzExpandChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      attrs: _c1,
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], ["nz-row-expand-button", "", 3, "expand", "spaceMode", "expandChange"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"]],
      template: function NzTdAddOnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTdAddOnComponent_ng_container_0_Template, 3, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTdAddOnComponent_label_1_Template, 1, 3, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowCheckbox);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzRowIndentDirective, NzRowExpandButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTdAddOnComponent.propDecorators = {
      nzChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzIndeterminate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzIndentSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowCheckbox: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzCheckedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzExpandChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTdAddOnComponent.prototype, "nzExpand", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cell/th-addon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzThAddOnComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdr
       */
      function NzThAddOnComponent(cdr) {
        _classCallCheck(this, NzThAddOnComponent);

        this.cdr = cdr;
        this.manualClickOrder$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.calcOperatorChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.nzFilterValue = null;
        this.sortOrder = null;
        this.sortDirections = ['ascend', 'descend', null];
        this.sortOrderChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.isNzShowSortChanged = false;
        this.isNzShowFilterChanged = false;
        this.nzFilterMultiple = true;
        this.nzSortOrder = null;
        this.nzSortPriority = false;
        this.nzSortDirections = ['ascend', 'descend', null];
        this.nzFilters = [];
        this.nzSortFn = null;
        this.nzFilterFn = null;
        this.nzShowSort = false;
        this.nzShowFilter = false;
        this.nzCustomFilter = false;
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @deprecated use nzSortOrder instead *
         */

        this.nzSort = null;
        /**
         * @deprecated use nzSortOrderChange instead *
         */

        this.nzSortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }
      /**
       * @param {?} sortDirections
       * @param {?} current
       * @return {?}
       */


      _createClass(NzThAddOnComponent, [{
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortDirections, current) {
          /** @type {?} */
          var index = sortDirections.indexOf(current);

          if (index === sortDirections.length - 1) {
            return sortDirections[0];
          } else {
            return sortDirections[index + 1];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "emitNextSortValue",
        value: function emitNextSortValue() {
          if (this.nzShowSort) {
            /** @type {?} */
            var nextOrder = this.getNextSortDirection(this.sortDirections,
            /** @type {?} */
            this.sortOrder);
            this.setSortOrder(nextOrder);
            this.manualClickOrder$.next(this);
          }
        }
        /**
         * @param {?} order
         * @return {?}
         */

      }, {
        key: "setSortOrder",
        value: function setSortOrder(order) {
          this.sortOrderChange$.next(order);
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearSortOrder",
        value: function clearSortOrder() {
          if (this.sortOrder !== null) {
            this.setSortOrder(null);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "onFilterValueChange",
        value: function onFilterValueChange(value) {
          this.nzFilterChange.emit(value);
          this.nzFilterValue = value;
          this.updateCalcOperator();
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateCalcOperator",
        value: function updateCalcOperator() {
          this.calcOperatorChange$.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.sortOrderChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} order
          * @return {?}
          */
          function (order) {
            if (_this24.sortOrder !== order) {
              _this24.sortOrder = order;

              _this24.nzSortChange.emit(order);

              _this24.nzSortOrderChange.emit(order);
            }

            _this24.updateCalcOperator();

            _this24.cdr.markForCheck();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzSortKey = changes.nzSortKey,
              nzSort = changes.nzSort,
              nzSortDirections = changes.nzSortDirections,
              nzFilters = changes.nzFilters,
              nzSortOrder = changes.nzSortOrder,
              nzSortFn = changes.nzSortFn,
              nzFilterFn = changes.nzFilterFn,
              nzSortPriority = changes.nzSortPriority,
              nzFilterMultiple = changes.nzFilterMultiple,
              nzShowSort = changes.nzShowSort,
              nzShowFilter = changes.nzShowFilter;

          if (nzSortDirections) {
            if (this.nzSortDirections && this.nzSortDirections.length) {
              this.sortDirections = this.nzSortDirections;
            }
          }

          if (nzSort) {
            this.sortOrder = this.nzSort;
            this.setSortOrder(this.nzSort);
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__["warnDeprecation"])("'nzSort' and 'nzSortChange' is deprecated and will be removed in 10.0.0. Please use 'nzSortOrder' and 'nzSortOrderChange' instead.");
          }

          if (nzSortKey) {
            this.nzColumnKey = this.nzSortKey;
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__["warnDeprecation"])("'nzSortKey' is deprecated and will be removed in 10.0.0. Please use 'nzColumnKey' instead.");
          }

          if (nzSortOrder) {
            this.sortOrder = this.nzSortOrder;
            this.setSortOrder(this.nzSortOrder);
          }

          if (nzShowSort) {
            this.isNzShowSortChanged = true;
          }

          if (nzShowFilter) {
            this.isNzShowFilterChanged = true;
          }
          /** @type {?} */


          var isFirstChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function isFirstChange(value) {
            return value && value.firstChange && value.currentValue !== undefined;
          };

          if ((isFirstChange(nzSortKey) || isFirstChange(nzSort) || isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
            this.nzShowSort = true;
          }

          if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
            this.nzShowFilter = true;
          }

          if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
            /** @type {?} */
            var listOfValue = this.nzFilters.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.byDefault;
            }).map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.value;
            });
            this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
          }

          if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
            this.updateCalcOperator();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzThAddOnComponent;
    }();

    NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) {
      return new (t || NzThAddOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    NzThAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzThAddOnComponent,
      selectors: [["th", "nzSortKey", ""], ["th", "nzColumnKey", ""], ["th", "nzSort", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]],
      hostVars: 4,
      hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzThAddOnComponent_click_HostBindingHandler() {
            return ctx.emitNextSortValue();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
        }
      },
      inputs: {
        nzFilterMultiple: "nzFilterMultiple",
        nzSortOrder: "nzSortOrder",
        nzSortPriority: "nzSortPriority",
        nzSortDirections: "nzSortDirections",
        nzFilters: "nzFilters",
        nzSortFn: "nzSortFn",
        nzFilterFn: "nzFilterFn",
        nzShowSort: "nzShowSort",
        nzShowFilter: "nzShowFilter",
        nzCustomFilter: "nzCustomFilter",
        nzSort: "nzSort",
        nzColumnKey: "nzColumnKey",
        nzSortKey: "nzSortKey"
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange",
        nzSortOrderChange: "nzSortOrderChange",
        nzFilterChange: "nzFilterChange",
        nzSortChange: "nzSortChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      attrs: _c2,
      ngContentSelectors: _c4,
      decls: 9,
      vars: 2,
      consts: [[3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], ["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]],
      template: function NzThAddOnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzTableFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], NzTableSortersComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzThAddOnComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    NzThAddOnComponent.propDecorators = {
      nzColumnKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzFilterMultiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSortOrder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSortPriority: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSortDirections: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzFilters: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSortFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzFilterFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowSort: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzCustomFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzCheckedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzSortOrderChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzFilterChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzSortKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSort: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzThAddOnComponent.prototype, "nzShowSort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cell/th-measure.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzThMeasureDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function NzThMeasureDirective(renderer, elementRef) {
        _classCallCheck(this, NzThMeasureDirective);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.nzWidth = null;
        this.colspan = null;
        this.rowspan = null;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NzThMeasureDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzWidth = changes.nzWidth,
              colspan = changes.colspan,
              rowspan = changes.rowspan;

          if (colspan) {
            if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["isNil"])(this.colspan)) {
              this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', "".concat(this.colspan));
            } else {
              this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
            }
          }

          if (rowspan) {
            if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["isNil"])(this.rowspan)) {
              this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', "".concat(this.rowspan));
            } else {
              this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
            }
          }

          if (nzWidth || colspan) {
            this.changes$.next();
          }
        }
      }]);

      return NzThMeasureDirective;
    }();

    NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) {
      return new (t || NzThMeasureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    NzThMeasureDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzThMeasureDirective,
      selectors: [["th"]],
      inputs: {
        nzWidth: "nzWidth",
        colspan: "colspan",
        rowspan: "rowspan"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    NzThMeasureDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    NzThMeasureDirective.propDecorators = {
      nzWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cell/th-selection.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzThSelectionComponent = /*#__PURE__*/function () {
      function NzThSelectionComponent() {
        _classCallCheck(this, NzThSelectionComponent);

        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzShowCheckbox = false;
        this.nzShowRowSelection = false;
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzSortChangeWithKey = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isNzShowExpandChanged = false;
        this.isNzShowCheckboxChanged = false;
      }
      /**
       * @param {?} checked
       * @return {?}
       */


      _createClass(NzThSelectionComponent, [{
        key: "onCheckedChange",
        value: function onCheckedChange(checked) {
          this.nzChecked = checked;
          this.nzCheckedChange.emit(checked);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var isFirstChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function isFirstChange(value) {
            return value && value.firstChange && value.currentValue !== undefined;
          };

          var nzChecked = changes.nzChecked,
              nzSelections = changes.nzSelections,
              nzShowExpand = changes.nzShowExpand,
              nzShowCheckbox = changes.nzShowCheckbox;

          if (nzShowExpand) {
            this.isNzShowExpandChanged = true;
          }

          if (nzShowCheckbox) {
            this.isNzShowCheckboxChanged = true;
          }

          if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
            this.nzShowRowSelection = true;
          }

          if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
            this.nzShowCheckbox = true;
          }
        }
      }]);

      return NzThSelectionComponent;
    }();

    NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) {
      return new (t || NzThSelectionComponent)();
    };

    NzThSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzThSelectionComponent,
      selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]],
      hostVars: 2,
      hostBindings: function NzThSelectionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-selection-column", true);
        }
      },
      inputs: {
        nzSelections: "nzSelections",
        nzChecked: "nzChecked",
        nzDisabled: "nzDisabled",
        nzIndeterminate: "nzIndeterminate",
        nzShowCheckbox: "nzShowCheckbox",
        nzShowRowSelection: "nzShowRowSelection"
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange",
        nzSortChangeWithKey: "nzSortChangeWithKey"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      attrs: _c5,
      ngContentSelectors: _c0,
      decls: 2,
      vars: 6,
      consts: [[3, "checked", "disabled", "indeterminate", "listOfSelections", "showCheckbox", "showRowSelection", "checkedChange"]],
      template: function NzThSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table-selection", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) {
            return ctx.onCheckedChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
        }
      },
      directives: [NzTableSelectionComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    NzThSelectionComponent.propDecorators = {
      nzSelections: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzIndeterminate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowCheckbox: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowRowSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzCheckedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzSortChangeWithKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/styled/align.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCellAlignDirective = function NzCellAlignDirective() {
      _classCallCheck(this, NzCellAlignDirective);

      this.nzAlign = null;
    };

    NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) {
      return new (t || NzCellAlignDirective)();
    };

    NzCellAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzCellAlignDirective,
      selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]],
      hostVars: 2,
      hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx.nzAlign);
        }
      },
      inputs: {
        nzAlign: "nzAlign"
      }
    });
    NzCellAlignDirective.propDecorators = {
      nzAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/styled/ellipsis.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCellEllipsisDirective = function NzCellEllipsisDirective() {
      _classCallCheck(this, NzCellEllipsisDirective);

      this.nzEllipsis = true;
    };

    NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) {
      return new (t || NzCellEllipsisDirective)();
    };

    NzCellEllipsisDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzCellEllipsisDirective,
      selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]],
      hostVars: 2,
      hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell-ellipsis", ctx.nzEllipsis);
        }
      },
      inputs: {
        nzEllipsis: "nzEllipsis"
      }
    });
    NzCellEllipsisDirective.propDecorators = {
      nzEllipsis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/styled/word-break.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCellBreakWordDirective = function NzCellBreakWordDirective() {
      _classCallCheck(this, NzCellBreakWordDirective);

      this.nzBreakWord = true;
    };

    NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) {
      return new (t || NzCellBreakWordDirective)();
    };

    NzCellBreakWordDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzCellBreakWordDirective,
      selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]],
      hostVars: 2,
      hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("word-break", ctx.nzBreakWord ? "break-all" : "");
        }
      },
      inputs: {
        nzBreakWord: "nzBreakWord"
      }
    });
    NzCellBreakWordDirective.propDecorators = {
      nzBreakWord: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/table-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableContentComponent = function NzTableContentComponent() {
      _classCallCheck(this, NzTableContentComponent);

      this.tableLayout = 'auto';
      this.theadTemplate = null;
      this.contentTemplate = null;
      this.listOfColWidth = [];
      this.scrollX = null;
    };

    NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) {
      return new (t || NzTableContentComponent)();
    };

    NzTableContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableContentComponent,
      selectors: [["table", "nz-table-content", ""]],
      hostVars: 8,
      hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-fixed", ctx.scrollX);
        }
      },
      inputs: {
        tableLayout: "tableLayout",
        theadTemplate: "theadTemplate",
        contentTemplate: "contentTemplate",
        listOfColWidth: "listOfColWidth",
        scrollX: "scrollX"
      },
      attrs: _c6,
      ngContentSelectors: _c0,
      decls: 4,
      vars: 3,
      consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]],
      template: function NzTableContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listOfColWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.theadTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTableContentComponent.propDecorators = {
      tableLayout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      theadTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      contentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      listOfColWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      scrollX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/table-fixed-row.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableFixedRowComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzTableStyleService
       * @param {?} renderer
       */
      function NzTableFixedRowComponent(nzTableStyleService, renderer) {
        _classCallCheck(this, NzTableFixedRowComponent);

        this.nzTableStyleService = nzTableStyleService;
        this.renderer = renderer;
        this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](null);
        this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](false);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(NzTableFixedRowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.nzTableStyleService) {
            var _this$nzTableStyleSer = this.nzTableStyleService,
                enableAutoMeasure$ = _this$nzTableStyleSer.enableAutoMeasure$,
                hostWidth$ = _this$nzTableStyleSer.hostWidth$;
            enableAutoMeasure$.subscribe(this.enableAutoMeasure$);
            hostWidth$.subscribe(this.hostWidth$);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this25 = this;

          this.nzTableStyleService.columnCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} count
          * @return {?}
          */
          function (count) {
            _this25.renderer.setAttribute(_this25.tdElement.nativeElement, 'colspan', "".concat(count));
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTableFixedRowComponent;
    }();

    NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) {
      return new (t || NzTableFixedRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]));
    };

    NzTableFixedRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableFixedRowComponent,
      selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]],
      viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tdElement = _t.first);
        }
      },
      attrs: _c8,
      ngContentSelectors: _c0,
      decls: 6,
      vars: 4,
      consts: [[1, "nz-disable-td", "ant-table-cell"], ["tdElement", ""], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], ["contentTemplate", ""], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]],
      template: function NzTableFixedRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.enableAutoMeasure$))("ngIfElse", _r2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTableFixedRowComponent.ctorParameters = function () {
      return [{
        type: NzTableStyleService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }];
    };

    NzTableFixedRowComponent.propDecorators = {
      tdElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['tdElement']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/table-inner-default.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableInnerDefaultComponent = function NzTableInnerDefaultComponent() {
      _classCallCheck(this, NzTableInnerDefaultComponent);

      this.tableLayout = 'auto';
      this.listOfColWidth = [];
      this.theadTemplate = null;
      this.contentTemplate = null;
    };

    NzTableInnerDefaultComponent.ɵfac = function NzTableInnerDefaultComponent_Factory(t) {
      return new (t || NzTableInnerDefaultComponent)();
    };

    NzTableInnerDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableInnerDefaultComponent,
      selectors: [["nz-table-inner-default"]],
      hostVars: 2,
      hostBindings: function NzTableInnerDefaultComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-container", true);
        }
      },
      inputs: {
        tableLayout: "tableLayout",
        listOfColWidth: "listOfColWidth",
        theadTemplate: "theadTemplate",
        contentTemplate: "contentTemplate"
      },
      decls: 2,
      vars: 4,
      consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate"]],
      template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate);
        }
      },
      directives: [NzTableContentComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTableInnerDefaultComponent.propDecorators = {
      tableLayout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      listOfColWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      theadTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      contentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/table-inner-scroll.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableInnerScrollComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} ngZone
       * @param {?} platform
       * @param {?} resizeService
       */
      function NzTableInnerScrollComponent(renderer, ngZone, platform, resizeService) {
        _classCallCheck(this, NzTableInnerScrollComponent);

        this.renderer = renderer;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.data = [];
        this.scrollX = null;
        this.scrollY = null;
        this.contentTemplate = null;
        this.widthConfig = [];
        this.listOfColWidth = [];
        this.theadTemplate = null;
        this.virtualTemplate = null;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;

        this.virtualForTrackBy =
        /**
        * @param {?} index
        * @return {?}
        */
        function (index) {
          return index;
        };

        this.headerStyleMap = {};
        this.bodyStyleMap = {};
        this.verticalScrollBarWidth = 0;
        this.noDateVirtualHeight = '182px';
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.scroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
      }
      /**
       * @param {?=} clear
       * @return {?}
       */


      _createClass(NzTableInnerScrollComponent, [{
        key: "setScrollPositionClassName",
        value: function setScrollPositionClassName() {
          var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var _this$tableBodyElemen = this.tableBodyElement.nativeElement,
              scrollWidth = _this$tableBodyElemen.scrollWidth,
              scrollLeft = _this$tableBodyElemen.scrollLeft,
              clientWidth = _this$tableBodyElemen.clientWidth;
          /** @type {?} */

          var leftClassName = 'ant-table-ping-left';
          /** @type {?} */

          var rightClassName = 'ant-table-ping-right';

          if (scrollWidth === clientWidth && scrollWidth !== 0 || clear) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.removeClass(this.tableMainElement, rightClassName);
          } else if (scrollLeft === 0) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
          } else if (scrollWidth === scrollLeft + clientWidth) {
            this.renderer.removeClass(this.tableMainElement, rightClassName);
            this.renderer.addClass(this.tableMainElement, leftClassName);
          } else {
            this.renderer.addClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var scrollX = changes.scrollX,
              scrollY = changes.scrollY,
              data = changes.data;

          if (scrollX || scrollY) {
            /** @type {?} */
            var hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
            this.headerStyleMap = {
              overflowX: 'hidden',
              overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
            };
            this.bodyStyleMap = {
              overflowY: this.scrollY ? 'scroll' : null,
              overflowX: this.scrollX ? 'scroll' : null,
              maxHeight: this.scrollY
            };
            this.scroll$.next();
          }

          if (data) {
            this.data$.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this26 = this;

          if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var scrollEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["fromEvent"])(_this26.tableBodyElement.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(_this26.destroy$));
              /** @type {?} */

              var scrollX$ = scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])(
              /**
              * @return {?}
              */
              function () {
                return !!_this26.scrollX;
              }));
              /** @type {?} */

              var scrollY$ = scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])(
              /**
              * @return {?}
              */
              function () {
                return !!_this26.scrollY;
              }));
              /** @type {?} */

              var resize$ = _this26.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(_this26.destroy$));
              /** @type {?} */


              var data$ = _this26.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(_this26.destroy$));
              /** @type {?} */


              var setClassName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(scrollX$, resize$, data$, _this26.scroll$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["delay"])(0));
              setClassName$.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this26.setScrollPositionClassName();
              });
              scrollY$.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this26.tableHeaderElement.nativeElement.scrollLeft = _this26.tableBodyElement.nativeElement.scrollLeft;
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.setScrollPositionClassName(true);
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTableInnerScrollComponent;
    }();

    NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) {
      return new (t || NzTableInnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]));
    };

    NzTableInnerScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableInnerScrollComponent,
      selectors: [["nz-table-inner-scroll"]],
      viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c9, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c10, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], true, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tableHeaderElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tableBodyElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzTableInnerScrollComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-container", true);
        }
      },
      inputs: {
        data: "data",
        scrollX: "scrollX",
        scrollY: "scrollY",
        contentTemplate: "contentTemplate",
        widthConfig: "widthConfig",
        listOfColWidth: "listOfColWidth",
        theadTemplate: "theadTemplate",
        virtualTemplate: "virtualTemplate",
        virtualItemSize: "virtualItemSize",
        virtualMaxBufferPx: "virtualMaxBufferPx",
        virtualMinBufferPx: "virtualMinBufferPx",
        virtualForTrackBy: "virtualForTrackBy",
        verticalScrollBarWidth: "verticalScrollBarWidth",
        tableMainElement: "tableMainElement"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "ant-table-content"], ["class", "ant-table-header nz-table-hide-scrollbar", 3, "ngStyle", 4, "ngIf"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], [1, "ant-table-body", 3, "ngStyle"], ["tableBodyElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NzTableInnerScrollComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableInnerScrollComponent_div_1_Template, 3, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableInnerScrollComponent_div_2_Template, 3, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_Template, 5, 9, "cdk-virtual-scroll-viewport", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrollY);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.virtualTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.virtualTemplate);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], NzTableContentComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkFixedSizeVirtualScroll"], NzTbodyComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTableInnerScrollComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]
      }];
    };

    NzTableInnerScrollComponent.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      scrollX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      scrollY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      contentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      widthConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      listOfColWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      theadTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      virtualTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      virtualItemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      virtualMaxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      virtualMinBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      tableMainElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      virtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      tableHeaderElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['tableHeaderElement', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }]
      }],
      tableBodyElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['tableBodyElement', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }]
      }],
      cdkVirtualScrollViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], {
          read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]
        }]
      }],
      verticalScrollBarWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/table-virtual-scroll.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableVirtualScrollDirective =
    /**
     * @param {?} templateRef
     */
    function NzTableVirtualScrollDirective(templateRef) {
      _classCallCheck(this, NzTableVirtualScrollDirective);

      this.templateRef = templateRef;
    };

    NzTableVirtualScrollDirective.ɵfac = function NzTableVirtualScrollDirective_Factory(t) {
      return new (t || NzTableVirtualScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    NzTableVirtualScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzTableVirtualScrollDirective,
      selectors: [["", "nz-virtual-scroll", ""]],
      exportAs: ["nzVirtualScroll"]
    });
    /** @nocollapse */

    NzTableVirtualScrollDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table-data.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableDataService = /*#__PURE__*/function () {
      function NzTableDataService() {
        var _this27 = this;

        _classCallCheck(this, NzTableDataService);

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.pageIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](1);
        this.frontPagination$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](true);
        this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](10);
        this.listOfData$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.pageIndexDistinct$ = this.pageIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
        this.pageSizeDistinct$ = this.pageSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
        this.listOfCalcOperator$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.queryParams$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfCalcOperator$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 3),
              pageIndex = _ref8[0],
              pageSize = _ref8[1],
              listOfCalc = _ref8[2];

          return {
            pageIndex: pageIndex,
            pageSize: pageSize,
            sort: listOfCalc.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.sortFn;
            }).map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return {
                key:
                /** @type {?} */
                item.key,
                value: item.sortOrder
              };
            }),
            filter: listOfCalc.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.filterFn;
            }).map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return {
                key:
                /** @type {?} */
                item.key,
                value: item.filterValue
              };
            })
          };
        }));
        this.listOfDataAfterCalc$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.listOfData$, this.listOfCalcOperator$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              listOfData = _ref10[0],
              listOfCalcOperator = _ref10[1];

          /** @type {?} */
          var listOfDataAfterCalc = _toConsumableArray(listOfData);
          /** @type {?} */


          var listOfFilterOperator = listOfCalcOperator.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            var filterValue = item.filterValue,
                filterFn = item.filterFn;
            /** @type {?} */

            var isReset = filterValue === null || filterValue === undefined || Array.isArray(filterValue) &&
            /** @type {?} */
            filterValue.length === 0;
            return !isReset && typeof filterFn === 'function';
          });

          var _iterator = _createForOfIteratorHelper(listOfFilterOperator),
              _step;

          try {
            var _loop = function _loop() {
              var item = _step.value;
              var filterFn = item.filterFn,
                  filterValue = item.filterValue;
              listOfDataAfterCalc = listOfDataAfterCalc.filter(
              /**
              * @param {?} data
              * @return {?}
              */
              function (data) {
                return (
                  /** @type {?} */
                  filterFn(filterValue, data)
                );
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
            /** @type {?} */

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var listOfSortOperator = listOfCalcOperator.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.sortOrder !== null && typeof item.sortFn === 'function';
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return +b.sortPriority - +a.sortPriority;
          });

          if (listOfCalcOperator.length) {
            listOfDataAfterCalc.sort(
            /**
            * @param {?} record1
            * @param {?} record2
            * @return {?}
            */
            function (record1, record2) {
              var _iterator2 = _createForOfIteratorHelper(listOfSortOperator),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var item = _step2.value;
                  var sortFn = item.sortFn,
                      sortOrder = item.sortOrder;

                  if (sortFn && sortOrder) {
                    /** @type {?} */
                    var compareResult =
                    /** @type {?} */
                    sortFn(record1, record2, sortOrder);

                    if (compareResult !== 0) {
                      return sortOrder === 'ascend' ? compareResult : -compareResult;
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return 0;
            });
          }

          return listOfDataAfterCalc;
        }));
        this.listOfFrontEndCurrentPageData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          var _value = _slicedToArray(value, 3),
              pageIndex = _value[0],
              pageSize = _value[1],
              listOfData = _value[2];
          /** @type {?} */


          var maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
          return pageIndex <= maxPageIndex;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 3),
              pageIndex = _ref12[0],
              pageSize = _ref12[1],
              listOfData = _ref12[2];

          return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        }));
        this.listOfCurrentPageData$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
        /**
        * @param {?} pagination
        * @return {?}
        */
        function (pagination) {
          return pagination ? _this27.listOfFrontEndCurrentPageData$ : _this27.listOfData$;
        }));
        this.total$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
        /**
        * @param {?} pagination
        * @return {?}
        */
        function (pagination) {
          return pagination ? _this27.listOfDataAfterCalc$ : _this27.listOfData$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} list
        * @return {?}
        */
        function (list) {
          return list.length;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
      }
      /**
       * @param {?} size
       * @return {?}
       */


      _createClass(NzTableDataService, [{
        key: "updatePageSize",
        value: function updatePageSize(size) {
          this.pageSize$.next(size);
        }
        /**
         * @param {?} pagination
         * @return {?}
         */

      }, {
        key: "updateFrontPagination",
        value: function updateFrontPagination(pagination) {
          this.frontPagination$.next(pagination);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "updatePageIndex",
        value: function updatePageIndex(index) {
          this.pageIndex$.next(index);
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "updateListOfData",
        value: function updateListOfData(list) {
          this.listOfData$.next(list);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTableDataService;
    }();

    NzTableDataService.ɵfac = function NzTableDataService_Factory(t) {
      return new (t || NzTableDataService)();
    };

    NzTableDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: NzTableDataService,
      factory: NzTableDataService.ɵfac
    });
    /** @nocollapse */

    NzTableDataService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NZ_CONFIG_COMPONENT_NAME = 'table';
    /**
     * @template T
     */

    var NzTableComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} nzResizeObserver
       * @param {?} nzConfigService
       * @param {?} cdr
       * @param {?} nzTableStyleService
       * @param {?} nzTableDataService
       */
      function NzTableComponent(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService) {
        var _this28 = this;

        _classCallCheck(this, NzTableComponent);

        this.elementRef = elementRef;
        this.nzResizeObserver = nzResizeObserver;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzTableStyleService = nzTableStyleService;
        this.nzTableDataService = nzTableDataService;
        this.nzTableLayout = 'auto';
        this.nzShowTotal = null;
        this.nzItemRender = null;
        this.nzTitle = null;
        this.nzFooter = null;
        this.nzNoResult = undefined;
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzVirtualItemSize = 0;
        this.nzVirtualMaxBufferPx = 200;
        this.nzVirtualMinBufferPx = 100;

        this.nzVirtualForTrackBy =
        /**
        * @param {?} index
        * @return {?}
        */
        function (index) {
          return index;
        };

        this.nzLoadingDelay = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = {
          x: null,
          y: null
        };
        this.nzFrontPagination = true;
        this.nzTemplateMode = false;
        this.nzShowPagination = true;
        this.nzLoading = false;
        this.nzLoadingIndicator = null;
        this.nzBordered = false;
        this.nzSize = 'default';
        this.nzShowSizeChanger = false;
        this.nzHideOnSinglePage = false;
        this.nzShowQuickJumper = false;
        this.nzSimple = false;
        this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzQueryParams = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzCurrentPageDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * public data for ngFor tr
         */

        this.data = [];
        this.scrollX = null;
        this.scrollY = null;
        this.theadTemplate = null;
        this.listOfAutoColWidth = [];
        this.listOfManualColWidth = [];
        this.hasFixLeft = false;
        this.hasFixRight = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](false);
        this.templateMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](false);
        this.verticalScrollBarWidth = 0;
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this28.cdr.markForCheck();
        });
      }
      /**
       * @param {?} size
       * @return {?}
       */


      _createClass(NzTableComponent, [{
        key: "onPageSizeChange",
        value: function onPageSizeChange(size) {
          this.nzTableDataService.updatePageSize(size);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "onPageIndexChange",
        value: function onPageIndexChange(index) {
          this.nzTableDataService.updatePageIndex(index);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          var _this$nzTableDataServ = this.nzTableDataService,
              pageIndexDistinct$ = _this$nzTableDataServ.pageIndexDistinct$,
              pageSizeDistinct$ = _this$nzTableDataServ.pageSizeDistinct$,
              listOfCurrentPageData$ = _this$nzTableDataServ.listOfCurrentPageData$,
              total$ = _this$nzTableDataServ.total$,
              queryParams$ = _this$nzTableDataServ.queryParams$;
          var _this$nzTableStyleSer2 = this.nzTableStyleService,
              theadTemplate$ = _this$nzTableStyleSer2.theadTemplate$,
              hasFixLeft$ = _this$nzTableStyleSer2.hasFixLeft$,
              hasFixRight$ = _this$nzTableStyleSer2.hasFixRight$;
          queryParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(this.nzQueryParams);
          pageIndexDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} pageIndex
          * @return {?}
          */
          function (pageIndex) {
            if (pageIndex !== _this29.nzPageIndex) {
              _this29.nzPageIndex = pageIndex;

              _this29.nzPageIndexChange.next(pageIndex);
            }
          });
          pageSizeDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} pageSize
          * @return {?}
          */
          function (pageSize) {
            if (pageSize !== _this29.nzPageSize) {
              _this29.nzPageSize = pageSize;

              _this29.nzPageSizeChange.next(pageSize);
            }
          });
          total$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this29.nzFrontPagination;
          })).subscribe(
          /**
          * @param {?} total
          * @return {?}
          */
          function (total) {
            if (total !== _this29.nzTotal) {
              _this29.nzTotal = total;

              _this29.cdr.markForCheck();
            }
          });
          listOfCurrentPageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this29.data = data;

            _this29.nzCurrentPageDataChange.next(data);

            _this29.cdr.markForCheck();
          });
          theadTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} theadTemplate
          * @return {?}
          */
          function (theadTemplate) {
            _this29.theadTemplate = theadTemplate;

            _this29.cdr.markForCheck();
          });
          hasFixLeft$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} hasFixLeft
          * @return {?}
          */
          function (hasFixLeft) {
            _this29.hasFixLeft = hasFixLeft;

            _this29.cdr.markForCheck();
          });
          hasFixRight$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} hasFixRight
          * @return {?}
          */
          function (hasFixRight) {
            _this29.hasFixRight = hasFixRight;

            _this29.cdr.markForCheck();
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([total$, this.loading$, this.templateMode$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref13) {
            var _ref14 = _slicedToArray(_ref13, 3),
                total = _ref14[0],
                loading = _ref14[1],
                templateMode = _ref14[2];

            return total === 0 && !loading && !templateMode;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} empty
          * @return {?}
          */
          function (empty) {
            _this29.nzTableStyleService.setShowEmpty(empty);
          });
          this.verticalScrollBarWidth = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["measureScrollbar"])('vertical');
          this.nzTableStyleService.listOfListOfThWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} listOfWidth
          * @return {?}
          */
          function (listOfWidth) {
            _this29.listOfAutoColWidth = listOfWidth;

            _this29.cdr.markForCheck();
          });
          this.nzTableStyleService.manualWidthConfigPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} listOfWidth
          * @return {?}
          */
          function (listOfWidth) {
            _this29.listOfManualColWidth = listOfWidth;

            _this29.cdr.markForCheck();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzScroll = changes.nzScroll,
              nzPageIndex = changes.nzPageIndex,
              nzPageSize = changes.nzPageSize,
              nzFrontPagination = changes.nzFrontPagination,
              nzData = changes.nzData,
              nzWidthConfig = changes.nzWidthConfig,
              nzNoResult = changes.nzNoResult,
              nzLoading = changes.nzLoading,
              nzTemplateMode = changes.nzTemplateMode;

          if (nzPageIndex) {
            this.nzTableDataService.updatePageIndex(this.nzPageIndex);
          }

          if (nzPageSize) {
            this.nzTableDataService.updatePageSize(this.nzPageSize);
          }

          if (nzData) {
            this.nzData = this.nzData || [];
            this.nzTableDataService.updateListOfData(this.nzData);
          }

          if (nzFrontPagination) {
            this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
          }

          if (nzScroll) {
            this.scrollX = this.nzScroll && this.nzScroll.x || null;
            this.scrollY = this.nzScroll && this.nzScroll.y || null;
            this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
          }

          if (nzWidthConfig) {
            this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
          }

          if (nzLoading) {
            this.loading$.next(this.nzLoading);
          }

          if (nzTemplateMode) {
            this.templateMode$.next(this.nzTemplateMode);
          }

          if (nzNoResult) {
            this.nzTableStyleService.setNoResult(this.nzNoResult);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this30 = this;

          this.nzResizeObserver.observe(this.elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref15) {
            var _ref16 = _slicedToArray(_ref15, 1),
                entry = _ref16[0];

            var _entry$target$getBoun = entry.target.getBoundingClientRect(),
                width = _entry$target$getBoun.width;
            /** @type {?} */


            var scrollBarWidth = _this30.scrollY ? _this30.verticalScrollBarWidth : 0;
            return Math.floor(width - scrollBarWidth);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(this.nzTableStyleService.hostWidth$);

          if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
            this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTableComponent;
    }();

    NzTableComponent.ɵfac = function NzTableComponent_Factory(t) {
      return new (t || NzTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableDataService));
    };

    NzTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableComponent,
      selectors: [["nz-table"]],
      contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzTableVirtualScrollDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzVirtualScrollDirective = _t.first);
        }
      },
      viewQuery: function NzTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzTableInnerScrollComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzTableInnerScrollComponent = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-wrapper", true);
        }
      },
      inputs: {
        nzTableLayout: "nzTableLayout",
        nzShowTotal: "nzShowTotal",
        nzItemRender: "nzItemRender",
        nzTitle: "nzTitle",
        nzFooter: "nzFooter",
        nzNoResult: "nzNoResult",
        nzPageSizeOptions: "nzPageSizeOptions",
        nzVirtualItemSize: "nzVirtualItemSize",
        nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
        nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
        nzVirtualForTrackBy: "nzVirtualForTrackBy",
        nzLoadingDelay: "nzLoadingDelay",
        nzPageIndex: "nzPageIndex",
        nzPageSize: "nzPageSize",
        nzTotal: "nzTotal",
        nzWidthConfig: "nzWidthConfig",
        nzData: "nzData",
        nzPaginationPosition: "nzPaginationPosition",
        nzScroll: "nzScroll",
        nzFrontPagination: "nzFrontPagination",
        nzTemplateMode: "nzTemplateMode",
        nzShowPagination: "nzShowPagination",
        nzLoading: "nzLoading",
        nzLoadingIndicator: "nzLoadingIndicator",
        nzBordered: "nzBordered",
        nzSize: "nzSize",
        nzShowSizeChanger: "nzShowSizeChanger",
        nzHideOnSinglePage: "nzHideOnSinglePage",
        nzShowQuickJumper: "nzShowQuickJumper",
        nzSimple: "nzSimple"
      },
      outputs: {
        nzPageSizeChange: "nzPageSizeChange",
        nzPageIndexChange: "nzPageIndexChange",
        nzQueryParams: "nzQueryParams",
        nzCurrentPageDataChange: "nzCurrentPageDataChange"
      },
      exportAs: ["nzTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NzTableStyleService, NzTableDataService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 14,
      vars: 23,
      consts: [[3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "footer", 4, "ngIf"], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"]],
      template: function NzTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-spin", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableComponent_nz_table_title_footer_4_Template, 1, 1, "nz-table-title-footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzTableComponent_nz_table_inner_scroll_5_Template, 1, 13, "nz-table-inner-scroll", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzTableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NzTableComponent_nz_table_title_footer_8_Template, 1, 1, "nz-table-title-footer", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NzTableComponent_ng_container_9_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NzTableComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NzTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrollY || ctx.scrollX)("ngIfElse", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
        }
      },
      directives: function directives() {
        return [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationComponent"]];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTableComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]
      }, {
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: NzTableStyleService
      }, {
        type: NzTableDataService
      }];
    };

    NzTableComponent.propDecorators = {
      nzTableLayout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowTotal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzItemRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzFooter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzNoResult: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzPageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzVirtualItemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzVirtualMaxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzVirtualMinBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzLoadingDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzPageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzPageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzTotal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzWidthConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzPaginationPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzFrontPagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzTemplateMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowPagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzLoadingIndicator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzBordered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowSizeChanger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzHideOnSinglePage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzShowQuickJumper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSimple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzPageSizeChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzPageIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzQueryParams: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzCurrentPageDataChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzVirtualScrollDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [NzTableVirtualScrollDirective, {
          "static": false
        }]
      }],
      nzTableInnerScrollComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [NzTableInnerScrollComponent]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzFrontPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzTemplateMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzShowPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzBordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", String)], NzTableComponent.prototype, "nzSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzSimple", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/tbody.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTbodyComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzTableStyleService
       */
      function NzTbodyComponent(nzTableStyleService) {
        _classCallCheck(this, NzTbodyComponent);

        this.nzTableStyleService = nzTableStyleService;
        this.isInsideTable = false;
        this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](false);
        this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](undefined);
        this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.isInsideTable = !!this.nzTableStyleService;

        if (this.nzTableStyleService) {
          var _this$nzTableStyleSer3 = this.nzTableStyleService,
              showEmpty$ = _this$nzTableStyleSer3.showEmpty$,
              noResult$ = _this$nzTableStyleSer3.noResult$,
              listOfMeasureColumn$ = _this$nzTableStyleSer3.listOfMeasureColumn$;
          noResult$.subscribe(this.noResult$);
          listOfMeasureColumn$.subscribe(this.listOfMeasureColumn$);
          showEmpty$.subscribe(this.showEmpty$);
        }
      }
      /**
       * @param {?} listOfAutoWidth
       * @return {?}
       */


      _createClass(NzTbodyComponent, [{
        key: "onListOfAutoWidthChange",
        value: function onListOfAutoWidthChange(listOfAutoWidth) {
          this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
        }
      }]);

      return NzTbodyComponent;
    }();

    NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) {
      return new (t || NzTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8));
    };

    NzTbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTbodyComponent,
      selectors: [["tbody"]],
      hostVars: 2,
      hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-tbody", ctx.isInsideTable);
        }
      },
      ngContentSelectors: _c0,
      decls: 5,
      vars: 6,
      consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]],
      template: function NzTbodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.listOfMeasureColumn$));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.showEmpty$));
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzTrMeasureComponent, NzTableFixedRowComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmbedEmptyComponent"]];
      },
      pipes: function pipes() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTbodyComponent.ctorParameters = function () {
      return [{
        type: NzTableStyleService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/tr.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTrDirective = /*#__PURE__*/function () {
      /**
       * @param {?} nzTableStyleService
       */
      function NzTrDirective(nzTableStyleService) {
        var _this31 = this;

        _classCallCheck(this, NzTrDirective);

        this.nzTableStyleService = nzTableStyleService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.listOfFixedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
        /**
        * @param {?} list
        * @return {?}
        */
        function (list) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"]).apply(void 0, [_this31.listOfFixedColumns$].concat(_toConsumableArray(list.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return c.changes$;
          })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["flatMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this31.listOfFixedColumns$;
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
        this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} list
        * @return {?}
        */
        function (list) {
          return list.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.nzLeft !== false;
          });
        }));
        this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
        /**
        * @param {?} list
        * @return {?}
        */
        function (list) {
          return list.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.nzRight !== false;
          });
        }));
        this.listOfColumnsChanges$ = this.listOfColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
        /**
        * @param {?} list
        * @return {?}
        */
        function (list) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"]).apply(void 0, [_this31.listOfColumns$].concat(_toConsumableArray(list.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return c.changes$;
          })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["flatMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this31.listOfColumns$;
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
        this.isInsideTable = false;
        this.isInsideTable = !!nzTableStyleService;
      }
      /**
       * @return {?}
       */


      _createClass(NzTrDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (this.nzTableStyleService) {
            this.listOfCellFixedDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfCellFixedDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(this.listOfFixedColumns$);
            this.listOfNzThDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfNzThDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(this.listOfColumns$);
            /** set last left and first right **/

            this.listOfFixedLeftColumnChanges$.subscribe(
            /**
            * @param {?} listOfFixedLeft
            * @return {?}
            */
            function (listOfFixedLeft) {
              listOfFixedLeft.forEach(
              /**
              * @param {?} cell
              * @return {?}
              */
              function (cell) {
                return cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]);
              });
            });
            this.listOfFixedRightColumnChanges$.subscribe(
            /**
            * @param {?} listOfFixedRight
            * @return {?}
            */
            function (listOfFixedRight) {
              listOfFixedRight.forEach(
              /**
              * @param {?} cell
              * @return {?}
              */
              function (cell) {
                return cell.setIsFirstRight(cell === listOfFixedRight[0]);
              });
            });
            /** calculate fixed nzLeft and nzRight **/

            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref17) {
              var _ref18 = _slicedToArray(_ref17, 2),
                  listOfAutoWidth = _ref18[0],
                  listOfLeftCell = _ref18[1];

              listOfLeftCell.forEach(
              /**
              * @param {?} cell
              * @param {?} index
              * @return {?}
              */
              function (cell, index) {
                if (cell.isAutoLeft) {
                  /** @type {?} */
                  var currentArray = listOfLeftCell.slice(0, index);
                  /** @type {?} */

                  var count = currentArray.reduce(
                  /**
                  * @param {?} pre
                  * @param {?} cur
                  * @return {?}
                  */
                  function (pre, cur) {
                    return pre + (cur.colspan || 1);
                  }, 0);
                  /** @type {?} */

                  var width = listOfAutoWidth.slice(0, count).reduce(
                  /**
                  * @param {?} pre
                  * @param {?} cur
                  * @return {?}
                  */
                  function (pre, cur) {
                    return pre + cur;
                  }, 0);
                  cell.setAutoLeftWidth("".concat(width, "px"));
                }
              });
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref19) {
              var _ref20 = _slicedToArray(_ref19, 2),
                  listOfAutoWidth = _ref20[0],
                  listOfRightCell = _ref20[1];

              listOfRightCell.forEach(
              /**
              * @param {?} _
              * @param {?} index
              * @return {?}
              */
              function (_, index) {
                /** @type {?} */
                var cell = listOfRightCell[listOfRightCell.length - index - 1];

                if (cell.isAutoRight) {
                  /** @type {?} */
                  var currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                  /** @type {?} */

                  var count = currentArray.reduce(
                  /**
                  * @param {?} pre
                  * @param {?} cur
                  * @return {?}
                  */
                  function (pre, cur) {
                    return pre + (cur.colspan || 1);
                  }, 0);
                  /** @type {?} */

                  var width = listOfAutoWidth.slice(listOfAutoWidth.length - count, listOfAutoWidth.length).reduce(
                  /**
                  * @param {?} pre
                  * @param {?} cur
                  * @return {?}
                  */
                  function (pre, cur) {
                    return pre + cur;
                  }, 0);
                  cell.setAutoRightWidth("".concat(width, "px"));
                }
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTrDirective;
    }();

    NzTrDirective.ɵfac = function NzTrDirective_Factory(t) {
      return new (t || NzTrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8));
    };

    NzTrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzTrDirective,
      selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]],
      contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzThMeasureDirective, false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzCellFixedDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzThDirective = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfCellFixedDirective = _t);
        }
      },
      hostVars: 2,
      hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-row", ctx.isInsideTable);
        }
      }
    });
    /** @nocollapse */

    NzTrDirective.ctorParameters = function () {
      return [{
        type: NzTableStyleService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    NzTrDirective.propDecorators = {
      listOfNzThDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [NzThMeasureDirective]
      }],
      listOfCellFixedDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [NzCellFixedDirective]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/thead.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTheadComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       * @param {?} nzTableStyleService
       * @param {?} nzTableDataService
       */
      function NzTheadComponent(elementRef, renderer, nzTableStyleService, nzTableDataService) {
        _classCallCheck(this, NzTheadComponent);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableStyleService = nzTableStyleService;
        this.nzTableDataService = nzTableDataService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.isInsideTable = false;
        /**
         * @deprecated use nzSortFn and nzSortPriority instead *
         */

        this.nzSingleSort = false;
        /**
         * @deprecated use nzSortOrderChange instead *
         */

        this.nzSortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isInsideTable = !!this.nzTableStyleService;
      }
      /**
       * @return {?}
       */


      _createClass(NzTheadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.nzTableStyleService) {
            this.nzTableStyleService.setTheadTemplate(this.templateRef);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzSingleSort = changes.nzSingleSort;

          if (nzSingleSort) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__["warnDeprecation"])("'nzSingleSort' is deprecated and will be removed in 10.0.0. Please use 'nzSortFn' and 'nzSortPriority' instead.");
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this32 = this;

          if (this.nzTableStyleService) {
            /** @type {?} */
            var firstTableRow$ =
            /** @type {?} */
            this.listOfNzTrDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfNzTrDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item && item.first;
            }));
            /** @type {?} */

            var listOfColumnsChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
            /**
            * @param {?} firstTableRow
            * @return {?}
            */
            function (firstTableRow) {
              return firstTableRow ? firstTableRow.listOfColumnsChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            listOfColumnsChanges$.subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this32.nzTableStyleService.setListOfTh(data);
            });
            /** TODO: need reset the measure row when scrollX change **/

            this.nzTableStyleService.enableAutoMeasure$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
            /**
            * @param {?} enable
            * @return {?}
            */
            function (enable) {
              return enable ? listOfColumnsChanges$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])([]);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this32.nzTableStyleService.setListOfMeasureColumn(data);
            });
            /** @type {?} */

            var listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
            /**
            * @param {?} firstTr
            * @return {?}
            */
            function (firstTr) {
              return firstTr ? firstTr.listOfFixedLeftColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            /** @type {?} */

            var listOfFixedRightColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
            /**
            * @param {?} firstTr
            * @return {?}
            */
            function (firstTr) {
              return firstTr ? firstTr.listOfFixedRightColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            listOfFixedLeftColumnChanges$.subscribe(
            /**
            * @param {?} listOfFixedLeftColumn
            * @return {?}
            */
            function (listOfFixedLeftColumn) {
              _this32.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
            });
            listOfFixedRightColumnChanges$.subscribe(
            /**
            * @param {?} listOfFixedRightColumn
            * @return {?}
            */
            function (listOfFixedRightColumn) {
              _this32.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
            });
          }

          if (this.nzTableDataService) {
            /** @type {?} */
            var listOfColumn$ =
            /** @type {?} */
            this.listOfNzThAddOnComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfNzThAddOnComponent));
            /** @type {?} */

            var manualSort$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"]).apply(void 0, _toConsumableArray(_this32.listOfNzThAddOnComponent.map(
              /**
              * @param {?} th
              * @return {?}
              */
              function (th) {
                return th.manualClickOrder$;
              })));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            manualSort$.subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var emitValue = {
                key: data.nzColumnKey,
                value: data.sortOrder
              };

              _this32.nzSortChange.emit(emitValue);

              _this32.nzSortOrderChange.emit(emitValue);

              if (_this32.nzSingleSort || data.nzSortFn && data.nzSortPriority === false) {
                _this32.listOfNzThAddOnComponent.filter(
                /**
                * @param {?} th
                * @return {?}
                */
                function (th) {
                  return th !== data;
                }).forEach(
                /**
                * @param {?} th
                * @return {?}
                */
                function (th) {
                  return th.clearSortOrder();
                });
              }
            });
            /** @type {?} */

            var listOfCalcOperator$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"]).apply(void 0, [listOfColumn$].concat(_toConsumableArray(list.map(
              /**
              * @param {?} c
              * @return {?}
              */
              function (c) {
                return c.calcOperatorChange$;
              })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["flatMap"])(
              /**
              * @return {?}
              */
              function () {
                return listOfColumn$;
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              return list.filter(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return !!item.nzSortFn || !!item.nzFilterFn;
              }).map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                var nzSortFn = item.nzSortFn,
                    sortOrder = item.sortOrder,
                    nzFilterFn = item.nzFilterFn,
                    nzFilterValue = item.nzFilterValue,
                    nzSortPriority = item.nzSortPriority,
                    nzColumnKey = item.nzColumnKey;
                return {
                  key: nzColumnKey,
                  sortFn: nzSortFn,
                  sortPriority: nzSortPriority,
                  sortOrder:
                  /** @type {?} */
                  sortOrder,
                  filterFn:
                  /** @type {?} */
                  nzFilterFn,
                  filterValue: nzFilterValue
                };
              });
            }), // TODO: after checked error here
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["delay"])(0));
            listOfCalcOperator$.subscribe(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              _this32.nzTableDataService.listOfCalcOperator$.next(list);
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.nzTableStyleService) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTheadComponent;
    }();

    NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) {
      return new (t || NzTheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableDataService, 8));
    };

    NzTheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTheadComponent,
      selectors: [["thead", 9, "ant-table-thead"]],
      contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzTrDirective, false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzThAddOnComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzTrDirective = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzThAddOnComponent = _t);
        }
      },
      viewQuery: function NzTheadComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c12, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
        }
      },
      inputs: {
        nzSingleSort: "nzSingleSort"
      },
      outputs: {
        nzSortChange: "nzSortChange",
        nzSortOrderChange: "nzSortOrderChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 1,
      consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]],
      template: function NzTheadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isInsideTable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTheadComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: NzTableStyleService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: NzTableDataService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    NzTheadComponent.propDecorators = {
      templateRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['contentTemplate', {
          "static": true
        }]
      }],
      listOfNzTrDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [NzTrDirective]
      }],
      listOfNzThAddOnComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [NzThAddOnComponent, {
          descendants: true
        }]
      }],
      nzSingleSort: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      nzSortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      nzSortOrderChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)], NzTheadComponent.prototype, "nzSingleSort", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzFilterTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-filter-trigger',
          exportAs: "nzFilterTrigger",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <span\n      nz-dropdown\n      class=\"ant-table-filter-trigger\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      [nzClickHide]=\"false\"\n      [nzDropdownMenu]=\"nzDropdownMenu\"\n      [class.active]=\"nzActive\"\n      [class.ant-table-filter-open]=\"nzVisible\"\n      [nzVisible]=\"nzVisible\"\n      (nzVisibleChange)=\"onVisibleChange($event)\"\n      (click)=\"onFilterClick($event)\"\n    >\n      <ng-content></ng-content>\n    </span>\n  ",
          host: {
            '[class.ant-table-filter-trigger-container]': 'true',
            '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        nzActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzVisibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzDropdownMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table-filter',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <span class=\"ant-table-filter-column-title\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </span>\n    <ng-container *ngIf=\"!customFilter; else extraTemplate\">\n      <nz-filter-trigger\n        [nzVisible]=\"isVisible\"\n        [nzActive]=\"isChecked\"\n        [nzDropdownMenu]=\"filterMenu\"\n        (nzVisibleChange)=\"onVisibleChange($event)\"\n      >\n        <i nz-icon nzType=\"filter\" nzTheme=\"fill\"></i>\n      </nz-filter-trigger>\n      <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n        <div class=\"ant-table-filter-dropdown\">\n          <ul nz-menu>\n            <li nz-menu-item [nzSelected]=\"f.checked\" *ngFor=\"let f of listOfParsedFilter; trackBy: trackByValue\" (click)=\"check(f)\">\n              <label nz-radio *ngIf=\"!filterMultiple\" [ngModel]=\"f.checked\" (ngModelChange)=\"check(f)\"></label>\n              <label nz-checkbox *ngIf=\"filterMultiple\" [ngModel]=\"f.checked\" (ngModelChange)=\"check(f)\"></label>\n              <span>{{ f.text }}</span>\n            </li>\n          </ul>\n          <div class=\"ant-table-filter-dropdown-btns\">\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"reset()\" [disabled]=\"!isChecked\">{{ locale.filterReset }}</button>\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"confirm()\">{{ locale.filterConfirm }}</button>\n          </div>\n        </div>\n      </nz-dropdown-menu>\n    </ng-container>\n  ",
          host: {
            '[class.ant-table-filter-column]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
        }];
      }, {
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        customFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        extraTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        filterMultiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listOfFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        filterChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzRowExpandButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'button[nz-row-expand-button]',
          host: {
            '[type]': "'button'",
            '[class.ant-table-row-expand-icon]': 'true',
            '[class.ant-table-row-expand-icon-expanded]': "!spaceMode && expand === true",
            '[class.ant-table-row-expand-icon-collapsed]': "!spaceMode && expand === false",
            '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
            '(click)': 'onHostClick()'
          }
        }]
      }], function () {
        return [];
      }, {
        expand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        spaceMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        expandChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzRowIndentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'nz-row-indent',
          host: {
            '[class.ant-table-row-indent]': 'true',
            '[style.padding-left.px]': 'indentSize'
          }
        }]
      }], function () {
        return [];
      }, {
        indentSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table-selection',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <label\n      *ngIf=\"showCheckbox\"\n      nz-checkbox\n      [class.ant-table-selection-select-all-custom]=\"showRowSelection\"\n      [ngModel]=\"checked\"\n      [nzDisabled]=\"disabled\"\n      [nzIndeterminate]=\"indeterminate\"\n      (ngModelChange)=\"onCheckedChange($event)\"\n    >\n    </label>\n    <div class=\"ant-table-selection-extra\" *ngIf=\"showRowSelection\">\n      <span nz-dropdown class=\"ant-table-selection-down\" nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\">\n        <i nz-icon nzType=\"down\"></i>\n      </span>\n      <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n        <ul nz-menu class=\"ant-table-selection-menu\">\n          <li nz-menu-item *ngFor=\"let selection of listOfSelections\" (click)=\"selection.onSelect()\">\n            {{ selection.text }}\n          </li>\n        </ul>\n      </nz-dropdown-menu>\n    </div>\n  ",
          host: {
            '[class.ant-table-selection]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        listOfSelections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        indeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showRowSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        checkedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableSortersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table-sorters',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <span><ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template></span>\n    <span class=\"ant-table-column-sorter\" [class.ant-table-column-sorter-full]=\"isDown && isUp\">\n      <span class=\"ant-table-column-sorter-inner\">\n        <i nz-icon nzType=\"caret-up\" *ngIf=\"isUp\" class=\"ant-table-column-sorter-up\" [class.active]=\"sortOrder == 'ascend'\"></i>\n        <i nz-icon nzType=\"caret-down\" *ngIf=\"isDown\" class=\"ant-table-column-sorter-down\" [class.active]=\"sortOrder == 'descend'\"></i>\n      </span>\n    </span>\n  ",
          host: {
            '[class.ant-table-column-sorters]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        sortDirections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellFixedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
          host: {
            '[class.ant-table-cell-fix-right]': "isFixedRight",
            '[class.ant-table-cell-fix-left]': "isFixedLeft",
            '[style.position]': "isFixed? 'sticky' : null"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, {
        nzRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableStyleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])',
          host: {
            '[class.ant-table-cell]': 'isInsideTable'
          }
        }]
      }], function () {
        return [{
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTdAddOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <ng-container *ngIf=\"nzShowExpand || nzIndentSize > 0\">\n      <nz-row-indent [indentSize]=\"nzIndentSize\"></nz-row-indent>\n      <button nz-row-expand-button [expand]=\"nzExpand\" (expandChange)=\"onExpandChange($event)\" [spaceMode]=\"!nzShowExpand\"></button>\n    </ng-container>\n    <label\n      nz-checkbox\n      *ngIf=\"nzShowCheckbox\"\n      [nzDisabled]=\"nzDisabled\"\n      [ngModel]=\"nzChecked\"\n      [nzIndeterminate]=\"nzIndeterminate\"\n      (ngModelChange)=\"onCheckedChange($event)\"\n    >\n    </label>\n    <ng-content></ng-content>\n  ",
          host: {
            '[class.ant-table-cell-with-append]': "nzShowExpand || nzIndentSize > 0",
            '[class.ant-table-selection-column]': "nzShowCheckbox"
          }
        }]
      }], function () {
        return [];
      }, {
        nzChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzIndeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzIndentSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzExpandChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzThAddOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'th[nzSortKey], th[nzColumnKey], th[nzSort], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <nz-table-filter\n      *ngIf=\"nzShowFilter || nzCustomFilter; else notFilterTemplate\"\n      [contentTemplate]=\"notFilterTemplate\"\n      [extraTemplate]=\"extraTemplate\"\n      [customFilter]=\"nzCustomFilter\"\n      [filterMultiple]=\"nzFilterMultiple\"\n      [listOfFilter]=\"nzFilters\"\n      (filterChange)=\"onFilterValueChange($event)\"\n    ></nz-table-filter>\n    <ng-template #notFilterTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzShowSort ? sortTemplate : contentTemplate\"></ng-template>\n    </ng-template>\n    <ng-template #extraTemplate>\n      <ng-content select=\"[nz-th-extra]\"></ng-content>\n      <ng-content select=\"nz-filter-trigger\"></ng-content>\n    </ng-template>\n    <ng-template #sortTemplate>\n      <nz-table-sorters [sortOrder]=\"sortOrder\" [sortDirections]=\"sortDirections\" [contentTemplate]=\"contentTemplate\"></nz-table-sorters>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
          host: {
            '[class.ant-table-column-has-sorters]': 'nzShowSort',
            '[class.ant-table-column-sort]': "sortOrder === 'descend' || sortOrder === 'ascend'",
            '(click)': 'emitNextSortValue()'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        nzFilterMultiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortPriority: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortDirections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzFilters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzFilterFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzCustomFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzSortOrderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzFilterChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzColumnKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzThMeasureDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'th'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, {
        nzWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzThSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <nz-table-selection\n      [checked]=\"nzChecked\"\n      [disabled]=\"nzDisabled\"\n      [indeterminate]=\"nzIndeterminate\"\n      [listOfSelections]=\"nzSelections\"\n      [showCheckbox]=\"nzShowCheckbox\"\n      [showRowSelection]=\"nzShowRowSelection\"\n      (checkedChange)=\"onCheckedChange($event)\"\n    ></nz-table-selection>\n    <ng-content></ng-content>\n  ",
          host: {
            '[class.ant-table-selection-column]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        nzSelections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzIndeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowRowSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzSortChangeWithKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'th[nzAlign],td[nzAlign]',
          host: {
            '[style.text-align]': 'nzAlign'
          }
        }]
      }], function () {
        return [];
      }, {
        nzAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellEllipsisDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'th[nzEllipsis],td[nzEllipsis]',
          host: {
            '[class.ant-table-cell-ellipsis]': 'nzEllipsis'
          }
        }]
      }], function () {
        return [];
      }, {
        nzEllipsis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellBreakWordDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'th[nzBreakWord],td[nzBreakWord]',
          host: {
            '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
          }
        }]
      }], function () {
        return [];
      }, {
        nzBreakWord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'table[nz-table-content]',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of listOfColWidth\" />\n    <thead class=\"ant-table-thead\" *ngIf=\"theadTemplate\">\n      <ng-template [ngTemplateOutlet]=\"theadTemplate\"></ng-template>\n    </thead>\n    <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    <ng-content></ng-content>\n  ",
          host: {
            '[style.table-layout]': 'tableLayout',
            '[class.ant-table-fixed]': 'scrollX',
            '[style.width]': 'scrollX',
            '[style.min-width]': "scrollX ? '100%': null"
          }
        }]
      }], function () {
        return [];
      }, {
        tableLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        theadTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listOfColWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        scrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableFixedRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <td class=\"nz-disable-td ant-table-cell\" #tdElement>\n      <div\n        class=\"ant-table-expanded-row-fixed\"\n        *ngIf=\"enableAutoMeasure$ | async; else contentTemplate\"\n        style=\"position: sticky; left: 0px; overflow: hidden;\"\n        [style.width.px]=\"hostWidth$ | async\"\n      >\n        <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      </div>\n    </td>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
        }]
      }], function () {
        return [{
          type: NzTableStyleService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }];
      }, {
        tdElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['tdElement']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableInnerDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table-inner-default',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <div class=\"ant-table-content\">\n      <table\n        nz-table-content\n        [contentTemplate]=\"contentTemplate\"\n        [tableLayout]=\"tableLayout\"\n        [listOfColWidth]=\"listOfColWidth\"\n        [theadTemplate]=\"theadTemplate\"\n      ></table>\n    </div>\n  ",
          host: {
            '[class.ant-table-container]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        tableLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listOfColWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        theadTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableInnerScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table-inner-scroll',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <div class=\"ant-table-content\">\n      <div *ngIf=\"scrollY\" #tableHeaderElement [ngStyle]=\"headerStyleMap\" class=\"ant-table-header nz-table-hide-scrollbar\">\n        <table\n          nz-table-content\n          tableLayout=\"fixed\"\n          [scrollX]=\"scrollX\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n        ></table>\n      </div>\n      <div #tableBodyElement *ngIf=\"!virtualTemplate\" class=\"ant-table-body\" [ngStyle]=\"bodyStyleMap\">\n        <table\n          nz-table-content\n          [scrollX]=\"scrollX\"\n          tableLayout=\"fixed\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [theadTemplate]=\"scrollY ? null : theadTemplate\"\n          [contentTemplate]=\"contentTemplate\"\n        ></table>\n      </div>\n      <cdk-virtual-scroll-viewport\n        #tableBodyElement\n        *ngIf=\"virtualTemplate\"\n        [itemSize]=\"virtualItemSize\"\n        [maxBufferPx]=\"virtualMaxBufferPx\"\n        [minBufferPx]=\"virtualMinBufferPx\"\n        [style.height]=\"data.length ? scrollY : noDateVirtualHeight\"\n      >\n        <table nz-table-content tableLayout=\"fixed\" [scrollX]=\"scrollX\" [listOfColWidth]=\"listOfColWidth\">\n          <tbody>\n            <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy: virtualForTrackBy\">\n              <ng-template [ngTemplateOutlet]=\"virtualTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item, index: i }\"></ng-template>\n            </ng-container>\n          </tbody>\n        </table>\n      </cdk-virtual-scroll-viewport>\n    </div>\n  ",
          host: {
            '[class.ant-table-container]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        scrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        scrollY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        widthConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listOfColWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        theadTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        virtualTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        virtualItemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        virtualMaxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        virtualMinBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        virtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        verticalScrollBarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tableMainElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tableHeaderElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['tableHeaderElement', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }],
        tableBodyElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['tableBodyElement', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }],
        cdkVirtualScrollViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], {
            read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableVirtualScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[nz-virtual-scroll]',
          exportAs: 'nzVirtualScroll'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table',
          exportAs: 'nzTable',
          providers: [NzTableStyleService, NzTableDataService],
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n      <div\n        #tableMainElement\n        class=\"ant-table\"\n        [class.ant-table-fixed-header]=\"nzData.length && scrollY\"\n        [class.ant-table-fixed-column]=\"scrollX\"\n        [class.ant-table-has-fix-left]=\"hasFixLeft\"\n        [class.ant-table-has-fix-right]=\"hasFixRight\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.ant-table-middle]=\"nzSize === 'middle'\"\n        [class.ant-table-small]=\"nzSize === 'small'\"\n      >\n        <nz-table-title-footer [title]=\"nzTitle\" *ngIf=\"nzTitle\"></nz-table-title-footer>\n        <nz-table-inner-scroll\n          *ngIf=\"scrollY || scrollX; else defaultTemplate\"\n          [data]=\"data\"\n          [scrollX]=\"scrollX\"\n          [scrollY]=\"scrollY\"\n          [contentTemplate]=\"contentTemplate\"\n          [listOfColWidth]=\"listOfAutoColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n          [verticalScrollBarWidth]=\"verticalScrollBarWidth\"\n          [virtualTemplate]=\"nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null\"\n          [virtualItemSize]=\"nzVirtualItemSize\"\n          [virtualMaxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [virtualMinBufferPx]=\"nzVirtualMinBufferPx\"\n          [tableMainElement]=\"tableMainElement\"\n          [virtualForTrackBy]=\"nzVirtualForTrackBy\"\n        ></nz-table-inner-scroll>\n        <ng-template #defaultTemplate>\n          <nz-table-inner-default\n            [tableLayout]=\"nzTableLayout\"\n            [listOfColWidth]=\"listOfManualColWidth\"\n            [theadTemplate]=\"theadTemplate\"\n            [contentTemplate]=\"contentTemplate\"\n          ></nz-table-inner-default>\n        </ng-template>\n        <nz-table-title-footer [footer]=\"nzFooter\" *ngIf=\"nzFooter\"></nz-table-title-footer>\n      </div>\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n    </nz-spin>\n    <ng-template #paginationTemplate>\n      <nz-pagination\n        *ngIf=\"nzShowPagination && data.length\"\n        class=\"ant-table-pagination ant-table-pagination-right\"\n        [nzShowSizeChanger]=\"nzShowSizeChanger\"\n        [nzPageSizeOptions]=\"nzPageSizeOptions\"\n        [nzItemRender]=\"nzItemRender!\"\n        [nzShowQuickJumper]=\"nzShowQuickJumper\"\n        [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n        [nzShowTotal]=\"nzShowTotal\"\n        [nzSize]=\"nzSize === 'default' ? 'default' : 'small'\"\n        [nzPageSize]=\"nzPageSize\"\n        [nzTotal]=\"nzTotal\"\n        [nzSimple]=\"nzSimple\"\n        [nzPageIndex]=\"nzPageIndex\"\n        (nzPageSizeChange)=\"onPageSizeChange($event)\"\n        (nzPageIndexChange)=\"onPageIndexChange($event)\"\n      >\n      </nz-pagination>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
          host: {
            '[class.ant-table-wrapper]': 'true'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: NzTableStyleService
        }, {
          type: NzTableDataService
        }];
      }, {
        nzTableLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzItemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzNoResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzVirtualItemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzVirtualMaxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzVirtualMinBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzLoadingDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzWidthConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPaginationPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzFrontPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzTemplateMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzLoadingIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzBordered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzHideOnSinglePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSimple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzPageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzCurrentPageDataChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzVirtualScrollDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [NzTableVirtualScrollDirective, {
            "static": false
          }]
        }],
        nzTableInnerScrollComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [NzTableInnerScrollComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTbodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'tbody',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <ng-container *ngIf=\"listOfMeasureColumn$ | async as listOfMeasureColumn\">\n      <tr\n        nz-table-measure-row\n        *ngIf=\"isInsideTable && listOfMeasureColumn.length\"\n        [listOfMeasureColumn]=\"listOfMeasureColumn\"\n        (listOfAutoWidth)=\"onListOfAutoWidthChange($event)\"\n      ></tr>\n    </ng-container>\n    <ng-content></ng-content>\n    <tr class=\"ant-table-placeholder\" nz-table-fixed-row *ngIf=\"showEmpty$ | async\">\n      <nz-embed-empty nzComponentName=\"table\" [specificContent]=\"(noResult$ | async)!\"></nz-embed-empty>\n    </tr>\n  ",
          host: {
            '[class.ant-table-tbody]': 'isInsideTable'
          }
        }]
      }], function () {
        return [{
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTrDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
          host: {
            '[class.ant-table-row]': 'isInsideTable'
          }
        }]
      }], function () {
        return [{
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        listOfNzThDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [NzThMeasureDirective]
        }],
        listOfCellFixedDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [NzCellFixedDirective]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTheadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'thead:not(.ant-table-thead)',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n    <ng-container *ngIf=\"!isInsideTable\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </ng-container>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: NzTableDataService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        nzSingleSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzSortOrderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['contentTemplate', {
            "static": true
          }]
        }],
        listOfNzTrDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [NzTrDirective]
        }],
        listOfNzThAddOnComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [NzThAddOnComponent, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/title-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableTitleFooterComponent = function NzTableTitleFooterComponent() {
      _classCallCheck(this, NzTableTitleFooterComponent);

      this.title = null;
      this.footer = null;
    };

    NzTableTitleFooterComponent.ɵfac = function NzTableTitleFooterComponent_Factory(t) {
      return new (t || NzTableTitleFooterComponent)();
    };

    NzTableTitleFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTableTitleFooterComponent,
      selectors: [["nz-table-title-footer"]],
      hostVars: 4,
      hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
        }
      },
      inputs: {
        title: "title",
        footer: "footer"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "nzStringTemplateOutlet"]],
      template: function NzTableTitleFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.footer);
        }
      },
      directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTableTitleFooterComponent.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      footer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableTitleFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'nz-table-title-footer',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n  ",
          host: {
            '[class.ant-table-title]': "title !== null",
            '[class.ant-table-footer]': "footer !== null"
          }
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/tr-expand.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTrExpandDirective = function NzTrExpandDirective() {
      _classCallCheck(this, NzTrExpandDirective);

      this.nzExpand = true;
    };

    NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) {
      return new (t || NzTrExpandDirective)();
    };

    NzTrExpandDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: NzTrExpandDirective,
      selectors: [["tr", "nzExpand", ""]],
      hostVars: 3,
      hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("hidden", !ctx.nzExpand);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-expanded-row", true);
        }
      },
      inputs: {
        nzExpand: "nzExpand"
      }
    });
    NzTrExpandDirective.propDecorators = {
      nzExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTrExpandDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'tr[nzExpand]',
          host: {
            '[class.ant-table-expanded-row]': 'true',
            '[hidden]': "!nzExpand"
          }
        }]
      }], function () {
        return [];
      }, {
        nzExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table/tr-measure.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTrMeasureComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzResizeObserver
       * @param {?} ngZone
       */
      function NzTrMeasureComponent(nzResizeObserver, ngZone) {
        _classCallCheck(this, NzTrMeasureComponent);

        this.nzResizeObserver = nzResizeObserver;
        this.ngZone = ngZone;
        this.listOfMeasureColumn = [];
        this.listOfAutoWidth = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
      }
      /**
       * @param {?} _
       * @param {?} key
       * @return {?}
       */


      _createClass(NzTrMeasureComponent, [{
        key: "trackByFunc",
        value: function trackByFunc(_, key) {
          return key;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this33 = this;

          this.listOfTdElement.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfTdElement)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])(
          /**
          * @param {?} list
          * @return {?}
          */
          function (list) {
            return (
              /** @type {?} */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])(list.toArray().map(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return _this33.nzResizeObserver.observe(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])(
                /**
                * @param {?} __0
                * @return {?}
                */
                function (_ref21) {
                  var _ref22 = _slicedToArray(_ref21, 1),
                      entry = _ref22[0];

                  var _entry$target$getBoun2 = entry.target.getBoundingClientRect(),
                      width = _entry$target$getBoun2.width;

                  return Math.floor(width);
                }));
              }))
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["debounceTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this33.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this33.listOfAutoWidth.next(data);
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTrMeasureComponent;
    }();

    NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) {
      return new (t || NzTrMeasureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
    };

    NzTrMeasureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NzTrMeasureComponent,
      selectors: [["tr", "nz-table-measure-row", ""]],
      viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfTdElement = _t);
        }
      },
      hostVars: 2,
      hostBindings: function NzTrMeasureComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-measure-now", true);
        }
      },
      inputs: {
        listOfMeasureColumn: "listOfMeasureColumn"
      },
      outputs: {
        listOfAutoWidth: "listOfAutoWidth"
      },
      attrs: _c13,
      decls: 1,
      vars: 2,
      consts: [["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"], ["tdElement", ""]],
      template: function NzTrMeasureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTrMeasureComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    NzTrMeasureComponent.propDecorators = {
      listOfMeasureColumn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      listOfAutoWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      listOfTdElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
        args: ['tdElement']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTrMeasureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'tr[nz-table-measure-row]',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          template: "\n    <td\n      #tdElement\n      class=\"nz-disable-td\"\n      style=\"padding: 0px; border: 0px; height: 0px;\"\n      *ngFor=\"let th of listOfMeasureColumn; trackBy: trackByFunc\"\n    ></td>\n  ",
          host: {
            '[class.ant-table-measure-now]': 'true'
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      }, {
        listOfMeasureColumn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listOfAutoWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        listOfTdElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ['tdElement']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTableModule = function NzTableModule() {
      _classCallCheck(this, NzTableModule);
    };

    NzTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: NzTableModule
    });
    NzTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function NzTableModule_Factory(t) {
        return new (t || NzTableModule)();
      },
      imports: [[ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationModule"], ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserversModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzTableModule, {
        declarations: function declarations() {
          return [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent];
        },
        imports: function imports() {
          return [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationModule"], ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserversModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]];
        },
        exports: function exports() {
          return [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
          exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent],
          imports: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationModule"], ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserversModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/table.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * @record
     */


    function NzTableQueryParams() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-table.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-table.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js ***!
    \********************************************************************************/

  /*! exports provided: NzTabBodyComponent, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLabelDirective, NzTabLinkDirective, NzTabSetComponent, NzTabsInkBarDirective, NzTabsModule, NzTabsNavComponent */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdTabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabBodyComponent", function () {
      return NzTabBodyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabChangeEvent", function () {
      return NzTabChangeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabComponent", function () {
      return NzTabComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabDirective", function () {
      return NzTabDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabLabelDirective", function () {
      return NzTabLabelDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabLinkDirective", function () {
      return NzTabLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabSetComponent", function () {
      return NzTabSetComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabsInkBarDirective", function () {
      return NzTabsInkBarDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabsModule", function () {
      return NzTabsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTabsNavComponent", function () {
      return NzTabsNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/core/logger */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: tab-body.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["nz-tab-body", ""];

    function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) {}

    function NzTabBodyComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content);
      }
    }

    var _c1 = ["bodyTpl"];
    var _c2 = ["titleTpl"];

    function NzTabComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    }

    function NzTabComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
      }
    }

    var _c3 = [[["", "nz-tab-link", ""]], "*"];
    var _c4 = ["[nz-tab-link]", "*"];
    var _c5 = ["navContainerElement"];
    var _c6 = ["navListElement"];
    var _c7 = ["scrollListElement"];

    function NzTabsNavComponent_div_0_ng_template_1_Template(rf, ctx) {}

    function NzTabsNavComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabsNavComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzTabBarExtraContent);
      }
    }

    var _c8 = ["*"];
    var _c9 = ["tabContent"];

    function NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.nzTitle);
      }
    }

    function NzTabSetComponent_ng_container_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_ng_container_0_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var i_r5 = ctx.index;
          var tab_r4 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.clickLabel(i_r5, tab_r4.nzDisabled);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx_r1.nzTabBarGutter, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-active", ctx_r1.nzSelectedIndex == i_r5 && !ctx_r1.nzHideAll);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r4.nzDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", tab_r4.nzTitle || tab_r4.title);
      }
    }

    function NzTabSetComponent_ng_container_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
      }

      if (rf & 2) {
        var tab_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r3.nzSelectedIndex == i_r11 && !ctx_r3.nzHideAll)("forceRender", tab_r10.nzForceRender)("content", tab_r10.template || tab_r10.content);
      }
    }

    function NzTabSetComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabs-nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_nz_tabs_nav_nzOnNextClick_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.nzOnNextClick.emit();
        })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_nz_tabs_nav_nzOnPrevClick_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.nzOnPrevClick.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabSetComponent_ng_container_0_div_2_Template, 2, 6, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabSetComponent_ng_container_0_div_5_Template, 1, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx_r0.nzSize)("nzTabPosition", ctx_r0.nzTabPosition)("nzType", ctx_r0.nzType)("nzShowPagination", ctx_r0.nzShowPagination)("nzPositionMode", ctx_r0.tabPositionMode)("nzAnimated", ctx_r0.inkBarAnimated)("ngStyle", ctx_r0.nzTabBarStyle)("nzHideBar", ctx_r0.nzHideAll)("nzTabBarExtraContent", ctx_r0.nzTabBarExtraContent)("selectedIndex", ctx_r0.nzSelectedIndex);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listOfNzTabComponent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r0.tabPositionMode === "horizontal" && ctx_r0.tabPaneAnimated && (0 - (ctx_r0.nzSelectedIndex || 0)) * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-top-content", ctx_r0.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r0.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r0.nzTabPosition === "left")("ant-tabs-right-content", ctx_r0.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r0.tabPaneAnimated)("ant-tabs-card-content", ctx_r0.nzType === "card")("ant-tabs-content-no-animated", !ctx_r0.tabPaneAnimated);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listOfNzTabComponent);
      }
    }

    var NzTabBodyComponent = function NzTabBodyComponent() {
      _classCallCheck(this, NzTabBodyComponent);

      this.content = null;
      this.active = false;
      this.forceRender = false;
    };

    NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) {
      return new (t || NzTabBodyComponent)();
    };

    NzTabBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzTabBodyComponent,
      selectors: [["", "nz-tab-body", ""]],
      hostVars: 4,
      hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-inactive", !ctx.active);
        }
      },
      inputs: {
        content: "content",
        active: "active",
        forceRender: "forceRender"
      },
      exportAs: ["nzTabBody"],
      attrs: _c0,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]],
      template: function NzTabBodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active || ctx.forceRender);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTabBodyComponent.propDecorators = {
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      forceRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tab-label.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTabLabelDirective = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       */
      function NzTabLabelDirective(elementRef, renderer) {
        _classCallCheck(this, NzTabLabelDirective);

        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
      }
      /**
       * @return {?}
       */


      _createClass(NzTabLabelDirective, [{
        key: "getOffsetLeft",
        value: function getOffsetLeft() {
          return this.elementRef.nativeElement.offsetLeft;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetWidth",
        value: function getOffsetWidth() {
          return this.elementRef.nativeElement.offsetWidth;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetTop",
        value: function getOffsetTop() {
          return this.elementRef.nativeElement.offsetTop;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetHeight",
        value: function getOffsetHeight() {
          return this.elementRef.nativeElement.offsetHeight;
        }
      }]);

      return NzTabLabelDirective;
    }();

    NzTabLabelDirective.ɵfac = function NzTabLabelDirective_Factory(t) {
      return new (t || NzTabLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NzTabLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NzTabLabelDirective,
      selectors: [["", "nz-tab-label", ""]],
      hostVars: 2,
      hostBindings: function NzTabLabelDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled"
      },
      exportAs: ["nzTabLabel"]
    });
    /** @nocollapse */

    NzTabLabelDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    NzTabLabelDirective.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabLabelDirective.prototype, "disabled", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tab-link.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This component is for catching `routerLink` directive.
     */


    var NzTabLinkDirective =
    /**
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     */
    function NzTabLinkDirective(routerLink, routerLinkWithHref) {
      _classCallCheck(this, NzTabLinkDirective);

      this.routerLink = routerLink;
      this.routerLinkWithHref = routerLinkWithHref;
    };

    NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) {
      return new (t || NzTabLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], 10));
    };

    NzTabLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NzTabLinkDirective,
      selectors: [["a", "nz-tab-link", ""]],
      exportAs: ["nzTabLink"]
    });
    /** @nocollapse */

    NzTabLinkDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tab.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Decorates the `ng-template` tags and reads out the template from it.
     */


    var NzTabDirective = function NzTabDirective() {
      _classCallCheck(this, NzTabDirective);
    };

    NzTabDirective.ɵfac = function NzTabDirective_Factory(t) {
      return new (t || NzTabDirective)();
    };

    NzTabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NzTabDirective,
      selectors: [["", "nz-tab", ""]],
      exportAs: ["nzTab"]
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NzTabComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       */
      function NzTabComponent(elementRef, renderer) {
        _classCallCheck(this, NzTabComponent);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.position = null;
        this.origin = null;
        this.isActive = false;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.nzForceRender = false;
        this.nzDisabled = false;
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.renderer.addClass(elementRef.nativeElement, 'ant-tabs-tabpane');
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NzTabComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
            this.stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChanges.complete();
        }
      }]);

      return NzTabComponent;
    }();

    NzTabComponent.ɵfac = function NzTabComponent_Factory(t) {
      return new (t || NzTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NzTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzTabComponent,
      selectors: [["nz-tab"]],
      contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkDirective = _t.first);
        }
      },
      viewQuery: function NzTabComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
        }
      },
      inputs: {
        nzForceRender: "nzForceRender",
        nzDisabled: "nzDisabled",
        nzTitle: "nzTitle",
        nzRouterIdentifier: "nzRouterIdentifier"
      },
      outputs: {
        nzClick: "nzClick",
        nzSelect: "nzSelect",
        nzDeselect: "nzDeselect"
      },
      exportAs: ["nzTab"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 4,
      vars: 0,
      consts: [["titleTpl", ""], ["bodyTpl", ""]],
      template: function NzTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTabComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    NzTabComponent.propDecorators = {
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['bodyTpl', {
          "static": true
        }]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['titleTpl', {
          "static": true
        }]
      }],
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NzTabDirective, {
          "static": false,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }]
      }],
      linkDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NzTabLinkDirective, {
          "static": false
        }]
      }],
      nzTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzRouterIdentifier: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzForceRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzDeselect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabComponent.prototype, "nzForceRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabComponent.prototype, "nzDisabled", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tabs-ink-bar.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTabsInkBarDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       * @param {?} ngZone
       */
      function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
        _classCallCheck(this, NzTabsInkBarDirective);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
      }
      /**
       * @param {?} element
       * @return {?}
       */


      _createClass(NzTabsInkBarDirective, [{
        key: "alignToElement",
        value: function alignToElement(element) {
          var _this34 = this;

          if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this34.setStyles(element);
              });
            });
          } else {
            this.setStyles(element);
          }
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "setStyles",
        value: function setStyles(element) {
          /** when horizontal remove height style and add transform left **/
          if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(".concat(this.getLeftPosition(element), ", 0px, 0px)"));
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
          } else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, ".concat(this.getTopPosition(element), ", 0px)"));
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
          }
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "getLeftPosition",
        value: function getLeftPosition(element) {
          return element ? element.offsetLeft + 'px' : '0';
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "getElementWidth",
        value: function getElementWidth(element) {
          return element ? element.offsetWidth + 'px' : '0';
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "getTopPosition",
        value: function getTopPosition(element) {
          return element ? element.offsetTop + 'px' : '0';
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "getElementHeight",
        value: function getElementHeight(element) {
          return element ? element.offsetHeight + 'px' : '0';
        }
      }]);

      return NzTabsInkBarDirective;
    }();

    NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) {
      return new (t || NzTabsInkBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    NzTabsInkBarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NzTabsInkBarDirective,
      selectors: [["", "nz-tabs-ink-bar", ""]],
      hostVars: 4,
      hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-ink-bar-animated", ctx.nzAnimated)("ant-tabs-ink-bar-no-animated", !ctx.nzAnimated);
        }
      },
      inputs: {
        nzAnimated: "nzAnimated",
        nzPositionMode: "nzPositionMode"
      },
      exportAs: ["nzTabsInkBar"]
    });
    /** @nocollapse */

    NzTabsInkBarDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    NzTabsInkBarDirective.propDecorators = {
      nzAnimated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzPositionMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tabs-nav.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXAGGERATED_OVERSCROLL = 64;

    var NzTabsNavComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} renderer
       * @param {?} cdr
       * @param {?} platform
       * @param {?} resizeService
       * @param {?} dir
       */
      function NzTabsNavComponent(elementRef, ngZone, renderer, cdr, platform, resizeService, dir) {
        _classCallCheck(this, NzTabsNavComponent);

        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.resizeService = resizeService;
        this.dir = dir;
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.nzOnNextClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzOnPrevClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzAnimated = true;
        this.nzHideBar = false;
        this.nzShowPagination = true;
        this.nzType = 'line';
        this.nzTabPosition = 'top';
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzTabsNavComponent, [{
        key: "onContentChanges",

        /**
         * @return {?}
         */
        value: function onContentChanges() {
          var _this35 = this;

          /** @type {?} */
          var textContent = this.elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
          // will fire even if the text content didn't change which is inefficient and is prone
          // to infinite loops if a poorly constructed expression is passed in (see #14249).

          if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            this.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              if (_this35.nzShowPagination) {
                _this35.updatePagination();
              }

              _this35.alignInkBarToSelectedTab();

              _this35.cdr.markForCheck();
            });
          }
        }
        /**
         * @param {?} scrollDir
         * @return {?}
         */

      }, {
        key: "scrollHeader",
        value: function scrollHeader(scrollDir) {
          if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
          } else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
          } // Move the scroll distance one-third the length of the tab list's viewport.


          this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.nzShowPagination) {
              this.updatePagination();
            }

            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
            this.cdr.markForCheck();
          }

          if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);

            if (this.nzShowPagination) {
              this.checkScrollingControls();
            }

            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
          }

          if (this.scrollDistanceChanged) {
            if (this.nzShowPagination) {
              this.updateTabScrollPosition();
            }

            this.scrollDistanceChanged = false;
            this.cdr.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this36 = this;

          this.realignInkBar = this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var dirChange = _this36.dir ? _this36.dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            /** @type {?} */

            var resize = typeof window !== 'undefined' ? _this36.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this36.destroy$)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dirChange, resize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this36.nzShowPagination) {
                _this36.updatePagination();
              }

              _this36.alignInkBarToSelectedTab();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();

          if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateTabScrollPosition",
        value: function updateTabScrollPosition() {
          /** @type {?} */
          var scrollDistance = this.scrollDistance;

          if (this.nzPositionMode === 'horizontal') {
            /** @type {?} */
            var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(".concat(translateX, "px, 0, 0)"));
          } else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0,".concat(-scrollDistance, "px, 0)"));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updatePagination",
        value: function updatePagination() {
          this.checkPaginationEnabled();
          this.checkScrollingControls();
          this.updateTabScrollPosition();
        }
        /**
         * @return {?}
         */

      }, {
        key: "checkPaginationEnabled",
        value: function checkPaginationEnabled() {
          /** @type {?} */
          var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;

          if (!isEnabled) {
            this.scrollDistance = 0;
          }

          if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
          }

          this.showPaginationControls = isEnabled;
        }
        /**
         * @param {?} labelIndex
         * @return {?}
         */

      }, {
        key: "scrollToLabel",
        value: function scrollToLabel(labelIndex) {
          /** @type {?} */
          var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;

          if (selectedLabel) {
            // The view length is the visible width of the tab labels.

            /** @type {?} */
            var labelBeforePos;
            /** @type {?} */

            var labelAfterPos;

            if (this.nzPositionMode === 'horizontal') {
              if (this.getLayoutDirection() === 'ltr') {
                labelBeforePos = selectedLabel.getOffsetLeft();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
              } else {
                labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
              }
            } else {
              labelBeforePos = selectedLabel.getOffsetTop();
              labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */


            var beforeVisiblePos = this.scrollDistance;
            /** @type {?} */

            var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;

            if (labelBeforePos < beforeVisiblePos) {
              // Scroll header to move label to the before direction
              this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            } else if (labelAfterPos > afterVisiblePos) {
              // Scroll header to move label to the after direction
              this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "checkScrollingControls",
        value: function checkScrollingControls() {
          // Check if the pagination arrows should be activated.
          this.disableScrollBefore = this.scrollDistance === 0;
          this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
          this.cdr.markForCheck();
        }
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "getMaxScrollDistance",
        value: function getMaxScrollDistance() {
          return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
        }
        /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "getLayoutDirection",

        /**
         * @return {?}
         */
        value: function getLayoutDirection() {
          return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */

      }, {
        key: "alignInkBarToSelectedTab",
        value: function alignInkBarToSelectedTab() {
          if (this.nzType === 'line') {
            /** @type {?} */
            var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement : null;

            if (this.nzTabsInkBarDirective) {
              this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
          }
        }
      }, {
        key: "nzPositionMode",
        set: function set(value) {
          var _this37 = this;

          this._tabPositionMode = value;
          this.alignInkBarToSelectedTab();

          if (this.nzShowPagination) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this37.updatePagination();
            });
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._tabPositionMode;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        set: function set(value) {
          this.selectedIndexChanged = this._selectedIndex !== value;
          this._selectedIndex = value;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._selectedIndex;
        }
      }, {
        key: "scrollDistance",
        set: function set(v) {
          this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
          // transformation can move the header.

          this.scrollDistanceChanged = true;
          this.checkScrollingControls();
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._scrollDistance;
        }
        /**
         * @return {?}
         */

      }, {
        key: "viewWidthHeightPix",
        get: function get() {
          /** @type {?} */
          var PAGINATION_PIX = 0;

          if (this.showPaginationControls) {
            PAGINATION_PIX = this.navContainerScrollPaddingPix;
          }

          if (this.nzPositionMode === 'horizontal') {
            return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
          } else {
            return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "navContainerScrollPaddingPix",
        get: function get() {
          if (this.platform.isBrowser) {
            /** @type {?} */
            var navContainer = this.navContainerElement.nativeElement;
            /** @type {?} */

            var originStyle = window.getComputedStyle ? window.getComputedStyle(navContainer) :
            /** @type {?} */
            navContainer.currentStyle;

            if (this.nzPositionMode === 'horizontal') {
              return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingLeft) + Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingRight);
            } else {
              return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingTop) + Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingBottom);
            }
          } else {
            return 0;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "tabListScrollWidthHeightPix",
        get: function get() {
          if (this.nzPositionMode === 'horizontal') {
            return this.navListElement.nativeElement.scrollWidth;
          } else {
            return this.navListElement.nativeElement.scrollHeight;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "tabListScrollOffSetWidthHeight",
        get: function get() {
          if (this.nzPositionMode === 'horizontal') {
            return this.scrollListElement.nativeElement.offsetWidth;
          } else {
            return this.elementRef.nativeElement.offsetHeight;
          }
        }
      }]);

      return NzTabsNavComponent;
    }();

    NzTabsNavComponent.ɵfac = function NzTabsNavComponent_Factory(t) {
      return new (t || NzTabsNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
    };

    NzTabsNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzTabsNavComponent,
      selectors: [["nz-tabs-nav"]],
      contentQueries: function NzTabsNavComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLabelDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzTabLabelDirective = _t);
        }
      },
      viewQuery: function NzTabsNavComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzTabsInkBarDirective, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c7, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabsInkBarDirective = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navContainerElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navListElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollListElement = _t.first);
        }
      },
      hostVars: 18,
      hostBindings: function NzTabsNavComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-bar", true)("ant-tabs-card-bar", ctx.nzType === "card")("ant-tabs-top-bar", ctx.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx.nzTabPosition === "left")("ant-tabs-right-bar", ctx.nzTabPosition === "right")("ant-tabs-small-bar", ctx.nzSize === "small")("ant-tabs-default-bar", ctx.nzSize === "default")("ant-tabs-large-bar", ctx.nzSize === "large");
        }
      },
      inputs: {
        nzAnimated: "nzAnimated",
        nzHideBar: "nzHideBar",
        nzShowPagination: "nzShowPagination",
        nzType: "nzType",
        nzTabPosition: "nzTabPosition",
        nzPositionMode: "nzPositionMode",
        selectedIndex: "selectedIndex",
        nzTabBarExtraContent: "nzTabBarExtraContent",
        nzSize: "nzSize"
      },
      outputs: {
        nzOnNextClick: "nzOnNextClick",
        nzOnPrevClick: "nzOnPrevClick"
      },
      exportAs: ["nzTabsNav"],
      ngContentSelectors: _c8,
      decls: 17,
      vars: 18,
      consts: [["style", "float:right;", "class", "ant-tabs-extra-content", 4, "ngIf"], [1, "ant-tabs-nav-container"], ["navContainerElement", ""], [1, "ant-tabs-tab-prev", 3, "click"], [1, "ant-tabs-tab-prev-icon"], ["nz-icon", "", 1, "ant-tabs-tab-prev-icon-target", 3, "nzType"], [1, "ant-tabs-tab-next", 3, "click"], [1, "ant-tabs-tab-next-icon"], ["nz-icon", "", 1, "ant-tabs-tab-next-icon-target", 3, "nzType"], [1, "ant-tabs-nav-wrap"], [1, "ant-tabs-nav-scroll"], ["scrollListElement", ""], [1, "ant-tabs-nav", 3, "cdkObserveContent"], ["navListElement", ""], ["nz-tabs-ink-bar", "", 2, "display", "block", 3, "hidden", "nzAnimated", "nzPositionMode"], [1, "ant-tabs-extra-content", 2, "float", "right"], [3, "ngTemplateOutlet"]],
      template: function NzTabsNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabsNavComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabsNavComponent_Template_span_click_3_listener() {
            return ctx.scrollHeader("before");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabsNavComponent_Template_span_click_6_listener() {
            return ctx.scrollHeader("after");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function NzTabsNavComponent_Template_div_cdkObserveContent_12_listener() {
            return ctx.onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTabBarExtraContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-container-scrolling", ctx.showPaginationControls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-btn-disabled", ctx.disableScrollBefore)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.nzPositionMode === "horizontal" ? "left" : "up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-btn-disabled", ctx.disableScrollAfter)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.nzPositionMode === "horizontal" ? "right" : "down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-animated", ctx.nzAnimated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.nzHideBar)("nzAnimated", ctx.nzAnimated)("nzPositionMode", ctx.nzPositionMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["CdkObserveContent"], NzTabsInkBarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTabsNavComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NzTabsNavComponent.propDecorators = {
      listOfNzTabLabelDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NzTabLabelDirective]
      }],
      nzTabsInkBarDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [NzTabsInkBarDirective, {
          "static": true
        }]
      }],
      navContainerElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['navContainerElement', {
          "static": true
        }]
      }],
      navListElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['navListElement', {
          "static": true
        }]
      }],
      scrollListElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['scrollListElement', {
          "static": true
        }]
      }],
      nzOnNextClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzOnPrevClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzTabBarExtraContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzAnimated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzHideBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzShowPagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzTabPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzPositionMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabsNavComponent.prototype, "nzAnimated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabsNavComponent.prototype, "nzHideBar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabsNavComponent.prototype, "nzShowPagination", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: table.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NzAnimatedInterface() {}

    if (false) {}

    var NzTabChangeEvent = function NzTabChangeEvent() {
      _classCallCheck(this, NzTabChangeEvent);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tabset.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NZ_CONFIG_COMPONENT_NAME = 'tabs';

    var NzTabSetComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzConfigService
       * @param {?} renderer
       * @param {?} elementRef
       * @param {?} cdr
       * @param {?} router
       */
      function NzTabSetComponent(nzConfigService, renderer, elementRef, cdr, router) {
        _classCallCheck(this, NzTabSetComponent);

        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.router = router;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        /**
         * Subscription to tabs being added/removed.
         */

        this.tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */

        this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tabPositionMode = 'horizontal';
        this.nzShowPagination = true;
        this.nzAnimated = true;
        this.nzHideAll = false;
        this.nzTabPosition = 'top';
        this.nzSize = 'default';
        this.nzTabBarGutter = undefined;
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzCanDeactivate = null;
        this.nzOnNextClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzOnPrevClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.nzSelectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzTabSetComponent, [{
        key: "setPosition",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function setPosition(value) {
          if (this.tabContent) {
            if (value === 'bottom') {
              this.renderer.insertBefore(this.el, this.tabContent.nativeElement,
              /** @type {?} */
              this.nzTabsNavComponent.elementRef.nativeElement);
            } else {
              this.renderer.insertBefore(this.el,
              /** @type {?} */
              this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
          }
        }
        /**
         * @param {?} index
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "clickLabel",
        value: function clickLabel(index, disabled) {
          var _this38 = this;

          if (!disabled) {
            if (this.nzSelectedIndex !== null && this.nzSelectedIndex !== index && typeof this.nzCanDeactivate === 'function') {
              /** @type {?} */
              var observable = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["wrapIntoObservable"])(this.nzCanDeactivate(this.nzSelectedIndex, index));
              observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe(
              /**
              * @param {?} canChange
              * @return {?}
              */
              function (canChange) {
                return canChange && _this38.emitClickEvent(index);
              });
            } else {
              this.emitClickEvent(index);
            }
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "emitClickEvent",
        value: function emitClickEvent(index) {
          /** @type {?} */
          var tabs = this.listOfNzTabComponent.toArray();
          this.nzSelectedIndex = index;
          tabs[index].nzClick.emit();
          this.cdr.markForCheck();
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "createChangeEvent",
        value: function createChangeEvent(index) {
          /** @type {?} */
          var event = new NzTabChangeEvent();
          event.index = index;

          if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach(
            /**
            * @param {?} item
            * @param {?} i
            * @return {?}
            */
            function (item, i) {
              if (i !== index) {
                item.nzDeselect.emit();
              }
            });
            event.tab.nzSelect.emit();
          }

          return event;
        }
        /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "clampTabIndex",
        value: function clampTabIndex(index) {
          // Note the `|| 0`, which ensures that values like NaN can't get through
          // and which would otherwise throw the component into an infinite loop
          // (since Math.max(NaN, 0) === NaN).
          return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "subscribeToTabLabels",
        value: function subscribeToTabLabels() {
          var _this39 = this;

          if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
          }

          this.tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, _toConsumableArray(this.listOfNzTabComponent.map(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            return tab.stateChanges;
          }))).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this39.cdr.markForCheck();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzTabPosition = changes.nzTabPosition,
              nzType = changes.nzType;

          if (nzTabPosition) {
            if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
              this.tabPositionMode = 'horizontal';
            } else {
              this.tabPositionMode = 'vertical';
            }

            this.setPosition(this.nzTabPosition);
          }

          if (nzType) {
            if (this.nzType === 'card') {
              this.nzAnimated = false;
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this40 = this;

          if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.

            /** @type {?} */
            var indexToSelect = this.indexToSelect = this.clampTabIndex(this.indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.

            if (this._selectedIndex !== indexToSelect) {
              /** @type {?} */
              var isFirstRun = this._selectedIndex == null;

              if (!isFirstRun) {
                this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
              } // Changing these values after change detection has run
              // since the checked content may contain references to them.


              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this40.listOfNzTabComponent.forEach(
                /**
                * @param {?} tab
                * @param {?} index
                * @return {?}
                */
                function (tab, index) {
                  return tab.isActive = index === indexToSelect;
                });

                if (!isFirstRun) {
                  _this40.nzSelectedIndexChange.emit(indexToSelect);
                }
              });
            } // Setup the position for each tab and optionally setup an origin on the next selected tab.


            this.listOfNzTabComponent.forEach(
            /**
            * @param {?} tab
            * @param {?} index
            * @return {?}
            */
            function (tab, index) {
              tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
              // if it doesn't have one already.

              if (_this40._selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - _this40._selectedIndex;
              }
            });

            if (this._selectedIndex !== indexToSelect) {
              this._selectedIndex = indexToSelect;
              this.cdr.markForCheck();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this41 = this;

          this.subscribeToTabLabels();
          this.setPosition(this.nzTabPosition);

          if (this.nzLinkRouter) {
            if (!this.router) {
              throw new Error("".concat(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_14__["PREFIX"], " you should import 'RouterModule' if you want to use 'nzLinkRouter'!"));
            }

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(true)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this41.updateRouterActive();

              _this41.cdr.markForCheck();
            });
          } // Subscribe to changes in the amount of tabs, in order to be
          // able to re-render the content as new tabs are added or removed.


          this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var indexToSelect = _this41.clampTabIndex(_this41.indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.


            if (indexToSelect === _this41._selectedIndex) {
              /** @type {?} */
              var tabs = _this41.listOfNzTabComponent.toArray();

              for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].isActive) {
                  // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                  // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                  // adding a tab within the `selectedIndexChange` event.
                  _this41.indexToSelect = _this41._selectedIndex = i;
                  break;
                }
              }
            }

            _this41.subscribeToTabLabels();

            _this41.cdr.markForCheck();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tabsSubscription.unsubscribe();
          this.tabLabelSubscription.unsubscribe();
          this.destroy$.next();
          this.destroy$.complete();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "updateRouterActive",
        value: function updateRouterActive() {
          if (this.router.navigated) {
            /** @type {?} */
            var index = this.findShouldActiveTabIndex();

            if (index !== this._selectedIndex) {
              this.nzSelectedIndex = index;
              this.nzSelectedIndexChange.emit(index);
            }

            this.nzHideAll = index === -1;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "findShouldActiveTabIndex",
        value: function findShouldActiveTabIndex() {
          /** @type {?} */
          var tabs = this.listOfNzTabComponent.toArray();
          /** @type {?} */

          var isActive = this.isLinkActive(this.router);
          return tabs.findIndex(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            /** @type {?} */
            var c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
          });
        }
        /**
         * @private
         * @param {?} router
         * @return {?}
         */

      }, {
        key: "isLinkActive",
        value: function isLinkActive(router) {
          var _this42 = this;

          return (
            /**
            * @param {?=} link
            * @return {?}
            */
            function (link) {
              return link ? router.isActive(link.urlTree, _this42.nzLinkExact) : false;
            }
          );
        }
      }, {
        key: "nzSelectedIndex",
        set: function set(value) {
          this.indexToSelect = value ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value, null) : null;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @return {?}
         */

      }, {
        key: "inkBarAnimated",
        get: function get() {
          return this.nzAnimated === true ||
          /** @type {?} */
          this.nzAnimated.inkBar === true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "tabPaneAnimated",
        get: function get() {
          return this.nzAnimated === true ||
          /** @type {?} */
          this.nzAnimated.tabPane === true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isAnimationDisabled",
        get: function get() {
          return this.nzAnimated === false ||
          /** @type {?} */
          this.nzAnimated.tabPane === false;
        }
      }]);

      return NzTabSetComponent;
    }();

    NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) {
      return new (t || NzTabSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], 8));
    };

    NzTabSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NzTabSetComponent,
      selectors: [["nz-tabset"]],
      contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabComponent, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzTabComponent = _t);
        }
      },
      viewQuery: function NzTabSetComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabsNavComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabsNavComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabContent = _t.first);
        }
      },
      hostVars: 22,
      hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs", true)("ant-tabs-no-animation", ctx.isAnimationDisabled)("ant-tabs-line", ctx.nzType === "line")("ant-tabs-card", ctx.nzType === "card")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-vertical", ctx.nzTabPosition === "left" || ctx.nzTabPosition === "right")("ant-tabs-large", ctx.nzSize === "large")("ant-tabs-small", ctx.nzSize === "small");
        }
      },
      inputs: {
        nzShowPagination: "nzShowPagination",
        nzAnimated: "nzAnimated",
        nzHideAll: "nzHideAll",
        nzTabPosition: "nzTabPosition",
        nzSize: "nzSize",
        nzTabBarGutter: "nzTabBarGutter",
        nzTabBarStyle: "nzTabBarStyle",
        nzType: "nzType",
        nzLinkRouter: "nzLinkRouter",
        nzLinkExact: "nzLinkExact",
        nzCanDeactivate: "nzCanDeactivate",
        nzSelectedIndex: "nzSelectedIndex",
        nzTabBarExtraContent: "nzTabBarExtraContent"
      },
      outputs: {
        nzOnNextClick: "nzOnNextClick",
        nzOnPrevClick: "nzOnPrevClick",
        nzSelectChange: "nzSelectChange",
        nzSelectedIndexChange: "nzSelectedIndexChange"
      },
      exportAs: ["nzTabset"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["role", "tablist", "tabindex", "0", 3, "nzSize", "nzTabPosition", "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]],
      template: function NzTabSetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabSetComponent_ng_container_0_Template, 6, 28, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfNzTabComponent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], NzTabsNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], NzTabLabelDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], NzTabBodyComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTabSetComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NzTabSetComponent.propDecorators = {
      listOfNzTabComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NzTabComponent]
      }],
      nzTabsNavComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [NzTabsNavComponent, {
          "static": false
        }]
      }],
      tabContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['tabContent', {
          "static": false
        }]
      }],
      nzTabBarExtraContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzShowPagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzAnimated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzHideAll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzTabPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzTabBarGutter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzTabBarStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzLinkRouter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzLinkExact: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzCanDeactivate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nzOnNextClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzOnPrevClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzSelectChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzSelectedIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      nzSelectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Boolean)], NzTabSetComponent.prototype, "nzShowPagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzAnimated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)], NzTabSetComponent.prototype, "nzSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Number)], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)], NzTabSetComponent.prototype, "nzType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzLinkExact", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[nz-tab-body]',
          exportAs: 'nzTabBody',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-container *ngIf=\"active || forceRender\">\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n    </ng-container>\n  ",
          host: {
            '[class.ant-tabs-tabpane-active]': 'active',
            '[class.ant-tabs-tabpane-inactive]': '!active'
          }
        }]
      }], function () {
        return [];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        forceRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[nz-tab-label]',
          exportAs: 'nzTabLabel',
          host: {
            '[class.ant-tabs-tab-disabled]': 'disabled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'a[nz-tab-link]',
          exportAs: 'nzTabLink'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[nz-tab]',
          exportAs: 'nzTab'
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-tab',
          exportAs: 'nzTab',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-template #titleTpl>\n      <ng-content select=\"[nz-tab-link]\"></ng-content>\n    </ng-template>\n    <ng-template #bodyTpl>\n      <ng-content></ng-content>\n    </ng-template>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        nzForceRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzDeselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['bodyTpl', {
            "static": true
          }]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['titleTpl', {
            "static": true
          }]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NzTabDirective, {
            "static": false,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        linkDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NzTabLinkDirective, {
            "static": false
          }]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzRouterIdentifier: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsInkBarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[nz-tabs-ink-bar]',
          exportAs: 'nzTabsInkBar',
          host: {
            '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
            '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        nzAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzPositionMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-tabs-nav',
          exportAs: 'nzTabsNav',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          template: "\n    <div style=\"float:right;\" *ngIf=\"nzTabBarExtraContent\" class=\"ant-tabs-extra-content\">\n      <ng-template [ngTemplateOutlet]=\"nzTabBarExtraContent\"></ng-template>\n    </div>\n    <div class=\"ant-tabs-nav-container\" [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\" #navContainerElement>\n      <span\n        class=\"ant-tabs-tab-prev\"\n        (click)=\"scrollHeader('before')\"\n        [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\"\n        [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\"\n      >\n        <span class=\"ant-tabs-tab-prev-icon\">\n          <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'left' : 'up'\" class=\"ant-tabs-tab-prev-icon-target\"></i>\n        </span>\n      </span>\n      <span\n        class=\"ant-tabs-tab-next\"\n        (click)=\"scrollHeader('after')\"\n        [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\"\n        [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\"\n      >\n        <span class=\"ant-tabs-tab-next-icon\">\n          <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'right' : 'down'\" class=\"ant-tabs-tab-next-icon-target\"></i>\n        </span>\n      </span>\n      <div class=\"ant-tabs-nav-wrap\">\n        <div class=\"ant-tabs-nav-scroll\" #scrollListElement>\n          <div class=\"ant-tabs-nav\" [class.ant-tabs-nav-animated]=\"nzAnimated\" #navListElement (cdkObserveContent)=\"onContentChanges()\">\n            <div>\n              <ng-content></ng-content>\n            </div>\n            <div\n              nz-tabs-ink-bar\n              [hidden]=\"nzHideBar\"\n              [nzAnimated]=\"nzAnimated\"\n              [nzPositionMode]=\"nzPositionMode\"\n              style=\"display: block;\"\n            ></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
          host: {
            '[class.ant-tabs-bar]': 'true',
            '[class.ant-tabs-card-bar]': "nzType === 'card'",
            '[class.ant-tabs-top-bar]': "nzTabPosition === 'top'",
            '[class.ant-tabs-bottom-bar]': "nzTabPosition === 'bottom'",
            '[class.ant-tabs-left-bar]': "nzTabPosition === 'left'",
            '[class.ant-tabs-right-bar]': "nzTabPosition === 'right'",
            '[class.ant-tabs-small-bar]': "nzSize === 'small'",
            '[class.ant-tabs-default-bar]': "nzSize === 'default'",
            '[class.ant-tabs-large-bar]': "nzSize === 'large'"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        nzOnNextClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzOnPrevClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzHideBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzShowPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzPositionMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfNzTabLabelDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzTabLabelDirective]
        }],
        nzTabsInkBarDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzTabsInkBarDirective, {
            "static": true
          }]
        }],
        navContainerElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navContainerElement', {
            "static": true
          }]
        }],
        navListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navListElement', {
            "static": true
          }]
        }],
        scrollListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['scrollListElement', {
            "static": true
          }]
        }],
        nzTabBarExtraContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-tabset',
          exportAs: 'nzTabset',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-container *ngIf=\"listOfNzTabComponent\">\n      <nz-tabs-nav\n        role=\"tablist\"\n        tabindex=\"0\"\n        [nzSize]=\"nzSize\"\n        [nzTabPosition]=\"nzTabPosition\"\n        [nzType]=\"nzType\"\n        [nzShowPagination]=\"nzShowPagination\"\n        [nzPositionMode]=\"tabPositionMode\"\n        [nzAnimated]=\"inkBarAnimated\"\n        [ngStyle]=\"nzTabBarStyle\"\n        [nzHideBar]=\"nzHideAll\"\n        [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\n        [selectedIndex]=\"nzSelectedIndex!\"\n        (nzOnNextClick)=\"nzOnNextClick.emit()\"\n        (nzOnPrevClick)=\"nzOnPrevClick.emit()\"\n      >\n        <div\n          nz-tab-label\n          role=\"tab\"\n          [style.margin-right.px]=\"nzTabBarGutter\"\n          [class.ant-tabs-tab-active]=\"nzSelectedIndex == i && !nzHideAll\"\n          [disabled]=\"tab.nzDisabled\"\n          (click)=\"clickLabel(i, tab.nzDisabled)\"\n          *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\n        >\n          <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\n        </div>\n      </nz-tabs-nav>\n      <div\n        #tabContent\n        class=\"ant-tabs-content\"\n        [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\n        [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\n        [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\n        [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\n        [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n        [class.ant-tabs-card-content]=\"nzType === 'card'\"\n        [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n        [style.margin-left.%]=\"tabPositionMode === 'horizontal' && tabPaneAnimated && -(nzSelectedIndex || 0) * 100\"\n      >\n        <div\n          nz-tab-body\n          class=\"ant-tabs-tabpane\"\n          *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\n          [active]=\"nzSelectedIndex == i && !nzHideAll\"\n          [forceRender]=\"tab.nzForceRender\"\n          [content]=\"tab.template || tab.content\"\n        ></div>\n      </div>\n    </ng-container>\n  ",
          host: {
            '[class.ant-tabs]': "true",
            '[class.ant-tabs-no-animation]': "isAnimationDisabled",
            '[class.ant-tabs-line]': "nzType === 'line'",
            '[class.ant-tabs-card]': "nzType === 'card'",
            '[class.ant-tabs-top]': "nzTabPosition === 'top'",
            '[class.ant-tabs-bottom]': "nzTabPosition === 'bottom'",
            '[class.ant-tabs-left]': "nzTabPosition === 'left'",
            '[class.ant-tabs-right]': "nzTabPosition === 'right'",
            '[class.ant-tabs-vertical]': "nzTabPosition === 'left' || nzTabPosition === 'right'",
            '[class.ant-tabs-large]': "nzSize === 'large'",
            '[class.ant-tabs-small]': "nzSize === 'small'"
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        nzShowPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzHideAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabBarGutter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabBarStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzLinkRouter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzLinkExact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCanDeactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOnNextClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzOnPrevClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelectChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfNzTabComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzTabComponent]
        }],
        nzTabsNavComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzTabsNavComponent, {
            "static": false
          }]
        }],
        tabContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['tabContent', {
            "static": false
          }]
        }],
        nzTabBarExtraContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tabs.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTabsModule = function NzTabsModule() {
      _classCallCheck(this, NzTabsModule);
    };

    NzTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NzTabsModule
    });
    NzTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NzTabsModule_Factory(t) {
        return new (t || NzTabsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTabsModule, {
        declarations: function declarations() {
          return [NzTabComponent, NzTabDirective, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent, NzTabLinkDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]];
        },
        exports: function exports() {
          return [NzTabComponent, NzTabDirective, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent, NzTabLinkDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NzTabComponent, NzTabDirective, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent, NzTabLinkDirective],
          exports: [NzTabComponent, NzTabDirective, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent, NzTabLinkDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-tabs.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-tabs.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
    \*******************************************************************************/

  /*! exports provided: NzTagComponent, NzTagModule */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdTagJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTagComponent", function () {
      return NzTagComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTagModule", function () {
      return NzTagModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/core/animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
    /* harmony import */


    var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/logger */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: tag.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function NzTagComponent_i_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1.closeTag($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"];

    var NzTagComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function NzTagComponent(renderer, elementRef) {
        _classCallCheck(this, NzTagComponent);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.presetColor = false;
        this.cacheClassName = null;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @private
       * @param {?=} color
       * @return {?}
       */


      _createClass(NzTagComponent, [{
        key: "isPresetColor",
        value: function isPresetColor(color) {
          if (!color) {
            return false;
          }

          return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color) || /^(success|processing|error|default|warning)$/.test(color);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "updateClassMap",
        value: function updateClassMap() {
          this.presetColor = this.isPresetColor(this.nzColor);

          if (this.cacheClassName) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.cacheClassName);
          }

          if (this.presetColor) {
            this.cacheClassName = "ant-tag-".concat(this.nzColor);
            this.renderer.addClass(this.elementRef.nativeElement, this.cacheClassName);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateCheckedStatus",
        value: function updateCheckedStatus() {
          if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
          }
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "closeTag",
        value: function closeTag(e) {
          this.nzOnClose.emit(e);

          if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
          }
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "afterAnimation",
        value: function afterAnimation(e) {
          if (e.toState === 'void') {
            this.nzAfterClose.emit();

            if (this.nzAfterClose.observers.length) {
              Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warnDeprecation"])("'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.");
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateClassMap();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.updateClassMap();
        }
      }]);

      return NzTagComponent;
    }();

    NzTagComponent.ɵfac = function NzTagComponent_Factory(t) {
      return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    NzTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzTagComponent,
      selectors: [["nz-tag"]],
      hostVars: 12,
      hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcomponentHostSyntheticListener"]("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) {
            return ctx.afterAnimation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() {
            return ctx.updateCheckedStatus();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.presetColor ? null : ctx.nzColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tag", true)("ant-tag-has-color", ctx.nzColor && !ctx.presetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked);
        }
      },
      inputs: {
        nzMode: "nzMode",
        nzChecked: "nzChecked",
        nzNoAnimation: "nzNoAnimation",
        nzColor: "nzColor"
      },
      outputs: {
        nzAfterClose: "nzAfterClose",
        nzOnClose: "nzOnClose",
        nzCheckedChange: "nzCheckedChange"
      },
      exportAs: ["nzTag"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]],
      template: function NzTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]],
      encapsulation: 2,
      data: {
        animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    NzTagComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    NzTagComponent.propDecorators = {
      nzMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzNoAnimation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzAfterClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      nzOnClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      nzCheckedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTagComponent.prototype, "nzChecked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTagComponent.prototype, "nzNoAnimation", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-tag',
          exportAs: 'nzTag',
          preserveWhitespaces: false,
          animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]],
          template: "\n    <ng-content></ng-content>\n    <i nz-icon nzType=\"close\" *ngIf=\"nzMode === 'closeable'\" tabindex=\"-1\" (click)=\"closeTag($event)\"></i>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          host: {
            '[@fadeMotion]': '',
            '[@.disabled]': 'nzNoAnimation',
            '[style.background-color]': 'presetColor ? null : nzColor',
            '[class.ant-tag]': "true",
            '[class.ant-tag-has-color]': "nzColor && !presetColor",
            '[class.ant-tag-checkable]': "nzMode === 'checkable'",
            '[class.ant-tag-checkable-checked]': "nzChecked",
            '(click)': 'updateCheckedStatus()',
            '(@fadeMotion.done)': 'afterAnimation($event)'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        nzMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzNoAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzAfterClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        nzOnClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        nzColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tag.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTagModule = function NzTagModule() {
      _classCallCheck(this, NzTagModule);
    };

    NzTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NzTagModule
    });
    NzTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NzTagModule_Factory(t) {
        return new (t || NzTagModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzTagModule, {
        declarations: function declarations() {
          return [NzTagComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]];
        },
        exports: function exports() {
          return [NzTagComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]],
          declarations: [NzTagComponent],
          exports: [NzTagComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-tag.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-tag.js.map

    /***/

  },

  /***/
  "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesResizeObserverPolyfillDistResizeObserverEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */

    /* eslint-disable require-jsdoc, valid-jsdoc */


    var MapShim = function () {
      if (typeof Map !== 'undefined') {
        return Map;
      }
      /**
       * Returns index in provided array that matches the specified key.
       *
       * @param {Array<Array>} arr
       * @param {*} key
       * @returns {number}
       */


      function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
          if (entry[0] === key) {
            result = index;
            return true;
          }

          return false;
        });
        return result;
      }

      return (
        /** @class */
        function () {
          function class_1() {
            this.__entries__ = [];
          }

          Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function get() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          /**
           * @param {*} key
           * @returns {*}
           */

          class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
          };
          /**
           * @param {*} key
           * @param {*} value
           * @returns {void}
           */


          class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
              this.__entries__[index][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype["delete"] = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
              entries.splice(index, 1);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
          };
          /**
           * @returns {void}
           */


          class_1.prototype.clear = function () {
            this.__entries__.splice(0);
          };
          /**
           * @param {Function} callback
           * @param {*} [ctx=null]
           * @returns {void}
           */


          class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }

            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };

          return class_1;
        }()
      );
    }();
    /**
     * Detects whether window and document objects are available in current environment.
     */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

    var global$1 = function () {
      if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
      }

      if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
      }

      if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
      } // eslint-disable-next-line no-new-func


      return Function('return this')();
    }();
    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */


    var requestAnimationFrame$1 = function () {
      if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
      }

      return function (callback) {
        return setTimeout(function () {
          return callback(Date.now());
        }, 1000 / 60);
      };
    }(); // Defines minimum timeout before adding a trailing call.


    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */

    function throttle(callback, delay) {
      var leadingCall = false,
          trailingCall = false,
          lastCallTime = 0;
      /**
       * Invokes the original callback function and schedules new invocation if
       * the "proxy" was called during current request.
       *
       * @returns {void}
       */

      function resolvePending() {
        if (leadingCall) {
          leadingCall = false;
          callback();
        }

        if (trailingCall) {
          proxy();
        }
      }
      /**
       * Callback invoked after the specified delay. It will further postpone
       * invocation of the original function delegating it to the
       * requestAnimationFrame.
       *
       * @returns {void}
       */


      function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
      }
      /**
       * Schedules invocation of the original function.
       *
       * @returns {void}
       */


      function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
          // Reject immediately following calls.
          if (timeStamp - lastCallTime < trailingTimeout) {
            return;
          } // Schedule new call to be in invoked when the pending one is resolved.
          // This is important for "transitions" which never actually start
          // immediately so there is a chance that we might miss one if change
          // happens amids the pending invocation.


          trailingCall = true;
        } else {
          leadingCall = true;
          trailingCall = false;
          setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
      }

      return proxy;
    } // Minimum delay before invoking the update of observers.


    var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.

    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */

    var ResizeObserverController =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserverController.
       *
       * @private
       */
      function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */

        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */

        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */

        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      /**
       * Adds observer to observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be added.
       * @returns {void}
       */


      ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        } // Add listeners if they haven't been added yet.


        if (!this.connected_) {
          this.connect_();
        }
      };
      /**
       * Removes observer from observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be removed.
       * @returns {void}
       */


      ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer); // Remove observer if it's present in registry.

        if (~index) {
          observers.splice(index, 1);
        } // Remove listeners if controller has no connected observers.


        if (!observers.length && this.connected_) {
          this.disconnect_();
        }
      };
      /**
       * Invokes the update of observers. It will continue running updates insofar
       * it detects changes.
       *
       * @returns {void}
       */


      ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.

        if (changesDetected) {
          this.refresh();
        }
      };
      /**
       * Updates every observer from observers list and notifies them of queued
       * entries.
       *
       * @private
       * @returns {boolean} Returns "true" if any observer has detected changes in
       *      dimensions of it's elements.
       */


      ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
          return observer.gatherActive(), observer.hasActive();
        }); // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.

        activeObservers.forEach(function (observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      /**
       * Initializes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
          return;
        } // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.


        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener('DOMSubtreeModified', this.refresh);
          this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
      };
      /**
       * Removes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
          return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
          document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      /**
       * "Transitionend" event handler.
       *
       * @private
       * @param {TransitionEvent} event
       * @returns {void}
       */


      ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName,
            propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

        var isReflowProperty = transitionKeys.some(function (key) {
          return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
          this.refresh();
        }
      };
      /**
       * Returns instance of the ResizeObserverController.
       *
       * @returns {ResizeObserverController}
       */


      ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
      };
      /**
       * Holds reference to the controller's instance.
       *
       * @private {ResizeObserverController}
       */


      ResizeObserverController.instance_ = null;
      return ResizeObserverController;
    }();
    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */


    var defineConfigurable = function defineConfigurable(target, props) {
      for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
          value: props[key],
          enumerable: false,
          writable: false,
          configurable: true
        });
      }

      return target;
    };
    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */


    var getWindowOf = function getWindowOf(target) {
      // Assume that the element is an instance of Node, which means that it
      // has the "ownerDocument" property from which we can retrieve a
      // corresponding global object.
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
      // provided element.

      return ownerGlobal || global$1;
    }; // Placeholder of an empty content rectangle.


    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */

    function toFloat(value) {
      return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */


    function getBordersSize(styles) {
      var positions = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
      }

      return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
      }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */


    function getPaddings(styles) {
      var positions = ['top', 'right', 'bottom', 'left'];
      var paddings = {};

      for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
      }

      return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */


    function getSVGContentRect(target) {
      var bbox = target.getBBox();
      return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */


    function getHTMLElementContentRect(target) {
      // Client width & height properties can't be
      // used exclusively as they provide rounded values.
      var clientWidth = target.clientWidth,
          clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
      // detached elements. Though elements with width & height properties less
      // than 0.5 will be discarded as well.
      //
      // Without it we would need to implement separate methods for each of
      // those cases and it's not possible to perform a precise and performance
      // effective test for hidden elements. E.g. even jQuery's ':visible' filter
      // gives wrong results for elements with width & height less than 0.5.

      if (!clientWidth && !clientHeight) {
        return emptyRect;
      }

      var styles = getWindowOf(target).getComputedStyle(target);
      var paddings = getPaddings(styles);
      var horizPad = paddings.left + paddings.right;
      var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
      // only dimensions available to JS that contain non-rounded values. It could
      // be possible to utilize the getBoundingClientRect if only it's data wasn't
      // affected by CSS transformations let alone paddings, borders and scroll bars.

      var width = toFloat(styles.width),
          height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
      // model is applied (except for IE).

      if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
          width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
          height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
      } // Following steps can't be applied to the document's root element as its
      // client[Width/Height] properties represent viewport area of the window.
      // Besides, it's as well not necessary as the <html> itself neither has
      // rendered scroll bars nor it can be clipped.


      if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.

        if (Math.abs(vertScrollbar) !== 1) {
          width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
          height -= horizScrollbar;
        }
      }

      return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    var isSVGGraphicsElement = function () {
      // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
      // interface.
      if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) {
          return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
      } // If it's so, then check that element is at least an instance of the
      // SVGElement and that it has the "getBBox" method.
      // eslint-disable-next-line no-extra-parens


      return function (target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
      };
    }();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    function isDocumentElement(target) {
      return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */


    function getContentRect(target) {
      if (!isBrowser) {
        return emptyRect;
      }

      if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
      }

      return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */


    function createReadOnlyRect(_a) {
      var x = _a.x,
          y = _a.y,
          width = _a.width,
          height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

      var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
      var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

      defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
      });
      return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */


    function createRectInit(x, y, width, height) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }
    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */


    var ResizeObservation =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObservation.
       *
       * @param {Element} target - Element to be observed.
       */
      function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */

        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */

        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      /**
       * Updates content rectangle and tells whether it's width or height properties
       * have changed since the last broadcast.
       *
       * @returns {boolean}
       */


      ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      /**
       * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
       * from the corresponding properties of the last observed content rectangle.
       *
       * @returns {DOMRectInit} Last observed content rectangle.
       */


      ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };

      return ResizeObservation;
    }();

    var ResizeObserverEntry =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObserverEntry.
       *
       * @param {Element} target - Element that is being observed.
       * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
       */
      function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.

        defineConfigurable(this, {
          target: target,
          contentRect: contentRect
        });
      }

      return ResizeObserverEntry;
    }();

    var ResizeObserverSPI =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback function that is invoked
       *      when one of the observed elements changes it's content dimensions.
       * @param {ResizeObserverController} controller - Controller instance which
       *      is responsible for the updates of observer.
       * @param {ResizeObserver} callbackCtx - Reference to the public
       *      ResizeObserver instance which will be passed to callback function.
       */
      function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */

        this.observations_ = new MapShim();

        if (typeof callback !== 'function') {
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      /**
       * Starts observing provided element.
       *
       * @param {Element} target - Element to be observed.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is already being observed.

        if (observations.has(target)) {
          return;
        }

        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this); // Force the update of observations.

        this.controller_.refresh();
      };
      /**
       * Stops observing provided element.
       *
       * @param {Element} target - Element to stop observing.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is not being observed.

        if (!observations.has(target)) {
          return;
        }

        observations["delete"](target);

        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      /**
       * Stops observing all elements.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      /**
       * Collects observation instances the associated element of which has changed
       * it's content rectangle.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;

        this.clearActive();
        this.observations_.forEach(function (observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      /**
       * Invokes initial callback function with a list of ResizeObserverEntry
       * instances collected from active resize observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
          return;
        }

        var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

        var entries = this.activeObservations_.map(function (observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      /**
       * Clears the collection of active observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      };
      /**
       * Tells whether observer has active observations.
       *
       * @returns {boolean}
       */


      ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      };

      return ResizeObserverSPI;
    }(); // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.


    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */

    var ResizeObserver =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback that is invoked when
       *      dimensions of the observed elements change.
       */
      function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
          throw new TypeError('Cannot call a class as a function.');
        }

        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        }

        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }

      return ResizeObserver;
    }(); // Expose public methods of ResizeObserver.


    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
      ResizeObserver.prototype[method] = function () {
        var _a;

        return (_a = observers.get(this))[method].apply(_a, arguments);
      };
    });

    var index = function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
      }

      return ResizeObserver;
    }();
    /* harmony default export */


    __webpack_exports__["default"] = index;
    /***/
  },

  /***/
  "./src/app/products/components/product-box-tab/product-box-tab.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/products/components/product-box-tab/product-box-tab.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductBoxTabComponent */

  /***/
  function srcAppProductsComponentsProductBoxTabProductBoxTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductBoxTabComponent", function () {
      return ProductBoxTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");

    var ProductBoxTabComponent = /*#__PURE__*/function () {
      function ProductBoxTabComponent() {
        _classCallCheck(this, ProductBoxTabComponent);
      }

      _createClass(ProductBoxTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductBoxTabComponent;
    }();

    ProductBoxTabComponent.ɵfac = function ProductBoxTabComponent_Factory(t) {
      return new (t || ProductBoxTabComponent)();
    };

    ProductBoxTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductBoxTabComponent,
      selectors: [["product-box-tab"]],
      decls: 21,
      vars: 0,
      consts: [["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzSpan", "24"], [1, "property-name"], [1, "property-value"]],
      template: function ProductBoxTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Model Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MC001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Model Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Diameter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2mm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5mm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"]],
      styles: [".property-name[_ngcontent-%COMP%] {\n  color: #000000;\n  width: 50%;\n  float: left;\n  padding: 0 5px;\n  line-height: 38px;\n}\n\n.property-value[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  line-height: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtYm94LXRhYi9wcm9kdWN0LWJveC10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1ib3gtdGFiL3Byb2R1Y3QtYm94LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWJveC10YWIvcHJvZHVjdC1ib3gtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LW5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLnByb3BlcnR5LXZhbHVlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuIiwiLnByb3BlcnR5LW5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLnByb3BlcnR5LXZhbHVlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductBoxTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-box-tab',
          templateUrl: './product-box-tab.component.html',
          styleUrls: ['./product-box-tab.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-care-tab/product-care-tab.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/products/components/product-care-tab/product-care-tab.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ProductCareTabComponent */

  /***/
  function srcAppProductsComponentsProductCareTabProductCareTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCareTabComponent", function () {
      return ProductCareTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductCareTabComponent = /*#__PURE__*/function () {
      function ProductCareTabComponent() {
        _classCallCheck(this, ProductCareTabComponent);
      }

      _createClass(ProductCareTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductCareTabComponent;
    }();

    ProductCareTabComponent.ɵfac = function ProductCareTabComponent_Factory(t) {
      return new (t || ProductCareTabComponent)();
    };

    ProductCareTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCareTabComponent,
      selectors: [["product-care-tab"]],
      decls: 19,
      vars: 0,
      template: function ProductCareTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Periodic dusting / wiping off is necessary especially for outdoor furniture. Metal furniture can develop rust if not cleaned regularly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Metal parts can be cleaned with a mild soap solution and soft cloth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Avoid sitting on the arms of the sofas and chairs as it exerts excess pressure and can cause premature wear and distortion of the padding and fabric.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All fabrics snag easily and can be damaged by sharp edged toys, buckles, jewellery and domestic pets. Snags, when they do occur, should be trimmed using scissors. Under no circumstances should you attempt to pull it out.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Direct sunlight over a prolonged period of time can cause fading and/or deterioration of fabric. When planning your room, arrange your furniture so that it is protected from sunlight. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Clean your upholstery at least once a week with a soft brush or vacuum cleaner as accumulated dirt will accelerate wear and dull the colours. It is advisable to have your furniture cleaned regularly by professional upholstery cleaner as different fibres and fabric constructions require special treatment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "For sofas with loose-fitted sofa and cushions, we recommend removing and dry cleaning the same as required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Strictly avoid using bleach when washing your upholstery.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Severe spills and stains should only be removed by professional upholstery cleaners.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 32px;\n  list-style: circle;\n  color: #222831;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZS10YWIvcHJvZHVjdC1jYXJlLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWNhcmUtdGFiL3Byb2R1Y3QtY2FyZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWNhcmUtdGFiL3Byb2R1Y3QtY2FyZS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICAgIGNvbG9yOiAjMjIyODMxO1xuICB9XG59XG4iLCJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBjb2xvcjogIzIyMjgzMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCareTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-care-tab',
          templateUrl: './product-care-tab.component.html',
          styleUrls: ['./product-care-tab.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-deatil/product-deatil.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/products/components/product-deatil/product-deatil.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProductDeatilComponent */

  /***/
  function srcAppProductsComponentsProductDeatilProductDeatilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDeatilComponent", function () {
      return ProductDeatilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/tag */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/radio */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");

    function ProductDeatilComponent_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductDeatilComponent = /*#__PURE__*/function () {
      function ProductDeatilComponent() {
        _classCallCheck(this, ProductDeatilComponent);

        this.size = '10';
      }

      _createClass(ProductDeatilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductDeatilComponent;
    }();

    ProductDeatilComponent.ɵfac = function ProductDeatilComponent_Factory(t) {
      return new (t || ProductDeatilComponent)();
    };

    ProductDeatilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDeatilComponent,
      selectors: [["product-deatil"]],
      decls: 45,
      vars: 2,
      consts: [["nz-row", "", "nzJustify", "center"], [1, "rating"], [3, "nzColor"], ["nz-icon", "", "nzType", "star", "nzTheme", "outline"], [1, "price"], [1, "current-price"], [1, "original-price"], [1, "discount-price"], [1, "size"], ["nzButtonStyle", "solid"], ["nz-radio-button", "", "nzValue", "10"], ["nz-radio-button", "", "nzValue", "12"], ["nz-radio-button", "", "nzValue", "14"], [1, "location"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Enter Delivery Pincode"], ["suffixButton", ""], [2, "display", "block"], [1, "action"], ["nz-button", "", "nzSize", "large", "nzType", "primary"], ["nz-icon", "", "nzType", "shopping-cart", "nzTheme", "outline"], ["nz-button", "", "nzSize", "large", "nzType", "primary", "nzDanger", ""], ["nz-icon", "", "nzType", "shop", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", "nzSearch", ""]],
      template: function ProductDeatilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tag", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 4.3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 2,55,053 Ratings & 31,694 Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u20B924,794");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(\u20B927,499)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "10% off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Size (Inches)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-radio-group", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-input-group", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProductDeatilComponent_ng_template_31_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Usually delivered in 3-4 days?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Enter pincode for exact delivery dates/charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Add To Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Buy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#1b6ca8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioButtonDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"]],
      styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nsection[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\nsection[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0 14px;\n  text-decoration: line-through;\n}\nsection[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .discount-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0 14px;\n  color: #0779e4;\n}\nsection[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  color: #222831;\n  padding: 14px 0;\n}\nsection[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\nsection[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%] {\n  width: 90%;\n  border: none;\n  border-bottom: 2px #0779e4 solid;\n  margin-bottom: 8px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%] {\n  border: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%] {\n  background: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]:focus, section[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]:hover {\n  border: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] {\n  background: none;\n  color: #0779e4;\n  border: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   span.ant-input-group-addon.ng-star-inserted[_ngcontent-%COMP%] {\n  background: none;\n}\nsection[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\nsection[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 14px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVhdGlsL3Byb2R1Y3QtZGVhdGlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVhdGlsL3Byb2R1Y3QtZGVhdGlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBRENJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDTjtBREVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FESUU7RUFDRSxnQkFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0FDRE47QURJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FER007RUFDRSxZQUFBO0FDRFI7QURJTTtFQUNFLGdCQUFBO0FDRlI7QURLTTs7RUFFRSxZQUFBO0FDSFI7QURNTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNKUjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFVFO0VBQ0UsZ0JBQUE7QUNSSjtBRFNJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVhdGlsL3Byb2R1Y3QtZGVhdGlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIC5wcmljZSB7XG4gICAgLmN1cnJlbnQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gICAgLm9yaWdpbmFsLXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICAuZGlzY291bnQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgICAgY29sb3I6ICMwNzc5ZTQ7XG4gICAgfVxuICB9XG4gIC5yYXRpbmcge1xuICAgIGNvbG9yOiAjMjIyODMxO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgfVxuXG4gIC5zaXplIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2NhdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0LXNlYXJjaCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICMwNzc5ZTQgc29saWQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAuYW50LWlucHV0IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgICAubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hbnQtaW5wdXQ6Zm9jdXMsXG4gICAgICAuYW50LWlucHV0OmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYW50LWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDc3OWU0O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3Bhbi5hbnQtaW5wdXQtZ3JvdXAtYWRkb24ubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICAgIHdpZHRoOjIwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5zZWN0aW9uIC5wcmljZSAuY3VycmVudC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbnNlY3Rpb24gLnByaWNlIC5vcmlnaW5hbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbnNlY3Rpb24gLnByaWNlIC5kaXNjb3VudC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBjb2xvcjogIzA3NzllNDtcbn1cbnNlY3Rpb24gLnJhdGluZyB7XG4gIGNvbG9yOiAjMjIyODMxO1xuICBwYWRkaW5nOiAxNHB4IDA7XG59XG5zZWN0aW9uIC5zaXplIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbnNlY3Rpb24gLnNpemUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5zZWN0aW9uIC5sb2NhdGlvbiAuYW50LWlucHV0LXNlYXJjaCB7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICMwNzc5ZTQgc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIC5hbnQtaW5wdXQtc2VhcmNoIC5hbnQtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5zZWN0aW9uIC5sb2NhdGlvbiAuYW50LWlucHV0LXNlYXJjaCAubmctc3Rhci1pbnNlcnRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5zZWN0aW9uIC5sb2NhdGlvbiAuYW50LWlucHV0LXNlYXJjaCAuYW50LWlucHV0OmZvY3VzLFxuc2VjdGlvbiAubG9jYXRpb24gLmFudC1pbnB1dC1zZWFyY2ggLmFudC1pbnB1dDpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIC5hbnQtaW5wdXQtc2VhcmNoIC5hbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwNzc5ZTQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIHNwYW4uYW50LWlucHV0LWdyb3VwLWFkZG9uLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuc2VjdGlvbiAuYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbnNlY3Rpb24gLmFjdGlvbiBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDeatilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-deatil',
          templateUrl: './product-deatil.component.html',
          styleUrls: ['./product-deatil.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-description/product-description.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/products/components/product-description/product-description.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ProductDescriptionComponent */

  /***/
  function srcAppProductsComponentsProductDescriptionProductDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function () {
      return ProductDescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/tabs */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
    /* harmony import */


    var _product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product-feature-tab/product-feature-tab.component */
    "./src/app/products/components/product-feature-tab/product-feature-tab.component.ts");
    /* harmony import */


    var _product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product-property-tab/product-property-tab.component */
    "./src/app/products/components/product-property-tab/product-property-tab.component.ts");
    /* harmony import */


    var _product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-box-tab/product-box-tab.component */
    "./src/app/products/components/product-box-tab/product-box-tab.component.ts");
    /* harmony import */


    var _product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../product-care-tab/product-care-tab.component */
    "./src/app/products/components/product-care-tab/product-care-tab.component.ts");
    /* harmony import */


    var _product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product-warranty-tab/product-warranty-tab.component */
    "./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts");

    var ProductDescriptionComponent = /*#__PURE__*/function () {
      function ProductDescriptionComponent() {
        _classCallCheck(this, ProductDescriptionComponent);
      }

      _createClass(ProductDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductDescriptionComponent;
    }();

    ProductDescriptionComponent.ɵfac = function ProductDescriptionComponent_Factory(t) {
      return new (t || ProductDescriptionComponent)();
    };

    ProductDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDescriptionComponent,
      selectors: [["product-description"]],
      decls: 12,
      vars: 0,
      consts: [["nzTitle", "Features"], ["nzTitle", "Properties"], ["nzTitle", "In Box"], ["nzTitle", "Care Instructions"], ["nzTitle", "Warranty"]],
      template: function ProductDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tab", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "product-feature-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "product-property-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "product-box-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "product-care-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "product-warranty-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"], _product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_2__["ProductFeatureTabComponent"], _product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_3__["ProductPropertyTabComponent"], _product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_4__["ProductBoxTabComponent"], _product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_5__["ProductCareTabComponent"], _product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_6__["ProductWarrantyTabComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 48px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVzY3JpcHRpb24vcHJvZHVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWRlc2NyaXB0aW9uL3Byb2R1Y3QtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXNjcmlwdGlvbi9wcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjRweCA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInNlY3Rpb24ge1xuICBwYWRkaW5nOiAyNHB4IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-description',
          templateUrl: './product-description.component.html',
          styleUrls: ['./product-description.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-dimension/product-dimension.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/products/components/product-dimension/product-dimension.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductDimensionComponent */

  /***/
  function srcAppProductsComponentsProductDimensionProductDimensionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDimensionComponent", function () {
      return ProductDimensionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/divider */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");

    function ProductDimensionComponent_8_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", slide_r3.id)("src", slide_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductDimensionComponent_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDimensionComponent_8_ng_template_0_Template, 2, 2, "ng-template", 7);
      }

      if (rf & 2) {
        var slide_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r3.id);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active-slide": a0
      };
    };

    function ProductDimensionComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDimensionComponent_div_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var slide_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          return _r0.to(slide_r6.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r6 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, slide_r6.id === ctx_r2.activeDimensionSlide))("src", slide_r6.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProductDimensionComponent = /*#__PURE__*/function () {
      function ProductDimensionComponent() {
        _classCallCheck(this, ProductDimensionComponent);

        this.slides = [{
          id: 'dimension-1',
          image: 'assets/bronze_uruli/1.png',
          thumbnail: 'assets/bronze_uruli/1.png',
          type: 'image'
        }, {
          id: 'dimension-2',
          image: 'assets/bronze_uruli/2.png',
          thumbnail: 'assets/bronze_uruli/2.png',
          type: 'image'
        }];
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: false,
          lazyLoad: true,
          navSpeed: 700,
          navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: true
        };
      }

      _createClass(ProductDimensionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getData",
        value: function getData(data) {
          this.activeDimensionSlide = data.slides[0].id;
        }
      }]);

      return ProductDimensionComponent;
    }();

    ProductDimensionComponent.ɵfac = function ProductDimensionComponent_Factory(t) {
      return new (t || ProductDimensionComponent)();
    };

    ProductDimensionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDimensionComponent,
      selectors: [["product-dimension"]],
      decls: 11,
      vars: 3,
      consts: [[1, "section-header"], ["nz-row", "", "nzJustify", "center"], ["nz-col", "", "nzXs", "18", "nzSm", "18", "nzMd", "18", "nzLg", "18", "nzXl", "18"], [3, "options", "changed"], ["owlDimension", ""], [4, "ngFor", "ngForOf"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "2", "nzXl", "2", 3, "click", 4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], ["height", "300px", 3, "alt", "src"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "2", "nzXl", "2", 3, "click"], ["alt", "example", 1, "thumbnail", 3, "ngClass", "src"]],
      template: function ProductDimensionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Dimensions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "owl-carousel-o", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ProductDimensionComponent_Template_owl_carousel_o_changed_6_listener($event) {
            return ctx.getData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDimensionComponent_8_Template, 1, 1, undefined, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDimensionComponent_div_10_Template, 3, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__["NzDividerComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 48px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  margin: 0 auto;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.thumbnail[_ngcontent-%COMP%]:hover, .active-slide[_ngcontent-%COMP%] {\n  border: 1px #092532 solid;\n  padding: 2px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGltZW5zaW9uL3Byb2R1Y3QtZGltZW5zaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGltZW5zaW9uL3Byb2R1Y3QtZGltZW5zaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFTTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FSO0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kaW1lbnNpb24vcHJvZHVjdC1kaW1lbnNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgcGFkZGluZzogMjRweCA0OHB4O1xuXG4gIC5hbnQtY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAuYW50LWNhcmQtYm9keSB7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aHVtYm5haWwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4udGh1bWJuYWlsOmhvdmVyLFxuLmFjdGl2ZS1zbGlkZSB7XG4gIGJvcmRlcjogMXB4ICMwOTI1MzIgc29saWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcbn1cbnNlY3Rpb24gLmFudC1jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuc2VjdGlvbiAuYW50LWNhcmQgLmFudC1jYXJkLWJvZHkgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLnRodW1ibmFpbDpob3Zlcixcbi5hY3RpdmUtc2xpZGUge1xuICBib3JkZXI6IDFweCAjMDkyNTMyIHNvbGlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDimensionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-dimension',
          templateUrl: './product-dimension.component.html',
          styleUrls: ['./product-dimension.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-feature-tab/product-feature-tab.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/products/components/product-feature-tab/product-feature-tab.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ProductFeatureTabComponent */

  /***/
  function srcAppProductsComponentsProductFeatureTabProductFeatureTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFeatureTabComponent", function () {
      return ProductFeatureTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductFeatureTabComponent = /*#__PURE__*/function () {
      function ProductFeatureTabComponent() {
        _classCallCheck(this, ProductFeatureTabComponent);
      }

      _createClass(ProductFeatureTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductFeatureTabComponent;
    }();

    ProductFeatureTabComponent.ɵfac = function ProductFeatureTabComponent_Factory(t) {
      return new (t || ProductFeatureTabComponent)();
    };

    ProductFeatureTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFeatureTabComponent,
      selectors: [["product-feature-tab"]],
      decls: 15,
      vars: 0,
      template: function ProductFeatureTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An immensely comfortable 3 seater sofa bed that can sleep 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The fabric has all the softness of suede without the maintenance concerns ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The perfect piece for your lounge or guest room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Transform easily from a sofa to a bed and back with the mechanical ratchet system that holds the sofa back in any of 3 positions (Vertical, Inclined, Flat) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please refer to the slideshow for detailed dimensions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A high density foam mattress paired with a steel base");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Indoor use only");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 32px;\n  list-style: circle;\n  color: #222831;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZmVhdHVyZS10YWIvcHJvZHVjdC1mZWF0dXJlLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWZlYXR1cmUtdGFiL3Byb2R1Y3QtZmVhdHVyZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWZlYXR1cmUtdGFiL3Byb2R1Y3QtZmVhdHVyZS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICAgIGNvbG9yOiAjMjIyODMxO1xuICB9XG59XG4iLCJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBjb2xvcjogIzIyMjgzMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFeatureTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-feature-tab',
          templateUrl: './product-feature-tab.component.html',
          styleUrls: ['./product-feature-tab.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-property-tab/product-property-tab.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/products/components/product-property-tab/product-property-tab.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ProductPropertyTabComponent */

  /***/
  function srcAppProductsComponentsProductPropertyTabProductPropertyTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPropertyTabComponent", function () {
      return ProductPropertyTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");

    var ProductPropertyTabComponent = /*#__PURE__*/function () {
      function ProductPropertyTabComponent() {
        _classCallCheck(this, ProductPropertyTabComponent);
      }

      _createClass(ProductPropertyTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductPropertyTabComponent;
    }();

    ProductPropertyTabComponent.ɵfac = function ProductPropertyTabComponent_Factory(t) {
      return new (t || ProductPropertyTabComponent)();
    };

    ProductPropertyTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductPropertyTabComponent,
      selectors: [["product-property-tab"]],
      decls: 71,
      vars: 0,
      consts: [["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzMd", "8", "nzLg", "8", "nzXl", "8"], [1, "property-name"], [1, "property-value"]],
      template: function ProductPropertyTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Model Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MC001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Model Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Diameter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2mm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5mm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2mm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Depth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2mm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "500g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "White");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Tawa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sub Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Crepe Pan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Capacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2l");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Copper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Induction Bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lid Included");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"]],
      styles: [".property-name[_ngcontent-%COMP%] {\n  color: #000000;\n  width: 47%;\n  float: left;\n  padding: 0 5px;\n  line-height: 38px;\n}\n\n.property-value[_ngcontent-%COMP%] {\n  float: left;\n  width: 53%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtcHJvcGVydHktdGFiL3Byb2R1Y3QtcHJvcGVydHktdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtcHJvcGVydHktdGFiL3Byb2R1Y3QtcHJvcGVydHktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LXByb3BlcnR5LXRhYi9wcm9kdWN0LXByb3BlcnR5LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1uYW1lIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogNDclO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4ucHJvcGVydHktdmFsdWUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MyU7XG59IiwiLnByb3BlcnR5LW5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDQ3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLnByb3BlcnR5LXZhbHVlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MyU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPropertyTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-property-tab',
          templateUrl: './product-property-tab.component.html',
          styleUrls: ['./product-property-tab.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-resource/product-resource.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/products/components/product-resource/product-resource.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ProductResourceComponent */

  /***/
  function srcAppProductsComponentsProductResourceProductResourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductResourceComponent", function () {
      return ProductResourceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/tooltip */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");

    function ProductResourceComponent_3_ng_template_0_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", slide_r3.id)("src", slide_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProductResourceComponent_3_ng_template_0_iframe_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 13);
      }
    }

    function ProductResourceComponent_3_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductResourceComponent_3_ng_template_0_img_1_Template, 1, 2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductResourceComponent_3_ng_template_0_iframe_2_Template, 1, 0, "iframe", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r3.type === "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r3.type === "video");
      }
    }

    function ProductResourceComponent_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductResourceComponent_3_ng_template_0_Template, 8, 2, "ng-template", 5);
      }

      if (rf & 2) {
        var slide_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r3.id);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active-slide": a0
      };
    };

    function ProductResourceComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductResourceComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var slide_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.to(slide_r9.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r9 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, slide_r9.id === ctx_r2.activeSlide))("src", slide_r9.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProductResourceComponent = /*#__PURE__*/function () {
      function ProductResourceComponent() {
        _classCallCheck(this, ProductResourceComponent);

        this.slides = [{
          id: 'product-1',
          image: 'assets/bronze_uruli/1.png',
          thumbnail: 'assets/bronze_uruli/1.png',
          type: 'image'
        }, {
          id: 'product-2',
          image: 'assets/bronze_uruli/2.png',
          thumbnail: 'assets/bronze_uruli/2.png',
          type: 'image'
        }, {
          id: 'product-3',
          image: 'assets/bronze_uruli/3.png',
          thumbnail: 'assets/bronze_uruli/3.png',
          type: 'image'
        }, {
          id: 'product-4',
          image: 'https://www.youtube.com/watch?v=JpxsRwnRwCQ',
          thumbnail: 'assets/bronze_uruli/youtube.png',
          type: 'video'
        }];
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: false,
          lazyLoad: true,
          navSpeed: 700,
          navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          },
          nav: true
        };
        this.activeSlide = this.slides[0].id;
      }

      _createClass(ProductResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getData",
        value: function getData(data) {
          this.activeSlide = data.slides[0].id;
          console.log(this.activeSlide);
        }
      }]);

      return ProductResourceComponent;
    }();

    ProductResourceComponent.ɵfac = function ProductResourceComponent_Factory(t) {
      return new (t || ProductResourceComponent)();
    };

    ProductResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductResourceComponent,
      selectors: [["product-resource"]],
      decls: 6,
      vars: 3,
      consts: [[3, "options", "changed"], ["owlCar", ""], [4, "ngFor", "ngForOf"], ["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "4", "nzXl", "4", 3, "click", 4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], ["height", "280px", 3, "alt", "src", 4, "ngIf"], ["height", "280px", "style", "width:100%", "frameborder", "0", "src", "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0", 4, "ngIf"], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Add to wishlist", 1, "wishlist"], ["nz-icon", "", "nzType", "heart"], ["nz-button", "", "nzType", "default", "nz-tooltip", "", "nzTooltipTitle", "Add to compare", 1, "compare"], ["nz-icon", "", "nzType", "appstore-add", "nzTheme", "outline"], ["height", "280px", 3, "alt", "src"], ["height", "280px", "frameborder", "0", "src", "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0", 2, "width", "100%"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "4", "nzXl", "4", 3, "click"], ["alt", "example", 1, "thumbnail", 3, "ngClass", "src"]],
      template: function ProductResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ProductResourceComponent_Template_owl_carousel_o_changed_1_listener($event) {
            return ctx.getData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductResourceComponent_3_Template, 1, 1, undefined, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductResourceComponent_div_5_Template, 3, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 48px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   .wishlist[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\nsection[_ngcontent-%COMP%]   .compare[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 70px;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.thumbnail[_ngcontent-%COMP%]:hover, .active-slide[_ngcontent-%COMP%] {\n  border: 1px #092532 solid;\n  padding: 2px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtcmVzb3VyY2UvcHJvZHVjdC1yZXNvdXJjZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LXJlc291cmNlL3Byb2R1Y3QtcmVzb3VyY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQVI7QURLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0pKO0FEUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1yZXNvdXJjZS9wcm9kdWN0LXJlc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcblxuICAuYW50LWNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLmFudC1jYXJkLWJvZHkge1xuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53aXNobGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxuXG4gIC5jb21wYXJlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiA3MHB4O1xuICB9XG59XG5cbi50aHVtYm5haWwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4udGh1bWJuYWlsOmhvdmVyLFxuLmFjdGl2ZS1zbGlkZSB7XG4gIGJvcmRlcjogMXB4ICMwOTI1MzIgc29saWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcbn1cbnNlY3Rpb24gLmFudC1jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuc2VjdGlvbiAuYW50LWNhcmQgLmFudC1jYXJkLWJvZHkgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuc2VjdGlvbiAud2lzaGxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5zZWN0aW9uIC5jb21wYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA3MHB4O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLnRodW1ibmFpbDpob3Zlcixcbi5hY3RpdmUtc2xpZGUge1xuICBib3JkZXI6IDFweCAjMDkyNTMyIHNvbGlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-resource',
          templateUrl: './product-resource.component.html',
          styleUrls: ['./product-resource.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-view/product-view.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/products/components/product-view/product-view.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductViewComponent */

  /***/
  function srcAppProductsComponentsProductViewProductViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function () {
      return ProductViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var _product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product-resource/product-resource.component */
    "./src/app/products/components/product-resource/product-resource.component.ts");
    /* harmony import */


    var _product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product-deatil/product-deatil.component */
    "./src/app/products/components/product-deatil/product-deatil.component.ts");
    /* harmony import */


    var _product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-dimension/product-dimension.component */
    "./src/app/products/components/product-dimension/product-dimension.component.ts");
    /* harmony import */


    var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../product-description/product-description.component */
    "./src/app/products/components/product-description/product-description.component.ts");
    /* harmony import */


    var _landing_page_components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../landing-page/components/product-famous/product-famous.component */
    "./src/app/landing-page/components/product-famous/product-famous.component.ts");
    /* harmony import */


    var _landing_page_components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../landing-page/components/product-recommended/product-recommended.component */
    "./src/app/landing-page/components/product-recommended/product-recommended.component.ts");
    /* harmony import */


    var _landing_page_components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../landing-page/components/story-list/story-list.component */
    "./src/app/landing-page/components/story-list/story-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProductViewComponent = /*#__PURE__*/function () {
      function ProductViewComponent() {
        _classCallCheck(this, ProductViewComponent);
      }

      _createClass(ProductViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductViewComponent;
    }();

    ProductViewComponent.ɵfac = function ProductViewComponent_Factory(t) {
      return new (t || ProductViewComponent)();
    };

    ProductViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductViewComponent,
      selectors: [["app-product-view"]],
      decls: 14,
      vars: 3,
      consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzXs", "24", "nzSm", "24", "nzMd", "12", "nzLg", "12", "nzXl", "12"]],
      template: function ProductViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "product-resource");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "product-deatil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "product-dimension");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "product-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "product-famous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "product-recommended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "story-list");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "BRASS KALAM WITH TIN COAT/PONGAL KALAM/BRASS SOMBU"));
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], _product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_2__["ProductResourceComponent"], _product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_3__["ProductDeatilComponent"], _product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_4__["ProductDimensionComponent"], _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_5__["ProductDescriptionComponent"], _landing_page_components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_6__["ProductFamousComponent"], _landing_page_components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_7__["ProductRecommendedComponent"], _landing_page_components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_8__["StoryListComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  text-transform: capitalize;\n}\n\n@media (max-width: 575.98px) {\n  h1[_ngcontent-%COMP%] {\n    margin-top: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxnQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIH1cbiAgfSIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-view',
          templateUrl: './product-view.component.html',
          styleUrls: ['./product-view.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ProductWarrantyTabComponent */

  /***/
  function srcAppProductsComponentsProductWarrantyTabProductWarrantyTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductWarrantyTabComponent", function () {
      return ProductWarrantyTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductWarrantyTabComponent = /*#__PURE__*/function () {
      function ProductWarrantyTabComponent() {
        _classCallCheck(this, ProductWarrantyTabComponent);
      }

      _createClass(ProductWarrantyTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductWarrantyTabComponent;
    }();

    ProductWarrantyTabComponent.ɵfac = function ProductWarrantyTabComponent_Factory(t) {
      return new (t || ProductWarrantyTabComponent)();
    };

    ProductWarrantyTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductWarrantyTabComponent,
      selectors: [["product-warranty-tab"]],
      decls: 7,
      vars: 0,
      template: function ProductWarrantyTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " The product comes with a 12 month warranty against any manufacturing defects and any other issues with the materials that have been used. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The warranty does not cover damages due to usage of the product beyond its intended use and wear & tear in the natural course of product usage. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Please note that the above policies do not apply to all pincodes. To see the policy for your location, enter your pincode in the box above. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 32px;\n  list-style: circle;\n  color: #222831;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtd2FycmFudHktdGFiL3Byb2R1Y3Qtd2FycmFudHktdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtd2FycmFudHktdGFiL3Byb2R1Y3Qtd2FycmFudHktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC13YXJyYW50eS10YWIvcHJvZHVjdC13YXJyYW50eS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaSB7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcbiAgICAgIGNvbG9yOiAjMjIyODMxO1xuICAgIH1cbiAgfVxuICAiLCJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBjb2xvcjogIzIyMjgzMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductWarrantyTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-warranty-tab',
          templateUrl: './product-warranty-tab.component.html',
          styleUrls: ['./product-warranty-tab.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/product-view/product-view.component */
    "./src/app/products/components/product-view/product-view.component.ts");

    var routes = [{
      path: 'product-view',
      component: _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_2__["ProductViewComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/tabs */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/table */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
    /* harmony import */


    var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/divider */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/tag */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/radio */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
    /* harmony import */


    var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/tooltip */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/product-view/product-view.component */
    "./src/app/products/components/product-view/product-view.component.ts");
    /* harmony import */


    var _components_product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/product-dimension/product-dimension.component */
    "./src/app/products/components/product-dimension/product-dimension.component.ts");
    /* harmony import */


    var _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/product-description/product-description.component */
    "./src/app/products/components/product-description/product-description.component.ts");
    /* harmony import */


    var _components_product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/product-feature-tab/product-feature-tab.component */
    "./src/app/products/components/product-feature-tab/product-feature-tab.component.ts");
    /* harmony import */


    var _components_product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/product-property-tab/product-property-tab.component */
    "./src/app/products/components/product-property-tab/product-property-tab.component.ts");
    /* harmony import */


    var _components_product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/product-care-tab/product-care-tab.component */
    "./src/app/products/components/product-care-tab/product-care-tab.component.ts");
    /* harmony import */


    var _components_product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/product-warranty-tab/product-warranty-tab.component */
    "./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts");
    /* harmony import */


    var _components_product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/product-box-tab/product-box-tab.component */
    "./src/app/products/components/product-box-tab/product-box-tab.component.ts");
    /* harmony import */


    var _components_product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/product-deatil/product-deatil.component */
    "./src/app/products/components/product-deatil/product-deatil.component.ts");
    /* harmony import */


    var _components_product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/product-resource/product-resource.component */
    "./src/app/products/components/product-resource/product-resource.component.ts");
    /* harmony import */


    var _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../landing-page/landing-page.module */
    "./src/app/landing-page/landing-page.module.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_15__["ProductsRoutingModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__["NzRadioModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"], _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__["LandingPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_16__["ProductViewComponent"], _components_product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_17__["ProductDimensionComponent"], _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_18__["ProductDescriptionComponent"], _components_product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_19__["ProductFeatureTabComponent"], _components_product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_20__["ProductPropertyTabComponent"], _components_product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_21__["ProductCareTabComponent"], _components_product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_22__["ProductWarrantyTabComponent"], _components_product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_23__["ProductBoxTabComponent"], _components_product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_24__["ProductDeatilComponent"], _components_product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_25__["ProductResourceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_15__["ProductsRoutingModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__["NzRadioModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"], _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__["LandingPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_16__["ProductViewComponent"], _components_product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_17__["ProductDimensionComponent"], _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_18__["ProductDescriptionComponent"], _components_product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_19__["ProductFeatureTabComponent"], _components_product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_20__["ProductPropertyTabComponent"], _components_product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_21__["ProductCareTabComponent"], _components_product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_22__["ProductWarrantyTabComponent"], _components_product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_23__["ProductBoxTabComponent"], _components_product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_24__["ProductDeatilComponent"], _components_product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_25__["ProductResourceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_15__["ProductsRoutingModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__["NzRadioModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"], _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__["LandingPageModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map