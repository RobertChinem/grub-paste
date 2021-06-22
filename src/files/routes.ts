import { Routes } from 'nest-router';
import { FilesModule } from './files.module';

export const routes: Routes = [
  {
    path: '/api',
    module: FilesModule,
  },
];
