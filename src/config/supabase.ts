import { Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import {ConfigModule} from '../config/configModule';
import {ConfigService} from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useFactory: (configService: ConfigService) => {
        return createClient(
          configService.get<string>('SUPABASE_URL'),
          configService.get<string>('SUPABASE_ANON_KEY')
        );
      },
      inject: [ConfigService]
    }
  ],
  exports: ['SUPABASE_CLIENT']
})
export class SupabaseModule {}