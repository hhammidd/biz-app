import {RegionsDto} from './RegionsDto';
import {ProvinceDto} from './ProvinceDto';
import {ComuneDto} from './ComuneDto';

export class SalePointGeoBeta {
  id: number;
  regions: RegionsDto[];
  provinces: ProvinceDto[];
  comunes: ComuneDto[];
  market: string;
  field: string;
}
