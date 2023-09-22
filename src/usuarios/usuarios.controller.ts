import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() CreateUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(CreateUsuarioDto);
  }

  @Get()
  findAll() {
    return 'Ejemplo get';
    // return this.usuariosService.findAll();
  }
}
