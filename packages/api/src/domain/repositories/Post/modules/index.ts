import { Prisma } from "@prisma/client";
import { Post } from "@my/shared/entities/Post";
import { GetPostsQuery } from "@my/shared/api/Post/queries";

const createData = (post: Post): Prisma.PostCreateInput => {
  const { uid: _, categories, ...rest } = post;

  return {
    ...rest,
    categories: { connect: categories.map(({ uid }) => ({ uid })) },
    author: { connect: { uid: rest.authorId } },
  };
};

const getManyWhere = (query: GetPostsQuery): Prisma.PostWhereInput => {
  return query;
};

const getWhere = (uid: string): Prisma.PostWhereUniqueInput => {
  return { uid };
};

const updateData = (post: Post): Prisma.PostUpdateInput => {
  const { categories, ...rest } = post;

  return {
    ...rest,
    categories: { connect: categories.map(({ uid }) => ({ uid })) },
  };
};

const updateWhere = (post: Post): Prisma.PostWhereUniqueInput => {
  return { uid: post.uid };
};

const deleteWhere = (uid: string): Prisma.PostWhereUniqueInput => {
  return { uid };
};

export const postImplModules = {
  createData,
  getManyWhere,
  getWhere,
  updateData,
  updateWhere,
  deleteWhere,
};
