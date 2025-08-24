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
exports.GetTaskByIdService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_service_1 = require("../../../infrastructure/database/repositories/users.repository.service");
const tasks_repository_service_1 = require("../../../infrastructure/database/repositories/tasks.repository.service");
let GetTaskByIdService = class GetTaskByIdService {
    constructor(usersRepository, tasksRepository) {
        this.usersRepository = usersRepository;
        this.tasksRepository = tasksRepository;
    }
    async execute(payload) {
        const userData = await this.usersRepository.findById(payload.userId);
        const tasks = await this.tasksRepository.findById(userData.id, payload.taskId);
        if (!tasks) {
            throw new Error('Erro ao listar tarefas');
        }
        return tasks;
    }
};
exports.GetTaskByIdService = GetTaskByIdService;
exports.GetTaskByIdService = GetTaskByIdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_service_1.UsersRepositoryService,
        tasks_repository_service_1.TasksRepositoryService])
], GetTaskByIdService);
//# sourceMappingURL=get-task-by-id.service.js.map