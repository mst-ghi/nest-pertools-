import { Global, Module } from '@nestjs/common';

import { PersianToolsService } from './persian-tools.serivce';

@Global()
@Module({
  providers: [PersianToolsService],
  exports: [PersianToolsService],
})
export class PersianToolsModule {}
