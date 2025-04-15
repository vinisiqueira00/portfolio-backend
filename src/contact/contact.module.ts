import { Module } from '@nestjs/common';

import { ContactController } from './contact.controller';
import { ContactRepository } from './contact.repository';
import { ContactService } from './contact.service';
import { EmailUtils } from 'src/email/email.utils';

import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [ContactController],
  providers: [ContactRepository, ContactService, EmailUtils],
})
export class ContactModule {}
