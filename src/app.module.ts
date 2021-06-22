import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from 'nest-router';
import { routes } from './files/routes';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
require('dotenv/config');

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    RouterModule.forRoutes(routes),
    MongooseModule.forRoot(
      `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.khkex.mongodb.net/test`,
    ),
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
