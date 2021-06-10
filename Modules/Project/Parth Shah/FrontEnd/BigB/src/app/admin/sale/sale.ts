export interface Sale{
    id : string;
    productId :string;
    productQty: number;
    discount: string;
    grossAmount:number;
    invoiceDate:Date;
    productPrice:number;
    custId:string;
    shippedAddress:string;
    taxes:number;
    invoiceAmount:number;
    }