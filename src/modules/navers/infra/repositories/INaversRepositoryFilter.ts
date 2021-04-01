import { INaversNoExistDTO } from '@modules/navers/dtos/INaversNoExistDTO';
import Navers from '../typeorm/entities/Navers';

export default interface INaversRepositoryFilter {
  searchNaver(data: INaversNoExistDTO): Promise<Navers | undefined>;
  findNaver(data: INaversNoExistDTO): Promise<Navers | undefined>;
  index(data: INaversNoExistDTO): Promise<Navers[] | undefined>;
  findOneNaver(data: INaversNoExistDTO): Promise<Navers | undefined>;
  delete(id: INaversNoExistDTO): Promise<void>;
}
