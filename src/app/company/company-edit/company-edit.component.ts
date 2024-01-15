import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Company } from '../company';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent {
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly companyService: CompanyService,
    private readonly router: Router
  ) {}

  f() {
    return this.formGroup.controls;
  }

  saveCompany() {
    if (!this.formGroup.valid) {
      return;
    }

    var company = this.formGroup.value as Company;

    this.companyService.addCompany(company).subscribe(() => {
      this.router.navigate(['/company/list']);
    });
  }
}
