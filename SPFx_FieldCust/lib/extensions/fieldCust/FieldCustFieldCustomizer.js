var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import { BaseFieldCustomizer } from '@microsoft/sp-listview-extensibility';
import * as strings from 'FieldCustFieldCustomizerStrings';
import styles from './FieldCustFieldCustomizer.module.scss';
var LOG_SOURCE = 'FieldCustFieldCustomizer';
var FieldCustFieldCustomizer = (function (_super) {
    __extends(FieldCustFieldCustomizer, _super);
    function FieldCustFieldCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldCustFieldCustomizer.prototype.onInit = function () {
        // Add your custom initialization to this method.  The framework will wait
        // for the returned promise to resolve before firing any BaseFieldCustomizer events.
        Log.info(LOG_SOURCE, 'Activated FieldCustFieldCustomizer with properties:');
        Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
        Log.info(LOG_SOURCE, "The following string should be equal: \"FieldCustFieldCustomizer\" and \"" + strings.Title + "\"");
        return Promise.resolve();
    };
    FieldCustFieldCustomizer.prototype.onRenderCell = function (event) {
        // Use this method to perform your custom cell rendering.
        // const text: string = `${this.properties.sampleText}: ${event.fieldValue}`;
        // event.domElement.innerText = text;
        event.domElement.classList.add(styles.cell);
        event.domElement.innerHTML = "\n   <div class='" + styles.FieldCust + "'>\n       <div class='" + styles.full + "'>\n       <div style='width: " + event.fieldValue + "px; background:#0094ff; color:#c0c0c0'>\n           &nbsp; " + event.fieldValue + "\n       </div>\n       </div>\n   </div>";
    };
    FieldCustFieldCustomizer.prototype.onDisposeCell = function (event) {
        // This method should be used to free any resources that were allocated during rendering.
        // For example, if your onRenderCell() called ReactDOM.render(), then you should
        // call ReactDOM.unmountComponentAtNode() here.
        _super.prototype.onDisposeCell.call(this, event);
    };
    __decorate([
        override
    ], FieldCustFieldCustomizer.prototype, "onInit", null);
    __decorate([
        override
    ], FieldCustFieldCustomizer.prototype, "onRenderCell", null);
    __decorate([
        override
    ], FieldCustFieldCustomizer.prototype, "onDisposeCell", null);
    return FieldCustFieldCustomizer;
}(BaseFieldCustomizer));
export default FieldCustFieldCustomizer;

//# sourceMappingURL=FieldCustFieldCustomizer.js.map
