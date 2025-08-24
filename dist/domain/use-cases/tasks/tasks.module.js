"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const get_all_tasks_service_1 = require("./get-all-tasks.service");
const get_task_by_id_service_1 = require("./get-task-by-id.service");
const create_task_service_1 = require("./create-task.service");
const update_task_service_1 = require("./update-task.service");
const database_module_1 = require("../../../infrastructure/database/database.module");
let TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule;
exports.TasksModule = TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [get_all_tasks_service_1.GetAllTasksService, get_task_by_id_service_1.GetTaskByIdService, create_task_service_1.CreateTaskService, update_task_service_1.UpdateTaskService],
        exports: [get_all_tasks_service_1.GetAllTasksService, get_task_by_id_service_1.GetTaskByIdService, create_task_service_1.CreateTaskService, update_task_service_1.UpdateTaskService]
    })
], TasksModule);
//# sourceMappingURL=tasks.module.js.map