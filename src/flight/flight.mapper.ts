import { Injectable } from '@nestjs/common';
import { FlightDTO } from './flight.dto';
import { FlightEntity } from './flight.entity';

@Injectable()
export class FlightMapper {
  dtoToEntity(flightDTO: FlightDTO): FlightEntity {
    return new FlightEntity(
      flightDTO.id,
      flightDTO.flightNumber,
      flightDTO.origin,
      flightDTO.destination,
      flightDTO.departure,
      flightDTO.arrival,
      flightDTO.price,
      flightDTO.duration,
      flightDTO.freeSeats,
      flightDTO.fligthDate,
    );
  }

  entityToDto(flightEntity: FlightEntity): FlightDTO {
    return new FlightDTO(
      flightEntity.id,
      flightEntity.flightNumber,
      flightEntity.origin,
      flightEntity.destination,
      flightEntity.departure,
      flightEntity.arrival,
      flightEntity.price,
      flightEntity.duration,
      flightEntity.freeSeats,
      flightEntity.fligthDate,
    );
  }
}
