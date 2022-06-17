import { Post } from "@my/shared/entities/Post";
import { prismaIncludeQuery } from "~/constants/prisma";
import { GetPostsQuery } from "@my/shared/api/Post/queries";
import { prisma } from "~/libs/prisma";
import { postImplModules } from "~/domain/repositories/Post/modules";

const include = prismaIncludeQuery.post;

const create = async (post: Post): Promise<Post> => {
  const data = postImplModules.createData(post);
  return await prisma.post.create({ data, include });
};

const getMany = async (query: GetPostsQuery): Promise<Post[]> => {
  return await prisma.post.findMany({ where: query, include });
};

const get = async (uid: string): Promise<Post> => {
  const where = postImplModules.getWhere(uid);
  const post = await prisma.post.findUnique({ where, include });

  if (!post) throw 404;

  return post;
};

const update = async (post: Post): Promise<Post> => {
  const data = postImplModules.updateData(post);
  const where = postImplModules.updateWhere(post);
  const newPost = await prisma.post.update({ data, where, include });

  return newPost;
};

const deletePost = async (uid: string): Promise<void> => {
  const where = postImplModules.deleteWhere(uid);
  await prisma.post.delete({ where });
};

export const PostImpl = { create, getMany, get, update, delete: deletePost };
