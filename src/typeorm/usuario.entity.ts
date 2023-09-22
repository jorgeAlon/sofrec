import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clave } from 'src/typeorm/clave.entity';
import { Contacto } from 'src/typeorm/contacto.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  nombre: string;

  @OneToOne(() => Clave, (clave: Clave) => clave.cliente_id)
  clave: number;

  @OneToOne(() => Contacto, (contacto: Contacto) => contacto.id)
  cliente_id: number;
}
