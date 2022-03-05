import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('flight')
export class FlightEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  @Column()
  readonly flightNumber: string;
  @Column()
  readonly origin: string;
  @Column()
  readonly destination: string;
  @Column()
  readonly departure: Date;
  @Column()
  readonly arrival: Date;
  @Column()
  readonly price: number;
  @Column()
  readonly duration: string;
  @Column()
  readonly freeSeats: number;
  @Column()
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
