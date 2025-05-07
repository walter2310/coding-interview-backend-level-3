import { CreateItem, UpdateItem } from "./interfaces";
import {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "./model";

import { Request, ResponseToolkit } from "@hapi/hapi";
import { NotFoundError } from "../lib/errors";
import { handleError } from "../lib/error-handler";

export const listItems = async (request: Request, h: ResponseToolkit) => {
  const items = await getItems();
  return h.response(items).code(200);
};

export const getItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const id = parseInt(request.params.id, 10);
    const item = await getItemById(id);

    if (!item) {
      throw new NotFoundError("item");
    }

    return h.response(item).code(200);
  } catch (error) {
    return handleError(error, h);
  }
};

export const createNewItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const item = await createItem(request.payload as CreateItem);

    return h.response(item).code(201);
  } catch (error) {
    return handleError(error, h);
  }
};

export const updateExistingItem = async (
  request: Request,
  h: ResponseToolkit
) => {
  try {
    const id = parseInt(request.params.id, 10);
    const item = await updateItem(id, request.payload as UpdateItem);

    return h.response(item).code(200);
  } catch (error) {
    if (error instanceof Error && error.message.includes("RecordNotFound")) {
      return handleError(new NotFoundError("Item"), h);
    }

    return handleError(error, h);
  }
};

export const deleteExistingItem = async (
  request: Request,
  h: ResponseToolkit
) => {
  try {
    const id = parseInt(request.params.id, 10);
    await deleteItem(id);

    return h.response().code(204);
  } catch (error) {
    if (error instanceof Error && error.message.includes("RecordNotFound")) {
      return handleError(new NotFoundError("Item"), h);
    }

    return handleError(error, h);
  }
};
