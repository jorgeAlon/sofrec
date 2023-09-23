import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Contacto {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    type: 'text',
    default: 'Zin contacto',
  })
  contacto: string;

  @Column({
    type: 'text',
    nullable: false,
    default: '',
  })
  correo: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.contacto, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
