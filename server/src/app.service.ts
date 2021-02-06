import { Injectable } from '@nestjs/common';
import { hello } from '@shared/hello'

@Injectable()
export class AppService {
  getHello(): string {
    return hello()
  }
}
