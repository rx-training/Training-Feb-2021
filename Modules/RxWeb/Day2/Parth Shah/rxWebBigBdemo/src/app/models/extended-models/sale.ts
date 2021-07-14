import {SaleBase} from '../database-models/sale-base';
import {CityBase} from '../database-models/city-base';
import {CountryBase} from '../database-models/country-base';
import {CustomerBase} from '../database-models/customer-base';
import {ProductBase} from '../database-models/product-base';
//Generated Imports
export class Sale extends SaleBase 
{




//#region Generated Reference Properties
//#region city Prop
        city : CityBase;
//#endregion city Prop

//#region country Prop
        country : CountryBase;
//#endregion country Prop

//#region cust Prop
        cust : CustomerBase;
//#endregion cust Prop

//#region productIDNavigation Prop
        productIDNavigation : ProductBase;
//#endregion productIDNavigation Prop

//#endregion Generated Reference Properties
}