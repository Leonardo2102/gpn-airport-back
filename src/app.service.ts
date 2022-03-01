import { Injectable } from '@nestjs/common';
import { FlightDTO } from './flight/flight.dto';
import { FlightMapper } from './flight/flight.mapper';
import { FlightPostgreAdapter } from './flight/FlightPostgreAdapter';

@Injectable()
export class AppService {
  constructor(
    private postgreRepo: FlightPostgreAdapter,
    private mapper: FlightMapper,
  ) {}
  async getAll(): Promise<FlightDTO[]> {
    return this.postgreRepo.getAll();
  }
}
