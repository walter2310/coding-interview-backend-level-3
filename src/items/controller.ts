import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi'
import { PrismaClient } from '@prisma/client'
import { validateItem } from './validators/item.validator';
import { Item } from './interfaces/item.interface';

const prisma = new PrismaClient()

export const listAllItems = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const items = await prisma.item.findMany({
            select: {
                id: true,
                name: true,
                price: true
            }
        });

        return h.response(items).code(200)

    } catch (error) {
        return h.response({ message: 'Error fetching items' }).code(500)
    }
}

export const createItem = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const { name, price } = request.payload as Item;
        const errors = validateItem(request.payload as Partial<Item>);

        if (errors.length > 0) return h.response({ errors }).code(400);

        // Validar el item utilizando el validador
        const validationErrors = validateItem({ name, price });

        if (validationErrors.length > 0) {
            return h.response({
                error: 'Bad Request',
                message: 'Invalid request payload input',
                statusCode: 400,
                errors: validationErrors,
            }).code(400);
        }

        const newItem = await prisma.item.create({
            data: {
                name,
                price,
            }
        });

        return h.response(newItem).code(201);

    } catch (error) {
        return h.response({ message: 'Error creating the item' }).code(500);
    }
};

export const fetchItemById = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const itemId = request.params.id;

        const fetchItemById = await prisma.item.findUnique({
            where: { id: Number(itemId) },
            select: {
                id: true,
                name: true,
                price: true
            }
        });

        if(!fetchItemById) {
            return h.response({ message: `Not found item with id: ${itemId}`}).code(404);
        }

        return h.response(fetchItemById).code(200)

    } catch (error) {
        return h.response({ message: 'Error fetching the item' }).code(500);
    }
}

export const updateItemById = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const itemId = request.params.id;
        const { name, price } = request.payload as Item;
        const errors = validateItem(request.payload as Partial<Item>);

        if (errors.length > 0) return h.response({ errors }).code(400);

        const fetchItemById = await prisma.item.findUnique({
            where: { id: Number(itemId) }
        });

        if(!fetchItemById) {
            return h.response({ message: `Not found item with id: ${itemId}`}).code(404);
        }

        const validationErrors = validateItem({ name, price });

        if (validationErrors.length > 0) {
            return h.response({
                error: 'Bad Request',
                message: 'Invalid request payload input',
                statusCode: 400,
                errors: validationErrors,
            }).code(400);
        }

        const updatedItem = await prisma.item.update({
            where: { id: Number(itemId) },
            data: {
                name,
                price
            }
        });

        return h.response(updatedItem).code(200);

    } catch (error) {
        return h.response({ message: 'Error updating the item' }).code(500);
    }
}

export const deleteItemById= async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const itemId = request.params.id;

        const fetchItemById = await prisma.item.findUnique({
            where: { id: Number(itemId) }
        });

        if(!fetchItemById) {
            return h.response({ message: `Not found item with id: ${itemId}`}).code(404);
        }

        await prisma.item.delete({
            where: { id: Number(itemId) }
        })

        return h.response().code(204)

    } catch (error) {
        return h.response({ message: 'Error deleting the item' }).code(500);
    }
}

