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
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'SpNavigationApplicationCustomizerStrings';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './SpNavigationApplicationCustomizer.module.scss';
var LOG_SOURCE = 'SpNavigationApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var SpNavigationApplicationCustomizer = (function (_super) {
    __extends(SpNavigationApplicationCustomizer, _super);
    function SpNavigationApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpNavigationApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        this._renderPlaceHolders();
        // let message: string = this.properties.testMessage;
        // if (!message) {
        //   message = '(No properties were provided.)';
        // }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        return Promise.resolve();
    };
    SpNavigationApplicationCustomizer.prototype._renderPlaceHolders = function () {
        console.log('Available placeHolders: ', this.context.placeholderProvider.placeholderNames.map(function (name) { return PlaceholderName[name]; }).join(','));
        if (!this._topPlaceholder) {
            this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._onDispose });
            if (!this._topPlaceholder) {
                console.error('PlaceHoder top was not found..!');
                return;
            }
            if (this.properties) {
                var topstring = this.properties.Top;
                if (!topstring) {
                    topstring = '(Top Property was not defined)';
                }
                if (this._topPlaceholder.domElement) {
                    this._topPlaceholder.domElement.innerHTML = "\n                <div class=\"" + styles.app + "\">\n                  <div class=\"ms-bgColor-themeDark ms-fontColor-white " + styles.top + "\">\n                    <image class=\"" + styles.img + "\" src=\"" + this.context.pageContext.web.serverRelativeUrl + "/SiteAssets/PSSPL.png\"></img>\n                    <ul id=\"zz11_RootAspMenu\" class=\"root ms-core-listMenu-root static\">\n                    <li class=\"static selected\"><a target=\"_blank\" href=\"http://payroll.prakashsoftware.in\">Payroll Application</a></li>\n                    <li class=\"static \"><a target=\"_blank\" href=\"https://prakashinfotech.sharepoint.com/sites/Intranet/DevCenter/eLibrary/Forms/AllItems.aspx\">Access eLibrary</a></li>\n                    <li class=\"static \"><a target=\"_blank\" href=\"https://prakashinfotech.sharepoint.com/sites/Intranet/DevCenter/InternalTrainings/Forms/AllItems.aspx\">Internal Trainings</a></li>\n                    <li class=\"static \"><a target=\"_blank\" href=\"https://prakashinfotech.sharepoint.com/sites/Intranet/DevCenter/Lists/PssplDevFlow/AllItems.aspx\">Psspl Developers Flow</a></li>\n                    </ul>\n                    // <i class=\"ms-Icon ms-Icon--Info\" aria-hidden=\"true\"></i>\n                    // " + escape(topstring) + "\n                    </br>\n                  </div>\n                </div>";
                }
            }
        }
        if (!this._bottomPlaceholder) {
            this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });
            if (!this._bottomPlaceholder) {
                console.error('PlaceHoder top was not found..!');
                return;
            }
            if (this.properties) {
                var bottomstring = this.properties.Bottom;
                if (!bottomstring) {
                    bottomstring = '(Bottom Property was not defined)';
                }
                if (this._bottomPlaceholder.domElement) {
                    this._bottomPlaceholder.domElement.innerHTML = "\n                <div class=\"" + styles.app + "\">\n                  <div class=\"ms-bgColor-themeDark ms-fontColor-white " + styles.bottom + "\">\n                    <i class=\"ms-Icon ms-Icon--Info\" aria-hidden=\"true\"></i>\n                    " + escape(bottomstring) + "\n                    </br>\n                  </div>\n                </div>";
                }
            }
        }
    };
    SpNavigationApplicationCustomizer.prototype._onDispose = function () {
        console.log("Dispose was Called");
    };
    __decorate([
        override
    ], SpNavigationApplicationCustomizer.prototype, "onInit", null);
    return SpNavigationApplicationCustomizer;
}(BaseApplicationCustomizer));
export default SpNavigationApplicationCustomizer;

//# sourceMappingURL=SpNavigationApplicationCustomizer.js.map
