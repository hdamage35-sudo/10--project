import { Body, Controller, Post } from '@nestjs/common';
import { RealtimeGateway } from './realtime.gateway';

@Controller('realtime')
export class RealtimeController {
    constructor(private readonly gateway: RealtimeGateway) {}

    @Post('send')
    sendMessage(@Body() body: { channel: string; message: string }) {
        const { channel, message } = body;

        this.gateway.sendToChannel(channel, message);

        return {
        ok: true,
        channel,
        message,
        };
    }
}
