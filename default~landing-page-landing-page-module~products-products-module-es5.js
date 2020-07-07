function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~landing-page-landing-page-module~products-products-module"], {
  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js ***!
    \********************************************************************************/

  /*! exports provided: NzCardComponent, NzCardGridDirective, NzCardLoadingComponent, NzCardMetaComponent, NzCardModule, NzCardTabComponent */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCardComponent", function () {
      return NzCardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCardGridDirective", function () {
      return NzCardGridDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCardLoadingComponent", function () {
      return NzCardLoadingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCardMetaComponent", function () {
      return NzCardMetaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCardModule", function () {
      return NzCardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCardTabComponent", function () {
      return NzCardTabComponent;
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


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: card-grid.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function NzCardTabComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    function NzCardComponent_div_0_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.nzTitle);
      }
    }

    function NzCardComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzTitle);
      }
    }

    function NzCardComponent_div_0_div_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.nzExtra);
      }
    }

    function NzCardComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzExtra);
      }
    }

    function NzCardComponent_div_0_ng_container_4_ng_template_1_Template(rf, ctx) {}

    function NzCardComponent_div_0_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.listOfNzCardTabComponent.template);
      }
    }

    function NzCardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCardComponent_div_0_div_2_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCardComponent_div_0_div_3_Template, 2, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzCardComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nzTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nzExtra);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.listOfNzCardTabComponent);
      }
    }

    function NzCardComponent_div_1_ng_template_1_Template(rf, ctx) {}

    function NzCardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nzCover);
      }
    }

    function NzCardComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function NzCardComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-card-loading");
      }
    }

    function NzCardComponent_ul_6_li_1_ng_template_2_Template(rf, ctx) {}

    function NzCardComponent_ul_6_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCardComponent_ul_6_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var action_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r13.nzActions.length, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", action_r14);
      }
    }

    function NzCardComponent_ul_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_ul_6_li_1_Template, 3, 3, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.nzActions);
      }
    }

    function NzCardLoadingComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var className_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", className_r3);
      }
    }

    function NzCardLoadingComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardLoadingComponent_div_1_div_1_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var listOfClassName_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", listOfClassName_r1);
      }
    }

    function NzCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) {}

    function NzCardMetaComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzAvatar);
      }
    }

    function NzCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
      }
    }

    function NzCardMetaComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
      }
    }

    function NzCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.nzDescription);
      }
    }

    function NzCardMetaComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzDescription);
      }
    }

    function NzCardMetaComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzDescription);
      }
    }

    var NzCardGridDirective = function NzCardGridDirective() {
      _classCallCheck(this, NzCardGridDirective);

      this.nzHoverable = true;
    };

    NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) {
      return new (t || NzCardGridDirective)();
    };

    NzCardGridDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NzCardGridDirective,
      selectors: [["", "nz-card-grid", ""]],
      hostVars: 4,
      hostBindings: function NzCardGridDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-card-grid", true)("ant-card-hoverable", ctx.nzHoverable);
        }
      },
      inputs: {
        nzHoverable: "nzHoverable"
      },
      exportAs: ["nzCardGrid"]
    });
    NzCardGridDirective.propDecorators = {
      nzHoverable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCardGridDirective.prototype, "nzHoverable", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: card-tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCardTabComponent = function NzCardTabComponent() {
      _classCallCheck(this, NzCardTabComponent);
    };

    NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) {
      return new (t || NzCardTabComponent)();
    };

    NzCardTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzCardTabComponent,
      selectors: [["nz-card-tab"]],
      viewQuery: function NzCardTabComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        }
      },
      exportAs: ["nzCardTab"],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzCardTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    NzCardTabComponent.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: card.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NZ_CONFIG_COMPONENT_NAME = 'card';

    var NzCardComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzConfigService
       * @param {?} cdr
       */
      function NzCardComponent(nzConfigService, cdr) {
        var _this = this;

        _classCallCheck(this, NzCardComponent);

        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzBordered = true;
        this.nzLoading = false;
        this.nzHoverable = false;
        this.nzBodyStyle = null;
        this.nzActions = [];
        this.nzType = null;
        this.nzSize = 'default';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this.cdr.markForCheck();
        });
      }
      /**
       * @return {?}
       */


      _createClass(NzCardComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzCardComponent;
    }();

    NzCardComponent.ɵfac = function NzCardComponent_Factory(t) {
      return new (t || NzCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    NzCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzCardComponent,
      selectors: [["nz-card"]],
      contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzCardTabComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzCardGridDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzCardTabComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzCardGridDirective = _t);
        }
      },
      hostVars: 16,
      hostBindings: function NzCardComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-card", true)("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.listOfNzCardGridDirective && ctx.listOfNzCardGridDirective.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.listOfNzCardTabComponent);
        }
      },
      inputs: {
        nzBordered: "nzBordered",
        nzLoading: "nzLoading",
        nzHoverable: "nzHoverable",
        nzBodyStyle: "nzBodyStyle",
        nzActions: "nzActions",
        nzType: "nzType",
        nzSize: "nzSize",
        nzCover: "nzCover",
        nzTitle: "nzTitle",
        nzExtra: "nzExtra"
      },
      exportAs: ["nzCard"],
      ngContentSelectors: _c0,
      decls: 7,
      vars: 6,
      consts: [["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]],
      template: function NzCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzCardComponent_div_0_Template, 5, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCardComponent_ng_container_3_Template, 2, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzCardComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzCardComponent_ul_6_Template, 2, 1, "ul", 5);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzExtra || ctx.listOfNzCardTabComponent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzCover);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.nzBodyStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzLoading)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzActions.length);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], NzCardLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzCardComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    NzCardComponent.propDecorators = {
      nzBordered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzHoverable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzBodyStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzCover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzActions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzExtra: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      listOfNzCardTabComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [NzCardTabComponent, {
          "static": false
        }]
      }],
      listOfNzCardGridDirective: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [NzCardGridDirective]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzCardComponent.prototype, "nzBordered", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCardComponent.prototype, "nzLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzCardComponent.prototype, "nzHoverable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzCardComponent.prototype, "nzSize", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardGridDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[nz-card-grid]',
          exportAs: 'nzCardGrid',
          host: {
            '[class.ant-card-grid]': 'true',
            '[class.ant-card-hoverable]': 'nzHoverable'
          }
        }]
      }], function () {
        return [];
      }, {
        nzHoverable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-card-tab',
          exportAs: 'nzCardTab',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
        }]
      }], null, {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-card',
          exportAs: 'nzCard',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          template: "\n    <div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || listOfNzCardTabComponent\">\n      <div class=\"ant-card-head-wrapper\">\n        <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n          <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"listOfNzCardTabComponent\">\n        <ng-template [ngTemplateOutlet]=\"listOfNzCardTabComponent.template\"></ng-template>\n      </ng-container>\n    </div>\n    <div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n      <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n    </div>\n    <div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n      <ng-container *ngIf=\"!nzLoading; else loadingTemplate\">\n        <ng-content></ng-content>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <nz-card-loading></nz-card-loading>\n      </ng-template>\n    </div>\n    <ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n      <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n        <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n      </li>\n    </ul>\n  ",
          host: {
            '[class.ant-card]': 'true',
            '[class.ant-card-loading]': 'nzLoading',
            '[class.ant-card-bordered]': 'nzBordered',
            '[class.ant-card-hoverable]': 'nzHoverable',
            '[class.ant-card-small]': 'nzSize === "small"',
            '[class.ant-card-contain-grid]': 'listOfNzCardGridDirective && listOfNzCardGridDirective.length',
            '[class.ant-card-type-inner]': 'nzType === "inner"',
            '[class.ant-card-contain-tabs]': '!!listOfNzCardTabComponent'
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        nzBordered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzHoverable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzBodyStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzActions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzCover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzExtra: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        listOfNzCardTabComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [NzCardTabComponent, {
            "static": false
          }]
        }],
        listOfNzCardGridDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [NzCardGridDirective]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: card-loading.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCardLoadingComponent = function NzCardLoadingComponent() {
      _classCallCheck(this, NzCardLoadingComponent);

      this.listOfLoading = [['ant-col-22'], ['ant-col-8', 'ant-col-15'], ['ant-col-6', 'ant-col-18'], ['ant-col-13', 'ant-col-9'], ['ant-col-4', 'ant-col-3', 'ant-col-16'], ['ant-col-8', 'ant-col-6', 'ant-col-8']];
    };

    NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) {
      return new (t || NzCardLoadingComponent)();
    };

    NzCardLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzCardLoadingComponent,
      selectors: [["nz-card-loading"]],
      hostVars: 2,
      hostBindings: function NzCardLoadingComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-card-loading-content", true);
        }
      },
      exportAs: ["nzCardLoading"],
      decls: 2,
      vars: 1,
      consts: [[1, "ant-card-loading-content"], ["class", "ant-row", "style", "margin-left: -4px; margin-right: -4px;", 4, "ngFor", "ngForOf"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], ["style", "padding-left: 4px; padding-right: 4px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "padding-left", "4px", "padding-right", "4px", 3, "ngClass"], [1, "ant-card-loading-block"]],
      template: function NzCardLoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardLoadingComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzCardLoadingComponent.ctorParameters = function () {
      return [];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-card-loading',
          exportAs: 'nzCardLoading',
          template: "\n    <div class=\"ant-card-loading-content\">\n      <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\" *ngFor=\"let listOfClassName of listOfLoading\">\n        <div *ngFor=\"let className of listOfClassName\" [ngClass]=\"className\" style=\"padding-left: 4px; padding-right: 4px;\">\n          <div class=\"ant-card-loading-block\"></div>\n        </div>\n      </div>\n    </div>\n  ",
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          host: {
            '[class.ant-card-loading-content]': 'true'
          }
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: card-meta.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCardMetaComponent = function NzCardMetaComponent() {
      _classCallCheck(this, NzCardMetaComponent);

      this.nzTitle = null;
      this.nzDescription = null;
      this.nzAvatar = null;
    };

    NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) {
      return new (t || NzCardMetaComponent)();
    };

    NzCardMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NzCardMetaComponent,
      selectors: [["nz-card-meta"]],
      hostVars: 2,
      hostBindings: function NzCardMetaComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-card-meta", true);
        }
      },
      inputs: {
        nzTitle: "nzTitle",
        nzDescription: "nzDescription",
        nzAvatar: "nzAvatar"
      },
      exportAs: ["nzCardMeta"],
      decls: 2,
      vars: 2,
      consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]],
      template: function NzCardMetaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzCardMetaComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_Template, 3, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzDescription);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzCardMetaComponent.propDecorators = {
      nzTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzDescription: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      nzAvatar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardMetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'nz-card-meta',
          exportAs: 'nzCardMeta',
          preserveWhitespaces: false,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          template: "\n    <div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n      <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n    </div>\n    <div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n      <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n      <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </div>\n    </div>\n  ",
          host: {
            '[class.ant-card-meta]': 'true'
          }
        }]
      }], function () {
        return [];
      }, {
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzDescription: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzAvatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: card.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCardModule = function NzCardModule() {
      _classCallCheck(this, NzCardModule);
    };

    NzCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NzCardModule
    });
    NzCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NzCardModule_Factory(t) {
        return new (t || NzCardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCardModule, {
        declarations: function declarations() {
          return [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]];
        },
        exports: function exports() {
          return [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]],
          declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
          exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
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
     * Generated from: ng-zorro-antd-card.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-card.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-carousel.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-carousel.js ***!
    \************************************************************************************/

  /*! exports provided: NZ_CAROUSEL_CUSTOM_STRATEGIES, NzCarouselBaseStrategy, NzCarouselComponent, NzCarouselContentDirective, NzCarouselModule */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCarouselJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NZ_CAROUSEL_CUSTOM_STRATEGIES", function () {
      return NZ_CAROUSEL_CUSTOM_STRATEGIES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCarouselBaseStrategy", function () {
      return NzCarouselBaseStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCarouselComponent", function () {
      return NzCarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCarouselContentDirective", function () {
      return NzCarouselContentDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzCarouselModule", function () {
      return NzCarouselModule;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: carousel-content.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["slickList"];
    var _c1 = ["slickTrack"];

    function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) {}

    var _c2 = function _c2(a0) {
      return {
        $implicit: a0
      };
    };

    function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

          var i_r7 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r9.goTo(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("slick-active", content_r6.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.nzDotRender || _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, i_r7));
      }
    }

    function NzCarouselComponent_ul_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCarouselComponent_ul_6_li_1_Template, 2, 6, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("slick-dots-top", ctx_r2.nzDotPosition === "top")("slick-dots-bottom", ctx_r2.nzDotPosition === "bottom")("slick-dots-left", ctx_r2.nzDotPosition === "left")("slick-dots-right", ctx_r2.nzDotPosition === "right");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.carouselContents);
      }
    }

    function NzCarouselComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](index_r11 + 1);
      }
    }

    var _c3 = ["*"];

    var NzCarouselContentDirective = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       */
      function NzCarouselContentDirective(elementRef, renderer) {
        _classCallCheck(this, NzCarouselContentDirective);

        this.renderer = renderer;
        this._active = false;
        this.el = elementRef.nativeElement;
        this.renderer.addClass(elementRef.nativeElement, 'slick-slide');
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzCarouselContentDirective, [{
        key: "isActive",
        set: function set(value) {
          this._active = value;

          if (this.isActive) {
            this.renderer.addClass(this.el, 'slick-active');
          } else {
            this.renderer.removeClass(this.el, 'slick-active');
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._active;
        }
      }]);

      return NzCarouselContentDirective;
    }();

    NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) {
      return new (t || NzCarouselContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]));
    };

    NzCarouselContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: NzCarouselContentDirective,
      selectors: [["", "nz-carousel-content", ""]],
      exportAs: ["nzCarouselContent"]
    });
    /** @nocollapse */

    NzCarouselContentDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: strategies/base-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * @abstract
     */


    var NzCarouselBaseStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} carouselComponent
       * @param {?} cdr
       * @param {?} renderer
       */
      function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
        _classCallCheck(this, NzCarouselBaseStrategy);

        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
      }
      /**
       * @protected
       * @return {?}
       */


      _createClass(NzCarouselBaseStrategy, [{
        key: "withCarouselContents",

        /**
         * Initialize dragging sequences.
         * @param {?} contents
         * @return {?}
         */
        value: function withCarouselContents(contents) {
          // TODO: carousel and its contents should be separated.

          /** @type {?} */
          var carousel =
          /** @type {?} */
          this.carouselComponent;
          /** @type {?} */

          var rect = carousel.el.getBoundingClientRect();
          this.slickListEl = carousel.slickListEl;
          this.slickTrackEl = carousel.slickTrackEl;
          this.unitWidth = rect.width;
          this.unitHeight = rect.height;
          this.contents = contents ? contents.toArray() : [];
          this.length = this.contents.length;
        }
        /**
         * When user drag the carousel component.
         * \@optional
         * @param {?} _vector
         * @return {?}
         */

      }, {
        key: "dragging",
        value: function dragging(_vector) {}
        /**
         * Destroy a scroll strategy.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {}
        /**
         * @protected
         * @param {?} f
         * @param {?} t
         * @return {?}
         */

      }, {
        key: "getFromToInBoundary",
        value: function getFromToInBoundary(f, t) {
          /** @type {?} */
          var length = this.maxIndex + 1;
          return {
            from: (f + length) % length,
            to: (t + length) % length
          };
        }
      }, {
        key: "maxIndex",
        get: function get() {
          return this.length - 1;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "firstEl",
        get: function get() {
          return this.contents[0].el;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "lastEl",
        get: function get() {
          return this.contents[this.maxIndex].el;
        }
      }]);

      return NzCarouselBaseStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: strategies/opacity-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCarouselOpacityStrategy = /*#__PURE__*/function (_NzCarouselBaseStrate) {
      _inherits(NzCarouselOpacityStrategy, _NzCarouselBaseStrate);

      var _super = _createSuper(NzCarouselOpacityStrategy);

      function NzCarouselOpacityStrategy() {
        _classCallCheck(this, NzCarouselOpacityStrategy);

        return _super.apply(this, arguments);
      }

      _createClass(NzCarouselOpacityStrategy, [{
        key: "withCarouselContents",

        /**
         * @param {?} contents
         * @return {?}
         */
        value: function withCarouselContents(contents) {
          var _this2 = this;

          _get(_getPrototypeOf(NzCarouselOpacityStrategy.prototype), "withCarouselContents", this).call(this, contents);

          if (this.contents) {
            this.slickTrackEl.style.width = "".concat(this.length * this.unitWidth, "px");
            this.contents.forEach(
            /**
            * @param {?} content
            * @param {?} i
            * @return {?}
            */
            function (content, i) {
              _this2.renderer.setStyle(content.el, 'opacity',
              /** @type {?} */
              _this2.carouselComponent.activeIndex === i ? '1' : '0');

              _this2.renderer.setStyle(content.el, 'position', 'relative');

              _this2.renderer.setStyle(content.el, 'width', "".concat(_this2.unitWidth, "px"));

              _this2.renderer.setStyle(content.el, 'left', "".concat(-_this2.unitWidth * i, "px"));

              _this2.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            });
          }
        }
        /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */

      }, {
        key: "switch",
        value: function _switch(_f, _t) {
          var _this3 = this;

          var _this$getFromToInBoun = this.getFromToInBoundary(_f, _t),
              t = _this$getFromToInBoun.to;
          /** @type {?} */


          var complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.contents.forEach(
          /**
          * @param {?} content
          * @param {?} i
          * @return {?}
          */
          function (content, i) {
            _this3.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
          });
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            complete$.next();
            complete$.complete();
          },
          /** @type {?} */
          this.carouselComponent.nzTransitionSpeed);
          return complete$;
        }
        /**
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          var _this4 = this;

          this.contents.forEach(
          /**
          * @param {?} content
          * @return {?}
          */
          function (content) {
            _this4.renderer.setStyle(content.el, 'transition', null);
          });

          _get(_getPrototypeOf(NzCarouselOpacityStrategy.prototype), "dispose", this).call(this);
        }
      }]);

      return NzCarouselOpacityStrategy;
    }(NzCarouselBaseStrategy);
    /**
     * @fileoverview added by tsickle
     * Generated from: strategies/transform-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCarouselTransformStrategy = /*#__PURE__*/function (_NzCarouselBaseStrate2) {
      _inherits(NzCarouselTransformStrategy, _NzCarouselBaseStrate2);

      var _super2 = _createSuper(NzCarouselTransformStrategy);

      function NzCarouselTransformStrategy() {
        var _this5;

        _classCallCheck(this, NzCarouselTransformStrategy);

        _this5 = _super2.apply(this, arguments);
        _this5.isDragging = false;
        _this5.isTransitioning = false;
        return _this5;
      }
      /**
       * @private
       * @return {?}
       */


      _createClass(NzCarouselTransformStrategy, [{
        key: "dispose",

        /**
         * @return {?}
         */
        value: function dispose() {
          _get(_getPrototypeOf(NzCarouselTransformStrategy.prototype), "dispose", this).call(this);

          this.renderer.setStyle(this.slickTrackEl, 'transform', null);
        }
        /**
         * @param {?} contents
         * @return {?}
         */

      }, {
        key: "withCarouselContents",
        value: function withCarouselContents(contents) {
          var _this6 = this;

          _get(_getPrototypeOf(NzCarouselTransformStrategy.prototype), "withCarouselContents", this).call(this, contents);
          /** @type {?} */


          var carousel =
          /** @type {?} */
          this.carouselComponent;
          /** @type {?} */

          var activeIndex = carousel.activeIndex;

          if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', "".concat(this.unitHeight, "px"));

            if (this.vertical) {
              this.renderer.setStyle(this.slickTrackEl, 'width', "".concat(this.unitWidth, "px"));
              this.renderer.setStyle(this.slickTrackEl, 'height', "".concat(this.length * this.unitHeight, "px"));
              this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, ".concat(-activeIndex * this.unitHeight, "px, 0)"));
            } else {
              this.renderer.setStyle(this.slickTrackEl, 'height', "".concat(this.unitHeight, "px"));
              this.renderer.setStyle(this.slickTrackEl, 'width', "".concat(this.length * this.unitWidth, "px"));
              this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(".concat(-activeIndex * this.unitWidth, "px, 0, 0)"));
            }

            this.contents.forEach(
            /**
            * @param {?} content
            * @return {?}
            */
            function (content) {
              _this6.renderer.setStyle(content.el, 'position', 'relative');

              _this6.renderer.setStyle(content.el, 'width', "".concat(_this6.unitWidth, "px"));

              _this6.renderer.setStyle(content.el, 'height', "".concat(_this6.unitHeight, "px"));
            });
          }
        }
        /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */

      }, {
        key: "switch",
        value: function _switch(_f, _t) {
          var _this7 = this;

          var _this$getFromToInBoun2 = this.getFromToInBoundary(_f, _t),
              t = _this$getFromToInBoun2.to;
          /** @type {?} */


          var complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.renderer.setStyle(this.slickTrackEl, 'transition', "transform ".concat(
          /** @type {?} */
          this.carouselComponent.nzTransitionSpeed, "ms ease"));

          if (this.vertical) {
            this.verticalTransform(_f, _t);
          } else {
            this.horizontalTransform(_f, _t);
          }

          this.isTransitioning = true;
          this.isDragging = false;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this7.renderer.setStyle(_this7.slickTrackEl, 'transition', null);

            _this7.contents.forEach(
            /**
            * @param {?} content
            * @return {?}
            */
            function (content) {
              _this7.renderer.setStyle(content.el, _this7.vertical ? 'top' : 'left', null);
            });

            if (_this7.vertical) {
              _this7.renderer.setStyle(_this7.slickTrackEl, 'transform', "translate3d(0, ".concat(-t * _this7.unitHeight, "px, 0)"));
            } else {
              _this7.renderer.setStyle(_this7.slickTrackEl, 'transform', "translate3d(".concat(-t * _this7.unitWidth, "px, 0, 0)"));
            }

            _this7.isTransitioning = false;
            complete$.next();
            complete$.complete();
          },
          /** @type {?} */
          this.carouselComponent.nzTransitionSpeed);
          return complete$.asObservable();
        }
        /**
         * @param {?} _vector
         * @return {?}
         */

      }, {
        key: "dragging",
        value: function dragging(_vector) {
          if (this.isTransitioning) {
            return;
          }
          /** @type {?} */


          var activeIndex =
          /** @type {?} */
          this.carouselComponent.activeIndex;

          if (
          /** @type {?} */
          this.carouselComponent.vertical) {
            if (!this.isDragging && this.length > 2) {
              if (activeIndex === this.maxIndex) {
                this.prepareVerticalContext(true);
              } else if (activeIndex === 0) {
                this.prepareVerticalContext(false);
              }
            }

            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, ".concat(-activeIndex * this.unitHeight + _vector.x, "px, 0)"));
          } else {
            if (!this.isDragging && this.length > 2) {
              if (activeIndex === this.maxIndex) {
                this.prepareHorizontalContext(true);
              } else if (activeIndex === 0) {
                this.prepareHorizontalContext(false);
              }
            }

            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(".concat(-activeIndex * this.unitWidth + _vector.x, "px, 0, 0)"));
          }

          this.isDragging = true;
        }
        /**
         * @private
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */

      }, {
        key: "verticalTransform",
        value: function verticalTransform(_f, _t) {
          var _this$getFromToInBoun3 = this.getFromToInBoundary(_f, _t),
              f = _this$getFromToInBoun3.from,
              t = _this$getFromToInBoun3.to;
          /** @type {?} */


          var needToAdjust = this.length > 2 && _t !== t;

          if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, ".concat(-_t * this.unitHeight, "px, 0)"));
          } else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, ".concat(-t * this.unitHeight, "px, 0"));
          }
        }
        /**
         * @private
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */

      }, {
        key: "horizontalTransform",
        value: function horizontalTransform(_f, _t) {
          var _this$getFromToInBoun4 = this.getFromToInBoundary(_f, _t),
              f = _this$getFromToInBoun4.from,
              t = _this$getFromToInBoun4.to;
          /** @type {?} */


          var needToAdjust = this.length > 2 && _t !== t;

          if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(".concat(-_t * this.unitWidth, "px, 0, 0)"));
          } else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(".concat(-t * this.unitWidth, "px, 0, 0"));
          }
        }
        /**
         * @private
         * @param {?} lastToFirst
         * @return {?}
         */

      }, {
        key: "prepareVerticalContext",
        value: function prepareVerticalContext(lastToFirst) {
          if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', "".concat(this.length * this.unitHeight, "px"));
            this.renderer.setStyle(this.lastEl, 'top', null);
          } else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', "".concat(-this.unitHeight * this.length, "px"));
          }
        }
        /**
         * @private
         * @param {?} lastToFirst
         * @return {?}
         */

      }, {
        key: "prepareHorizontalContext",
        value: function prepareHorizontalContext(lastToFirst) {
          if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', "".concat(this.length * this.unitWidth, "px"));
            this.renderer.setStyle(this.lastEl, 'left', null);
          } else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', "".concat(-this.unitWidth * this.length, "px"));
          }
        }
      }, {
        key: "vertical",
        get: function get() {
          return (
            /** @type {?} */
            this.carouselComponent.vertical
          );
        }
      }]);

      return NzCarouselTransformStrategy;
    }(NzCarouselBaseStrategy);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: typings.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NzCarouselComponentAsSource() {}

    if (false) {}
    /**
     * @record
     */


    function NzCarouselStrategyRegistryItem() {}

    if (false) {}
    /** @type {?} */


    var NZ_CAROUSEL_CUSTOM_STRATEGIES = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('nz-carousel-custom-strategies');
    /**
     * @record
     */

    function PointerVector() {}

    if (false) {}
    /**
     * @record
     */


    function FromToInterface() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: carousel.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NZ_CONFIG_COMPONENT_NAME = 'carousel';

    var NzCarouselComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} nzConfigService
       * @param {?} renderer
       * @param {?} cdr
       * @param {?} platform
       * @param {?} resizeService
       * @param {?} nzDragService
       * @param {?} customStrategies
       */
      function NzCarouselComponent(elementRef, nzConfigService, renderer, cdr, platform, resizeService, nzDragService, customStrategies) {
        var _this8 = this;

        _classCallCheck(this, NzCarouselComponent);

        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.resizeService = resizeService;
        this.nzDragService = nzDragService;
        this.customStrategies = customStrategies;
        this.nzEffect = 'scrollx';
        this.nzEnableSwipe = true;
        this.nzDots = true;
        this.nzAutoPlay = false;
        this.nzAutoPlaySpeed = 3000;
        this.nzTransitionSpeed = 500;
        this._dotPosition = 'bottom';
        this.nzBeforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeIndex = 0;
        this.vertical = false;
        this.transitionInProgress = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        /**
         * Drag carousel.
         */

        this.pointerDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this8.isDragging && !_this8.isTransiting && _this8.nzEnableSwipe) {
            _this8.clearScheduledTransition();

            _this8.gestureRect = _this8.slickListEl.getBoundingClientRect();

            _this8.nzDragService.requestDraggingSequence(event).subscribe(
            /**
            * @param {?} delta
            * @return {?}
            */
            function (delta) {
              var _a;

              _this8.pointerDelta = delta;
              _this8.isDragging = true;
              (_a = _this8.strategy) === null || _a === void 0 ? void 0 : _a.dragging(_this8.pointerDelta);
            },
            /**
            * @return {?}
            */
            function () {},
            /**
            * @return {?}
            */
            function () {
              if (_this8.nzEnableSwipe && _this8.isDragging) {
                /** @type {?} */
                var xDelta = _this8.pointerDelta ? _this8.pointerDelta.x : 0; // Switch to another slide if delta is bigger than third of the width.

                if (Math.abs(xDelta) >
                /** @type {?} */
                _this8.gestureRect.width / 3) {
                  _this8.goTo(xDelta > 0 ? _this8.activeIndex - 1 : _this8.activeIndex + 1);
                } else {
                  _this8.goTo(_this8.activeIndex);
                }

                _this8.gestureRect = null;
                _this8.pointerDelta = null;
              }

              _this8.isDragging = false;
            });
          }
        };

        this.nzDotPosition = 'bottom';
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzCarouselComponent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this.markContentActive(0);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          if (!this.platform.isBrowser) {
            return;
          }

          this.slickListEl =
          /** @type {?} */
          this.slickList.nativeElement;
          this.slickTrackEl =
          /** @type {?} */
          this.slickTrack.nativeElement;
          this.carouselContents.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this9.markContentActive(0);

            _this9.syncStrategy();
          });
          this.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this9.syncStrategy();
          });
          this.switchStrategy();
          this.markContentActive(0);
          this.syncStrategy(); // If embedded in an entry component, it may do initial render at a inappropriate time.
          // ngZone.onStable won't do this trick

          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            _this9.syncStrategy();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzEffect = changes.nzEffect,
              nzDotPosition = changes.nzDotPosition;

          if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
          }

          if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
          }

          if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
          } else {
            this.scheduleNextTransition();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clearScheduledTransition();

          if (this.strategy) {
            this.strategy.dispose();
          }

          this.destroy$.next();
          this.destroy$.complete();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["LEFT_ARROW"]) {
            e.preventDefault();
            this.pre();
          } else if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["RIGHT_ARROW"]) {
            this.next();
            e.preventDefault();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          this.goTo(this.activeIndex + 1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "pre",
        value: function pre() {
          this.goTo(this.activeIndex - 1);
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "goTo",
        value: function goTo(index) {
          var _this10 = this;

          if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            var length = this.carouselContents.length;
            /** @type {?} */

            var from = this.activeIndex;
            /** @type {?} */

            var to = (index + length) % length;
            this.isTransiting = true;
            this.nzBeforeChange.emit({
              from: from,
              to: to
            });

            /** @type {?} */
            this.strategy["switch"](this.activeIndex, index).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this10.scheduleNextTransition();

              _this10.nzAfterChange.emit(index);

              _this10.isTransiting = false;
            });
            this.markContentActive(to);
            this.cdr.markForCheck();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "switchStrategy",
        value: function switchStrategy() {
          var _this11 = this;

          if (this.strategy) {
            this.strategy.dispose();
          } // Load custom strategies first.

          /** @type {?} */


          var customStrategy = this.customStrategies ? this.customStrategies.find(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return s.name === _this11.nzEffect;
          }) : null;

          if (customStrategy) {
            this.strategy = new
            /** @type {?} */
            customStrategy.strategy(this, this.cdr, this.renderer);
            return;
          }

          this.strategy = this.nzEffect === 'scrollx' ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer) : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "scheduleNextTransition",
        value: function scheduleNextTransition() {
          var _this12 = this;

          this.clearScheduledTransition();

          if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this12.goTo(_this12.activeIndex + 1);
            }, this.nzAutoPlaySpeed);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "clearScheduledTransition",
        value: function clearScheduledTransition() {
          if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "markContentActive",
        value: function markContentActive(index) {
          this.activeIndex = index;

          if (this.carouselContents) {
            this.carouselContents.forEach(
            /**
            * @param {?} slide
            * @param {?} i
            * @return {?}
            */
            function (slide, i) {
              slide.isActive = index === i;
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "syncStrategy",
        value: function syncStrategy() {
          if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
          }
        }
      }, {
        key: "nzDotPosition",
        set: function set(value) {
          this._dotPosition = value;

          if (value === 'left' || value === 'right') {
            this.vertical = true;
          } else {
            this.vertical = false;
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._dotPosition;
        }
      }]);

      return NzCarouselComponent;
    }();

    NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) {
      return new (t || NzCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzDragService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NZ_CAROUSEL_CUSTOM_STRATEGIES, 8));
    };

    NzCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzCarouselComponent,
      selectors: [["nz-carousel"]],
      contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzCarouselContentDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carouselContents = _t);
        }
      },
      viewQuery: function NzCarouselComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slickList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slickTrack = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-carousel-vertical", ctx.vertical);
        }
      },
      inputs: {
        nzEffect: "nzEffect",
        nzEnableSwipe: "nzEnableSwipe",
        nzDots: "nzDots",
        nzAutoPlay: "nzAutoPlay",
        nzAutoPlaySpeed: "nzAutoPlaySpeed",
        nzTransitionSpeed: "nzTransitionSpeed",
        nzDotPosition: "nzDotPosition",
        nzDotRender: "nzDotRender"
      },
      outputs: {
        nzBeforeChange: "nzBeforeChange",
        nzAfterChange: "nzAfterChange"
      },
      exportAs: ["nzCarousel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 3,
      consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NzCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) {
            return ctx.onKeyDown($event);
          })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) {
            return ctx.pointerDown($event);
          })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) {
            return ctx.pointerDown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzCarouselComponent_ul_6_Template, 2, 9, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("slick-vertical", ctx.nzDotPosition === "left" || ctx.nzDotPosition === "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzDots);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzCarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzResizeService"]
      }, {
        type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzDragService"]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
        }]
      }];
    };

    NzCarouselComponent.propDecorators = {
      carouselContents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [NzCarouselContentDirective]
      }],
      slickList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['slickList', {
          "static": false
        }]
      }],
      slickTrack: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['slickTrack', {
          "static": false
        }]
      }],
      nzDotRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzEffect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzEnableSwipe: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDots: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAutoPlay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAutoPlaySpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTransitionSpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDotPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzBeforeChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzAfterChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], NzCarouselComponent.prototype, "nzEffect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], NzCarouselComponent.prototype, "nzDots", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [String])], NzCarouselComponent.prototype, "nzDotPosition", null);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCarouselContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[nz-carousel-content]',
          exportAs: 'nzCarouselContent'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          selector: 'nz-carousel',
          exportAs: 'nzCarousel',
          preserveWhitespaces: false,
          template: "\n    <div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzDotPosition === 'left' || nzDotPosition === 'right'\">\n      <div\n        #slickList\n        class=\"slick-list\"\n        tabindex=\"-1\"\n        (keydown)=\"onKeyDown($event)\"\n        (mousedown)=\"pointerDown($event)\"\n        (touchstart)=\"pointerDown($event)\"\n      >\n        <!-- Render carousel items. -->\n        <div class=\"slick-track\" #slickTrack>\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <!-- Render dots. -->\n      <ul\n        class=\"slick-dots\"\n        *ngIf=\"nzDots\"\n        [class.slick-dots-top]=\"nzDotPosition === 'top'\"\n        [class.slick-dots-bottom]=\"nzDotPosition === 'bottom'\"\n        [class.slick-dots-left]=\"nzDotPosition === 'left'\"\n        [class.slick-dots-right]=\"nzDotPosition === 'right'\"\n      >\n        <li *ngFor=\"let content of carouselContents; let i = index\" [class.slick-active]=\"content.isActive\" (click)=\"goTo(i)\">\n          <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"> </ng-template>\n        </li>\n      </ul>\n    </div>\n\n    <ng-template #renderDotTemplate let-index>\n      <button>{{ index + 1 }}</button>\n    </ng-template>\n  ",
          host: {
            '[class.ant-carousel-vertical]': 'vertical'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzResizeService"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzDragService"]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
          }]
        }];
      }, {
        nzEffect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzEnableSwipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDots: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAutoPlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAutoPlaySpeed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTransitionSpeed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBeforeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzAfterChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzDotPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        carouselContents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [NzCarouselContentDirective]
        }],
        slickList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['slickList', {
            "static": false
          }]
        }],
        slickTrack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['slickTrack', {
            "static": false
          }]
        }],
        nzDotRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: carousel.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzCarouselModule = function NzCarouselModule() {
      _classCallCheck(this, NzCarouselModule);
    };

    NzCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NzCarouselModule
    });
    NzCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NzCarouselModule_Factory(t) {
        return new (t || NzCarouselModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCarouselModule, {
        declarations: function declarations() {
          return [NzCarouselComponent, NzCarouselContentDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
        },
        exports: function exports() {
          return [NzCarouselComponent, NzCarouselContentDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [NzCarouselComponent, NzCarouselContentDirective],
          exports: [NzCarouselComponent, NzCarouselContentDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]
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
     * Generated from: ng-zorro-antd-carousel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-carousel.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-rate.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-rate.js ***!
    \********************************************************************************/

  /*! exports provided: NzRateComponent, NzRateItemComponent, NzRateModule */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdRateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRateComponent", function () {
      return NzRateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRateItemComponent", function () {
      return NzRateItemComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzRateModule", function () {
      return NzRateModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/tooltip */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: rate.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["ulElement"];

    function NzRateComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r4.onItemHover(i_r3, $event);
        })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r6.onItemClick(i_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.starStyleArray[i_r3] || "")("nzTooltipTitle", ctx_r1.nzTooltips[i_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowHalf", ctx_r1.nzAllowHalf)("character", ctx_r1.nzCharacter);
      }
    }

    var _c1 = ["nz-rate-item", ""];

    function NzRateItemComponent_ng_template_1_Template(rf, ctx) {}

    function NzRateItemComponent_ng_template_3_Template(rf, ctx) {}

    function NzRateItemComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 4);
      }
    }

    var NZ_CONFIG_COMPONENT_NAME = 'rate';

    var NzRateComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzConfigService
       * @param {?} renderer
       * @param {?} cdr
       */
      function NzRateComponent(nzConfigService, renderer, cdr) {
        _classCallCheck(this, NzRateComponent);

        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzAllowClear = true;
        this.nzAllowHalf = false;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzCount = 5;
        this.nzTooltips = [];
        this.nzOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnHoverChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.classMap = {};
        this.starArray = [];
        this.starStyleArray = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.hasHalf = false;
        this.hoverValue = 0;
        this.isFocused = false;
        this._value = 0;

        this.onChange =
        /**
        * @return {?}
        */
        function () {
          return null;
        };

        this.onTouched =
        /**
        * @return {?}
        */
        function () {
          return null;
        };
      }
      /**
       * @return {?}
       */


      _createClass(NzRateComponent, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          var nzAutoFocus = changes.nzAutoFocus,
              nzCount = changes.nzCount,
              nzValue = changes.nzValue;

          if (nzAutoFocus && !nzAutoFocus.isFirstChange()) {
            /** @type {?} */
            var el =
            /** @type {?} */
            this.ulElement.nativeElement;

            if (this.nzAutoFocus && !this.nzDisabled) {
              this.renderer.setAttribute(el, 'autofocus', 'autofocus');
            } else {
              this.renderer.removeAttribute(el, 'autofocus');
            }
          }

          if (nzCount) {
            this.updateStarArray();
          }

          if (nzValue) {
            this.updateStarStyle();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this13.cdr.markForCheck();
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
         * @param {?} index
         * @param {?} isHalf
         * @return {?}
         */

      }, {
        key: "onItemClick",
        value: function onItemClick(index, isHalf) {
          if (this.nzDisabled) {
            return;
          }

          this.hoverValue = index + 1;
          /** @type {?} */

          var actualValue = isHalf ? index + 0.5 : index + 1;

          if (this.nzValue === actualValue) {
            if (this.nzAllowClear) {
              this.nzValue = 0;
              this.onChange(this.nzValue);
            }
          } else {
            this.nzValue = actualValue;
            this.onChange(this.nzValue);
          }

          this.updateStarStyle();
        }
        /**
         * @param {?} index
         * @param {?} isHalf
         * @return {?}
         */

      }, {
        key: "onItemHover",
        value: function onItemHover(index, isHalf) {
          if (this.nzDisabled || this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
          }

          this.hoverValue = index + 1;
          this.hasHalf = isHalf;
          this.nzOnHoverChange.emit(this.hoverValue);
          this.updateStarStyle();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onRateLeave",
        value: function onRateLeave() {
          this.hasHalf = !Number.isInteger(this.nzValue);
          this.hoverValue = Math.ceil(this.nzValue);
          this.updateStarStyle();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onFocus",
        value: function onFocus(e) {
          this.isFocused = true;
          this.nzOnFocus.emit(e);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onBlur",
        value: function onBlur(e) {
          this.isFocused = false;
          this.nzOnBlur.emit(e);
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          /** @type {?} */
          this.ulElement.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          /** @type {?} */
          this.ulElement.nativeElement.blur();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          /** @type {?} */
          var oldVal = this.nzValue;

          if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"] && this.nzValue < this.nzCount) {
            this.nzValue += this.nzAllowHalf ? 0.5 : 1;
          } else if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"] && this.nzValue > 0) {
            this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
          }

          if (oldVal !== this.nzValue) {
            this.onChange(this.nzValue);
            this.nzOnKeyDown.emit(e);
            this.updateStarStyle();
            this.cdr.markForCheck();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "updateStarArray",
        value: function updateStarArray() {
          this.starArray = Array(this.nzCount).fill(0).map(
          /**
          * @param {?} _
          * @param {?} i
          * @return {?}
          */
          function (_, i) {
            return i;
          });
          this.updateStarStyle();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "updateStarStyle",
        value: function updateStarStyle() {
          var _this14 = this;

          this.starStyleArray = this.starArray.map(
          /**
          * @param {?} i
          * @return {?}
          */
          function (i) {
            var _ref;

            /** @type {?} */
            var prefix = 'ant-rate-star';
            /** @type {?} */

            var value = i + 1;
            return _ref = {}, _defineProperty(_ref, "".concat(prefix, "-full"), value < _this14.hoverValue || !_this14.hasHalf && value === _this14.hoverValue), _defineProperty(_ref, "".concat(prefix, "-half"), _this14.hasHalf && value === _this14.hoverValue), _defineProperty(_ref, "".concat(prefix, "-active"), _this14.hasHalf && value === _this14.hoverValue), _defineProperty(_ref, "".concat(prefix, "-zero"), value > _this14.hoverValue), _defineProperty(_ref, "".concat(prefix, "-focused"), _this14.hasHalf && value === _this14.hoverValue && _this14.isFocused), _ref;
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.nzValue = value || 0;
          this.updateStarArray();
          this.cdr.markForCheck();
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.nzDisabled = isDisabled;
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
      }, {
        key: "nzValue",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} input
         * @return {?}
         */
        ,
        set: function set(input) {
          if (this._value === input) {
            return;
          }

          this._value = input;
          this.hasHalf = !Number.isInteger(input);
          this.hoverValue = Math.ceil(input);
        }
      }]);

      return NzRateComponent;
    }();

    NzRateComponent.ɵfac = function NzRateComponent_Factory(t) {
      return new (t || NzRateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
    };

    NzRateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzRateComponent,
      selectors: [["nz-rate"]],
      viewQuery: function NzRateComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ulElement = _t.first);
        }
      },
      inputs: {
        nzAllowClear: "nzAllowClear",
        nzAllowHalf: "nzAllowHalf",
        nzDisabled: "nzDisabled",
        nzAutoFocus: "nzAutoFocus",
        nzCount: "nzCount",
        nzTooltips: "nzTooltips",
        nzCharacter: "nzCharacter"
      },
      outputs: {
        nzOnBlur: "nzOnBlur",
        nzOnFocus: "nzOnFocus",
        nzOnHoverChange: "nzOnHoverChange",
        nzOnKeyDown: "nzOnKeyDown"
      },
      exportAs: ["nzRate"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzRateComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 5,
      consts: [[1, "ant-rate", 3, "ngClass", "tabindex", "blur", "focus", "keydown", "mouseleave"], ["ulElement", ""], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTooltipTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTooltipTitle"], ["nz-rate-item", "", 3, "allowHalf", "character", "itemHover", "itemClick"]],
      template: function NzRateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function NzRateComponent_Template_ul_blur_0_listener($event) {
            return ctx.onBlur($event);
          })("focus", function NzRateComponent_Template_ul_focus_0_listener($event) {
            return ctx.onFocus($event);
          })("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) {
            ctx.onKeyDown($event);
            return $event.preventDefault();
          })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) {
            ctx.onRateLeave();
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzRateComponent_li_2_Template, 2, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-rate-disabled", ctx.nzDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? 0 - 1 : 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.starArray);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzTooltipDirective"], NzRateItemComponent];
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzRateComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }];
    };

    NzRateComponent.propDecorators = {
      ulElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['ulElement', {
          "static": false
        }]
      }],
      nzAllowClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAllowHalf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAutoFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCharacter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTooltips: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOnBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnHoverChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzRateComponent.prototype, "nzAllowClear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzRateComponent.prototype, "nzAllowHalf", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzRateComponent.prototype, "nzDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzRateComponent.prototype, "nzAutoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NzRateComponent.prototype, "nzCount", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: rate-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRateItemComponent = /*#__PURE__*/function () {
      function NzRateItemComponent() {
        _classCallCheck(this, NzRateItemComponent);

        this.allowHalf = false;
        this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      }
      /**
       * @param {?} isHalf
       * @return {?}
       */


      _createClass(NzRateItemComponent, [{
        key: "hoverRate",
        value: function hoverRate(isHalf) {
          this.itemHover.next(isHalf && this.allowHalf);
        }
        /**
         * @param {?} isHalf
         * @return {?}
         */

      }, {
        key: "clickRate",
        value: function clickRate(isHalf) {
          this.itemClick.next(isHalf && this.allowHalf);
        }
      }]);

      return NzRateItemComponent;
    }();

    NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) {
      return new (t || NzRateItemComponent)();
    };

    NzRateItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzRateItemComponent,
      selectors: [["", "nz-rate-item", ""]],
      inputs: {
        allowHalf: "allowHalf",
        character: "character"
      },
      outputs: {
        itemHover: "itemHover",
        itemClick: "itemClick"
      },
      exportAs: ["nzRateItem"],
      attrs: _c1,
      decls: 6,
      vars: 2,
      consts: [[1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["defaultCharacter", ""], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]],
      template: function NzRateItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) {
            ctx.hoverRate(false);
            return $event.stopPropagation();
          })("click", function NzRateItemComponent_Template_div_click_0_listener() {
            return ctx.clickRate(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) {
            ctx.hoverRate(true);
            return $event.stopPropagation();
          })("click", function NzRateItemComponent_Template_div_click_2_listener() {
            return ctx.clickRate(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.character || _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.character || _r2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzRateItemComponent.propDecorators = {
      character: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      allowHalf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      itemHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      itemClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzRateItemComponent.prototype, "allowHalf", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzRateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          selector: 'nz-rate',
          exportAs: 'nzRate',
          preserveWhitespaces: false,
          template: "\n    <ul\n      #ulElement\n      class=\"ant-rate\"\n      [class.ant-rate-disabled]=\"nzDisabled\"\n      [ngClass]=\"classMap\"\n      (blur)=\"onBlur($event)\"\n      (focus)=\"onFocus($event)\"\n      (keydown)=\"onKeyDown($event); $event.preventDefault()\"\n      (mouseleave)=\"onRateLeave(); $event.stopPropagation()\"\n      [tabindex]=\"nzDisabled ? -1 : 1\"\n    >\n      <li\n        *ngFor=\"let star of starArray; let i = index\"\n        class=\"ant-rate-star\"\n        [ngClass]=\"starStyleArray[i] || ''\"\n        nz-tooltip\n        [nzTooltipTitle]=\"nzTooltips[i]\"\n      >\n        <div\n          nz-rate-item\n          [allowHalf]=\"nzAllowHalf\"\n          [character]=\"nzCharacter\"\n          (itemHover)=\"onItemHover(i, $event)\"\n          (itemClick)=\"onItemClick(i, $event)\"\n        ></div>\n      </li>\n    </ul>\n  ",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzRateComponent;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      }, {
        nzAllowClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAllowHalf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTooltips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnHoverChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        ulElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['ulElement', {
            "static": false
          }]
        }],
        nzCharacter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzRateItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          selector: '[nz-rate-item]',
          exportAs: 'nzRateItem',
          template: "\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate(false); $event.stopPropagation()\" (click)=\"clickRate(false)\">\n      <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n    </div>\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate(true); $event.stopPropagation()\" (click)=\"clickRate(true)\">\n      <ng-template [ngTemplateOutlet]=\"character || defaultCharacter\"></ng-template>\n    </div>\n\n    <ng-template #defaultCharacter>\n      <i nz-icon nzType=\"star\" nzTheme=\"fill\"></i>\n    </ng-template>\n  "
        }]
      }], function () {
        return [];
      }, {
        allowHalf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        itemHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        itemClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        character: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: rate.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzRateModule = function NzRateModule() {
      _classCallCheck(this, NzRateModule);
    };

    NzRateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NzRateModule
    });
    NzRateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NzRateModule_Factory(t) {
        return new (t || NzRateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzRateModule, {
        declarations: function declarations() {
          return [NzRateComponent, NzRateItemComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"]];
        },
        exports: function exports() {
          return [NzRateComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzRateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          exports: [NzRateComponent],
          declarations: [NzRateComponent, NzRateItemComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"]]
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
     * Generated from: ng-zorro-antd-rate.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-rate.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js ***!
    \*************************************************************************************/

  /*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */

  /***/
  function node_modulesNgxOwlCarouselO__ivy_ngcc__Fesm2015NgxOwlCarouselOJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return CarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function () {
      return CarouselSlideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function () {
      return OwlRouterLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function () {
      return OwlRouterLinkWithHrefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function () {
      return SlidesOutputData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NavigationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CarouselService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return OwlLogger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return AutoplayService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return WINDOW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return BrowserWindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return windowFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return browserWindowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return windowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return WINDOW_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return BrowserDocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return documentFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return browserDocumentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return documentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return DOCUMENT_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return LazyLoadService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return AnimateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return AutoHeightService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return HashService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return ResizeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return StageComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "isMouseDragable": a0,
        "isTouchDragable": a1
      };
    };

    function CarouselComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "owl-stage", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("owlDraggable", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "active": a0,
        "owl-dot-text": a1
      };
    };

    function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var dot_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.moveByDot(dot_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dot_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, dot_r4.active, dot_r4.showInnerContent));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", dot_r4.innerContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "disabled": a0
      };
    };

    function CarouselComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.prev == null ? null : ctx_r2.navData.prev.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c2, ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.disabled))("innerHTML", ctx_r2.navData == null ? null : ctx_r2.navData.next == null ? null : ctx_r2.navData.next.htmlText, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx_r2.dotsData == null ? null : ctx_r2.dotsData.disabled));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.dotsData == null ? null : ctx_r2.dotsData.dots);
      }
    }

    var _c3 = function _c3(a0, a1, a2, a3, a4) {
      return {
        "owl-rtl": a0,
        "owl-loaded": a1,
        "owl-responsive": a2,
        "owl-drag": a3,
        "owl-grab": a4
      };
    };

    function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

    function StageComponent_ng_container_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
      }

      if (rf & 2) {
        var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", slide_r1.tplRef);
      }
    }

    var _c4 = function _c4(a0, a1, a2, a3) {
      return {
        "width": a0,
        "margin-left": a1,
        "margin-right": a2,
        "left": a3
      };
    };

    function StageComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var slide_r1 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.clear(slide_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StageComponent_ng_container_2_2_Template, 1, 1, undefined, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", slide_r1.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](4, _c4, slide_r1.width + "px", slide_r1.marginL ? slide_r1.marginL + "px" : "", slide_r1.marginR ? slide_r1.marginR + "px" : "", slide_r1.left))("@autoHeight", slide_r1.heightState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", slide_r1.load);
      }
    }

    var _c5 = function _c5(a0, a1, a2, a3, a4) {
      return {
        "width": a0,
        "transform": a1,
        "transition": a2,
        "padding-left": a3,
        "padding-right": a4
      };
    };

    var ResizeService = /*#__PURE__*/function () {
      function ResizeService(eventManager) {
        _classCallCheck(this, ResizeService);

        this.eventManager = eventManager;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
      }
      /**
       * Makes resizeSubject become Observable
       * @returns Observable of resizeSubject
       */


      _createClass(ResizeService, [{
        key: "onResize",

        /**
         * Handler of 'resize' event. Passes data throw resizeSubject
         * @param event Event Object of 'resize' event
         */
        value: function onResize(event) {
          this.resizeSubject.next(event.target);
        }
        /**
         * Handler of 'onload' event. Defines the width of window
         * @param event Event Object of 'onload' event
         */

      }, {
        key: "onLoaded",
        value: function onLoaded(event) {
          this.windowWidth = event.target;
        }
      }, {
        key: "onResize$",
        get: function get() {
          return this.resizeSubject.asObservable();
        }
      }]);

      return ResizeService;
    }();

    ResizeService.ɵfac = function ResizeService_Factory(t) {
      return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]));
    };

    ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ResizeService,
      factory: ResizeService.ɵfac
    });

    ResizeService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
      }];
    };
    /**
     * Defaults value of options
     */


    var OwlCarouselOConfig = function OwlCarouselOConfig() {
      _classCallCheck(this, OwlCarouselOConfig);

      this.items = 3;
      this.skip_validateItems = false;
      this.loop = false;
      this.center = false;
      this.rewind = false;
      this.mouseDrag = true;
      this.touchDrag = true;
      this.pullDrag = true;
      this.freeDrag = false;
      this.margin = 0;
      this.stagePadding = 0;
      this.merge = false;
      this.mergeFit = true;
      this.autoWidth = false;
      this.startPosition = 0;
      this.rtl = false;
      this.smartSpeed = 250;
      this.fluidSpeed = false;
      this.dragEndSpeed = false;
      this.responsive = {};
      this.responsiveRefreshRate = 200; // defaults to Navigation

      this.nav = false;
      this.navText = ['prev', 'next'];
      this.navSpeed = false;
      this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = true;
      this.dotsEach = false;
      this.dotsData = false;
      this.dotsSpeed = false; // defaults to Autoplay

      this.autoplay = false;
      this.autoplayTimeout = 5000;
      this.autoplayHoverPause = false;
      this.autoplaySpeed = false; // defaults to LazyLoading

      this.lazyLoad = false;
      this.lazyLoadEager = 0; // defaults to Animate

      this.slideTransition = '';
      this.animateOut = false;
      this.animateIn = false; // defaults to AutoHeight

      this.autoHeight = false; // defaults to Hash

      this.URLhashListener = false;
    };
    /**
     * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
     * class below is copy of OwlOptions but its all props have string value showing certain type;
     * this is class is being used just in method _validateOptions() of CarouselService;
     */


    var OwlOptionsMockedTypes = function OwlOptionsMockedTypes() {
      _classCallCheck(this, OwlOptionsMockedTypes);

      this.items = 'number';
      this.skip_validateItems = 'boolean';
      this.loop = 'boolean';
      this.center = 'boolean';
      this.rewind = 'boolean';
      this.mouseDrag = 'boolean';
      this.touchDrag = 'boolean';
      this.pullDrag = 'boolean';
      this.freeDrag = 'boolean';
      this.margin = 'number';
      this.stagePadding = 'number';
      this.merge = 'boolean';
      this.mergeFit = 'boolean';
      this.autoWidth = 'boolean';
      this.startPosition = 'number|string';
      this.rtl = 'boolean';
      this.smartSpeed = 'number';
      this.fluidSpeed = 'boolean';
      this.dragEndSpeed = 'number|boolean';
      this.responsive = {};
      this.responsiveRefreshRate = 'number'; // defaults to Navigation

      this.nav = 'boolean';
      this.navText = 'string[]';
      this.navSpeed = 'number|boolean';
      this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = 'boolean';
      this.dotsEach = 'number|boolean';
      this.dotsData = 'boolean';
      this.dotsSpeed = 'number|boolean'; // defaults to Autoplay

      this.autoplay = 'boolean';
      this.autoplayTimeout = 'number';
      this.autoplayHoverPause = 'boolean';
      this.autoplaySpeed = 'number|boolean'; // defaults to LazyLoading

      this.lazyLoad = 'boolean';
      this.lazyLoadEager = 'number'; // defaults to Animate

      this.slideTransition = 'string';
      this.animateOut = 'string|boolean';
      this.animateIn = 'string|boolean'; // defaults to AutoHeight

      this.autoHeight = 'boolean'; // defaults to Hash

      this.URLhashListener = "boolean";
    };

    var OwlLogger = /*#__PURE__*/function () {
      function OwlLogger(errorHandler) {
        _classCallCheck(this, OwlLogger);

        this.errorHandler = errorHandler;
      }

      _createClass(OwlLogger, [{
        key: "log",
        value: function log(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            var _console;

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(_console, [value].concat(rest));
          }
        }
      }, {
        key: "error",
        value: function error(_error) {
          this.errorHandler.handleError(_error);
        }
      }, {
        key: "warn",
        value: function warn(value) {
          var _console2;

          for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
          }

          (_console2 = console).warn.apply(_console2, [value].concat(rest));
        }
      }]);

      return OwlLogger;
    }();

    OwlLogger.ɵfac = function OwlLogger_Factory(t) {
      return new (t || OwlLogger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]));
    };

    OwlLogger.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OwlLogger,
      factory: OwlLogger.ɵfac
    });

    OwlLogger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
      }];
    };
    /**
     * Current state information and their tags.
     */


    var States = function States() {
      _classCallCheck(this, States);
    };
    /**
     * Enumeration for types.
     * @enum {String}
     */


    var Type;

    (function (Type) {
      Type["Event"] = "event";
      Type["State"] = "state";
    })(Type || (Type = {}));

    ;
    /**
     * Enumeration for width.
     * @enum {String}
     */

    var Width;

    (function (Width) {
      Width["Default"] = "default";
      Width["Inner"] = "inner";
      Width["Outer"] = "outer";
    })(Width || (Width = {}));

    ;
    /**
     * Model for coords of .owl-stage
     */

    var Coords = function Coords() {
      _classCallCheck(this, Coords);
    };
    /**
     * Model for all current data of carousel
     */


    var CarouselCurrentData = function CarouselCurrentData() {
      _classCallCheck(this, CarouselCurrentData);
    };

    var CarouselService = /*#__PURE__*/function () {
      function CarouselService(logger) {
        var _this15 = this;

        _classCallCheck(this, CarouselService);

        this.logger = logger;
        /**
        * Subject for passing data needed for managing View
        */

        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel got initializes
        */

        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings start changinf
        */

        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings have changed
        */

        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel starts translating or moving
        */

        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel stopped translating or moving
        */

        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
        */

        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
        */

        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel starts
        */

        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel is ended
        */

        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel starts
        */

        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel is ended
        */

        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Current settings for the carousel.
         */

        this.settings = {
          items: 0
        };
        /**
        * Initial data for setting classes to element .owl-carousel
        */

        this.owlDOMData = {
          rtl: false,
          isResponsive: false,
          isRefreshed: false,
          isLoaded: false,
          isLoading: false,
          isMouseDragable: false,
          isGrab: false,
          isTouchDragable: false
        };
        /**
        * Initial data of .owl-stage
        */

        this.stageData = {
          transform: 'translate3d(0px,0px,0px)',
          transition: '0s',
          width: 0,
          paddingL: 0,
          paddingR: 0
        };
        /**
         * All real items.
         */

        this._items = []; // is equal to this.slides

        /**
        * Array with width of every slide.
        */

        this._widths = [];
        /**
        * Currently suppressed events to prevent them from beeing retriggered.
        */

        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */

        this._plugins = {};
        /**
        * Absolute current position.
        */

        this._current = null;
        /**
        * All cloned items.
        */

        this._clones = [];
        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         */

        this._mergers = [];
        /**
        * Animation speed in milliseconds.
        */

        this._speed = null;
        /**
        * Coordinates of all items in pixel.
        * @todo The name of this member is missleading.
        */

        this._coordinates = [];
        /**
        * Current breakpoint.
        * @todo Real media queries would be nice.
        */

        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */

        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */

        this._options = {};
        /**
         * Invalidated parts within the update process.
         */

        this._invalidated = {};
        /**
         * Current state information and their tags.
         */

        this._states = {
          current: {},
          tags: {
            initializing: ['busy'],
            animating: ['busy'],
            dragging: ['interacting']
          }
        };
        /**
         * Ordered list of workers for the update process.
        */

        this._pipe = [// {
        //   filter: ['width', 'settings'],
        //   run: () => {
        //     this._width = this.carouselWindowWidth;
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            cache.current = _this15._items && _this15._items[_this15.relative(_this15._current)].id;
          }
        }, // {
        //   filter: ['items', 'settings'],
        //   run: function() {
        //     // this.$stage.children('.cloned').remove();
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var margin = _this15.settings.margin || '',
                grid = !_this15.settings.autoWidth,
                rtl = _this15.settings.rtl,
                css = {
              'margin-left': rtl ? margin : '',
              'margin-right': rtl ? '' : margin
            };

            if (!grid) {
              _this15.slidesData.forEach(function (slide) {
                slide.marginL = css['margin-left'];
                slide.marginR = css['margin-right'];
              });
            }

            cache.css = css;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var width = +(_this15.width() / _this15.settings.items).toFixed(3) - _this15.settings.margin,
                grid = !_this15.settings.autoWidth,
                widths = [];
            var merge = null,
                iterator = _this15._items.length;
            cache.items = {
              merge: false,
              width: width
            };

            while (iterator--) {
              merge = _this15._mergers[iterator];
              merge = _this15.settings.mergeFit && Math.min(merge, _this15.settings.items) || merge;
              cache.items.merge = merge > 1 || cache.items.merge;
              widths[iterator] = !grid ? _this15._items[iterator].width ? _this15._items[iterator].width : width : width * merge;
            }

            _this15._widths = widths;

            _this15.slidesData.forEach(function (slide, i) {
              slide.width = _this15._widths[i];
              slide.marginR = cache.css['margin-right'];
              slide.marginL = cache.css['margin-left'];
            });
          }
        }, {
          filter: ['items', 'settings'],
          run: function run() {
            var clones = [],
                items = _this15._items,
                settings = _this15.settings,
                // TODO: Should be computed from number of min width items in stage
            view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2;
            var append = [],
                prepend = [],
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
            repeat /= 2;

            while (repeat--) {
              // Switch to only using appended clones
              clones.push(_this15.normalize(clones.length / 2, true));
              append.push(Object.assign({}, _this15.slidesData[clones[clones.length - 1]]));
              clones.push(_this15.normalize(items.length - 1 - (clones.length - 1) / 2, true));
              prepend.unshift(Object.assign({}, _this15.slidesData[clones[clones.length - 1]]));
            }

            _this15._clones = clones;
            append = append.map(function (slide) {
              slide.id = "".concat(_this15.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            prepend = prepend.map(function (slide) {
              slide.id = "".concat(_this15.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            _this15.slidesData = prepend.concat(_this15.slidesData).concat(append);
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var rtl = _this15.settings.rtl ? 1 : -1,
                size = _this15._clones.length + _this15._items.length,
                coordinates = [];
            var iterator = -1,
                previous = 0,
                current = 0;

            while (++iterator < size) {
              previous = coordinates[iterator - 1] || 0;
              current = _this15._widths[_this15.relative(iterator)] + _this15.settings.margin;
              coordinates.push(previous + current * rtl);
            }

            _this15._coordinates = coordinates;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var padding = _this15.settings.stagePadding,
                coordinates = _this15._coordinates,
                css = {
              'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
              'padding-left': padding || '',
              'padding-right': padding || ''
            };
            _this15.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element

            _this15.stageData.paddingL = css['padding-left'];
            _this15.stageData.paddingR = css['padding-right'];
          }
        }, {
          //   filter: [ 'width', 'items', 'settings' ],
          //   run: cache => {
          // 		// this method sets the width for every slide, but I set it in different way earlier
          // 		const grid = !this.settings.autoWidth,
          // 		items = this.$stage.children(); // use this.slidesData
          //     let iterator = this._coordinates.length;
          //     if (grid && cache.items.merge) {
          //       while (iterator--) {
          //         cache.css.width = this._widths[this.relative(iterator)];
          //         items.eq(iterator).css(cache.css);
          //       }
          //     } else if (grid) {
          //       cache.css.width = cache.items.width;
          //       items.css(cache.css);
          //     }
          //   }
          // }, {
          //   filter: [ 'items' ],
          //   run: function() {
          //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
          //   }
          // }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var current = cache.current ? _this15.slidesData.findIndex(function (slide) {
              return slide.id === cache.current;
            }) : 0;
            current = Math.max(_this15.minimum(), Math.min(_this15.maximum(), current));

            _this15.reset(current);
          }
        }, {
          filter: ['position'],
          run: function run() {
            _this15.animate(_this15.coordinates(_this15._current));
          }
        }, {
          filter: ['width', 'position', 'items', 'settings'],
          run: function run() {
            var rtl = _this15.settings.rtl ? 1 : -1,
                padding = _this15.settings.stagePadding * 2,
                matches = [];
            var begin, end, inner, outer, i, n;
            begin = _this15.coordinates(_this15.current());

            if (typeof begin === 'number') {
              begin += padding;
            } else {
              begin = 0;
            }

            end = begin + _this15.width() * rtl;

            if (rtl === -1 && _this15.settings.center) {
              var result = _this15._coordinates.filter(function (element) {
                return _this15.settings.items % 2 === 1 ? element >= begin : element > begin;
              });

              begin = result.length ? result[result.length - 1] : begin;
            }

            for (i = 0, n = _this15._coordinates.length; i < n; i++) {
              inner = Math.ceil(_this15._coordinates[i - 1] || 0);
              outer = Math.ceil(Math.abs(_this15._coordinates[i]) + padding * rtl);

              if (_this15._op(inner, '<=', begin) && _this15._op(inner, '>', end) || _this15._op(outer, '<', begin) && _this15._op(outer, '>', end)) {
                matches.push(i);
              }
            }

            _this15.slidesData.forEach(function (slide) {
              slide.isActive = false;
              return slide;
            });

            matches.forEach(function (item) {
              _this15.slidesData[item].isActive = true;
            });

            if (_this15.settings.center) {
              _this15.slidesData.forEach(function (slide) {
                slide.isCentered = false;
                return slide;
              });

              _this15.slidesData[_this15.current()].isCentered = true;
            }
          }
        }];
      } // Is needed for tests


      _createClass(CarouselService, [{
        key: "getViewCurSettings",

        /**
         * Makes _viewSettingsShipper$ Subject become Observable
         * @returns Observable of _viewSettingsShipper$ Subject
         */
        value: function getViewCurSettings() {
          return this._viewSettingsShipper$.asObservable();
        }
        /**
         * Makes _initializedCarousel$ Subject become Observable
         * @returns Observable of _initializedCarousel$ Subject
         */

      }, {
        key: "getInitializedState",
        value: function getInitializedState() {
          return this._initializedCarousel$.asObservable();
        }
        /**
         * Makes _changeSettingsCarousel$ Subject become Observable
         * @returns Observable of _changeSettingsCarousel$ Subject
         */

      }, {
        key: "getChangeState",
        value: function getChangeState() {
          return this._changeSettingsCarousel$.asObservable();
        }
        /**
         * Makes _changedSettingsCarousel$ Subject become Observable
         * @returns Observable of _changedSettingsCarousel$ Subject
         */

      }, {
        key: "getChangedState",
        value: function getChangedState() {
          return this._changedSettingsCarousel$.asObservable();
        }
        /**
         * Makes _translateCarousel$ Subject become Observable
         * @returns Observable of _translateCarousel$ Subject
         */

      }, {
        key: "getTranslateState",
        value: function getTranslateState() {
          return this._translateCarousel$.asObservable();
        }
        /**
         * Makes _translatedCarousel$ Subject become Observable
         * @returns Observable of _translatedCarousel$ Subject
         */

      }, {
        key: "getTranslatedState",
        value: function getTranslatedState() {
          return this._translatedCarousel$.asObservable();
        }
        /**
         * Makes _resizeCarousel$ Subject become Observable
         * @returns Observable of _resizeCarousel$ Subject
         */

      }, {
        key: "getResizeState",
        value: function getResizeState() {
          return this._resizeCarousel$.asObservable();
        }
        /**
         * Makes _resizedCarousel$ Subject become Observable
         * @returns Observable of _resizedCarousel$ Subject
         */

      }, {
        key: "getResizedState",
        value: function getResizedState() {
          return this._resizedCarousel$.asObservable();
        }
        /**
         * Makes _refreshCarousel$ Subject become Observable
         * @returns Observable of _refreshCarousel$ Subject
         */

      }, {
        key: "getRefreshState",
        value: function getRefreshState() {
          return this._refreshCarousel$.asObservable();
        }
        /**
         * Makes _refreshedCarousel$ Subject become Observable
         * @returns Observable of _refreshedCarousel$ Subject
         */

      }, {
        key: "getRefreshedState",
        value: function getRefreshedState() {
          return this._refreshedCarousel$.asObservable();
        }
        /**
         * Makes _dragCarousel$ Subject become Observable
         * @returns Observable of _dragCarousel$ Subject
         */

      }, {
        key: "getDragState",
        value: function getDragState() {
          return this._dragCarousel$.asObservable();
        }
        /**
         * Makes _draggedCarousel$ Subject become Observable
         * @returns Observable of _draggedCarousel$ Subject
         */

      }, {
        key: "getDraggedState",
        value: function getDraggedState() {
          return this._draggedCarousel$.asObservable();
        }
        /**
         * Setups custom options expanding default options
         * @param options custom options
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          var configOptions = new OwlCarouselOConfig();

          var checkedOptions = this._validateOptions(options, configOptions);

          this._options = Object.assign(Object.assign({}, configOptions), checkedOptions);
        }
        /**
         * Checks whether user's option are set properly. Cheking is based on typings;
         * @param options options set by user
         * @param configOptions default options
         * @returns checked and modified (if it's needed) user's options
         *
         * Notes:
         * 	- if user set option with wrong type, it'll be written in console
         */

      }, {
        key: "_validateOptions",
        value: function _validateOptions(options, configOptions) {
          var _this16 = this;

          var checkedOptions = Object.assign({}, options);
          var mockedTypes = new OwlOptionsMockedTypes();

          var setRightOption = function setRightOption(type, key) {
            _this16.logger.log("options.".concat(key, " must be type of ").concat(type, "; ").concat(key, "=").concat(options[key], " skipped to defaults: ").concat(key, "=").concat(configOptions[key]));

            return configOptions[key];
          };

          for (var key in checkedOptions) {
            if (checkedOptions.hasOwnProperty(key)) {
              // condition could be shortened but it gets harder for understanding
              if (mockedTypes[key] === 'number') {
                if (this._isNumeric(checkedOptions[key])) {
                  checkedOptions[key] = +checkedOptions[key];
                  checkedOptions[key] = key === 'items' ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              } else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|boolean' && !this._isNumberOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|string' && !this._isNumberOrString(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string|boolean' && !this._isStringOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string[]') {
                if (Array.isArray(checkedOptions[key])) {
                  var isString = false;
                  checkedOptions[key].forEach(function (element) {
                    isString = typeof element === 'string' ? true : false;
                  });

                  if (!isString) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                  }

                  ;
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              }
            }
          }

          return checkedOptions;
        }
        /**
         * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
         * @param items option items set by user
         * @param skip_validateItems option `skip_validateItems` set by user
         * @returns right number of items
         */

      }, {
        key: "_validateItems",
        value: function _validateItems(items, skip_validateItems) {
          var result = items;

          if (items > this._items.length) {
            if (skip_validateItems) {
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
            } else {
              result = this._items.length;
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
            }
          } else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
              this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
          }

          return result;
        }
        /**
         * Set current width of carousel
         * @param width width of carousel Window
         */

      }, {
        key: "setCarouselWidth",
        value: function setCarouselWidth(width) {
          this._width = width;
        }
        /**
           * Setups the current settings.
           * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
           * @todo Support for media queries by using `matchMedia` would be nice.
           * @param carouselWidth width of carousel
           * @param slides array of slides
           * @param options options set by user
           */

      }, {
        key: "setup",
        value: function setup(carouselWidth, slides, options) {
          this.setCarouselWidth(carouselWidth);
          this.setItems(slides);

          this._defineSlidesData();

          this.setOptions(options);
          this.settings = Object.assign({}, this._options);
          this.setOptionsForViewport();

          this._trigger('change', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });

          this.invalidate('settings'); // must be call of this function;

          this._trigger('changed', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });
        }
        /**
         * Set options for current viewport
         */

      }, {
        key: "setOptionsForViewport",
        value: function setOptionsForViewport() {
          var _this17 = this;

          var viewport = this._width,
              overwrites = this._options.responsive;
          var match = -1;

          if (!Object.keys(overwrites).length) {
            return;
          }

          if (!viewport) {
            this.settings.items = 1;
            return;
          }

          for (var key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
              if (+key <= viewport && +key > match) {
                match = Number(key);
              }
            }
          }

          this.settings = Object.assign(Object.assign(Object.assign({}, this._options), overwrites[match]), {
            items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
          }); // if (typeof this.settings.stagePadding === 'function') {
          // 	this.settings.stagePadding = this.settings.stagePadding();
          // }

          delete this.settings.responsive;
          this.owlDOMData.isResponsive = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          var mergers = [];

          this._items.forEach(function (item) {
            var mergeN = _this17.settings.merge ? item.dataMerge : 1;
            mergers.push(mergeN);
          });

          this._mergers = mergers;
          this._breakpoint = match;
          this.invalidate('settings');
        }
        /**
         * Initializes the carousel.
         * @param slides array of CarouselSlideDirective
         */

      }, {
        key: "initialize",
        value: function initialize(slides) {
          var _this18 = this;

          this.enter('initializing'); // this.trigger('initialize');

          this.owlDOMData.rtl = this.settings.rtl;

          if (this._mergers.length) {
            this._mergers = [];
          }

          slides.forEach(function (item) {
            var mergeN = _this18.settings.merge ? item.dataMerge : 1;

            _this18._mergers.push(mergeN);
          });
          this._clones = [];
          this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
          this.invalidate('items');
          this.refresh();
          this.owlDOMData.isLoaded = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          this.sendChanges();
          this.leave('initializing');

          this._trigger('initialized');
        }
      }, {
        key: "sendChanges",

        /**
         * Sends all data needed for View
         */
        value: function sendChanges() {
          this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
          });
        }
        /**
           * Updates option logic if necessery
           */

      }, {
        key: "_optionsLogic",
        value: function _optionsLogic() {
          if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
          }
        }
        /**
         * Updates the view
         */

      }, {
        key: "update",
        value: function update() {
          var _this19 = this;

          var i = 0;

          var n = this._pipe.length,
              filter = function filter(item) {
            return _this19._invalidated[item];
          },
              cache = {};

          while (i < n) {
            var filteredPipe = this._pipe[i].filter.filter(filter);

            if (this._invalidated.all || filteredPipe.length > 0) {
              this._pipe[i].run(cache);
            }

            i++;
          }

          this.slidesData.forEach(function (slide) {
            return slide.classes = _this19.setCurSlideClasses(slide);
          });
          this.sendChanges();
          this._invalidated = {};

          if (!this.is('valid')) {
            this.enter('valid');
          }
        }
        /**
           * Gets the width of the view.
           * @param [dimension=Width.Default] The dimension to return
           * @returns The width of the view in pixel.
           */

      }, {
        key: "width",
        value: function width(dimension) {
          dimension = dimension || Width.Default;

          switch (dimension) {
            case Width.Inner:
            case Width.Outer:
              return this._width;

            default:
              return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
        }
        /**
           * Refreshes the carousel primarily for adaptive purposes.
           */

      }, {
        key: "refresh",
        value: function refresh() {
          this.enter('refreshing');

          this._trigger('refresh');

          this._defineSlidesData();

          this.setOptionsForViewport();

          this._optionsLogic(); // this.$element.addClass(this.options.refreshClass);


          this.update(); // this.$element.removeClass(this.options.refreshClass);

          this.leave('refreshing');

          this._trigger('refreshed');
        }
        /**
           * Checks window `resize` event.
           * @param curWidth width of .owl-carousel
           */

      }, {
        key: "onResize",
        value: function onResize(curWidth) {
          if (!this._items.length) {
            return false;
          }

          this.setCarouselWidth(curWidth);
          this.enter('resizing'); // if (this.trigger('resize').isDefaultPrevented()) {
          // 	this.leave('resizing');
          // 	return false;
          // }

          this._trigger('resize');

          this.invalidate('width');
          this.refresh();
          this.leave('resizing');

          this._trigger('resized');
        }
        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */

      }, {
        key: "prepareDragging",
        value: function prepareDragging(event) {
          var stage = null,
              transformArr; // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
          // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
          // stage = {
          //   x: stage[stage.length === 16 ? 12 : 4],
          //   y: stage[stage.length === 16 ? 13 : 5]
          // };

          transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
          stage = {
            x: +transformArr[0],
            y: +transformArr[1]
          };

          if (this.is('animating')) {
            this.invalidate('position');
          }

          if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
          }

          this.speed(0);
          return stage;
        }
        /**
         * Enters into a 'dragging' state
         */

      }, {
        key: "enterDragging",
        value: function enterDragging() {
          this.enter('dragging');

          this._trigger('drag');
        }
        /**
           * Defines new coords for .owl-stage while dragging it
           * @todo #261
           * @param event the event arguments.
           * @param dragData initial data got after starting dragging
           * @returns coords or false
           */

      }, {
        key: "defineNewCoordsDrag",
        value: function defineNewCoordsDrag(event, dragData) {
          var minimum = null,
              maximum = null,
              pull = null;
          var delta = this.difference(dragData.pointer, this.pointer(event)),
              stage = this.difference(dragData.stage.start, delta);

          if (!this.is('dragging')) {
            return false;
          }

          if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
          } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }

          return stage;
        }
        /**
           * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
           * @todo #261
           * @todo Threshold for click event
           * @param event the event arguments.
           * @param dragObj the object with dragging settings and states
           * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
           */

      }, {
        key: "finishDragging",
        value: function finishDragging(event, dragObj, clickAttacher) {
          var directions = ['right', 'left'],
              delta = this.difference(dragObj.pointer, this.pointer(event)),
              stage = dragObj.stage.current,
              direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
          var currentSlideI, current, newCurrent;

          if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);

            if (current !== newCurrent) {
              this.invalidate('position');
              this.update();
            }

            dragObj.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
              clickAttacher();
            }
          }

          if (!this.is('dragging')) {
            return;
          }

          this.leave('dragging');

          this._trigger('dragged');
        }
        /**
           * Gets absolute position of the closest item for a coordinate.
           * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
           * @param coordinate The coordinate in pixel.
           * @param direction The direction to check for the closest item. Ether `left` or `right`.
           * @returns The absolute position of the closest item.
           */

      }, {
        key: "closest",
        value: function closest(coordinate, direction) {
          var pull = 30,
              width = this.width();
          var coordinates = this.coordinates(),
              position = -1;

          if (this.settings.center) {
            coordinates = coordinates.map(function (item) {
              if (item === 0) {
                item += 0.000001;
              }

              return item;
            });
          } // option 'freeDrag' doesn't have realization and using it here creates problem:
          // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
          // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
          // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
          // if (!this.settings.freeDrag) {
          // check closest item


          for (var i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i; // on a right pull, check on previous index
              // to do so, subtract width from value and set position = index + 1
            } else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
              position = i + 1;
            } else if (this._op(coordinate, '<', coordinates[i]) && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
              position = direction === 'left' ? i + 1 : i;
            } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i;
            }

            if (position !== -1) {
              break;
            }

            ;
          } // }


          if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
              position = coordinate = this.minimum();
            } else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
              position = coordinate = this.maximum();
            }
          }

          return position;
        }
        /**
           * Animates the stage.
           * @todo #270
           * @param coordinate The coordinate in pixels.
           */

      }, {
        key: "animate",
        value: function animate(coordinate) {
          var animate = this.speed() > 0;

          if (this.is('animating')) {
            this.onTransitionEnd();
          }

          if (animate) {
            this.enter('animating');

            this._trigger('translate');
          }

          this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
          this.stageData.transition = this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''); // also there was transition by means of JQuery.animate or css-changing property left
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param state The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "is",
        value: function is(state) {
          return this._states.current[state] && this._states.current[state] > 0;
        }
      }, {
        key: "current",

        /**
           * Sets the absolute position of the current item.
           * @param position The new absolute position or nothing to leave it unchanged.
           * @returns The absolute position of the current item.
           */
        value: function current(position) {
          if (position === undefined) {
            return this._current;
          }

          if (this._items.length === 0) {
            return undefined;
          }

          position = this.normalize(position);

          if (this._current !== position) {
            var event = this._trigger('change', {
              property: {
                name: 'position',
                value: position
              }
            }); // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }


            this._current = position;
            this.invalidate('position');

            this._trigger('changed', {
              property: {
                name: 'position',
                value: this._current
              }
            });
          }

          return this._current;
        }
        /**
           * Invalidates the given part of the update routine.
           * @param part The part to invalidate.
           * @returns The invalidated parts.
           */

      }, {
        key: "invalidate",
        value: function invalidate(part) {
          if (typeof part === 'string') {
            this._invalidated[part] = true;

            if (this.is('valid')) {
              this.leave('valid');
            }
          }

          return Object.keys(this._invalidated);
        }
      }, {
        key: "reset",

        /**
         * Resets the absolute position of the current item.
         * @param position the absolute position of the new item.
         */
        value: function reset(position) {
          position = this.normalize(position);

          if (position === undefined) {
            return;
          }

          this._speed = 0;
          this._current = position;

          this._suppress(['translate', 'translated']);

          this.animate(this.coordinates(position));

          this._release(['translate', 'translated']);
        }
        /**
           * Normalizes an absolute or a relative position of an item.
           * @param position The absolute or relative position to normalize.
           * @param relative Whether the given position is relative or not.
           * @returns The normalized position.
           */

      }, {
        key: "normalize",
        value: function normalize(position, relative) {
          var n = this._items.length,
              m = relative ? 0 : this._clones.length;

          if (!this._isNumeric(position) || n < 1) {
            position = undefined;
          } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
          }

          return position;
        }
        /**
           * Converts an absolute position of an item into a relative one.
           * @param position The absolute position to convert.
           * @returns The converted position.
           */

      }, {
        key: "relative",
        value: function relative(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
        }
        /**
           * Gets the maximum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of maximum position
           */

      }, {
        key: "maximum",
        value: function maximum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var settings = this.settings;
          var maximum = this._coordinates.length,
              iterator,
              reciprocalItemsWidth,
              elementWidth;

          if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;

            while (iterator--) {
              // it could be use this._items instead of this.slidesData;
              reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;

              if (reciprocalItemsWidth > elementWidth) {
                break;
              }
            }

            maximum = iterator + 1;
          } else if (settings.center) {
            maximum = this._items.length - 1;
          } else {
            maximum = this._items.length - settings.items;
          }

          if (relative) {
            maximum -= this._clones.length / 2;
          }

          return Math.max(maximum, 0);
        }
        /**
           * Gets the minimum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of minimum position
           */

      }, {
        key: "minimum",
        value: function minimum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return relative ? 0 : this._clones.length / 2;
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "items",
        value: function items(position) {
          if (position === undefined) {
            return this._items.slice();
          }

          position = this.normalize(position, true);
          return [this._items[position]];
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "mergers",
        value: function mergers(position) {
          if (position === undefined) {
            return this._mergers.slice();
          }

          position = this.normalize(position, true);
          return this._mergers[position];
        }
        /**
           * Gets the absolute positions of clones for an item.
           * @param position The relative position of the item.
           * @returns The absolute positions of clones for the item or all if no position was given.
           */

      }, {
        key: "clones",
        value: function clones(position) {
          var odd = this._clones.length / 2,
              even = odd + this._items.length,
              map = function map(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
          };

          if (position === undefined) {
            return this._clones.map(function (v, i) {
              return map(i);
            });
          }

          return this._clones.map(function (v, i) {
            return v === position ? map(i) : null;
          }).filter(function (item) {
            return item;
          });
        }
        /**
           * Sets the current animation speed.
           * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
           * @returns The current animation speed in milliseconds.
           */

      }, {
        key: "speed",
        value: function speed(_speed) {
          if (_speed !== undefined) {
            this._speed = _speed;
          }

          return this._speed;
        }
        /**
           * Gets the coordinate of an item.
           * @todo The name of this method is missleanding.
           * @param position The absolute position of the item within `minimum()` and `maximum()`.
           * @returns The coordinate of the item in pixel or all coordinates.
           */

      }, {
        key: "coordinates",
        value: function coordinates(position) {
          var _this20 = this;

          var multiplier = 1,
              newPosition = position - 1,
              coordinate,
              result;

          if (position === undefined) {
            result = this._coordinates.map(function (item, index) {
              return _this20.coordinates(index);
            });
            return result;
          }

          if (this.settings.center) {
            if (this.settings.rtl) {
              multiplier = -1;
              newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
            coordinate = this._coordinates[newPosition] || 0;
          }

          coordinate = Math.ceil(coordinate);
          return coordinate;
        }
        /**
           * Calculates the speed for a translation.
           * @param from The absolute position of the start item.
           * @param to The absolute position of the target item.
           * @param factor [factor=undefined] - The time factor in milliseconds.
           * @returns The time in milliseconds for the translation.
           */

      }, {
        key: "_duration",
        value: function _duration(from, to, factor) {
          if (factor === 0) {
            return 0;
          }

          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
        }
        /**
           * Slides to the specified item.
           * @param position The position of the item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "to",
        value: function to(position, speed) {
          var _this21 = this;

          var current = this.current(),
              revert = null,
              distance = position - this.relative(current),
              maximum = this.maximum(),
              delayForLoop = 0;
          var direction = +(distance > 0) - +(distance < 0),
              items = this._items.length,
              minimum = this.minimum();

          if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
              distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
              current = revert - distance;
              position = revert;
              delayForLoop = 30;
              this.reset(current);
              this.sendChanges();
            }
          } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
          } else {
            position = Math.max(minimum, Math.min(maximum, position));
          }

          setTimeout(function () {
            _this21.speed(_this21._duration(current, position, speed));

            _this21.current(position);

            _this21.update();
          }, delayForLoop);
        }
        /**
           * Slides to the next item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "next",
        value: function next(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
        }
        /**
           * Slides to the previous item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "prev",
        value: function prev(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
        }
        /**
           * Handles the end of an animation.
           * @param event - The event arguments.
           */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd(event) {
          // if css2 animation then event object is undefined
          if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
          }

          this.leave('animating');

          this._trigger('translated');
        }
        /**
           * Gets viewport width.
           * @returns - The width in pixel.
           */

      }, {
        key: "_viewport",
        value: function _viewport() {
          var width;

          if (this._width) {
            width = this._width;
          } else {
            this.logger.log('Can not detect viewport width.');
          }

          return width;
        }
        /**
           * Sets _items
           * @param content The list of slides put into CarouselSlideDirectives.
           */

      }, {
        key: "setItems",
        value: function setItems(content) {
          this._items = content;
        }
        /**
         * Sets slidesData using this._items
         */

      }, {
        key: "_defineSlidesData",
        value: function _defineSlidesData() {
          // Maybe creating and using loadMap would be better in LazyLoadService.
          // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
          // Thus it would be needed to add that content into DOM again.
          // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
          var loadMap;

          if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(function (item) {
              if (item.load) {
                loadMap.set(item.id, item.load);
              }
            });
          }

          this.slidesData = this._items.map(function (slide) {
            return {
              id: "".concat(slide.id),
              isActive: false,
              tplRef: slide.tplRef,
              dataMerge: slide.dataMerge,
              width: 0,
              isCloned: false,
              load: loadMap ? loadMap.get(slide.id) : false,
              hashFragment: slide.dataHash
            };
          });
        }
        /**
         * Sets current classes for slide
         * @param slide Slide of carousel
         * @returns object with names of css-classes which are keys and true/false values
         */

      }, {
        key: "setCurSlideClasses",
        value: function setCurSlideClasses(slide) {
          // CSS classes: added/removed per current state of component properties
          var currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
          };

          if (this.settings.animateIn) {
            currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
          }

          if (this.settings.animateOut) {
            currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
          }

          return currentClasses;
        }
        /**
           * Operators to calculate right-to-left and left-to-right.
           * @param a - The left side operand.
           * @param o - The operator.
           * @param b - The right side operand.
           * @returns true/false meaning right-to-left or left-to-right
           */

      }, {
        key: "_op",
        value: function _op(a, o, b) {
          var rtl = this.settings.rtl;

          switch (o) {
            case '<':
              return rtl ? a > b : a < b;

            case '>':
              return rtl ? a < b : a > b;

            case '>=':
              return rtl ? a <= b : a >= b;

            case '<=':
              return rtl ? a >= b : a <= b;

            default:
              break;
          }
        }
        /**
           * Triggers a public event.
           * @todo Remove `status`, `relatedTarget` should be used instead.
           * @param name The event name.
           * @param data The event data.
           * @param namespace The event namespace.
           * @param state The state which is associated with the event.
           * @param enter Indicates if the call enters the specified state or not.
           */

      }, {
        key: "_trigger",
        value: function _trigger(name, data, namespace, state, enter) {
          switch (name) {
            case 'initialized':
              this._initializedCarousel$.next(name);

              break;

            case 'change':
              this._changeSettingsCarousel$.next(data);

              break;

            case 'changed':
              this._changedSettingsCarousel$.next(data);

              break;

            case 'drag':
              this._dragCarousel$.next(name);

              break;

            case 'dragged':
              this._draggedCarousel$.next(name);

              break;

            case 'resize':
              this._resizeCarousel$.next(name);

              break;

            case 'resized':
              this._resizedCarousel$.next(name);

              break;

            case 'refresh':
              this._refreshCarousel$.next(name);

              break;

            case 'refreshed':
              this._refreshedCarousel$.next(name);

              break;

            case 'translate':
              this._translateCarousel$.next(name);

              break;

            case 'translated':
              this._translatedCarousel$.next(name);

              break;

            default:
              break;
          }
        }
        /**
         * Enters a state.
         * @param name - The state name.
         */

      }, {
        key: "enter",
        value: function enter(name) {
          var _this22 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this22._states.current[stateName] === undefined) {
              _this22._states.current[stateName] = 0;
            }

            _this22._states.current[stateName]++;
          });
        }
      }, {
        key: "leave",

        /**
           * Leaves a state.
           * @param name - The state name.
           */
        value: function leave(name) {
          var _this23 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this23._states.current[stateName] === 0 || !!_this23._states.current[stateName]) {
              _this23._states.current[stateName]--;
            }
          });
        }
      }, {
        key: "register",

        /**
           * Registers an event or state.
           * @param object - The event or state to register.
           */
        value: function register(object) {
          var _this24 = this;

          if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
              this._states.tags[object.name] = object.tags;
            } else {
              this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
              return _this24._states.tags[object.name].indexOf(tag) === i;
            });
          }
        }
        /**
           * Suppresses events.
           * @param events The events to suppress.
           */

      }, {
        key: "_suppress",
        value: function _suppress(events) {
          var _this25 = this;

          events.forEach(function (event) {
            _this25._supress[event] = true;
          });
        }
        /**
           * Releases suppressed events.
           * @param events The events to release.
           */

      }, {
        key: "_release",
        value: function _release(events) {
          var _this26 = this;

          events.forEach(function (event) {
            delete _this26._supress[event];
          });
        }
        /**
           * Gets unified pointer coordinates from event.
           * @todo #261
           * @param event The `mousedown` or `touchstart` event.
           * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "pointer",
        value: function pointer(event) {
          var result = {
            x: null,
            y: null
          };
          event = event.originalEvent || event || window.event;
          event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

          if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
          } else {
            result.x = event.clientX;
            result.y = event.clientY;
          }

          return result;
        }
        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param number The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number
           */

      }, {
        key: "_isNumeric",
        value: function _isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
        /**
         * Determines whether value is number or boolean type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
         */

      }, {
        key: "_isNumberOrBoolean",
        value: function _isNumberOrBoolean(value) {
          return this._isNumeric(value) || typeof value === 'boolean';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isNumberOrString",
        value: function _isNumberOrString(value) {
          return this._isNumeric(value) || typeof value === 'string';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isStringOrBoolean",
        value: function _isStringOrBoolean(value) {
          return typeof value === 'string' || typeof value === 'boolean';
        }
        /**
           * Gets the difference of two vectors.
           * @todo #261
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "difference",
        value: function difference(first, second) {
          return {
            x: first.x - second.x,
            y: first.y - second.y
          };
        }
      }, {
        key: "invalidated",
        get: function get() {
          return this._invalidated;
        } // is needed for tests

      }, {
        key: "states",
        get: function get() {
          return this._states;
        }
      }]);

      return CarouselService;
    }();

    CarouselService.ɵfac = function CarouselService_Factory(t) {
      return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OwlLogger));
    };

    CarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CarouselService,
      factory: CarouselService.ɵfac
    });

    CarouselService.ctorParameters = function () {
      return [{
        type: OwlLogger
      }];
    };

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(carouselService) {
        _classCallCheck(this, NavigationService);

        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */

        this._initialized = false;
        /**
         * The current paging indexes.
         */

        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */

        this._navData = {
          disabled: false,
          prev: {
            disabled: false,
            htmlText: ''
          },
          next: {
            disabled: false,
            htmlText: ''
          }
        };
        /**
         * Data for dot elements of the user interface.
         */

        this._dotsData = {
          disabled: false,
          dots: []
        };
        this.spyDataStreams();
      }

      _createClass(NavigationService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this27 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) {
            _this27.initialize();

            _this27._updateNavPages();

            _this27.draw();

            _this27.update();

            _this27.carouselService.sendChanges();
          })); // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
          // Thus this method by calling carouselService.current(position) notifies about changes

          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (data) {
            return data.property.name === 'position';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this27.update(); // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();

          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this27._updateNavPages();

            _this27.draw();

            _this27.update();

            _this27.carouselService.sendChanges();
          }));
          var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.navSubscription = navMerge$.subscribe(function () {});
        }
        /**
           * Initializes the layout of the plugin and extends the carousel.
           */

      }, {
        key: "initialize",
        value: function initialize() {
          this._navData.disabled = true;
          this._navData.prev.htmlText = this.carouselService.settings.navText[0];
          this._navData.next.htmlText = this.carouselService.settings.navText[1];
          this._dotsData.disabled = true;
          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
        /**
         * Calculates internal states and updates prop _pages
         */

      }, {
        key: "_updateNavPages",
        value: function _updateNavPages() {
          var i, j, k;
          var lower = this.carouselService.clones().length / 2,
              upper = lower + this.carouselService.items().length,
              maximum = this.carouselService.maximum(true),
              pages = [],
              settings = this.carouselService.settings;
          var size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
          size = +size;

          if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
          }

          if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
              if (j >= size || j === 0) {
                pages.push({
                  start: Math.min(maximum, i - lower),
                  end: i - lower + size - 1
                });

                if (Math.min(maximum, i - lower) === maximum) {
                  break;
                }

                j = 0, ++k;
              }

              j += this.carouselService.mergers(this.carouselService.relative(i));
            }
          }

          this._pages = pages;
        }
        /**
           * Draws the user interface.
           * @todo The option `dotsData` wont work.
           */

      }, {
        key: "draw",
        value: function draw() {
          var _this28 = this;

          var difference;
          var settings = this.carouselService.settings,
              items = this.carouselService.items(),
              disabled = items.length <= settings.items;
          this._navData.disabled = !settings.nav || disabled;
          this._dotsData.disabled = !settings.dots || disabled;

          if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;

            if (settings.dotsData && difference !== 0) {
              this._dotsData.dots = [];
              items.forEach(function (item) {
                _this28._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(item.id),
                  innerContent: item.dotContent,
                  showInnerContent: true
                });
              });
            } else if (difference > 0) {
              var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;

              for (var i = 0; i < difference; i++) {
                this._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(i + startI),
                  innerContent: '',
                  showInnerContent: false
                });
              }
            } else if (difference < 0) {
              this._dotsData.dots.splice(difference, Math.abs(difference));
            }
          }

          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
      }, {
        key: "update",

        /**
         * Updates navigation buttons's and dots's states
         */
        value: function update() {
          this._updateNavButtons();

          this._updateDots();
        }
        /**
         * Changes state of nav buttons (disabled, enabled)
         */

      }, {
        key: "_updateNavButtons",
        value: function _updateNavButtons() {
          var settings = this.carouselService.settings,
              loop = settings.loop || settings.rewind,
              index = this.carouselService.relative(this.carouselService.current());

          if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
          }

          this.carouselService.navData = this._navData;
        }
        /**
         * Changes active dot if page becomes changed
         */

      }, {
        key: "_updateDots",
        value: function _updateDots() {
          var curActiveDotI;

          if (!this.carouselService.settings.dots) {
            return;
          }

          this._dotsData.dots.forEach(function (item) {
            if (item.active === true) {
              item.active = false;
            }
          });

          curActiveDotI = this._current();

          if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
          }

          this.carouselService.dotsData = this._dotsData;
        }
        /**
           * Gets the current page position of the carousel.
           * @returns the current page position of the carousel
           */

      }, {
        key: "_current",
        value: function _current() {
          var current = this.carouselService.relative(this.carouselService.current());
          var finalCurrent;

          var pages = this._pages.filter(function (page, index) {
            return page.start <= current && page.end >= current;
          }).pop();

          finalCurrent = this._pages.findIndex(function (page) {
            return page.start === pages.start && page.end === pages.end;
          });
          return finalCurrent;
        }
      }, {
        key: "_getPosition",

        /**
           * Gets the current succesor/predecessor position.
         * @param sussessor position of slide
           * @returns the current succesor/predecessor position
           */
        value: function _getPosition(successor) {
          var position, length;
          var settings = this.carouselService.settings;

          if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
          } else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
          }

          return position;
        }
      }, {
        key: "next",

        /**
           * Slides to the next item or page.
           * @param speed The time in milliseconds for the transition.
           */
        value: function next(speed) {
          this.carouselService.to(this._getPosition(true), speed);
        }
      }, {
        key: "prev",

        /**
         * Slides to the previous item or page.
         * @param speed The time in milliseconds for the transition.
         */
        value: function prev(speed) {
          this.carouselService.to(this._getPosition(false), speed);
        }
      }, {
        key: "to",

        /**
         * Slides to the specified item or page.
         * @param position - The position of the item or page.
         * @param speed - The time in milliseconds for the transition.
         * @param standard - Whether to use the standard behaviour or not. Default meaning false
         */
        value: function to(position, speed, standard) {
          var length;

          if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
          } else {
            this.carouselService.to(position, speed);
          }
        }
      }, {
        key: "moveByDot",

        /**
         * Moves carousel after user's clicking on any dots
         */
        value: function moveByDot(dotId) {
          var index = this._dotsData.dots.findIndex(function (dot) {
            return dotId === dot.id;
          });

          this.to(index, this.carouselService.settings.dotsSpeed);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id id of slide
         */

      }, {
        key: "toSlideById",
        value: function toSlideById(id) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.id === id && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac
    });

    NavigationService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    }; // import { Injectable } from '@angular/core';

    /**
     * Create a new injection token for injecting the window into a component.
     */


    var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
    /**
     * Define abstract class for obtaining reference to the global window object.
     */

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return WindowRef;
    }();
    /**
     * Define class that implements the abstract class and returns the native window object.
     */


    var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
      _inherits(BrowserWindowRef, _WindowRef);

      var _super3 = _createSuper(BrowserWindowRef);

      function BrowserWindowRef() {
        _classCallCheck(this, BrowserWindowRef);

        return _super3.call(this);
      }
      /**
       * @returns window object
       */


      _createClass(BrowserWindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return window;
        }
      }]);

      return BrowserWindowRef;
    }(WindowRef);

    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
      return new (t || BrowserWindowRef)();
    };

    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowserWindowRef,
      factory: BrowserWindowRef.ɵfac
    });
    /**
     * Create an factory function that returns the native window object.
     * @param browserWindowRef Native window object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */

    function windowFactory(browserWindowRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
      }

      var obj = {
        setTimeout: function setTimeout(func, time) {},
        clearTimeout: function clearTimeout(a) {}
      };
      return obj;
    }
    /**
     * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
     */


    var browserWindowProvider = {
      provide: WindowRef,
      useClass: BrowserWindowRef
    };
    /**
     * Create an injectable provider that uses the windowFactory function for returning the native window object.
     */

    var windowProvider = {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
    /**
     * Create a new injection token for injecting the Document into a component.
     */

    var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DocumentToken');
    /**
     * Define abstract class for obtaining reference to the global Document object.
     */

    var DocumentRef = /*#__PURE__*/function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return DocumentRef;
    }();
    /**
     * Define class that implements the abstract class and returns the native Document object.
     */


    var BrowserDocumentRef = /*#__PURE__*/function (_DocumentRef) {
      _inherits(BrowserDocumentRef, _DocumentRef);

      var _super4 = _createSuper(BrowserDocumentRef);

      function BrowserDocumentRef() {
        _classCallCheck(this, BrowserDocumentRef);

        return _super4.call(this);
      }
      /**
       * @returns Document object
       */


      _createClass(BrowserDocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          return document;
        }
      }]);

      return BrowserDocumentRef;
    }(DocumentRef);

    BrowserDocumentRef.ɵfac = function BrowserDocumentRef_Factory(t) {
      return new (t || BrowserDocumentRef)();
    };

    BrowserDocumentRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BrowserDocumentRef,
      factory: BrowserDocumentRef.ɵfac
    });
    /**
     * Create an factory function that returns the native Document object.
     * @param browserDocumentRef Native Document object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */

    function documentFactory(browserDocumentRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
      }

      var doc = {
        hidden: false,
        visibilityState: 'visible'
      };
      return doc;
    }
    /**
     * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
     */


    var browserDocumentProvider = {
      provide: DocumentRef,
      useClass: BrowserDocumentRef
    };
    /**
     * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
     */

    var documentProvider = {
      provide: DOCUMENT,
      useFactory: documentFactory,
      deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

    var AutoplayService = /*#__PURE__*/function () {
      function AutoplayService(carouselService, winRef, docRef) {
        _classCallCheck(this, AutoplayService);

        this.carouselService = carouselService;
        /**
         * The autoplay timeout.
         */

        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */

        this._paused = false;
        this.winRef = winRef;
        this.docRef = docRef;
        this.spyDataStreams();
      }

      _createClass(AutoplayService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoplaySubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this29 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this29.carouselService.settings.autoplay) {
              _this29.play();
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this29._handleChangeObservable(data);
          }));
          var resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this29.carouselService.settings.autoplay) {
              _this29.play();
            } else {
              _this29.stop();
            }
          })); // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
          // They are triggered by Video Plugin

          var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, resized$);
          this.autoplaySubscription = autoplayMerge$.subscribe(function () {});
        }
        /**
           * Starts the autoplay.
           * @param timeout The interval before the next animation starts.
           * @param speed The animation speed for the animations.
           */

      }, {
        key: "play",
        value: function play(timeout, speed) {
          if (this._paused) {
            this._paused = false;

            this._setAutoPlayInterval(1);
          }

          if (this.carouselService.is('rotating')) {
            return;
          }

          this.carouselService.enter('rotating');

          this._setAutoPlayInterval();
        }
      }, {
        key: "_getNextTimeout",

        /**
           * Gets a new timeout
           * @param timeout - The interval before the next animation starts.
           * @param speed - The animation speed for the animations.
           * @return
           */
        value: function _getNextTimeout(timeout, speed) {
          var _this30 = this;

          if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
          }

          this._isArtificialAutoplayTimeout = timeout ? true : false;
          return this.winRef.setTimeout(function () {
            if (_this30._paused || _this30.carouselService.is('busy') || _this30.carouselService.is('interacting') || _this30.docRef.hidden) {
              return;
            }

            _this30.carouselService.next(speed || _this30.carouselService.settings.autoplaySpeed);
          }, timeout || this.carouselService.settings.autoplayTimeout);
        }
      }, {
        key: "_setAutoPlayInterval",

        /**
           * Sets autoplay in motion.
           */
        value: function _setAutoPlayInterval(timeout) {
          this._timeout = this._getNextTimeout(timeout);
        }
      }, {
        key: "stop",

        /**
         * Stops the autoplay.
         */
        value: function stop() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
          this.winRef.clearTimeout(this._timeout);
          this.carouselService.leave('rotating');
        }
      }, {
        key: "pause",

        /**
           * Stops the autoplay.
           */
        value: function pause() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
        }
      }, {
        key: "_handleChangeObservable",

        /**
         * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
         * @param data object with current position of carousel and type of change
         */
        value: function _handleChangeObservable(data) {
          if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
              this.play();
            } else {
              this.stop();
            }
          } else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
              this._setAutoPlayInterval();
            }
          }
        }
        /**
         * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
         */

      }, {
        key: "_playAfterTranslated",
        value: function _playAfterTranslated() {
          var _this31 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this31.carouselService.getTranslatedState();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
            return _this31._isArtificialAutoplayTimeout;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this31._setAutoPlayInterval();
          })).subscribe(function () {});
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
          }
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayingMouseLeave",
        value: function startPlayingMouseLeave() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayingTouchEnd",
        value: function startPlayingTouchEnd() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
      }]);

      return AutoplayService;
    }();

    AutoplayService.ɵfac = function AutoplayService_Factory(t) {
      return new (t || AutoplayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DOCUMENT));
    };

    AutoplayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutoplayService,
      factory: AutoplayService.ɵfac
    });

    AutoplayService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [WINDOW]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    AutoplayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(WINDOW)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], AutoplayService);

    var LazyLoadService = /*#__PURE__*/function () {
      function LazyLoadService(carouselService) {
        _classCallCheck(this, LazyLoadService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      _createClass(LazyLoadService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.lazyLoadSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this32 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            var isLazyLoad = _this32.carouselService.settings && !_this32.carouselService.settings.lazyLoad;

            _this32.carouselService.slidesData.forEach(function (item) {
              return item.load = isLazyLoad ? true : false;
            });
          }));
          var changeSettings$ = this.carouselService.getChangeState();
          var resizedCarousel$ = this.carouselService.getResizedState();
          var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this32._defineLazyLoadSlides(data);
          }));
          this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () {});
        }
      }, {
        key: "_defineLazyLoadSlides",
        value: function _defineLazyLoadSlides(data) {
          var _this33 = this;

          if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
          }

          if (data.property && data.property.name === 'position' || data === 'initialized' || data === "resized") {
            var settings = this.carouselService.settings,
                clones = this.carouselService.clones().length;
            var n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                i = settings.center && n * -1 || 0,
                position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i; // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option

            if (settings.lazyLoadEager > 0) {
              n += settings.lazyLoadEager; // If the carousel is looping also preload images that are to the "left"

              if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
            }

            while (i++ < n) {
              this._load(clones / 2 + this.carouselService.relative(position));

              if (clones) {
                this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) {
                  return _this33._load(value);
                });
              }

              position++;
            }
          }
        }
        /**
           * Loads all resources of an item at the specified position.
           * @param position - The absolute position of the item.
           */

      }, {
        key: "_load",
        value: function _load(position) {
          if (this.carouselService.slidesData[position].load) {
            return;
          }

          this.carouselService.slidesData[position].load = true;
        }
      }]);

      return LazyLoadService;
    }();

    LazyLoadService.ɵfac = function LazyLoadService_Factory(t) {
      return new (t || LazyLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    LazyLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LazyLoadService,
      factory: LazyLoadService.ɵfac
    });

    LazyLoadService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var AnimateService = /*#__PURE__*/function () {
      function AnimateService(carouselService) {
        _classCallCheck(this, AnimateService);

        this.carouselService = carouselService;
        /**
         * s
         */

        this.swapping = true;
        /**
         * active slide before translating
         */

        this.previous = undefined;
        /**
         * new active slide after translating
         */

        this.next = undefined;
        this.spyDataStreams();
      }

      _createClass(AnimateService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.animateSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this34 = this;

          var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data.property.name === 'position') {
              _this34.previous = _this34.carouselService.current();
              _this34.next = data.property.value;
            }
          }));
          var dragCarousel$ = this.carouselService.getDragState();
          var draggedCarousel$ = this.carouselService.getDraggedState();
          var translatedCarousel$ = this.carouselService.getTranslatedState();
          var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this34.swapping = data === 'translated';
          }));
          var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this34.swapping && (_this34.carouselService._options.animateOut || _this34.carouselService._options.animateIn)) {
              _this34._swap();
            }
          }));
          var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
          this.animateSubscription = animateMerge$.subscribe(function () {});
        }
        /**
           * Toggles the animation classes whenever an translations starts.
           * @returns
           */

      }, {
        key: "_swap",
        value: function _swap() {
          if (this.carouselService.settings.items !== 1) {
            return;
          } // if (!$.support.animation || !$.support.transition) {
          // 	return;
          // }


          this.carouselService.speed(0);
          var left;
          var previous = this.carouselService.slidesData[this.previous],
              next = this.carouselService.slidesData[this.next],
              incoming = this.carouselService.settings.animateIn,
              outgoing = this.carouselService.settings.animateOut;

          if (this.carouselService.current() === this.previous) {
            return;
          }

          if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === previous.id) {
                slide.left = "".concat(left, "px");
                slide.isAnimated = true;
                slide.isDefAnimatedOut = true;
                slide.isCustomAnimatedOut = true;
              }
            });
          }

          if (incoming) {
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === next.id) {
                slide.isAnimated = true;
                slide.isDefAnimatedIn = true;
                slide.isCustomAnimatedIn = true;
              }
            });
          }
        }
      }, {
        key: "clear",

        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */
        value: function clear(id) {
          var _this35 = this;

          this.carouselService.slidesData.forEach(function (slide) {
            if (slide.id === id) {
              slide.left = '';
              slide.isAnimated = false;
              slide.isDefAnimatedOut = false;
              slide.isCustomAnimatedOut = false;
              slide.isDefAnimatedIn = false;
              slide.isCustomAnimatedIn = false;
              slide.classes = _this35.carouselService.setCurSlideClasses(slide);
            }
          });
          this.carouselService.onTransitionEnd();
        }
      }]);

      return AnimateService;
    }();

    AnimateService.ɵfac = function AnimateService_Factory(t) {
      return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    AnimateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnimateService,
      factory: AnimateService.ɵfac
    });

    AnimateService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var AutoHeightService = /*#__PURE__*/function () {
      function AutoHeightService(carouselService) {
        _classCallCheck(this, AutoHeightService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      _createClass(AutoHeightService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoHeightSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this36 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this36.carouselService.settings.autoHeight) {
              _this36.update();
            } else {
              _this36.carouselService.slidesData.forEach(function (slide) {
                return slide.heightState = 'full';
              });
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this36.carouselService.settings.autoHeight && data.property.name === 'position') {
              _this36.update();
            }
          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this36.carouselService.settings.autoHeight) {
              _this36.update();
            }
          }));
          var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.autoHeightSubscription = autoHeight$.subscribe(function () {});
        }
        /**
         * Updates the prop 'heightState' of slides
         */

      }, {
        key: "update",
        value: function update() {
          var items = this.carouselService.settings.items;
          var start = this.carouselService.current(),
              end = start + items;

          if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
          }

          this.carouselService.slidesData.forEach(function (slide, i) {
            slide.heightState = i >= start && i < end ? 'full' : 'nulled';
          });
        }
      }]);

      return AutoHeightService;
    }();

    AutoHeightService.ɵfac = function AutoHeightService_Factory(t) {
      return new (t || AutoHeightService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService));
    };

    AutoHeightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AutoHeightService,
      factory: AutoHeightService.ɵfac
    });

    AutoHeightService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    var HashService = /*#__PURE__*/function () {
      function HashService(carouselService, route, router) {
        _classCallCheck(this, HashService);

        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();

        if (!this.route) {
          this.route = {
            fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
          };
        }

        ;

        if (!this.router) {
          this.router = {
            navigate: function navigate(commands, extras) {
              return;
            }
          };
        }
      }

      _createClass(HashService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hashSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this37 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this37.listenToRoute();
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this37.carouselService.settings.URLhashListener && data.property.name === 'position') {
              var newCurSlide = _this37.carouselService.current();

              var newCurFragment = _this37.carouselService.slidesData[newCurSlide].hashFragment;

              if (!newCurFragment || newCurFragment === _this37.currentHashFragment) {
                return;
              }

              _this37.router.navigate(['./'], {
                fragment: newCurFragment,
                relativeTo: _this37.route
              });
            }
          }));
          var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$);
          this.hashSubscription = hashFragment$.subscribe(function () {});
        }
        /**
         * rewinds carousel to slide which has the same hashFragment as fragment of current url
         * @param fragment fragment of url
         */

      }, {
        key: "rewind",
        value: function rewind(fragment) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.hashFragment === fragment && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
        /**
         * Initiate listening to ActivatedRoute.fragment
         */

      }, {
        key: "listenToRoute",
        value: function listenToRoute() {
          var _this38 = this;

          var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
          this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(count)).subscribe(function (fragment) {
            _this38.currentHashFragment = fragment;

            _this38.rewind(fragment);
          });
        }
      }]);

      return HashService;
    }();

    HashService.ɵfac = function HashService_Factory(t) {
      return new (t || HashService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], 8));
    };

    HashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HashService,
      factory: HashService.ɵfac
    });

    HashService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    HashService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], HashService);
    var nextId = 0;

    var CarouselSlideDirective = /*#__PURE__*/function () {
      function CarouselSlideDirective(tplRef) {
        _classCallCheck(this, CarouselSlideDirective);

        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */

        this.id = "owl-slide-".concat(nextId++);
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */

        this._dataMerge = 1;
        /**
         * Width of slide
         */

        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */

        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */

        this.dataHash = '';
      }

      _createClass(CarouselSlideDirective, [{
        key: "isNumeric",

        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param - The input to be tested
           * @returns - An indication if the input is a Number or can be coerced to a Number
           */
        value: function isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
      }, {
        key: "dataMerge",
        set: function set(data) {
          this._dataMerge = this.isNumeric(data) ? data : 1;
        },
        get: function get() {
          return this._dataMerge;
        }
      }]);

      return CarouselSlideDirective;
    }();

    CarouselSlideDirective.ɵfac = function CarouselSlideDirective_Factory(t) {
      return new (t || CarouselSlideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
    };

    CarouselSlideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CarouselSlideDirective,
      selectors: [["ng-template", "carouselSlide", ""]],
      inputs: {
        id: "id",
        width: "width",
        dotContent: "dotContent",
        dataHash: "dataHash",
        dataMerge: "dataMerge"
      }
    });

    CarouselSlideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataMerge", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dotContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataHash", void 0);
    /**
     * Data which will be passed out after ending of transition of carousel
     */

    var SlidesOutputData = function SlidesOutputData() {
      _classCallCheck(this, SlidesOutputData);
    };

    ;

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
        _classCallCheck(this, CarouselComponent);

        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.changeDetectorRef = changeDetectorRef;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           *  Data of every slide
           */

        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */

        this.carouselLoaded = false;
        this.docRef = docRef;
      }

      _createClass(CarouselComponent, [{
        key: "onVisibilityChange",
        value: function onVisibilityChange(ev) {
          if (!this.carouselService.settings.autoplay) return;

          switch (this.docRef.visibilityState) {
            case 'visible':
              this.autoplayService.play();
              break;

            case 'hidden':
              this.autoplayService.stop();
              break;

            default:
              break;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spyDataStreams();
          this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {} // ngAfterContentChecked() END

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this39 = this;

          if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());

            this._winResizeWatcher();
          } else {
            this.logger.log("There are no slides to show. So the carousel won't be rendered");
          }

          this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slides) {
            if (slides.toArray().length) {
              // this.carouselService.setItems(slides.toArray());
              _this39.carouselService.setup(_this39.carouselWindowWidth, slides.toArray(), _this39.options);

              _this39.carouselService.initialize(slides.toArray());
            } else {
              _this39.carouselLoaded = false;

              _this39.logger.log("There are no slides to show. So the carousel won't be re-rendered");
            }
          })).subscribe(function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
          }

          if (this._slidesChangesSubscription) {
            this._slidesChangesSubscription.unsubscribe();
          }

          if (this._allObservSubscription) {
            this._allObservSubscription.unsubscribe();
          }
        }
        /**
         * Joins the observable login in one place: sets values to some observables, merges this observables and
         * subcribes to merge func
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this40 = this;

          this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this40.owlDOMData = data.owlDOMData;
            _this40.stageData = data.stageData;
            _this40.slidesData = data.slidesData;

            if (!_this40.carouselLoaded) {
              _this40.carouselLoaded = true;
            }

            _this40.navData = data.navData;
            _this40.dotsData = data.dotsData;

            _this40.changeDetectorRef.markForCheck();
          }));
          this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this40.gatherTranslatedData();

            _this40.initialized.emit(_this40.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this40.gatherTranslatedData();

            _this40.translated.emit(_this40.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this40.gatherTranslatedData();

            _this40.change.emit(_this40.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            var changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return value.property.name === 'position';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this40.slidesData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(_this40.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slide) {
              var clonedIdPrefix = _this40.carouselService.clonedIdPrefix;
              var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
              return Object.assign(Object.assign({}, slide), {
                id: id,
                isActive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slides) {
              return {
                slides: slides,
                startPosition: _this40.carouselService.relative(value.property.value)
              };
            })); // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
            //   filter(() => value.property.name === 'settings'),
            //   map(() => {
            //     return {
            //       slides: [],
            //       startPosition: this.carouselService.relative(value.property.value)
            //     }
            //   })
            // )

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changedPosition);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slidesData) {
            _this40.gatherTranslatedData();

            _this40.changed.emit(slidesData.slides.length ? slidesData : _this40.slidesOutputData); // console.log(this.slidesOutputData);
            // this.slidesOutputData = {};

          }));
          this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this40.gatherTranslatedData();

            _this40.dragging.emit({
              dragging: true,
              data: _this40.slidesOutputData
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this40.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return !!_this40.carouselService.is('animating');
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (anim) {
            if (anim) {
              return _this40.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('not animating');
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this40.dragging.emit({
              dragging: false,
              data: _this40.slidesOutputData
            });
          }));
          this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
          this._allObservSubscription = this._carouselMerge$.subscribe(function () {});
        }
        /**
         * Init subscription to resize event and attaches handler for this event
         */

      }, {
        key: "_winResizeWatcher",
        value: function _winResizeWatcher() {
          var _this41 = this;

          if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this41.carouselWindowWidth !== _this41.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(this.carouselService.settings.responsiveRefreshRate)).subscribe(function () {
              _this41.carouselService.onResize(_this41.el.nativeElement.querySelector('.owl-carousel').clientWidth);

              _this41.carouselWindowWidth = _this41.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
          }
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
         * Handler for click event, attached to next button
         */

      }, {
        key: "next",
        value: function next() {
          if (!this.carouselLoaded) return;
          this.navigationService.next(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to prev button
         */

      }, {
        key: "prev",
        value: function prev() {
          if (!this.carouselLoaded) return;
          this.navigationService.prev(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to dots
         */

      }, {
        key: "moveByDot",
        value: function moveByDot(dotId) {
          if (!this.carouselLoaded) return;
          this.navigationService.moveByDot(dotId);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id fragment of url
         */

      }, {
        key: "to",
        value: function to(id) {
          // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
          if (!this.carouselLoaded) return;
          this.navigationService.toSlideById(id);
        }
        /**
         * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
         */

      }, {
        key: "gatherTranslatedData",
        value: function gatherTranslatedData() {
          var startPosition;
          var clonedIdPrefix = this.carouselService.clonedIdPrefix;
          var activeSlides = this.slidesData.filter(function (slide) {
            return slide.isActive === true;
          }).map(function (slide) {
            var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
              id: id,
              width: slide.width,
              marginL: slide.marginL,
              marginR: slide.marginR,
              center: slide.isCentered
            };
          });
          startPosition = this.carouselService.relative(this.carouselService.current());
          this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
          };
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          this.autoplayService.startPausing();
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayML",
        value: function startPlayML() {
          this.autoplayService.startPlayingMouseLeave();
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayTE",
        value: function startPlayTE() {
          this.autoplayService.startPlayingTouchEnd();
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutoplayService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LazyLoadService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutoHeightService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](HashService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OwlLogger), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DOCUMENT));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["owl-carousel-o"]],
      contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CarouselSlideDirective, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slides = _t);
        }
      },
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
            return ctx.onVisibilityChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        options: "options"
      },
      outputs: {
        translated: "translated",
        dragging: "dragging",
        change: "change",
        changed: "changed",
        initialized: "initialized"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService])],
      decls: 4,
      vars: 9,
      consts: [[1, "owl-carousel", "owl-theme", 3, "ngClass", "mouseover", "mouseleave", "touchstart", "touchend"], ["owlCarousel", ""], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "ngClass", "innerHTML", "click"], [1, "owl-next", 3, "ngClass", "innerHTML", "click"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "ngClass", "click"], [3, "innerHTML"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
            return ctx.startPausing();
          })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
            return ctx.startPlayML();
          })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
            return ctx.startPausing();
          })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
            return ctx.startPlayTE();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_div_2_Template, 2, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.carouselLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.toArray().length);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], StageComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
      },
      styles: [".owl-theme[_ngcontent-%COMP%] { display: block; }"]
    });

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ResizeService
      }, {
        type: CarouselService
      }, {
        type: NavigationService
      }, {
        type: AutoplayService
      }, {
        type: LazyLoadService
      }, {
        type: AnimateService
      }, {
        type: AutoHeightService
      }, {
        type: HashService
      }, {
        type: OwlLogger
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CarouselSlideDirective)], CarouselComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "translated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "dragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "changed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "initialized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:visibilitychange', ['$event'])], CarouselComponent.prototype, "onVisibilityChange", null);
    CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], CarouselComponent);

    var StageComponent = /*#__PURE__*/function () {
      function StageComponent(zone, el, renderer, carouselService, animateService) {
        var _this42 = this;

        _classCallCheck(this, StageComponent);

        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */

        this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null
          },
          direction: null,
          active: false,
          moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */

        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Passes this to _oneMouseTouchMove();
         */

        this.bindOneMouseTouchMove = function (ev) {
          _this42._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragMove = function (ev) {
          _this42._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragEnd = function (ev) {
          // this.zone.run(() => {
          _this42._onDragEnd(ev); // });

        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */


        this._oneClickHandler = function () {
          _this42.listenerOneClick = _this42.renderer.listen(_this42._drag.target, 'click', function () {
            return false;
          });

          _this42.listenerOneClick();
        };
      }

      _createClass(StageComponent, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchCancel",
        value: function onTouchCancel(event) {
          this._onDragEnd(event);
        }
      }, {
        key: "onDragStart",
        value: function onDragStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "onSelectStart",
        value: function onSelectStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          this._oneMoveSubsription = this._oneDragMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            _this43._sendChanges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._oneMoveSubsription.unsubscribe();
        }
        /**
           * Handles `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragStart",
        value: function _onDragStart(event) {
          var _this44 = this;

          var stage = null;

          if (event.which === 3) {
            return;
          }

          stage = this._prepareDragging(event);
          this._drag.time = new Date().getTime();
          this._drag.target = event.target;
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this._pointer(event);
          this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
          this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
          this.zone.runOutsideAngular(function () {
            _this44.listenerOneMouseMove = _this44.renderer.listen(document, 'mousemove', _this44.bindOneMouseTouchMove);
            _this44.listenerOneTouchMove = _this44.renderer.listen(document, 'touchmove', _this44.bindOneMouseTouchMove);
          });
        }
        /**
         * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
         * @param event event objech of mouse or touch event
         */

      }, {
        key: "_oneMouseTouchMove",
        value: function _oneMouseTouchMove(event) {
          var delta = this._difference(this._drag.pointer, this._pointer(event));

          if (this.listenerATag) {
            this.listenerATag();
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
            return;
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
            return;
          }

          this.listenerOneMouseMove();
          this.listenerOneTouchMove();
          this._drag.moving = true;
          this.blockClickAnchorInDragging(event);
          this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
          this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
          event.preventDefault();

          this._enterDragging();

          this._oneDragMove$.next(event); // this._sendChanges();

        }
        /**
         * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
         * @param event event object
         */

      }, {
        key: "blockClickAnchorInDragging",
        value: function blockClickAnchorInDragging(event) {
          var target = event.target;

          while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
          }

          if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', function () {
              return false;
            });
          }
        }
        /**
         * Handles the `touchmove` and `mousemove` events.
         * @todo #261
         * @param event - The event arguments.
         */

      }, {
        key: "_onDragMove",
        value: function _onDragMove(event) {
          var stage;
          var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);

          if (stageOrExit === false) {
            return;
          }

          stage = stageOrExit;
          event.preventDefault();
          this._drag.stage.current = stage;

          this._animate(stage.x - this._drag.stage.start.x);
        }
      }, {
        key: "_animate",

        /**
         * Moves .owl-stage left-right
         * @param coordinate coordinate to be set to .owl-stage
         */
        value: function _animate(coordinate) {
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(".concat(coordinate, "px,0px,0px"));
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
        }
        /**
           * Handles the `touchend` and `mouseup` events.
           * @todo #261
           * @todo Threshold for click event
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragEnd",
        value: function _onDragEnd(event) {
          this.carouselService.owlDOMData.isGrab = false;
          this.listenerOneMouseMove();
          this.listenerOneTouchMove();

          if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');

            this._finishDragging(event);

            this.listenerMouseMove();
            this.listenerTouchMove();
          }

          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null,
            active: false,
            moving: false
          }; // this.carouselService.trigger('dragged');

          this.listenerMouseUp();
          this.listenerTouchEnd();
        }
      }, {
        key: "_prepareDragging",

        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */
        value: function _prepareDragging(event) {
          return this.carouselService.prepareDragging(event);
        }
        /**
         * Finishes dragging
         * @param event object event of 'mouseUp' of 'touchend' events
         */

      }, {
        key: "_finishDragging",
        value: function _finishDragging(event) {
          this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
        }
        /**
           * Gets unified pointer coordinates from event.
           * @param event The `mousedown` or `touchstart` event.
           * @returns Contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "_pointer",
        value: function _pointer(event) {
          return this.carouselService.pointer(event);
        }
        /**
           * Gets the difference of two vectors.
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "_difference",
        value: function _difference(firstC, second) {
          return this.carouselService.difference(firstC, second);
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param specificState The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "_is",
        value: function _is(specificState) {
          return this.carouselService.is(specificState);
        }
        /**
        * Enters a state.
        * @param name The state name.
        */

      }, {
        key: "_enter",
        value: function _enter(name) {
          this.carouselService.enter(name);
        }
        /**
           * Sends all data needed for View.
           */

      }, {
        key: "_sendChanges",
        value: function _sendChanges() {
          this.carouselService.sendChanges();
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
           * Enters into a 'dragging' state
           */

      }, {
        key: "_enterDragging",
        value: function _enterDragging() {
          this.carouselService.enterDragging();
        }
        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */

      }, {
        key: "clear",
        value: function clear(id) {
          this.animateService.clear(id);
        }
      }]);

      return StageComponent;
    }();

    StageComponent.ɵfac = function StageComponent_Factory(t) {
      return new (t || StageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AnimateService));
    };

    StageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StageComponent,
      selectors: [["owl-stage"]],
      hostBindings: function StageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMouseDown($event);
          })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
            return ctx.onTouchStart($event);
          })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
            return ctx.onTouchCancel($event);
          })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
            return ctx.onDragStart();
          })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
            return ctx.onSelectStart();
          });
        }
      },
      inputs: {
        owlDraggable: "owlDraggable",
        stageData: "stageData",
        slidesData: "slidesData"
      },
      decls: 3,
      vars: 8,
      consts: [[1, "owl-stage", 3, "ngStyle", "transitionend"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "ngClass", "ngStyle", "animationend"], [4, "ngIf"], [3, "ngTemplateOutlet"]],
      template: function StageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
            return ctx.onTransitionEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c5, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slidesData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          height: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
      }
    });

    StageComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: CarouselService
      }, {
        type: AnimateService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "owlDraggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "stageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "slidesData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], StageComponent.prototype, "onMouseDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event'])], StageComponent.prototype, "onTouchStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchcancel', ['$event'])], StageComponent.prototype, "onTouchCancel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart')], StageComponent.prototype, "onDragStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('selectstart')], StageComponent.prototype, "onSelectStart", null);

    var OwlRouterLinkDirective = /*#__PURE__*/function () {
      function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
        _classCallCheck(this, OwlRouterLinkDirective);

        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];

        if (tabIndex == null) {
          renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
      }

      _createClass(OwlRouterLinkDirective, [{
        key: "onClick",
        value: function onClick() {
          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };

          if (this.stopLink) {
            return false;
          }

          this.router.navigateByUrl(this.urlTree, extras);
          return true;
        }
      }, {
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */

      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);

      return OwlRouterLinkDirective;
    }();

    OwlRouterLinkDirective.ɵfac = function OwlRouterLinkDirective_Factory(t) {
      return new (t || OwlRouterLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    OwlRouterLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OwlRouterLinkDirective,
      selectors: [["", "owlRouterLink", "", 5, "a"]],
      hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        stopLink: "stopLink",
        owlRouterLink: "owlRouterLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl"
      }
    });

    OwlRouterLinkDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], OwlRouterLinkDirective.prototype, "onClick", null);
    OwlRouterLinkDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabindex'))], OwlRouterLinkDirective);
    /**
     * @description
     *
     * Lets you link to specific routes in your app.
     *
     * See `RouterLink` for more information.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */

    var OwlRouterLinkWithHrefDirective = /*#__PURE__*/function () {
      function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
        var _this45 = this;

        _classCallCheck(this, OwlRouterLinkWithHrefDirective);

        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
          if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
            _this45.updateTargetUrlAndHref();
          }
        });
      }

      _createClass(OwlRouterLinkWithHrefDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.updateTargetUrlAndHref();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onClick",
        value: function onClick(button, ctrlKey, metaKey, shiftKey) {
          if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
          }

          if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
          }

          if (this.stopLink) {
            return false;
          }

          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };
          this.router.navigateByUrl(this.urlTree, extras);
          return false;
        }
      }, {
        key: "updateTargetUrlAndHref",
        value: function updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
      }, {
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);

      return OwlRouterLinkWithHrefDirective;
    }();

    OwlRouterLinkWithHrefDirective.ɵfac = function OwlRouterLinkWithHrefDirective_Factory(t) {
      return new (t || OwlRouterLinkWithHrefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]));
    };

    OwlRouterLinkWithHrefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: OwlRouterLinkWithHrefDirective,
      selectors: [["a", "owlRouterLink", ""]],
      hostVars: 2,
      hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("target", ctx.target);
        }
      },
      inputs: {
        stopLink: "stopLink",
        owlRouterLink: "owlRouterLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    OwlRouterLinkWithHrefDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.target'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])()], OwlRouterLinkWithHrefDirective.prototype, "href", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])], OwlRouterLinkWithHrefDirective.prototype, "onClick", null);

    function attrBoolValue(s) {
      return s === '' || !!s;
    }

    var routes = [];

    var CarouselModule = function CarouselModule() {
      _classCallCheck(this, CarouselModule);
    };

    CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CarouselModule
    });
    CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CarouselModule_Factory(t) {
        return new (t || CarouselModule)();
      },
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlLogger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: OwlLogger
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserDocumentRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoplayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [WINDOW]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyLoadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoHeightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HashService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: CarouselService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselSlideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'ng-template[carouselSlide]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dotContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataHash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dataMerge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'owl-carousel-o',
          template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
          providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
          styles: [".owl-theme { display: block; }"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ResizeService
        }, {
          type: CarouselService
        }, {
          type: NavigationService
        }, {
          type: AutoplayService
        }, {
          type: LazyLoadService
        }, {
          type: AnimateService
        }, {
          type: AutoHeightService
        }, {
          type: HashService
        }, {
          type: OwlLogger
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [DOCUMENT]
          }]
        }];
      }, {
        translated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onVisibilityChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:visibilitychange', ['$event']]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [CarouselSlideDirective]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'owl-stage',
          template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            height: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: CarouselService
        }, {
          type: AnimateService
        }];
      }, {
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onTouchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['touchstart', ['$event']]
        }],
        onTouchCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['touchcancel', ['$event']]
        }],
        onDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['dragstart']
        }],
        onSelectStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['selectstart']
        }],
        owlDraggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stageData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        slidesData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlRouterLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: ':not(a)[owlRouterLink]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click']
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OwlRouterLinkWithHrefDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'a[owlRouterLink]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
        }];
      }, {
        stopLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        owlRouterLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey']]
        }],
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.target']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        queryParamsHandling: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveFragment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        skipLocationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        replaceUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, {
        declarations: function declarations() {
          return [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
          exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
          providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-owl-carousel-o.js.map

    /***/

  },

  /***/
  "./src/app/components/category-item/category-item.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/category-item/category-item.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CategoryItemComponent */

  /***/
  function srcAppComponentsCategoryItemCategoryItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function () {
      return CategoryItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");

    function CategoryItemComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.category.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.category.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CategoryItemComponent = /*#__PURE__*/function () {
      function CategoryItemComponent() {
        _classCallCheck(this, CategoryItemComponent);
      }

      _createClass(CategoryItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryItemComponent;
    }();

    CategoryItemComponent.ɵfac = function CategoryItemComponent_Factory(t) {
      return new (t || CategoryItemComponent)();
    };

    CategoryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryItemComponent,
      selectors: [["category-item"]],
      inputs: {
        category: "category"
      },
      decls: 5,
      vars: 2,
      consts: [["nzHoverable", "", 1, "pt-4", 3, "nzCover"], ["coverTemplate", ""], [3, "alt", "src"]],
      template: function CategoryItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryItemComponent_ng_template_3_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCover", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.name);
        }
      },
      directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"]],
      styles: [".ant-card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: none;\n  background-color: none;\n  background: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.4s ease-in-out;\n  color: #263646;\n  padding: 14px;\n}\n.ant-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n.ant-card[_ngcontent-%COMP%]:hover {\n  background: #f4f4f4;\n  color: #263646;\n  -webkit-animation: pulse;\n          animation: pulse;\n  box-shadow: none;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5LWl0ZW0vY2F0ZWdvcnktaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1pdGVtL2NhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjtBREdBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1pdGVtL2NhdGVnb3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzI2MzY0NjtcbiAgcGFkZGluZzogMTRweDtcblxuICBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuXG4uYW50LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBjb2xvcjogIzI2MzY0NjtcbiAgYW5pbWF0aW9uOiBwdWxzZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbn1cbiIsIi5hbnQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjMjYzNjQ2O1xuICBwYWRkaW5nOiAxNHB4O1xufVxuLmFudC1jYXJkIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5hbnQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIGNvbG9yOiAjMjYzNjQ2O1xuICBhbmltYXRpb246IHB1bHNlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'category-item',
          templateUrl: './category-item.component.html',
          styleUrls: ['./category-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        category: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/product-item/product-item.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/product-item/product-item.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductItemComponent */

  /***/
  function srcAppComponentsProductItemProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
      return ProductItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");

    function ProductItemComponent_ng_template_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_ng_template_9_ng_container_2_Template_i_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.onChangeWishlist();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ProductItemComponent_ng_template_9_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_ng_template_9_ng_template_3_Template_i_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onChangeWishlist();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductItemComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductItemComponent_ng_template_9_ng_container_2_Template, 2, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductItemComponent_ng_template_9_ng_template_3_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.product.is_wishlist)("ngIfElse", _r3);
      }
    }

    var _c0 = function _c0() {
      return ["/product-view"];
    };

    var ProductItemComponent = /*#__PURE__*/function () {
      function ProductItemComponent() {
        _classCallCheck(this, ProductItemComponent);
      }

      _createClass(ProductItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChangeWishlist",
        value: function onChangeWishlist() {
          this.product.is_wishlist = !this.product.is_wishlist;
        }
      }]);

      return ProductItemComponent;
    }();

    ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) {
      return new (t || ProductItemComponent)();
    };

    ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductItemComponent,
      selectors: [["product-item"]],
      inputs: {
        product: "product"
      },
      decls: 11,
      vars: 10,
      consts: [["nzHoverable", "", 3, "nzCover"], [3, "routerLink"], [1, "card-body"], ["coverTemplate", ""], [3, "alt", "src"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["nz-icon", "", "nzType", "heart", "nzTheme", "fill", 1, "wishlist", "filled", 3, "click"], ["nz-icon", "", "nzType", "heart", "nzTheme", "outline", 1, "wishlist", 3, "click"]],
      template: function ProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductItemComponent_ng_template_9_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCover", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.product.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx.product.price, "INR"));
        }
      },
      directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".ant-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.ant-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n  border-radius: 10px 10px 0 0;\n}\n.ant-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.ant-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 14px;\n  font-weight: 500;\n  color: #263646;\n}\n.ant-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #00a8cc;\n}\n.ant-card[_ngcontent-%COMP%]   .wishlist[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 20px;\n}\n.ant-card[_ngcontent-%COMP%]   .filled[_ngcontent-%COMP%] {\n  color: #ff4d4f;\n  -webkit-animation: bounceIn;\n          animation: bounceIn;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n.ant-card[_ngcontent-%COMP%]:hover {\n  color: #263646;\n  box-shadow: none;\n}\n.ant-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  -webkit-animation: pulse;\n          animation: pulse;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG1CQUFBO0FDQUY7QURFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FER0k7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNETjtBREtJO0VBQ0UsY0FBQTtBQ0hOO0FET0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0xKO0FEUUU7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNOSjtBRFVBO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0FDUkY7QURVRTtFQUNFLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWNhcmQge1xuICAvLyBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIH1cblxuICAuY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuXG4gICAgaDQge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMyNjM2NDY7XG4gICAgICAvLyBmb250LWZhbWlseTogcnViaWssIGFyaWFsO1xuICAgIH1cblxuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogIzAwYThjYztcbiAgICB9XG4gIH1cblxuICAud2lzaGxpc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmZpbGxlZCB7XG4gICAgY29sb3I6ICNmZjRkNGY7XG4gICAgYW5pbWF0aW9uOiBib3VuY2VJbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICB9XG59XG5cbi5hbnQtY2FyZDpob3ZlciB7XG4gIC8vIGJvcmRlcjogMXB4ICNmMmYyZjIgc29saWQ7XG4gIGNvbG9yOiAjMjYzNjQ2O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGltZyB7XG4gICAgYW5pbWF0aW9uOiBwdWxzZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICB9XG59XG4iLCIuYW50LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFudC1jYXJkIGltZyB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuLmFudC1jYXJkIC5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmFudC1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI2MzY0Njtcbn1cbi5hbnQtY2FyZCAuY2FyZC1ib2R5IHN0cm9uZyB7XG4gIGNvbG9yOiAjMDBhOGNjO1xufVxuLmFudC1jYXJkIC53aXNobGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmFudC1jYXJkIC5maWxsZWQge1xuICBjb2xvcjogI2ZmNGQ0ZjtcbiAgYW5pbWF0aW9uOiBib3VuY2VJbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbn1cblxuLmFudC1jYXJkOmhvdmVyIHtcbiAgY29sb3I6ICMyNjM2NDY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYW50LWNhcmQ6aG92ZXIgaW1nIHtcbiAgYW5pbWF0aW9uOiBwdWxzZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-item',
          templateUrl: './product-item.component.html',
          styleUrls: ['./product-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/story-item/story-item.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/story-item/story-item.component.ts ***!
    \***************************************************************/

  /*! exports provided: StoryItemComponent */

  /***/
  function srcAppComponentsStoryItemStoryItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryItemComponent", function () {
      return StoryItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/avatar */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StoryItemComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.story.product_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.story.product_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function StoryItemComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzSrc", ctx_r3.story.user_image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.story.user_name);
      }
    }

    var StoryItemComponent = /*#__PURE__*/function () {
      function StoryItemComponent() {
        _classCallCheck(this, StoryItemComponent);
      }

      _createClass(StoryItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoryItemComponent;
    }();

    StoryItemComponent.ɵfac = function StoryItemComponent_Factory(t) {
      return new (t || StoryItemComponent)();
    };

    StoryItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoryItemComponent,
      selectors: [["story-item"]],
      inputs: {
        story: "story"
      },
      decls: 13,
      vars: 6,
      consts: [["nzHoverable", "", 3, "nzCover", "nzTitle"], [1, "card-body"], ["nz-button", "", "nzSize", "medium", "nzType", "primary"], ["coverTemplate", ""], ["extraTemplate", ""], [3, "alt", "src"], [1, "user-info"], [3, "nzSrc"]],
      template: function StoryItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StoryItemComponent_ng_template_9_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StoryItemComponent_ng_template_11_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCover", _r0)("nzTitle", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.story.product_name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.story.user_comment);
        }
      },
      directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_1__["NzCardComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
      styles: [".ant-card[_ngcontent-%COMP%] {\n  border: 1px #f2f2f2 solid;\n  border-radius: 10px;\n}\n.ant-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 1px auto;\n  border-radius: 10px 10px 0 0;\n}\n.ant-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.ant-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #07031a;\n  text-transform: capitalize;\n  width: 100%;\n}\n.ant-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  background: #00a8cc;\n}\n.ant-card[_ngcontent-%COMP%]:hover {\n  color: #263646;\n  box-shadow: none;\n}\n.user-info[_ngcontent-%COMP%] {\n  float: left;\n}\n.user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  color: #888888;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9jb21wb25lbnRzL3N0b3J5LWl0ZW0vc3RvcnktaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdG9yeS1pdGVtL3N0b3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBREVJO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0FOO0FER0k7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNETjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yeS1pdGVtL3N0b3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWNhcmQge1xuICBib3JkZXI6IDFweCAjZjJmMmYyIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDFweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIH1cblxuICAuY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuXG4gICAgaDQge1xuICAgICAgY29sb3I6ICMwNzAzMWE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDE0cHggMDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMGE4Y2M7XG4gICAgfVxuICB9XG59XG5cbi5hbnQtY2FyZDpob3ZlciB7XG4gIGNvbG9yOiAjMjYzNjQ2O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4udXNlci1pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIiwiLmFudC1jYXJkIHtcbiAgYm9yZGVyOiAxcHggI2YyZjJmMiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hbnQtY2FyZCBpbWcge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDFweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuLmFudC1jYXJkIC5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuLmFudC1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICBjb2xvcjogIzA3MDMxYTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFudC1jYXJkIC5jYXJkLWJvZHkgYnV0dG9uIHtcbiAgbWFyZ2luOiAxNHB4IDA7XG4gIGJhY2tncm91bmQ6ICMwMGE4Y2M7XG59XG5cbi5hbnQtY2FyZDpob3ZlciB7XG4gIGNvbG9yOiAjMjYzNjQ2O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4udXNlci1pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udXNlci1pbmZvIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'story-item',
          templateUrl: './story-item.component.html',
          styleUrls: ['./story-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        story: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/category-list/category-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/landing-page/components/category-list/category-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CategoryListComponent */

  /***/
  function srcAppLandingPageComponentsCategoryListCategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
      return CategoryListComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/category-item/category-item.component */
    "./src/app/components/category-item/category-item.component.ts");

    function CategoryListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "category-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", category_r1);
      }
    }

    var CategoryListComponent = /*#__PURE__*/function () {
      function CategoryListComponent() {
        _classCallCheck(this, CategoryListComponent);

        this.categories = [{
          name: 'Cookwares',
          image: 'assets/icons/cookware.png'
        }, {
          name: 'Lamps',
          image: 'assets/icons/candlestick.png'
        }, {
          name: 'Spiritual',
          image: 'assets/icons/religion.png'
        }, {
          name: 'Homedecor',
          image: 'assets/icons/decoration.png'
        }, {
          name: 'Manichitratazhu',
          image: 'assets/icons/food-and-restaurant.png'
        }, {
          name: 'Aranmula Metal Mirror 50',
          image: 'assets/icons/beauty.png'
        }, {
          name: 'Antiques',
          image: 'assets/icons/vase.png'
        }, {
          name: 'Manichitratazhu',
          image: 'assets/icons/food-and-restaurant.png'
        }, {
          name: 'Aranmula Metal Mirror 50',
          image: 'assets/icons/beauty.png'
        }, {
          name: 'Antiques',
          image: 'assets/icons/vase.png'
        }, {
          name: 'Lamps',
          image: 'assets/icons/candlestick.png'
        }, {
          name: 'Spiritual',
          image: 'assets/icons/religion.png'
        }];
      }

      _createClass(CategoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryListComponent;
    }();

    CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) {
      return new (t || CategoryListComponent)();
    };

    CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryListComponent,
      selectors: [["category-list"]],
      decls: 5,
      vars: 1,
      consts: [[1, "section-header"], ["nz-row", "", "nzAlign", "middle"], ["nz-col", "", "nzXs", "8", "nzSm", "6", "nzMd", "6", "nzLg", "3", "nzXl", "3", "nzJustify", "space-between", "nzAlign", "bottom", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzXs", "8", "nzSm", "6", "nzMd", "6", "nzLg", "3", "nzXl", "3", "nzJustify", "space-between", "nzAlign", "bottom"], [3, "category"]],
      template: function CategoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shap By Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryListComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_3__["CategoryItemComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 180px;\n  padding: 48px 84px;\n  background: #f9fafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWluLWhlaWdodDogMTgwcHg7XG4gICAgcGFkZGluZzogNDhweCA4NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmOWZhZmE7XG59Iiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBwYWRkaW5nOiA0OHB4IDg0cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'category-list',
          templateUrl: './category-list.component.html',
          styleUrls: ['./category-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/content/content.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/landing-page/components/content/content.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppLandingPageComponentsContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../slider/slider.component */
    "./src/app/landing-page/components/slider/slider.component.ts");
    /* harmony import */


    var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../category-list/category-list.component */
    "./src/app/landing-page/components/category-list/category-list.component.ts");
    /* harmony import */


    var _product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product-recommended/product-recommended.component */
    "./src/app/landing-page/components/product-recommended/product-recommended.component.ts");
    /* harmony import */


    var _product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-featured/product-featured.component */
    "./src/app/landing-page/components/product-featured/product-featured.component.ts");
    /* harmony import */


    var _product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../product-famous/product-famous.component */
    "./src/app/landing-page/components/product-famous/product-famous.component.ts");
    /* harmony import */


    var _product_custom_product_custom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product-custom/product-custom.component */
    "./src/app/landing-page/components/product-custom/product-custom.component.ts");
    /* harmony import */


    var _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../story-list/story-list.component */
    "./src/app/landing-page/components/story-list/story-list.component.ts");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 7,
      vars: 0,
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "category-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "product-recommended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "product-featured");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "product-famous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "product-custom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "story-list");
        }
      },
      directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__["CategoryListComponent"], _product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_3__["ProductRecommendedComponent"], _product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_4__["ProductFeaturedComponent"], _product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_5__["ProductFamousComponent"], _product_custom_product_custom_component__WEBPACK_IMPORTED_MODULE_6__["ProductCustomComponent"], _story_list_story_list_component__WEBPACK_IMPORTED_MODULE_7__["StoryListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/product-custom/product-custom.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/landing-page/components/product-custom/product-custom.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ProductCustomComponent */

  /***/
  function srcAppLandingPageComponentsProductCustomProductCustomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCustomComponent", function () {
      return ProductCustomComponent;
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


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");

    var ProductCustomComponent = /*#__PURE__*/function () {
      function ProductCustomComponent() {
        _classCallCheck(this, ProductCustomComponent);
      }

      _createClass(ProductCustomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductCustomComponent;
    }();

    ProductCustomComponent.ɵfac = function ProductCustomComponent_Factory(t) {
      return new (t || ProductCustomComponent)();
    };

    ProductCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCustomComponent,
      selectors: [["product-custom"]],
      decls: 22,
      vars: 0,
      consts: [["nz-row", ""], ["nz-col", "", "nzXs", "24", "nzSm", "24", "nzMd", "12", "nzLg", "12", "nzXl", "12", "nzOrder", "1"], ["src", "https://i.picsum.photos/id/1/367/267.jpg?hmac=jZdc5TviQPVhxLyvyU8siO-I5FMVXVZpBhsBYKbBJpM"], ["nz-col", "", "nzXs", "24", "nzSm", "24", "nzMd", "12", "nzLg", "12", "nzXl", "12", "nzOrder", "2"], [1, "custom-item"], ["nz-button", "", "nzType", "primary", "nzSize", "large"], ["nz-col", "", "nzXs", "24", "nzSm", "24", "nzMd", "12", "nzLg", "12", "nzXl", "12", "nzOrder", "3"], ["nz-col", "", "nzXs", "24", "nzSm", "24", "nzMd", "12", "nzLg", "12", "nzXl", "12", "nzOrder", "4"], ["src", "https://i.picsum.photos/id/102/367/267.jpg?hmac=PLH_G3f0B0j_fgyRudfSqMvmzwaGi-xpKu10ZUSY0ZE"]],
      template: function ProductCustomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm & Place Your Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " On receiving the images our designers will create a rough design with the additional/specific customization (if requested) and get back to you with the product quote and specifications within two working days. If you like our designs simply confirm it by placing the order with us. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirm & Place Your Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " On receiving the images our designers will create a rough design with the additional/specific customization (if requested) and get back to you with the product quote and specifications within two working days. If you like our designs simply confirm it by placing the order with us. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "View More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]],
      styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 84px;\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .custom-item[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9kdWN0LWN1c3RvbS9wcm9kdWN0LWN1c3RvbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvcHJvZHVjdC1jdXN0b20vcHJvZHVjdC1jdXN0b20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9kdWN0LWN1c3RvbS9wcm9kdWN0LWN1c3RvbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBwYWRkaW5nOiAyNHB4IDg0cHg7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3VzdG9tLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgaDIge1xuICAgIH1cbiAgfVxufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggODRweDtcbn1cbnNlY3Rpb24gaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5jdXN0b20taXRlbSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-custom',
          templateUrl: './product-custom.component.html',
          styleUrls: ['./product-custom.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/product-famous/product-famous.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/landing-page/components/product-famous/product-famous.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ProductFamousComponent */

  /***/
  function srcAppLandingPageComponentsProductFamousProductFamousComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFamousComponent", function () {
      return ProductFamousComponent;
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


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/product-item/product-item.component */
    "./src/app/components/product-item/product-item.component.ts");

    function ProductFamousComponent_7_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "product-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);
      }
    }

    function ProductFamousComponent_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductFamousComponent_7_ng_template_0_Template, 2, 1, "ng-template", 6);
      }
    }

    var ProductFamousComponent = /*#__PURE__*/function () {
      function ProductFamousComponent() {
        _classCallCheck(this, ProductFamousComponent);

        this.products = [{
          id: 1,
          name: 'BRASS KALAM WITH TIN COAT/PONGAL KALAM/BRASS SOMBU',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/brass-kalam-1024x683-250x188.png',
          price: 2500,
          rating: 3,
          discount: 10,
          is_wishlist: true
        }, {
          id: 2,
          name: 'Brass Sevanazhi/Sev Sancha Gathiya Murukulu Janthikulu Maker',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/bronze-Idiyappam-250x188.jpg',
          price: 2000,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 3,
          name: 'BRASS DOOM-ANTIQUE FINISH(Pack of 5 )',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/rtyj-682x1024-250x188.jpg',
          price: 500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 4,
          name: 'Copper Jug',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/07/copper-jug-250x188.jpg',
          price: 700,
          rating: 3,
          discount: 10,
          is_wishlist: true
        }, {
          id: 5,
          name: 'NILAVILAKKU-Kerala Brass Oil Lamp-Set of two',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/05/Untitled-18-1-1024x1024-250x188.jpg',
          price: 1500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 6,
          name: 'Hanging Temple Bell-Small to Big',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/temple-bell-1024x1024-250x188.jpeg',
          price: 1500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }];
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          margin: 8,
          dots: false,
          navSpeed: 700,
          navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 5
            }
          },
          nav: true
        };
      }

      _createClass(ProductFamousComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductFamousComponent;
    }();

    ProductFamousComponent.ɵfac = function ProductFamousComponent_Factory(t) {
      return new (t || ProductFamousComponent)();
    };

    ProductFamousComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFamousComponent,
      selectors: [["product-famous"]],
      decls: 8,
      vars: 2,
      consts: [[1, "section-header"], ["nz-row", "", "nzJustify", "space-around", "nzAlign", "middle", 2, "text-align", "center"], ["nz-col", ""], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "d-flex", "align-items-stretch"], [3, "product"]],
      template: function ProductFamousComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Famous Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductFamousComponent_7_Template, 1, 0, undefined, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 400px;\n  padding: 24px 84px;\n  background: #f9fafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9kdWN0LWZhbW91cy9wcm9kdWN0LWZhbW91cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvcHJvZHVjdC1mYW1vdXMvcHJvZHVjdC1mYW1vdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3Byb2R1Y3QtZmFtb3VzL3Byb2R1Y3QtZmFtb3VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAyNHB4IDg0cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmE7XG59XG4iLCJzZWN0aW9uIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDI0cHggODRweDtcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFamousComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-famous',
          templateUrl: './product-famous.component.html',
          styleUrls: ['./product-famous.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/product-featured/product-featured.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/landing-page/components/product-featured/product-featured.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ProductFeaturedComponent */

  /***/
  function srcAppLandingPageComponentsProductFeaturedProductFeaturedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFeaturedComponent", function () {
      return ProductFeaturedComponent;
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


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/product-item/product-item.component */
    "./src/app/components/product-item/product-item.component.ts");

    function ProductFeaturedComponent_7_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "product-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);
      }
    }

    function ProductFeaturedComponent_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductFeaturedComponent_7_ng_template_0_Template, 2, 1, "ng-template", 6);
      }
    }

    var ProductFeaturedComponent = /*#__PURE__*/function () {
      function ProductFeaturedComponent() {
        _classCallCheck(this, ProductFeaturedComponent);

        this.products = [{
          id: 1,
          name: 'BRASS KALAM WITH TIN COAT/PONGAL KALAM/BRASS SOMBU',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/brass-kalam-1024x683-250x188.png',
          price: 2500,
          rating: 3,
          discount: 10,
          is_wishlist: true
        }, {
          id: 2,
          name: 'Brass Sevanazhi/Sev Sancha Gathiya Murukulu Janthikulu Maker',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/bronze-Idiyappam-250x188.jpg',
          price: 2000,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 3,
          name: 'BRASS DOOM-ANTIQUE FINISH(Pack of 5 )',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/rtyj-682x1024-250x188.jpg',
          price: 500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 4,
          name: 'Copper Jug',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/07/copper-jug-250x188.jpg',
          price: 700,
          rating: 3,
          discount: 10,
          is_wishlist: true
        }, {
          id: 5,
          name: 'NILAVILAKKU-Kerala Brass Oil Lamp-Set of two',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/05/Untitled-18-1-1024x1024-250x188.jpg',
          price: 1500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 6,
          name: 'Hanging Temple Bell-Small to Big',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/temple-bell-1024x1024-250x188.jpeg',
          price: 1500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }];
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          margin: 8,
          dots: false,
          navSpeed: 700,
          navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 5
            }
          },
          nav: true
        };
      }

      _createClass(ProductFeaturedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductFeaturedComponent;
    }();

    ProductFeaturedComponent.ɵfac = function ProductFeaturedComponent_Factory(t) {
      return new (t || ProductFeaturedComponent)();
    };

    ProductFeaturedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFeaturedComponent,
      selectors: [["product-featured"]],
      decls: 8,
      vars: 2,
      consts: [[1, "section-header"], ["nz-row", "", "nzJustify", "space-around", "nzAlign", "middle", 2, "text-align", "center"], ["nz-col", ""], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "d-flex", "align-items-stretch"], [3, "product"]],
      template: function ProductFeaturedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Featured Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductFeaturedComponent_7_Template, 1, 0, undefined, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 380px;\n  padding: 24px 84px;\n  background: #f9fafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9kdWN0LWZlYXR1cmVkL3Byb2R1Y3QtZmVhdHVyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3Byb2R1Y3QtZmVhdHVyZWQvcHJvZHVjdC1mZWF0dXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvcHJvZHVjdC1mZWF0dXJlZC9wcm9kdWN0LWZlYXR1cmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWluLWhlaWdodDogMzgwcHg7XG4gICAgcGFkZGluZzogMjRweCA4NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmOWZhZmE7XG59Iiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBwYWRkaW5nOiAyNHB4IDg0cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFeaturedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-featured',
          templateUrl: './product-featured.component.html',
          styleUrls: ['./product-featured.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/product-recommended/product-recommended.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/landing-page/components/product-recommended/product-recommended.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ProductRecommendedComponent */

  /***/
  function srcAppLandingPageComponentsProductRecommendedProductRecommendedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRecommendedComponent", function () {
      return ProductRecommendedComponent;
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


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/product-item/product-item.component */
    "./src/app/components/product-item/product-item.component.ts");

    function ProductRecommendedComponent_7_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "product-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);
      }
    }

    function ProductRecommendedComponent_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductRecommendedComponent_7_ng_template_0_Template, 2, 1, "ng-template", 6);
      }
    }

    var ProductRecommendedComponent = /*#__PURE__*/function () {
      function ProductRecommendedComponent() {
        _classCallCheck(this, ProductRecommendedComponent);

        this.products = [{
          id: 1,
          name: 'BRASS KALAM WITH TIN COAT/PONGAL KALAM/BRASS SOMBU',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/brass-kalam-1024x683-250x188.png',
          price: 2500,
          rating: 3,
          discount: 10,
          is_wishlist: true
        }, {
          id: 2,
          name: 'Brass Sevanazhi/Sev Sancha Gathiya Murukulu Janthikulu Maker',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/bronze-Idiyappam-250x188.jpg',
          price: 2000,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 3,
          name: 'BRASS DOOM-ANTIQUE FINISH(Pack of 5 )',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/rtyj-682x1024-250x188.jpg',
          price: 500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 4,
          name: 'Copper Jug',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/07/copper-jug-250x188.jpg',
          price: 700,
          rating: 3,
          discount: 10,
          is_wishlist: true
        }, {
          id: 5,
          name: 'NILAVILAKKU-Kerala Brass Oil Lamp-Set of two',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/05/Untitled-18-1-1024x1024-250x188.jpg',
          price: 1500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }, {
          id: 6,
          name: 'Hanging Temple Bell-Small to Big',
          image: 'https://mannarcraft.com/wp-content/uploads/2018/06/temple-bell-1024x1024-250x188.jpeg',
          price: 1500,
          rating: 3,
          discount: 10,
          is_wishlist: false
        }];
        this.customOptions = {
          loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          margin: 8,
          dots: false,
          navSpeed: 700,
          navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 5
            }
          },
          nav: true
        };
      }

      _createClass(ProductRecommendedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductRecommendedComponent;
    }();

    ProductRecommendedComponent.ɵfac = function ProductRecommendedComponent_Factory(t) {
      return new (t || ProductRecommendedComponent)();
    };

    ProductRecommendedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductRecommendedComponent,
      selectors: [["product-recommended"]],
      decls: 8,
      vars: 2,
      consts: [[1, "section-header"], ["nz-row", "", "nzJustify", "space-around", "nzAlign", "middle", 2, "text-align", "center"], ["nz-col", ""], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "d-flex", "align-items-stretch"], [3, "product"]],
      template: function ProductRecommendedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recommended For You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductRecommendedComponent_7_Template, 1, 0, undefined, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 380px;\n  padding: 24px 84px;\n  background: #f2f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9wcm9kdWN0LXJlY29tbWVuZGVkL3Byb2R1Y3QtcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3Byb2R1Y3QtcmVjb21tZW5kZWQvcHJvZHVjdC1yZWNvbW1lbmRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvcHJvZHVjdC1yZWNvbW1lbmRlZC9wcm9kdWN0LXJlY29tbWVuZGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWluLWhlaWdodDogMzgwcHg7XG4gICAgcGFkZGluZzogMjRweCA4NHB4O1xuICAgIGJhY2tncm91bmQ6I2YyZjRmNDtcbn0iLCJzZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMzgwcHg7XG4gIHBhZGRpbmc6IDI0cHggODRweDtcbiAgYmFja2dyb3VuZDogI2YyZjRmNDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRecommendedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product-recommended',
          templateUrl: './product-recommended.component.html',
          styleUrls: ['./product-recommended.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/slider/slider.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/landing-page/components/slider/slider.component.ts ***!
    \********************************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppLandingPageComponentsSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/carousel */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");

    function SliderComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);

        this.slides = [{
          image: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
          text: ''
        }, {
          image: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
          text: ''
        }];
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["slider"]],
      decls: 9,
      vars: 1,
      consts: [["nzAutoPlay", ""], ["mainslide", ""], ["nz-carousel-content", "", 4, "ngFor", "ngForOf"], [1, "nav_bar", 3, "click"], [1, "left-nav"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "right-nav", 3, "click"], ["nz-icon", "", "nzType", "right", "nzTheme", "outline"], ["nz-carousel-content", ""], [1, "animate__animated", "animate__bounceInRight"], [3, "src"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-carousel", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_div_3_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_1__["NzCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_1__["NzCarouselContentDirective"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\nsection[_ngcontent-%COMP%]   .ant-carousel[_ngcontent-%COMP%] {\n  height: 464px;\n}\nsection[_ngcontent-%COMP%]   .ant-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .nav_bar[_ngcontent-%COMP%] {\n  position: relative;\n  top: -250px;\n  background: red;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .nav_bar[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .nav_bar[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\nsection[_ngcontent-%COMP%]   .nav_bar[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%] {\n  float: left;\n}\nsection[_ngcontent-%COMP%]   .nav_bar[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%] {\n  float: right;\n}\nsection[_ngcontent-%COMP%]   .nav_bar[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media (max-width: 575.98px) {\n  section[_ngcontent-%COMP%]   .ant-carousel[_ngcontent-%COMP%] {\n    height: 250px;\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7QUNDTjtBREdJO0VBQ0UsV0FBQTtBQ0ROO0FER0k7RUFDRSxZQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7QUNGTjtBRE1FO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7RUNKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgLmFudC1jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiA0NjRweDtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLm5hdl9iYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0yNTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubGVmdC1uYXYsXG4gICAgLnJpZ2h0LW5hdiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC5sZWZ0LW5hdiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLnJpZ2h0LW5hdiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmFudGljb24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAgIC5hbnQtY2Fyb3VzZWwge1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICB9XG59XG4iLCJzZWN0aW9uIHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG59XG5zZWN0aW9uIC5hbnQtY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDQ2NHB4O1xufVxuc2VjdGlvbiAuYW50LWNhcm91c2VsIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5uYXZfYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yNTBweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24gLm5hdl9iYXIgLmxlZnQtbmF2LFxuc2VjdGlvbiAubmF2X2JhciAucmlnaHQtbmF2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuc2VjdGlvbiAubmF2X2JhciAubGVmdC1uYXYge1xuICBmbG9hdDogbGVmdDtcbn1cbnNlY3Rpb24gLm5hdl9iYXIgLnJpZ2h0LW5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbnNlY3Rpb24gLm5hdl9iYXIgLmFudGljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgc2VjdGlvbiAuYW50LWNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/components/story-list/story-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/landing-page/components/story-list/story-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: StoryListComponent */

  /***/
  function srcAppLandingPageComponentsStoryListStoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryListComponent", function () {
      return StoryListComponent;
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


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_story_item_story_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/story-item/story-item.component */
    "./src/app/components/story-item/story-item.component.ts");

    function StoryListComponent_7_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "story-item", 7);
      }

      if (rf & 2) {
        var story_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("story", story_r2);
      }
    }

    function StoryListComponent_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoryListComponent_7_ng_template_0_Template, 1, 1, "ng-template", 6);
      }
    }

    var StoryListComponent = /*#__PURE__*/function () {
      function StoryListComponent() {
        _classCallCheck(this, StoryListComponent);

        this.stories = [{
          user_name: 'MohanRaj',
          user_image: 'https://randomuser.me/api/portraits/men/50.jpg',
          product_name: 'BRASS KALAM WITH TIN COAT/PONGAL KALAM/BRASS SOMBU',
          product_image: 'https://mannarcraft.com/wp-content/uploads/2018/06/brass-kalam-1024x683-250x188.png',
          user_comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates porro,'
        }, {
          user_name: 'Raman',
          user_image: 'https://randomuser.me/api/portraits/men/40.jpg',
          product_name: 'Brass Sevanazhi/Sev Sancha Gathiya Murukulu Janthikulu Maker',
          product_image: 'https://mannarcraft.com/wp-content/uploads/2018/06/bronze-Idiyappam-250x188.jpg',
          user_comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates porro,'
        }, {
          user_name: 'Kumar',
          user_image: 'https://randomuser.me/api/portraits/men/30.jpg',
          product_name: 'BRASS DOOM-ANTIQUE FINISH(Pack of 5 )',
          product_image: 'https://mannarcraft.com/wp-content/uploads/2018/06/rtyj-682x1024-250x188.jpg',
          user_comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates porro,'
        }, {
          user_name: 'Suresh',
          user_image: 'https://randomuser.me/api/portraits/men/10.jpg',
          product_name: 'Copper Jug',
          product_image: 'https://mannarcraft.com/wp-content/uploads/2018/07/copper-jug-250x188.jpg',
          user_comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates porro,'
        }, {
          user_name: 'Vijay',
          user_image: 'https://randomuser.me/api/portraits/men/20.jpg',
          product_name: 'NILAVILAKKU-Kerala Brass Oil Lamp-Set of two',
          product_image: 'https://mannarcraft.com/wp-content/uploads/2018/05/Untitled-18-1-1024x1024-250x188.jpg',
          user_comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates porro,'
        }, {
          user_name: 'Rajan',
          user_image: 'https://randomuser.me/api/portraits/men/27.jpg',
          product_name: 'NILAVILAKKU-Kerala Brass Oil Lamp-Set of two',
          product_image: 'https://mannarcraft.com/wp-content/uploads/2018/06/temple-bell-1024x1024-250x188.jpeg',
          user_comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates porro,'
        }];
        this.customOptions = {
          loop: true,
          margin: 8,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: false,
          navSpeed: 700,
          navText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 4
            }
          },
          nav: true
        };
      }

      _createClass(StoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoryListComponent;
    }();

    StoryListComponent.ɵfac = function StoryListComponent_Factory(t) {
      return new (t || StoryListComponent)();
    };

    StoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoryListComponent,
      selectors: [["story-list"]],
      decls: 8,
      vars: 2,
      consts: [[1, "section-header"], ["nz-row", "", "nzJustify", "space-around", "nzAlign", "middle", 2, "text-align", "center"], ["nz-col", ""], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [3, "story"]],
      template: function StoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customer Stories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoryListComponent_7_Template, 1, 0, undefined, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stories);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselSlideDirective"], _components_story_item_story_item_component__WEBPACK_IMPORTED_MODULE_4__["StoryItemComponent"]],
      styles: ["section[_ngcontent-%COMP%] {\n  min-height: 380px;\n  padding: 24px 84px;\n  background: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9sYW5kaW5nLXBhZ2UvY29tcG9uZW50cy9zdG9yeS1saXN0L3N0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmctcGFnZS9jb21wb25lbnRzL3N0b3J5LWxpc3Qvc3RvcnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvc3RvcnktbGlzdC9zdG9yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBwYWRkaW5nOiAyNHB4IDg0cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59Iiwic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBwYWRkaW5nOiAyNHB4IDg0cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'story-list',
          templateUrl: './story-list.component.html',
          styleUrls: ['./story-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/landing-page/landing-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LandingPageRoutingModule */

  /***/
  function srcAppLandingPageLandingPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
      return LandingPageRoutingModule;
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


    var _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/content/content.component */
    "./src/app/landing-page/components/content/content.component.ts");

    var routes = [{
      path: '',
      component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]
    }];

    var LandingPageRoutingModule = function LandingPageRoutingModule() {
      _classCallCheck(this, LandingPageRoutingModule);
    };

    LandingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingPageRoutingModule
    });
    LandingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingPageRoutingModule_Factory(t) {
        return new (t || LandingPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageRoutingModule, [{
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
  "./src/app/landing-page/landing-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/landing-page/landing-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: LandingPageModule */

  /***/
  function srcAppLandingPageLandingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
      return LandingPageModule;
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


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/rate */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-rate.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/avatar */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
    /* harmony import */


    var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/carousel */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-carousel.js");
    /* harmony import */


    var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./landing-page-routing.module */
    "./src/app/landing-page/landing-page-routing.module.ts");
    /* harmony import */


    var _components_content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/content/content.component */
    "./src/app/landing-page/components/content/content.component.ts");
    /* harmony import */


    var _components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/product-recommended/product-recommended.component */
    "./src/app/landing-page/components/product-recommended/product-recommended.component.ts");
    /* harmony import */


    var _components_product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/product-featured/product-featured.component */
    "./src/app/landing-page/components/product-featured/product-featured.component.ts");
    /* harmony import */


    var _components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/story-list/story-list.component */
    "./src/app/landing-page/components/story-list/story-list.component.ts");
    /* harmony import */


    var _components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/product-famous/product-famous.component */
    "./src/app/landing-page/components/product-famous/product-famous.component.ts");
    /* harmony import */


    var _components_product_custom_product_custom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/product-custom/product-custom.component */
    "./src/app/landing-page/components/product-custom/product-custom.component.ts");
    /* harmony import */


    var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/slider/slider.component */
    "./src/app/landing-page/components/slider/slider.component.ts");
    /* harmony import */


    var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/category-list/category-list.component */
    "./src/app/landing-page/components/category-list/category-list.component.ts");
    /* harmony import */


    var _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../components/category-item/category-item.component */
    "./src/app/components/category-item/category-item.component.ts");
    /* harmony import */


    var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../components/product-item/product-item.component */
    "./src/app/components/product-item/product-item.component.ts");
    /* harmony import */


    var _components_story_item_story_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../components/story-item/story-item.component */
    "./src/app/components/story-item/story-item.component.ts");

    var LandingPageModule = function LandingPageModule() {
      _classCallCheck(this, LandingPageModule);
    };

    LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingPageModule
    });
    LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingPageModule_Factory(t) {
        return new (t || LandingPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["LandingPageRoutingModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzGridModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_6__["NzRateModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__["NzAvatarModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_9__["NzCarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageModule, {
        declarations: [_components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"], _components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_12__["ProductRecommendedComponent"], _components_product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_13__["ProductFeaturedComponent"], _components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_14__["StoryListComponent"], _components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_15__["ProductFamousComponent"], _components_product_custom_product_custom_component__WEBPACK_IMPORTED_MODULE_16__["ProductCustomComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_17__["SliderComponent"], _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_18__["CategoryListComponent"], _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_19__["CategoryItemComponent"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__["ProductItemComponent"], _components_story_item_story_item_component__WEBPACK_IMPORTED_MODULE_21__["StoryItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["LandingPageRoutingModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzGridModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_6__["NzRateModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__["NzAvatarModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_9__["NzCarouselModule"]],
        exports: [_components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_12__["ProductRecommendedComponent"], _components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_14__["StoryListComponent"], _components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_15__["ProductFamousComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"], _components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_12__["ProductRecommendedComponent"], _components_product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_13__["ProductFeaturedComponent"], _components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_14__["StoryListComponent"], _components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_15__["ProductFamousComponent"], _components_product_custom_product_custom_component__WEBPACK_IMPORTED_MODULE_16__["ProductCustomComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_17__["SliderComponent"], _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_18__["CategoryListComponent"], _components_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_19__["CategoryItemComponent"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__["ProductItemComponent"], _components_story_item_story_item_component__WEBPACK_IMPORTED_MODULE_21__["StoryItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_10__["LandingPageRoutingModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzGridModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_6__["NzRateModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__["NzAvatarModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_9__["NzCarouselModule"]],
          exports: [_components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_12__["ProductRecommendedComponent"], _components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_14__["StoryListComponent"], _components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_15__["ProductFamousComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~landing-page-landing-page-module~products-products-module-es5.js.map