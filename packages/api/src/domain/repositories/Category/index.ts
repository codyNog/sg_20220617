import { Category } from "@my/shared/entities/Category";
import { prisma } from "~/libs/prisma";
import { GetCategoriesQuery } from "@my/shared/api/Category/queries";

const create = async (category: Category): Promise<Category> => {
  return await prisma.category.create({ data: category });
};

const getMany = async (param: GetCategoriesQuery): Promise<Category[]> => {
  return await prisma.category.findMany({ where: param });
};

const get = async (uid: string): Promise<Category> => {
  const category = await prisma.category.findUnique({ where: { uid } });

  if (!category) throw 404;

  return category;
};

const update = async (category: Category): Promise<Category> => {
  const newCategory = await prisma.category.update({
    data: category,
    where: { uid: category.uid },
  });

  return newCategory;
};

const deleteCategory = async (uid: string): Promise<void> => {
  await prisma.category.delete({ where: { uid } });
};

export const CategoryImpl = {
  create,
  getMany,
  get,
  update,
  delete: deleteCategory,
};
