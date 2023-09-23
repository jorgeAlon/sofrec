import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(() => Contacto, (contacto) => contacto.usuario, {
    cascade: true,
    eager: true,
  })
  contacto: Contacto;

  @OneToOne(() => Clave, (clave) => clave.usuario, {
    cascade: true,
  })
  clave: Clave;
}
