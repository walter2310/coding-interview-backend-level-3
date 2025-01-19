import { Server } from "@hapi/hapi"
import { createItem, deleteItemById, fetchItemById, listAllItems, updateItemById } from './controller'

export const defineItemRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/items',
        handler: listAllItems
    })

    server.route({
        method: 'POST',
        path: '/items',
        handler: createItem,
    })

    server.route({
        method: 'GET',
        path: '/items/{id}',
        handler: fetchItemById,
    })

    server.route({
        method: 'PUT',
        path: '/items/{id}',
        handler: updateItemById,
    })

    server.route({
        method: 'DELETE',
        path: '/items/{id}',
        handler: deleteItemById,
    })
}
