import { Injectable } from '@nestjs/common';
import { MailsenderService } from 'src/mailsender/mailsender.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Contacto } from './entities/usuario.contacto';
import { Clave } from './entities/usuario.clave';

@Injectable()
export class UsuariosService {
  constructor(private mailService: MailsenderService) {}
  create(createUsuarioDto: CreateUsuarioDto) {
    const data: CreateUsuarioDto = { ...createUsuarioDto };
    console.log('This action adds a new usuario', { data });
    const correoEnviado = this.mailService.enviarEmailusuarioNuevo({nombre: "Jore tenorio"},{correo: "alonsojorget@gmail.com" });
    console.log({ correoEnviado });
    return { ...data };
  }
}
