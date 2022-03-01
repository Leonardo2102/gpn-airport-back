import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightPostgreAdapter } from './flight/FlightPostgreAdapter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightMapper } from './flight/flight.mapper';
import { FlightEntity } from './flight/flight.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC,
    }),
    TypeOrmModule.forFeature([FlightEntity]),
  ],
  controllers: [AppController],
  providers: [AppService, FlightPostgreAdapter, FlightMapper],
})
export class AppModule {}
