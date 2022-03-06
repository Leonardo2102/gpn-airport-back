import { InjectRepository } from '@nestjs/typeorm';
import { FlightRepo } from 'src/flight/FlightRepo';
import { Repository } from 'typeorm';
import { FlightDTO } from './flight.dto';
import { FlightEntity } from './flight.entity';
import { FlightMapper } from './flight.mapper';
import { FilterBody } from './flightFilterBody';

//This is the implementation for postgresSQL
export class FlightPostgreAdapter implements FlightRepo {
  constructor(
    @InjectRepository(FlightEntity)
    private flightRepository: Repository<FlightEntity>,
    private mapper: FlightMapper,
  ) {}

  async getFiltered(filters: FilterBody): Promise<FlightDTO[]> {
    const formatedDate: Date = this.dateToUtc(new Date(filters.date));
    const flights = await this.flightRepository.find({
      where: {
        origin: filters.origin,
        destination: filters.destination,
        fligthDate: formatedDate,
      },
    });
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }

  async getAll(): Promise<FlightDTO[]> {
    const flights = await this.flightRepository.find();
    return flights.map((flight) => this.mapper.entityToDto(flight));
  }

  //Method avoid timezone errors
  dateToUtc(rawDate: Date): Date {
    const toUTCDate: number = Date.UTC(
      rawDate.getUTCFullYear(),
      rawDate.getUTCMonth(),
      rawDate.getUTCDate(),
      rawDate.getUTCHours(),
      rawDate.getUTCMinutes(),
      rawDate.getUTCSeconds(),
    );
    const formatedDate = new Date(toUTCDate);
    return formatedDate;
  }
}
