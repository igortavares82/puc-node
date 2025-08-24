import { IProject } from "src/domain/interface/project.interface";
import { ITask } from "src/domain/interface/task.interface";
import { IUser } from "src/domain/interface/user.interface";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";
import { UserEntity } from "./user.entity";

@Entity('project')
export class ProjectEntity implements IProject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false})
    name: string;

    @Column({ name: 'description', nullable: false})
    description: string;
    
    @ManyToOne(() => UserEntity, (user) => user.tasks)
    @JoinColumn()
    user: IUser;

    @OneToMany(() => TaskEntity, (task) => task.project)
    tasks: ITask[];
}