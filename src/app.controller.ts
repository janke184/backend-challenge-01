import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Health')
export class AppController {

    @Get('/health')
    async healthCheck(): Promise<any>{
        return {
            status: true
        };
    }

}
