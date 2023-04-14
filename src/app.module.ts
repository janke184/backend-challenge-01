import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { AppController } from './app.controller';

@Module({
  imports: [ClientesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
