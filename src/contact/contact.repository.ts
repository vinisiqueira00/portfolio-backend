import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { subDays, startOfDay, endOfDay } from 'date-fns';

import { ContactModel } from './contact.model';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactRepository {
  constructor(
    @Inject('SUPABASE_CLIENT')
    private readonly supabase: SupabaseClient,
  ) {}

  async create(dto: CreateContactDto) {
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

  async listYesterday() {
    try {
      const yesterday = subDays(new Date(), 1);
      const from = startOfDay(yesterday).toISOString();
      const to = endOfDay(yesterday).toISOString();

      const { data, error } = await this.supabase
        .from('contacts')
        .select('*')
        .gte('created_at', from)
        .lte('created_at', to);

      if (error) throw error;

      const contacts = data.map((contact) => {
        return new ContactModel({
          id: contact.id,
          fullName: contact.full_name,
          companyName: contact.company_name,
          contact: contact.contact,
          subject: contact.subject,
          message: contact.message,
          createdAt: new Date(contact.created_at),
        });
      });

      return contacts;
    } catch (err) {
      console.error(err);
    }
  }
}
