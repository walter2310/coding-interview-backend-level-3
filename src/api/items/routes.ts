import { Server } from '@hapi/hapi';
import {
    listItems,
    getItem,
    createNewItem,
    updateExistingItem,
    deleteExistingItem
} from './controller';
import {
    itemQuerySchema,
    itemCreateSchema,
    itemUpdateSchema,
    itemIdSchema,
} from './validations';
import { validationErrorHandler } from './validations/handler';

export const defineItemRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/items',
        handler: listItems,
        options: { validate: { query: itemQuerySchema } }
    });

    server.route({
        method: 'POST',
        path: '/items',
        handler: createNewItem,
        options: {
            validate: {
                payload: itemCreateSchema,
                failAction: validationErrorHandler
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/items/{id}',
        handler: getItem,
        options: { validate: { params: itemIdSchema } }
    });

    server.route({
        method: 'PUT',
        path: '/items/{id}',
        handler: updateExistingItem,
        options: {
            validate: {
                params: itemIdSchema,
                payload: itemUpdateSchema,
                failAction: validationErrorHandler
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/items/{id}',
        handler: deleteExistingItem,
        options: { validate: { params: itemIdSchema } }
    });
};