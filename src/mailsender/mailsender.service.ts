import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
// import { Contacto } from '../usuarios/entities/usuario.contacto';
// import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class MailsenderService {
  constructor(private mailerSenderService: MailerService) {}
  async enviarEmailusuarioNuevo(customer, contacto) {
    return await this.mailerSenderService.sendMail({
      to: contacto.correo,
      subject: 'Registro exitoso de usuario',
      template: './newcontact.hbs',
      context: {
        nombre: customer.nombre,
        correo: contacto.correo,
      },
    });
  }
}
