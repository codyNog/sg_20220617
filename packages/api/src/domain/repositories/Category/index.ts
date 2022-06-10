import { Category } from "@my/shared/entities/Category";
import { prisma } from "~/libs/prisma";
import { GetCategoriesQuery } from "@my/shared/api/Category/queries";

const create = async (category: Category): Promise<Category> => {};

const getMany = async (param: GetCategoriesQuery): Promise<Category[]> => {};

const get = async (uid: string): Promise<Category> => {};

const update = async (category: Category): Promise<Category> => {};

const deleteCategory = async (uid: string): Promise<void> => {};

export const CategoryImpl = {
  create,
  getMany,
  get,
  update,
  delete: deleteCategory,
};
