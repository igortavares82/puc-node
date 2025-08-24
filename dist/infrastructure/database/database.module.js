"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const projects_repository_service_1 = require("./repositories/projects.repository.service");
const tasks_repository_service_1 = require("./repositories/tasks.repository.service");
const users_repository_service_1 = require("./repositories/users.repository.service");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./entities/task.entity");
const project_entity_1 = require("./entities/project.entity");
const user_entity_1 = require("./entities/user.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([task_entity_1.TaskEntity, project_entity_1.ProjectEntity, user_entity_1.UserEntity]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db/sql.sqlite',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
                autoLoadEntities: true
            })
        ],
        providers: [
            projects_repository_service_1.ProjectsRepositoryService,
            tasks_repository_service_1.TasksRepositoryService,
            users_repository_service_1.UsersRepositoryService
        ],
        exports: [
            projects_repository_service_1.ProjectsRepositoryService,
            tasks_repository_service_1.TasksRepositoryService,
            users_repository_service_1.UsersRepositoryService
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map