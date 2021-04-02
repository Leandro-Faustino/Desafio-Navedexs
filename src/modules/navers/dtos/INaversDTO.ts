export interface INaversDTO {
  name: string;
  birthDate: Date;
  admission_date: Date;
  job_role: string;
  user_id: string;
  projects: any;
}
export interface IFindNaversDTO {
  where: {
    user_id?: string;
    name?: string;
    id?: string;
  };
}
