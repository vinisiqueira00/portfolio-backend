import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { ContactRepository } from './contact.repository';
import { EmailService } from '../email/email.service';
import { subDays } from 'date-fns';
import { EmailUtils } from 'src/email/email.utils';

@Injectable()
export class ContactService {
  constructor(
    private readonly contactRepository: ContactRepository,
    private readonly emailService: EmailService,
    private readonly emailUtils: EmailUtils,
  ) {}

  @Cron('0 3 * * *')
  async report() {
    const yesterday = subDays(new Date(), 1).toLocaleDateString();

    const contacts = await this.contactRepository.listYesterday();

    const body = this.emailUtils.generateContactsEmailHtml(contacts);

    await this.emailService.sendEmail({
      to: 'vinicius.siqueira642@gmail.com',
      subject: `Relatório de Contatos - ${yesterday}`,
      body,
    });
  }
}
