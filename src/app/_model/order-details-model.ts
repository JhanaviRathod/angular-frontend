import { OrderQuantity } from "./order-quantity-model";

export interface OrderDetails{
     fullname : string;
     fullAddress : string;
    contactNumber : string;
    alternatecontactNumber : string;
    orderPackageQuantityList : OrderQuantity[];
}