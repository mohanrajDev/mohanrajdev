(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js ***!
  \************************************************************************************/
/*! exports provided: NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxModule, NzCheckboxWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxComponent", function() { return NzCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxGroupComponent", function() { return NzCheckboxGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxModule", function() { return NzCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxWrapperComponent", function() { return NzCheckboxWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-checkbox", ""];
function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const o_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onCheckedChange(o_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", o_r1.disabled || ctx_r0.nzDisabled)("nzChecked", o_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](o_r1.label);
} }
class NzCheckboxWrapperComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.nzOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        const listOfCheckedValue = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzChecked)).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue));
        this.nzOnChange.emit(listOfCheckedValue);
    }
}
NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NzCheckboxWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCheckboxWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NzCheckboxWrapperComponent.propDecorators = {
    nzOnChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCheckboxComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzCheckboxWrapperComponent
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
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
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    innerCheckedChange(checked) {
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
    writeValue(value) {
        this.nzChecked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
    }
}
NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzCheckboxWrapperComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"])); };
NzCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, hostVars: 4, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-checkbox-wrapper", true)("ant-checkbox-wrapper-checked", ctx.nzChecked);
    } }, inputs: { nzValue: "nzValue", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzCheckboxComponent)),
                multi: true
            }
        ])], attrs: _c2, ngContentSelectors: _c0, decls: 6, vars: 10, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCheckboxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: NzCheckboxWrapperComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }
];
NzCheckboxComponent.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputElement', { static: true },] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIndeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzChecked", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzCheckBoxOptionInterface() { }
if (false) {}
class NzCheckboxGroupComponent {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     * @param {?} cdr
     */
    constructor(elementRef, focusMonitor, cdr) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.options = [];
        this.nzDisabled = false;
    }
    /**
     * @param {?} _
     * @param {?} option
     * @return {?}
     */
    trackByOption(_, option) {
        return option.value;
    }
    /**
     * @param {?} option
     * @param {?} checked
     * @return {?}
     */
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.options = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
}
NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NzCheckboxGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], hostVars: 2, hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-checkbox-group", true);
    } }, inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzCheckboxGroupComponent)),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], NzCheckboxComponent], encapsulation: 2 });
/** @nocollapse */
NzCheckboxGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
NzCheckboxGroupComponent.propDecorators = {
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { nzOnChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled"
        (ngModelChange)="innerCheckedChange($event)"
        (click)="$event.stopPropagation()"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzCheckboxComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-wrapper]': 'true',
                    '[class.ant-checkbox-wrapper-checked]': 'nzChecked',
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: NzCheckboxWrapperComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }]; }, { nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputElement', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                template: `
    <label
      nz-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [nzDisabled]="o.disabled || nzDisabled"
      [nzChecked]="o.checked!"
      (nzCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzCheckboxGroupComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-group]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: checkbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCheckboxModule {
}
NzCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzCheckboxModule });
NzCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCheckboxModule, { declarations: function () { return [NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzCheckboxWrapperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]; }, exports: function () { return [NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzCheckboxWrapperComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js ***!
  \*************************************************************************************************/
/*! exports provided: NzResizeObserver, NzResizeObserversModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResizeObserver", function() { return NzResizeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResizeObserversModule", function() { return NzResizeObserversModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NzResizeObserverFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * Generated from: resize-observers.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */

class NzResizeObserverFactory {
    /**
     * @param {?} callback
     * @return {?}
     */
    create(callback) {
        return typeof resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"] === 'undefined' ? null : new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](callback);
    }
}
NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) { return new (t || NzResizeObserverFactory)(); };
/** @nocollapse */ NzResizeObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzResizeObserverFactory_Factory() { return new NzResizeObserverFactory(); }, token: NzResizeObserverFactory, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/**
 * An injectable service that allows watching elements for changes to their content.
 */
class NzResizeObserver {
    /**
     * @param {?} nzResizeObserverFactory
     */
    constructor(nzResizeObserverFactory) {
        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /**
         * Keeps track of the existing ResizeObservers so they can be reused.
         */
        this.observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.observedElements.forEach((/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        (_, element) => this.cleanupObserver(element)));
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    observe(elementOrRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const stream = this.observeElement(element);
            /** @type {?} */
            const subscription = stream.subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this.unobserveElement(element);
            });
        }));
    }
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    observeElement(element) {
        if (!this.observedElements.has(element)) {
            /** @type {?} */
            const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            /** @type {?} */
            const observer = this.nzResizeObserverFactory.create((/**
             * @param {?} mutations
             * @return {?}
             */
            mutations => stream.next(mutations)));
            if (observer) {
                observer.observe(element);
            }
            this.observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            (/** @type {?} */ (this.observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this.observedElements.get(element))).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    unobserveElement(element) {
        if (this.observedElements.has(element)) {
            (/** @type {?} */ (this.observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this.observedElements.get(element))).count) {
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
    cleanupObserver(element) {
        if (this.observedElements.has(element)) {
            const { observer, stream } = (/** @type {?} */ (this.observedElements.get(element)));
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this.observedElements.delete(element);
        }
    }
}
NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) { return new (t || NzResizeObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzResizeObserverFactory)); };
/** @nocollapse */
NzResizeObserver.ctorParameters = () => [
    { type: NzResizeObserverFactory }
];
/** @nocollapse */ NzResizeObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzResizeObserver_Factory() { return new NzResizeObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NzResizeObserverFactory)); }, token: NzResizeObserver, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NzResizeObserverFactory }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: resize-observers.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzResizeObserversModule {
}
NzResizeObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzResizeObserversModule });
NzResizeObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzResizeObserversModule_Factory(t) { return new (t || NzResizeObserversModule)(); }, providers: [NzResizeObserverFactory] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [NzResizeObserverFactory]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
  \***********************************************************************************/
/*! exports provided: NzDividerComponent, NzDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function() { return NzDividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerModule", function() { return NzDividerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");






/**
 * @fileoverview added by tsickle
 * Generated from: divider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzText);
} }
function NzDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
} }
class NzDividerComponent {
    constructor() {
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
    }
}
NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(); };
NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 14, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider", true)("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    } }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzDividerComponent.propDecorators = {
    nzText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDashed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <span *ngIf="nzText" class="ant-divider-inner-text">
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
    </span>
  `,
                host: {
                    '[class.ant-divider]': 'true',
                    '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
                    '[class.ant-divider-vertical]': `nzType === 'vertical'`,
                    '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
                    '[class.ant-divider-dashed]': `nzDashed`
                }
            }]
    }], function () { return []; }, { nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDashed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: divider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDividerModule {
}
NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzDividerModule });
NzDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzDividerModule, { declarations: function () { return [NzDividerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]; }, exports: function () { return [NzDividerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]],
                declarations: [NzDividerComponent],
                exports: [NzDividerComponent]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js ***!
  \**************************************************************************************/
/*! exports provided: NzPaginationComponent, NzPaginationDefaultComponent, NzPaginationItemComponent, NzPaginationModule, NzPaginationOptionsComponent, NzPaginationSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationComponent", function() { return NzPaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationDefaultComponent", function() { return NzPaginationDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationItemComponent", function() { return NzPaginationItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationModule", function() { return NzPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationOptionsComponent", function() { return NzPaginationOptionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPaginationSimpleComponent", function() { return NzPaginationSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");












/**
 * @fileoverview added by tsickle
 * Generated from: pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */








function NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzPaginationComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1.template);
} }
function NzPaginationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nzSimple)("ngIfElse", _r2.template);
} }
const _c0 = ["containerTemplate"];
function NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
function NzPaginationDefaultComponent_ng_template_0_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.showTotal)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r2.total, ctx_r2.ranges));
} }
function NzPaginationDefaultComponent_ng_template_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_gotoIndex_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.jumpPage($event); })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_diffIndex_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.jumpDiff($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("locale", ctx_r3.locale)("type", page_r6.type)("index", page_r6.index)("disabled", !!page_r6.disabled)("itemRender", ctx_r3.itemRender)("active", ctx_r3.pageIndex === page_r6.index);
} }
function NzPaginationDefaultComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.onPageIndexChange($event); })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageSizeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onPageSizeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("total", ctx_r4.total)("locale", ctx_r4.locale)("disabled", ctx_r4.disabled)("nzSize", ctx_r4.nzSize)("showSizeChanger", ctx_r4.showSizeChanger)("showQuickJumper", ctx_r4.showQuickJumper)("pageIndex", ctx_r4.pageIndex)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
} }
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_li_0_Template, 2, 5, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_1_Template, 1, 6, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationDefaultComponent_ng_template_0_div_2_Template, 1, 9, "div", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listOfPageItem)("ngForTrackBy", ctx_r1.trackByPageItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showQuickJumper || ctx_r1.showSizeChanger);
} }
const _c2 = ["nz-pagination-item", ""];
function NzPaginationItemComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().page;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r4);
} }
function NzPaginationItemComponent_ng_template_0_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
} }
function NzPaginationItemComponent_ng_template_0_ng_container_2_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 10);
} }
function NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
} }
function NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
} }
function NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_2_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_i_3_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2022\u2022\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "prev_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "next_5");
} }
function NzPaginationItemComponent_ng_template_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_2_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_2_i_3_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzPaginationItemComponent_ng_template_0_ng_container_2_div_4_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "next");
} }
function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_a_1_Template, 2, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_2_Template, 5, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "page");
} }
function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { $implicit: a0, page: a1 }; };
const _c4 = ["nz-pagination-options", ""];
function NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 4);
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", option_r3.label)("nzValue", option_r3.value);
} }
function NzPaginationOptionsComponent_nz_select_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzPaginationOptionsComponent_nz_select_0_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onPageSizeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template, 1, 2, "nz-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("ngModel", ctx_r0.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listOfPageSizeOption)("ngForTrackBy", ctx_r0.trackByOption);
} }
function NzPaginationOptionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function NzPaginationOptionsComponent_div_1_Template_input_keydown_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.jumpToPageViaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.jump_to, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.page, " ");
} }
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.prePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.jumpToPageViaInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
class NzPaginationComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} breakpointService
     */
    constructor(i18n, cdr, breakpointService) {
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
    validatePageIndex(value, lastIndex) {
        if (value > lastIndex) {
            return lastIndex;
        }
        else if (value < 1) {
            return 1;
        }
        else {
            return value;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndexChange(index) {
        /** @type {?} */
        const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        /** @type {?} */
        const validIndex = this.validatePageIndex(index, lastIndex);
        if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
            this.nzPageIndex = validIndex;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(size);
        /** @type {?} */
        const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            this.onPageIndexChange(lastIndex);
        }
    }
    /**
     * @param {?} total
     * @return {?}
     */
    onTotalChange(total) {
        /** @type {?} */
        const lastIndex = this.getLastIndex(total, this.nzPageSize);
        if (this.nzPageIndex > lastIndex) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.onPageIndexChange(lastIndex)));
        }
    }
    /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    getLastIndex(total, pageSize) {
        return Math.ceil(total / pageSize);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Pagination');
            this.cdr.markForCheck();
        }));
        this.total$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} total
         * @return {?}
         */
        total => {
            this.onTotalChange(total);
        }));
        this.breakpointService
            .subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["gridResponsiveMap"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} bp
         * @return {?}
         */
        bp => {
            if (this.nzResponsive) {
                this.size = bp === ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointEnum"].xs ? 'small' : 'default';
                this.cdr.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzHideOnSinglePage, nzTotal, nzPageSize, nzSize } = changes;
        if (nzTotal) {
            this.total$.next(this.nzTotal);
        }
        if (nzHideOnSinglePage || nzTotal || nzPageSize) {
            this.showPagination = (this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize) || (this.nzTotal > 0 && !this.nzHideOnSinglePage);
        }
        if (nzSize) {
            this.size = nzSize.currentValue;
        }
    }
}
NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointService"])); };
NzPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPaginationComponent, selectors: [["nz-pagination"]], hostVars: 8, hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-pagination", true)("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small");
    } }, inputs: { nzShowTotal: "nzShowTotal", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzItemRender: "nzItemRender", nzDisabled: "nzDisabled", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzResponsive: "nzResponsive", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 18, consts: [[4, "ngIf"], [3, "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex", "pageIndexChange"], ["simplePagination", ""], [3, "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"], ["defaultPagination", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]], template: function NzPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-pagination-simple", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) { return ctx.onPageIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-pagination-default", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) { return ctx.onPageIndexChange($event); })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) { return ctx.onPageSizeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], NzPaginationSimpleComponent,
        NzPaginationDefaultComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzPaginationComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointService"] }
];
NzPaginationComponent.propDecorators = {
    nzPageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzPageIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzShowTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzItemRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzShowSizeChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzHideOnSinglePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzShowQuickJumper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSimple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzResponsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzSimple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzResponsive", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzTotal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzPageIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzPaginationComponent.prototype, "nzPageSize", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-pagination',
                exportAs: 'nzPagination',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *ngIf="showPagination">
      <ng-container *ngIf="nzSimple; else defaultPagination.template">
        <ng-template [ngTemplateOutlet]="simplePagination.template"></ng-template>
      </ng-container>
    </ng-container>
    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
                host: {
                    '[class.ant-pagination]': 'true',
                    '[class.ant-pagination-simple]': 'nzSimple',
                    '[class.ant-pagination-disabled]': 'nzDisabled',
                    '[class.mini]': `!nzSimple && size === 'small'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_2__["NzBreakpointService"] }]; }, { nzPageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzPageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzShowTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzItemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzShowSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzHideOnSinglePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzShowQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSimple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzResponsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: pagination-default.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPaginationDefaultComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    jumpPage(index) {
        this.onPageIndexChange(index);
    }
    /**
     * @param {?} diff
     * @return {?}
     */
    jumpDiff(diff) {
        this.jumpPage(this.pageIndex + diff);
    }
    /**
     * @param {?} _
     * @param {?} value
     * @return {?}
     */
    trackByPageItem(_, value) {
        return `${value.type}-${value.index}`;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndexChange(index) {
        this.pageIndexChange.next(index);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        this.pageSizeChange.next(size);
    }
    /**
     * @param {?} total
     * @param {?} pageSize
     * @return {?}
     */
    getLastIndex(total, pageSize) {
        return Math.ceil(total / pageSize);
    }
    /**
     * @return {?}
     */
    buildIndexes() {
        /** @type {?} */
        const lastIndex = this.getLastIndex(this.total, this.pageSize);
        this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
    }
    /**
     * @param {?} pageIndex
     * @param {?} lastIndex
     * @return {?}
     */
    getListOfPageItem(pageIndex, lastIndex) {
        /** @type {?} */
        const concatWithPrevNext = (/**
         * @param {?} listOfPage
         * @return {?}
         */
        (listOfPage) => {
            /** @type {?} */
            const prevItem = {
                type: 'prev',
                disabled: pageIndex === 1
            };
            /** @type {?} */
            const nextItem = {
                type: 'next',
                disabled: pageIndex === lastIndex
            };
            return [prevItem, ...listOfPage, nextItem];
        });
        /** @type {?} */
        const generatePage = (/**
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        (start, end) => {
            /** @type {?} */
            const list = [];
            for (let i = start; i <= end; i++) {
                list.push({
                    index: i,
                    type: 'page'
                });
            }
            return list;
        });
        if (lastIndex <= 9) {
            return concatWithPrevNext(generatePage(1, lastIndex));
        }
        else {
            /** @type {?} */
            const generateRangeItem = (/**
             * @param {?} selected
             * @param {?} last
             * @return {?}
             */
            (selected, last) => {
                /** @type {?} */
                let listOfRange = [];
                /** @type {?} */
                const prevFiveItem = {
                    type: 'prev_5'
                };
                /** @type {?} */
                const nextFiveItem = {
                    type: 'next_5'
                };
                /** @type {?} */
                const firstPageItem = generatePage(1, 1);
                /** @type {?} */
                const lastPageItem = generatePage(lastIndex, lastIndex);
                if (selected < 4) {
                    listOfRange = [...generatePage(2, 5), nextFiveItem];
                }
                else if (selected < last - 3) {
                    listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
                }
                else {
                    listOfRange = [prevFiveItem, ...generatePage(last - 4, last - 1)];
                }
                return [...firstPageItem, ...listOfRange, ...lastPageItem];
            });
            return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { pageIndex, pageSize, total } = changes;
        if (pageIndex || pageSize || total) {
            this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
            this.buildIndexes();
        }
    }
}
NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) { return new (t || NzPaginationDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzPaginationDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPaginationDefaultComponent, selectors: [["nz-pagination-default"]], viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, inputs: { nzSize: "nzSize", itemRender: "itemRender", showTotal: "showTotal", disabled: "disabled", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["containerTemplate", ""], ["class", "ant-pagination-total-text", 4, "ngIf"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "gotoIndex", "diffIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange", 4, "ngIf"], [1, "ant-pagination-total-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "gotoIndex", "diffIndex"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"]], template: function NzPaginationDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], NzPaginationItemComponent,
        NzPaginationOptionsComponent]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzPaginationDefaultComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzPaginationDefaultComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['containerTemplate', { static: true },] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    itemRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showSizeChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showQuickJumper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    pageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-pagination-default',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template #containerTemplate>
      <li class="ant-pagination-total-text" *ngIf="showTotal">
        <ng-template [ngTemplateOutlet]="showTotal" [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"></ng-template>
      </li>
      <li
        *ngFor="let page of listOfPageItem; trackBy: trackByPageItem"
        nz-pagination-item
        [locale]="locale"
        [type]="page.type"
        [index]="page.index"
        [disabled]="!!page.disabled"
        [itemRender]="itemRender"
        [active]="pageIndex === page.index"
        (gotoIndex)="jumpPage($event)"
        (diffIndex)="jumpDiff($event)"
      ></li>
      <div
        nz-pagination-options
        *ngIf="showQuickJumper || showSizeChanger"
        [total]="total"
        [locale]="locale"
        [disabled]="disabled"
        [nzSize]="nzSize"
        [showSizeChanger]="showSizeChanger"
        [showQuickJumper]="showQuickJumper"
        [pageIndex]="pageIndex"
        [pageSize]="pageSize"
        [pageSizeOptions]="pageSizeOptions"
        (pageIndexChange)="onPageIndexChange($event)"
        (pageSizeChange)="onPageSizeChange($event)"
      ></div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], itemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['containerTemplate', { static: true }]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: pagination-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPaginationItemComponent {
    constructor() {
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
    clickItem() {
        if (!this.disabled) {
            if (this.type === 'page') {
                this.gotoIndex.emit((/** @type {?} */ (this.index)));
            }
            else {
                this.diffIndex.emit(((/** @type {?} */ ({
                    next: 1,
                    prev: -1,
                    prev_5: -5,
                    next_5: 5
                })))[(/** @type {?} */ (this.type))]);
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        const { locale, index, type } = changes;
        if (locale || index || type) {
            this.title = ((/** @type {?} */ ({
                page: `${this.index}`,
                next: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.next_page,
                prev: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.prev_page,
                prev_5: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.prev_5,
                next_5: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.next_5
            })))[(/** @type {?} */ (this.type))];
        }
    }
}
NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(t) { return new (t || NzPaginationItemComponent)(); };
NzPaginationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPaginationItemComponent, selectors: [["li", "nz-pagination-item", ""]], hostVars: 19, hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPaginationItemComponent_click_HostBindingHandler() { return ctx.clickItem(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
    } }, inputs: { active: "active", index: "index", disabled: "disabled", type: "type", itemRender: "itemRender", locale: "locale" }, outputs: { diffIndex: "diffIndex", gotoIndex: "gotoIndex" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c2, decls: 3, vars: 5, consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "ngSwitch"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchCase"], ["class", "ant-pagination-item-container", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [1, "ant-pagination-item-container"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"]], template: function NzPaginationItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationItemComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemRender || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, ctx.type, ctx.index));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzPaginationItemComponent.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    itemRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    diffIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    gotoIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'li[nz-pagination-item]',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template #renderItemTemplate let-type let-page="page">
      <ng-container [ngSwitch]="type">
        <a *ngSwitchCase="'page'">{{ page }}</a>
        <ng-container *ngSwitchDefault>
          <a class="ant-pagination-item-link" [ngSwitch]="type">
            <i nz-icon nzType="left" *ngSwitchCase="'prev'"></i>
            <i nz-icon nzType="right" *ngSwitchCase="'next'"></i>
            <div class="ant-pagination-item-container" *ngSwitchDefault>
              <ng-container [ngSwitch]="type">
                <i *ngSwitchCase="'prev_5'" nz-icon nzType="double-left" class="ant-pagination-item-link-icon"></i>
                <i *ngSwitchCase="'next_5'" nz-icon nzType="double-right" class="ant-pagination-item-link-icon"></i>
              </ng-container>
              <span class="ant-pagination-item-ellipsis">•••</span>
            </div>
          </a>
        </ng-container>
      </ng-container>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="itemRender || renderItemTemplate"
      [ngTemplateOutletContext]="{ $implicit: type, page: index }"
    ></ng-template>
  `,
                host: {
                    '[class.ant-pagination-prev]': `type === 'prev'`,
                    '[class.ant-pagination-next]': `type === 'next'`,
                    '[class.ant-pagination-item]': `type === 'page'`,
                    '[class.ant-pagination-jump-prev]': `type === 'prev_5'`,
                    '[class.ant-pagination-jump-prev-custom-icon]': `type === 'prev_5'`,
                    '[class.ant-pagination-jump-next]': `type === 'next_5'`,
                    '[class.ant-pagination-jump-next-custom-icon]': `type === 'next_5'`,
                    '[class.ant-pagination-disabled]': 'disabled',
                    '[class.ant-pagination-item-active]]': 'active',
                    '[attr.title]': 'title',
                    '(click)': 'clickItem()'
                }
            }]
    }], function () { return []; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], itemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], diffIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], gotoIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: pagination-options.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPaginationOptionsComponent {
    constructor() {
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
    onPageSizeChange(size) {
        if (this.pageSize !== size) {
            this.pageSizeChange.next(size);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    jumpToPageViaInput($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        /** @type {?} */
        const index = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(target.value, this.pageIndex);
        this.pageIndexChange.next(index);
        target.value = '';
    }
    /**
     * @param {?} _
     * @param {?} option
     * @return {?}
     */
    trackByOption(_, option) {
        return option.value;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { pageSize, pageSizeOptions, locale } = changes;
        if (pageSize || pageSizeOptions || locale) {
            this.listOfPageSizeOption = [...new Set([...this.pageSizeOptions, this.pageSize])].map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    value: item,
                    label: `${item} ${this.locale.items_per_page}`
                };
            }));
        }
    }
}
NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) { return new (t || NzPaginationOptionsComponent)(); };
NzPaginationOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPaginationOptionsComponent, selectors: [["div", "nz-pagination-options", ""]], hostVars: 2, hostBindings: function NzPaginationOptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-pagination-options", true);
    } }, inputs: { nzSize: "nzSize", disabled: "disabled", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", pageSizeOptions: "pageSizeOptions", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c4, decls: 2, vars: 2, consts: [["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"]], template: function NzPaginationOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationOptionsComponent_nz_select_0_Template, 2, 5, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPaginationOptionsComponent_div_1_Template, 4, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSizeChanger);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showQuickJumper);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"]], encapsulation: 2, changeDetection: 0 });
NzPaginationOptionsComponent.propDecorators = {
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showSizeChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showQuickJumper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    pageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'div[nz-pagination-options]',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <nz-select
      class="ant-pagination-options-size-changer"
      *ngIf="showSizeChanger"
      [nzDisabled]="disabled"
      [nzSize]="nzSize"
      [ngModel]="pageSize"
      (ngModelChange)="onPageSizeChange($event)"
    >
      <nz-option
        *ngFor="let option of listOfPageSizeOption; trackBy: trackByOption"
        [nzLabel]="option.label"
        [nzValue]="option.value"
      ></nz-option>
    </nz-select>
    <div class="ant-pagination-options-quick-jumper" *ngIf="showQuickJumper">
      {{ locale.jump_to }}
      <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
      {{ locale.page }}
    </div>
  `,
                host: {
                    '[class.ant-pagination-options]': 'true'
                }
            }]
    }], function () { return []; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: pagination-simple.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPaginationSimpleComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    jumpToPageViaInput($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        /** @type {?} */
        const index = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["toNumber"])(target.value, this.pageIndex);
        this.onPageIndexChange(index);
        target.value = `${this.pageIndex}`;
    }
    /**
     * @return {?}
     */
    prePage() {
        this.onPageIndexChange(this.pageIndex - 1);
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.onPageIndexChange(this.pageIndex + 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndexChange(index) {
        this.pageIndexChange.next(index);
    }
    /**
     * @return {?}
     */
    updateBindingValue() {
        this.lastIndex = Math.ceil(this.total / this.pageSize);
        this.isFirstIndex = this.pageIndex === 1;
        this.isLastIndex = this.pageIndex === this.lastIndex;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { pageIndex, total, pageSize } = changes;
        if (pageIndex || total || pageSize) {
            this.updateBindingValue();
        }
    }
}
NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) { return new (t || NzPaginationSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzPaginationSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPaginationSimpleComponent, selectors: [["nz-pagination-simple"]], viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, inputs: { itemRender: "itemRender", disabled: "disabled", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", locale: "locale" }, outputs: { pageIndexChange: "pageIndexChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "disabled", "itemRender", "click"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "disabled", "itemRender", "click"]], template: function NzPaginationSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPaginationSimpleComponent_ng_template_0_Template, 7, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: [NzPaginationItemComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzPaginationSimpleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzPaginationSimpleComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['containerTemplate', { static: true },] }],
    itemRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    pageIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationSimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-pagination-simple',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template #containerTemplate>
      <li
        nz-pagination-item
        [attr.title]="locale.prev_page"
        [disabled]="isFirstIndex"
        (click)="prePage()"
        type="prev"
        [itemRender]="itemRender"
      ></li>
      <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
        <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
        <span class="ant-pagination-slash">/</span>
        {{ lastIndex }}
      </li>
      <li
        nz-pagination-item
        [attr.title]="locale?.next_page"
        [disabled]="isLastIndex"
        (click)="nextPage()"
        type="next"
        [itemRender]="itemRender"
      ></li>
    </ng-template>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { itemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['containerTemplate', { static: true }]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: pagination.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPaginationModule {
}
NzPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzPaginationModule });
NzPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPaginationModule, { declarations: function () { return [NzPaginationComponent,
        NzPaginationSimpleComponent,
        NzPaginationOptionsComponent,
        NzPaginationItemComponent,
        NzPaginationDefaultComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]; }, exports: function () { return [NzPaginationComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    NzPaginationComponent,
                    NzPaginationSimpleComponent,
                    NzPaginationOptionsComponent,
                    NzPaginationItemComponent,
                    NzPaginationDefaultComponent
                ],
                exports: [NzPaginationComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]
            }]
    }], null, null); })();

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
function PaginationItemRenderContext() { }
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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js ***!
  \*********************************************************************************/
/*! exports provided: NzRadioButtonDirective, NzRadioComponent, NzRadioGroupComponent, NzRadioModule, NzRadioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioButtonDirective", function() { return NzRadioButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioComponent", function() { return NzRadioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioGroupComponent", function() { return NzRadioGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioModule", function() { return NzRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRadioService", function() { return NzRadioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









/**
 * @fileoverview added by tsickle
 * Generated from: radio-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-radio", ""];
class NzRadioButtonDirective {
}
NzRadioButtonDirective.ɵfac = function NzRadioButtonDirective_Factory(t) { return new (t || NzRadioButtonDirective)(); };
NzRadioButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzRadioButtonDirective, selectors: [["", "nz-radio-button", ""]] });

/**
 * @fileoverview added by tsickle
 * Generated from: radio.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRadioService {
    constructor() {
        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.touched$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.name$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
    }
    /**
     * @return {?}
     */
    touch() {
        this.touched$.next();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.selected$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisabled(value) {
        this.disabled$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setName(value) {
        this.name$.next(value);
    }
}
NzRadioService.ɵfac = function NzRadioService_Factory(t) { return new (t || NzRadioService)(); };
NzRadioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NzRadioService, factory: NzRadioService.ɵfac });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: radio-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRadioGroupComponent {
    /**
     * @param {?} cdr
     * @param {?} nzRadioService
     */
    constructor(cdr, nzRadioService) {
        this.cdr = cdr;
        this.nzRadioService = nzRadioService;
        this.value = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.nzDisabled = false;
        this.nzButtonStyle = 'outline';
        this.nzSize = 'default';
        this.nzName = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzRadioService.selected$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (this.value !== value) {
                this.value = value;
                this.onChange(this.value);
            }
        }));
        this.nzRadioService.touched$.subscribe((/**
         * @return {?}
         */
        () => {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.onTouched()));
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzName } = changes;
        if (nzDisabled) {
            this.nzRadioService.setDisabled(this.nzDisabled);
        }
        if (nzName) {
            this.nzRadioService.setName((/** @type {?} */ (this.nzName)));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.nzRadioService.select(value);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.nzRadioService.setDisabled(isDisabled);
        this.cdr.markForCheck();
    }
}
NzRadioGroupComponent.ɵfac = function NzRadioGroupComponent_Factory(t) { return new (t || NzRadioGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService)); };
NzRadioGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzRadioGroupComponent, selectors: [["nz-radio-group"]], hostVars: 8, hostBindings: function NzRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-group", true)("ant-radio-group-large", ctx.nzSize === "large")("ant-radio-group-small", ctx.nzSize === "small")("ant-radio-group-solid", ctx.nzButtonStyle === "solid");
    } }, inputs: { nzDisabled: "nzDisabled", nzButtonStyle: "nzButtonStyle", nzSize: "nzSize", nzName: "nzName" }, exportAs: ["nzRadioGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            NzRadioService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzRadioGroupComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzRadioGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: NzRadioService }
];
NzRadioGroupComponent.propDecorators = {
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzButtonStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzRadioGroupComponent.prototype, "nzDisabled", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRadioComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} focusMonitor
     * @param {?} nzRadioService
     * @param {?} nzRadioButtonDirective
     */
    constructor(elementRef, cdr, focusMonitor, nzRadioService, nzRadioButtonDirective) {
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
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.nzValue = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onHostClick(event) {
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
    focus() {
        this.focusMonitor.focusVia((/** @type {?} */ (this.inputElement)), 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        (/** @type {?} */ (this.inputElement)).nativeElement.blur();
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
             * @param {?} name
             * @return {?}
             */
            name => {
                this.name = name;
                this.cdr.markForCheck();
            }));
            this.nzRadioService.disabled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
             * @param {?} disabled
             * @return {?}
             */
            disabled => {
                this.nzDisabled = disabled;
                this.cdr.markForCheck();
            }));
            this.nzRadioService.selected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                this.isChecked = this.nzValue === value;
                this.cdr.markForCheck();
            }));
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.onTouched()));
                if (this.nzRadioService) {
                    this.nzRadioService.touch();
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
NzRadioComponent.ɵfac = function NzRadioComponent_Factory(t) { return new (t || NzRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzRadioButtonDirective, 8)); };
NzRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzRadioComponent, selectors: [["", "nz-radio", ""], ["", "nz-radio-button", ""]], viewQuery: function NzRadioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, hostVars: 12, hostBindings: function NzRadioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzRadioComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.nzDisabled && ctx.isRadioButton);
    } }, inputs: { nzValue: "nzValue", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus" }, exportAs: ["nzRadio"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzRadioComponent)),
                multi: true
            }
        ])], attrs: _c2, ngContentSelectors: _c0, decls: 6, vars: 24, consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]], template: function NzRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.nzDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.nzDisabled && ctx.isRadioButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nzDisabled)("checked", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("name", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzRadioComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: NzRadioService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: NzRadioButtonDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzRadioComponent.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputElement', { static: false },] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzRadioComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzRadioComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nz-radio-button]'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-radio-group',
                exportAs: 'nzRadioGroup',
                preserveWhitespaces: false,
                template: ` <ng-content></ng-content> `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    NzRadioService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzRadioGroupComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group]': `true`,
                    '[class.ant-radio-group-large]': `nzSize === 'large'`,
                    '[class.ant-radio-group-small]': `nzSize === 'small'`,
                    '[class.ant-radio-group-solid]': `nzButtonStyle === 'solid'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: NzRadioService }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzButtonStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[nz-radio],[nz-radio-button]',
                exportAs: 'nzRadio',
                preserveWhitespaces: false,
                template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="nzDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="nzDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="nzDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzRadioComponent)),
                        multi: true
                    }
                ],
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
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] }, { type: NzRadioService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: NzRadioButtonDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputElement', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: radio.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRadioModule {
}
NzRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzRadioModule });
NzRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzRadioModule, { declarations: function () { return [NzRadioComponent,
        NzRadioButtonDirective,
        NzRadioGroupComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [NzRadioComponent,
        NzRadioButtonDirective,
        NzRadioGroupComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzRadioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                exports: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent],
                declarations: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js ***!
  \**********************************************************************************/
/*! exports provided: NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzOptionItemGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectComponent, NzSelectItemComponent, NzSelectModule, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzSelectTopControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionComponent", function() { return NzOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionContainerComponent", function() { return NzOptionContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionGroupComponent", function() { return NzOptionGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionItemComponent", function() { return NzOptionItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionItemGroupComponent", function() { return NzOptionItemGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectArrowComponent", function() { return NzSelectArrowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectClearComponent", function() { return NzSelectClearComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectComponent", function() { return NzSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectItemComponent", function() { return NzSelectItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectModule", function() { return NzSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectPlaceholderComponent", function() { return NzSelectPlaceholderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectSearchComponent", function() { return NzSelectSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectTopControlComponent", function() { return NzSelectTopControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/empty */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");






















/**
 * @fileoverview added by tsickle
 * Generated from: option-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */















const _c0 = ["*"];
function NzOptionContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", ctx_r0.notFoundContent);
} }
function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option-item-group", 9);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3.groupLabel);
} }
function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onItemHover($event); })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onItemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
} }
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "item");
} }
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) { }
function NzOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c1 = ["inputElement"];
const _c2 = ["mirrorElement"];
function NzSelectSearchComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3, 4);
} }
function NzSelectTopControlComponent_ng_container_1_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
} }
function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_nz_select_item_1_Template, 1, 6, "nz-select-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onInputValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowSingleLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.open && ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
} }
function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@zoomMotion.done", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_animation_zoomMotion_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onAnimationEnd(); })("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onDeleteItem(item_r8.contentTemplateOutletContext); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoomMotion", undefined)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
} }
function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 9, "nz-select-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onInputValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
} }
function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.placeHolder);
} }
function NzSelectComponent_nz_select_clear_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzSelectComponent_nz_select_clear_2_Template_nz_select_clear_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClearSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearIcon", ctx_r1.nzClearIcon);
} }
function NzSelectComponent_nz_select_arrow_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r2.nzLoading)("search", ctx_r2.nzOpen && ctx_r2.nzShowSearch)("suffixIcon", ctx_r2.nzSuffixIcon);
} }
function NzSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onKeyDown($event); })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onItemClick($event); })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nzScrollToBottom.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.nzDropdownStyle)("itemSize", ctx_r3.nzOptionHeightPx)("maxItemLength", ctx_r3.nzOptionOverflowSize)("matchWidth", ctx_r3.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.nzMenuItemSelectedIcon)("notFoundContent", ctx_r3.nzNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.nzDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.nzMode);
} }
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
} }
function NzOptionItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function NzOptionItemComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzOptionItemComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.template);
} }
function NzOptionItemComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function NzOptionItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_div_3_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon)("ngIfElse", ctx_r2.icon);
} }
function NzSelectArrowComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.search);
} }
function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suffixIcon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r9);
} }
function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
} }
function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
} }
function NzSelectClearComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1);
} }
function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
} }
function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
} }
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
} }
function NzSelectItemComponent_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function NzSelectItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_i_1_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.placeholder, " ");
} }
class NzOptionGroupComponent {
    constructor() {
        this.nzLabel = null;
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.changes.next();
    }
}
NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
NzOptionGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzOptionGroupComponent.propDecorators = {
    nzLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionContainerComponent {
    constructor() {
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
    onItemClick(value) {
        this.itemClick.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onItemHover(value) {
        // TODO: keydown.enter won't activate this value
        this.activatedValue = value;
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.key;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
        }
    }
    /**
     * @return {?}
     */
    scrollToActivatedValue() {
        /** @type {?} */
        const index = this.listOfContainerItem.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => this.compareWith(item.key, this.activatedValue)));
        if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfContainerItem, activatedValue } = changes;
        if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.scrollToActivatedValue()));
    }
}
NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(); };
NzOptionContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionContainerComponent, selectors: [["nz-option-container"]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, hostVars: 2, hostBindings: function NzOptionContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown", true);
    } }, inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, exportAs: ["nzOptionContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 14, consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], NzOptionItemGroupComponent,
        NzOptionItemComponent]; }, encapsulation: 2, changeDetection: 0 });
NzOptionContainerComponent.propDecorators = {
    notFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    menuItemSelectedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropdownRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activatedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfSelectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxItemLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfContainerItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrollToBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cdkVirtualScrollViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], { static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionComponent {
    /**
     * @param {?} nzOptionGroupComponent
     */
    constructor(nzOptionGroupComponent) {
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
    ngOnInit() {
        if (this.nzOptionGroupComponent) {
            this.nzOptionGroupComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.groupLabel = this.nzOptionGroupComponent.nzLabel;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.changes.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) { return new (t || NzOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzOptionGroupComponent, 8)); };
NzOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionComponent, selectors: [["nz-option"]], viewQuery: function NzOptionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, inputs: { nzLabel: "nzLabel", nzValue: "nzValue", nzDisabled: "nzDisabled", nzHide: "nzHide", nzCustomContent: "nzCustomContent" }, exportAs: ["nzOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzOptionComponent.ctorParameters = () => [
    { type: NzOptionGroupComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzOptionComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
    nzLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCustomContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzOptionComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzOptionComponent.prototype, "nzHide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzOptionComponent.prototype, "nzCustomContent", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectSearchComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, focusMonitor) {
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
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
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
    clearInputValue() {
        this.onValueChange('');
    }
    /**
     * @return {?}
     */
    syncMirrorWidth() {
        /** @type {?} */
        const mirrorDOM = (/** @type {?} */ (this.mirrorElement)).nativeElement;
        /** @type {?} */
        const hostDOM = this.elementRef.nativeElement;
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        mirrorDOM.innerHTML = `${inputDOM.value}&nbsp;`;
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
}
NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) { return new (t || NzSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"])); };
NzSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectSearchComponent, selectors: [["nz-select-search"]], viewQuery: function NzSelectSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mirrorElement = _t.first);
    } }, hostVars: 2, hostBindings: function NzSelectSearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-search", true);
    } }, inputs: { disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]], template: function NzSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onValueChange($event); })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() { return ctx.setCompositionState(true); })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() { return ctx.setCompositionState(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.showInput ? null : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.autofocus ? "autofocus" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mirrorSync);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzSelectSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
];
NzSelectSearchComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mirrorSync: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focusTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isComposingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputElement', { static: true },] }],
    mirrorElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mirrorElement', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-top-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectTopControlComponent {
    /**
     * @param {?=} noAnimation
     */
    constructor(noAnimation) {
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
    onHostClick() {
        if (!this.disabled) {
            this.openChange.next(!this.open);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onHostKeydown(e) {
        /** @type {?} */
        const inputValue = ((/** @type {?} */ (e.target))).value;
        if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["BACKSPACE"] && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            e.preventDefault();
            this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
        }
    }
    /**
     * @return {?}
     */
    updateTemplateVariable() {
        /** @type {?} */
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    /**
     * @param {?} isComposing
     * @return {?}
     */
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputValueChange(value) {
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
    tokenSeparate(inputValue, tokenSeparators) {
        /** @type {?} */
        const includesSeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        (str, separators) => {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        });
        /** @type {?} */
        const splitBySeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        (str, separators) => {
            /** @type {?} */
            const reg = new RegExp(`[${separators.join()}]`);
            /** @type {?} */
            const array = ((/** @type {?} */ (str))).split(reg).filter((/**
             * @param {?} token
             * @return {?}
             */
            token => token));
            return [...new Set(array)];
        });
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    /**
     * @return {?}
     */
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.nzValue;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDeleteItem(item) {
        if (!this.disabled && !item.nzDisabled) {
            this.deleteItem.next(item);
        }
    }
    /**
     * @return {?}
     */
    onAnimationEnd() {
        this.animationEnd.next();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            /** @type {?} */
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                return {
                    nzLabel: o.nzLabel,
                    nzValue: o.nzValue,
                    nzDisabled: o.nzDisabled,
                    contentTemplateOutlet: this.customTemplate,
                    contentTemplateOutletContext: o
                };
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                /** @type {?} */
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                /** @type {?} */
                const listOfSelectedValue = this.listOfTopItem.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.nzValue));
                /** @type {?} */
                const exceededItem = {
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
}
NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], 9)); };
NzSelectTopControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectTopControlComponent, selectors: [["nz-select-top-control"]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectSearchComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
    } }, hostVars: 2, hostBindings: function NzSelectTopControlComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectTopControlComponent_click_HostBindingHandler() { return ctx.onHostClick(); })("keydown", function NzSelectTopControlComponent_keydown_HostBindingHandler($event) { return ctx.onHostKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selector", true);
    } }, inputs: { showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", animationEnd: "animationEnd", deleteItem: "deleteItem", openChange: "openChange" }, exportAs: ["nzSelectTopControl"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_Template, 3, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_2_Template, 3, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPlaceholder);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], NzSelectSearchComponent,
        NzSelectItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], NzSelectPlaceholderComponent]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzSelectTopControlComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzSelectTopControlComponent.propDecorators = {
    showSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxTagCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxTagPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfTopItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tokenSeparators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tokenize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    animationEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    deleteItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelectSearchComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzSelectSearchComponent,] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultFilterOption = (/**
 * @param {?} searchValue
 * @param {?} item
 * @return {?}
 */
(searchValue, item) => {
    if (item && item.nzLabel) {
        return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
});
const ɵ0 = defaultFilterOption;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'select';
class NzSelectComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} focusMonitor
     * @param {?=} noAnimation
     */
    constructor(nzConfigService, cdr, elementRef, platform, focusMonitor, noAnimation) {
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
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
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
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
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
    generateTagItem(value) {
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
    onItemClick(value) {
        this.activatedValue = value;
        if (this.nzMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
            }
            this.setOpenState(false);
        }
        else {
            /** @type {?} */
            const targetIndex = this.listOfValue.findIndex((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o, value)));
            if (targetIndex !== -1) {
                /** @type {?} */
                const listOfValueAfterRemoved = this.listOfValue.filter((/**
                 * @param {?} _
                 * @param {?} i
                 * @return {?}
                 */
                (_, i) => i !== targetIndex));
                this.updateListOfValue(listOfValueAfterRemoved);
            }
            else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                /** @type {?} */
                const listOfValueAfterAdded = [...this.listOfValue, value];
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
    onItemDelete(item) {
        /** @type {?} */
        const listOfSelectedValue = this.listOfValue.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => !this.compareWith(v, item.nzValue)));
        this.updateListOfValue(listOfSelectedValue);
        this.clearInput();
    }
    /**
     * @return {?}
     */
    updateListOfContainerItem() {
        /** @type {?} */
        let listOfContainerItem = this.listOfTagAndTemplateItem
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzHide))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (!this.nzServerSearch && this.searchValue) {
                return this.nzFilterOption(this.searchValue, item);
            }
            else {
                return true;
            }
        }));
        if (this.nzMode === 'tags' && this.searchValue) {
            /** @type {?} */
            const matchedItem = this.listOfTagAndTemplateItem.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel === this.searchValue));
            if (!matchedItem) {
                /** @type {?} */
                const tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem, ...listOfContainerItem];
                this.activatedValue = tagItem.nzValue;
            }
            else {
                this.activatedValue = matchedItem.nzValue;
            }
        }
        if (this.listOfValue.length !== 0 &&
            listOfContainerItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.activatedValue))) === -1) {
            /** @type {?} */
            const activatedItem = listOfContainerItem.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfValue[0]))) || listOfContainerItem[0];
            this.activatedValue = (activatedItem && activatedItem.nzValue) || null;
        }
        /** @type {?} */
        let listOfGroupLabel = [];
        if (this.isReactiveDriven) {
            listOfGroupLabel = [...new Set(this.nzOptions.filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.groupLabel)).map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => (/** @type {?} */ (o.groupLabel)))))];
        }
        else {
            if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.nzLabel));
            }
        }
        /** insert group item **/
        listOfGroupLabel.forEach((/**
         * @param {?} label
         * @return {?}
         */
        label => {
            /** @type {?} */
            const index = listOfContainerItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => label === item.groupLabel));
            if (index > -1) {
                /** @type {?} */
                const groupItem = (/** @type {?} */ ({ groupLabel: label, type: 'group', key: label }));
                listOfContainerItem.splice(index, 0, groupItem);
            }
        }));
        this.listOfContainerItem = [...listOfContainerItem];
        this.updateCdkConnectedOverlayPositions();
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.nzSelectTopControlComponent.clearInputValue();
    }
    /**
     * @param {?} listOfValue
     * @return {?}
     */
    updateListOfValue(listOfValue) {
        /** @type {?} */
        const covertListToModel = (/**
         * @param {?} list
         * @param {?} mode
         * @return {?}
         */
        (list, mode) => {
            if (mode === 'default') {
                if (list.length > 0) {
                    return list[0];
                }
                else {
                    return null;
                }
            }
            else {
                return list;
            }
        });
        /** @type {?} */
        const model = covertListToModel(listOfValue, this.nzMode);
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
    onTokenSeparate(listOfLabel) {
        /** @type {?} */
        const listOfMatchedValue = this.listOfTagAndTemplateItem
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.findIndex((/**
         * @param {?} label
         * @return {?}
         */
        label => label === item.nzLabel)) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listOfValue.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))) === -1));
        if (this.nzMode === 'multiple') {
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
        }
        else if (this.nzMode === 'tags') {
            /** @type {?} */
            const listOfUnMatchedLabel = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel === label)) === -1));
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        }
        this.clearInput();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.type === 'item')).filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => this.compareWith(item.nzValue, this.activatedValue)));
        switch (e.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
                e.preventDefault();
                if (this.nzOpen) {
                    /** @type {?} */
                    const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                    this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
                e.preventDefault();
                if (this.nzOpen) {
                    /** @type {?} */
                    const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                e.preventDefault();
                if (this.nzOpen) {
                    if (this.activatedValue) {
                        this.onItemClick(this.activatedValue);
                    }
                }
                else {
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
    setOpenState(value) {
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
    onOpenChange() {
        this.updateCdkConnectedOverlayStatus();
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputValueChange(value) {
        this.searchValue = value;
        this.updateListOfContainerItem();
        this.nzOnSearch.emit(value);
        this.updateCdkConnectedOverlayPositions();
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.updateListOfValue([]);
    }
    /**
     * @return {?}
     */
    focus() {
        this.nzSelectTopControlComponent.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.nzSelectTopControlComponent.blur();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser && this.originElement.nativeElement) {
            this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayPositions() {
        if (this.cdkConnectedOverlay.overlayRef) {
            this.cdkConnectedOverlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    writeValue(modelValue) {
        /** https://github.com/angular/angular/issues/14988 **/
        if (this.value !== modelValue) {
            this.value = modelValue;
            /** @type {?} */
            const covertModelToList = (/**
             * @param {?} model
             * @param {?} mode
             * @return {?}
             */
            (model, mode) => {
                if (model === null || model === undefined) {
                    return [];
                }
                else if (mode === 'default') {
                    return [model];
                }
                else {
                    return model;
                }
            });
            /** @type {?} */
            const listOfValue = covertModelToList(modelValue, this.nzMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
    ngOnChanges(changes) {
        const { nzOpen, nzDisabled, nzOptions } = changes;
        if (nzOpen) {
            this.onOpenChange();
        }
        if (nzDisabled && this.nzDisabled) {
            this.setOpenState(false);
        }
        if (nzOptions) {
            this.isReactiveDriven = true;
            /** @type {?} */
            const listOfOptions = this.nzOptions || [];
            /** @type {?} */
            const listOfTransformedItem = listOfOptions.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
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
            }));
            this.listOfTemplateItem$.next(listOfTransformedItem);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.onTouched();
                }));
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
                this.nzFocus.emit();
            }
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.listOfValue$, this.listOfTemplateItem$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([listOfSelectedValue, listOfTemplateItem]) => {
            /** @type {?} */
            const listOfTagItem = listOfSelectedValue
                .filter((/**
             * @return {?}
             */
            () => this.nzMode === 'tags'))
                .filter((/**
             * @param {?} value
             * @return {?}
             */
            value => listOfTemplateItem.findIndex((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value))) === -1))
                .map((/**
             * @param {?} value
             * @return {?}
             */
            value => this.listOfTopItem.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value))) || this.generateTagItem(value)));
            this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
            this.listOfTopItem = this.listOfValue
                .map((/**
             * @param {?} v
             * @return {?}
             */
            v => (/** @type {?} */ ([...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(v, item.nzValue)))))))
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !!item));
            this.updateListOfContainerItem();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateCdkConnectedOverlayStatus();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.isReactiveDriven) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
             * @return {?}
             */
            () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...[
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.changes)),
                ...this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.changes))
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    const { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel } = item;
                    return { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel, type: 'item', key: nzValue };
                }));
                this.listOfTemplateItem$.next(listOfOptionInterface);
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) { return new (t || NzSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], 9)); };
NzSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectComponent, selectors: [["nz-select"]], contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionGroupComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionComponent = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionGroupComponent = _t);
    } }, viewQuery: function NzSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzOptionGroupComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzOptionGroupComponentElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponentElement = _t.first);
    } }, hostVars: 24, hostBindings: function NzSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select", true)("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow && ctx.nzMode === "default")("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", ctx.nzShowSearch || ctx.nzMode !== "default")("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default");
    } }, inputs: { nzSize: "nzSize", nzOptionHeightPx: "nzOptionHeightPx", nzOptionOverflowSize: "nzOptionOverflowSize", nzDropdownClassName: "nzDropdownClassName", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzDropdownStyle: "nzDropdownStyle", nzNotFoundContent: "nzNotFoundContent", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzDropdownRender: "nzDropdownRender", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", nzShowArrow: "nzShowArrow", nzTokenSeparators: "nzTokenSeparators", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzMaxMultipleCount: "nzMaxMultipleCount", nzMode: "nzMode", nzFilterOption: "nzFilterOption", compareWith: "compareWith", nzAllowClear: "nzAllowClear", nzBorderless: "nzBorderless", nzShowSearch: "nzShowSearch", nzLoading: "nzLoading", nzAutoFocus: "nzAutoFocus", nzAutoClearSearchValue: "nzAutoClearSearchValue", nzServerSearch: "nzServerSearch", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzOptions: "nzOptions" }, outputs: { nzOnSearch: "nzOnSearch", nzScrollToBottom: "nzScrollToBottom", nzOpenChange: "nzOpenChange", nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzSelectComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 23, consts: [["cdkOverlayOrigin", "", 3, "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "animationEnd", "deleteItem", "keydown", "openChange"], ["origin", "cdkOverlayOrigin"], [3, "clearIcon", "clear", 4, "ngIf"], [3, "loading", "search", "suffixIcon", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [3, "clearIcon", "clear"], [3, "loading", "search", "suffixIcon"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]], template: function NzSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-top-control", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) { return ctx.onInputValueChange($event); })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) { return ctx.onTokenSeparate($event); })("animationEnd", function NzSelectComponent_Template_nz_select_top_control_animationEnd_0_listener() { return ctx.updateCdkConnectedOverlayPositions(); })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) { return ctx.onItemDelete($event); })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) { return ctx.onKeyDown($event); })("openChange", function NzSelectComponent_Template_nz_select_top_control_openChange_0_listener($event) { return ctx.setOpenState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectComponent_nz_select_clear_2_Template, 1, 1, "nz-select-clear", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectComponent_nz_select_arrow_3_Template, 1, 3, "nz-select-arrow", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSelectComponent_ng_template_4_Template, 1, 19, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function NzSelectComponent_Template_ng_template_backdropClick_4_listener() { return ctx.setOpenState(false); })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() { return ctx.setOpenState(false); })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow && ctx.nzMode === "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen);
    } }, directives: function () { return [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], NzSelectTopControlComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzConnectedOverlayDirective"], NzSelectClearComponent,
        NzSelectArrowComponent,
        NzOptionContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"]]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzSelectComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzSelectComponent.propDecorators = {
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOptionHeightPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOptionOverflowSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownMatchSelectWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMaxTagCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCustomTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSuffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzClearIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzRemoveIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMenuItemSelectedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTokenSeparators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMaxTagPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMaxMultipleCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzFilterOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAllowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzBorderless: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzShowSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAutoClearSearchValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzServerSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOnSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzScrollToBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    originElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
    cdkConnectedOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], { static: true },] }],
    nzSelectTopControlComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzSelectTopControlComponent, { static: true },] }],
    listOfNzOptionComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzOptionComponent, { descendants: true },] }],
    listOfNzOptionGroupComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzOptionGroupComponent, { descendants: true },] }],
    nzOptionGroupComponentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzOptionGroupComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
    nzSelectTopControlComponentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzSelectTopControlComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzAllowClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzBorderless", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzShowSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzAutoFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzServerSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzOpen", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return []; }, { nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-container',
                exportAs: 'nzOptionContainer',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <nz-option-item-group *ngSwitchCase="'group'" [nzLabel]="item.groupLabel"></nz-option-item-group>
            <nz-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.nzCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.nzDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [label]="item.nzLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.nzValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></nz-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-select-dropdown]': 'true'
                }
            }]
    }], function () { return []; }, { notFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuItemSelectedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activatedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfSelectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matchWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxItemLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfContainerItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollToBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option',
                exportAs: 'nzOption',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
            }]
    }], function () { return [{ type: NzOptionGroupComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCustomContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-search',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <input
      #inputElement
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                host: {
                    '[class.ant-select-selection-search]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mirrorSync: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focusTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isComposingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputElement', { static: true }]
        }], mirrorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mirrorElement', { static: false }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectTopControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-top-control',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomMotion"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
        <nz-select-search
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="open && showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [@zoomMotion]
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (@zoomMotion.done)="onAnimationEnd()"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        >
        </nz-select-item>
        <nz-select-search
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
                host: {
                    '[class.ant-select-selector]': 'true',
                    '(click)': 'onHostClick()',
                    '(keydown)': 'onHostKeydown($event)'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { showSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfTopItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tokenSeparators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tokenize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelectSearchComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectSearchComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select',
                exportAs: 'nzSelect',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzSelectComponent)),
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]],
                template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (animationEnd)="updateCdkConnectedOverlayPositions()"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
      (openChange)="setOpenState($event)"
    ></nz-select-top-control>
    <nz-select-clear
      *ngIf="nzAllowClear && !nzDisabled && listOfValue.length"
      [clearIcon]="nzClearIcon"
      (clear)="onClearSelection()"
    ></nz-select-clear>
    <nz-select-arrow
      *ngIf="nzShowArrow && nzMode === 'default'"
      [loading]="nzLoading"
      [search]="nzOpen && nzShowSearch"
      [suffixIcon]="nzSuffixIcon"
    ></nz-select-arrow>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      (backdropClick)="setOpenState(false)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayOpen]="nzOpen"
    >
      <nz-option-container
        [ngStyle]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-select]': 'true',
                    '[class.ant-select-lg]': 'nzSize === "large"',
                    '[class.ant-select-sm]': 'nzSize === "small"',
                    '[class.ant-select-show-arrow]': `nzShowArrow && nzMode === 'default'`,
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-show-search]': `nzShowSearch || nzMode !== 'default'`,
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-borderless]': 'nzBorderless',
                    '[class.ant-select-open]': 'nzOpen',
                    '[class.ant-select-focused]': 'nzOpen || focused',
                    '[class.ant-select-single]': `nzMode === 'default'`,
                    '[class.ant-select-multiple]': `nzMode !== 'default'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOptionHeightPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOptionOverflowSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownMatchSelectWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMaxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCustomTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzClearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzRemoveIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMenuItemSelectedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTokenSeparators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMaxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMaxMultipleCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzFilterOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzShowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAutoClearSearchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzServerSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOnSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzScrollToBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], originElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], { static: true }]
        }], nzSelectTopControlComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectTopControlComponent, { static: true }]
        }], listOfNzOptionComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzOptionComponent, { descendants: true }]
        }], listOfNzOptionGroupComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzOptionGroupComponent, { descendants: true }]
        }], nzOptionGroupComponentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzOptionGroupComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], nzSelectTopControlComponentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectTopControlComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option-item-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionItemGroupComponent {
    constructor() {
        this.nzLabel = null;
    }
}
NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) { return new (t || NzOptionItemGroupComponent)(); };
NzOptionItemGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionItemGroupComponent, selectors: [["nz-option-item-group"]], hostVars: 4, hostBindings: function NzOptionItemGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item", true)("ant-select-item-group", true);
    } }, inputs: { nzLabel: "nzLabel" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function NzOptionItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzOptionItemGroupComponent.propDecorators = {
    nzLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-item-group',
                template: ` <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    '[class.ant-select-item]': 'true',
                    '[class.ant-select-item-group]': 'true'
                }
            }]
    }], function () { return []; }, { nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionItemComponent {
    constructor() {
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
    onHostMouseEnter() {
        if (!this.disabled) {
            this.itemHover.next(this.value);
        }
    }
    /**
     * @return {?}
     */
    onHostClick() {
        if (!this.disabled) {
            this.itemClick.next(this.value);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { value, activatedValue, listOfSelectedValue } = changes;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some((/**
             * @param {?} v
             * @return {?}
             */
            v => this.compareWith(v, this.value)));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    }
}
NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) { return new (t || NzOptionItemComponent)(); };
NzOptionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionItemComponent, selectors: [["nz-option-item"]], hostVars: 12, hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzOptionItemComponent_mouseenter_HostBindingHandler() { return ctx.onHostMouseEnter(); })("click", function NzOptionItemComponent_click_HostBindingHandler() { return ctx.onHostClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item", true)("ant-select-item-option", true)("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
    } }, inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[1, "ant-select-item-option-content"], [4, "ngIf"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionItemComponent_div_3_Template, 2, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState && ctx.selected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
NzOptionItemComponent.propDecorators = {
    grouped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activatedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfSelectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-item',
                template: `
    <div class="ant-select-item-option-content">
      <ng-container *ngIf="!customContent">{{ label }}</ng-container>
      <ng-container *ngIf="customContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-container>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <i nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></i>
    </div>
  `,
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
    }], function () { return []; }, { grouped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activatedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfSelectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-arrow.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectArrowComponent {
    constructor() {
        this.loading = false;
        this.search = false;
        this.suffixIcon = null;
    }
}
NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) { return new (t || NzSelectArrowComponent)(); };
NzSelectArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectArrowComponent, selectors: [["nz-select-arrow"]], hostVars: 4, hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-arrow", true)("ant-select-arrow-loading", ctx.loading);
    } }, inputs: { loading: "loading", search: "search", suffixIcon: "suffixIcon" }, decls: 3, vars: 2, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzSelectArrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectArrowComponent.propDecorators = {
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    suffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectArrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-arrow',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <i nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></i>
    <ng-template #defaultArrow>
      <ng-container *ngIf="!suffixIcon; else suffixTemplate">
        <i nz-icon nzType="down" *ngIf="!search"></i>
        <i nz-icon nzType="search" *ngIf="search"></i>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </ng-template>
    </ng-template>
  `,
                host: {
                    '[class.ant-select-arrow]': 'true',
                    '[class.ant-select-arrow-loading]': 'loading'
                }
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], suffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-clear.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectClearComponent {
    constructor() {
        this.clearIcon = null;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.clear.emit(e);
    }
}
NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) { return new (t || NzSelectClearComponent)(); };
NzSelectClearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectClearComponent, selectors: [["nz-select-clear"]], hostVars: 2, hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectClearComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-clear", true);
    } }, inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, decls: 1, vars: 2, consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]], template: function NzSelectClearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectClearComponent_i_0_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectClearComponent.propDecorators = {
    clearIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectClearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-clear',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ` <i nz-icon nzType="close-circle" nzTheme="fill" *ngIf="!clearIcon; else clearIcon" class="ant-select-close-icon"></i> `,
                host: {
                    '(click)': 'onClick($event)',
                    '[class.ant-select-clear]': 'true'
                }
            }]
    }], function () { return []; }, { clearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
}
NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) { return new (t || NzSelectItemComponent)(); };
NzSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectItemComponent, selectors: [["nz-select-item"]], hostVars: 5, hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-item", true)("ant-select-selection-item-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, decls: 2, vars: 5, consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function NzSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.contentTemplateOutletContext));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletable && !ctx.disabled);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectItemComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    deletable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentTemplateOutletContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentTemplateOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-item',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <i nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></i>
    </span>
  `,
                host: {
                    '[attr.title]': 'label',
                    '[class.ant-select-selection-item]': 'true',
                    '[class.ant-select-selection-item-disabled]': 'disabled'
                }
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deletable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentTemplateOutletContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentTemplateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-placeholder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectPlaceholderComponent {
    constructor() {
        this.placeholder = null;
    }
}
NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) { return new (t || NzSelectPlaceholderComponent)(); };
NzSelectPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectPlaceholderComponent, selectors: [["nz-select-placeholder"]], hostVars: 2, hostBindings: function NzSelectPlaceholderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-placeholder", true);
    } }, inputs: { placeholder: "placeholder" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function NzSelectPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.placeholder);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectPlaceholderComponent.propDecorators = {
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-placeholder',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
                host: {
                    '[class.ant-select-selection-placeholder]': 'true'
                }
            }]
    }], function () { return []; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectModule {
}
NzSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzSelectModule });
NzSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"],
            ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSelectModule, { declarations: function () { return [NzOptionComponent,
        NzSelectComponent,
        NzOptionContainerComponent,
        NzOptionGroupComponent,
        NzOptionItemComponent,
        NzSelectTopControlComponent,
        NzSelectSearchComponent,
        NzSelectItemComponent,
        NzSelectClearComponent,
        NzSelectArrowComponent,
        NzSelectPlaceholderComponent,
        NzOptionItemGroupComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"],
        ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]]; }, exports: function () { return [NzOptionComponent,
        NzSelectComponent,
        NzOptionGroupComponent,
        NzSelectArrowComponent,
        NzSelectClearComponent,
        NzSelectItemComponent,
        NzSelectPlaceholderComponent,
        NzSelectSearchComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"],
                    ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]
                ],
                declarations: [
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzOptionItemComponent,
                    NzSelectTopControlComponent,
                    NzSelectSearchComponent,
                    NzSelectItemComponent,
                    NzSelectClearComponent,
                    NzSelectArrowComponent,
                    NzSelectPlaceholderComponent,
                    NzOptionItemGroupComponent
                ],
                exports: [
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionGroupComponent,
                    NzSelectArrowComponent,
                    NzSelectClearComponent,
                    NzSelectItemComponent,
                    NzSelectPlaceholderComponent,
                    NzSelectSearchComponent
                ]
            }]
    }], null, null); })();

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
function NzSelectItemInterface() { }
if (false) {}
/**
 * @record
 */
function NzSelectOptionInterface() { }
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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js ***!
  \*********************************************************************************/
/*! exports provided: NzCellAlignDirective, NzCellBreakWordDirective, NzCellEllipsisDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzRowExpandButtonDirective, NzRowIndentDirective, NzTableCellDirective, NzTableComponent, NzTableContentComponent, NzTableDataService, NzTableFilterComponent, NzTableFixedRowComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTableModule, NzTableSelectionComponent, NzTableSortersComponent, NzTableStyleService, NzTableTitleFooterComponent, NzTableVirtualScrollDirective, NzTbodyComponent, NzTdAddOnComponent, NzThAddOnComponent, NzThMeasureDirective, NzThSelectionComponent, NzTheadComponent, NzTrDirective, NzTrExpandDirective, NzTrMeasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellAlignDirective", function() { return NzCellAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellBreakWordDirective", function() { return NzCellBreakWordDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellEllipsisDirective", function() { return NzCellEllipsisDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCellFixedDirective", function() { return NzCellFixedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFilterTriggerComponent", function() { return NzFilterTriggerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRowExpandButtonDirective", function() { return NzRowExpandButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRowIndentDirective", function() { return NzRowIndentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableCellDirective", function() { return NzTableCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableComponent", function() { return NzTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableContentComponent", function() { return NzTableContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableDataService", function() { return NzTableDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableFilterComponent", function() { return NzTableFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableFixedRowComponent", function() { return NzTableFixedRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableInnerDefaultComponent", function() { return NzTableInnerDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableInnerScrollComponent", function() { return NzTableInnerScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableModule", function() { return NzTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableSelectionComponent", function() { return NzTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableSortersComponent", function() { return NzTableSortersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableStyleService", function() { return NzTableStyleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableTitleFooterComponent", function() { return NzTableTitleFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTableVirtualScrollDirective", function() { return NzTableVirtualScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTbodyComponent", function() { return NzTbodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTdAddOnComponent", function() { return NzTdAddOnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzThAddOnComponent", function() { return NzThAddOnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzThMeasureDirective", function() { return NzThMeasureDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzThSelectionComponent", function() { return NzThSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTheadComponent", function() { return NzTheadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTrDirective", function() { return NzTrDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTrExpandDirective", function() { return NzTrExpandDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTrMeasureComponent", function() { return NzTrMeasureComponent; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/empty */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");

























/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/filter-trigger.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






















const _c0 = ["*"];
function NzTableFilterComponent_ng_template_1_Template(rf, ctx) { }
function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.check(f_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", f_r4.checked);
} }
function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.check(f_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", f_r4.checked);
} }
function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const f_r4 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.check(f_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSelected", f_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.filterMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.filterMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](f_r4.text);
} }
function NzTableFilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-filter-trigger", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
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
} }
function NzTableSelectionComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onCheckedChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-selection-select-all-custom", ctx_r0.showRowSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.checked)("nzDisabled", ctx_r0.disabled)("nzIndeterminate", ctx_r0.indeterminate);
} }
function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() { const selection_r6 = ctx.$implicit; return selection_r6.onSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selection_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selection_r6.text, " ");
} }
function NzTableSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSelections);
} }
function NzTableSortersComponent_ng_template_1_Template(rf, ctx) { }
function NzTableSortersComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r1.sortOrder == "ascend");
} }
function NzTableSortersComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r2.sortOrder == "descend");
} }
const _c1 = ["nzChecked", ""];
function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-row-indent", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("expandChange", function NzTdAddOnComponent_ng_container_0_Template_button_expandChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onExpandChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("indentSize", ctx_r0.nzIndentSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
} }
function NzTdAddOnComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onCheckedChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
} }
const _c2 = ["nzSortKey", ""];
function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table-filter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onFilterValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentTemplate", _r1)("extraTemplate", _r3)("customFilter", ctx_r0.nzCustomFilter)("filterMultiple", ctx_r0.nzFilterMultiple)("listOfFilter", ctx_r0.nzFilters);
} }
function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) { }
function NzThAddOnComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzShowSort ? _r5 : _r7);
} }
function NzThAddOnComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
} }
function NzThAddOnComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-sorters", 7);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sortOrder", ctx_r6.sortOrder)("sortDirections", ctx_r6.sortDirections)("contentTemplate", _r7);
} }
function NzThAddOnComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 2);
} }
const _c3 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
const _c4 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
const _c5 = ["nzSelections", ""];
const _c6 = ["nz-table-content", ""];
function NzTableContentComponent_col_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "col");
} if (rf & 2) {
    const width_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", width_r3)("min-width", width_r3);
} }
function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) { }
function NzTableContentComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.theadTemplate);
} }
function NzTableContentComponent_ng_template_2_Template(rf, ctx) { }
const _c7 = ["tdElement"];
const _c8 = ["nz-table-fixed-row", ""];
function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzTableFixedRowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r1.hostWidth$), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
const _c9 = ["tableHeaderElement"];
const _c10 = ["tableBodyElement"];
function NzTableInnerScrollComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r0.headerStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);
} }
function NzTableInnerScrollComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r1.bodyStyleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollX", ctx_r1.scrollX)("listOfColWidth", ctx_r1.listOfColWidth)("theadTemplate", ctx_r1.scrollY ? null : ctx_r1.theadTemplate)("contentTemplate", ctx_r1.contentTemplate);
} }
function NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_ng_template_1_Template(rf, ctx) { }
const _c11 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.virtualTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c11, item_r7, i_r8));
} }
function NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_ng_container_4_Template, 2, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx_r2.data.length ? ctx_r2.scrollY : ctx_r2.noDateVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemSize", ctx_r2.virtualItemSize)("maxBufferPx", ctx_r2.virtualMaxBufferPx)("minBufferPx", ctx_r2.virtualMinBufferPx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollX", ctx_r2.scrollX)("listOfColWidth", ctx_r2.listOfColWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkVirtualForOf", ctx_r2.data)("cdkVirtualForTrackBy", ctx_r2.virtualForTrackBy);
} }
function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-title-footer", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r2.nzTitle);
} }
function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-inner-scroll", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.data)("scrollX", ctx_r3.scrollX)("scrollY", ctx_r3.scrollY)("contentTemplate", _r10)("listOfColWidth", ctx_r3.listOfAutoColWidth)("theadTemplate", ctx_r3.theadTemplate)("verticalScrollBarWidth", ctx_r3.verticalScrollBarWidth)("virtualTemplate", ctx_r3.nzVirtualScrollDirective ? ctx_r3.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r3.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r3.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r3.nzVirtualMinBufferPx)("tableMainElement", _r1)("virtualForTrackBy", ctx_r3.nzVirtualForTrackBy);
} }
function NzTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-inner-default", 13);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableLayout", ctx_r5.nzTableLayout)("listOfColWidth", ctx_r5.listOfManualColWidth)("theadTemplate", ctx_r5.theadTemplate)("contentTemplate", _r10);
} }
function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-table-title-footer", 14);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("footer", ctx_r6.nzFooter);
} }
function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) { }
function NzTableComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.onPageSizeChange($event); })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.onPageIndexChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzShowSizeChanger", ctx_r14.nzShowSizeChanger)("nzPageSizeOptions", ctx_r14.nzPageSizeOptions)("nzItemRender", ctx_r14.nzItemRender)("nzShowQuickJumper", ctx_r14.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r14.nzHideOnSinglePage)("nzShowTotal", ctx_r14.nzShowTotal)("nzSize", ctx_r14.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r14.nzPageSize)("nzTotal", ctx_r14.nzTotal)("nzSimple", ctx_r14.nzSimple)("nzPageIndex", ctx_r14.nzPageIndex);
} }
function NzTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 11, "nz-pagination", 15);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.nzShowPagination && ctx_r9.data.length);
} }
function NzTableComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.onListOfAutoWidthChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listOfMeasureColumn_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listOfMeasureColumn", listOfMeasureColumn_r2);
} }
function NzTbodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const listOfMeasureColumn_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isInsideTable && listOfMeasureColumn_r2.length);
} }
function NzTbodyComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-embed-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("specificContent", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.noResult$));
} }
const _c12 = ["contentTemplate"];
function NzTheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTheadComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.footer);
} }
const _c13 = ["nz-table-measure-row", ""];
function NzTrMeasureComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "td", 1, 2);
} }
class NzFilterTriggerComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzVisible = false;
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    onVisibleChange(visible) {
        this.nzVisible = visible;
        this.nzVisibleChange.next(visible);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFilterClick($event) {
        $event.stopPropagation();
    }
    /**
     * @return {?}
     */
    hide() {
        this.nzVisible = false;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    show() {
        this.nzVisible = true;
        this.cdr.markForCheck();
    }
}
NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) { return new (t || NzFilterTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
NzFilterTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzFilterTriggerComponent, selectors: [["nz-filter-trigger"]], hostVars: 4, hostBindings: function NzFilterTriggerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-filter-trigger-container", true)("ant-table-filter-trigger-container-open", ctx.nzVisible);
    } }, inputs: { nzActive: "nzActive", nzVisible: "nzVisible", nzDropdownMenu: "nzDropdownMenu" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzFilterTrigger"], ngContentSelectors: _c0, decls: 2, vars: 7, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzClickHide", "nzDropdownMenu", "nzVisible", "nzVisibleChange", "click"]], template: function NzFilterTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) { return ctx.onVisibleChange($event); })("click", function NzFilterTriggerComponent_Template_span_click_0_listener($event) { return ctx.onFilterClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzFilterTriggerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
NzFilterTriggerComponent.propDecorators = {
    nzActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDropdownMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
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
function NzThItemInterface() { }
if (false) {}
class NzTableFilterComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
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
    trackByValue(_, item) {
        return item.value;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    check(filter) {
        this.isChanged = true;
        if (this.filterMultiple) {
            this.listOfParsedFilter = this.listOfParsedFilter.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item === filter) {
                    return Object.assign(Object.assign({}, item), { checked: !filter.checked });
                }
                else {
                    return item;
                }
            }));
            filter.checked = !filter.checked;
        }
        else {
            this.listOfParsedFilter = this.listOfParsedFilter.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return Object.assign(Object.assign({}, item), { checked: item === filter });
            }));
        }
        this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
    /**
     * @return {?}
     */
    confirm() {
        this.isVisible = false;
        this.emitFilterData();
    }
    /**
     * @return {?}
     */
    reset() {
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
    onVisibleChange(value) {
        this.isVisible = value;
        if (!value) {
            this.emitFilterData();
        }
    }
    /**
     * @return {?}
     */
    emitFilterData() {
        if (this.isChanged) {
            /** @type {?} */
            const listOfChecked = this.listOfParsedFilter.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.checked)).map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.value));
            if (this.filterMultiple) {
                this.filterChange.emit(listOfChecked);
            }
            else {
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
    parseListOfFilter(listOfFilter, reset) {
        return listOfFilter.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const checked = reset ? false : !!item.byDefault;
            return { text: item.text, value: item.value, checked };
        }));
    }
    /**
     * @param {?} listOfParsedFilter
     * @return {?}
     */
    getCheckedStatus(listOfParsedFilter) {
        return listOfParsedFilter.some((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfFilter } = changes;
        if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
            this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) { return new (t || NzTableFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"])); };
NzTableFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableFilterComponent, selectors: [["nz-table-filter"]], hostVars: 2, hostBindings: function NzTableFilterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-filter-column", true);
    } }, inputs: { contentTemplate: "contentTemplate", customFilter: "customFilter", extraTemplate: "extraTemplate", filterMultiple: "filterMultiple", listOfFilter: "listOfFilter" }, outputs: { filterChange: "filterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[1, "ant-table-filter-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], ["filterMenu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"]], template: function NzTableFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzFilterTriggerComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__["NzWaveDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxComponent"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTableFilterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] }
];
NzTableFilterComponent.propDecorators = {
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    customFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    extraTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    filterMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listOfFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/row-expand-button.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRowExpandButtonDirective {
    constructor() {
        this.expand = false;
        this.spaceMode = false;
        this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    onHostClick() {
        if (!this.spaceMode) {
            this.expand = !this.expand;
            this.expandChange.next(this.expand);
        }
    }
}
NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) { return new (t || NzRowExpandButtonDirective)(); };
NzRowExpandButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzRowExpandButtonDirective, selectors: [["button", "nz-row-expand-button", ""]], hostVars: 9, hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzRowExpandButtonDirective_click_HostBindingHandler() { return ctx.onHostClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-row-expand-icon", true)("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
    } }, inputs: { expand: "expand", spaceMode: "spaceMode" }, outputs: { expandChange: "expandChange" } });
NzRowExpandButtonDirective.propDecorators = {
    expand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    spaceMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    expandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/row-indent.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzRowIndentDirective {
    constructor() {
        this.indentSize = 0;
    }
}
NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) { return new (t || NzRowIndentDirective)(); };
NzRowIndentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzRowIndentDirective, selectors: [["nz-row-indent"]], hostVars: 4, hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("padding-left", ctx.indentSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-row-indent", true);
    } }, inputs: { indentSize: "indentSize" } });
NzRowIndentDirective.propDecorators = {
    indentSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableSelectionComponent {
    constructor() {
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
    onCheckedChange(checked) {
        this.checked = checked;
        this.checkedChange.emit(checked);
    }
}
NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) { return new (t || NzTableSelectionComponent)(); };
NzTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableSelectionComponent, selectors: [["nz-table-selection"]], hostVars: 2, hostBindings: function NzTableSelectionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-selection", true);
    } }, inputs: { listOfSelections: "listOfSelections", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", showCheckbox: "showCheckbox", showRowSelection: "showRowSelection" }, outputs: { checkedChange: "checkedChange" }, decls: 2, vars: 2, consts: [["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]], template: function NzTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableSelectionComponent_label_0_Template, 1, 5, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCheckbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showRowSelection);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"]], encapsulation: 2, changeDetection: 0 });
NzTableSelectionComponent.propDecorators = {
    listOfSelections: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showRowSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    checkedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/sorters.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableSortersComponent {
    constructor() {
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
    ngOnChanges(changes) {
        const { sortDirections } = changes;
        if (sortDirections) {
            this.isUp = this.sortDirections.indexOf('ascend') !== -1;
            this.isDown = this.sortDirections.indexOf('descend') !== -1;
        }
    }
}
NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) { return new (t || NzTableSortersComponent)(); };
NzTableSortersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableSortersComponent, selectors: [["nz-table-sorters"]], hostVars: 2, hostBindings: function NzTableSortersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-column-sorters", true);
    } }, inputs: { sortDirections: "sortDirections", sortOrder: "sortOrder", contentTemplate: "contentTemplate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 5, consts: [[3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]], template: function NzTableSortersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableSortersComponent_i_4_Template, 1, 2, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzTableSortersComponent_i_5_Template, 1, 2, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzTableSortersComponent.propDecorators = {
    sortDirections: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sortOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/cell-fixed.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCellFixedDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    setAutoLeftWidth(autoLeft) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
    }
    /**
     * @param {?} autoRight
     * @return {?}
     */
    setAutoRightWidth(autoRight) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
    }
    /**
     * @param {?} isFirstRight
     * @return {?}
     */
    setIsFirstRight(isFirstRight) {
        this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
    }
    /**
     * @param {?} isLastLeft
     * @return {?}
     */
    setIsLastLeft(isLastLeft) {
        this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
    }
    /**
     * @private
     * @param {?} flag
     * @param {?} className
     * @return {?}
     */
    setFixClass(flag, className) {
        // the setFixClass function may call many times, so remove it first.
        this.renderer.removeClass(this.elementRef.nativeElement, className);
        if (flag) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setIsFirstRight(false);
        this.setIsLastLeft(false);
        this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
        this.isAutoRight = this.nzRight === '' || this.nzRight === true;
        this.isFixedLeft = this.nzLeft !== false;
        this.isFixedRight = this.nzRight !== false;
        this.isFixed = this.isFixedLeft || this.isFixedRight;
        /** @type {?} */
        const validatePx = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (typeof value === 'string' && value !== '') {
                return value;
            }
            else {
                return null;
            }
        });
        this.setAutoLeftWidth(validatePx(this.nzLeft));
        this.setAutoRightWidth(validatePx(this.nzRight));
        this.changes$.next();
    }
}
NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) { return new (t || NzCellFixedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NzCellFixedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzCellFixedDirective, selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]], hostVars: 6, hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("position", ctx.isFixed ? "sticky" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
    } }, inputs: { nzRight: "nzRight", nzLeft: "nzLeft", colspan: "colspan" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzCellFixedDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
NzCellFixedDirective.propDecorators = {
    nzRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table-style.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableStyleService {
    constructor() {
        this.theadTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.hasFixLeft$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.hasFixRight$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.columnCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfThWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.tableWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.manualWidthConfigPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([widthConfig, listOfWidth]) => (widthConfig.length ? widthConfig : listOfWidth))));
        this.listOfAutoWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfListOfThWidthPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(
        /** init with manual width **/
        this.manualWidthConfigPx$, Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([autoWidth, manualWidth]) => {
            /** use autoWidth until column length match **/
            if (autoWidth.length === manualWidth.length) {
                return autoWidth.map((/**
                 * @param {?} width
                 * @param {?} index
                 * @return {?}
                 */
                (width, index) => {
                    if (width === '0px') {
                        return manualWidth[index] || null;
                    }
                    else {
                        return manualWidth[index] || width;
                    }
                }));
            }
            else {
                return manualWidth;
            }
        }))));
        this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} list
         * @return {?}
         */
        list => list.map((/**
         * @param {?} width
         * @return {?}
         */
        width => parseInt(width, 10))))));
        this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
    }
    /**
     * @param {?} template
     * @return {?}
     */
    setTheadTemplate(template) {
        this.theadTemplate$.next(template);
    }
    /**
     * @param {?} hasFixLeft
     * @return {?}
     */
    setHasFixLeft(hasFixLeft) {
        this.hasFixLeft$.next(hasFixLeft);
    }
    /**
     * @param {?} hasFixRight
     * @return {?}
     */
    setHasFixRight(hasFixRight) {
        this.hasFixRight$.next(hasFixRight);
    }
    /**
     * @param {?} widthConfig
     * @return {?}
     */
    setTableWidthConfig(widthConfig) {
        this.tableWidthConfigPx$.next(widthConfig);
    }
    /**
     * @param {?} listOfTh
     * @return {?}
     */
    setListOfTh(listOfTh) {
        /** @type {?} */
        let columnCount = 0;
        listOfTh.forEach((/**
         * @param {?} th
         * @return {?}
         */
        th => {
            columnCount += (th.colspan && +th.colspan) || 1;
        }));
        /** @type {?} */
        const listOfThPx = listOfTh.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzWidth));
        this.columnCount$.next(columnCount);
        this.listOfThWidthConfigPx$.next(listOfThPx);
    }
    /**
     * @param {?} listOfTh
     * @return {?}
     */
    setListOfMeasureColumn(listOfTh) {
        /** @type {?} */
        const listOfKeys = [];
        listOfTh.forEach((/**
         * @param {?} th
         * @return {?}
         */
        th => {
            /** @type {?} */
            const length = (th.colspan && +th.colspan) || 1;
            for (let i = 0; i < length; i++) {
                listOfKeys.push(`measure_key_${i}`);
            }
        }));
        this.listOfMeasureColumn$.next(listOfKeys);
    }
    /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    setListOfAutoWidth(listOfAutoWidth) {
        this.listOfAutoWidthPx$.next(listOfAutoWidth.map((/**
         * @param {?} width
         * @return {?}
         */
        width => `${width}px`)));
    }
    /**
     * @param {?} showEmpty
     * @return {?}
     */
    setShowEmpty(showEmpty) {
        this.showEmpty$.next(showEmpty);
    }
    /**
     * @param {?} noResult
     * @return {?}
     */
    setNoResult(noResult) {
        this.noResult$.next(noResult);
    }
    /**
     * @param {?} scrollX
     * @param {?} scrollY
     * @return {?}
     */
    setScroll(scrollX, scrollY) {
        /** @type {?} */
        const enableAutoMeasure = !!(scrollX || scrollY);
        if (!enableAutoMeasure) {
            this.setListOfAutoWidth([]);
        }
        this.enableAutoMeasure$.next(enableAutoMeasure);
    }
}
NzTableStyleService.ɵfac = function NzTableStyleService_Factory(t) { return new (t || NzTableStyleService)(); };
NzTableStyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzTableStyleService, factory: NzTableStyleService.ɵfac });
/** @nocollapse */
NzTableStyleService.ctorParameters = () => [];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/cell.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableCellDirective {
    /**
     * @param {?} nzTableStyleService
     */
    constructor(nzTableStyleService) {
        this.isInsideTable = false;
        this.isInsideTable = !!nzTableStyleService;
    }
}
NzTableCellDirective.ɵfac = function NzTableCellDirective_Factory(t) { return new (t || NzTableCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8)); };
NzTableCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzTableCellDirective, selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]], hostVars: 2, hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell", ctx.isInsideTable);
    } } });
/** @nocollapse */
NzTableCellDirective.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/td-addon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTdAddOnComponent {
    constructor() {
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
    onCheckedChange(checked) {
        this.nzChecked = checked;
        this.nzCheckedChange.emit(checked);
    }
    /**
     * @param {?} expand
     * @return {?}
     */
    onExpandChange(expand) {
        this.nzExpand = expand;
        this.nzExpandChange.emit(expand);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const isFirstChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value && value.firstChange && value.currentValue !== undefined);
        const { nzExpand, nzChecked, nzShowExpand, nzShowCheckbox } = changes;
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
}
NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) { return new (t || NzTdAddOnComponent)(); };
NzTdAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTdAddOnComponent, selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]], hostVars: 4, hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
    } }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzIndentSize: "nzIndentSize", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzExpand: "nzExpand" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], attrs: _c1, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], ["nz-row-expand-button", "", 3, "expand", "spaceMode", "expandChange"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"]], template: function NzTdAddOnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTdAddOnComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTdAddOnComponent_label_1_Template, 1, 3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowCheckbox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzRowIndentDirective,
        NzRowExpandButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2, changeDetection: 0 });
NzTdAddOnComponent.propDecorators = {
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzIndeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzIndentSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzExpandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTdAddOnComponent.prototype, "nzExpand", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/th-addon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzThAddOnComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
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
    getNextSortDirection(sortDirections, current) {
        /** @type {?} */
        const index = sortDirections.indexOf(current);
        if (index === sortDirections.length - 1) {
            return sortDirections[0];
        }
        else {
            return sortDirections[index + 1];
        }
    }
    /**
     * @return {?}
     */
    emitNextSortValue() {
        if (this.nzShowSort) {
            /** @type {?} */
            const nextOrder = this.getNextSortDirection(this.sortDirections, (/** @type {?} */ (this.sortOrder)));
            this.setSortOrder(nextOrder);
            this.manualClickOrder$.next(this);
        }
    }
    /**
     * @param {?} order
     * @return {?}
     */
    setSortOrder(order) {
        this.sortOrderChange$.next(order);
    }
    /**
     * @return {?}
     */
    clearSortOrder() {
        if (this.sortOrder !== null) {
            this.setSortOrder(null);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFilterValueChange(value) {
        this.nzFilterChange.emit(value);
        this.nzFilterValue = value;
        this.updateCalcOperator();
    }
    /**
     * @return {?}
     */
    updateCalcOperator() {
        this.calcOperatorChange$.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sortOrderChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            if (this.sortOrder !== order) {
                this.sortOrder = order;
                this.nzSortChange.emit(order);
                this.nzSortOrderChange.emit(order);
            }
            this.updateCalcOperator();
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzSortKey, nzSort, nzSortDirections, nzFilters, nzSortOrder, nzSortFn, nzFilterFn, nzSortPriority, nzFilterMultiple, nzShowSort, nzShowFilter } = changes;
        if (nzSortDirections) {
            if (this.nzSortDirections && this.nzSortDirections.length) {
                this.sortDirections = this.nzSortDirections;
            }
        }
        if (nzSort) {
            this.sortOrder = this.nzSort;
            this.setSortOrder(this.nzSort);
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__["warnDeprecation"])(`'nzSort' and 'nzSortChange' is deprecated and will be removed in 10.0.0. Please use 'nzSortOrder' and 'nzSortOrderChange' instead.`);
        }
        if (nzSortKey) {
            this.nzColumnKey = this.nzSortKey;
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__["warnDeprecation"])(`'nzSortKey' is deprecated and will be removed in 10.0.0. Please use 'nzColumnKey' instead.`);
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
        const isFirstChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value && value.firstChange && value.currentValue !== undefined);
        if ((isFirstChange(nzSortKey) || isFirstChange(nzSort) || isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) &&
            !this.isNzShowSortChanged) {
            this.nzShowSort = true;
        }
        if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
            this.nzShowFilter = true;
        }
        if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
            /** @type {?} */
            const listOfValue = this.nzFilters.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.byDefault)).map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.value));
            this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
        }
        if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
            this.updateCalcOperator();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) { return new (t || NzThAddOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
NzThAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzThAddOnComponent, selectors: [["th", "nzSortKey", ""], ["th", "nzColumnKey", ""], ["th", "nzSort", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]], hostVars: 4, hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzThAddOnComponent_click_HostBindingHandler() { return ctx.emitNextSortValue(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
    } }, inputs: { nzFilterMultiple: "nzFilterMultiple", nzSortOrder: "nzSortOrder", nzSortPriority: "nzSortPriority", nzSortDirections: "nzSortDirections", nzFilters: "nzFilters", nzSortFn: "nzSortFn", nzFilterFn: "nzFilterFn", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzCustomFilter: "nzCustomFilter", nzSort: "nzSort", nzColumnKey: "nzColumnKey", nzSortKey: "nzSortKey" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortOrderChange: "nzSortOrderChange", nzFilterChange: "nzFilterChange", nzSortChange: "nzSortChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], attrs: _c2, ngContentSelectors: _c4, decls: 9, vars: 2, consts: [[3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], ["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]], template: function NzThAddOnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzTableFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], NzTableSortersComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzThAddOnComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
NzThAddOnComponent.propDecorators = {
    nzColumnKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFilterMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSortOrder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSortPriority: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSortDirections: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSortFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFilterFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCustomFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSortOrderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzFilterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzThAddOnComponent.prototype, "nzShowSort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/th-measure.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzThMeasureDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    ngOnChanges(changes) {
        const { nzWidth, colspan, rowspan } = changes;
        if (colspan) {
            if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["isNil"])(this.colspan)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', `${this.colspan}`);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
            }
        }
        if (rowspan) {
            if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["isNil"])(this.rowspan)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', `${this.rowspan}`);
            }
            else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
            }
        }
        if (nzWidth || colspan) {
            this.changes$.next();
        }
    }
}
NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) { return new (t || NzThMeasureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NzThMeasureDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzThMeasureDirective, selectors: [["th"]], inputs: { nzWidth: "nzWidth", colspan: "colspan", rowspan: "rowspan" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NzThMeasureDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
NzThMeasureDirective.propDecorators = {
    nzWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cell/th-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzThSelectionComponent {
    constructor() {
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
    onCheckedChange(checked) {
        this.nzChecked = checked;
        this.nzCheckedChange.emit(checked);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const isFirstChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => value && value.firstChange && value.currentValue !== undefined);
        const { nzChecked, nzSelections, nzShowExpand, nzShowCheckbox } = changes;
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
}
NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) { return new (t || NzThSelectionComponent)(); };
NzThSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzThSelectionComponent, selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]], hostVars: 2, hostBindings: function NzThSelectionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-selection-column", true);
    } }, inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzShowCheckbox: "nzShowCheckbox", nzShowRowSelection: "nzShowRowSelection" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortChangeWithKey: "nzSortChangeWithKey" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], attrs: _c5, ngContentSelectors: _c0, decls: 2, vars: 6, consts: [[3, "checked", "disabled", "indeterminate", "listOfSelections", "showCheckbox", "showRowSelection", "checkedChange"]], template: function NzThSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-table-selection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) { return ctx.onCheckedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
    } }, directives: [NzTableSelectionComponent], encapsulation: 2, changeDetection: 0 });
NzThSelectionComponent.propDecorators = {
    nzSelections: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzIndeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowRowSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSortChangeWithKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/styled/align.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCellAlignDirective {
    constructor() {
        this.nzAlign = null;
    }
}
NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) { return new (t || NzCellAlignDirective)(); };
NzCellAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzCellAlignDirective, selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]], hostVars: 2, hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx.nzAlign);
    } }, inputs: { nzAlign: "nzAlign" } });
NzCellAlignDirective.propDecorators = {
    nzAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/styled/ellipsis.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCellEllipsisDirective {
    constructor() {
        this.nzEllipsis = true;
    }
}
NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) { return new (t || NzCellEllipsisDirective)(); };
NzCellEllipsisDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzCellEllipsisDirective, selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]], hostVars: 2, hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-cell-ellipsis", ctx.nzEllipsis);
    } }, inputs: { nzEllipsis: "nzEllipsis" } });
NzCellEllipsisDirective.propDecorators = {
    nzEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/styled/word-break.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCellBreakWordDirective {
    constructor() {
        this.nzBreakWord = true;
    }
}
NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) { return new (t || NzCellBreakWordDirective)(); };
NzCellBreakWordDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzCellBreakWordDirective, selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]], hostVars: 2, hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("word-break", ctx.nzBreakWord ? "break-all" : "");
    } }, inputs: { nzBreakWord: "nzBreakWord" } });
NzCellBreakWordDirective.propDecorators = {
    nzBreakWord: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-content.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableContentComponent {
    constructor() {
        this.tableLayout = 'auto';
        this.theadTemplate = null;
        this.contentTemplate = null;
        this.listOfColWidth = [];
        this.scrollX = null;
    }
}
NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) { return new (t || NzTableContentComponent)(); };
NzTableContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableContentComponent, selectors: [["table", "nz-table-content", ""]], hostVars: 8, hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-fixed", ctx.scrollX);
    } }, inputs: { tableLayout: "tableLayout", theadTemplate: "theadTemplate", contentTemplate: "contentTemplate", listOfColWidth: "listOfColWidth", scrollX: "scrollX" }, attrs: _c6, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]], template: function NzTableContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listOfColWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.theadTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzTableContentComponent.propDecorators = {
    tableLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    theadTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listOfColWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    scrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-fixed-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableFixedRowComponent {
    /**
     * @param {?} nzTableStyleService
     * @param {?} renderer
     */
    constructor(nzTableStyleService, renderer) {
        this.nzTableStyleService = nzTableStyleService;
        this.renderer = renderer;
        this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](null);
        this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](false);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzTableStyleService) {
            const { enableAutoMeasure$, hostWidth$ } = this.nzTableStyleService;
            enableAutoMeasure$.subscribe(this.enableAutoMeasure$);
            hostWidth$.subscribe(this.hostWidth$);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzTableStyleService.columnCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} count
         * @return {?}
         */
        count => {
            this.renderer.setAttribute(this.tdElement.nativeElement, 'colspan', `${count}`);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) { return new (t || NzTableFixedRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"])); };
NzTableFixedRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableFixedRowComponent, selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]], viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tdElement = _t.first);
    } }, attrs: _c8, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [[1, "nz-disable-td", "ant-table-cell"], ["tdElement", ""], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], ["contentTemplate", ""], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]], template: function NzTableFixedRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.enableAutoMeasure$))("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTableFixedRowComponent.ctorParameters = () => [
    { type: NzTableStyleService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
NzTableFixedRowComponent.propDecorators = {
    tdElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['tdElement',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-inner-default.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableInnerDefaultComponent {
    constructor() {
        this.tableLayout = 'auto';
        this.listOfColWidth = [];
        this.theadTemplate = null;
        this.contentTemplate = null;
    }
}
NzTableInnerDefaultComponent.ɵfac = function NzTableInnerDefaultComponent_Factory(t) { return new (t || NzTableInnerDefaultComponent)(); };
NzTableInnerDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableInnerDefaultComponent, selectors: [["nz-table-inner-default"]], hostVars: 2, hostBindings: function NzTableInnerDefaultComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-container", true);
    } }, inputs: { tableLayout: "tableLayout", listOfColWidth: "listOfColWidth", theadTemplate: "theadTemplate", contentTemplate: "contentTemplate" }, decls: 2, vars: 4, consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate"]], template: function NzTableInnerDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate);
    } }, directives: [NzTableContentComponent], encapsulation: 2, changeDetection: 0 });
NzTableInnerDefaultComponent.propDecorators = {
    tableLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listOfColWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    theadTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-inner-scroll.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableInnerScrollComponent {
    /**
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} resizeService
     */
    constructor(renderer, ngZone, platform, resizeService) {
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
        this.virtualForTrackBy = (/**
         * @param {?} index
         * @return {?}
         */
        index => index);
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
    setScrollPositionClassName(clear = false) {
        const { scrollWidth, scrollLeft, clientWidth } = this.tableBodyElement.nativeElement;
        /** @type {?} */
        const leftClassName = 'ant-table-ping-left';
        /** @type {?} */
        const rightClassName = 'ant-table-ping-right';
        if ((scrollWidth === clientWidth && scrollWidth !== 0) || clear) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.removeClass(this.tableMainElement, rightClassName);
        }
        else if (scrollLeft === 0) {
            this.renderer.removeClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
        }
        else if (scrollWidth === scrollLeft + clientWidth) {
            this.renderer.removeClass(this.tableMainElement, rightClassName);
            this.renderer.addClass(this.tableMainElement, leftClassName);
        }
        else {
            this.renderer.addClass(this.tableMainElement, leftClassName);
            this.renderer.addClass(this.tableMainElement, rightClassName);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { scrollX, scrollY, data } = changes;
        if (scrollX || scrollY) {
            /** @type {?} */
            const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
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
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const scrollEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["fromEvent"])(this.tableBodyElement.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
                /** @type {?} */
                const scrollX$ = scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])((/**
                 * @return {?}
                 */
                () => !!this.scrollX)));
                /** @type {?} */
                const scrollY$ = scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])((/**
                 * @return {?}
                 */
                () => !!this.scrollY)));
                /** @type {?} */
                const resize$ = this.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
                /** @type {?} */
                const data$ = this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
                /** @type {?} */
                const setClassName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(scrollX$, resize$, data$, this.scroll$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["delay"])(0));
                setClassName$.subscribe((/**
                 * @return {?}
                 */
                () => this.setScrollPositionClassName()));
                scrollY$.subscribe((/**
                 * @return {?}
                 */
                () => (this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft)));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.setScrollPositionClassName(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) { return new (t || NzTableInnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"])); };
NzTableInnerScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableInnerScrollComponent, selectors: [["nz-table-inner-scroll"]], viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c9, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c10, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], true, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tableHeaderElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tableBodyElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, hostVars: 2, hostBindings: function NzTableInnerScrollComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-container", true);
    } }, inputs: { data: "data", scrollX: "scrollX", scrollY: "scrollY", contentTemplate: "contentTemplate", widthConfig: "widthConfig", listOfColWidth: "listOfColWidth", theadTemplate: "theadTemplate", virtualTemplate: "virtualTemplate", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", verticalScrollBarWidth: "verticalScrollBarWidth", tableMainElement: "tableMainElement" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[1, "ant-table-content"], ["class", "ant-table-header nz-table-hide-scrollbar", 3, "ngStyle", 4, "ngIf"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], [1, "ant-table-body", 3, "ngStyle"], ["tableBodyElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzTableInnerScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableInnerScrollComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTableInnerScrollComponent_div_2_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTableInnerScrollComponent_cdk_virtual_scroll_viewport_3_Template, 5, 9, "cdk-virtual-scroll-viewport", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrollY);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.virtualTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.virtualTemplate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], NzTableContentComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkFixedSizeVirtualScroll"], NzTbodyComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTableInnerScrollComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"] }
];
NzTableInnerScrollComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    scrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    scrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    widthConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listOfColWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    theadTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    virtualTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    virtualItemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    virtualMaxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    virtualMinBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tableMainElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    virtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tableHeaderElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['tableHeaderElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }],
    tableBodyElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['tableBodyElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }],
    cdkVirtualScrollViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], { read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"] },] }],
    verticalScrollBarWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table-virtual-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableVirtualScrollDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzTableVirtualScrollDirective.ɵfac = function NzTableVirtualScrollDirective_Factory(t) { return new (t || NzTableVirtualScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
NzTableVirtualScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzTableVirtualScrollDirective, selectors: [["", "nz-virtual-scroll", ""]], exportAs: ["nzVirtualScroll"] });
/** @nocollapse */
NzTableVirtualScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table-data.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableDataService {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.pageIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](1);
        this.frontPagination$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](true);
        this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](10);
        this.listOfData$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.pageIndexDistinct$ = this.pageIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
        this.pageSizeDistinct$ = this.pageSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
        this.listOfCalcOperator$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.queryParams$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([
            this.pageIndexDistinct$,
            this.pageSizeDistinct$,
            this.listOfCalcOperator$
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([pageIndex, pageSize, listOfCalc]) => {
            return {
                pageIndex,
                pageSize,
                sort: listOfCalc
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.sortFn))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    return {
                        key: (/** @type {?} */ (item.key)),
                        value: item.sortOrder
                    };
                })),
                filter: listOfCalc
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.filterFn))
                    .map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    return {
                        key: (/** @type {?} */ (item.key)),
                        value: item.filterValue
                    };
                }))
            };
        })));
        this.listOfDataAfterCalc$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.listOfData$, this.listOfCalcOperator$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([listOfData, listOfCalcOperator]) => {
            /** @type {?} */
            let listOfDataAfterCalc = [...listOfData];
            /** @type {?} */
            const listOfFilterOperator = listOfCalcOperator.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                const { filterValue, filterFn } = item;
                /** @type {?} */
                const isReset = filterValue === null || filterValue === undefined || (Array.isArray(filterValue) && (/** @type {?} */ (filterValue)).length === 0);
                return !isReset && typeof filterFn === 'function';
            }));
            for (const item of listOfFilterOperator) {
                const { filterFn, filterValue } = item;
                listOfDataAfterCalc = listOfDataAfterCalc.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => ((/** @type {?} */ (filterFn)))(filterValue, data)));
            }
            /** @type {?} */
            const listOfSortOperator = listOfCalcOperator
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.sortOrder !== null && typeof item.sortFn === 'function'))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => +b.sortPriority - +a.sortPriority));
            if (listOfCalcOperator.length) {
                listOfDataAfterCalc.sort((/**
                 * @param {?} record1
                 * @param {?} record2
                 * @return {?}
                 */
                (record1, record2) => {
                    for (const item of listOfSortOperator) {
                        const { sortFn, sortOrder } = item;
                        if (sortFn && sortOrder) {
                            /** @type {?} */
                            const compareResult = ((/** @type {?} */ (sortFn)))(record1, record2, sortOrder);
                            if (compareResult !== 0) {
                                return sortOrder === 'ascend' ? compareResult : -compareResult;
                            }
                        }
                    }
                    return 0;
                }));
            }
            return listOfDataAfterCalc;
        })));
        this.listOfFrontEndCurrentPageData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            const [pageIndex, pageSize, listOfData] = value;
            /** @type {?} */
            const maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
            return pageIndex <= maxPageIndex;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([pageIndex, pageSize, listOfData]) => {
            return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
        })));
        this.listOfCurrentPageData$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
         * @param {?} pagination
         * @return {?}
         */
        pagination => (pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfData$))));
        this.total$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
         * @param {?} pagination
         * @return {?}
         */
        pagination => (pagination ? this.listOfDataAfterCalc$ : this.listOfData$))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} list
         * @return {?}
         */
        list => list.length)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["distinctUntilChanged"])());
    }
    /**
     * @param {?} size
     * @return {?}
     */
    updatePageSize(size) {
        this.pageSize$.next(size);
    }
    /**
     * @param {?} pagination
     * @return {?}
     */
    updateFrontPagination(pagination) {
        this.frontPagination$.next(pagination);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    updatePageIndex(index) {
        this.pageIndex$.next(index);
    }
    /**
     * @param {?} list
     * @return {?}
     */
    updateListOfData(list) {
        this.listOfData$.next(list);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableDataService.ɵfac = function NzTableDataService_Factory(t) { return new (t || NzTableDataService)(); };
NzTableDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzTableDataService, factory: NzTableDataService.ɵfac });
/** @nocollapse */
NzTableDataService.ctorParameters = () => [];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'table';
/**
 * @template T
 */
class NzTableComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzResizeObserver
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} nzTableStyleService
     * @param {?} nzTableDataService
     */
    constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService) {
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
        this.nzVirtualForTrackBy = (/**
         * @param {?} index
         * @return {?}
         */
        index => index);
        this.nzLoadingDelay = 0;
        this.nzPageIndex = 1;
        this.nzPageSize = 10;
        this.nzTotal = 0;
        this.nzWidthConfig = [];
        this.nzData = [];
        this.nzPaginationPosition = 'bottom';
        this.nzScroll = { x: null, y: null };
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
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} size
     * @return {?}
     */
    onPageSizeChange(size) {
        this.nzTableDataService.updatePageSize(size);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onPageIndexChange(index) {
        this.nzTableDataService.updatePageIndex(index);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { pageIndexDistinct$, pageSizeDistinct$, listOfCurrentPageData$, total$, queryParams$ } = this.nzTableDataService;
        const { theadTemplate$, hasFixLeft$, hasFixRight$ } = this.nzTableStyleService;
        queryParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(this.nzQueryParams);
        pageIndexDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} pageIndex
         * @return {?}
         */
        pageIndex => {
            if (pageIndex !== this.nzPageIndex) {
                this.nzPageIndex = pageIndex;
                this.nzPageIndexChange.next(pageIndex);
            }
        }));
        pageSizeDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        pageSize => {
            if (pageSize !== this.nzPageSize) {
                this.nzPageSize = pageSize;
                this.nzPageSizeChange.next(pageSize);
            }
        }));
        total$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["filter"])((/**
         * @return {?}
         */
        () => this.nzFrontPagination)))
            .subscribe((/**
         * @param {?} total
         * @return {?}
         */
        total => {
            if (total !== this.nzTotal) {
                this.nzTotal = total;
                this.cdr.markForCheck();
            }
        }));
        listOfCurrentPageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data;
            this.nzCurrentPageDataChange.next(data);
            this.cdr.markForCheck();
        }));
        theadTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} theadTemplate
         * @return {?}
         */
        theadTemplate => {
            this.theadTemplate = theadTemplate;
            this.cdr.markForCheck();
        }));
        hasFixLeft$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} hasFixLeft
         * @return {?}
         */
        hasFixLeft => {
            this.hasFixLeft = hasFixLeft;
            this.cdr.markForCheck();
        }));
        hasFixRight$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} hasFixRight
         * @return {?}
         */
        hasFixRight => {
            this.hasFixRight = hasFixRight;
            this.cdr.markForCheck();
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([total$, this.loading$, this.templateMode$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([total, loading, templateMode]) => total === 0 && !loading && !templateMode)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} empty
         * @return {?}
         */
        empty => {
            this.nzTableStyleService.setShowEmpty(empty);
        }));
        this.verticalScrollBarWidth = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["measureScrollbar"])('vertical');
        this.nzTableStyleService.listOfListOfThWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} listOfWidth
         * @return {?}
         */
        listOfWidth => {
            this.listOfAutoColWidth = listOfWidth;
            this.cdr.markForCheck();
        }));
        this.nzTableStyleService.manualWidthConfigPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} listOfWidth
         * @return {?}
         */
        listOfWidth => {
            this.listOfManualColWidth = listOfWidth;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzScroll, nzPageIndex, nzPageSize, nzFrontPagination, nzData, nzWidthConfig, nzNoResult, nzLoading, nzTemplateMode } = changes;
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
            this.scrollX = (this.nzScroll && this.nzScroll.x) || null;
            this.scrollY = (this.nzScroll && this.nzScroll.y) || null;
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
    ngAfterViewInit() {
        this.nzResizeObserver
            .observe(this.elementRef)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([entry]) => {
            const { width } = entry.target.getBoundingClientRect();
            /** @type {?} */
            const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
            return Math.floor(width - scrollBarWidth);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
            .subscribe(this.nzTableStyleService.hostWidth$);
        if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
            this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableDataService)); };
NzTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzTableVirtualScrollDirective, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzVirtualScrollDirective = _t.first);
    } }, viewQuery: function NzTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzTableInnerScrollComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzTableInnerScrollComponent = _t.first);
    } }, hostVars: 2, hostBindings: function NzTableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-wrapper", true);
    } }, inputs: { nzTableLayout: "nzTableLayout", nzShowTotal: "nzShowTotal", nzItemRender: "nzItemRender", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzPageSizeOptions: "nzPageSizeOptions", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingDelay: "nzLoadingDelay", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzTotal: "nzTotal", nzWidthConfig: "nzWidthConfig", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzLoadingIndicator: "nzLoadingIndicator", nzBordered: "nzBordered", nzSize: "nzSize", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzQueryParams: "nzQueryParams", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NzTableStyleService, NzTableDataService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 14, vars: 23, consts: [[3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "footer", 4, "ngIf"], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"]], template: function NzTableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
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
    } }, directives: function () { return [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], NzTableTitleFooterComponent,
        NzTableInnerScrollComponent,
        NzTableInnerDefaultComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationComponent"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: NzTableStyleService },
    { type: NzTableDataService }
];
NzTableComponent.propDecorators = {
    nzTableLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzItemRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzNoResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualItemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualMaxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualMinBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLoadingDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzWidthConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPaginationPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFrontPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTemplateMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLoadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzBordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowSizeChanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzHideOnSinglePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowQuickJumper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSimple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzPageIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzQueryParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzCurrentPageDataChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzVirtualScrollDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [NzTableVirtualScrollDirective, { static: false },] }],
    nzTableInnerScrollComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [NzTableInnerScrollComponent,] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTableComponent.prototype, "nzFrontPagination", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTableComponent.prototype, "nzTemplateMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTableComponent.prototype, "nzShowPagination", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTableComponent.prototype, "nzLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)
], NzTableComponent.prototype, "nzBordered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", String)
], NzTableComponent.prototype, "nzSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)
], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)
], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)
], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Boolean)
], NzTableComponent.prototype, "nzSimple", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tbody.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTbodyComponent {
    /**
     * @param {?} nzTableStyleService
     */
    constructor(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.isInsideTable = false;
        this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](false);
        this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"](undefined);
        this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["BehaviorSubject"]([]);
        this.isInsideTable = !!this.nzTableStyleService;
        if (this.nzTableStyleService) {
            const { showEmpty$, noResult$, listOfMeasureColumn$ } = this.nzTableStyleService;
            noResult$.subscribe(this.noResult$);
            listOfMeasureColumn$.subscribe(this.listOfMeasureColumn$);
            showEmpty$.subscribe(this.showEmpty$);
        }
    }
    /**
     * @param {?} listOfAutoWidth
     * @return {?}
     */
    onListOfAutoWidthChange(listOfAutoWidth) {
        this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
    }
}
NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) { return new (t || NzTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8)); };
NzTbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTbodyComponent, selectors: [["tbody"]], hostVars: 2, hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-tbody", ctx.isInsideTable);
    } }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]], template: function NzTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.listOfMeasureColumn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx.showEmpty$));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzTrMeasureComponent,
        NzTableFixedRowComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmbedEmptyComponent"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTbodyComponent.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tr.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTrDirective {
    /**
     * @param {?} nzTableStyleService
     */
    constructor(nzTableStyleService) {
        this.nzTableStyleService = nzTableStyleService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        this.listOfFixedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
        this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
         * @param {?} list
         * @return {?}
         */
        list => Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(...[this.listOfFixedColumns$, ...list.map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.changes$))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["flatMap"])((/**
         * @return {?}
         */
        () => this.listOfFixedColumns$))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
        this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} list
         * @return {?}
         */
        list => list.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzLeft !== false)))));
        this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
         * @param {?} list
         * @return {?}
         */
        list => list.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzRight !== false)))));
        this.listOfColumnsChanges$ = this.listOfColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
         * @param {?} list
         * @return {?}
         */
        list => Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(...[this.listOfColumns$, ...list.map((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c.changes$))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["flatMap"])((/**
         * @return {?}
         */
        () => this.listOfColumns$))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
        this.isInsideTable = false;
        this.isInsideTable = !!nzTableStyleService;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.nzTableStyleService) {
            this.listOfCellFixedDirective.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfCellFixedDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
                .subscribe(this.listOfFixedColumns$);
            this.listOfNzThDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfNzThDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(this.listOfColumns$);
            /** set last left and first right **/
            this.listOfFixedLeftColumnChanges$.subscribe((/**
             * @param {?} listOfFixedLeft
             * @return {?}
             */
            listOfFixedLeft => {
                listOfFixedLeft.forEach((/**
                 * @param {?} cell
                 * @return {?}
                 */
                cell => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1])));
            }));
            this.listOfFixedRightColumnChanges$.subscribe((/**
             * @param {?} listOfFixedRight
             * @return {?}
             */
            listOfFixedRight => {
                listOfFixedRight.forEach((/**
                 * @param {?} cell
                 * @return {?}
                 */
                cell => cell.setIsFirstRight(cell === listOfFixedRight[0])));
            }));
            /** calculate fixed nzLeft and nzRight **/
            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([listOfAutoWidth, listOfLeftCell]) => {
                listOfLeftCell.forEach((/**
                 * @param {?} cell
                 * @param {?} index
                 * @return {?}
                 */
                (cell, index) => {
                    if (cell.isAutoLeft) {
                        /** @type {?} */
                        const currentArray = listOfLeftCell.slice(0, index);
                        /** @type {?} */
                        const count = currentArray.reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + (cur.colspan || 1)), 0);
                        /** @type {?} */
                        const width = listOfAutoWidth.slice(0, count).reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + cur), 0);
                        cell.setAutoLeftWidth(`${width}px`);
                    }
                }));
            }));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ([listOfAutoWidth, listOfRightCell]) => {
                listOfRightCell.forEach((/**
                 * @param {?} _
                 * @param {?} index
                 * @return {?}
                 */
                (_, index) => {
                    /** @type {?} */
                    const cell = listOfRightCell[listOfRightCell.length - index - 1];
                    if (cell.isAutoRight) {
                        /** @type {?} */
                        const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                        /** @type {?} */
                        const count = currentArray.reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + (cur.colspan || 1)), 0);
                        /** @type {?} */
                        const width = listOfAutoWidth
                            .slice(listOfAutoWidth.length - count, listOfAutoWidth.length)
                            .reduce((/**
                         * @param {?} pre
                         * @param {?} cur
                         * @return {?}
                         */
                        (pre, cur) => pre + cur), 0);
                        cell.setAutoRightWidth(`${width}px`);
                    }
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8)); };
NzTrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]], contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzThMeasureDirective, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzCellFixedDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzThDirective = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfCellFixedDirective = _t);
    } }, hostVars: 2, hostBindings: function NzTrDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-row", ctx.isInsideTable);
    } } });
/** @nocollapse */
NzTrDirective.ctorParameters = () => [
    { type: NzTableStyleService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzTrDirective.propDecorators = {
    listOfNzThDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [NzThMeasureDirective,] }],
    listOfCellFixedDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [NzCellFixedDirective,] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/thead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTheadComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzTableStyleService
     * @param {?} nzTableDataService
     */
    constructor(elementRef, renderer, nzTableStyleService, nzTableDataService) {
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
    ngOnInit() {
        if (this.nzTableStyleService) {
            this.nzTableStyleService.setTheadTemplate(this.templateRef);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzSingleSort } = changes;
        if (nzSingleSort) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_21__["warnDeprecation"])(`'nzSingleSort' is deprecated and will be removed in 10.0.0. Please use 'nzSortFn' and 'nzSortPriority' instead.`);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.nzTableStyleService) {
            /** @type {?} */
            const firstTableRow$ = (/** @type {?} */ (this.listOfNzTrDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfNzTrDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
             * @param {?} item
             * @return {?}
             */
            item => item && item.first)))));
            /** @type {?} */
            const listOfColumnsChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
             * @param {?} firstTableRow
             * @return {?}
             */
            firstTableRow => (firstTableRow ? firstTableRow.listOfColumnsChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            listOfColumnsChanges$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.nzTableStyleService.setListOfTh(data)));
            /** TODO: need reset the measure row when scrollX change **/
            this.nzTableStyleService.enableAutoMeasure$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
             * @param {?} enable
             * @return {?}
             */
            enable => (enable ? listOfColumnsChanges$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["of"])([])))))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.nzTableStyleService.setListOfMeasureColumn(data)));
            /** @type {?} */
            const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
             * @param {?} firstTr
             * @return {?}
             */
            firstTr => (firstTr ? firstTr.listOfFixedLeftColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            /** @type {?} */
            const listOfFixedRightColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
             * @param {?} firstTr
             * @return {?}
             */
            firstTr => (firstTr ? firstTr.listOfFixedRightColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            listOfFixedLeftColumnChanges$.subscribe((/**
             * @param {?} listOfFixedLeftColumn
             * @return {?}
             */
            listOfFixedLeftColumn => {
                this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
            }));
            listOfFixedRightColumnChanges$.subscribe((/**
             * @param {?} listOfFixedRightColumn
             * @return {?}
             */
            listOfFixedRightColumn => {
                this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
            }));
        }
        if (this.nzTableDataService) {
            /** @type {?} */
            const listOfColumn$ = (/** @type {?} */ (this.listOfNzThAddOnComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfNzThAddOnComponent))));
            /** @type {?} */
            const manualSort$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
             * @return {?}
             */
            () => Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(...this.listOfNzThAddOnComponent.map((/**
             * @param {?} th
             * @return {?}
             */
            th => th.manualClickOrder$))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$));
            manualSort$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                const emitValue = { key: data.nzColumnKey, value: data.sortOrder };
                this.nzSortChange.emit(emitValue);
                this.nzSortOrderChange.emit(emitValue);
                if (this.nzSingleSort || (data.nzSortFn && data.nzSortPriority === false)) {
                    this.listOfNzThAddOnComponent.filter((/**
                     * @param {?} th
                     * @return {?}
                     */
                    th => th !== data)).forEach((/**
                     * @param {?} th
                     * @return {?}
                     */
                    th => th.clearSortOrder()));
                }
            }));
            /** @type {?} */
            const listOfCalcOperator$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
             * @param {?} list
             * @return {?}
             */
            list => Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(...[listOfColumn$, ...list.map((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => c.calcOperatorChange$))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["flatMap"])((/**
             * @return {?}
             */
            () => listOfColumn$))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
             * @param {?} list
             * @return {?}
             */
            list => list
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !!item.nzSortFn || !!item.nzFilterFn))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                const { nzSortFn, sortOrder, nzFilterFn, nzFilterValue, nzSortPriority, nzColumnKey } = item;
                return {
                    key: nzColumnKey,
                    sortFn: nzSortFn,
                    sortPriority: nzSortPriority,
                    sortOrder: (/** @type {?} */ (sortOrder)),
                    filterFn: (/** @type {?} */ (nzFilterFn)),
                    filterValue: nzFilterValue
                };
            })))), 
            // TODO: after checked error here
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["delay"])(0));
            listOfCalcOperator$.subscribe((/**
             * @param {?} list
             * @return {?}
             */
            list => {
                this.nzTableDataService.listOfCalcOperator$.next(list);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.nzTableStyleService) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) { return new (t || NzTheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableStyleService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTableDataService, 8)); };
NzTheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTheadComponent, selectors: [["thead", 9, "ant-table-thead"]], contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzTrDirective, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzThAddOnComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzTrDirective = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzThAddOnComponent = _t);
    } }, viewQuery: function NzTheadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c12, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { nzSingleSort: "nzSingleSort" }, outputs: { nzSortChange: "nzSortChange", nzSortOrderChange: "nzSortOrderChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isInsideTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTheadComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: NzTableStyleService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: NzTableDataService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzTheadComponent.propDecorators = {
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contentTemplate', { static: true },] }],
    listOfNzTrDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [NzTrDirective,] }],
    listOfNzThAddOnComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [NzThAddOnComponent, { descendants: true },] }],
    nzSingleSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSortOrderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_20__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_19__["__metadata"])("design:type", Object)
], NzTheadComponent.prototype, "nzSingleSort", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzFilterTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-filter-trigger',
                exportAs: `nzFilterTrigger`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
      (click)="onFilterClick($event)"
    >
      <ng-content></ng-content>
    </span>
  `,
                host: {
                    '[class.ant-table-filter-trigger-container]': 'true',
                    '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzDropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table-filter',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <span class="ant-table-filter-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </span>
    <ng-container *ngIf="!customFilter; else extraTemplate">
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <i nz-icon nzType="filter" nzTheme="fill"></i>
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            <li nz-menu-item [nzSelected]="f.checked" *ngFor="let f of listOfParsedFilter; trackBy: trackByValue" (click)="check(f)">
              <label nz-radio *ngIf="!filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <label nz-checkbox *ngIf="filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <span>{{ f.text }}</span>
            </li>
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">{{ locale.filterReset }}</button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    </ng-container>
  `,
                host: {
                    '[class.ant-table-filter-column]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] }]; }, { contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], customFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], extraTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], filterMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], listOfFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], filterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzRowExpandButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'button[nz-row-expand-button]',
                host: {
                    '[type]': `'button'`,
                    '[class.ant-table-row-expand-icon]': 'true',
                    '[class.ant-table-row-expand-icon-expanded]': `!spaceMode && expand === true`,
                    '[class.ant-table-row-expand-icon-collapsed]': `!spaceMode && expand === false`,
                    '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
                    '(click)': 'onHostClick()'
                }
            }]
    }], function () { return []; }, { expand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], spaceMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], expandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzRowIndentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'nz-row-indent',
                host: {
                    '[class.ant-table-row-indent]': 'true',
                    '[style.padding-left.px]': 'indentSize'
                }
            }]
    }], function () { return []; }, { indentSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table-selection',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <label
      *ngIf="showCheckbox"
      nz-checkbox
      [class.ant-table-selection-select-all-custom]="showRowSelection"
      [ngModel]="checked"
      [nzDisabled]="disabled"
      [nzIndeterminate]="indeterminate"
      (ngModelChange)="onCheckedChange($event)"
    >
    </label>
    <div class="ant-table-selection-extra" *ngIf="showRowSelection">
      <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
        <i nz-icon nzType="down"></i>
      </span>
      <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
        <ul nz-menu class="ant-table-selection-menu">
          <li nz-menu-item *ngFor="let selection of listOfSelections" (click)="selection.onSelect()">
            {{ selection.text }}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  `,
                host: {
                    '[class.ant-table-selection]': 'true'
                }
            }]
    }], function () { return []; }, { listOfSelections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], showCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], showRowSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], checkedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableSortersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table-sorters',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <span><ng-template [ngTemplateOutlet]="contentTemplate"></ng-template></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        <i nz-icon nzType="caret-up" *ngIf="isUp" class="ant-table-column-sorter-up" [class.active]="sortOrder == 'ascend'"></i>
        <i nz-icon nzType="caret-down" *ngIf="isDown" class="ant-table-column-sorter-down" [class.active]="sortOrder == 'descend'"></i>
      </span>
    </span>
  `,
                host: {
                    '[class.ant-table-column-sorters]': 'true'
                }
            }]
    }], function () { return []; }, { sortDirections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], sortOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellFixedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
                host: {
                    '[class.ant-table-cell-fix-right]': `isFixedRight`,
                    '[class.ant-table-cell-fix-left]': `isFixedLeft`,
                    '[style.position]': `isFixed? 'sticky' : null`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { nzRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableStyleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])',
                host: {
                    '[class.ant-table-cell]': 'isInsideTable'
                }
            }]
    }], function () { return [{ type: NzTableStyleService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTdAddOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <ng-container *ngIf="nzShowExpand || nzIndentSize > 0">
      <nz-row-indent [indentSize]="nzIndentSize"></nz-row-indent>
      <button nz-row-expand-button [expand]="nzExpand" (expandChange)="onExpandChange($event)" [spaceMode]="!nzShowExpand"></button>
    </ng-container>
    <label
      nz-checkbox
      *ngIf="nzShowCheckbox"
      [nzDisabled]="nzDisabled"
      [ngModel]="nzChecked"
      [nzIndeterminate]="nzIndeterminate"
      (ngModelChange)="onCheckedChange($event)"
    >
    </label>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-table-cell-with-append]': `nzShowExpand || nzIndentSize > 0`,
                    '[class.ant-table-selection-column]': `nzShowCheckbox`
                }
            }]
    }], function () { return []; }, { nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzIndentSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzThAddOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'th[nzSortKey], th[nzColumnKey], th[nzSort], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                template: `
    <nz-table-filter
      *ngIf="nzShowFilter || nzCustomFilter; else notFilterTemplate"
      [contentTemplate]="notFilterTemplate"
      [extraTemplate]="extraTemplate"
      [customFilter]="nzCustomFilter"
      [filterMultiple]="nzFilterMultiple"
      [listOfFilter]="nzFilters"
      (filterChange)="onFilterValueChange($event)"
    ></nz-table-filter>
    <ng-template #notFilterTemplate>
      <ng-template [ngTemplateOutlet]="nzShowSort ? sortTemplate : contentTemplate"></ng-template>
    </ng-template>
    <ng-template #extraTemplate>
      <ng-content select="[nz-th-extra]"></ng-content>
      <ng-content select="nz-filter-trigger"></ng-content>
    </ng-template>
    <ng-template #sortTemplate>
      <nz-table-sorters [sortOrder]="sortOrder" [sortDirections]="sortDirections" [contentTemplate]="contentTemplate"></nz-table-sorters>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-table-column-has-sorters]': 'nzShowSort',
                    '[class.ant-table-column-sort]': `sortOrder === 'descend' || sortOrder === 'ascend'`,
                    '(click)': 'emitNextSortValue()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { nzFilterMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortPriority: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortDirections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzFilterFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCustomFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSortOrderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzColumnKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzThMeasureDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'th'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzThSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                template: `
    <nz-table-selection
      [checked]="nzChecked"
      [disabled]="nzDisabled"
      [indeterminate]="nzIndeterminate"
      [listOfSelections]="nzSelections"
      [showCheckbox]="nzShowCheckbox"
      [showRowSelection]="nzShowRowSelection"
      (checkedChange)="onCheckedChange($event)"
    ></nz-table-selection>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-table-selection-column]': 'true'
                }
            }]
    }], function () { return []; }, { nzSelections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowRowSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSortChangeWithKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'th[nzAlign],td[nzAlign]',
                host: {
                    '[style.text-align]': 'nzAlign'
                }
            }]
    }], function () { return []; }, { nzAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellEllipsisDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'th[nzEllipsis],td[nzEllipsis]',
                host: {
                    '[class.ant-table-cell-ellipsis]': 'nzEllipsis'
                }
            }]
    }], function () { return []; }, { nzEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCellBreakWordDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'th[nzBreakWord],td[nzBreakWord]',
                host: {
                    '[style.word-break]': `nzBreakWord ? 'break-all' : ''`
                }
            }]
    }], function () { return []; }, { nzBreakWord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'table[nz-table-content]',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <col [style.width]="width" [style.minWidth]="width" *ngFor="let width of listOfColWidth" />
    <thead class="ant-table-thead" *ngIf="theadTemplate">
      <ng-template [ngTemplateOutlet]="theadTemplate"></ng-template>
    </thead>
    <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    <ng-content></ng-content>
  `,
                host: {
                    '[style.table-layout]': 'tableLayout',
                    '[class.ant-table-fixed]': 'scrollX',
                    '[style.width]': 'scrollX',
                    '[style.min-width]': `scrollX ? '100%': null`
                }
            }]
    }], function () { return []; }, { tableLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], theadTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], listOfColWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], scrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableFixedRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <td class="nz-disable-td ant-table-cell" #tdElement>
      <div
        class="ant-table-expanded-row-fixed"
        *ngIf="enableAutoMeasure$ | async; else contentTemplate"
        style="position: sticky; left: 0px; overflow: hidden;"
        [style.width.px]="hostWidth$ | async"
      >
        <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      </div>
    </td>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            }]
    }], function () { return [{ type: NzTableStyleService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }]; }, { tdElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['tdElement']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableInnerDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table-inner-default',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <div class="ant-table-content">
      <table
        nz-table-content
        [contentTemplate]="contentTemplate"
        [tableLayout]="tableLayout"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
      ></table>
    </div>
  `,
                host: {
                    '[class.ant-table-container]': 'true'
                }
            }]
    }], function () { return []; }, { tableLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], listOfColWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], theadTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableInnerScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table-inner-scroll',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <div class="ant-table-content">
      <div *ngIf="scrollY" #tableHeaderElement [ngStyle]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
        ></table>
      </div>
      <div #tableBodyElement *ngIf="!virtualTemplate" class="ant-table-body" [ngStyle]="bodyStyleMap">
        <table
          nz-table-content
          [scrollX]="scrollX"
          tableLayout="fixed"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="scrollY ? null : theadTemplate"
          [contentTemplate]="contentTemplate"
        ></table>
      </div>
      <cdk-virtual-scroll-viewport
        #tableBodyElement
        *ngIf="virtualTemplate"
        [itemSize]="virtualItemSize"
        [maxBufferPx]="virtualMaxBufferPx"
        [minBufferPx]="virtualMinBufferPx"
        [style.height]="data.length ? scrollY : noDateVirtualHeight"
      >
        <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
          <tbody>
            <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
              <ng-template [ngTemplateOutlet]="virtualTemplate" [ngTemplateOutletContext]="{ $implicit: item, index: i }"></ng-template>
            </ng-container>
          </tbody>
        </table>
      </cdk-virtual-scroll-viewport>
    </div>
  `,
                host: {
                    '[class.ant-table-container]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], scrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], scrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], widthConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], listOfColWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], theadTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], virtualTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], virtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], virtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], virtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], virtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], verticalScrollBarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tableMainElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tableHeaderElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['tableHeaderElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]
        }], tableBodyElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['tableBodyElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]
        }], cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], { read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"] }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableVirtualScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[nz-virtual-scroll]',
                exportAs: 'nzVirtualScroll'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table',
                exportAs: 'nzTable',
                providers: [NzTableStyleService, NzTableDataService],
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'top'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        <nz-table-title-footer [title]="nzTitle" *ngIf="nzTitle"></nz-table-title-footer>
        <nz-table-inner-scroll
          *ngIf="scrollY || scrollX; else defaultTemplate"
          [data]="data"
          [scrollX]="scrollX"
          [scrollY]="scrollY"
          [contentTemplate]="contentTemplate"
          [listOfColWidth]="listOfAutoColWidth"
          [theadTemplate]="theadTemplate"
          [verticalScrollBarWidth]="verticalScrollBarWidth"
          [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
          [virtualItemSize]="nzVirtualItemSize"
          [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [virtualMinBufferPx]="nzVirtualMinBufferPx"
          [tableMainElement]="tableMainElement"
          [virtualForTrackBy]="nzVirtualForTrackBy"
        ></nz-table-inner-scroll>
        <ng-template #defaultTemplate>
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
          ></nz-table-inner-default>
        </ng-template>
        <nz-table-title-footer [footer]="nzFooter" *ngIf="nzFooter"></nz-table-title-footer>
      </div>
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
    </nz-spin>
    <ng-template #paginationTemplate>
      <nz-pagination
        *ngIf="nzShowPagination && data.length"
        class="ant-table-pagination ant-table-pagination-right"
        [nzShowSizeChanger]="nzShowSizeChanger"
        [nzPageSizeOptions]="nzPageSizeOptions"
        [nzItemRender]="nzItemRender!"
        [nzShowQuickJumper]="nzShowQuickJumper"
        [nzHideOnSinglePage]="nzHideOnSinglePage"
        [nzShowTotal]="nzShowTotal"
        [nzSize]="nzSize === 'default' ? 'default' : 'small'"
        [nzPageSize]="nzPageSize"
        [nzTotal]="nzTotal"
        [nzSimple]="nzSimple"
        [nzPageIndex]="nzPageIndex"
        (nzPageSizeChange)="onPageSizeChange($event)"
        (nzPageIndexChange)="onPageIndexChange($event)"
      >
      </nz-pagination>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-table-wrapper]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: NzTableStyleService }, { type: NzTableDataService }]; }, { nzTableLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzItemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzNoResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLoadingDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzWidthConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPaginationPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzFrontPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTemplateMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLoadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzHideOnSinglePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSimple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzPageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzQueryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzCurrentPageDataChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzVirtualScrollDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [NzTableVirtualScrollDirective, { static: false }]
        }], nzTableInnerScrollComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NzTableInnerScrollComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTbodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'tbody',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <ng-container *ngIf="listOfMeasureColumn$ | async as listOfMeasureColumn">
      <tr
        nz-table-measure-row
        *ngIf="isInsideTable && listOfMeasureColumn.length"
        [listOfMeasureColumn]="listOfMeasureColumn"
        (listOfAutoWidth)="onListOfAutoWidthChange($event)"
      ></tr>
    </ng-container>
    <ng-content></ng-content>
    <tr class="ant-table-placeholder" nz-table-fixed-row *ngIf="showEmpty$ | async">
      <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!"></nz-embed-empty>
    </tr>
  `,
                host: {
                    '[class.ant-table-tbody]': 'isInsideTable'
                }
            }]
    }], function () { return [{ type: NzTableStyleService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTrDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
                host: {
                    '[class.ant-table-row]': 'isInsideTable'
                }
            }]
    }], function () { return [{ type: NzTableStyleService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { listOfNzThDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NzThMeasureDirective]
        }], listOfCellFixedDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NzCellFixedDirective]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTheadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'thead:not(.ant-table-thead)',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    <ng-container *ngIf="!isInsideTable">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </ng-container>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: NzTableStyleService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: NzTableDataService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzSingleSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSortOrderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['contentTemplate', { static: true }]
        }], listOfNzTrDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NzTrDirective]
        }], listOfNzThAddOnComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NzThAddOnComponent, { descendants: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/title-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableTitleFooterComponent {
    constructor() {
        this.title = null;
        this.footer = null;
    }
}
NzTableTitleFooterComponent.ɵfac = function NzTableTitleFooterComponent_Factory(t) { return new (t || NzTableTitleFooterComponent)(); };
NzTableTitleFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTableTitleFooterComponent, selectors: [["nz-table-title-footer"]], hostVars: 4, hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
    } }, inputs: { title: "title", footer: "footer" }, decls: 2, vars: 2, consts: [[4, "nzStringTemplateOutlet"]], template: function NzTableTitleFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.footer);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzTableTitleFooterComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableTitleFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-table-title-footer',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    <ng-container *nzStringTemplateOutlet="footer">{{ footer }}</ng-container>
  `,
                host: {
                    '[class.ant-table-title]': `title !== null`,
                    '[class.ant-table-footer]': `footer !== null`
                }
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tr-expand.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTrExpandDirective {
    constructor() {
        this.nzExpand = true;
    }
}
NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) { return new (t || NzTrExpandDirective)(); };
NzTrExpandDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzTrExpandDirective, selectors: [["tr", "nzExpand", ""]], hostVars: 3, hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("hidden", !ctx.nzExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-expanded-row", true);
    } }, inputs: { nzExpand: "nzExpand" } });
NzTrExpandDirective.propDecorators = {
    nzExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTrExpandDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'tr[nzExpand]',
                host: {
                    '[class.ant-table-expanded-row]': 'true',
                    '[hidden]': `!nzExpand`
                }
            }]
    }], function () { return []; }, { nzExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table/tr-measure.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTrMeasureComponent {
    /**
     * @param {?} nzResizeObserver
     * @param {?} ngZone
     */
    constructor(nzResizeObserver, ngZone) {
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
    trackByFunc(_, key) {
        return key;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.listOfTdElement.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["startWith"])(this.listOfTdElement))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["switchMap"])((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            return (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["combineLatest"])(list.toArray().map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return this.nzResizeObserver.observe(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["map"])((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([entry]) => {
                    const { width } = entry.target.getBoundingClientRect();
                    return Math.floor(width);
                })));
            })))));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["debounceTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.listOfAutoWidth.next(data);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) { return new (t || NzTrMeasureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
NzTrMeasureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTrMeasureComponent, selectors: [["tr", "nz-table-measure-row", ""]], viewQuery: function NzTrMeasureComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfTdElement = _t);
    } }, hostVars: 2, hostBindings: function NzTrMeasureComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-table-measure-now", true);
    } }, inputs: { listOfMeasureColumn: "listOfMeasureColumn" }, outputs: { listOfAutoWidth: "listOfAutoWidth" }, attrs: _c13, decls: 1, vars: 2, consts: [["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"], ["tdElement", ""]], template: function NzTrMeasureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTrMeasureComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
NzTrMeasureComponent.propDecorators = {
    listOfMeasureColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listOfAutoWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    listOfTdElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['tdElement',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTrMeasureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'tr[nz-table-measure-row]',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <td
      #tdElement
      class="nz-disable-td"
      style="padding: 0px; border: 0px; height: 0px;"
      *ngFor="let th of listOfMeasureColumn; trackBy: trackByFunc"
    ></td>
  `,
                host: {
                    '[class.ant-table-measure-now]': 'true'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, { listOfMeasureColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], listOfAutoWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], listOfTdElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: ['tdElement']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTableModule {
}
NzTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzTableModule });
NzTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"],
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationModule"],
            ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserversModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinModule"],
            ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzTableModule, { declarations: function () { return [NzTableComponent,
        NzThAddOnComponent,
        NzTableCellDirective,
        NzThMeasureDirective,
        NzTdAddOnComponent,
        NzTheadComponent,
        NzTbodyComponent,
        NzTrDirective,
        NzTrExpandDirective,
        NzTableVirtualScrollDirective,
        NzCellFixedDirective,
        NzTableContentComponent,
        NzTableTitleFooterComponent,
        NzTableInnerDefaultComponent,
        NzTableInnerScrollComponent,
        NzTrMeasureComponent,
        NzRowIndentDirective,
        NzRowExpandButtonDirective,
        NzCellBreakWordDirective,
        NzCellAlignDirective,
        NzTableSortersComponent,
        NzTableFilterComponent,
        NzTableSelectionComponent,
        NzCellEllipsisDirective,
        NzFilterTriggerComponent,
        NzTableFixedRowComponent,
        NzThSelectionComponent]; }, imports: function () { return [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationModule"],
        ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserversModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]]; }, exports: function () { return [NzTableComponent,
        NzThAddOnComponent,
        NzTableCellDirective,
        NzThMeasureDirective,
        NzTdAddOnComponent,
        NzTheadComponent,
        NzTbodyComponent,
        NzTrDirective,
        NzTableVirtualScrollDirective,
        NzCellFixedDirective,
        NzFilterTriggerComponent,
        NzTrExpandDirective,
        NzCellBreakWordDirective,
        NzCellAlignDirective,
        NzCellEllipsisDirective,
        NzTableFixedRowComponent,
        NzThSelectionComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    NzTableComponent,
                    NzThAddOnComponent,
                    NzTableCellDirective,
                    NzThMeasureDirective,
                    NzTdAddOnComponent,
                    NzTheadComponent,
                    NzTbodyComponent,
                    NzTrDirective,
                    NzTrExpandDirective,
                    NzTableVirtualScrollDirective,
                    NzCellFixedDirective,
                    NzTableContentComponent,
                    NzTableTitleFooterComponent,
                    NzTableInnerDefaultComponent,
                    NzTableInnerScrollComponent,
                    NzTrMeasureComponent,
                    NzRowIndentDirective,
                    NzRowExpandButtonDirective,
                    NzCellBreakWordDirective,
                    NzCellAlignDirective,
                    NzTableSortersComponent,
                    NzTableFilterComponent,
                    NzTableSelectionComponent,
                    NzCellEllipsisDirective,
                    NzFilterTriggerComponent,
                    NzTableFixedRowComponent,
                    NzThSelectionComponent
                ],
                exports: [
                    NzTableComponent,
                    NzThAddOnComponent,
                    NzTableCellDirective,
                    NzThMeasureDirective,
                    NzTdAddOnComponent,
                    NzTheadComponent,
                    NzTbodyComponent,
                    NzTrDirective,
                    NzTableVirtualScrollDirective,
                    NzCellFixedDirective,
                    NzFilterTriggerComponent,
                    NzTrExpandDirective,
                    NzCellBreakWordDirective,
                    NzCellAlignDirective,
                    NzCellEllipsisDirective,
                    NzTableFixedRowComponent,
                    NzThSelectionComponent
                ],
                imports: [
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__["NzRadioModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"],
                    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_14__["NzPaginationModule"],
                    ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserversModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__["NzEmptyModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]
                ]
            }]
    }], null, null); })();

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
function NzTableQueryParams() { }
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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js ***!
  \********************************************************************************/
/*! exports provided: NzTabBodyComponent, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLabelDirective, NzTabLinkDirective, NzTabSetComponent, NzTabsInkBarDirective, NzTabsModule, NzTabsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabBodyComponent", function() { return NzTabBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabChangeEvent", function() { return NzTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabComponent", function() { return NzTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabDirective", function() { return NzTabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabLabelDirective", function() { return NzTabLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabLinkDirective", function() { return NzTabLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabSetComponent", function() { return NzTabSetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabsInkBarDirective", function() { return NzTabsInkBarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabsModule", function() { return NzTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabsNavComponent", function() { return NzTabsNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
















/**
 * @fileoverview added by tsickle
 * Generated from: tab-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */











const _c0 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content);
} }
const _c1 = ["bodyTpl"];
const _c2 = ["titleTpl"];
function NzTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
function NzTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
} }
const _c3 = [[["", "nz-tab-link", ""]], "*"];
const _c4 = ["[nz-tab-link]", "*"];
const _c5 = ["navContainerElement"];
const _c6 = ["navListElement"];
const _c7 = ["scrollListElement"];
function NzTabsNavComponent_div_0_ng_template_1_Template(rf, ctx) { }
function NzTabsNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabsNavComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzTabBarExtraContent);
} }
const _c8 = ["*"];
const _c9 = ["tabContent"];
function NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.nzTitle);
} }
function NzTabSetComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_ng_container_0_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r5 = ctx.index; const tab_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.clickLabel(i_r5, tab_r4.nzDisabled); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabSetComponent_ng_container_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx_r1.nzTabBarGutter, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-active", ctx_r1.nzSelectedIndex == i_r5 && !ctx_r1.nzHideAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r4.nzDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", tab_r4.nzTitle || tab_r4.title);
} }
function NzTabSetComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r3.nzSelectedIndex == i_r11 && !ctx_r3.nzHideAll)("forceRender", tab_r10.nzForceRender)("content", tab_r10.template || tab_r10.content);
} }
function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabs-nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_nz_tabs_nav_nzOnNextClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_nz_tabs_nav_nzOnPrevClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.nzOnPrevClick.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabSetComponent_ng_container_0_div_2_Template, 2, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabSetComponent_ng_container_0_div_5_Template, 1, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx_r0.nzSize)("nzTabPosition", ctx_r0.nzTabPosition)("nzType", ctx_r0.nzType)("nzShowPagination", ctx_r0.nzShowPagination)("nzPositionMode", ctx_r0.tabPositionMode)("nzAnimated", ctx_r0.inkBarAnimated)("ngStyle", ctx_r0.nzTabBarStyle)("nzHideBar", ctx_r0.nzHideAll)("nzTabBarExtraContent", ctx_r0.nzTabBarExtraContent)("selectedIndex", ctx_r0.nzSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listOfNzTabComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r0.tabPositionMode === "horizontal" && ctx_r0.tabPaneAnimated && (0 - (ctx_r0.nzSelectedIndex || 0)) * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-top-content", ctx_r0.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r0.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r0.nzTabPosition === "left")("ant-tabs-right-content", ctx_r0.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r0.tabPaneAnimated)("ant-tabs-card-content", ctx_r0.nzType === "card")("ant-tabs-content-no-animated", !ctx_r0.tabPaneAnimated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listOfNzTabComponent);
} }
class NzTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.forceRender = false;
    }
}
NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
NzTabBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostVars: 4, hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-inactive", !ctx.active);
    } }, inputs: { content: "content", active: "active", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active || ctx.forceRender);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzTabBodyComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    forceRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tab-label.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabLabelDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    /**
     * @return {?}
     */
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    /**
     * @return {?}
     */
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    getOffsetTop() {
        return this.elementRef.nativeElement.offsetTop;
    }
    /**
     * @return {?}
     */
    getOffsetHeight() {
        return this.elementRef.nativeElement.offsetHeight;
    }
}
NzTabLabelDirective.ɵfac = function NzTabLabelDirective_Factory(t) { return new (t || NzTabLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzTabLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabLabelDirective, selectors: [["", "nz-tab-label", ""]], hostVars: 2, hostBindings: function NzTabLabelDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, exportAs: ["nzTabLabel"] });
/** @nocollapse */
NzTabLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NzTabLabelDirective.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabLabelDirective.prototype, "disabled", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tab-link.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component is for catching `routerLink` directive.
 */
class NzTabLinkDirective {
    /**
     * @param {?=} routerLink
     * @param {?=} routerLinkWithHref
     */
    constructor(routerLink, routerLinkWithHref) {
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], 10)); };
NzTabLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
/** @nocollapse */
NzTabLinkDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tab.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Decorates the `ng-template` tags and reads out the template from it.
 */
class NzTabDirective {
}
NzTabDirective.ɵfac = function NzTabDirective_Factory(t) { return new (t || NzTabDirective)(); };
NzTabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabDirective, selectors: [["", "nz-tab", ""]], exportAs: ["nzTab"] });

/**
 * @fileoverview added by tsickle
 * Generated from: tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
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
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
}
NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkDirective, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkDirective = _t.first);
    } }, viewQuery: function NzTabComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
    } }, inputs: { nzForceRender: "nzForceRender", nzDisabled: "nzDisabled", nzTitle: "nzTitle", nzRouterIdentifier: "nzRouterIdentifier" }, outputs: { nzClick: "nzClick", nzSelect: "nzSelect", nzDeselect: "nzDeselect" }, exportAs: ["nzTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 4, vars: 0, consts: [["titleTpl", ""], ["bodyTpl", ""]], template: function NzTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTabComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NzTabComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['bodyTpl', { static: true },] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['titleTpl', { static: true },] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NzTabDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    linkDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NzTabLinkDirective, { static: false },] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzRouterIdentifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzForceRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzDeselect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabComponent.prototype, "nzForceRender", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabComponent.prototype, "nzDisabled", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tabs-ink-bar.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabsInkBarDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(renderer, elementRef, ngZone) {
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
    alignToElement(element) {
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => this.setStyles(element)));
            }));
        }
        else {
            this.setStyles(element);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    setStyles(element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
}
NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
NzTabsInkBarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabsInkBarDirective, selectors: [["", "nz-tabs-ink-bar", ""]], hostVars: 4, hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-ink-bar-animated", ctx.nzAnimated)("ant-tabs-ink-bar-no-animated", !ctx.nzAnimated);
    } }, inputs: { nzAnimated: "nzAnimated", nzPositionMode: "nzPositionMode" }, exportAs: ["nzTabsInkBar"] });
/** @nocollapse */
NzTabsInkBarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
NzTabsInkBarDirective.propDecorators = {
    nzAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzPositionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tabs-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAGGERATED_OVERSCROLL = 64;
class NzTabsNavComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} platform
     * @param {?} resizeService
     * @param {?} dir
     */
    constructor(elementRef, ngZone, renderer, cdr, platform, resizeService, dir) {
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
    set nzPositionMode(value) {
        this._tabPositionMode = value;
        this.alignInkBarToSelectedTab();
        if (this.nzShowPagination) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.updatePagination();
            }));
        }
    }
    /**
     * @return {?}
     */
    get nzPositionMode() {
        return this._tabPositionMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        this.selectedIndexChanged = this._selectedIndex !== value;
        this._selectedIndex = value;
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    onContentChanges() {
        /** @type {?} */
        const textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.currentTextContent = textContent;
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    scrollHeader(scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
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
    ngAfterContentInit() {
        this.realignInkBar = this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dirChange = this.dir ? this.dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            /** @type {?} */
            const resize = typeof window !== 'undefined' ? this.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dirChange, resize)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    updateTabScrollPosition() {
        /** @type {?} */
        const scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            /** @type {?} */
            const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(0,${-scrollDistance}px, 0)`);
        }
    }
    /**
     * @return {?}
     */
    updatePagination() {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    }
    /**
     * @return {?}
     */
    checkPaginationEnabled() {
        /** @type {?} */
        const isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
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
    scrollToLabel(labelIndex) {
        /** @type {?} */
        const selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            /** @type {?} */
            let labelBeforePos;
            /** @type {?} */
            let labelAfterPos;
            if (this.nzPositionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */
            const beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    }
    /**
     * @return {?}
     */
    checkScrollingControls() {
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
    getMaxScrollDistance() {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    }
    /**
     * Sets the distance in pixels that the tab header should be transformed in the X-axis.
     * @param {?} v
     * @return {?}
     */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this.scrollDistanceChanged = true;
        this.checkScrollingControls();
    }
    /**
     * @return {?}
     */
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * @return {?}
     */
    get viewWidthHeightPix() {
        /** @type {?} */
        let PAGINATION_PIX = 0;
        if (this.showPaginationControls) {
            PAGINATION_PIX = this.navContainerScrollPaddingPix;
        }
        if (this.nzPositionMode === 'horizontal') {
            return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
        }
        else {
            return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
        }
    }
    /**
     * @return {?}
     */
    get navContainerScrollPaddingPix() {
        if (this.platform.isBrowser) {
            /** @type {?} */
            const navContainer = this.navContainerElement.nativeElement;
            /** @type {?} */
            const originStyle = window.getComputedStyle
                ? window.getComputedStyle(navContainer)
                : ((/** @type {?} */ (navContainer))).currentStyle;
            if (this.nzPositionMode === 'horizontal') {
                return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingLeft) + Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingRight);
            }
            else {
                return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingTop) + Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["pxToNumber"])(originStyle.paddingBottom);
            }
        }
        else {
            return 0;
        }
    }
    /**
     * @return {?}
     */
    get tabListScrollWidthHeightPix() {
        if (this.nzPositionMode === 'horizontal') {
            return this.navListElement.nativeElement.scrollWidth;
        }
        else {
            return this.navListElement.nativeElement.scrollHeight;
        }
    }
    /**
     * @return {?}
     */
    get tabListScrollOffSetWidthHeight() {
        if (this.nzPositionMode === 'horizontal') {
            return this.scrollListElement.nativeElement.offsetWidth;
        }
        else {
            return this.elementRef.nativeElement.offsetHeight;
        }
    }
    /**
     * @return {?}
     */
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * @return {?}
     */
    alignInkBarToSelectedTab() {
        if (this.nzType === 'line') {
            /** @type {?} */
            const selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    }
}
NzTabsNavComponent.ɵfac = function NzTabsNavComponent_Factory(t) { return new (t || NzTabsNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8)); };
NzTabsNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabsNavComponent, selectors: [["nz-tabs-nav"]], contentQueries: function NzTabsNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLabelDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzTabLabelDirective = _t);
    } }, viewQuery: function NzTabsNavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzTabsInkBarDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabsInkBarDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollListElement = _t.first);
    } }, hostVars: 18, hostBindings: function NzTabsNavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-bar", true)("ant-tabs-card-bar", ctx.nzType === "card")("ant-tabs-top-bar", ctx.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx.nzTabPosition === "left")("ant-tabs-right-bar", ctx.nzTabPosition === "right")("ant-tabs-small-bar", ctx.nzSize === "small")("ant-tabs-default-bar", ctx.nzSize === "default")("ant-tabs-large-bar", ctx.nzSize === "large");
    } }, inputs: { nzAnimated: "nzAnimated", nzHideBar: "nzHideBar", nzShowPagination: "nzShowPagination", nzType: "nzType", nzTabPosition: "nzTabPosition", nzPositionMode: "nzPositionMode", selectedIndex: "selectedIndex", nzTabBarExtraContent: "nzTabBarExtraContent", nzSize: "nzSize" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["nzTabsNav"], ngContentSelectors: _c8, decls: 17, vars: 18, consts: [["style", "float:right;", "class", "ant-tabs-extra-content", 4, "ngIf"], [1, "ant-tabs-nav-container"], ["navContainerElement", ""], [1, "ant-tabs-tab-prev", 3, "click"], [1, "ant-tabs-tab-prev-icon"], ["nz-icon", "", 1, "ant-tabs-tab-prev-icon-target", 3, "nzType"], [1, "ant-tabs-tab-next", 3, "click"], [1, "ant-tabs-tab-next-icon"], ["nz-icon", "", 1, "ant-tabs-tab-next-icon-target", 3, "nzType"], [1, "ant-tabs-nav-wrap"], [1, "ant-tabs-nav-scroll"], ["scrollListElement", ""], [1, "ant-tabs-nav", 3, "cdkObserveContent"], ["navListElement", ""], ["nz-tabs-ink-bar", "", 2, "display", "block", 3, "hidden", "nzAnimated", "nzPositionMode"], [1, "ant-tabs-extra-content", 2, "float", "right"], [3, "ngTemplateOutlet"]], template: function NzTabsNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabsNavComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabsNavComponent_Template_span_click_3_listener() { return ctx.scrollHeader("before"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabsNavComponent_Template_span_click_6_listener() { return ctx.scrollHeader("after"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function NzTabsNavComponent_Template_div_cdkObserveContent_12_listener() { return ctx.onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["CdkObserveContent"], NzTabsInkBarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTabsNavComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzTabsNavComponent.propDecorators = {
    listOfNzTabLabelDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzTabLabelDirective,] }],
    nzTabsInkBarDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzTabsInkBarDirective, { static: true },] }],
    navContainerElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['navContainerElement', { static: true },] }],
    navListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['navListElement', { static: true },] }],
    scrollListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['scrollListElement', { static: true },] }],
    nzOnNextClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzOnPrevClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzTabBarExtraContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzHideBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzShowPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzPositionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabsNavComponent.prototype, "nzAnimated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabsNavComponent.prototype, "nzHideBar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: table.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzAnimatedInterface() { }
if (false) {}
class NzTabChangeEvent {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tabset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tabs';
class NzTabSetComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} router
     */
    constructor(nzConfigService, renderer, elementRef, cdr, router) {
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
    set nzSelectedIndex(value) {
        this.indexToSelect = value ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(value, null) : null;
    }
    /**
     * @return {?}
     */
    get nzSelectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get inkBarAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
    }
    /**
     * @return {?}
     */
    get tabPaneAnimated() {
        return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
    }
    /**
     * @return {?}
     */
    get isAnimationDisabled() {
        return this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPosition(value) {
        if (this.tabContent) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, (/** @type {?} */ (this.nzTabsNavComponent)).elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, (/** @type {?} */ (this.nzTabsNavComponent)).elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            if (this.nzSelectedIndex !== null && this.nzSelectedIndex !== index && typeof this.nzCanDeactivate === 'function') {
                /** @type {?} */
                const observable = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["wrapIntoObservable"])(this.nzCanDeactivate(this.nzSelectedIndex, index));
                observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} canChange
                 * @return {?}
                 */
                canChange => canChange && this.emitClickEvent(index)));
            }
            else {
                this.emitClickEvent(index);
            }
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    emitClickEvent(index) {
        /** @type {?} */
        const tabs = this.listOfNzTabComponent.toArray();
        this.nzSelectedIndex = index;
        tabs[index].nzClick.emit();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent.toArray()[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            (item, i) => {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            }));
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
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...this.listOfNzTabComponent.map((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.stateChanges))).subscribe((/**
         * @return {?}
         */
        () => this.cdr.markForCheck()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTabPosition, nzType } = changes;
        if (nzTabPosition) {
            if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                this.tabPositionMode = 'horizontal';
            }
            else {
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
    ngAfterContentChecked() {
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                /** @type {?} */
                const isFirstRun = this._selectedIndex == null;
                if (!isFirstRun) {
                    this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
                }
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    (tab, index) => (tab.isActive = index === indexToSelect)));
                    if (!isFirstRun) {
                        this.nzSelectedIndexChange.emit(indexToSelect);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            (tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.subscribeToTabLabels();
        this.setPosition(this.nzTabPosition);
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_14__["PREFIX"]} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(true))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            }));
        }
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                /** @type {?} */
                const tabs = this.listOfNzTabComponent.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this.indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabsSubscription.unsubscribe();
        this.tabLabelSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateRouterActive() {
        if (this.router.navigated) {
            /** @type {?} */
            const index = this.findShouldActiveTabIndex();
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
    findShouldActiveTabIndex() {
        /** @type {?} */
        const tabs = this.listOfNzTabComponent.toArray();
        /** @type {?} */
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            /** @type {?} */
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        }));
    }
    /**
     * @private
     * @param {?} router
     * @return {?}
     */
    isLinkActive(router) {
        return (/**
         * @param {?=} link
         * @return {?}
         */
        (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false));
    }
}
NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], 8)); };
NzTabSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabComponent, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzTabComponent = _t);
    } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabsNavComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabsNavComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabContent = _t.first);
    } }, hostVars: 22, hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs", true)("ant-tabs-no-animation", ctx.isAnimationDisabled)("ant-tabs-line", ctx.nzType === "line")("ant-tabs-card", ctx.nzType === "card")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-vertical", ctx.nzTabPosition === "left" || ctx.nzTabPosition === "right")("ant-tabs-large", ctx.nzSize === "large")("ant-tabs-small", ctx.nzSize === "small");
    } }, inputs: { nzShowPagination: "nzShowPagination", nzAnimated: "nzAnimated", nzHideAll: "nzHideAll", nzTabPosition: "nzTabPosition", nzSize: "nzSize", nzTabBarGutter: "nzTabBarGutter", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzCanDeactivate: "nzCanDeactivate", nzSelectedIndex: "nzSelectedIndex", nzTabBarExtraContent: "nzTabBarExtraContent" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick", nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange" }, exportAs: ["nzTabset"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["role", "tablist", "tabindex", "0", 3, "nzSize", "nzTabPosition", "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click"], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabSetComponent_ng_container_0_Template, 6, 28, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfNzTabComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], NzTabsNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], NzTabLabelDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], NzTabBodyComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTabSetComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzTabSetComponent.propDecorators = {
    listOfNzTabComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzTabComponent,] }],
    nzTabsNavComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzTabsNavComponent, { static: false },] }],
    tabContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['tabContent', { static: false },] }],
    nzTabBarExtraContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzShowPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzHideAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabBarGutter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabBarStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLinkRouter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLinkExact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCanDeactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOnNextClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzOnPrevClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelectChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelectedIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Boolean)
], NzTabSetComponent.prototype, "nzShowPagination", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzAnimated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
], NzTabSetComponent.prototype, "nzSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Number)
], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
], NzTabSetComponent.prototype, "nzType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkExact", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[class.ant-tabs-tabpane-inactive]': '!active'
                }
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forceRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nz-tab-label]',
                exportAs: 'nzTabLabel',
                host: {
                    '[class.ant-tabs-tab-disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nz-tab]',
                exportAs: 'nzTab'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template #titleTpl>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #bodyTpl>
      <ng-content></ng-content>
    </ng-template>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { nzForceRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzDeselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bodyTpl', { static: true }]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['titleTpl', { static: true }]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], linkDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabLinkDirective, { static: false }]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzRouterIdentifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsInkBarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nz-tabs-ink-bar]',
                exportAs: 'nzTabsInkBar',
                host: {
                    '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                    '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { nzAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzPositionMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tabs-nav',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <div style="float:right;" *ngIf="nzTabBarExtraContent" class="ant-tabs-extra-content">
      <ng-template [ngTemplateOutlet]="nzTabBarExtraContent"></ng-template>
    </div>
    <div class="ant-tabs-nav-container" [class.ant-tabs-nav-container-scrolling]="showPaginationControls" #navContainerElement>
      <span
        class="ant-tabs-tab-prev"
        (click)="scrollHeader('before')"
        [class.ant-tabs-tab-btn-disabled]="disableScrollBefore"
        [class.ant-tabs-tab-arrow-show]="showPaginationControls"
      >
        <span class="ant-tabs-tab-prev-icon">
          <i nz-icon [nzType]="nzPositionMode === 'horizontal' ? 'left' : 'up'" class="ant-tabs-tab-prev-icon-target"></i>
        </span>
      </span>
      <span
        class="ant-tabs-tab-next"
        (click)="scrollHeader('after')"
        [class.ant-tabs-tab-btn-disabled]="disableScrollAfter"
        [class.ant-tabs-tab-arrow-show]="showPaginationControls"
      >
        <span class="ant-tabs-tab-next-icon">
          <i nz-icon [nzType]="nzPositionMode === 'horizontal' ? 'right' : 'down'" class="ant-tabs-tab-next-icon-target"></i>
        </span>
      </span>
      <div class="ant-tabs-nav-wrap">
        <div class="ant-tabs-nav-scroll" #scrollListElement>
          <div class="ant-tabs-nav" [class.ant-tabs-nav-animated]="nzAnimated" #navListElement (cdkObserveContent)="onContentChanges()">
            <div>
              <ng-content></ng-content>
            </div>
            <div
              nz-tabs-ink-bar
              [hidden]="nzHideBar"
              [nzAnimated]="nzAnimated"
              [nzPositionMode]="nzPositionMode"
              style="display: block;"
            ></div>
          </div>
        </div>
      </div>
    </div>
  `,
                host: {
                    '[class.ant-tabs-bar]': 'true',
                    '[class.ant-tabs-card-bar]': `nzType === 'card'`,
                    '[class.ant-tabs-top-bar]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom-bar]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left-bar]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right-bar]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-small-bar]': `nzSize === 'small'`,
                    '[class.ant-tabs-default-bar]': `nzSize === 'default'`,
                    '[class.ant-tabs-large-bar]': `nzSize === 'large'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzResizeService"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzOnNextClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzOnPrevClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzHideBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzShowPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzPositionMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfNzTabLabelDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzTabLabelDirective]
        }], nzTabsInkBarDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabsInkBarDirective, { static: true }]
        }], navContainerElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navContainerElement', { static: true }]
        }], navListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navListElement', { static: true }]
        }], scrollListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollListElement', { static: true }]
        }], nzTabBarExtraContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *ngIf="listOfNzTabComponent">
      <nz-tabs-nav
        role="tablist"
        tabindex="0"
        [nzSize]="nzSize"
        [nzTabPosition]="nzTabPosition"
        [nzType]="nzType"
        [nzShowPagination]="nzShowPagination"
        [nzPositionMode]="tabPositionMode"
        [nzAnimated]="inkBarAnimated"
        [ngStyle]="nzTabBarStyle"
        [nzHideBar]="nzHideAll"
        [nzTabBarExtraContent]="nzTabBarExtraContent"
        [selectedIndex]="nzSelectedIndex!"
        (nzOnNextClick)="nzOnNextClick.emit()"
        (nzOnPrevClick)="nzOnPrevClick.emit()"
      >
        <div
          nz-tab-label
          role="tab"
          [style.margin-right.px]="nzTabBarGutter"
          [class.ant-tabs-tab-active]="nzSelectedIndex == i && !nzHideAll"
          [disabled]="tab.nzDisabled"
          (click)="clickLabel(i, tab.nzDisabled)"
          *ngFor="let tab of listOfNzTabComponent; let i = index"
        >
          <ng-container *nzStringTemplateOutlet="tab.nzTitle || tab.title">{{ tab.nzTitle }}</ng-container>
        </div>
      </nz-tabs-nav>
      <div
        #tabContent
        class="ant-tabs-content"
        [class.ant-tabs-top-content]="nzTabPosition === 'top'"
        [class.ant-tabs-bottom-content]="nzTabPosition === 'bottom'"
        [class.ant-tabs-left-content]="nzTabPosition === 'left'"
        [class.ant-tabs-right-content]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [class.ant-tabs-card-content]="nzType === 'card'"
        [class.ant-tabs-content-no-animated]="!tabPaneAnimated"
        [style.margin-left.%]="tabPositionMode === 'horizontal' && tabPaneAnimated && -(nzSelectedIndex || 0) * 100"
      >
        <div
          nz-tab-body
          class="ant-tabs-tabpane"
          *ngFor="let tab of listOfNzTabComponent; let i = index"
          [active]="nzSelectedIndex == i && !nzHideAll"
          [forceRender]="tab.nzForceRender"
          [content]="tab.template || tab.content"
        ></div>
      </div>
    </ng-container>
  `,
                host: {
                    '[class.ant-tabs]': `true`,
                    '[class.ant-tabs-no-animation]': `isAnimationDisabled`,
                    '[class.ant-tabs-line]': `nzType === 'line'`,
                    '[class.ant-tabs-card]': `nzType === 'card'`,
                    '[class.ant-tabs-top]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-vertical]': `nzTabPosition === 'left' || nzTabPosition === 'right'`,
                    '[class.ant-tabs-large]': `nzSize === 'large'`,
                    '[class.ant-tabs-small]': `nzSize === 'small'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzShowPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzHideAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabBarGutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabBarStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLinkRouter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLinkExact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCanDeactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOnNextClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzOnPrevClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelectChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfNzTabComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzTabComponent]
        }], nzTabsNavComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabsNavComponent, { static: false }]
        }], tabContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabContent', { static: false }]
        }], nzTabBarExtraContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTabsModule {
}
NzTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTabsModule });
NzTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTabsModule, { declarations: function () { return [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]; }, exports: function () { return [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                exports: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \*******************************************************************************/
/*! exports provided: NzTagComponent, NzTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagComponent", function() { return NzTagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagModule", function() { return NzTagModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");









/**
 * @fileoverview added by tsickle
 * Generated from: tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
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
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color) ||
            /^(success|processing|error|default|warning)$/.test(color));
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        if (this.cacheClassName) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.cacheClassName);
        }
        if (this.presetColor) {
            this.cacheClassName = `ant-tag-${this.nzColor}`;
            this.renderer.addClass(this.elementRef.nativeElement, this.cacheClassName);
        }
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
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
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warnDeprecation"])(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 12, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcomponentHostSyntheticListener"]("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.afterAnimation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.presetColor ? null : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tag", true)("ant-tag-has-color", ctx.nzColor && !ctx.presetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked);
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzNoAnimation: "nzNoAnimation", nzColor: "nzColor" }, outputs: { nzAfterClose: "nzAfterClose", nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzAfterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzNoAnimation", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]],
                template: `
    <ng-content></ng-content>
    <i nz-icon nzType="close" *ngIf="nzMode === 'closeable'" tabindex="-1" (click)="closeTag($event)"></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '[style.background-color]': 'presetColor ? null : nzColor',
                    '[class.ant-tag]': `true`,
                    '[class.ant-tag-has-color]': `nzColor && !presetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '(click)': 'updateCheckedStatus()',
                    '(@fadeMotion.done)': 'afterAnimation($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzAfterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTagModule {
}
NzTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]; }, exports: function () { return [NzTagComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
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
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
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
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
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
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
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
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
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
        }
        // Add listeners if they haven't been added yet.
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
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
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
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
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
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
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
        }
        // Subscription to the "Transitionend" event is used as a workaround for
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
        }
        else {
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
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
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
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
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
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
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
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
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
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
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
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
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
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
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
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
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
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
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
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
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
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
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
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
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
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
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
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
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
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
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
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./src/app/products/components/product-box-tab/product-box-tab.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/products/components/product-box-tab/product-box-tab.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductBoxTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBoxTabComponent", function() { return ProductBoxTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");



class ProductBoxTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductBoxTabComponent.ɵfac = function ProductBoxTabComponent_Factory(t) { return new (t || ProductBoxTabComponent)(); };
ProductBoxTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductBoxTabComponent, selectors: [["product-box-tab"]], decls: 21, vars: 0, consts: [["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzSpan", "24"], [1, "property-name"], [1, "property-value"]], template: function ProductBoxTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"]], styles: [".property-name[_ngcontent-%COMP%] {\n  color: #000000;\n  width: 50%;\n  float: left;\n  padding: 0 5px;\n  line-height: 38px;\n}\n\n.property-value[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  line-height: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtYm94LXRhYi9wcm9kdWN0LWJveC10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1ib3gtdGFiL3Byb2R1Y3QtYm94LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWJveC10YWIvcHJvZHVjdC1ib3gtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LW5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLnByb3BlcnR5LXZhbHVlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuIiwiLnByb3BlcnR5LW5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLnByb3BlcnR5LXZhbHVlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductBoxTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-box-tab',
                templateUrl: './product-box-tab.component.html',
                styleUrls: ['./product-box-tab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-care-tab/product-care-tab.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/products/components/product-care-tab/product-care-tab.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductCareTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCareTabComponent", function() { return ProductCareTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductCareTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductCareTabComponent.ɵfac = function ProductCareTabComponent_Factory(t) { return new (t || ProductCareTabComponent)(); };
ProductCareTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCareTabComponent, selectors: [["product-care-tab"]], decls: 19, vars: 0, template: function ProductCareTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 32px;\n  list-style: circle;\n  color: #222831;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZS10YWIvcHJvZHVjdC1jYXJlLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWNhcmUtdGFiL3Byb2R1Y3QtY2FyZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWNhcmUtdGFiL3Byb2R1Y3QtY2FyZS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICAgIGNvbG9yOiAjMjIyODMxO1xuICB9XG59XG4iLCJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBjb2xvcjogIzIyMjgzMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCareTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-care-tab',
                templateUrl: './product-care-tab.component.html',
                styleUrls: ['./product-care-tab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-deatil/product-deatil.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/products/components/product-deatil/product-deatil.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDeatilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDeatilComponent", function() { return ProductDeatilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");










function ProductDeatilComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductDeatilComponent {
    constructor() {
        this.size = '10';
    }
    ngOnInit() {
    }
}
ProductDeatilComponent.ɵfac = function ProductDeatilComponent_Factory(t) { return new (t || ProductDeatilComponent)(); };
ProductDeatilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDeatilComponent, selectors: [["product-deatil"]], decls: 45, vars: 2, consts: [["nz-row", "", "nzJustify", "center"], [1, "rating"], [3, "nzColor"], ["nz-icon", "", "nzType", "star", "nzTheme", "outline"], [1, "price"], [1, "current-price"], [1, "original-price"], [1, "discount-price"], [1, "size"], ["nzButtonStyle", "solid"], ["nz-radio-button", "", "nzValue", "10"], ["nz-radio-button", "", "nzValue", "12"], ["nz-radio-button", "", "nzValue", "14"], [1, "location"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Enter Delivery Pincode"], ["suffixButton", ""], [2, "display", "block"], [1, "action"], ["nz-button", "", "nzSize", "large", "nzType", "primary"], ["nz-icon", "", "nzType", "shopping-cart", "nzTheme", "outline"], ["nz-button", "", "nzSize", "large", "nzType", "primary", "nzDanger", ""], ["nz-icon", "", "nzType", "shop", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", "nzSearch", ""]], template: function ProductDeatilComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#1b6ca8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioButtonDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"]], styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px;\n}\nsection[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\nsection[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0 14px;\n  text-decoration: line-through;\n}\nsection[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .discount-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0 14px;\n  color: #0779e4;\n}\nsection[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  color: #222831;\n  padding: 14px 0;\n}\nsection[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\nsection[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%] {\n  width: 90%;\n  border: none;\n  border-bottom: 2px #0779e4 solid;\n  margin-bottom: 8px;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%] {\n  border: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%] {\n  background: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]:focus, section[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]:hover {\n  border: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .ant-input-search[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%] {\n  background: none;\n  color: #0779e4;\n  border: none;\n}\nsection[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   span.ant-input-group-addon.ng-star-inserted[_ngcontent-%COMP%] {\n  background: none;\n}\nsection[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\nsection[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 14px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVhdGlsL3Byb2R1Y3QtZGVhdGlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVhdGlsL3Byb2R1Y3QtZGVhdGlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBRENJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDTjtBREVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBREVJO0VBQ0UsZUFBQTtBQ0FOO0FESUU7RUFDRSxnQkFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0FDRE47QURJSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FER007RUFDRSxZQUFBO0FDRFI7QURJTTtFQUNFLGdCQUFBO0FDRlI7QURLTTs7RUFFRSxZQUFBO0FDSFI7QURNTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNKUjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFVFO0VBQ0UsZ0JBQUE7QUNSSjtBRFNJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVhdGlsL3Byb2R1Y3QtZGVhdGlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIC5wcmljZSB7XG4gICAgLmN1cnJlbnQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gICAgLm9yaWdpbmFsLXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICAuZGlzY291bnQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgICAgY29sb3I6ICMwNzc5ZTQ7XG4gICAgfVxuICB9XG4gIC5yYXRpbmcge1xuICAgIGNvbG9yOiAjMjIyODMxO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgfVxuXG4gIC5zaXplIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2NhdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0LXNlYXJjaCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICMwNzc5ZTQgc29saWQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAuYW50LWlucHV0IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgICAubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hbnQtaW5wdXQ6Zm9jdXMsXG4gICAgICAuYW50LWlucHV0OmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYW50LWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDc3OWU0O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3Bhbi5hbnQtaW5wdXQtZ3JvdXAtYWRkb24ubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICAgIHdpZHRoOjIwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5zZWN0aW9uIC5wcmljZSAuY3VycmVudC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbnNlY3Rpb24gLnByaWNlIC5vcmlnaW5hbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbnNlY3Rpb24gLnByaWNlIC5kaXNjb3VudC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBjb2xvcjogIzA3NzllNDtcbn1cbnNlY3Rpb24gLnJhdGluZyB7XG4gIGNvbG9yOiAjMjIyODMxO1xuICBwYWRkaW5nOiAxNHB4IDA7XG59XG5zZWN0aW9uIC5zaXplIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbnNlY3Rpb24gLnNpemUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5zZWN0aW9uIC5sb2NhdGlvbiAuYW50LWlucHV0LXNlYXJjaCB7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICMwNzc5ZTQgc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIC5hbnQtaW5wdXQtc2VhcmNoIC5hbnQtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5zZWN0aW9uIC5sb2NhdGlvbiAuYW50LWlucHV0LXNlYXJjaCAubmctc3Rhci1pbnNlcnRlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5zZWN0aW9uIC5sb2NhdGlvbiAuYW50LWlucHV0LXNlYXJjaCAuYW50LWlucHV0OmZvY3VzLFxuc2VjdGlvbiAubG9jYXRpb24gLmFudC1pbnB1dC1zZWFyY2ggLmFudC1pbnB1dDpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIC5hbnQtaW5wdXQtc2VhcmNoIC5hbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICMwNzc5ZTQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnNlY3Rpb24gLmxvY2F0aW9uIHNwYW4uYW50LWlucHV0LWdyb3VwLWFkZG9uLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuc2VjdGlvbiAuYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbnNlY3Rpb24gLmFjdGlvbiBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDeatilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-deatil',
                templateUrl: './product-deatil.component.html',
                styleUrls: ['./product-deatil.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-description/product-description.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/products/components/product-description/product-description.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function() { return ProductDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var _product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-feature-tab/product-feature-tab.component */ "./src/app/products/components/product-feature-tab/product-feature-tab.component.ts");
/* harmony import */ var _product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-property-tab/product-property-tab.component */ "./src/app/products/components/product-property-tab/product-property-tab.component.ts");
/* harmony import */ var _product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-box-tab/product-box-tab.component */ "./src/app/products/components/product-box-tab/product-box-tab.component.ts");
/* harmony import */ var _product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-care-tab/product-care-tab.component */ "./src/app/products/components/product-care-tab/product-care-tab.component.ts");
/* harmony import */ var _product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-warranty-tab/product-warranty-tab.component */ "./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts");








class ProductDescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductDescriptionComponent.ɵfac = function ProductDescriptionComponent_Factory(t) { return new (t || ProductDescriptionComponent)(); };
ProductDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDescriptionComponent, selectors: [["product-description"]], decls: 12, vars: 0, consts: [["nzTitle", "Features"], ["nzTitle", "Properties"], ["nzTitle", "In Box"], ["nzTitle", "Care Instructions"], ["nzTitle", "Warranty"]], template: function ProductDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"], _product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_2__["ProductFeatureTabComponent"], _product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_3__["ProductPropertyTabComponent"], _product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_4__["ProductBoxTabComponent"], _product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_5__["ProductCareTabComponent"], _product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_6__["ProductWarrantyTabComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 48px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGVzY3JpcHRpb24vcHJvZHVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWRlc2NyaXB0aW9uL3Byb2R1Y3QtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXNjcmlwdGlvbi9wcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjRweCA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInNlY3Rpb24ge1xuICBwYWRkaW5nOiAyNHB4IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-description',
                templateUrl: './product-description.component.html',
                styleUrls: ['./product-description.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-dimension/product-dimension.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/products/components/product-dimension/product-dimension.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductDimensionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDimensionComponent", function() { return ProductDimensionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");







function ProductDimensionComponent_8_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", slide_r3.id)("src", slide_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductDimensionComponent_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDimensionComponent_8_ng_template_0_Template, 2, 2, "ng-template", 7);
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r3.id);
} }
const _c0 = function (a0) { return { "active-slide": a0 }; };
function ProductDimensionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDimensionComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const slide_r6 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.to(slide_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, slide_r6.id === ctx_r2.activeDimensionSlide))("src", slide_r6.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductDimensionComponent {
    constructor() {
        this.slides = [
            {
                id: 'dimension-1',
                image: 'assets/bronze_uruli/1.png',
                thumbnail: 'assets/bronze_uruli/1.png',
                type: 'image',
            },
            {
                id: 'dimension-2',
                image: 'assets/bronze_uruli/2.png',
                thumbnail: 'assets/bronze_uruli/2.png',
                type: 'image',
            },
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            lazyLoad: true,
            navSpeed: 700,
            navText: [
                '<span class="material-icons">keyboard_arrow_left</span>',
                '<span class="material-icons">keyboard_arrow_right</span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                740: {
                    items: 1,
                },
                940: {
                    items: 1,
                },
            },
            nav: true,
        };
    }
    ngOnInit() { }
    getData(data) {
        this.activeDimensionSlide = data.slides[0].id;
    }
}
ProductDimensionComponent.ɵfac = function ProductDimensionComponent_Factory(t) { return new (t || ProductDimensionComponent)(); };
ProductDimensionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDimensionComponent, selectors: [["product-dimension"]], decls: 11, vars: 3, consts: [[1, "section-header"], ["nz-row", "", "nzJustify", "center"], ["nz-col", "", "nzXs", "18", "nzSm", "18", "nzMd", "18", "nzLg", "18", "nzXl", "18"], [3, "options", "changed"], ["owlDimension", ""], [4, "ngFor", "ngForOf"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "2", "nzXl", "2", 3, "click", 4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], ["height", "300px", 3, "alt", "src"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "2", "nzXl", "2", 3, "click"], ["alt", "example", 1, "thumbnail", 3, "ngClass", "src"]], template: function ProductDimensionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "owl-carousel-o", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ProductDimensionComponent_Template_owl_carousel_o_changed_6_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDimensionComponent_8_Template, 1, 1, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDimensionComponent_div_10_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__["NzDividerComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 48px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  margin: 0 auto;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.thumbnail[_ngcontent-%COMP%]:hover, .active-slide[_ngcontent-%COMP%] {\n  border: 1px #092532 solid;\n  padding: 2px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGltZW5zaW9uL3Byb2R1Y3QtZGltZW5zaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGltZW5zaW9uL3Byb2R1Y3QtZGltZW5zaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFTTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FSO0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0hGO0FETUE7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kaW1lbnNpb24vcHJvZHVjdC1kaW1lbnNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgcGFkZGluZzogMjRweCA0OHB4O1xuXG4gIC5hbnQtY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAuYW50LWNhcmQtYm9keSB7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aHVtYm5haWwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4udGh1bWJuYWlsOmhvdmVyLFxuLmFjdGl2ZS1zbGlkZSB7XG4gIGJvcmRlcjogMXB4ICMwOTI1MzIgc29saWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcbn1cbnNlY3Rpb24gLmFudC1jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuc2VjdGlvbiAuYW50LWNhcmQgLmFudC1jYXJkLWJvZHkgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLnRodW1ibmFpbDpob3Zlcixcbi5hY3RpdmUtc2xpZGUge1xuICBib3JkZXI6IDFweCAjMDkyNTMyIHNvbGlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDimensionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-dimension',
                templateUrl: './product-dimension.component.html',
                styleUrls: ['./product-dimension.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-feature-tab/product-feature-tab.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/products/components/product-feature-tab/product-feature-tab.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductFeatureTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFeatureTabComponent", function() { return ProductFeatureTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductFeatureTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductFeatureTabComponent.ɵfac = function ProductFeatureTabComponent_Factory(t) { return new (t || ProductFeatureTabComponent)(); };
ProductFeatureTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductFeatureTabComponent, selectors: [["product-feature-tab"]], decls: 15, vars: 0, template: function ProductFeatureTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 32px;\n  list-style: circle;\n  color: #222831;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZmVhdHVyZS10YWIvcHJvZHVjdC1mZWF0dXJlLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWZlYXR1cmUtdGFiL3Byb2R1Y3QtZmVhdHVyZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWZlYXR1cmUtdGFiL3Byb2R1Y3QtZmVhdHVyZS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICAgIGNvbG9yOiAjMjIyODMxO1xuICB9XG59XG4iLCJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBjb2xvcjogIzIyMjgzMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFeatureTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-feature-tab',
                templateUrl: './product-feature-tab.component.html',
                styleUrls: ['./product-feature-tab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-property-tab/product-property-tab.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/products/components/product-property-tab/product-property-tab.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductPropertyTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPropertyTabComponent", function() { return ProductPropertyTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");



class ProductPropertyTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductPropertyTabComponent.ɵfac = function ProductPropertyTabComponent_Factory(t) { return new (t || ProductPropertyTabComponent)(); };
ProductPropertyTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductPropertyTabComponent, selectors: [["product-property-tab"]], decls: 71, vars: 0, consts: [["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzMd", "8", "nzLg", "8", "nzXl", "8"], [1, "property-name"], [1, "property-value"]], template: function ProductPropertyTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"]], styles: [".property-name[_ngcontent-%COMP%] {\n  color: #000000;\n  width: 47%;\n  float: left;\n  padding: 0 5px;\n  line-height: 38px;\n}\n\n.property-value[_ngcontent-%COMP%] {\n  float: left;\n  width: 53%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtcHJvcGVydHktdGFiL3Byb2R1Y3QtcHJvcGVydHktdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtcHJvcGVydHktdGFiL3Byb2R1Y3QtcHJvcGVydHktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LXByb3BlcnR5LXRhYi9wcm9kdWN0LXByb3BlcnR5LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1uYW1lIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB3aWR0aDogNDclO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4ucHJvcGVydHktdmFsdWUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MyU7XG59IiwiLnByb3BlcnR5LW5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDQ3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLnByb3BlcnR5LXZhbHVlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MyU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPropertyTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-property-tab',
                templateUrl: './product-property-tab.component.html',
                styleUrls: ['./product-property-tab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-resource/product-resource.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/products/components/product-resource/product-resource.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResourceComponent", function() { return ProductResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");











function ProductResourceComponent_3_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", slide_r3.id)("src", slide_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductResourceComponent_3_ng_template_0_iframe_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 13);
} }
function ProductResourceComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r3.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r3.type === "video");
} }
function ProductResourceComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductResourceComponent_3_ng_template_0_Template, 8, 2, "ng-template", 5);
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r3.id);
} }
const _c0 = function (a0) { return { "active-slide": a0 }; };
function ProductResourceComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductResourceComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const slide_r9 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.to(slide_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, slide_r9.id === ctx_r2.activeSlide))("src", slide_r9.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductResourceComponent {
    constructor() {
        this.slides = [
            {
                id: 'product-1',
                image: 'assets/bronze_uruli/1.png',
                thumbnail: 'assets/bronze_uruli/1.png',
                type: 'image'
            },
            {
                id: 'product-2',
                image: 'assets/bronze_uruli/2.png',
                thumbnail: 'assets/bronze_uruli/2.png',
                type: 'image'
            },
            {
                id: 'product-3',
                image: 'assets/bronze_uruli/3.png',
                thumbnail: 'assets/bronze_uruli/3.png',
                type: 'image'
            },
            {
                id: 'product-4',
                image: 'https://www.youtube.com/watch?v=JpxsRwnRwCQ',
                thumbnail: 'assets/bronze_uruli/youtube.png',
                type: 'video'
            }
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            lazyLoad: true,
            navSpeed: 700,
            navText: [
                '<span class="material-icons">keyboard_arrow_left</span>',
                '<span class="material-icons">keyboard_arrow_right</span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                740: {
                    items: 1,
                },
                940: {
                    items: 1,
                },
            },
            nav: true,
        };
        this.activeSlide = this.slides[0].id;
    }
    ngOnInit() { }
    getData(data) {
        this.activeSlide = data.slides[0].id;
        console.log(this.activeSlide);
    }
}
ProductResourceComponent.ɵfac = function ProductResourceComponent_Factory(t) { return new (t || ProductResourceComponent)(); };
ProductResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductResourceComponent, selectors: [["product-resource"]], decls: 6, vars: 3, consts: [[3, "options", "changed"], ["owlCar", ""], [4, "ngFor", "ngForOf"], ["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "4", "nzXl", "4", 3, "click", 4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], ["height", "280px", 3, "alt", "src", 4, "ngIf"], ["height", "280px", "style", "width:100%", "frameborder", "0", "src", "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0", 4, "ngIf"], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Add to wishlist", 1, "wishlist"], ["nz-icon", "", "nzType", "heart"], ["nz-button", "", "nzType", "default", "nz-tooltip", "", "nzTooltipTitle", "Add to compare", 1, "compare"], ["nz-icon", "", "nzType", "appstore-add", "nzTheme", "outline"], ["height", "280px", 3, "alt", "src"], ["height", "280px", "frameborder", "0", "src", "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0", 2, "width", "100%"], ["nz-col", "", "nzXs", "8", "nzSm", "12", "nzMd", "6", "nzLg", "4", "nzXl", "4", 3, "click"], ["alt", "example", 1, "thumbnail", 3, "ngClass", "src"]], template: function ProductResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function ProductResourceComponent_Template_owl_carousel_o_changed_1_listener($event) { return ctx.getData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductResourceComponent_3_Template, 1, 1, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductResourceComponent_div_5_Template, 3, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["section[_ngcontent-%COMP%] {\n  padding: 24px 48px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n}\nsection[_ngcontent-%COMP%]   .ant-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]   .wishlist[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\nsection[_ngcontent-%COMP%]   .compare[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 70px;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.thumbnail[_ngcontent-%COMP%]:hover, .active-slide[_ngcontent-%COMP%] {\n  border: 1px #092532 solid;\n  padding: 2px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtcmVzb3VyY2UvcHJvZHVjdC1yZXNvdXJjZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LXJlc291cmNlL3Byb2R1Y3QtcmVzb3VyY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQVI7QURLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0pKO0FEUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1yZXNvdXJjZS9wcm9kdWN0LXJlc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcblxuICAuYW50LWNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLmFudC1jYXJkLWJvZHkge1xuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53aXNobGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxuXG4gIC5jb21wYXJlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiA3MHB4O1xuICB9XG59XG5cbi50aHVtYm5haWwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4udGh1bWJuYWlsOmhvdmVyLFxuLmFjdGl2ZS1zbGlkZSB7XG4gIGJvcmRlcjogMXB4ICMwOTI1MzIgc29saWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwic2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcbn1cbnNlY3Rpb24gLmFudC1jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuc2VjdGlvbiAuYW50LWNhcmQgLmFudC1jYXJkLWJvZHkgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuc2VjdGlvbiAud2lzaGxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5zZWN0aW9uIC5jb21wYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA3MHB4O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLnRodW1ibmFpbDpob3Zlcixcbi5hY3RpdmUtc2xpZGUge1xuICBib3JkZXI6IDFweCAjMDkyNTMyIHNvbGlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-resource',
                templateUrl: './product-resource.component.html',
                styleUrls: ['./product-resource.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-view/product-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/product-view/product-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-resource/product-resource.component */ "./src/app/products/components/product-resource/product-resource.component.ts");
/* harmony import */ var _product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-deatil/product-deatil.component */ "./src/app/products/components/product-deatil/product-deatil.component.ts");
/* harmony import */ var _product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-dimension/product-dimension.component */ "./src/app/products/components/product-dimension/product-dimension.component.ts");
/* harmony import */ var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-description/product-description.component */ "./src/app/products/components/product-description/product-description.component.ts");
/* harmony import */ var _landing_page_components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../landing-page/components/product-famous/product-famous.component */ "./src/app/landing-page/components/product-famous/product-famous.component.ts");
/* harmony import */ var _landing_page_components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../landing-page/components/product-recommended/product-recommended.component */ "./src/app/landing-page/components/product-recommended/product-recommended.component.ts");
/* harmony import */ var _landing_page_components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../landing-page/components/story-list/story-list.component */ "./src/app/landing-page/components/story-list/story-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











class ProductViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductViewComponent.ɵfac = function ProductViewComponent_Factory(t) { return new (t || ProductViewComponent)(); };
ProductViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductViewComponent, selectors: [["app-product-view"]], decls: 14, vars: 3, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzXs", "24", "nzSm", "24", "nzMd", "12", "nzLg", "12", "nzXl", "12"]], template: function ProductViewComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "BRASS KALAM WITH TIN COAT/PONGAL KALAM/BRASS SOMBU"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], _product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_2__["ProductResourceComponent"], _product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_3__["ProductDeatilComponent"], _product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_4__["ProductDimensionComponent"], _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_5__["ProductDescriptionComponent"], _landing_page_components_product_famous_product_famous_component__WEBPACK_IMPORTED_MODULE_6__["ProductFamousComponent"], _landing_page_components_product_recommended_product_recommended_component__WEBPACK_IMPORTED_MODULE_7__["ProductRecommendedComponent"], _landing_page_components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_8__["StoryListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  text-transform: capitalize;\n}\n\n@media (max-width: 575.98px) {\n  h1[_ngcontent-%COMP%] {\n    margin-top: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC12aWV3L3Byb2R1Y3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxnQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtdmlldy9wcm9kdWN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIH1cbiAgfSIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-view',
                templateUrl: './product-view.component.html',
                styleUrls: ['./product-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductWarrantyTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWarrantyTabComponent", function() { return ProductWarrantyTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductWarrantyTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductWarrantyTabComponent.ɵfac = function ProductWarrantyTabComponent_Factory(t) { return new (t || ProductWarrantyTabComponent)(); };
ProductWarrantyTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductWarrantyTabComponent, selectors: [["product-warranty-tab"]], decls: 7, vars: 0, template: function ProductWarrantyTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 32px;\n  list-style: circle;\n  color: #222831;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbWFubmFyL21hbm5hci1hcHAvc3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtd2FycmFudHktdGFiL3Byb2R1Y3Qtd2FycmFudHktdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3Qtd2FycmFudHktdGFiL3Byb2R1Y3Qtd2FycmFudHktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC13YXJyYW50eS10YWIvcHJvZHVjdC13YXJyYW50eS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaSB7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcbiAgICAgIGNvbG9yOiAjMjIyODMxO1xuICAgIH1cbiAgfVxuICAiLCJ1bCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xuICBjb2xvcjogIzIyMjgzMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductWarrantyTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-warranty-tab',
                templateUrl: './product-warranty-tab.component.html',
                styleUrls: ['./product-warranty-tab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-view/product-view.component */ "./src/app/products/components/product-view/product-view.component.ts");





const routes = [
    {
        path: 'product-view',
        component: _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_2__["ProductViewComponent"]
    },
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-view/product-view.component */ "./src/app/products/components/product-view/product-view.component.ts");
/* harmony import */ var _components_product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product-dimension/product-dimension.component */ "./src/app/products/components/product-dimension/product-dimension.component.ts");
/* harmony import */ var _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/product-description/product-description.component */ "./src/app/products/components/product-description/product-description.component.ts");
/* harmony import */ var _components_product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/product-feature-tab/product-feature-tab.component */ "./src/app/products/components/product-feature-tab/product-feature-tab.component.ts");
/* harmony import */ var _components_product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product-property-tab/product-property-tab.component */ "./src/app/products/components/product-property-tab/product-property-tab.component.ts");
/* harmony import */ var _components_product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/product-care-tab/product-care-tab.component */ "./src/app/products/components/product-care-tab/product-care-tab.component.ts");
/* harmony import */ var _components_product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/product-warranty-tab/product-warranty-tab.component */ "./src/app/products/components/product-warranty-tab/product-warranty-tab.component.ts");
/* harmony import */ var _components_product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/product-box-tab/product-box-tab.component */ "./src/app/products/components/product-box-tab/product-box-tab.component.ts");
/* harmony import */ var _components_product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/product-deatil/product-deatil.component */ "./src/app/products/components/product-deatil/product-deatil.component.ts");
/* harmony import */ var _components_product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/product-resource/product-resource.component */ "./src/app/products/components/product-resource/product-resource.component.ts");
/* harmony import */ var _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../landing-page/landing-page.module */ "./src/app/landing-page/landing-page.module.ts");




























class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_15__["ProductsRoutingModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__["NzRadioModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
            _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__["LandingPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_16__["ProductViewComponent"],
        _components_product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_17__["ProductDimensionComponent"],
        _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_18__["ProductDescriptionComponent"],
        _components_product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_19__["ProductFeatureTabComponent"],
        _components_product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_20__["ProductPropertyTabComponent"],
        _components_product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_21__["ProductCareTabComponent"],
        _components_product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_22__["ProductWarrantyTabComponent"],
        _components_product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_23__["ProductBoxTabComponent"],
        _components_product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_24__["ProductDeatilComponent"],
        _components_product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_25__["ProductResourceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_15__["ProductsRoutingModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__["NzRadioModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
        _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__["LandingPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_product_view_product_view_component__WEBPACK_IMPORTED_MODULE_16__["ProductViewComponent"],
                    _components_product_dimension_product_dimension_component__WEBPACK_IMPORTED_MODULE_17__["ProductDimensionComponent"],
                    _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_18__["ProductDescriptionComponent"],
                    _components_product_feature_tab_product_feature_tab_component__WEBPACK_IMPORTED_MODULE_19__["ProductFeatureTabComponent"],
                    _components_product_property_tab_product_property_tab_component__WEBPACK_IMPORTED_MODULE_20__["ProductPropertyTabComponent"],
                    _components_product_care_tab_product_care_tab_component__WEBPACK_IMPORTED_MODULE_21__["ProductCareTabComponent"],
                    _components_product_warranty_tab_product_warranty_tab_component__WEBPACK_IMPORTED_MODULE_22__["ProductWarrantyTabComponent"],
                    _components_product_box_tab_product_box_tab_component__WEBPACK_IMPORTED_MODULE_23__["ProductBoxTabComponent"],
                    _components_product_deatil_product_deatil_component__WEBPACK_IMPORTED_MODULE_24__["ProductDeatilComponent"],
                    _components_product_resource_product_resource_component__WEBPACK_IMPORTED_MODULE_25__["ProductResourceComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_15__["ProductsRoutingModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabsModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__["NzRadioModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
                    _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_26__["LandingPageModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map