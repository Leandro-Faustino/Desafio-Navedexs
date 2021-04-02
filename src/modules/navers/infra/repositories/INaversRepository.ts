import Navers from '@modules/navers/infra/typeorm/entities/Navers';
import { IFindNaversDTO, INaversDTO } from '@modules/navers/dtos/INaversDTO';

export default interface INaversRepository {
  create(data: INaversDTO): Promise<Navers>;
  save(naver: Navers): Promise<Navers>;
  update(data: INaversDTO): Promise<Navers>;
  findNaver(data: IFindNaversDTO): Promise<Navers | undefined>;
  index(data: IFindNaversDTO): Promise<Navers[] | undefined>;
  findOneNaver(data: IFindNaversDTO): Promise<Navers | undefined>;
  delete(id: IFindNaversDTO): Promise<void>;
}
