import { User } from "@my/shared/entities/User";
import { GetUsersQuery } from "@my/shared/api/User/queries";
import { prismaIncludeQuery } from "~/constants/prisma";
import { prisma } from "~/libs/prisma";

const include = prismaIncludeQuery.user;

const create = async (user: User): Promise<User> => {};

const getMany = async (param: GetUsersQuery): Promise<User[]> => {};

const get = async (uid: string): Promise<User> => {};

const update = async (user: User): Promise<User> => {};

const deleteUser = async (uid: string): Promise<void> => {};

export const UserImpl = { create, getMany, get, update, delete: deleteUser };
