import {CityBase} from '../database-models/city-base';
import {CountryBase} from '../database-models/country-base';
import {SaleBase} from '../database-models/sale-base';
//Generated Imports
export class City extends CityBase 
{




//#region Generated Reference Properties
//#region country_IDNavigation Prop
        country_IDNavigation : CountryBase;
//#endregion country_IDNavigation Prop

//#region sales Prop
        sales : SaleBase[];
//#endregion sales Prop

//#endregion Generated Reference Properties
}