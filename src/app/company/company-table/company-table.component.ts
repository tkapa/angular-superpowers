import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyTableComponent {
  @Input({ required: true })
  companies: Company[] = [];

  @Output()
  deleteCompanyClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  deleteCompany(company: Company) {
    this.deleteCompanyClicked.emit(company.id);
  }
}
