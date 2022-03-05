import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post('filter')
  async getFiltered(@Body() filtros: FilterBody): Promise<FlightDTO[]> {
    return this.appService.getFiltered(filtros);
  }
}
