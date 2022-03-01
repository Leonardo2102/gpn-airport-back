import { InjectRepository } from '@nestjs/typeorm';
import { FlightRepo } from 'src/flight/FlightRepo';
import { Repository } from 'typeorm';
import { FlightDTO } from './flight.dto';
import { FlightEntity } from './flight.entity';
import { FlightMapper } from './flight.mapper';

export class FlightPostgreAdapter implements FlightRepo {
  constructor(
    @InjectRepository(FlightEntity)
    private flightRepository: Repository<FlightEntity>,
    private mapper: FlightMapper,
  ) {}

  async getAll(): Promise<FlightDTO[]> {
    const flights = await this.flightRepository.find();
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }
}
