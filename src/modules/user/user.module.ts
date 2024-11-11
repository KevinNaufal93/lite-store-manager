import { Module } from '@nestjs/common';
import { ManagementController } from './management/management.controller';
import { ManagementService } from './management/management.service';

@Module({
  controllers: [ManagementController],
  providers: [ManagementService]
})
export class UserModule {}
