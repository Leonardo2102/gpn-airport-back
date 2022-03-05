import { FilterBody } from './flightFilterBody';

export interface FlightRepo {
  getAll();
  getFiltered(filtros: FilterBody);
}
