import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { AppService } from './app.service';
import { PusherModule } from './modules/pusher/pusher.module';

config()

@Module({
  imports: [
    PusherModule.forRoot({
      appId: process.env.APP_ID,
      key: process.env.APP_KEY,
      secret: process.env.APP_SECRET,
      cluster: process.env.APP_CLUSTER
    })
  ],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}
