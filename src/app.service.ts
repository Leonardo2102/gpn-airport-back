import { Injectable } from '@nestjs/common';

import { FlightDTO } from './flight/flight.dto';
import { FlightMapper } from './flight/flight.mapper';
import { FilterBody } from './flight/flightFilterBody';
import { FlightPostgreAdapter } from './flight/FlightPostgreAdapter';

@Injectable()
export class AppService {
  /*Here we use dependency injection to eliminate tho dependency of our code
  to a certain database. Since FlightPosgreAdapter implements an interface,
  if we wanted to use a new database we would create a new adapter, change
  the dependency and everything else would work the same*/
  constructor(
    private postgreRepo: FlightPostgreAdapter,
    private mapper: FlightMapper,
  ) {}
  async getAll(): Promise<FlightDTO[]> {
    return this.postgreRepo.getAll();
  }

  async getFiltered(filtros: FilterBody): Promise<FlightDTO[]> {
    return this.postgreRepo.getFiltered(filtros);
  }
}
