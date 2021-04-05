export default interface IProjectsDTO {
  user_id: string;
  name: string;
  navers: any;
}
export interface IFindProject {
  where: {
    id?: string;
    name?: string;
    user_id?: string;
    navers?: string[];
  };
}
