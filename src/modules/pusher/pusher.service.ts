import { Inject, Injectable } from '@nestjs/common'
import Pusher, { Options as PusherConfigOptions } from 'pusher'

@Injectable()
export class PusherService extends Pusher {
  constructor(@Inject('PUSHER_CONFIG_OPTIONS') options: PusherConfigOptions) {
    super(options)
  }
}