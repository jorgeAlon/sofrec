import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { MailsenderService } from 'src/mailsender/mailsender.service';

import { CreateUsuarioDto } from './dto/create-usuario.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';
import { Contacto } from './entities/usuario.contacto';
import { Clave } from './entities/usuario.clave';

@Injectable()
export class UsuariosService {
  constructor(
    private mailService: MailsenderService,

    // private readonly logger = new Logger('ProductsService'),
    @InjectRepository(Usuario)
    private readonly uzerRepository: Repository<Usuario>,
    @InjectRepository(Contacto)
    private readonly contactoRepository: Repository<Contacto>,
    @InjectRepository(Clave)
    private readonly claveRepository: Repository<Clave>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const { nombre, contacto, contrasena, correo } = createUsuarioDto;
    console.log('This action adds a new usuario', [
      nombre,
      contacto,
      contrasena,
      correo,
    ]);
    try {
      const dataToSend = {
        nombre: nombre,
        contacto: this.contactoRepository.create({
          contacto: contacto,
          correo: correo,
        }),
        clave: this.claveRepository.create({ contrasena: contrasena }),
      };
      const nuevoUzuario = this.uzerRepository.create(dataToSend);
      await this.uzerRepository.save(nuevoUzuario);
      const correoEnviado = this.mailService.enviarEmailusuarioNuevo(
        { nombre: nombre },
        { correo: correo },
      );
      console.log({ correoEnviado });
      return { ...nuevoUzuario };
    } catch (e) {
      // this.logger.error(e);
      console.log({ e });
      throw new InternalServerErrorException('Error de Zervidor');
    }
  }
}
