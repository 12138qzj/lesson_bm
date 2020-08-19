export enum methodEnum{
    log,info,warn,debug,error
}

export type EnumKeys=keyof typeof methodEnum;

export type methodEnumInterface = {
    [key in EnumKeys]:(...args:any[])=>void
}
export interface LogInfos{
    //logType 将对象值设置为 String 并且只能EnumKeys 中的字符串
    logType:EnumKeys,
    infos:any


}