"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersModule = void 0;
const common_1 = require("@nestjs/common");
const projects_controller_1 = require("./projects/projects.controller");
const tasks_controller_1 = require("./tasks/tasks.controller");
const users_controller_1 = require("./users/users.controller");
const use_cases_module_1 = require("../../domain/use-cases/use-cases.module");
let ControllersModule = class ControllersModule {
};
exports.ControllersModule = ControllersModule;
exports.ControllersModule = ControllersModule = __decorate([
    (0, common_1.Module)({
        imports: [use_cases_module_1.UseCasesModule],
        controllers: [projects_controller_1.ProjectsController, tasks_controller_1.TasksController, users_controller_1.UsersController]
    })
], ControllersModule);
//# sourceMappingURL=controllers.module.js.map