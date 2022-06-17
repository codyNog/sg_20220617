import { GetUsersQuery } from "@my/shared/api/User/queries";
import { User } from "@my/shared/entities/User";
import { Prisma } from "@prisma/client";

const createData = (user: User): Prisma.UserCreateInput => {
  const { uid: _, posts: __, profile, ...rest } = user;

  const input: Prisma.UserCreateInput = {
    ...rest,
    profile: { create: profile || undefined },
  };

  return input;
};

const getManyWhere = (query: GetUsersQuery): Prisma.UserWhereInput => {
  return query;
};

const getWhere = (uid: string): Prisma.UserWhereUniqueInput => {
  return { uid };
};

const updateData = (user: User): Prisma.UserUpdateInput => {
  const { posts, profile, ...rest } = user;

  const input: Prisma.UserUpdateInput = {
    ...rest,
    profile: { connect: profile || undefined },
    posts: { connect: posts.map(({ uid }) => ({ uid })) },
  };

  return input;
};

export const userImplModules = {
  createData,
  getManyWhere,
  getWhere,
  updateData,
};
