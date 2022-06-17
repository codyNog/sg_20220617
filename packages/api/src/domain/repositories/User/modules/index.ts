import { GetUsersQuery } from "@my/shared/api/User/queries";
import { User } from "@my/shared/entities/User";
import { Prisma } from "@prisma/client";

const createData = (user: User): Prisma.UserUncheckedCreateInput => {
  return user;
};

const getManyWhere = (query: GetUsersQuery): Prisma.UserWhereInput => {
  return query;
};

const getWhere = (uid: string): Prisma.UserWhereUniqueInput => {
  return uid;
};

const updateData = (user: User): Prisma.UserUncheckedUpdateInput => {
  return user;
};

export const userImplModules = {
  createData,
  getManyWhere,
  getWhere,
  updateData,
};
