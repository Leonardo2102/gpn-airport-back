import { ApiProperty } from '@nestjs/swagger';

export class FlightDTO {
  @ApiProperty()
  readonly id?: string;
  @ApiProperty()
  readonly flightNumber: string;
  @ApiProperty()
  readonly origin: string;
  @ApiProperty()
  readonly destination: string;
  @ApiProperty()
  readonly departure: Date;
  @ApiProperty()
  readonly arrival: Date;
  @ApiProperty()
  readonly price: number;
  @ApiProperty()
  readonly duration: string;
  @ApiProperty()
  readonly freeSeats: number;
  @ApiProperty()
  readonly fligthDate: Date;

  constructor(
    id: string,
    flightNumber: string,
    origin: string,
    destination: string,
    departure: Date,
    arrival: Date,
    price: number,
    duration: string,
    freeSeats: number,
    flightDate: Date,
  ) {
    this.id = id;
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
    this.arrival = arrival;
    this.price = price;
    this.duration = duration;
    this.freeSeats = freeSeats;
    this.fligthDate = flightDate;
  }
}
