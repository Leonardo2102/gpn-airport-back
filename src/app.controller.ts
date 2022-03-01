import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FlightDTO } from './flight/flight.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Promise<FlightDTO[]> {
    return this.appService.getAll();
  }

  @Get('filtered')
  getFiltered(): FlightDTO[] {
    return;
  }
}
