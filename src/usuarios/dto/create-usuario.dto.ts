import { Type } from 'class-transformer';
import { IsNotEmpty, IsEmail , MinLength, MaxLength, IsString } from '@nestjs/class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly contacto: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly correo: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(15)
  readonly contrasena: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(15)
  readonly repetirContrasena?: string;
}
