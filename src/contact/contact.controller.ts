import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreateContactDto } from './dto/create-contact.dto';
import { ContactRepository } from './contact.repository';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactRepository: ContactRepository,
    private readonly contactService: ContactService,
  ) {}

  @Post()
  async create(@Body() newContact: CreateContactDto) {
    return this.contactRepository.create(newContact);
  }

  @Get()
  async report() {
    return this.contactService.report();
  }
}
