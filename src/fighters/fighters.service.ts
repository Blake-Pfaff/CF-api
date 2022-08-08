import { Injectable } from '@nestjs/common';
import { Fighter } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FightersService {
  constructor(private prisma: PrismaService) {}
  async getAllFighters(): Promise<Fighter[]> {
    return this.prisma.fighter.findMany();
  }
}
