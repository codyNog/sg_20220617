import { GetCategoriesParameter } from "@my/shared/front/repositories/Category/types";
import { Prisma } from "@prisma/client";
import { Category } from "@my/shared/entities/Category";

const createData = (category: Category): Prisma.CategoryCreateInput => {
  return category;
};

const getManyWhere = (param: GetCategoriesParameter) => {
  return param;
};

const getWhere = (uid: string): Prisma.CategoryWhereUniqueInput => {
  return { uid };
};

const updateData = (category: Category) => {
  return category;
};

const updateWhere = (category: Category) => {
  const { uid } = category;
  return { uid };
};

const deleteWhere = (uid: string) => {
  return { uid };
};

export const categoryImplModules = {
  createData,
  getManyWhere,
  getWhere,
  updateData,
  updateWhere,
  deleteWhere,
};
