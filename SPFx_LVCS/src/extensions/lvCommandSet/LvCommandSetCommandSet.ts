import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'LvCommandSetCommandSetStrings';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ILvCommandSetCommandSetProperties {
  // This is an example; replace with your own properties
  ReminderEmail: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'LvCommandSetCommandSet';

export default class LvCommandSetCommandSet extends BaseListViewCommandSet<ILvCommandSetCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized LvCommandSetCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    if (compareOneCommand) {
      // This command should be hidden unless exactly one row is selected.
      compareOneCommand.visible = event.selectedRows.length === 1;
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
        var d = event.selectedRows[0].getValueByName('Author')[0].email;
        window.location.href = "mailto:"+ d +"?subject="+ this.properties.ReminderEmail +"&body=this is Remaider mail for "+ event.selectedRows[0].getValueByName('Title')+" ";
        break;
      case 'COMMAND_2':
           Dialog.alert(`${this.properties.sampleTextTwo}`);
        break;
      default:
        throw new Error('Unknown command');
    }
  }
}
