import { Module } from '@nestjs/common';
import { GetAllProjectsService } from './get-all-projects.service';
import { GetProjectsByIdService } from './get-projects-by-id.service';
import { CreateProjectService } from './create-project.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GetAllProjectsService, GetProjectsByIdService, CreateProjectService],
  exports:[GetAllProjectsService, GetProjectsByIdService, CreateProjectService]
})
export class ProjectsModule {}
