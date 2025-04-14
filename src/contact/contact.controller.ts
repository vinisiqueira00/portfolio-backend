import { Controller, Post, Body } from '@nestjs/common';

import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() dto: CreateContactDto) {
    console.log('#TESTE_1', dto);

    return this.contactService.createContact(dto);
  }
}
