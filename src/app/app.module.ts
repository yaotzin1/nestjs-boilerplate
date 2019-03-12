import { Module } from '@nestjs/common';
import { ConfigService } from 'app/service/config.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
