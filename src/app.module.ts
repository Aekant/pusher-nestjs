import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PusherModule } from './modules/pusher/pusher.module';

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
