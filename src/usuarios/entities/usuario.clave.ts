import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Clave {
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
  contrasena: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.contacto, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  constructor(contrasena: Partial<Clave>) {
    Object.assign(this, contrasena);
  }
}
