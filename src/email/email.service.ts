import { Resend } from 'resend';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  // constructor(private mailerService: MailerService) {}

  // async sendEmail(subject: string, body: string, to: string) {
  //   console.log('#TESTE_2', subject, body, to);

  //   const result = await this.mailerService.sendMail({
  //     to,
  //     from: 'onboarding@resend.dev',
  //     subject,
  //     text: body,
  //   });

  //   console.log('#TESTE_3', result);
  // }

  async sendEmail(props: { to: string; subject: string; body: string }) {
    try {
      console.log('#TESTE_2', props);

      const result = await this.resend.emails.send({
        from: process.env.RESEND_FROM,
        to: props.to,
        subject: props.subject,
        html: props.body,
      });

      console.log('#TESTE_3', result);

      return result;
    } catch (err) {
      console.error(err.message);
    }
  }
}
