"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_service_1 = require("../../../infrastructure/database/repositories/users.repository.service");
const projects_repository_service_1 = require("../../../infrastructure/database/repositories/projects.repository.service");
const tasks_repository_service_1 = require("../../../infrastructure/database/repositories/tasks.repository.service");
let CreateTaskService = class CreateTaskService {
    constructor(usersRepository, projectsRepository, tasksRepository) {
        this.usersRepository = usersRepository;
        this.projectsRepository = projectsRepository;
        this.tasksRepository = tasksRepository;
    }
    async execute(payload) {
        const userData = await this.usersRepository.findById(payload.userId);
        const projectData = await this.projectsRepository.findById(userData.id, payload.task.projectId);
        const createdTask = await this.tasksRepository.add({
            name: payload.task.name,
            status: payload.task.status,
            project: { id: projectData.id },
            user: { id: userData.id }
        });
        if (!createdTask) {
            throw new Error('Erro ao criar tarefa');
        }
        return createdTask;
    }
};
exports.CreateTaskService = CreateTaskService;
exports.CreateTaskService = CreateTaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_service_1.UsersRepositoryService,
        projects_repository_service_1.ProjectsRepositoryService,
        tasks_repository_service_1.TasksRepositoryService])
], CreateTaskService);
//# sourceMappingURL=create-task.service.js.map