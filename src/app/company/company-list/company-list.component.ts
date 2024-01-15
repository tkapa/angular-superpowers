import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  companies$!: Observable<Company[]>;

  constructor(private readonly companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(() => {
      console.log('Company deleted successfully');
      this.getCompanies();
    });
  }
}
