import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from 'src/typeorm/usuario.entity';

@Entity()
export class Contacto {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  contacto: string;

  @Column({
    nullable: false,
    default: '',
  })
  correo: string;
}
