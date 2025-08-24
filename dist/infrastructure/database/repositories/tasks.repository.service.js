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
exports.TasksRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../entities/task.entity");
let TasksRepositoryService = class TasksRepositoryService extends typeorm_1.Repository {
    constructor(dataSource) {
        super(task_entity_1.TaskEntity, dataSource.createEntityManager());
    }
    findAll(userId) {
        return this.findBy({ user: { id: userId } });
    }
    findById(userId, id) {
        return this.findOneBy({ id, user: { id: userId } });
    }
    add(payload) {
        return this.save(payload);
    }
    updateById(id, payload) {
        return this.update(id, payload);
    }
};
exports.TasksRepositoryService = TasksRepositoryService;
exports.TasksRepositoryService = TasksRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TasksRepositoryService);
//# sourceMappingURL=tasks.repository.service.js.map