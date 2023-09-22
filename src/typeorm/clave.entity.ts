import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from 'src/typeorm/usuario.entity';

@Entity()
export class Clave {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @OneToOne(() => Usuario, (usuario: Usuario) => usuario.id)
  cliente_id: number;

  @Column({
    nullable: false,
    default: '',
  })
  clave: string;
}
