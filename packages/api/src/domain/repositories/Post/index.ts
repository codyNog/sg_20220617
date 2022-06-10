import { Post } from "@my/shared/entities/Post";
import { prismaIncludeQuery } from "~/constants/prisma";
import { GetPostsQuery } from "@my/shared/api/Post/queries";

const include = prismaIncludeQuery.post;

const create = async (post: Post): Promise<Post> => {};

const getMany = async (query: GetPostsQuery): Promise<Post[]> => {};

const get = async (uid: string): Promise<Post> => {};

const update = async (post: Post): Promise<Post> => {};

const deletePost = async (uid: string): Promise<void> => {};

export const PostImpl = { create, getMany, get, update, delete: deletePost };
