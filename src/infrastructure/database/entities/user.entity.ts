import { IProject } from "src/domain/interface/project.interface";
import { ITask } from "src/domain/interface/task.interface";
import { IUser } from "src/domain/interface/user.interface";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";
import { TaskEntity } from "./task.entity";
import { take } from "rxjs";

@Entity('user')
export class UserEntity implements IUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'firstName', nullable: false})
    firstName: string;

    @Column({ name: 'lastName', nullable: false})
    lastName: string;

    @Column({ name: 'email', nullable: false})
    email: string;

    @Column({ name: 'password', nullable: false})
    password: string;

    @OneToMany(() => ProjectEntity, (project) => project.user)
    projects: IProject[];

    @OneToMany(() => TaskEntity, (task) => task.user)
    tasks: ITask[];
}