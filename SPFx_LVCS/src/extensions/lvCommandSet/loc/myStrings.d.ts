declare interface ILvCommandSetCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'LvCommandSetCommandSetStrings' {
  const strings: ILvCommandSetCommandSetStrings;
  export = strings;
}
