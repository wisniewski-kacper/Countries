import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../../../../common';
import {map} from "rxjs/operators";

@Injectable()
export class CountryService {
  private static readonly BASE_URL = 'https://restcountries.eu/rest/v2'

  constructor(private readonly httpClient: HttpClient) {}

  getCountryList$(regionCode: string): Observable<object[]> {
    return this.httpClient.get<object[]>(`${CountryService.BASE_URL}/region/${regionCode}`);
  }

  getCountryDetails$(countryName: string): Observable<Country> {
    return this.httpClient.get<object>(`${CountryService.BASE_URL}/name/${countryName}`).pipe(
        map(response => (response as Array<Country>)[0])
    );
  }
}
