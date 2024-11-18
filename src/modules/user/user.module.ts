import { Module } from '@nestjs/common';
import { SupabaseModule } from '../../config/supabase'
import { ManagementController } from './management/management.controller';
import { ManagementService } from './management/management.service';

@Module({
  imports: [SupabaseModule],
  controllers: [ManagementController],
  providers: [ManagementService]
})
export class UserModule {}
