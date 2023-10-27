import { FileHandle } from "./file-handle-model"

export interface Package{
    packageId : any,
    packageName : string,
    description : string,
    packageDiscountedPrice : number,
    packageActualPrice : number,
    packageImages : FileHandle[]
}