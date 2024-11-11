import { Module } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Module({
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