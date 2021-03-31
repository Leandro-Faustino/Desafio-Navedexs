export interface INaversDTO {
  name: string;
  user_id: string;
  birthDate: Date;
  admission_date: Date;
  job_role: string;
  projects: [];
}
export interface IFilterNavers {
  name?: string;
  id?: string;
  user_id?: string;
}
