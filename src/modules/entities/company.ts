export class CompanyEntity {
  id: string;
  name: string;
  date: string;

  constructor(company: CompanyEntity) {
    this.id = company.id;
    this.name = company.name;
    this.date = company.date;
  }
}
