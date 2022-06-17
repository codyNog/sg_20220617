import { Category } from "@my/shared/entities/Category";
import { prisma } from "~/libs/prisma";
import { GetCategoriesQuery } from "@my/shared/api/Category/queries";
import { categoryImplModules } from "~/domain/repositories/Category/modules";

const create = async (category: Category): Promise<Category> => {
  const data = categoryImplModules.createData(category);
  return await prisma.category.create({ data });
};

const getMany = async (param: GetCategoriesQuery): Promise<Category[]> => {
  const where = categoryImplModules.getManyWhere(param);
  return await prisma.category.findMany({ where });
};

const get = async (uid: string): Promise<Category> => {
  const where = categoryImplModules.getWhere(uid);
  const category = await prisma.category.findUnique({ where });
  if (!category) throw 404;

  return category;
};

const update = async (category: Category): Promise<Category> => {
  const data = categoryImplModules.updateData(category);
  const where = categoryImplModules.updateWhere(category);

  return await prisma.category.update({
    data,
    where,
  });
};

const deleteCategory = async (uid: string): Promise<void> => {
  const where = categoryImplModules.deleteWhere(uid);
  await prisma.category.delete({ where });
};

export const CategoryImpl = {
  create,
  getMany,
  get,
  update,
  delete: deleteCategory,
};
