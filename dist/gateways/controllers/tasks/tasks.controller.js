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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const create_task_service_1 = require("../../../domain/use-cases/tasks/create-task.service");
const get_all_tasks_service_1 = require("../../../domain/use-cases/tasks/get-all-tasks.service");
const get_task_by_id_service_1 = require("../../../domain/use-cases/tasks/get-task-by-id.service");
const create_task_dto_1 = require("./dtos/create-task.dto");
var loggedUser = 1;
let TasksController = class TasksController {
    constructor(getAllTasksUseCase, getTasksByIdUseCase, createTaskUseCase) {
        this.getAllTasksUseCase = getAllTasksUseCase;
        this.getTasksByIdUseCase = getTasksByIdUseCase;
        this.createTaskUseCase = createTaskUseCase;
    }
    findeAll() {
        return this.getAllTasksUseCase.execute({ userId: loggedUser });
    }
    findById(request, taskId) {
        return this.getTasksByIdUseCase.execute({
            taskId: taskId,
            userId: loggedUser
        });
    }
    create(request, createTaskDto) {
        return this.createTaskUseCase.execute({
            task: createTaskDto,
            userId: loggedUser
        });
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findeAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [get_all_tasks_service_1.GetAllTasksService,
        get_task_by_id_service_1.GetTaskByIdService,
        create_task_service_1.CreateTaskService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map