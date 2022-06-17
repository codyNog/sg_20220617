import { GetUsersQuery } from "@my/shared/api/User/queries";
import { User } from "@my/shared/entities/User";
import { Prisma } from "@prisma/client";

const createData = (user: User): Prisma.UserUncheckedCreateInput => {
  const { uid: _, posts, profile, ...rest } = user;

  const input: Prisma.UserUncheckedCreateInput = {
    ...rest,
    profile: { create: profile || undefined },
    posts: { create: posts.map((elem) => elem) },
  };

  return input;
};

const getManyWhere = (query: GetUsersQuery): Prisma.UserWhereInput => {
  return query;
};

const getWhere = (uid: string): Prisma.UserWhereUniqueInput => {
  return { uid };
};

const updateData = (user: User): Prisma.UserUncheckedUpdateInput => {
  const { posts, profile, ...rest } = user;

  const input: Prisma.UserUncheckedUpdateInput = {
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
