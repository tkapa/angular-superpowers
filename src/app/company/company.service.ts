import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  constructor(private readonly httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(`${this.API_BASE}/company`)
      .pipe(catchError(this.errorHandler<Company[]>));
  }

  deleteCompany(id: number): Observable<Company> {
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${id}`)
      .pipe(catchError(this.errorHandler<Company>));
  }

  errorHandler<T>(error: Error): Observable<T> {
    console.error('ERROR IN COMPANY SERVICE', error);
    return new Observable<T>();
  }
}
