import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SupabaseModule } from './supabase/supabase.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SupabaseModule,
    ContactModule,
  ],
})
export class AppModule {}
