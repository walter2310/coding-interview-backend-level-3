import { item, PrismaClient } from "@prisma/client";
import { CreateItem, UpdateItem } from "./interfaces";

const prisma = new PrismaClient();

export const getItems = async (): Promise<item[]> => {
  return prisma.item.findMany();
};

export const getItemById = async (id: number): Promise<item | null> => {
  return prisma.item.findUnique({ where: { id } });
};

export const createItem = async (data: CreateItem): Promise<item> => {
  if (data.price < 0) {
    throw new Error("Price cannot be negative");
  }

  return prisma.item.create({ data });
};

export const updateItem = async (
  id: number,
  data: UpdateItem
): Promise<item> => {

  if (data.price && data.price < 0) {
    throw new Error("Price cannot be negative");
  }
  return prisma.item.update({ where: { id }, data });
};

export const deleteItem = async (id: number): Promise<void> => {
  await prisma.item.delete({ where: { id } });
};
