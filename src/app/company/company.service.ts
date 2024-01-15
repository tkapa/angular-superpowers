import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}

  getCompanies(): Company[] {
    return [
      {
        name: 'Company One',
        email: 'example@email.com',
        phone: '555-555-5555',
      },
      {
        name: 'Company 2',
        email: 'example@email.com',
        phone: '555-444-5555',
      },
      {
        name: 'Company 3',
        email: 'example@email.com',
        phone: '555-666-5555',
      },
    ];
  }
}
