import { Type } from 'class-transformer';
import { IsNotEmpty, IsEmail , MinLength, MaxLength, IsString, Matches } from '@nestjs/class-validator';

const passwordRegEx = /^[0-9a-zA-Z!@#$%^&*()-_=+[\]{};:'",.<>?/\\|]{10,15}$/i;
export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly contacto?: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly correo: string;

  @IsNotEmpty()
  // @MinLength(10)
  // @MaxLength(15)
  @Matches(passwordRegEx, {
    message: 'Caractere epeciale',
  })
  contrasena: string;

  @IsNotEmpty()
  // @MinLength(10)
  // @MaxLength(15)
  @Matches(passwordRegEx, {
    message: 'Caractere epeciale 3',
  })
  repetirContrasena?: string;
}
