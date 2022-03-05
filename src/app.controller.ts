import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FlightDTO } from './flight/flight.dto';
import { FilterBody } from './flight/flightFilterBody';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<FlightDTO[]> {
    return await this.appService.getAll();
  }

  @Get('filter/:origin/:destination/:date')
  async getFiltered(
    @Param('origin') origin: string,
    @Param('destination') destination: string,
    @Param('date') date: Date,
  ): Promise<FlightDTO[]> {
    const filtros: FilterBody = new FilterBody(origin, destination, date);
    return this.appService.getFiltered(filtros);
  }
}
