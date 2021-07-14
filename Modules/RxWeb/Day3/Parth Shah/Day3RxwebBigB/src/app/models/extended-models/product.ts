import {ProductBase} from '../database-models/product-base';
import {BrandBase} from '../database-models/brand-base';
import {CartBase} from '../database-models/cart-base';
import {SaleBase} from '../database-models/sale-base';
//Generated Imports
export class Product extends ProductBase 
{




//#region Generated Reference Properties
//#region brand Prop
        brand : BrandBase;
//#endregion brand Prop

//#region cart Prop
        cart : CartBase[];
//#endregion cart Prop

//#region sales Prop
        sales : SaleBase[];
//#endregion sales Prop

//#endregion Generated Reference Properties
}