import { Controller, Post, Body } from '@nestjs/common';

import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() dto: CreateContactDto) {
    if (dto.message.trim().length === 0) return;

    return this.contactService.createContact(dto);
  }
}
