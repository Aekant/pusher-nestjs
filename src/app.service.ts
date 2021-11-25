import { Injectable } from '@nestjs/common'
import { PusherService } from './modules/pusher/pusher.service';

@Injectable()
export class AppService {
  constructor(private pusherInstance: PusherService) {

  }
}