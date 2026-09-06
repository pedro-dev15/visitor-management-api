import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // deixa as variáveis disponíveis em qualquer módulo
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
