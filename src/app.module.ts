import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailsenderModule } from 'src/mailsender/mailsender.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MailsenderModule,
    UsuariosModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
