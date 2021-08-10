import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CountryService {
  private static readonly BASE_URL = 'https://restcountries.eu/rest/v2'

  constructor(private readonly httpClient: HttpClient) {}

  getContractList$(regionCode: string): Observable<object[]> {
    return this.httpClient.get<object[]>(`${CountryService.BASE_URL}/region/${regionCode}`);
  }
}
