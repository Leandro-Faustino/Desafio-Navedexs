export default interface IProjectsDTO {
  user_id: string;
  name: string;
}
export interface IFindProject {
  where: {
    id?: string;
    name?: string;
    user_id?: string;
  };
}
