import { Controller, Get } from '@nestjs/common';
import { Fighter } from '@prisma/client';
import { FightersService } from './fighters.service';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fightersService: FightersService) {}
  @Get('all')
  async getAllFighters(): Promise<Fighter[]> {
    return this.fightersService.getAllFighters();
  }
}
