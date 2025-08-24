import { DeepPartial } from "typeorm";
import { IUser } from "../interface/user.interface";

export interface IUserRepository {
    findById(id: number): Promise<IUser>;
    add(payload: DeepPartial<IUser>): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
}