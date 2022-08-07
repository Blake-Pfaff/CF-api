import { Module } from '@nestjs/common';
import { FightersController } from './fighters/fighters.controller';
import { FightersModule } from './fighters/fighters.module';
import { FightersService } from './fighters/fighters.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FightersModule, PrismaModule],
  controllers: [FightersController],
  providers: [FightersService],
})
export class AppModule {}
