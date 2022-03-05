import { InjectRepository } from '@nestjs/typeorm';
import { FlightRepo } from 'src/flight/FlightRepo';
import { Between, LessThan, MoreThanOrEqual, Repository } from 'typeorm';
import { FlightDTO } from './flight.dto';
import { FlightEntity } from './flight.entity';
import { FlightMapper } from './flight.mapper';
import { FilterBody } from './flightFilterBody';

export class FlightPostgreAdapter implements FlightRepo {
  constructor(
    @InjectRepository(FlightEntity)
    private flightRepository: Repository<FlightEntity>,
    private mapper: FlightMapper,
  ) {}

  async getFiltered(filtros: FilterBody): Promise<FlightDTO[]> {
    const flights = await this.flightRepository.find({
      where: {
        origin: filtros.origin,
        destination: filtros.destination,
        fligthDate: filtros.date,
      },
    });
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }

  async getAll(): Promise<FlightDTO[]> {
    const flights = await this.flightRepository.find();
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }
}
