import { InjectRepository } from '@nestjs/typeorm';
import { FlightRepo } from 'src/flight/FlightRepo';
import { Between, MoreThanOrEqual, Repository } from 'typeorm';
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
    const fechaInicio: Date = new Date(filtros.departure);
    fechaInicio.setHours(0, 0, 0);
    const fechafin: Date = new Date(fechaInicio);
    fechafin.setDate(fechafin.getDate() + 1);
    console.log(fechaInicio);
    console.log(fechafin);
    const flights = await this.flightRepository.find({
      where: {
        origin: filtros.origin,
        destination: filtros.destination,
        departure: Between(fechaInicio.toISOString(), fechafin.toISOString()),
      },
    });
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }

  async getAll(): Promise<FlightDTO[]> {
    const flights = await this.flightRepository.find();
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }
}
