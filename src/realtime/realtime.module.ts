import { Module } from '@nestjs/common';
import { RealtimeGateway } from './realtime.gateway';
import { RealtimeController } from './realtime.controller';
import { RealtimeService } from './realtime.service';

@Module({
providers: [RealtimeGateway, RealtimeService],
controllers: [RealtimeController]
})
export class RealtimeModule {}
