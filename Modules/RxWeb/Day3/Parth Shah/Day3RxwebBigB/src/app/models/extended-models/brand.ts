import {BrandBase} from '../database-models/brand-base';
import {CategoryBase} from '../database-models/category-base';
import {ProductBase} from '../database-models/product-base';
//Generated Imports
export class Brand extends BrandBase 
{




//#region Generated Reference Properties
//#region categoryIDNavigation Prop
        categoryIDNavigation : CategoryBase;
//#endregion categoryIDNavigation Prop

//#region product Prop
        product : ProductBase[];
//#endregion product Prop

//#endregion Generated Reference Properties
}