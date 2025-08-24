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
exports.CreateProjectService = void 0;
const common_1 = require("@nestjs/common");
const projects_repository_service_1 = require("../../../infrastructure/database/repositories/projects.repository.service");
const users_repository_service_1 = require("../../../infrastructure/database/repositories/users.repository.service");
let CreateProjectService = class CreateProjectService {
    constructor(projectsRepository, usersRepository) {
        this.projectsRepository = projectsRepository;
        this.usersRepository = usersRepository;
    }
    async execute(payload) {
        const userData = await this.usersRepository.findById(payload.userId);
        const createdProject = await this.projectsRepository.add({
            name: payload.project.name,
            description: payload.project.description,
            user: { id: userData.id }
        });
        if (!createdProject) {
            throw new Error('Erro ao criar projeto');
        }
        return createdProject;
    }
};
exports.CreateProjectService = CreateProjectService;
exports.CreateProjectService = CreateProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [projects_repository_service_1.ProjectsRepositoryService,
        users_repository_service_1.UsersRepositoryService])
], CreateProjectService);
//# sourceMappingURL=create-project.service.js.map