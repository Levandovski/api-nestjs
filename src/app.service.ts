import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//regras de nogocio
//uteis
//servico é usdao nos constrollers e pode ser usado por outros serviços por meio do decorator
