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
    const data: CreateUsuarioDto = { ...createUsuarioDto };
    console.log('This action adds a new usuario', { data });
    try {
      const nuevoUzuario = this.uzerRepository.create({
        ...data,
        contacto: this.contactoRepository.create(data),
        clave: this.claveRepository.create(data),
      });
      await this.uzerRepository.save(nuevoUzuario);
      const correoEnviado = this.mailService.enviarEmailusuarioNuevo(
        { nombre: data.nombre },
        { correo: data.correo },
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
