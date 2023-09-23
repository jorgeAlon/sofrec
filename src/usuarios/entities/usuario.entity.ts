import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contacto } from './usuario.contacto';
import { Clave } from './usuario.clave';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    type: 'text',
    default: '',
  })
  nombre: string;

  @OneToMany(() => Contacto, (contacto) => contacto.usuario, {
    cascade: true,
    eager: true,
  })
  contacto?: Contacto;

  @OneToMany(() => Clave, (clave) => clave.usuario, {
    cascade: true,
    eager: true,
  })
  clave?: Clave;

  constructor(usuario: Partial<Usuario>) {
    Object.assign(this, usuario);
  }
}
