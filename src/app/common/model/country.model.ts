import {Currency} from './currency.model';
import {Language} from './language.model';

export interface Country {
  name: string,
  alpha2Code: string,
  capital: string
  population: number,
  area: number
  altSpellings: string[],
  region: string,
  subregion: string,
  flag: string,
  currencies: Currency[],
  languages: Language[]
}
