import { ApiProperty } from '@nestjs/swagger';

export class FilterBody {
  @ApiProperty()
  readonly origin: string;
  @ApiProperty()
  readonly destination: string;
  @ApiProperty()
  readonly departure: Date;

  constructor(origin: string, destination: string, departure: Date) {
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
  }
}
