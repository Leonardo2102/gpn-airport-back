import { ApiProperty } from '@nestjs/swagger';
//This class will allow us to add new filters without having to make a lot of changes in our code
export class FilterBody {
  @ApiProperty()
  readonly origin: string;
  @ApiProperty()
  readonly destination: string;
  @ApiProperty()
  readonly date: Date;

  constructor(origin: string, destination: string, departure: Date) {
    this.origin = origin;
    this.destination = destination;
    this.date = departure;
  }
}
