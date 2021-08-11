import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '@app/common';

@Injectable()
export class CountryService {
  private static readonly BASE_URL = 'https://restcountries.eu/rest/v2'

  constructor(private readonly httpClient: HttpClient) {}

  getCountryList$(regionCode: string): Observable<object[]> {
    return this.httpClient.get<object[]>(`${CountryService.BASE_URL}/region/${regionCode}`);
  }

  getCountryDetails$(alpha2Code: string): Observable<Country> {
    return this.httpClient.get<Country>(`${CountryService.BASE_URL}/alpha/${alpha2Code}`);
  }
}
