import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,PlaceholderContent,PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'SpNavigationApplicationCustomizerStrings';

import {escape} from '@microsoft/sp-lodash-subset';
import styles from './SpNavigationApplicationCustomizer.module.scss';

const LOG_SOURCE: string = 'SpNavigationApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpNavigationApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  Top : string;
  Bottom : string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpNavigationApplicationCustomizer
  extends BaseApplicationCustomizer<ISpNavigationApplicationCustomizerProperties> {

    private _topPlaceholder : PlaceholderContent | undefined;
    private _bottomPlaceholder : PlaceholderContent | undefined;
    @override
    public onInit(): Promise<void> {
      Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
  
      this.context.placeholderProvider.changedEvent.add(this,this._renderPlaceHolders);
      this._renderPlaceHolders();
  
      // let message: string = this.properties.testMessage;
      // if (!message) {
      //   message = '(No properties were provided.)';
      // }
  
      // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
  
      return Promise.resolve<void>();
    }
  
    private _renderPlaceHolders() : void{
          console.log('Available placeHolders: ',
          this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(','));
        
          if(!this._topPlaceholder){
            this._topPlaceholder =  this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top,{onDispose : this._onDispose});
            if(!this._topPlaceholder){
              console.error('PlaceHoder top was not found..!');
              return;
            }
            if(this.properties){
              let topstring : string = this.properties.Top;
              if(!topstring){
                topstring = '(Top Property was not defined)';
              }
              if(this._topPlaceholder.domElement){
                this._topPlaceholder.domElement.innerHTML = `
                <div class="${styles.app}">
                  <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.top}">
                    <image class="${styles.img}" src="${this.context.pageContext.web.serverRelativeUrl}/SiteAssets/PSSPL.png"></img>
                    <ul id="zz11_RootAspMenu" class="root ms-core-listMenu-root static">
                    <li class="static selected"><a target="_blank" href="https://github.com/Narendra-Bariya/SPFx-Extensions/">Payroll Application</a></li>
                    <li class="static "><a target="_blank" href="https://github.com/Narendra-Bariya/SPFx-Extensions/">Access eLibrary</a></li>
                    <li class="static "><a target="_blank" href="https://github.com/Narendra-Bariya/SPFx-Extensions/">Internal Trainings</a></li>
                    <li class="static "><a target="_blank" href="https://github.com/Narendra-Bariya/SPFx-Extensions/">Developers Flow</a></li>
                    </ul>
                    // <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i>
                    // ${escape(topstring)}
                    </br>
                  </div>
                </div>`;
              }
           }
          }
  
          if(!this._bottomPlaceholder){
            this._bottomPlaceholder =  this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom,{onDispose : this._onDispose});
            if(!this._bottomPlaceholder){
              console.error('PlaceHoder top was not found..!');
              return;
            }
            if(this.properties){
              let bottomstring : string = this.properties.Bottom;
              if(!bottomstring){
                bottomstring = '(Bottom Property was not defined)';
              }
              if(this._bottomPlaceholder.domElement){
                this._bottomPlaceholder.domElement.innerHTML = `
                <div class="${styles.app}">
                  <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.bottom}">
                    <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i>
                    ${escape(bottomstring)}
                    </br>
                  </div>
                </div>`;
              }
           }
          }
    }
  
    private _onDispose() : void {
      console.log("Dispose was Called");
    }
}
