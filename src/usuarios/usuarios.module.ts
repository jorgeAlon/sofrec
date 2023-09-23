import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Clave } from './entities/usuario.clave';
import { Contacto } from './entities/usuario.contacto';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Clave, Contacto])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
