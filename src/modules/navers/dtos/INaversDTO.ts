export interface INaversDTO {
  name: string;
  users_id: string;
  birthDate: Date;
  admission_date: Date;
  job_role: string;
  projects: [];
}
export interface IFilterNavers {
  name?: string;
  id?: string;
  users_id?: string;
}
