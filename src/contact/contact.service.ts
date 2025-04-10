import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @Inject('SUPABASE_CLIENT')
    private readonly supabase: SupabaseClient,
  ) {}

  async createContact(dto: CreateContactDto) {
    const { data, error } = await this.supabase.from('contacts').insert([
      {
        message: dto.message,
        created_at: new Date().toISOString(),
      },
    ]);

    console.log(error);

    if (error) throw error;

    return data;
  }
}
