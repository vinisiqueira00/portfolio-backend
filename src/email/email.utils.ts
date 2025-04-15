import { ContactModel } from 'src/contact/contact.model';

export class EmailUtils {
  generateContactsEmailHtml(contacts: ContactModel[]) {
    if (contacts.length === 0) {
      return `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2c3e50;">📋 Relatório de Contatos - Dia Anterior</h2>
          <p>Nenhum novo contato realizado ontem!</p>
        </div>
      `;
    }

    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #2c3e50;">📋 Relatório de Contatos - Dia Anterior</h2>
      <p>Segue abaixo a lista de contatos recebidos ontem:</p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px;">Nome</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Empresa</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Contato</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Assunto</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Mensagem</th>
          </tr>
        </thead>
        <tbody>
          ${contacts
            .map(
              (c) => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${c.fullName}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c.companyName || '-'}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c.contact}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c.subject}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c.message}</td>
            </tr>`,
            )
            .join('')}
        </tbody>
      </table>
    </div>
    `;
  }
}
