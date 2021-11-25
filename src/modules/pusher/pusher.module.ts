import { Module, DynamicModule, Global } from '@nestjs/common'
import { Options as PusherConfigOptions } from 'pusher'
import { PusherService } from './pusher.service'

@Global()
@Module({})
export class PusherModule {
  static forRoot(options: PusherConfigOptions): DynamicModule {
    return {
      module: PusherModule,
      providers: [
        {
          provide: 'PUSHER_CONFIG_OPTIONS',
          useValue: options
        },
        PusherService
      ],
      exports: [PusherService]
    }
  }
}