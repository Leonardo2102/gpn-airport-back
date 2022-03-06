import { FilterBody } from './flightFilterBody';

//This is the interface that promotes loose coupling on our app
export interface FlightRepo {
  getAll();
  getFiltered(filtros: FilterBody);
}
