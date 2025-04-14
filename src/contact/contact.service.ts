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
    try {
      const { data, error } = await this.supabase.from('contacts').insert([
        {
          full_name: dto.fullName,
          company_name: dto.companyName,
          contact: dto.contact,
          subject: dto.subject,
          message: dto.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
