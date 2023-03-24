import { Customer } from "./customer.model";

export interface Auth {
    result : CustomerWithToken
    statusCode : number
}

interface CustomerWithToken {
    token : string;
    Customer : Customer
}