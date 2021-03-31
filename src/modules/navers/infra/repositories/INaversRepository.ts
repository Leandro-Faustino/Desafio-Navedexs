import Navers from '@modules/navers/infra/typeorm/entities/Navers';
import { IFilterNavers, INaversDTO } from '@modules/navers/dtos/INaversDTO';

export default interface INaversRepository {
  create(data: INaversDTO): Promise<Navers>;
  save(naver: Navers): Promise<Navers>;
  index(data: IFilterNavers): Promise<Navers[] | undefined>;
}
