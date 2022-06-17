import { User } from "@my/shared/entities/User";
import { GetUsersQuery } from "@my/shared/api/User/queries";
import { prismaIncludeQuery } from "~/constants/prisma";
import { prisma } from "~/libs/prisma";
import { userImplModules } from "~/domain/repositories//User/modules";

const include = prismaIncludeQuery.user;

const create = async (user: User): Promise<User> => {
  const data = userImplModules.createData(user);
  const newUser = await prisma.user.create({ data, include });

  return newUser;
};

const getMany = async (query: GetUsersQuery): Promise<User[]> => {
  const where = userImplModules.getManyWhere(query);
  const users = await prisma.user.findMany({ include, where });

  return users;
};

const get = async (uid: string): Promise<User> => {
  const where = userImplModules.getWhere(uid);
  const user = await prisma.user.findUnique({ include, where });

  if (!user) throw 404;

  return user;
};

const update = async (user: User): Promise<User> => {
  const data = userImplModules.updateData(user);
  const where = {};
  const newUser = await prisma.user.update({ data, where, include });

  return newUser;
};

const deleteUser = async (uid: string): Promise<void> => {
  const where = {};
  await prisma.user.delete({ where });
};

export const UserImpl = { create, getMany, get, update, delete: deleteUser };
