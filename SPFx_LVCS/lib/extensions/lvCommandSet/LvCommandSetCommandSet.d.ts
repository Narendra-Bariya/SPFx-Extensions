import { BaseListViewCommandSet, IListViewCommandSetListViewUpdatedParameters, IListViewCommandSetExecuteEventParameters } from '@microsoft/sp-listview-extensibility';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ILvCommandSetCommandSetProperties {
    ReminderEmail: string;
    sampleTextTwo: string;
}
export default class LvCommandSetCommandSet extends BaseListViewCommandSet<ILvCommandSetCommandSetProperties> {
    onInit(): Promise<void>;
    onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void;
    onExecute(event: IListViewCommandSetExecuteEventParameters): void;
}
